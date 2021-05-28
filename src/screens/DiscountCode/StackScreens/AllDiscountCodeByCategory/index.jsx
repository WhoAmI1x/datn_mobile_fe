import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, Text} from 'react-native';
import {
  actGetDiscountCodeByCategory,
  actSaveDiscountCode,
} from '../../../../redux/actions/discountCode';
import {connect} from 'react-redux';
import {Col, GridLayout, Row} from '../../../../utils/gridStyled';
import {getDateString} from '../../../../utils/common';
import DiscountCodeDetail from '../../../../components/DiscountCodeDetail';
import {BASE_API_URL} from '../../../../utils/constants';
import {
  CategoryTitle,
  Container,
  DiscountCodeExpires,
  DiscountCodeImage,
  DiscountCodeItem,
  DiscountCodeShortDescription,
  DiscountCodeTitle,
  DiscountCodeInfo,
  DiscountCodeActions,
  DiscountCodeFullInfo,
  BtnText,
  DiscountCodeBtn,
  CategoryImage,
  Category,
} from './styled';
import {EmptyList} from '../../../Profile/StackScreens/EcommerceDiscountCode/styled';

function AllDiscountCodeByCategory({
  route: {
    params: {categoryId, name, imageUrl},
  },
  actGetDiscountCodeByCategory,
  actSaveDiscountCode,
  discountCodes,
}) {
  const [visible, setVisible] = useState(false);
  const [currentDiscountCode, setCurrentDiscountCode] = useState({});

  const handleShowDiscountCodeDetail = discountCode => {
    setVisible(true);
    setCurrentDiscountCode(discountCode);
  };

  const onRefresh = useCallback(
    () => actGetDiscountCodeByCategory(categoryId),
    [],
  );

  useEffect(() => {
    actGetDiscountCodeByCategory(categoryId);
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      <Category>
        <CategoryImage source={{uri: `${BASE_API_URL}${imageUrl}`}} />
        <CategoryTitle numberOfLines={1} ellipsizeMode="tail">
          {name}
        </CategoryTitle>
      </Category>

      <GridLayout>
        <Row>
          {discountCodes.length > 0 ? (
            discountCodes.map((discountCode, index) => (
              <Col key={index} span={12}>
                <DiscountCodeItem>
                  <DiscountCodeImage source={{uri: discountCode.imageUrl}} />

                  <DiscountCodeInfo>
                    <DiscountCodeTitle numberOfLines={1} ellipsizeMode="tail">
                      {discountCode.title}
                    </DiscountCodeTitle>
                    <DiscountCodeShortDescription
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {discountCode.description &&
                        discountCode.description.split('.\n')[0]}
                      .
                    </DiscountCodeShortDescription>
                    <DiscountCodeExpires>
                      Hạn dùng: {getDateString(discountCode.expires)}
                    </DiscountCodeExpires>
                  </DiscountCodeInfo>

                  <DiscountCodeActions>
                    <DiscountCodeBtn
                      onPress={() =>
                        handleShowDiscountCodeDetail(discountCode)
                      }>
                      <DiscountCodeFullInfo name="infocirlceo" />
                    </DiscountCodeBtn>
                    <DiscountCodeBtn
                      type="primary"
                      activeOpacity={0.6}
                      isSaveBtn
                      onPress={() => actSaveDiscountCode(discountCode._id)}>
                      <BtnText>Lưu</BtnText>
                    </DiscountCodeBtn>
                  </DiscountCodeActions>
                </DiscountCodeItem>
              </Col>
            ))
          ) : (
            <EmptyList>
              <Text>Danh sách trống!</Text>
            </EmptyList>
          )}
        </Row>
      </GridLayout>

      <DiscountCodeDetail
        visible={visible}
        setVisible={setVisible}
        currentDiscountCode={currentDiscountCode}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  discountCodes: state.discountCodes,
});

const mapDispatchToProps = {
  actGetDiscountCodeByCategory,
  actSaveDiscountCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllDiscountCodeByCategory);
