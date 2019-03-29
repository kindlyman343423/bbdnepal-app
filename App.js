import React from 'react';

import {createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Font, AppLoading } from "expo";

import MainScreen from './Components/MainScreen';
import AboutUsScreen from './Components/AboutUsScreen';
import OurServiceScreen from './Components/OurServiceScreen';
import LegalNewsScreen from './Components/LegalNewsScreen';
import CareerScreen from './Components/CareerScreen';
import FAQScreen from './Components/FAQScreen';
import ContactUsScreen from './Components/ContactUsScreen';

import drawerContentComponents from './Components/drawerContentComponents';

// import firebase from './config/firebase';
import firebase from 'firebase';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  componentDidMount(){
    // firebase.initializeFirebase();
    const config = {
      apiKey: "AIzaSyARXJnsMCgrlq2ZEbjRokBZhxxvtpt99EY",
      authDomain: "bbdnepal-f5d92.firebaseapp.com",
      databaseURL: "https://bbdnepal-f5d92.firebaseio.com",
      projectId: "bbdnepal-f5d92",
      storageBucket: "bbdnepal-f5d92.appspot.com",
      messagingSenderId: "558448678081"
    };
    firebase.initializeApp(config);
  }

  render() {
    if (this.state.loading) {
      return (
          <AppLoading />
      );
    }
    return (
        <DrawerNav />
    );
  }
}

const RootDrawerNavigator = createDrawerNavigator({
  OurService: OurServiceScreen,
  Home: MainScreen,
  AboutUs: AboutUsScreen,
  LegalNews: LegalNewsScreen,
  Career: CareerScreen,
  FAQ: FAQScreen,
  ContactUs: ContactUsScreen,
},{
    contentComponent: drawerContentComponents
})

const DrawerNav = createAppContainer(RootDrawerNavigator);