import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const EditScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm EditScreen</Text>
  </View>
);

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
