import { View, Text,StyleSheet ,Image, StatusBar} from 'react-native'
import React from 'react'

export default function Splash() {
  return (
	  <View style={styles.container}>
	<StatusBar hidden={true} backgroundColor="white"/>
	{/* <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> */}
	<Text style={{fontSize:40,color:'black',bottom:20,fontWeight:"bold"}}>CREATED BY</Text>
	<Image source={require('./nilesh.jpg')} style={{ width: '60%', height: "30%",borderRadius:0 }} />
	<Text style={{color:'black',fontWeight:"bold",top:8}}>Nilesh Prasad Dubey (CSE 5TH SEM.)</Text>
	<Image source={require('./yash.jpg')} style={{ width: '60%', height: "35%",top:40 }} />
	<Text style={{color:'black',top:45,fontWeight:"bold"}}>Yashwant Banjare (EE 3RD SEM.)</Text>
	</View>

	// </View>
  )
}

const styles = StyleSheet.create({
	container:{
		flex:1 ,
		backgroundColor:'#ffffff',
		justifyContent:'center',
		alignItems:'center'
	}
})
