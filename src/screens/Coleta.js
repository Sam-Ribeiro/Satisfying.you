import { View, Text, TouchableOpacity } from "react-native";
import { coletaSyles } from "../styles/coletaStyles";
import RatingButton from "../components/ratingButton";

const Coleta = (props) =>{

    const GiveFeedback= () =>{
        props.navigation.navigate('AgradecimentoParticipacao')
        setTimeout(() => { props.navigation.goBack() }, 3000)
    }
    
    return(
        <View style={coletaSyles.coleta}>
            <Text style={coletaSyles.text}>Oque você achou do carnaval 2025?</Text>
            <View style={coletaSyles.feedback}>
                <RatingButton text="Péssimo" color="red" icon="sentiment-very-dissatisfied" onPress={GiveFeedback} />
                <RatingButton text="Ruim" color="orange" icon="sentiment-dissatisfied" onPress={GiveFeedback}/>
                <RatingButton text="Neutro" color="yellow" icon="sentiment-neutral" onPress={GiveFeedback}/>
                <RatingButton text="Bom" color="limegreen" icon="sentiment-satisfied-alt" onPress={GiveFeedback}/>
                <RatingButton text="Excelente" color="green" icon="sentiment-very-satisfied" onPress={GiveFeedback}/>
            </View>
        </View>
    )
}

export default Coleta