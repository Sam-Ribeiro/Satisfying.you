import { View, Text } from "react-native";
import { coletaSyles } from "../styles/coletaStyles";

const AgradecimentoParticipacao = () =>{
    return(
        <View style={coletaSyles.container}>
            <Text style={coletaSyles.text}>Obrigado por participar da pesquisa!</Text>
            <Text style={coletaSyles.text}>Aguardamos você no próximo ano!</Text> 
        </View>
    )
}

export default AgradecimentoParticipacao