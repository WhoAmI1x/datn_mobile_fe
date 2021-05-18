import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {actUpdateUser, actGetUserInfo} from '../../../../redux/actions/user';
import {
  Container,
  Ecommerce,
  EcommerceName,
  EcommerceContent,
  Username,
  Password,
  EcommerceBtn,
  PasswordRow,
  PasswordIcon,
  PasswordIconBtn,
} from './styled';

function EcommerceAccount({userInfo, actUpdateUser}) {
  const [showPassword, setShowPassword] = useState({
    tiki: true,
    shopee: true,
  });
  const [accounts, setAccounts] = useState(() => ({
    tiki: userInfo.tikiAccount || {},
    shopee: userInfo.shopeeAccount || {},
  }));

  const handleUpdate = () => {
    actUpdateUser({tikiAccount: accounts.tiki, shopeeAccount: accounts.shopee});
  };

  const handleChangeTikiUsername = username =>
    setAccounts({...accounts, tiki: {...accounts.tiki, username}});

  const handleChangeTikiPassword = password =>
    setAccounts({...accounts, tiki: {...accounts.tiki, password}});

  const handleChangeShopeeUsername = username =>
    setAccounts({...accounts, shopee: {...accounts.shopee, username}});

  const handleChangeShopeePassword = password =>
    setAccounts({...accounts, shopee: {...accounts.shopee, password}});

  useEffect(() => {
    actGetUserInfo();
  }, []);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <Ecommerce>
          <EcommerceName>TIKI</EcommerceName>

          <EcommerceContent>
            <Username
              placeholder="Tài khoản"
              onChangeText={handleChangeTikiUsername}
              value={accounts.tiki.username}
            />
            <PasswordRow>
              <Password
                placeholder="Mật khẩu"
                onChangeText={handleChangeTikiPassword}
                value={accounts.tiki.password}
                secureTextEntry={showPassword.tiki}
              />
              <PasswordIconBtn
                onPress={() =>
                  setShowPassword({...showPassword, tiki: !showPassword.tiki})
                }>
                <PasswordIcon name="eyeo" />
              </PasswordIconBtn>
            </PasswordRow>
          </EcommerceContent>
        </Ecommerce>

        <Ecommerce>
          <EcommerceName>SHOPEE</EcommerceName>

          <EcommerceContent>
            <Username
              placeholder="Tài khoản"
              onChangeText={handleChangeShopeeUsername}
              value={accounts.shopee.username}
            />
            <PasswordRow>
              <Password
                placeholder="Mật khẩu"
                onChangeText={handleChangeShopeePassword}
                value={accounts.shopee.password}
                secureTextEntry={showPassword.shopee}
              />
              <PasswordIconBtn
                onPress={() =>
                  setShowPassword({
                    ...showPassword,
                    shopee: !showPassword.shopee,
                  })
                }>
                <PasswordIcon name="eyeo" />
              </PasswordIconBtn>
            </PasswordRow>
          </EcommerceContent>
        </Ecommerce>

        <EcommerceBtn type="ghost" onPress={handleUpdate}>
          Cập nhật
        </EcommerceBtn>
      </ScrollView>
    </Container>
  );
}

const mapStateToProps = state => ({
  userInfo: state.user,
});

const mapDispatchToProps = {actUpdateUser};

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceAccount);
