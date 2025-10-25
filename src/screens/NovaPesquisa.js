import { View, TouchableOpacity, Text, TextInput} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useState } from "react";
import InputField from "../components/inputField";
import InputImage from "../components/inputImage";
import { collection, initializeFirestore, addDoc } from "firebase/firestore";
import { app } from "../firebase/config";

const NovaPesquisa = (props) =>{

    const [nome, SetNome] = useState('')
    const [data, SetData] = useState('')

    const db = initializeFirestore(app, {experimentalForceLongPolling: true})
    const pesquisaCollection = collection(db, "pesquisas")

    const Cadastrar = () =>{
        const pesquisa = {
            nome: nome,
            dataPesquisa: data,
            // imagem: imagem
        }

        addDoc(pesquisaCollection, pesquisa)
            .then((result)=> {
                console.log("Dados inseriros com sucesso: " + JSON.stringify(result))
                props.navigation.navigate('AcoesPesquisa')
            })
            .catch((error)=>{
                console.log("Erro ao inserir dados: " + JSON.stringify(error))
            })
    }

    return(
        <View style={globalStyles.formulario}>
            <InputField title='Nome' placeholder="Digite o nome da pesquisa..." value={nome} onChangeText={SetNome} error='Preencha o nome da pesquisa'/>
            <InputField title='Data' placeholder="Digite a data da pesquisa..." value={data} onChangeText={SetData} error='Preencha a data' />
            <InputImage title='Imagem'/>
            <TouchableOpacity style={globalStyles.button} onPress={Cadastrar}>
                <Text style={globalStyles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NovaPesquisa