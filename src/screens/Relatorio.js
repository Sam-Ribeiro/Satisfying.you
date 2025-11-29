import { View} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Legend from "../components/legend";
import { doc, initializeFirestore} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { app } from "../firebase/config";
import { PieChart } from 'react-native-gifted-charts';
import { useState } from "react";
const Relatorio = () =>{

    const pesquisa = useSelector((state) => state.pesquisa) 
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})

    console.log(pesquisa)
    const series = [
        
        { value: pesquisa.pessimo, color: "#53D8D8" , text: pesquisa.pessimo},
        { value: pesquisa.ruim, color: "#5FCDA4" , text: pesquisa.ruim},
        { value: pesquisa.neutro, color: "#EA7288" , text: pesquisa.neutro},
        { value: pesquisa.bom, color: "#6994FE" , text: pesquisa.bom},
        { value: pesquisa.excelente, color: "#F1CE7E" , shiftX: -1, shiftY: -3   , text: pesquisa.excelente},
    ]

    return(
        <View style={globalStyles.relatorio}>

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