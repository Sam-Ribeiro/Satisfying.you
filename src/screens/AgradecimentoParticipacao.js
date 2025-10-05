import { View, Text } from "react-native";
import { coletaStyles } from "../styles/coletaStyles";

const AgradecimentoParticipacao = () =>{
    return(
        <View style={coletaStyles.container}>
            <Text style={coletaStyles.text}>Obrigado por participar da pesquisa!</Text>
            <Text style={coletaStyles.text}>Aguardamos você no próximo ano!</Text> 
        </View>
    )
}

export default AgradecimentoParticipacao