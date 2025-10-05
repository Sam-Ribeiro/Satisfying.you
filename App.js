import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Coleta from "./src/screens/Coleta";
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import Relatorio from "./src/screens/Relatorio";
const Stack = createStackNavigator()

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Carnaval"
                screenOptions={{
                    headerStyle: {
                    backgroundColor: '#2B1D62', 
                    height: 50
                },
                    headerTintColor: '#fff', 
                    headerTitleStyle: {
                    fontSize: 22,
                },
            }}>
                <Stack.Screen name="Carnaval" component={AcoesPesquisa} options={{headerShown:true}}/>
                <Stack.Screen name="Relatorio" component={Relatorio} options={{headerShown:true}}/>
                <Stack.Screen name="Coleta" component={Coleta} options={{headerShown:false}}/>
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
