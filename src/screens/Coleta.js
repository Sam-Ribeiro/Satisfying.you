import { View, Text } from "react-native";
import { coletaStyles } from "../styles/coletaStyles";
import RatingButton from "../components/ratingButton";
import { app } from "../firebase/config";
import { doc, updateDoc, increment, initializeFirestore, getDoc } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reducerSetPesquisa } from '../redux/pesquisaSlice';
const Coleta = (props) =>{

    const pesquisa = useSelector((state) => state.pesquisa) 
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})
     const GiveFeedback = (feedback) =>{
        props.navigation.navigate('AgradecimentoParticipacao')
        const pesquisaRef = doc(db, "pesquisas", pesquisa.id )
        updateDoc(pesquisaRef, {
            [feedback]: increment(1)
        }).then(async () => {
            const snap = await getDoc(pesquisaRef)
            const pesquisaAtualizada = {
                    id: pesquisaRef.id,
                    ...snap.data()
                }
            atualizarPesquisa( pesquisaAtualizada )
        })
        
        setTimeout(() => { props.navigation.goBack() }, 3000)
    }
    
    const dispatch = useDispatch()
    const atualizarPesquisa = (item) =>{
        console.log(item)
        dispatch(
        reducerSetPesquisa({
            id: item.id, 
            nome: item.nome, 
            data: item.dataPesquisa, 
            imagem: item.imagem, 
            pessimo: item.pessimo,
            ruim: item.ruim, 
            neutro: item.neutro, 
            bom: item.bom, 
            excelente: item.excelente})
        )
    }

    return(
        <View style={coletaStyles.coleta}>
            <Text style={coletaStyles.text}>O que você achou do {pesquisa.nome}</Text>
            <View style={coletaStyles.feedback}>
                <RatingButton text="Péssimo" color="red" icon="sentiment-very-dissatisfied" onPress={() => GiveFeedback("pessimo")} />
                <RatingButton text="Ruim" color="orange" icon="sentiment-dissatisfied" onPress={() => GiveFeedback("ruim")}/>
                <RatingButton text="Neutro" color="yellow" icon="sentiment-neutral" onPress={() => GiveFeedback("neutro")}/>
                <RatingButton text="Bom" color="limegreen" icon="sentiment-satisfied-alt" onPress={() => GiveFeedback("bom")}/>
                <RatingButton text="Excelente" color="green" icon="sentiment-very-satisfied" onPress={() => GiveFeedback("excelente")}/>
            </View>
        </View>
    )
}

export default Coleta