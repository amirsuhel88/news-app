import {
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Logo from './Logo';
import {colors} from '../constants';

const Header = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        {/* navigation */}
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color={colors.black} />
        </TouchableOpacity>
        <Text>Back</Text>
        {/* logo */}
        <Logo />
        {/* Sign IN */}
        <TouchableOpacity style={styles.signInView}>
          <Text style={styles.signInText}>Sign In</Text>
          {/* icon */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.black,
  },
  BackButton: {},
  backButtonText: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  signInView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontWeight: '500',
    marginRight: 5,
  },
});
