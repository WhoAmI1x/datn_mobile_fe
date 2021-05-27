/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Col, GridLayout, Row} from '../../utils/gridStyled';
import {getDateStringAndTime} from '../../utils/common';
import ImageViewer from 'react-native-image-zoom-viewer';
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
  CarouselCustom,
  ImageCustom,
  ImageBtn,
} from './styled';
import {BASE_API_URL} from '../../utils/constants';
import {Modal} from 'react-native';

function PersonalDiscountCodeDetail({
  visible,
  setVisible,
  currentPersonalDiscountCode,
  navigation,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const handleClose = () => {
    setVisible(false);
    setCurrentImage(0);
  };

  const handleShowPreview = () => setIsPreviewing(true);

  const handleHidePreview = () => setIsPreviewing(false);

  const images =
    (currentPersonalDiscountCode.imageUrls &&
      currentPersonalDiscountCode.imageUrls.map((imgUrl, index) => ({
        url: `${BASE_API_URL}${imgUrl}`,
      }))) ||
    [];

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
          <HeadTitle>{currentPersonalDiscountCode.title}</HeadTitle>
        </Head>

        <GridLayout>
          <CodeRow>
            <Col span={12}>
              <CarouselCustom
                selectedIndex={currentImage}
                autoplay
                infinite
                afterChange={i => setCurrentImage(i)}>
                {images.map((image, index) => (
                  <ImageBtn
                    activeOpacity={0.8}
                    onPress={handleShowPreview}
                    key={index}>
                    <ImageCustom
                      source={{uri: image.url}}
                      resizeMode="contain"
                    />
                  </ImageBtn>
                ))}
              </CarouselCustom>
            </Col>
          </CodeRow>

          <ExpiresRow>
            <Col span={4}>
              <Expires>Hạn sử dụng:</Expires>
            </Col>
            <Col span={8}>
              <ExpiresText>
                {getDateStringAndTime(currentPersonalDiscountCode.expires)}
              </ExpiresText>
            </Col>
          </ExpiresRow>

          <DescriptionRow>
            <Col span={12}>
              <Description>Mô tả:</Description>
            </Col>
            <Col span={12}>
              <DescriptionText>
                {currentPersonalDiscountCode.description &&
                  currentPersonalDiscountCode.description
                    .split('.\n')
                    .map(p => `+) ${p}`)
                    .join('.\n')}
              </DescriptionText>
            </Col>
          </DescriptionRow>
        </GridLayout>
      </ModalCustom>

      <Modal visible={isPreviewing} transparent={true}>
        <ImageViewer
          imageUrls={images}
          onCancel={handleHidePreview}
          enableSwipeDown
          swipeDownThreshold={20}
        />
      </Modal>
    </Container>
  );
}

export default PersonalDiscountCodeDetail;
