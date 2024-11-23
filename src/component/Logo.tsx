import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants';

export default function Logo() {
  return (
    <TouchableOpacity
      style={styles.logoContainer}
      onPress={() => console.log('logo clicked')}>
      <View style={styles.logoView}>
        <Text style={styles.logoText}>A</Text>
      </View>
      <View style={styles.logoView}>
        <Text style={styles.logoText}>M</Text>
      </View>
      <View style={styles.logoView}>
        <Text style={styles.logoText}>i</Text>
      </View>
      <View style={styles.logoView}>
        <Text style={styles.logoText}>R</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoView: {
    backgroundColor: colors.black,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 3,
    marginLeft: 5,
  },
  logoText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
