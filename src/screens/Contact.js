import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

export default function App({navigation,route}) {
  const {name,age}=route.params;
  console.log(name,age );
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.h1}>{name}{age}</Text>
      <Button color={'green'} style={styles.button} onPress={()=>{navigation.navigate('About')}} title='Go To About'/>

    <View style={{marginTop:20}}>
      <Button color={'red'} style={styles.button} onPress={()=>{navigation.goBack()}} title='Go Back'/>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
flexContainer:{
justifyContent:'center',
alignItems:'center',
flex:1,
backgroundColor:'grey'
},

h1:{
fontSize:48,
fontWeight:'bold',
color:'white'

}


  
})