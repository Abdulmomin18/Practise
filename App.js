import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/layout/MapScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
  
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MapScreen' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;