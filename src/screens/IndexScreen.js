import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button
} from 'react-native';
import { Context } from '../context/BlogContext';
import {Entypo} from  '@expo/vector-icons'

const IndexScreen = ({}) => {
  const {state, addBlogPost } = useContext(Context)
  return (
  <View style={styles.container}>
    <Button title="Add Post" onPress={addBlogPost}/>
    <FlatList
    data={state}
    keyExtractor={(blogPost) => blogPost.title}
    renderItem={({ item }) => {
      return <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
        <Entypo style={styles.icon} name="trash" />
      </View>
    }}
    />

  </View>
)
}
export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,

  },
  icon: {
    fontSize: 24,
  }
});
