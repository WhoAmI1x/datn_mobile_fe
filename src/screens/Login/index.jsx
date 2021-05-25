import {Toast} from '@ant-design/react-native';
import React, {useState} from 'react';
import {Platform} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {connect} from 'react-redux';
import {actRegister, actLogIn} from '../../redux/actions/user';
import isFalsyValue from '../../utils/isFalsyValue';
import {
  Container,
  FormItem,
  FormLoginWrapper,
  ImageCustom,
  FormItemName,
  FormItemInput,
  TextInputCustom,
  ButtonLogin,
  ButtonRegister,
  Or,
  KeyboardAvoidingViewCustom,
  TextValidate,
} from './styled';

const defaultAccount = {
  fullName: {value: '', isValid: false},
  email: {value: '', isValid: false},
  password: {value: '', isValid: false},
};

function Login({actRegister, actLogIn}) {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [account, setAccount] = useState(defaultAccount);

  const handleChangeScreen = () => {
    setIsLoginScreen(!isLoginScreen);
    setAccount(defaultAccount);
  };

  const onChangeEmail = value =>
    setAccount({...account, email: {value, isValid: isFalsyValue(value)}});

  const onChangeFullName = value =>
    setAccount({...account, fullName: {value, isValid: isFalsyValue(value)}});

  const onChangePassword = value =>
    setAccount({...account, password: {value, isValid: isFalsyValue(value)}});

  const handlePress = () => {
    if (
      ((!isLoginScreen && !account.fullName.value) || isLoginScreen) &&
      !account.email.value &&
      !account.password.value
    ) {
      return Toast.fail('Cần nhập đủ thông tin!', 1);
    }

    if (
      !isLoginScreen &&
      account.fullName.value &&
      account.email.value &&
      account.password.value
    ) {
      return actRegister({
        fullName: account.fullName.value,
        email: account.email.value,
        password: account.password.value,
      });
    }

    if (isLoginScreen && account.email.value && account.password.value) {
      return actLogIn({
        email: account.email.value,
        password: account.password.value,
      });
    }
  };

  return (
    <Container>
      <KeyboardAvoidingViewCustom
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ImageCustom source={require('../../assets/images/login.png')} />

        <FormLoginWrapper>
          {!isLoginScreen && (
            <>
              <FormItem isValid={account.fullName.isValid}>
                <FormItemName>
                  <SimpleLineIcons name="user" size={26} color="#78B1FF" />
                </FormItemName>
                <TextInputCustom
                  onChangeText={onChangeFullName}
                  value={account.fullName.value}
                  placeholder="Nhập Tên"
                />
              </FormItem>
              {account.fullName.isValid && (
                <TextValidate>Không được để trống!</TextValidate>
              )}
            </>
          )}

          <FormItem isValid={account.email.isValid}>
            <FormItemName>
              <Fontisto name="email" size={26} color="#78B1FF" />
            </FormItemName>
            <TextInputCustom
              onChangeText={onChangeEmail}
              value={account.email.value}
              placeholder="Nhập email"
              keyboardType="email-address"
            />
          </FormItem>
          {account.email.isValid && (
            <TextValidate>Không được để trống!</TextValidate>
          )}

          <FormItem isValid={account.password.isValid}>
            <FormItemName>
              <Octicons name="lock" size={30} color="#78B1FF" />
            </FormItemName>
            <TextInputCustom
              onChangeText={onChangePassword}
              value={account.password.value}
              placeholder="Nhập password"
              secureTextEntry={true}
            />
          </FormItem>
          {account.password.isValid && (
            <TextValidate>Không được để trống!</TextValidate>
          )}

          <ButtonLogin type="primary" onPressIn={handlePress}>
            {isLoginScreen ? 'Đăng nhập' : 'Đăng ký'}
          </ButtonLogin>

          <Or>Hoặc</Or>

          <ButtonRegister type="ghost" onPressIn={handleChangeScreen}>
            {isLoginScreen ? 'Đăng ký' : 'Đăng nhập'}
          </ButtonRegister>
        </FormLoginWrapper>
      </KeyboardAvoidingViewCustom>
    </Container>
  );
}

const mapDispatchToProps = {
  actRegister,
  actLogIn,
};

export default connect(null, mapDispatchToProps)(Login);
