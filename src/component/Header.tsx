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
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../type';

interface Props {
  icon?: boolean;
}
const Header = ({icon}: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        {/* navigation */}
        <View style={styles.BackButton}>
          {icon ? (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons name="arrow-back" size={24} color={colors.black} />
            </TouchableOpacity>
          ) : (
            <Text style={styles.backButtonText}>News</Text>
          )}
        </View>
        {/* logo */}
        <Logo />
        {/* Sign IN */}
        <TouchableOpacity
          style={styles.signInView}
          onPress={() => navigation.navigate('SignIn')}>
          <Ionicons name="person" size={24} color={colors.black} />

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
