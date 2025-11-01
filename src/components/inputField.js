import {Text, StyleSheet, View, TextInput} from "react-native"
const InputField = (props) =>{

    const title = props.title
    const placeholder = props.placeholder
    const value = props.value
    const onChangeText = props.onChangeText
    const error = props.error
    const editable = props.editable

    return(
        <View style={style.InputField}>
            <Text style={style.text}>{title}</Text>
            <TextInput style={style.field} placeholder={placeholder} value={value} onChangeText={onChangeText}/>
            <Text style={style.error}>{error}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    InputField:{
        display: 'flex',
        flexDirection: 'colum',
        alignItems: 'flex-start',
        width: 400,
    },
    text:{
        color: "#ffffffff",
        fontSize: 12,
    },
    field:{
        width: '100%',
        padding: 3,
        backgroundColor: 'white',
    },
    error:{
        fontSize: 10,
        color: '#FD7979'
    },
})

export default InputField