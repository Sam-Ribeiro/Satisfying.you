import { View, Text, Image } from "react-native";
import { coletaStyles } from "../styles/coletaStyles";
import { globalStyles } from "../styles/globalStyles";
import Legend from "../components/legend";
import PieChart from "react-native-pie-chart";

const Relatorio = () =>{

    const series = [
        { value: 12, color: "#F1CE7E" },
        { value: 13, color: "#6994FE" },
        { value: 11, color: "#5FCDA4" },
        { value: 12, color: "#EA7288" },
        { value: 10,  color: "#53D8D8" },
    ]

    return(
        <View style={globalStyles.relatorio}>

            <PieChart
                widthAndHeight={200}
                series={series}
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