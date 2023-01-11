
import React from 'react';
import {NativeBaseProvider, extendTheme, theme as nbTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StarterIntro from './screens/StarterIntro';
import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import OTP from "./screens/OTP"
import ProductScreen from "./screens/ProductScreen"


const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.violet,
  },
});
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<NavigationContainer>
				<Drawer.Navigator screenOptions={{ headerShown: false }}>
					<Drawer.Screen name={"Starter intro"} component={StarterIntro} />
					<Drawer.Screen name={"SignUp"} component={SignUp} />
					<Drawer.Screen name={"SignIn"} component={SignIn} />
					<Drawer.Screen name={"OTP"} component={OTP} />
					<Drawer.Screen name={"ProductScreen"} component={ProductScreen} />

				</Drawer.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
  