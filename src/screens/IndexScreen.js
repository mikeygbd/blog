import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button
} from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = ({}) => {
  const {state, addBlogPost } = useContext(Context)
  return (
  <View style={styles.container}>
    <Text>I'm Index Screen</Text>
    <Button title="Add Post" onPress={addBlogPost}/>
    <FlatList
    data={state}
    keyExtractor={(blogPost) => blogPost.title}
    renderItem={({ item }) => {
      return <Text>{item.title}</Text>
    }}
    />

  </View>
)
}
export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
