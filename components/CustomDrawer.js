import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const bg = require("../assets/images/College_Photo.png");
const kle = require("../assets/images/kleit_logo.png");

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#735029" }}
      >
        <ImageBackground source={bg} style={{padding:20}}>
        <Image source={kle} style={{height:120, width:120, }}/>
        {/* <Text style={{fontFamily:'Roboto_500Medium', marginTop:5, color: 'white', fontSize:20}}>KLE IT</Text> */}
        </ImageBackground>
      <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
        <DrawerItemList {...props} />
      </View>
      </DrawerContentScrollView>
    </View>
  );
}

//borderRadius:100, borderColor:'black',borderWidth:3