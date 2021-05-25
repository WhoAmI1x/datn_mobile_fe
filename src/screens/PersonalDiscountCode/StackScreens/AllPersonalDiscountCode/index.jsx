import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {
  actGetPersonalDiscountCodes,
  actDeletePersonalDiscountCode,
} from '../../../../redux/actions/personalDiscountCode';
import {getDateString} from '../../../../utils/common';
import {BASE_API_URL} from '../../../../utils/constants';
import {Col, GridLayout, Row} from '../../../../utils/gridStyled';
import PersonalDiscountCodeDetail from '../../../../components/PersonalDiscountCodeDetail';
import {
  CodeList,
  Container,
  ScreenTitle,
  PersonalDiscountCodeItem,
  SwipeActionCustom,
  DiscountCodeImage,
  DiscountCodeInfo,
  DiscountCodeTitle,
  DiscountCodeShortDescription,
  DiscountCodeExpires,
  DiscountCodeActions,
  DiscountCodeBtn,
  DiscountCodeFullInfo,
  BtnCreateIcon,
  DiscountCodeBtnCreate,
} from './styled';

function PersonalDiscountCode({
  actGetPersonalDiscountCodes,
  personalDiscountCodes,
  actDeletePersonalDiscountCode,
  navigation,
}) {
  const [visible, setVisible] = useState(false);
  const [currentPersonalDiscountCode, setCurrentPersonalDiscountCode] =
    useState({});
  const [personalDiscountCodeId, setPersonalDiscountCodeId] = useState('');

  const handleShowPersonalDiscountCodeDetail = personalDiscountCode => {
    setVisible(true);
    setCurrentPersonalDiscountCode(personalDiscountCode);
  };

  useEffect(() => {
    actGetPersonalDiscountCodes();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setVisible(false);
    });

    return unsubscribe;
  }, [navigation]);

  const left = [
    {
      text: 'Sửa',
      onPress: () => {},
      style: {backgroundColor: 'orange', color: 'white'},
    },
    {
      text: 'Xóa',
      onPress: a => {
        console.log('a: ', a);
        actDeletePersonalDiscountCode(personalDiscountCodeId);
      },
      style: {backgroundColor: 'red', color: 'white'},
    },
  ];

  const onRefresh = useCallback(() => actGetPersonalDiscountCodes(), []);

  return (
    <Container>
      <ScreenTitle>Mã cá nhân</ScreenTitle>

      <CodeList
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }>
        <GridLayout>
          <Row>
            {personalDiscountCodes.map((personalDiscountCode, index) => (
              <Col key={index} span={12}>
                <SwipeActionCustom
                  autoClose
                  left={left}
                  onOpen={() =>
                    setPersonalDiscountCodeId(personalDiscountCode._id)
                  }
                  onClose={() => setPersonalDiscountCodeId('')}>
                  <PersonalDiscountCodeItem>
                    <DiscountCodeImage
                      source={{
                        uri: `${BASE_API_URL}${personalDiscountCode.imageUrls[0]}`,
                      }}
                    />

                    <DiscountCodeInfo>
                      <DiscountCodeTitle numberOfLines={1} ellipsizeMode="tail">
                        {personalDiscountCode.title}
                      </DiscountCodeTitle>
                      <DiscountCodeShortDescription
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {personalDiscountCode.description.split('.\n')[0]}.
                      </DiscountCodeShortDescription>
                      <DiscountCodeExpires>
                        Hạn dùng: {getDateString(personalDiscountCode.expires)}
                      </DiscountCodeExpires>
                    </DiscountCodeInfo>

                    <DiscountCodeActions>
                      <DiscountCodeBtn
                        onPress={() =>
                          handleShowPersonalDiscountCodeDetail(
                            personalDiscountCode,
                          )
                        }>
                        <DiscountCodeFullInfo name="infocirlceo" />
                      </DiscountCodeBtn>
                    </DiscountCodeActions>
                  </PersonalDiscountCodeItem>
                </SwipeActionCustom>
              </Col>
            ))}
          </Row>
        </GridLayout>
      </CodeList>

      <PersonalDiscountCodeDetail
        visible={visible}
        setVisible={setVisible}
        currentPersonalDiscountCode={currentPersonalDiscountCode}
      />

      <DiscountCodeBtnCreate
        onPress={() => navigation.navigate('CreatePersonalDiscountCode')}>
        <BtnCreateIcon name="plus" />
      </DiscountCodeBtnCreate>
    </Container>
  );
}

const mapStateToProps = state => ({
  personalDiscountCodes: state.personalDiscountCodes,
});

const mapDispatchToProps = {
  actGetPersonalDiscountCodes,
  actDeletePersonalDiscountCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalDiscountCode);
