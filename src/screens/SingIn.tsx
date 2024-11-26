import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants';
import Logo from '../component/Logo';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {loginFailure, loginSuccess} from '../store/slices/authSlice';
import {HomeScreenNavigationProp, RootStackParamList} from '../../type';
const {width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {baseUrl} from '../../baseUrl';
const SingIn = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      const {data} = response.data;

      // Dispatch login success action

      dispatch(
        loginSuccess({
          user: data.user,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          isAuthenticated: false,
          error: null,
        }),
      );
      setLoading(false);
      navigation.navigate('Home');
    } catch (err: any) {
      // Handle login error
      dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Logo />
        <Text style={styles.singInText}>Sign In</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.darkGray}
            style={styles.inputSyle}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.darkGray}
            style={styles.inputSyle}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.buttonView} onPress={handleLogin}>
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
