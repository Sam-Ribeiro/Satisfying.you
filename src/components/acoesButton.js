import {TouchableOpacity, Text, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

const AcoesButton = (props) =>{

    const text = props.text
    const icon = props.icon
    const onPress = props.onPress
    
    return(
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Icon name={icon} size={65} color={style.icon.color} />
            <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor:'#2B1D62',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 140,
    },
    text:{
        color: "#ffffffff",
        fontSize: 16
    },
    icon:{
        color: "#ffffffff",
    }
})

export default AcoesButton