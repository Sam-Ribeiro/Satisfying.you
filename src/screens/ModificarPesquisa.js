import { View, TouchableOpacity, Text, Alert} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useState } from "react";
import { doc, updateDoc, initializeFirestore, deleteDoc } from "firebase/firestore";
import { app } from "../firebase/config";

import InputField from "../components/inputField";
import InputImage from "../components/inputImage";
import Icon from 'react-native-vector-icons/MaterialIcons'

const ModificarPesquisa = (props) =>{

    const [pesquisa, SetPesquisa] = useState(props.route.params)
    const [nome, SetNome] = useState(pesquisa.nome)
    const [data, SetData] = useState(pesquisa.dataPesquisa)
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})

    const Editar = () =>{
        const pesquisaRef = doc(db, "pesquisas", pesquisa.id )

        updateDoc(pesquisaRef, {
            nome: nome,
            dataPesquisa: data,
            //imagem: imagem
        })
            .then(() => {
                // atualizou  colocar pesquisa atualizada com sucesso
            })
            .catch((error) =>{
                console.log("Erro: " + error)
            })

    }

    const apagarPesquisa = () =>{
        deleteDoc(doc(db, "pesquisas", pesquisa.id))
        props.navigation.navigate('Pesquisa')
    }

    const Apagar = () =>{
        Alert.alert(
            'Confirmar exclusão',
            'Tem certeza que quer apagar a pesquisa?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: apagarPesquisa() },
            ]
        )
    }

    return(
        <View style={globalStyles.formulario}>
            <InputField title='Nome' placeholder="Digite o nome da pesquisa..." value={nome} onChangeText={SetNome} error='Preencha o nome da pesquisa'/>
            <InputField title='Data' placeholder="Digite a data da pesquisa..." value={data} onChangeText={SetData} error='Preencha a data' />
            <InputImage title='Imagem'/>
            <TouchableOpacity style={globalStyles.deleteButton} onPress={Apagar}>
                <Icon name='delete' size={25} color='#ffffffff' />
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.button} onPress={Editar}>
                <Text style={globalStyles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <View></View>
        </View>
    )
}

export default ModificarPesquisa