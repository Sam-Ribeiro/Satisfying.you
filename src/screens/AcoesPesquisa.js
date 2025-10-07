import { View, Text, TouchableOpacity } from "react-native";
import { coletaStyles } from "../styles/coletaStyles";
import { globalStyles } from "../styles/globalStyles";
import RatingButton from "../components/ratingButton";
import AcoesButton from "../components/acoesButton";

const AcoesPesquisa = (props) =>{

    const GoToColeta= () =>{
        props.navigation.navigate('Coleta')
    }
    const GoToRelatorio= () =>{
        props.navigation.navigate('Relatorio')
    }
    const GoToModify= () =>{
        props.navigation.navigate('Editar Pesquisa')
    }


    return(
        <View style={globalStyles.acoesContainer}>
            <View style={coletaStyles.feedback}>
                <AcoesButton text="Modificar" icon= "edit-document" onPress={GoToModify}/>
                <AcoesButton text="Coletar dados" icon= "library-add-check" onPress={GoToColeta}/>
                <AcoesButton text="Relatório" icon="donut-large" onPress={GoToRelatorio}/>
            </View>
        </View>
    )
}

export default AcoesPesquisa