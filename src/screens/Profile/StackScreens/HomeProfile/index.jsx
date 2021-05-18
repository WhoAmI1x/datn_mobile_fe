import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {actLogOut} from '../../../../redux/actions/user';
import {
  Container,
  AccInfo,
  Account,
  Avatar,
  LogOutBtn,
  UserName,
  UserEmail,
  Sessions,
  Session,
  SessionTitle,
  SessionIconCount,
  SessionArrowIcon,
  SessionIconGuide,
  SessionIconCart,
  SessionIconSearch,
} from './styled';

function HomeProfile({navigation: {navigate}, userInfo, actLogOut}) {
  return (
    <Container>
      <Account>
        <Avatar
          source={
            userInfo.avatarUrl
              ? {
                  uri: userInfo.avatarUrl,
                }
              : require('../../../../assets/images/avatar.png')
          }
        />
        <AccInfo>
          <UserName>{userInfo.fullName}</UserName>
          <UserEmail>{userInfo.email}</UserEmail>
        </AccInfo>
      </Account>

      <Sessions>
        <Session
          activeOpacity={0.5}
          onPress={() => navigate('EcommerceAccount')}>
          <SessionIconCount name="account" />
          <SessionTitle>Quản lý tài khoản sàn</SessionTitle>
          <SessionArrowIcon name="right" />
        </Session>

        <Session activeOpacity={0.5} onPress={() => navigate('SearchProduct')}>
          <SessionIconSearch name="search1" />
          <SessionTitle>Tìm kiếm sản phẩm</SessionTitle>
          <SessionArrowIcon name="right" />
        </Session>

        <Session activeOpacity={0.5} onPress={() => navigate('Guide')}>
          <SessionIconCart name="shoppingcart" />
          <SessionTitle>Giỏ hàng</SessionTitle>
          <SessionArrowIcon name="right" />
        </Session>

        <Session activeOpacity={0.5} onPress={() => navigate('Guide')}>
          <SessionIconGuide name="comment-question-outline" />
          <SessionTitle>Hướng dẫn lưu sản phẩm và mã giảm giá</SessionTitle>
          <SessionArrowIcon name="right" />
        </Session>
      </Sessions>

      <LogOutBtn type="ghost" onPress={actLogOut}>
        Đăng xuất
      </LogOutBtn>
    </Container>
  );
}

const mapStateToProps = state => ({
  userInfo: state.user,
});

const mapDispatchToProps = {
  actLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeProfile);
