import {Text, StyleSheet, View, TextInput, TouchableOpacity, Image} from "react-native"

const InputImage = (props) =>{

    const title = props.title
    const placeholder = props.placeholder
    const value = props.value
    const image = props.image
    const onPress = props.onPress
    return(
        <View style={style.ImageContainer}>
            
            <View style={style.InputField}>
                <Text style={style.text}>{title}</Text>
                <TouchableOpacity style={style.image} onPress={onPress}>
                    <Text style={style.imageText}>Câmera/Galeria de imagens</Text>
                </TouchableOpacity>
            </View>
            <View style={style.ImageDisplay}>
                <Image source={{uri: image}} style={{height: 50 , width: 190}}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    ImageDisplay:{
        
        display: 'flex',
        width: 190,
        height: 50,
        marginTop: 16,
    },
    ImageContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 400,
        marginBottom: 10,
    },
    InputField:{
        display: 'flex',
        flexDirection: 'colum',
        alignItems: 'flex-start',
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
        width: 190,
    },
    imageText:{
        color: '#939393',
        fontSize: 14,
    },
})

export default InputImage