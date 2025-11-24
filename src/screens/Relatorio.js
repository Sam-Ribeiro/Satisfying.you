import { View, Text, Image } from "react-native";
import { coletaStyles } from "../styles/coletaStyles";
import { globalStyles } from "../styles/globalStyles";
import Legend from "../components/legend";
//import PieChart from "react-native-pie-chart";
import { PieChart } from 'react-native-gifted-charts';
const Relatorio = () =>{

    const series = [
        { value: 12, color: "#F1CE7E" , shiftX: 8, shiftY: -8 , text: 12},
        { value: 13, color: "#6994FE" , text: 13},
        { value: 11, color: "#5FCDA4" , text: 11},
        { value: 12, color: "#EA7288" , text: 12},
        { value: 10, color: "#53D8D8" , text: 10},
    ]

    return(
        <View style={globalStyles.relatorio}>
{/*}
            <PieChart
                widthAndHeight={200}
                series={series}
                cover={0.05}
                padAngle={0.01}
            />
{*/}
        <PieChart
            data={series}
            donut
            radius={100}
            innerRadius={0}
            showText
            textColor="white"
            textSize={18}
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