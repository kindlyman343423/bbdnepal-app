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
  ContactUs: ContactUsScreen,
  Home: MainScreen,
  AboutUs: AboutUsScreen,
  OurService: OurServiceScreen,
  LegalNews: LegalNewsScreen,
  Career: CareerScreen,
  FAQ: FAQScreen,
},{
    contentComponent: drawerContentComponents
})

const DrawerNav = createAppContainer(RootDrawerNavigator);