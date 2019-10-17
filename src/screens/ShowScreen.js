import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
return (
  <View style={styles.container}>
    <Text>{blogPost.title}</Text>
  </View>
);
}
export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
