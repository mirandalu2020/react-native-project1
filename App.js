import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import MeowButton from './src/Components/MeowButton';
import { styles } from './styles';
import CatImage from './src/Components/CatImage';
const PlaceholderImage = require('./assets/kittens.jpeg');

export default function App() {

  const [cat, setCat] = React.useState('https://cataas.com/cat')
  const [refreshing, setRefreshing] = React.useState(false);

  const imageUrl = `https://cataas.com/cat?${Math.random().toString(36)}`;
// const imageUrl = `https://cataas.com/cat`

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setCat(imageUrl);
      setRefreshing(false);
    }, 1000);
  }, [cat]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

        <SafeAreaView style={{justifyContent:'center', alignItems:'center', alignContent:'center'}}>
          <CatImage randomCat={cat} />
          <MeowButton />
        </SafeAreaView>

      </ ScrollView>
    </View>
  );
}