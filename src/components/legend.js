import {Text, StyleSheet, View} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

const Legend = (props) =>{

    const text = props.text
    const color = props.color

    return(
        <View style={style.button}>
            <Icon name='square' size={25} color={color} />
            <Text style={style.text}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    button:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: "#ffffffff",
        fontSize: 16
    },
})

export default Legend