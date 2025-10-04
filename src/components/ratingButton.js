import {TouchableOpacity, Text, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

const RatingButton = (props) =>{

    const text = props.text
    const icon = props.icon
    const color = props.color
    const onPress = props.onPress
    
    return(
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Icon name={icon} size={65} color={color} />
            <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor: "#516debff",
        display: 'flex',
        alignItems: 'center',
        padding: 15
    },
    text:{
        color: "#ffffffff",
        fontSize: 16
    }
})

export default RatingButton