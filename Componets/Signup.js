import { Linking,StyleSheet, Text, View,TextInput,SafeAreaView,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {auth} from './Firebaseconfig'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { db } from './Firebaseconfig';
import { doc, setDoc,Timestamp,collection, addDoc } from "firebase/firestore"; 
const Signup = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name , setName] = useState("");
    const [number , setNumber] = useState("");
    const regirster =()=>{
        createUserWithEmailAndPassword(auth, email, password)

        .then(
          addDoc(collection(db, "user"), {
            //pass any data for user{user.uid}
            name:name,
            number:number,
            // date: Timestamp.fromDate(new Date()),
            // date: Timestamp.fromDate(new Date("December 10, 1815")),
        }))

    }
  return (
    <SafeAreaView>
    <View style={styles.main}>
        <View style={styles.home}>
      <Text style={styles.head}>Hello</Text>
      
      <TextInput
      value={email}  onChangeText={(email)=>setEmail(email)}
        style={styles.input}
        placeholder="Email"
        
      />
      <TextInput
        style={styles.input}
        
        value={password} onChangeText={(password)=>setPassword(password)}
        placeholder="password"
       
        secureTextEntry
        autoCorrect={false}
      />

<TextInput
        style={styles.input}
        
        value={name} onChangeText={(name)=>setName(name)}
        placeholder="Name"
        
      />
      <TextInput
        style={styles.input}
        
        value={number} onChangeText={(number)=>setNumber(number)}
        placeholder="Phone"
        returnKeyType='go'
        keyboardType='numeric'
        maxLength={11} 
        
      />
    

    <TouchableOpacity  onPress={regirster} style={styles.button} >

    <Text   style={styles.bu}>
        Signup
    </Text>
</TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>

  )
}

export default Signup

const styles = StyleSheet.create({
    main:{
        height:"100%",
        display:"flex",
        justifyContent:"Space-between",
        paddingHorizontal:20,
        backgroundColor:"white",
        textAlign:"center",
         },
       
         home:{
       
           display:"flex",
           justifyContent:"center",
           paddingHorizontal:20,
           backgroundColor:"white",
           textAlign:"center",
            },

            head:{
marginTop:100,
                fontSize:30,
                fontWeight:"bold",
                textAlign:"center",
                color:"grey",
                marginBottom:70,
                  },
                  input: {
                   backgroundColor:"lightgrey",
                    height: 40,
                    margin: 10,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius:5,
                  },

                  button: {
        
                    alignItems: "center",
                    backgroundColor: "blue",
                    padding: 5,
                    borderRadius:5,
                    marginTop:40,
                    marginLeft:160,
                  },
            
            bu:{
            
                fontSize:20,
                fontWeight:"bold",
                color:"white"},

                but1: {
        
                    alignItems: "center",
                    marginLeft:120,
                  },

                  buq1:{
            
                    fontSize:15,
                    fontWeight:"bold",
                    color:"red"},
    
})