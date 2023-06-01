import { StyleSheet, Text, View, Image, SafeAreaView, Box, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import React from 'react';
// import Refresh from './Refresh';
import { styles } from './../../styles'
import AppLoading from 'expo-app-loading';
import { useFonts, CuteFont_400Regular } from '@expo-google-fonts/cute-font';



function CatImage( { randomCat } ) {

  let [fontsLoaded] = useFonts({
    CuteFont_400Regular,
  });

  // const imageUrl = `${randomCat}?${Math.random().toString(36)}`;

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return(
      <View style={styles.imgContainer}>
      <Text style={{fontFamily:'CuteFont_400Regular', fontSize:60}}>
      Cat Time
      </Text>
      <Image key={Date.now()} src={randomCat} style={styles.image} />
      </View >
  )
  }
}

export default CatImage