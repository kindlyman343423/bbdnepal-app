import React, { Component } from "react";
import { Modal, StyleSheet, Image } from "react-native";

import FAIcons from "react-native-vector-icons/FontAwesome";

import {
  Form,
  Item,
  Input,
  Content,
  Label,
  Text,
  Button,
  View,
  Container,
  DatePicker,
  Icon,
  Picker
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

import { ImagePicker } from "expo";

import Loading from "../../shared/Loading";

import firebase from 'firebase';

const initialData = {
  name: "",
  dob: "",
  citizenshipno: "",
  occupation: "",
  issueddate: "",
  issuedbyndistrict: "",
  gender: "male",
  maritalstatus: "married",
  permanentdist: "",
  permanentvdcormunc: "",
  permanentward: "",
  permanenttole: "",
  tempdist: "",
  tempvdcormunc: "",
  tempward: "",
  temptole: "",
  contactresidence: "",
  contactoffice: "",
  contactmobile: "",
  email: "",
  poboxno: ""
};

export default class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      genderSelect: "male",
      maritalStatusSelect: "married",
      image: null,
      data: initialData,
      loading: false
    };
  }

  setDOB = newDate => {
    this.setState({
      chosenDate: newDate,
      data: { ...this.state.data, dob: newDate }
    });
  };

  setIssuedDate = newDate => {
    this.setState({
      chosenDate: newDate,
      data: { ...this.state.data, issueddate: newDate }
    });
  };

  onGenderValueChange = value => {
    this.setState({
      genderSelect: value,
      data: { ...this.state.data, gender: value }
    });
  };

  onMaritalStatusValueChange = value => {
    this.setState({
      maritalStatusSelect: value,
      data: { ...this.state.data, maritalstatus: value }
    });
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  handleSubmit = () => {
    this.setState({ loading: true });
    if (
      this.state.data.name !== "" ||
      this.state.data.citizenshipno !== "" ||
      this.state.data.email !== ""
    ) {
      firebase
        .database()
        .ref("apply")
        .push()
        .set(this.state.data)
        .then(() => {
          alert("Successfully sent");
          this.setState({ data: initialData, loading: false });
        })
        .catch(err => alert("Oops! There seems some error."));
    } else {
      alert("Fill the required inputs!");
      this.setState({ loading: false });
    }
  };

  render() {
    let { image } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.setModalVisible(!this.props.modalVisible);
        }}
      >
        <Container style={{ alignContent: "center", justifyContent: "center" }}>
          <ScrollView>
            <Content>
              <FAIcons
                onPress={() =>
                  this.props.setModalVisible(!this.props.modalVisible)
                }
                style={{
                  color: "red",
                  textAlign: "right",
                  marginRight: 15,
                  marginTop: 5,
                  fontSize: 20
                }}
                name="times"
              />
              <Text style={styles.title}>Application Form</Text>
              <Form style={styles.form}>
                <Label style={styles.label}>Name</Label>
                <Item rounded last style={styles.input}>
                  <Input
                    onChangeText={name =>
                      this.setState({
                        data: { ...this.state.data, name: name }
                      })
                    }
                    value={this.state.data.name}
                  />
                </Item>

                <Label style={styles.label}>Date of birth</Label>
                <Item rounded last style={styles.input}>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDOB}
                    disabled={false}
                  />
                </Item>

                <Label style={styles.label}>Citizenship Number</Label>
                <Item rounded last style={styles.input}>
                  <Input
                    onChangeText={citizenshipno =>
                      this.setState({
                        data: {
                          ...this.state.data,
                          citizenshipno: citizenshipno
                        }
                      })
                    }
                    value={this.state.data.citizenshipno}
                  />
                </Item>

                <Label style={styles.label}>Occupation</Label>
                <Item rounded last style={styles.input}>
                  <Input
                    onChangeText={occupation =>
                      this.setState({
                        data: { ...this.state.data, occupation: occupation }
                      })
                    }
                    value={this.state.data.occupation}
                  />
                </Item>

                <Label style={styles.label}>Issued Date</Label>
                <Item rounded last style={styles.input}>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setIssuedDate}
                    disabled={false}
                  />
                </Item>

                <Label style={styles.label}>Issued By & District</Label>
                <Item rounded last style={styles.input}>
                  <Input
                    onChangeText={issuedbyndistrict =>
                      this.setState({
                        data: {
                          ...this.state.data,
                          issuedbyndistrict: issuedbyndistrict
                        }
                      })
                    }
                    value={this.state.data.issuedbyndistrict}
                  />
                </Item>

                <Label style={styles.label}>Gender</Label>
                <Item rounded last style={styles.input}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Gender"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.genderSelect}
                    onValueChange={this.onGenderValueChange}
                  >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                  </Picker>
                </Item>

                <Label style={styles.label}>Marital Status</Label>
                <Item rounded last style={styles.input}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Marital Status"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.maritalStatusSelect}
                    onValueChange={this.onMaritalStatusValueChange}
                  >
                    <Picker.Item label="Married" value="married" />
                    <Picker.Item label="Unarried" value="unmarried" />
                    <Picker.Item label="Other" value="other" />
                  </Picker>
                </Item>

                <Label style={styles.label}>Permanent Address</Label>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    District"}
                      onChangeText={permanentdist =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            permanentdist: permanentdist
                          }
                        })
                      }
                      value={this.state.data.permanentdist}
                    />
                  </Item>
                  <Text>{"  "}</Text>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    VDC/Municiplity"}
                      onChangeText={permanentvdcormunc =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            permanentvdcormunc: permanentvdcormunc
                          }
                        })
                      }
                      value={this.state.data.permanentvdcormunc}
                    />
                  </Item>
                </View>

                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    Ward No."}
                      onChangeText={permanentward =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            permanentward: permanentward
                          }
                        })
                      }
                      value={this.state.data.permanentward}
                    />
                  </Item>
                  <Text>{"  "}</Text>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    Tole"}
                      onChangeText={permanenttole =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            permanenttole: permanenttole
                          }
                        })
                      }
                      value={this.state.data.permanenttole}
                    />
                  </Item>
                </View>

                <Label style={styles.label}>Contact Address</Label>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    District"}
                      onChangeText={tempdist =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            tempdist: tempdist
                          }
                        })
                      }
                      value={this.state.data.tempdist}
                    />
                  </Item>
                  <Text>{"  "}</Text>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    VDC/Municiplity"}
                      onChangeText={tempvdcormunc =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            tempvdcormunc: tempvdcormunc
                          }
                        })
                      }
                      value={this.state.data.tempvdcormunc}
                    />
                  </Item>
                </View>

                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    Ward No."}
                      onChangeText={tempward =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            tempward: tempward
                          }
                        })
                      }
                      value={this.state.data.tempward}
                    />
                  </Item>
                  <Text>{"  "}</Text>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input
                      placeholder={"    Tole"}
                      onChangeText={temptole =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            temptole: temptole
                          }
                        })
                      }
                      value={this.state.data.temptole}
                    />
                  </Item>
                </View>

                <Label style={styles.label}>Contact Number</Label>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Item rounded last style={[styles.input, styles.triplesplit]}>
                    <Input
                      placeholder={"    Residence"}
                      onChangeText={contactresidence =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            contactresidence: contactresidence
                          }
                        })
                      }
                      value={this.state.data.contactresidence}
                    />
                  </Item>
                  <Text>{"  "}</Text>
                  <Item rounded last style={[styles.input, styles.triplesplit]}>
                    <Input
                      placeholder={"    Office"}
                      onChangeText={contactoffice =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            contactoffice: contactoffice
                          }
                        })
                      }
                      value={this.state.data.contactoffice}
                    />
                  </Item>
                  <Text>{"  "}</Text>
                  <Item rounded last style={[styles.input, styles.triplesplit]}>
                    <Input
                      placeholder={"    Mobile"}
                      onChangeText={contactmobile =>
                        this.setState({
                          data: {
                            ...this.state.data,
                            contactmobile: contactmobile
                          }
                        })
                      }
                      value={this.state.data.contactmobile}
                    />
                  </Item>
                </View>

                <Label style={styles.label}>E-mail</Label>
                <Item rounded last style={styles.input}>
                  <Input
                    onChangeText={email =>
                      this.setState({
                        data: {
                          ...this.state.data,
                          email: email
                        }
                      })
                    }
                    value={this.state.data.email}
                  />
                </Item>

                <Label style={styles.label}>P.O. Box No.</Label>
                <Item rounded last style={styles.input}>
                  <Input
                    onChangeText={poboxno =>
                      this.setState({
                        data: {
                          ...this.state.data,
                          poboxno: poboxno
                        }
                      })
                    }
                    value={this.state.data.poboxno}
                  />
                </Item>

                {/* <Label style={styles.label}>Upload Photo</Label>
                <Item
                  rounded
                  last
                  style={styles.input}
                  onPress={this._pickImage}
                />
                {image && <Image source={{ uri: image }} style={styles.image} />} */}

                <View style={{ marginTop: 10, flex: 1, padding: 10 }}>
                  {!this.state.loading ? (
                    <Button
                      block
                      style={{
                        width: "100%",
                        marginTop: 10,
                        justifyContent: "center",
                        backgroundColor: "#00814e",
                        borderRadius: 20
                      }}
                      onPress={this.handleSubmit}
                    >
                      <Text style={{ color: "white" }}> Send Application </Text>
                    </Button>
                  ) : (
                    <Loading size={"large"} />
                  )}
                </View>
              </Form>
            </Content>
          </ScrollView>
        </Container>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c",
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: -10
  },
  contact: {
    flex: 1
  },
  form: {
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    marginTop: 10,
    height: 40
  },
  splitinput: {
    flex: 1,
    width: 50
  },
  triplesplit: {
    flex: 1,
    width: 33.33
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10
  }
});
