import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View, Linking, Button} from 'react-native';
import {connect} from 'react-redux';
import {
  actGetProductDetail,
  actAddProductToCart,
} from '../../../../redux/actions/product';
import {Col, Row} from '../../../../utils/gridStyled';
import NumberFormat from 'react-number-format';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  CarouselCustom,
  Container,
  Content,
  ImageCustom,
  Name,
  CurrentPrice,
  PriceBeforeDiscount,
  ColCustom,
  DiscountPercent,
  RowCustom,
  Rate,
  RateAverage,
  Sold,
  DetailRow,
  TextSessionTitle,
  TableRow,
  PropertyName,
  PropertyValue,
  DescriptionRow,
  DescriptionText,
  ProductUrl,
  ProductUrlRow,
  BtnAddToCart,
  BtnAddToCartText,
} from './styled';

function ProductDetail({
  route: {
    params: {productId},
  },
  actGetProductDetail,
  actAddProductToCart,
}) {
  // console.log(productId);

  const [productFullInfo, setProductFullInfo] = useState({});
  const [currentImage, setCurrentImage] = useState(6);

  useEffect(() => {
    actGetProductDetail(productId, pFInfo => {
      setProductFullInfo(pFInfo);
    });
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <CarouselCustom
        selectedIndex={currentImage}
        autoplay
        infinite
        afterChange={i => setCurrentImage(i)}>
        {productFullInfo.imageUrls &&
          productFullInfo.imageUrls.map((imgUrl, index) => (
            <ImageCustom
              key={index}
              source={{uri: imgUrl}}
              resizeMode="contain"
            />
          ))}
      </CarouselCustom>

      <Content>
        <RowCustom>
          <Col span={12}>
            <Name>{productFullInfo.name}</Name>
          </Col>

          <ColCustom span={12}>
            <NumberFormat
              value={productFullInfo.price}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              suffix="đ"
              renderText={price => <CurrentPrice>{price}</CurrentPrice>}
            />

            <NumberFormat
              value={productFullInfo.priceBeforeDiscount}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              suffix="đ"
              renderText={price => (
                <PriceBeforeDiscount>{price}</PriceBeforeDiscount>
              )}
            />

            <DiscountPercent>{`-${productFullInfo.discountPercent}%`}</DiscountPercent>
          </ColCustom>

          <ColCustom span={12}>
            <Rate>
              <Rating
                type="star"
                startingValue={productFullInfo.rateAverage}
                ratingCount={5}
                imageSize={16}
              />

              <RateAverage>
                {productFullInfo.rateAverage &&
                  productFullInfo.rateAverage.toFixed(1)}
              </RateAverage>
            </Rate>

            <Sold>
              Đã bán:{' '}
              <NumberFormat
                value={productFullInfo.quantitySold}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                renderText={sold => <Text>{sold}</Text>}
              />
              /
              <NumberFormat
                value={productFullInfo.quantityRemain}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                renderText={sold => <Text>{sold}</Text>}
              />
            </Sold>

            <BtnAddToCart
              activeOpacity={0.5}
              onPress={() => actAddProductToCart(productFullInfo._id)}>
              <BtnAddToCartText>Lưu</BtnAddToCartText>
            </BtnAddToCart>
          </ColCustom>
        </RowCustom>

        <DetailRow>
          <Col span={12}>
            <TextSessionTitle>Thông tin chi tiết</TextSessionTitle>
          </Col>
          <Col span={12}>
            {productFullInfo.productDetail &&
              productFullInfo.productDetail
                .filter(({value}) => value)
                .map(({name, value}, index) => (
                  <TableRow key={index} isOdd={Boolean(index % 2)}>
                    <Col span={6}>
                      <PropertyName>{name}</PropertyName>
                    </Col>
                    <Col span={6}>
                      <PropertyValue>{value}</PropertyValue>
                    </Col>
                  </TableRow>
                ))}
          </Col>
        </DetailRow>

        <ProductUrlRow>
          <Col span={12}>
            <TextSessionTitle>Link sản phẩm</TextSessionTitle>
          </Col>
          <Col span={12}>
            <ProductUrl
              onPress={() => Linking.openURL(productFullInfo.productUrl)}>
              {productFullInfo.productUrl}
            </ProductUrl>
          </Col>
        </ProductUrlRow>

        <DescriptionRow>
          <Col span={12}>
            <TextSessionTitle>Mô tả</TextSessionTitle>
          </Col>

          <Col span={12}>
            <DescriptionText>
              {productFullInfo.productDescription}
            </DescriptionText>
          </Col>
        </DescriptionRow>
      </Content>
    </Container>
  );
}

const mapDispatchToProps = {
  actGetProductDetail,
  actAddProductToCart,
};

export default connect(null, mapDispatchToProps)(ProductDetail);
