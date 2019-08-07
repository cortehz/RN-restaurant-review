import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RestaurantList from "./src/components/RestaurantList";
import RestaurantInfo from "./src/components/RestaurantInfo";

const RootStack = createStackNavigator({
  Home: {
    screen: RestaurantList
  },
  Details: {
    screen: RestaurantInfo
  }
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
