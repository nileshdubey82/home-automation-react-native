/* eslint-disable prettier/prettier */
import React, {Component, useEffect} from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Navigation from './stack';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Fadeimg from'./Fadeimg';

export default function Login(props) {
  useEffect(() => {
    // InsertRecord();
  }, []);

  const InsertRecord = () => {
    var Email1 = `${email}`;

    if (Email1.length == 0) {
      alert('Required Field Is Missing!!!');
    } else {
      var APIURL = 'https://h2osavernil.000webhostapp.com/forget-check.php';
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var Data = {
        Email: Email1,
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(response => {
          alert(response[0].Message);
          if (response[0].Message == 'Success') {
            const A = Email1;
            console.log(A);
            try {
              AsyncStorage.setItem('Email', A);
              console.log('successs email is stored in a');
            } catch (e) {
              //error
            }
            props.navigation.navigate('ForgetScreen');
          } else {
            // alert("Your have no Id for Forgetting Your Password")
          }
          console.log(Data);
        })
        .catch(error => {
          alert(error);
          console.error('ERROR FOUND' + error);
        });
    }
  };
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.header} />
      <View style={styles.conta} />
      <View style={styles.footer}>
        <Text style={[styles.text_footer, styles.action]}>FeedBack</Text>
        <View style={styles.others}>
          <TextInput
            style={styles.textInput}
            // onChangeText={(UserName) => setUserName(UserName)}
            underlineColorAndroid="#2466A7FF"
            placeholder="Enter Name"
            placeholderTextColor="#2466A7FF"
            autoCapitalize="sentences"
            returnKeyType="next"
            onSubmitEditing={() =>
              emailInputRef.current && emailInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.others}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Email"
            placeholderTextColor="#2466A7FF"
            underlineColorAndroid="#2466A7FF"
            autoCapitalize="none"
            onChangeText={e => setEmail(e)}
            value={email}
          />
        </View>
        <View style={styles.other}>
          <TextInput
            style={styles.textInput}
            onChangeText={UserName => setUserName(UserName)}
            underlineColorAndroid="#2466A7FF"
            placeholder="Enter Your FeedBack Here"
            placeholderTextColor="#2466A7FF"
            autoCapitalize="sentences"
            returnKeyType="next"
            onSubmitEditing={() =>
              emailInputRef.current && emailInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            InsertRecord();
          }}
          style={[
            styles.signIn,
            {
              borderColor: '#2466A7FF',
              borderWidth: 3,
              marginTop: 15,
            },
          ]}>
          <Animatable.Text
            animation="pulse"
            easing="ease-in"
            iterationCount="infinite"
            style={[styles.textSign, {color: '#2466A7FF'}]}>
            Submit
          </Animatable.Text>
        </TouchableOpacity>
        <View>
          <Animatable.Text
            animation="pulse"
            easing="ease-in"
            iterationCount="infinite"
            style={[
              styles.textSign,
              {
                // eslint-disable-next-line prettier/prettier
                color: '#2466A7FF',
                fontSize: 13,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingHorizontal: 20,
                paddingVertical: 20,
              },
            ]}>
            Thankyou for your Feedback..
          </Animatable.Text>
        </View>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#2466A7FF',
    paddingHorizontal: 25,
    paddingVertical: 0,
  },
  header: {
    flex: 2,
    // backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 100,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius:20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    // alignItems:'center'
  },

  text_footer: {
    color: '#05375a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.a === '' ? 0 : 10,
    paddingLeft: 10,
    color: '#05375a',
  },

  action: {
    textAlign: 'center',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  other: {
    height: 80,
  },
  others: {
    height: 45,
  },

  conta: {
    position: 'absolute',
    top: 10,
    bottom: 50,
    left: 112,
    right: 50,
  },
});
