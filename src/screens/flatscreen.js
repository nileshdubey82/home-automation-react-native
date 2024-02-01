import React from 'react';
import {View, StyleSheet,FlatList,Text,TouchableOpacity} from 'react-native';

const Flatscreen = () => {

	const DATA =[
	{
		key:'1',
		name:"skds"
	},
	{
		key:'2',
		name:"skds"
	},
	{
		key:'3',
		name:"skds"
	},{
		key:'4',
		name:"skds"
	},
	{
		key:'5',
		name:"skds"
	},
	{
		key:'6',
		name:"skds"
	},
	{
		key:'7',
		name:"skds"
	},
	]


	return (
		<View style={{flex:1,backgroundColor:"yellow",padding:20}}>

<FlatList
              // style={styles.card/}
              data={DATA}
              indexExtractor={key => {
                return key.id;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={{backgroundColor:'#123456',margin:10,width:100,height:200}}><Text>{item.name}</Text></TouchableOpacity>
                );
              }}
            />
		</View>
	);
}

const styles = StyleSheet.create({})

export default Flatscreen;
