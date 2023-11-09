import {Text, Image, View, StyleSheet} from 'react-native';
import TouchableButton from './components/TouchableButton';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/onboarding/login';
import App from './navigation/stack/generalRoutes';
//import Signup from './screens/onboarding/signup';

const MainScreenn = ({navigation}) => {
return(
  <View style={Styles. container}>
    <View style={Styles.screenTitleView}>
      <Image
      source={{uri:"https://i.imgur.com/yXOvdOSs.jpg"}}
      style={{width: 250, height: 250}}
      />
      <Text style={Styles.descriptionStyle}>Welcome to Application</Text>
    </View >
    <View>
      <TouchableButton title={'sign up'}
      onPress={() => navigation.navigate('Signup')}
      />
      <TouchableButton title={'Log In'}
      onPress={() => navigation.navigate('Login')}
      />
    </View>
  </View>
);
};

export default MainScreenn;

const Styles = StyleSheet.create({
  container: {
  flex: 1, 
  backgroundColor: 'white',
},
screenTitleView: {
  flex: 0.5, 
  width: '100%',
  justifyContent: 'flex-start',
  top: 70,
  alignItems:'center',
  paddingHorizontal:25,
},
descriptionStyle:{
  fontSize: 25,
  fontWeight:'bold',
},

});
