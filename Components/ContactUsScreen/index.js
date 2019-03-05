import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Container, Card, CardItem, Content } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { MapView } from "expo";

import Head from "../shared/Head";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class ContactUsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMapReady: false,
      region: {
        latitude: 47.6062,
        longitude: 122.3321,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }
    };
  }

  static navigationOptions = {
    drawerLabel: "Contact Us"
  };

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Head {...this.props} />
          <Content>
            <Card>
              <CardItem>
                <MapView
                  onPress={e => console.log(e.nativeEvent)}
                  style={styles.map}
                  provider="google"
                  mapType="standard"
                  showsScale
                  showsCompass
                  showsPointsOfInterest
                  showsBuildings
                  region={this.state.region}
                  onLayout={this.onMapLayout}
                >
                  {this.state.isMapReady && (
                    <MapView.Marker
                      title="BBD Nepal"
                      coordinate={{
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude
                      }}
                    />
                  )}
                </MapView>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c"
  },
  container: {
    flex: 1
  },
  map: {
    flex: 1,
    height: height / 4,
    width: width
  }
});

export default ContactUsScreen;
