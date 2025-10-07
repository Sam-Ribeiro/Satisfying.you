import {Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native"
const InputImage = (props) =>{

    const title = props.title
    const placeholder = props.placeholder
    const value = props.value

    return(
        <View style={style.InputField}>
            <Text style={style.text}>{title}</Text>
            <TouchableOpacity style={style.image}>
                <Text style={style.imageText}>Câmera/Galeria de imagens</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    InputField:{
        display: 'flex',
        flexDirection: 'colum',
        alignItems: 'flex-start',
        width: '60%',
    },
    text:{
        color: '#ffffffff',
        fontSize: 12,
    },
    field:{
        width: '100%',
        padding: 3,
        backgroundColor: 'white',
    },
    image:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#ffffffff",
        height: 50,
        width: '60%',
        marginBottom: 10
    },
    imageText:{
        color: '#939393',
        fontSize: 14,
    },
})

export default InputImage