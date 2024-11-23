import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../type';

export default function Logo() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.logoContainer}
      onPress={() => navigation.navigate('Home')}>
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
