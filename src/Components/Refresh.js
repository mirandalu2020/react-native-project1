import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import { styles } from './../../styles'

const Refresh = ( { RandomCat } ) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    RandomCat='https://cataas.com/cat';
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.scrollView}>
    {refreshing ? <ActivityIndicator /> : null}
    <FlatList 
      keyExtractor={(item, index) => index.toString()}
      enableEmptySections={true}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  </View>
  );
};


export default Refresh;