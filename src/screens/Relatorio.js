import { View, Text, Image } from "react-native";
import { coletaStyles } from "../styles/coletaStyles";
import { globalStyles } from "../styles/globalStyles";
import Legend from "../components/legend";

const Relatorio = () =>{
    return(
        <View style={globalStyles.relatorio}>
            <Image style={globalStyles.image}
                source={require('../assets/images/relatorio.png')}
            />
            <View style={globalStyles.legend}> 
                <Legend text='Excelente' color='#F1CE7E' />
                <Legend text='Bom' color='#6994FE' />
                <Legend text='Ruim' color='#5FCDA4' />
                <Legend text='Neutro' color='#EA7288' />
                <Legend text='Péssimo' color='#53D8D8' />
            </View>
        </View>
    )
}

export default Relatorio