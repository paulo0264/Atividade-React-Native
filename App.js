import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Head from './components/Header/header';


export default function App() {
  const [count,setCount] = useState(0);
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.hed}>
          <Text style={styles.btn}>Inicio</Text>
          
          <Text style={styles.btn}>Sobre</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.titulo}>Contador</Text>
          <Text style={styles.resultado}>{count}</Text>

          <TouchableOpacity style={styles.buttom} onPress={ ()=> setCount(count+1) }>
            <Text style={styles.clic}>+</Text>
          </TouchableOpacity>

          {count > 0 &&
            <TouchableOpacity style={styles.buttom2} onPress={ ()=> setCount(count-1) }>
            <Text style={styles.clic}>-</Text>
          </TouchableOpacity>}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.foo}>Exercício 03 - DDM</Text>
        </View>
        
        
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    flex: 1,
    backgroundColor:'#E5E5E5',
    justifyContent: 'center',
  },
  hed:{
    width: '100%',
    backgroundColor: "#C4C4C4",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'center',
  },
  btn:{
    marginTop:20,
    // width: 77,
    // height: 28,
    fontSize: 18,
    fontWeight:"bold",
    // justifyContent:"space-around",
    // color: '#FFFFFF',
    // backgroundColor: 'black',
    // borderRadius: 10,
    // textAlign: 'center',
  },
  resultado:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  clic:{
    color: '#EEEEEE',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttom:{
    marginTop:10,
    width: 200,
    height: 50,
    fontSize: 16,
    fontWeight:"bold",
    justifyContent:"space-around",
    color: '#FFFFFF',
    backgroundColor: 'green',
    borderRadius: 10,
    textAlign: 'center',
  },
  buttom2:{
    marginTop:10,
    width: 200,
    height: 50,
    fontSize: 16,
    fontWeight:"bold",
    justifyContent:"space-around",
    color: '#FFFFFF',
    backgroundColor: 'red',
    borderRadius: 10,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    height: 55,
    backgroundColor: '#4E466A',
    justifyContent: 'center'
  },
  foo:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold', 
    color: '#EEEEEE'
  },
  cont:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '90%',
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#8A8FC4',
  },
  um:{
    width:'90%',
    backgroundColor: '#B2B9FF',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
