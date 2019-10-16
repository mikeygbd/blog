import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ShowScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm ShowScreen</Text>
  </View>
);

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
