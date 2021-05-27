import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import ProductItem from '../../../../components/ProductItem';
import {BASE_API_URL} from '../../../../utils/constants';
import {actCarts} from '../../../../redux/actions/cart';
import {
  Container,
  Ecommerce,
  EcommerceTitle,
  EmptyList,
  EcommerceWrapper,
} from './styled';

function AllCart({actCarts, carts}) {
  useEffect(() => {
    actCarts();
  }, []);

  return (
    <Container>
      {carts.map(({ecommerce, productIds}, index) => (
        <EcommerceWrapper key={index}>
          <Ecommerce>
            <EcommerceTitle>{ecommerce}</EcommerceTitle>
          </Ecommerce>

          {productIds.length > 0 ? (
            productIds.map((product, index) => (
              <ProductItem {...product} isCart key={index} />
            ))
          ) : (
            <EmptyList>
              <Text>Không có sản phẩm!</Text>
            </EmptyList>
          )}
        </EcommerceWrapper>
      ))}
    </Container>
  );
}

const mapStateToProps = state => ({
  carts: state.carts,
});

const mapDispatchToProps = {
  actCarts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCart);
