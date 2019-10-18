import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import {Context} from '../context/BlogContext'

const EditScreen = ({ navigation }) => {

  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

  const [title, setTitle] = useState(blogPost.title)

  const [content, setContent] = useState(blogPost.content)

  return (
  <View style={styles.container}>
    <Text>Edit Title:</Text>
    <TextInput value={title} onChange={(newTitle) => setTitle(newTitle)} />

  </View>
);
}
export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
