import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View, Linking, Button} from 'react-native';
import {connect} from 'react-redux';
import {
  actGetProductDetailSearched,
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
  SelectInputCustom,
} from './styled';

function ProductSearchedDetail({
  route: {
    params: {productId},
  },
  actGetProductDetailSearched,
  actAddProductToCart,
}) {
  console.log(productId);

  const [productFullInfo, setProductFullInfo] = useState({});
  const [currentImage, setCurrentImage] = useState(6);
  const [modelSelected, setModelSelected] = useState({});

  const handleChangeModel = modelId => {
    setModelSelected(
      productFullInfo.shopeeModels.find(({modelid}) => modelid === modelId),
    );
  };

  useEffect(() => {
    actGetProductDetailSearched(productId, pFInfo => {
      setProductFullInfo(pFInfo);
      setModelSelected(
        (pFInfo.shopeeModels.length > 0 &&
          pFInfo.shopeeModels.find(({price}) => price === pFInfo.price)) ||
          {},
      );
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
        // autoplay
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
              value={modelSelected.price || productFullInfo.price}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              suffix="đ"
              renderText={price => <CurrentPrice>{price}</CurrentPrice>}
            />

            <NumberFormat
              value={
                modelSelected.priceBeforeDiscount ||
                productFullInfo.priceBeforeDiscount
              }
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              suffix="đ"
              renderText={price => (
                <PriceBeforeDiscount>{price}</PriceBeforeDiscount>
              )}
            />

            <DiscountPercent>{`-${
              modelSelected.price
                ? modelSelected.discountPercent
                : productFullInfo.discountPercent
            }%`}</DiscountPercent>
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
            </Sold>

            <BtnAddToCart
              activeOpacity={0.5}
              onPress={() =>
                actAddProductToCart({
                  productId: productFullInfo._id,
                  modelId: modelSelected.modelid,
                })
              }>
              <BtnAddToCartText>Lưu</BtnAddToCartText>
            </BtnAddToCart>
          </ColCustom>
        </RowCustom>

        {productFullInfo.shopeeModels &&
          productFullInfo.shopeeModels.length > 0 && (
            <ProductUrlRow>
              <Col span={12}>
                <TextSessionTitle>Chọn Mẫu</TextSessionTitle>
              </Col>
              <Col span={12}>
                <SelectInputCustom
                  onSubmitEditing={handleChangeModel}
                  value={modelSelected.modelid}
                  options={productFullInfo.shopeeModels.map(
                    ({name, modelid}) => ({
                      value: modelid,
                      label: name,
                    }),
                  )}
                />
              </Col>
            </ProductUrlRow>
          )}

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
  actGetProductDetailSearched,
  actAddProductToCart,
};

export default connect(null, mapDispatchToProps)(ProductSearchedDetail);
