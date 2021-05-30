import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import ProductItem from '../../../../components/ProductItem';
import {actSearchProduct} from '../../../../redux/actions/product';
import {
  Container,
  EmptyList,
  SearchBtn,
  SearchInput,
  SearchInputWrapper,
  VirtualizedListCustom,
} from './styled';

function SearchProduct({navigation, productsSearched, actSearchProduct}) {
  const [keyword, setKeyword] = useState('');

  const getItem = (allProduct, i) => ({
    _id: allProduct[i]._id,
    name: allProduct[i].name,
    imageUrls: allProduct[i].imageUrls,
    discountPercent: allProduct[i].discountPercent,
    priceBeforeDiscount: allProduct[i].priceBeforeDiscount,
    price: allProduct[i].price,
    markTime: allProduct[i].markTime,
    ecommerce: allProduct[i].ecommerce,
  });

  const listEmptyComponent = (
    <EmptyList>
      <Text>Không có sản phẩm!</Text>
    </EmptyList>
  );

  return (
    <Container>
      <SearchInputWrapper>
        <SearchInput
          placeholder="Tên sản phẩm"
          onChangeText={value => setKeyword(value)}></SearchInput>
        <SearchBtn type="primary" onPress={() => actSearchProduct(keyword)}>
          Tìm
        </SearchBtn>
      </SearchInputWrapper>

      <VirtualizedListCustom
        data={productsSearched.sort((a, b) => b.price - a.price)}
        getItem={getItem}
        getItemCount={allProduct => allProduct.length}
        ListEmptyComponent={listEmptyComponent}
        renderItem={({item}) => (
          <ProductItem {...item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item, index) => index}
        initialNumToRender={6}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  productsSearched: state.productsSearched,
});

const mapDispatchToProps = {
  actSearchProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
