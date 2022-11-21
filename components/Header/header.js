import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Header() {
    return(
      <View style={styles.container}>
        <Text style={styles.texto}></Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "black",
    width: '90%',
    height: 40,
    margin: 8,
  },

  texto: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  }

});