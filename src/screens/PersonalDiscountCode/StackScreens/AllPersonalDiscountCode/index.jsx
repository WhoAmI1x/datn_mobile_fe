import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {
  actGetPersonalDiscountCodes,
  actDeletePersonalDiscountCode,
  actUpdatePersonalDiscountCode,
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
  DiscountCodeBtnUse,
  SelectInputCustom,
} from './styled';

function PersonalDiscountCode({
  actGetPersonalDiscountCodes,
  personalDiscountCodes,
  actDeletePersonalDiscountCode,
  navigation,
  actUpdatePersonalDiscountCode,
}) {
  const [visible, setVisible] = useState(false);
  const [currentPersonalDiscountCode, setCurrentPersonalDiscountCode] =
    useState({});
  const [personalDiscountCodeSwiped, setPersonalDiscountCodeSwiped] = useState(
    {},
  );
  const [filterValue, setFilterValue] = useState(1);

  const left = [
    {
      text: 'Sửa',
      onPress: () =>
        navigation.navigate('CreatePersonalDiscountCode', {
          pDCEdited: personalDiscountCodeSwiped,
        }),
      style: {backgroundColor: 'orange', color: 'white'},
    },
    {
      text: 'Xóa',
      onPress: () =>
        actDeletePersonalDiscountCode(personalDiscountCodeSwiped._id),
      style: {backgroundColor: 'red', color: 'white'},
    },
  ];

  const selectOptions = [
    {
      value: 1,
      label: 'Tất cả',
    },
    {
      value: 2,
      label: 'Sắp hết hạn',
    },
    {
      value: 3,
      label: 'Đã hết hạn',
    },
    {
      value: 4,
      label: 'Đã dùng',
    },
  ];

  const handleShowPersonalDiscountCodeDetail = personalDiscountCode => {
    setVisible(true);
    setCurrentPersonalDiscountCode(personalDiscountCode);
  };

  const handleChangeUseStatus = pdc => {
    const formData = new FormData();
    formData.append('isUsed', !pdc.isUsed);

    actUpdatePersonalDiscountCode(navigation.navigate, formData, pdc._id);
  };

  const handleChangeFilter = fv => setFilterValue(fv);

  const handleChangePersonalDiscountCodeList = pdc => {
    if (filterValue === 1) {
      return pdc;
    } else if (filterValue === 2) {
      return (
        !pdc.isUsed &&
        pdc.expires < Date.now() + 259200000 &&
        pdc.expires > Date.now()
      );
    } else if (filterValue === 3) {
      return pdc.expires - Date.now() <= 0;
    } else {
      return pdc.isUsed;
    }
  };

  const onRefresh = useCallback(() => actGetPersonalDiscountCodes(), []);

  useEffect(() => {
    actGetPersonalDiscountCodes();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setVisible(false);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!visible) {
      setCurrentPersonalDiscountCode({});
    }
  }, [visible]);

  return (
    <Container>
      <ScreenTitle>Mã cá nhân</ScreenTitle>

      <SelectInputCustom
        options={selectOptions}
        value={filterValue}
        onSubmitEditing={handleChangeFilter}
      />

      <CodeList
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }>
        <GridLayout>
          <Row>
            {personalDiscountCodes
              .filter(handleChangePersonalDiscountCodeList)
              .sort((pdc1, pdc2) => pdc1.expires - pdc2.expires)
              .map((personalDiscountCode, index) => (
                <Col key={index} span={12}>
                  <SwipeActionCustom
                    autoClose
                    left={left}
                    onOpen={() =>
                      setPersonalDiscountCodeSwiped(personalDiscountCode)
                    }
                    onClose={() => setPersonalDiscountCodeSwiped({})}>
                    <PersonalDiscountCodeItem>
                      <DiscountCodeImage
                        source={{
                          uri: `${BASE_API_URL}${personalDiscountCode.imageUrls[0]}`,
                        }}
                      />

                      <DiscountCodeInfo>
                        <DiscountCodeTitle
                          numberOfLines={1}
                          ellipsizeMode="tail">
                          {personalDiscountCode.title}
                        </DiscountCodeTitle>
                        <DiscountCodeShortDescription
                          numberOfLines={1}
                          ellipsizeMode="tail">
                          {personalDiscountCode.description.split('.\n')[0]}.
                        </DiscountCodeShortDescription>
                        <DiscountCodeExpires>
                          Hạn dùng:{' '}
                          {getDateString(personalDiscountCode.expires)}
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

                        <DiscountCodeBtn
                          activeOpacity={0.6}
                          onPress={() =>
                            handleChangeUseStatus(personalDiscountCode)
                          }>
                          <DiscountCodeBtnUse
                            isUsed={personalDiscountCode.isUsed}>
                            {personalDiscountCode.isUsed ? 'Đã dùng' : 'Dùng'}
                          </DiscountCodeBtnUse>
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
  actUpdatePersonalDiscountCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalDiscountCode);
