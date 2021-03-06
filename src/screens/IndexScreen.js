import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/BlogContext';
import {Entypo} from  '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

  const {state, deleteBlogPost, getBlogPosts } = useContext(Context)

  useEffect(() => {
    getBlogPosts()

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
    })
    return () => {
      listener.remove()
    }
  }, [])


  return (
    <View style={styles.container}>
      <FlatList
      data={state}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({ item }) => {
        return (
        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Entypo style={styles.icon} name="trash" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )
    }}
    />

    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight:(
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Entypo name="plus" style={styles.plusIcon} size={30} />
      </TouchableOpacity>
    )
  }
}


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
  },
  plusIcon: {
    marginRight: 10
  }

});
export default IndexScreen;
