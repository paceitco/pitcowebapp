import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { CartProvider } from './providers/CartContext';
import { CartScreen } from './screens/CartScreen';
import { ProductListingScreen } from './screens/ProductListingScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { SplashScreen } from './screens/SplashScreen';
import LandingScreen from './screens/LandingScreen';
// import ExploreScreen from './screens/ExploreScreen';
import './css/app.css';
import './css/bootstrap.min.css';
import './css/index.css';
import CareerTimeline from './screens/CareerTimelineView';
import IntroductionView from './screens/IntroductionView';
import StackView from './screens/StackView';
import NavView from './screens/NavView';
import { verticalScale } from 'react-native-size-matters';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Landing = () => (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle:{ backgroundColor: 'rgba(98, 138, 20, 0.8)', height: verticalScale(Platform.OS === 'web' ? 20 : 50) } }}>
      <Tab.Screen
        name="Home"
        component={LandingScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff",
            height: '100%',
            width: '100%'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="storefront-outline" color={focused ? color : '#fff'} size={size} />
          ),
          // tabBarActiveBackgroundColor: '#343434',
        }}/>
      
      {/* <Tab.Screen
        name="Explore"
        component={ExploreScreen} 
        options={{
          tabBarLabel: 'Explore',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff"
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="compass-outline" color={focused ? color : '#fff'} size={size} />
          ),
        }}/> */}
      
      <Tab.Screen
        name="Tech Stack"
        component={StackView}
        initialParams={{ renderCustomBackground: true }}
        options={{
          tabBarLabel: 'Tech Stack',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff",
            height: '100%',
            width: '100%'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="code-outline" color={focused ? color : '#fff'} size={size} />
          ),
          // tabBarActiveBackgroundColor: '#343434',
        }}/>

      <Tab.Screen
        name="Timeline"
        component={CareerTimeline}
        initialParams={{ renderCustomBackground: true }}
        options={{
          tabBarLabel: 'Timeline',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff",
            height: '100%',
            width: '100%'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="time-outline" color={focused ? color : '#fff'} size={size} />
          ),
          // tabBarActiveBackgroundColor: '#343434',
        }}/>

      <Tab.Screen
        name="Background/About Me"
        component={IntroductionView} 
        initialParams={{ renderCustomBackground: true }}
        options={{
          tabBarLabel: 'Background',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff",
            height: '100%',
            width: '100%'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person-outline" color={focused ? color : '#fff'} size={size} />
          ),
          // tabBarActiveBackgroundColor: '#343434',
        }}/>

      <Tab.Screen
        name="Hobbies/Interests"
        component={ProductListingScreen} 
        options={{
          tabBarLabel: 'Hobbies/Interests',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff",
            height: '100%',
            width: '100%'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="heart-outline" color={focused ? color : '#fff'} size={size} />
          ),
          // tabBarActiveBackgroundColor: '#343434',
        }}/>

      <Tab.Screen
        name="Contact"
        component={CartScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarLabelStyle: {
            color: "#fff"
          },
          tabBarIconStyle: {
            color: "#fff",
            height: '100%',
            width: '100%'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="mail-outline" color={focused ? color : '#fff'} size={size} />
          ),
          // tabBarActiveBackgroundColor: '#343434',
        }}/>

    </Tab.Navigator>
);

export function App() {
  return (
    <CartProvider>
      <NavView key="nav-component" />
      <Stack.Navigator screenOptions={{ headerShown: false, headerLargeTitleShadowVisible: true }} >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/* <Stack.Screen name="Landing" component={LandingScreen} /> */}
        <Stack.Screen name="Landing" component={Landing} />
        {/* <Stack.Screen name="Home" component={Landing} /> */}
        {/* <Stack.Screen name="/" component={Landing} />
        <Stack.Screen name="*" component={Landing} /> */}
        {/* <Stack.Screen name="" component={Landing} /> */}
      </Stack.Navigator>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashIcon: {
    width: 100,
    height: 100,
  },
  registerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'olive',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginPrompt: {
    flexDirection: 'row',
    marginTop: 10,
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
  },
  gridContainer: {
    padding: 10,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default App;