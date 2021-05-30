/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Col, GridLayout, Row} from '../../utils/gridStyled';
import {getDateStringAndTime} from '../../utils/common';
import Clipboard from '@react-native-clipboard/clipboard';
import {Toast} from '@ant-design/react-native';
import {
  Container,
  Head,
  HeadIcon,
  HeadTitle,
  ModalCustom,
  CodeRow,
  Code,
  CodeText,
  Expires,
  ExpiresText,
  ExpiresRow,
  DescriptionRow,
  Description,
  DescriptionText,
  CodeBtn,
  CodeCopy,
} from './styled';

function DiscountCodeDetail({visible, setVisible, currentDiscountCode}) {
  const handleClose = () => setVisible(false);

  const handleCopy = code => {
    Clipboard.setString(`${code}`);
    Toast.success('Sao chép thành công!', 1);
  };

  return (
    <Container>
      <ModalCustom
        popup
        maskClosable
        visible={visible}
        animationType="slide-up"
        onClose={handleClose}>
        <HeadIcon />

        <Head>
          <HeadTitle>{currentDiscountCode.title}</HeadTitle>
        </Head>

        <GridLayout>
          <CodeRow>
            <Col span={4}>
              <Code>Mã:</Code>
            </Col>
            <Col span={8}>
              <CodeBtn
                activeOpacity={0.6}
                onPress={() => handleCopy(currentDiscountCode.code)}>
                <CodeText>{currentDiscountCode.code}</CodeText>
                <CodeCopy name="copy1" />
              </CodeBtn>
            </Col>
          </CodeRow>

          <ExpiresRow>
            <Col span={4}>
              <Expires>Hạn sử dụng:</Expires>
            </Col>
            <Col span={8}>
              <ExpiresText>
                {getDateStringAndTime(currentDiscountCode.expires)}
              </ExpiresText>
            </Col>
          </ExpiresRow>

          <DescriptionRow>
            <Col span={12}>
              <Description>Mô tả:</Description>
            </Col>
            <Col span={12}>
              <DescriptionText>
                {currentDiscountCode.description &&
                  currentDiscountCode.description
                    .split('.\n')
                    .map(p => `+) ${p}`)
                    .join('.\n')}
              </DescriptionText>
            </Col>
          </DescriptionRow>
        </GridLayout>
      </ModalCustom>
    </Container>
  );
}

export default DiscountCodeDetail;
