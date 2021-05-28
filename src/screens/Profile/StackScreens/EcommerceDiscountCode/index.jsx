import React, {useEffect} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {actGetDiscountCodeSaved} from '../../../../redux/actions/discountCode';
import {Col, GridLayout, Row} from '../../../../utils/gridStyled';
import {getDateString} from '../../../../utils/common';
import {
  Container,
  DiscountCodeExpires,
  DiscountCodeImage,
  DiscountCodeInfo,
  DiscountCodeItem,
  DiscountCodeShortDescription,
  DiscountCodeTitle,
  Ecommerce,
  EcommerceTitle,
  EcommerceWrapper,
  EmptyList,
} from './styled';
import {BASE_API_URL} from '../../../../utils/constants';

function EcommerceDiscountCode({discountCodes, actGetDiscountCodeSaved}) {
  const tikiDiscountCodeSaved = discountCodes.filter(
    ({ecommerce}) => ecommerce === 'TIKI',
  );
  const shopeeDiscountCodeSaved = discountCodes.filter(
    ({ecommerce}) => ecommerce === 'SHOPEE',
  );

  useEffect(() => {
    actGetDiscountCodeSaved();
  }, []);

  return (
    <Container>
      <EcommerceWrapper>
        <Ecommerce>
          <EcommerceTitle>TIKI</EcommerceTitle>
        </Ecommerce>

        <GridLayout>
          <Row>
            {tikiDiscountCodeSaved.length > 0 ? (
              tikiDiscountCodeSaved.map((discountCode, index) => (
                <Col key={index} span={12}>
                  <DiscountCodeItem>
                    <DiscountCodeImage
                      source={{
                        uri: discountCode.imageUrl,
                      }}
                    />

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
      </EcommerceWrapper>

      <EcommerceWrapper>
        <Ecommerce>
          <EcommerceTitle>SHOPEE</EcommerceTitle>
        </Ecommerce>

        <GridLayout>
          <Row>
            {shopeeDiscountCodeSaved.length > 0 ? (
              shopeeDiscountCodeSaved.map((discountCode, index) => (
                <Col key={index} span={12}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() =>
                      Linking.openURL(
                        `https://shopee.vn/voucher-details/${discountCode.code}/${discountCode.mainId}/${discountCode.shopeeSignature}?action=use`,
                      )
                    }>
                    <DiscountCodeItem>
                      <DiscountCodeImage
                        source={{
                          uri: discountCode.imageUrl.includes('https')
                            ? discountCode.imageUrl
                            : `${BASE_API_URL}${discountCode.imageUrl}`,
                        }}
                      />

                      <DiscountCodeInfo>
                        <DiscountCodeTitle
                          numberOfLines={1}
                          ellipsizeMode="tail">
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
                    </DiscountCodeItem>
                  </TouchableOpacity>
                </Col>
              ))
            ) : (
              <EmptyList>
                <Text>Danh sách trống!</Text>
              </EmptyList>
            )}
          </Row>
        </GridLayout>
      </EcommerceWrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  discountCodes: state.discountCodes,
});

const mapDispatchToProps = {actGetDiscountCodeSaved};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EcommerceDiscountCode);
