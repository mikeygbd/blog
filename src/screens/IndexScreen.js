import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = ({}) => {
  const value = useContext(BlogContext)
  return (
  <View style={styles.container}>
    <Text>I'm Index Screen</Text>
    <Text>{value}</Text>

  </View>
);
}
export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
