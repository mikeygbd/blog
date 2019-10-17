import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
return (
  <View style={styles.container}>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>

  </View>
);
}

ShowScreen.navigationOptions= ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
      <Entypo style={styles.editIcon} name="edit" size={35}/>
      </TouchableOpacity>
    )
  }
}
export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editIcon: {
    marginRight: 10
  }
});
