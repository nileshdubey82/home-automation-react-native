import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  RefreshControl,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from './Loader';
import * as Animatable from 'react-native-animatable';
const Home = props => {

  const [lightname, setlightname] = React.useState('');
  const [fanname, setfaname] = React.useState('');
  const [loading, setLoading] = React.useState();
  const [getid, setid] = React.useState('');
  const [getstatus, setstatus] = React.useState('');
  const [refresh, setrefresh] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    fetchlight();
    fatchfan();
    setLoading(true);

  }, []);

  const Pull = () => {
    setrefresh(true)
    fetchlight();
    fatchfan();
    // alert("sfkj");
    // setLoading(true);
    setTimeout(() => {
      setrefresh(false)
    }, 1000)
  }

  const performaction = () => {

    const id = `${getid}`;
    const status = `${getstatus}`;
    console.log(id + "    " + status);

    var InsertAPIURL = 'https://h2osavernil.000webhostapp.com/updateDeviceStatus.php'; //API to render insert

    var headers = {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    };

    var Data = {
      "id": id,
      "status": status
    };
    // FETCH func ------------ ------------------------
    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {
        if (response[0].Message == 'Success') {
          // alert(response[0].Message);
          setlightname(' ');
          setfaname(' ');
          fetchlight();
          fatchfan();
          console.log(response[0].Message);// If data is in JSON => Display alert msg
          setLoading(true);


        } //Navigate to next screen if authentications are valid
      })
      .catch((error) => {
        alert('Error Occured' + error);
        console.log(error + "sjds");
      }).finally(()=>{setisLoading(false); });
    // }


  };
  const performaction2 = () => {

    const id = `${getid}`;
    const status = `${getstatus}`;
    console.log(id + "  " + status);

    var InsertAPIURL = 'https://h2osavernil.000webhostapp.com/updateDeviceStatus.php'; //API to render insert

    var headers = {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    };

    var Data = {
      "id": id,
      "status": status
    };
    // FETCH func ------------ ------------------------
    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {
        if (response[0].Message == 'Success') {
          // alert(response[0].Message);
          setlightname('');
          setfaname('');
          fetchlight();
          fatchfan();
          console.log(response[0].Message) // If data is in JSON => Display alert msg
          // setLoading(true)
          console.log(lightname);


        } //Navigate to next screen if authentications are valid
      })
      .catch((error) => {
        alert('Error Occured' + error);
        console.log(error + "sjds");
      });
    // }


  };


  const fetchlight = () => {
    fetch('https://h2osavernil.000webhostapp.com/getDevices.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(response => response.json())
      .then(responseData => {
        setLoading(true);
        setlightname(responseData);
        // console.log(responseData);
        // alert(responseData.id);
      })
      .catch(error => console.log(error)).finally(()=>{
        setisLoading(false);
      });

  }

  const fatchfan = () => {

    fetch('https://h2osavernil.000webhostapp.com/getFanDevice.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(response => response.json())
      .then(data => {
        setfaname(data);
        console.log(data); // return same old list
      })
      .catch(err => this.showError('Error Signing Up, Please Try Again.')).finally(()=>{
        setisLoading(false);
      });
  }


  return (
    <View style={styles.header}>


      <View style={styles.VIEW1}>
      <ScrollView refreshControl={
      <RefreshControl refreshing={false} onRefresh={Pull} />
    } ></ScrollView>

        <View style={{ marginTop: 15, backgroundColor: '#2466A7FF', flex: 1 }}>
          <Text style={styles.textcolor}>Dashboard</Text>

          {/* <Image source={require('./downloada.jpg')} style={{ width: 100, height: 100 }} /> */}
        </View>

        <View style={{ flex: 1, fontWeight: 'bolder' }}><Text style={{ fontWeight: 'bold', fontFamily: 'notoserif' }}>May it be a light to you in dark places, when all other lights go out.</Text></View>

        <View style={{ flex: 3 }}>
          <TouchableOpacity
            style={{
              width: 200,
              backgroundColor: 'white',
              height: 60,
              top: 40,
              left: 30,
              borderRadius: 10,
              padding: 10,
              justifyContent: 'center',
            }} onPress={() => {
              props.navigation.navigate("Result");
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                shadowOffset: { width: -9, height: 9 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}>
              Result Here ....!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.VIEW2}>
        <View
          style={{
            flex: 2,
            backgroundColor: '#D9D9D9',
            padding: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
            WELCOME TO PERSONAL SECRETARY
          </Text>
        </View>
        <View style={{flex:7}}> 
       { isLoading ==true ? <ActivityIndicator/>:
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <FlatList
              // style={styles.card/}
              data={lightname}
              indexExtractor={key => {
                return key.id;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.card} onPress={() => {
                    setid(item.id);
                    setstatus(item.status);
                    performaction();
                  }}>
                    {item.status == 1 ? (
                      <Image
                        source={require('./lightoff.png')}
                        style={{ width: 70, height: 60 }}
                        id="1"
                      />
                    ) : (
                      <Image
                        source={require('./9th.gif')}
                        style={{ width: 100, height: 65 }}
                      />
                    )}
                    {item.status == 1 ? (
                      <Text style={styles.txt}>{item.device_id}</Text>
                    ) : (
                      <Text style={styles.txt2}>{item.device_id}</Text>
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <FlatList
              // style={styles.card/}
              data={fanname}
              indexExtractor={key => {
                return key.id;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.card} onPress={() => {
                    setid(item.id);
                    setstatus(item.status);
                    performaction2();
                  }}>
                    {item.status == 1 ? (
                      <Animatable.Image
                        animation='pulse' easing='ease-in' iterationCount="infinite"
                        source={require('./fanoff.png')}
                        style={{ width: 50, height: 50 }}
                        id="1"
                      />
                    ) : (
                      <Animatable.Image
                        // animation='pulse' easing='ease-in' iterationCount="infinite"
                        source={require('./11th.gif')}
                        style={{ width: 100, height: 80 }}
                        id="1"
                      />
                    )}
                    {item.status == 1 ? (
                      <Text style={styles.txt}>{item.device_id}</Text>
                    ) : (
                      <Text style={styles.txt2}>{item.device_id}</Text>
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // backgroundColor: '#333D79FF'
  },
  textcolor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 40,
  },
  Bakcground: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  VIEW1: {
    flex: 1,
    backgroundColor: '#2466A7FF',
    borderBottomColor: 'black',
    borderBottomEndRadius: 100 / 2,
    borderBottomStartRadius: 100 / 2,
    padding: 20,
  },
  VIEW2: {
    flex: 2,
    backgroundColor: 'white',
    padding: 10,
    // justifyContent:'row'
  },

  card: {
    width: 110,
    height: 134,
    backgroundColor: '#D9D9D9',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    // opacity: 0.3,
    justifyContent: 'center',
    // alignContent:'center',
    alignItems: 'center',
  },
  shadowProp: {},

  txt: {
    color: '#2466A7FF',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 12,
    opacity: 0.8,
  },
  txt2: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 12,
    opacity: 0.8,
  },

  shadowProp: {
    color: 'green',
  },
});

export default Home;
