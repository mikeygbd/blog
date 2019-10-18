import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

export default BlogPostForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});
