import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Coleta from "./src/screens/Coleta";
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";
const Stack = createStackNavigator()

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Coleta">
                <Stack.Screen name="Coleta" component={Coleta} options={{headerShown:false}}/>
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
