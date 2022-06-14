import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Login from './Login'

const WelCome = ({navigation}) => {
   return (
    <View style={styles.main}>
      <View style={styles.home}>

      <Text   style={styles.head} >
        WelCome
        </Text>
        
      </View>

    </View>
  )
}

export default WelCome

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

  pic:{
height:"undefined",
width:"100%",
aspectRatio:1,
display:"flex",

marginTop:30,

  },

  head:{

fontSize:30,
fontWeight:"bold",
textAlign:"center",
color:"black",

  },

 

      button: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        borderRadius:5,
        marginTop:40,
      },

bu:{

    fontSize:20,
    fontWeight:"bold",
    color:"white"

}


})