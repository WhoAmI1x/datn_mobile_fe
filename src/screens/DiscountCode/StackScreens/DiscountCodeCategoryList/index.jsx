import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {actGetCategories} from '../../../../redux/actions/categories';
import {BASE_API_URL} from '../../../../utils/constants';
import {Col, Row} from '../../../../utils/gridStyled';
import {
  Container,
  Ecommerce,
  EcommerceName,
  EcommerceList,
  CategoryItem,
  CategoryImage,
  CategoryName,
  CategoryIcon,
} from './styled';

function DiscountCodeCategoryList({
  navigation: {navigate},
  actGetCategories,
  categories,
}) {
  const onRefresh = useCallback(() => actGetCategories(), []);

  useEffect(() => {
    if (categories.length <= 0) {
      actGetCategories();
    }
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      <Ecommerce>
        <EcommerceName>TIKI</EcommerceName>
        <EcommerceList>
          <Row>
            {categories
              .filter(
                ({ecommerce, type}) =>
                  ecommerce === 'TIKI' && type === 'DISCOUNT_CODE',
              )
              .map(({_id, name, imageUrl}, index) => (
                <Col key={index} span={6}>
                  <CategoryItem
                    onPress={() =>
                      navigate('AllDiscountCodeByCategory', {
                        categoryId: _id,
                        name,
                        imageUrl,
                      })
                    }
                    activeOpacity={0.5}>
                    <CategoryImage
                      source={{
                        uri: `${BASE_API_URL}${imageUrl}`,
                      }}
                    />
                    <CategoryName>{name}</CategoryName>
                  </CategoryItem>
                </Col>
              ))}
          </Row>
        </EcommerceList>
      </Ecommerce>

      <Ecommerce>
        <EcommerceName>SHOPEE</EcommerceName>
        <EcommerceList>
          <Row>
            {categories
              .filter(
                ({ecommerce, type}) =>
                  ecommerce === 'SHOPEE' && type === 'DISCOUNT_CODE',
              )
              .map(({_id, name, imageUrl}, index) => (
                <Col key={index} span={6}>
                  <CategoryItem
                    onPress={() =>
                      navigate('AllDiscountCodeByCategory', {
                        categoryId: _id,
                        name,
                        imageUrl,
                      })
                    }>
                    <CategoryImage
                      source={{
                        uri: `${BASE_API_URL}${imageUrl}`,
                      }}
                    />
                    <CategoryName>{name}</CategoryName>
                    <CategoryIcon></CategoryIcon>
                  </CategoryItem>
                </Col>
              ))}
          </Row>
        </EcommerceList>
      </Ecommerce>
    </Container>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  actGetCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscountCodeCategoryList);
