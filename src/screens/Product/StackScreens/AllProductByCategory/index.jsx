import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import ProductItem from '../../../../components/ProductItem';
import {BASE_API_URL} from '../../../../utils/constants';
import {
  actGetProductsByCategory,
  actResetProductList,
} from '../../../../redux/actions/product';
import {
  Container,
  Category,
  CategoryImage,
  CategoryTitle,
  FlatListCustom,
  EmptyList,
} from './styled';

function AllProductByCategory({
  navigation: {navigate},
  route: {
    params: {categoryId, name, imageUrl},
  },
  actGetProductsByCategory,
  actResetProductList,
  products,
}) {
  const onRefresh = useCallback(() => actGetProductsByCategory(categoryId), []);

  const getItem = (allProduct, i) => ({
    _id: allProduct[i]._id,
    name: allProduct[i].name,
    imageUrls: allProduct[i].imageUrls,
    discountPercent: allProduct[i].discountPercent,
    priceBeforeDiscount: allProduct[i].priceBeforeDiscount,
    price: allProduct[i].price,
    endTime: allProduct[i].endTime,
  });

  useEffect(() => {
    actGetProductsByCategory(categoryId);

    return () => actResetProductList();
  }, []);

  const listEmptyComponent = (
    <EmptyList>
      <Text>Không có sản phẩm!</Text>
    </EmptyList>
  );

  const listHeaderComponent = (
    <Category>
      <CategoryImage source={{uri: `${BASE_API_URL}${imageUrl}`}} />
      <CategoryTitle>{name}</CategoryTitle>
    </Category>
  );

  return (
    <Container>
      <FlatListCustom
        data={products}
        getItem={getItem}
        getItemCount={allProduct => allProduct.length}
        ListHeaderComponent={listHeaderComponent}
        ListEmptyComponent={listEmptyComponent}
        refreshing={false}
        onRefresh={onRefresh}
        renderItem={({item}) => <ProductItem {...item} navigate={navigate} />}
        keyExtractor={item => item._id}
        initialNumToRender={6}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  actGetProductsByCategory,
  actResetProductList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllProductByCategory);
