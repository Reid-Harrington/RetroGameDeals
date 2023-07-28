import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignIn, Home, StarScreen, Details, Plus, AlertScreen, PlusButton, openPopup } from "./Screens";
import {SearchResults, SearchScreen} from "./searchScreen" 
const AuthStack = createStackNavigator();
const tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home Screen" 
      component={Home} 
      options={{ 
        headerShown: false,
        cardStyle: { backgroundColor: "#001841" },
      }} 
    />
    
    <Stack.Screen 
      name="Details" 
      component={Details} 
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </Stack.Navigator>
);

const StarStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
    name="Star Screen" 
    component={StarScreen} 
    options={{ 
      headerTransparent: "true",
      //headerShown: false,
      cardStyle: { backgroundColor: "#001841" },
    }} 
    />
    <Stack.Screen name="Plus" component={Plus} 
        options={{ 
          headerTransparent: "true",
          //headerShown: false,
          cardStyle: { backgroundColor: "#001841" },
        }} 
    />
        
  </Stack.Navigator>
);

const SearchStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Search Screen" 
      component={SearchScreen} 
      options={{ 
        headerShown: false,
        cardStyle: { backgroundColor: "#001841" },
      }} 
    />    
    <Stack.Screen 
      name="SearchResults" 
      component={SearchResults} 
      options={{ 
      headerShown: false,
      cardStyle: { backgroundColor: "#001841" },
      }} /> 
  </Stack.Navigator>
);

const AlertStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen 
    name="Alert Screen" 
    component={AlertScreen} 
    options={{ 
      headerShown: false,
      cardStyle: { backgroundColor: "#001841" },
    }}
      />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);


const CustomTabIcon = ({focused, iconName}) => (
  <View style={styles.tabIconContainer}>
    <Image
      source = {iconName}
      style={[styles.tabIcon, focused && styles.tabIconFocused]}
    />
  </View>
)

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? require('./assets/images/crossB.png') : require('./assets/images/crossB.png');
            } else if (route.name === 'Star') {
              iconName = focused ? require('./assets/images/squareB.png') : require('./assets/images/squareB.png');
            } else if (route.name === 'Search') {
              iconName = focused ? require('./assets/images/circleB.png') : require('./assets/images/circleB.png');
            } else if (route.name === 'Alert') {
              iconName = focused ? require('./assets/images/triangleB.png') : require('./assets/images/triangleB.png');
            }

            return <Image source={iconName} style={styles.tabIcon} />;
          },
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: styles.tabBarIcon,
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <tabs.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <tabs.Screen
          name="Star"
          component={StarStackScreen}
          options={{ headerShown: false }}
        />
        <tabs.Screen
          name="Search"
          component={SearchStackScreen}
          options={{ headerShown: false }}
        />
        <tabs.Screen
          name="Alert"
          component={AlertStackScreen}
          options={{ headerShown: false }}
        />
      </tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    height: "100%",
    top:0,
    opacity: 1
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  tabBar: {
    backgroundColor: '#001F52',
    borderRadius: 50,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    borderTopWidth: 0,
  },
  tabBarIcon: {
    marginTop: 12,
  },
  tabBarLabel: {
    color: '#fff',
    fontSize: 13,
    bottom: -22,
  },
  headerStyle: {
    backgroundColor: '#003791',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 37,
    height: 37,
    top:9,
  },
  tabIconFocused: {
    tintColor: 'white',
  },
});

/*/
      <View style={styles.container}>
        <StatusBar />
        <Image
          source={require('./assets/images/PSBackground.jpg')}
          className="w-full absolute -top-5 opacity-10"
          style={styles.image}
        />
        <Text style={styles.text}>Retro Game Deals</Text>
      </View>
      /*/

      // Triangle : #40E2A0, Square : ff69f8, circle: #E16666, cross : #7CB2E8
