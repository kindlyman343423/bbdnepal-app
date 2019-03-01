import React from 'react';

import {createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Font, AppLoading } from "expo";

import MainScreen from './Components/MainScreen';

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
  Main: MainScreen,
},{
  initialRouteName: 'Main',
})

const DrawerNav = createAppContainer(RootDrawerNavigator);