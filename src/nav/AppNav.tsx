import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details} from '../screens';

const Stack = createNativeStackNavigator();

export const AppNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
