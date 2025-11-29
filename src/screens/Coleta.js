import { View, Text, TouchableOpacity } from "react-native";
import { coletaStyles } from "../styles/coletaStyles";
import RatingButton from "../components/ratingButton";
import { app } from "../firebase/config";
import { doc, updateDoc, increment, initializeFirestore } from "firebase/firestore";
import { useSelector } from 'react-redux';

const Coleta = (props) =>{

    const pesquisa = useSelector((state) => state.pesquisa) 
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})

    const GiveFeedback= (feedback) =>{
        props.navigation.navigate('AgradecimentoParticipacao')

        const pesquisaRef = doc(db, "pesquisas", pesquisa.id )
        updateDoc(pesquisaRef, {
            [feedback]: increment(1)
        })
        setTimeout(() => { props.navigation.goBack() }, 3000)
    }
    
    return(
        <View style={coletaStyles.coleta}>
            <Text style={coletaStyles.text}>O que você achou do carnaval 2025?</Text>
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