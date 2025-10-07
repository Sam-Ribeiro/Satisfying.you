import { View, TouchableOpacity, Text, TextInput} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useState } from "react";
import InputField from "../components/inputField";
import InputImage from "../components/inputImage";

const NovaPesquisa = (props) =>{

    const [nome, SetNome] = useState('')
    const [data, SetData] = useState('')

    const Cadastrar = () =>{
        props.navigation.navigate('AcoesPesquisa')
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