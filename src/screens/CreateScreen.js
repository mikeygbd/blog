import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {

return (
  <View style={styles.container}>
    <Text>Create</Text>
  </View>
);
}
export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
