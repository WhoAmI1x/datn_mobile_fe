import React, {PureComponent} from 'react';
import NumberFormat from 'react-number-format';
import {getDateString} from '../../utils/common.js';
import {Col, GridLayout, Row} from '../../utils/gridStyled.js';
import {
  ProductExpires,
  ProductImage,
  Container,
  ProductPrice,
  ProductTitle,
  ProductInfo,
  BtnText,
  ProductBtn,
  ProductTag,
  CurrentPrice,
  PriceBeforeDiscount,
  ColContentCustom,
  ColBtnCustom,
  GridLayoutCustom,
  EcommerceTag,
  ProductExpiresText,
  FromEcommerce,
  EcommerceTagText,
} from './styled.js';

class ProductItem extends PureComponent {
  render() {
    const {
      navigate,
      _id,
      name,
      imageUrls,
      discountPercent,
      priceBeforeDiscount,
      price,
      endTime,
      markTime,
      ecommerce,
    } = this.props;

    return (
      <Container
        onPress={() =>
          navigate(endTime ? 'ProductDetail' : 'ProductSearchedDetail', {
            productId: _id,
          })
        }
        activeOpacity={0.5}>
        <ProductImage source={{uri: imageUrls[0]}} />

        <ProductInfo>
          <ProductTitle numberOfLines={2} ellipsizeMode="tail">
            {name}
          </ProductTitle>

          <GridLayoutCustom>
            <Row>
              <ColContentCustom span={12}>
                <ProductTag>{`-${discountPercent}%`}</ProductTag>
                <ProductPrice numberOfLine={1} ellipsizeMode="tail">
                  <NumberFormat
                    value={priceBeforeDiscount}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="đ"
                    renderText={priceBeforeDiscount => (
                      <PriceBeforeDiscount>
                        {priceBeforeDiscount}
                      </PriceBeforeDiscount>
                    )}
                  />
                  <NumberFormat
                    value={price}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="đ"
                    renderText={price => <CurrentPrice>{price}</CurrentPrice>}
                  />
                </ProductPrice>
                <ProductExpires>
                  {!markTime ? (
                    <ProductExpiresText>
                      Hạn giảm giá: {getDateString(endTime)}
                    </ProductExpiresText>
                  ) : (
                    <EcommerceTag>
                      <FromEcommerce>Từ sàn:</FromEcommerce>
                      <EcommerceTagText isTiki={ecommerce === 'TIKI'}>
                        {ecommerce}
                      </EcommerceTagText>
                    </EcommerceTag>
                  )}
                </ProductExpires>
              </ColContentCustom>

              {/* <ColBtnCustom span={3}>
                <ProductBtn type="primary" activeOpacity={0.6}>
                  <BtnText>Lưu</BtnText>
                </ProductBtn>
              </ColBtnCustom> */}
            </Row>
          </GridLayoutCustom>
        </ProductInfo>
      </Container>
    );
  }
}

export default ProductItem;
