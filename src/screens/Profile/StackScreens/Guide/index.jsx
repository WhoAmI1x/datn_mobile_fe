import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {Col, GridLayout, Row} from '../../../../utils/gridStyled';
import {
  Container,
  Ecommerce,
  EcommerceTitle,
  EcommerceWrapper,
  ImageCustom,
  LinkBtn,
  LinkBtnText,
  NumberOrder,
  TextBold,
} from './styled';

function Guide(params) {
  return (
    <Container>
      <EcommerceWrapper>
        <Ecommerce>
          <EcommerceTitle>TIKI</EcommerceTitle>
        </Ecommerce>

        <GridLayout>
          <Row>
            <Col span={1}>
              <NumberOrder>1.</NumberOrder>
            </Col>
            <Col span={11}>
              <Text>
                Thực hiện nhập tài khoản sàn ở tab <TextBold>Cá nhân</TextBold>{' '}
                mục <TextBold>Quản lý tài khoản sàn</TextBold>.
              </Text>
            </Col>
          </Row>

          <Row>
            <Col span={1}>
              <NumberOrder>2.</NumberOrder>
            </Col>
            <Col span={11}>
              <Text>
                Ấn nút <TextBold>Cập nhật</TextBold>
              </Text>
            </Col>
          </Row>
        </GridLayout>
      </EcommerceWrapper>

      <EcommerceWrapper>
        <Ecommerce>
          <EcommerceTitle>SHOPEE</EcommerceTitle>
        </Ecommerce>

        <GridLayout>
          <Row>
            <Col span={1}>
              <NumberOrder>1.</NumberOrder>
            </Col>
            <Col span={11}>
              <Text>
                Truy cập vào link sau (nếu chưa đăng nhập thì tiến hành đăng
                nhập), hình dưới đây sẽ hiện lên:
              </Text>
            </Col>
            <Col span={12}>
              <LinkBtn
                activeOpacity={0.6}
                onPress={() =>
                  Linking.openURL(
                    'https://banhang.shopee.vn/portal/settings/basic/shop',
                  )
                }>
                <LinkBtnText>
                  https://banhang.shopee.vn/portal/settings/basic/shop
                </LinkBtnText>
              </LinkBtn>
            </Col>
          </Row>
        </GridLayout>

        <ImageCustom
          source={require('../../../../assets/images/shopee_auth.png')}
        />

        <GridLayout>
          <Row>
            <Col span={1}>
              <NumberOrder>2.</NumberOrder>
            </Col>
            <Col span={11}>
              <Text>Tắt tính năng được khoanh tròn như trong hình.</Text>
            </Col>
          </Row>

          <Row>
            <Col span={1}>
              <NumberOrder>3.</NumberOrder>
            </Col>
            <Col span={11}>
              <Text>
                Thực hiện nhập tài khoản sàn ở tab <TextBold>Cá nhân</TextBold>{' '}
                mục <TextBold>Quản lý tài khoản sàn</TextBold>.
              </Text>
            </Col>
          </Row>

          <Row>
            <Col span={1}>
              <NumberOrder>4.</NumberOrder>
            </Col>
            <Col span={11}>
              <Text>
                Ấn nút <TextBold>Cập nhật</TextBold>
              </Text>
            </Col>
          </Row>
        </GridLayout>
      </EcommerceWrapper>
    </Container>
  );
}

export default Guide;
