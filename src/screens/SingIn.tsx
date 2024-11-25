import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {colors} from '../constants';
import Logo from '../component/Logo';
const {width} = Dimensions.get('window');

const SingIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Logo />
        <Text style={styles.singInText}>Sign In</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email or useranme"
            placeholderTextColor={colors.darkGray}
            style={styles.inputSyle}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.darkGray}
            style={styles.inputSyle}
            secureTextEntry
          />
          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpView}>
            <Text style={styles.helpText}>Need help singing in?</Text>
          </TouchableOpacity>
          <View style={{paddingVertical: 20}}>
            <Text style={styles.noAccountText}>
              Don't have an AMir Account?
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.helpText, {textAlign: 'center'}]}>
              Register now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SingIn;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  singInText: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: 20,
  },
  inputView: {width: width - 30, paddingVertical: 20},
  inputSyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.black,
    paddingHorizontal: 6,
    marginTop: 15,
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  buttonView: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 7,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  helpView: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.black,
  },
  helpText: {
    color: colors.blue,
    fontWeight: '700',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  noAccountText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
  },
});
