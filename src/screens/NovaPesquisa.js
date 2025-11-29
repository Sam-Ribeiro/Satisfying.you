import { View, TouchableOpacity, Text, TextInput} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useState } from "react";
import InputField from "../components/inputField";
import InputImage from "../components/inputImage";
import { collection, initializeFirestore, addDoc } from "firebase/firestore";
import { app } from "../firebase/config";
import { launchImageLibrary } from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
const NovaPesquisa = (props) =>{

    const [nome, SetNome] = useState('')
    const [data, SetData] = useState('')
    const [image, SetImage] = useState()
    
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})
    const pesquisaCollection = collection(db, "pesquisas")

    const Cadastrar = () =>{
        const pesquisa = {
            nome: nome,
            dataPesquisa: data,
            imagem: image,
            pessimo: 0,
            ruim: 0,
            neutro: 0,
            bom: 0,
            excelente: 0,
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

    const pickImage = () =>{
        launchImageLibrary({mediaType:'photo'},(result) =>{
            convertUriToBase64(result.assets[0].uri)
        })
    }

    const convertUriToBase64 = async (uri) => {

        const resizedImage = await ImageResizer.createResizedImage(
            uri,        // URI da imagem original
            1000,         // Largura
            1000,         // Altura
            'JPEG',     // Formato (pode ser 'JPEG' ou 'PNG')
            50           // Qualidade (0-100)
        );

        const imageUri = await fetch(resizedImage.uri);
        const imagemBlob = await imageUri.blob();

        const reader = new FileReader();
        reader.onloadend = () => {
            SetImage(reader.result);
        };
        reader.readAsDataURL(imagemBlob); // Converte Blob para Base64
    };


    return(
        <View style={globalStyles.formulario}>
            <InputField title='Nome' placeholder="Digite o nome da pesquisa..." value={nome} onChangeText={SetNome} error='Preencha o nome da pesquisa'/>
            <InputField title='Data' placeholder="Digite a data da pesquisa..." value={data} onChangeText={SetData} error='Preencha a data' />
            <InputImage title='Imagem' onPress={pickImage} image={image}/>
            <TouchableOpacity style={globalStyles.button} onPress={Cadastrar}>
                <Text style={globalStyles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NovaPesquisa