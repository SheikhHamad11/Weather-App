import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import logo from '../Images/fav.png';
export default function About({navigation, route}) {
  const {name, age} = route.params;
  console.log(name, age);
  return (
    // <ScrollView style={{}}>
    <View style={styles.flexContainer}>
      <View style={[styles.gallery, styles.flexCenter, {marginVertical: 20}]}>
        <Text style={styles.h1}>About</Text>
      </View>
      <Text style={styles.text}>
        {name}
        {age}
      </Text>
      <Image style={styles.image} source={require('../Images/fav.png')} />
      <View style={{marginVertical: 10}}>
        <Button
          color={'green'}
          style={styles.button}
          onPress={() => {
            navigation.navigate('Contact', {name: 'hamad', age: 15});
          }}
          title="Go To Contact"
        />
      </View>
      <View>
        <Button
          color={'green'}
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home', {name: 'hamad', age: 15});
          }}
          title="Go To Home"
        />
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    backgroundColor: 'blue',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },
  gallery: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  image: {
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
