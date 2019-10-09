import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const IndexScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm IndexScreen</Text>
  </View>
);

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
