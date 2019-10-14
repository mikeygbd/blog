import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = ({}) => {
  const blogPosts = useContext(BlogContext)
  return (
  <View style={styles.container}>
    <Text>I'm Index Screen</Text>
    <FlatList
    data={blogPosts}
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
