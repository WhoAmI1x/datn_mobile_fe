import React, {useCallback, useEffect, useState} from 'react';
import {Modal, ScrollView, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, Modal as AntdModal} from '@ant-design/react-native';
import {Col, GridLayout, Row} from '../../../../utils/gridStyled';
import {DatePickerView, Toast} from '@ant-design/react-native';
import {getDateStringAndTime, isFalsyValue} from '../../../../utils/common';
import {connect} from 'react-redux';
import ImageViewer from 'react-native-image-zoom-viewer';
import {
  actCreatePersonalDiscountCode,
  actUpdatePersonalDiscountCode,
} from '../../../../redux/actions/personalDiscountCode';
import {
  CarouselCustom,
  Container,
  ScreenTitle,
  ImageBtn,
  ImageCustom,
  UploadImageBtn,
  UploadImageBtnText,
  TextInputCustom,
  SessionTitle,
  ActionBtn,
  DateTimeValue,
  TextInputTitleCustom,
  AntdModalDateTime,
  DatePickerViewCustom,
  DateTimeModalTitle,
  DateTimeBtn,
  DateTimeBtnText,
  RowCustom,
} from './styled';
import {BASE_API_URL} from '../../../../utils/constants';

function CreatePersonalDiscountCode({
  route: {params},
  navigation,
  actCreatePersonalDiscountCode,
  actUpdatePersonalDiscountCode,
}) {
  const pDCEdited = params && params.pDCEdited;

  const [images, setImages] = useState(
    (pDCEdited &&
      pDCEdited.imageUrls.map(url => ({
        uri: `${BASE_API_URL}${url}`,
      }))) ||
      [],
  );

  const [title, setTitle] = useState((pDCEdited && pDCEdited.title) || '');
  const [dateTime, setDateTime] = useState(
    new Date((pDCEdited && pDCEdited.expires) || Date.now()),
  );
  const [description, setDescription] = useState(
    (pDCEdited && pDCEdited.description) || '',
  );
  const [currentImage, setCurrentImage] = useState();
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isModalDateTimeVisible, setIsModalDateTimeVisible] = useState(false);

  const handleShowPreview = () => setIsPreviewing(true);

  const handleHidePreview = () => setIsPreviewing(false);

  const handleChangeDescription = des => setDescription(des);

  const handleChangeTitle = til => setTitle(til);

  const onChangeExpires = dt => setDateTime(dt);

  const handleTakePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 200,
        quality: 1,
        saveToPhotos: true,
      },
      image => {
        if (!image.didCancel) {
          setImages(images =>
            images.concat({
              uri: image.uri,
              type: image.type,
              name: image.fileName,
            }),
          );
        }
      },
    );
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 200,
        quality: 1,
      },
      image => {
        if (!image.didCancel) {
          setImages(images =>
            images.concat({
              uri: image.uri,
              type: image.type,
              name: image.fileName,
            }),
          );
        }
      },
    );
  };

  const handleUploadImage = () => {
    AntdModal.operation([
      {
        text: 'Chụp ảnh',
        onPress: handleTakePhoto,
      },
      {
        text: 'Chọn từ thư viện',
        onPress: handleChoosePhoto,
      },
    ]);
  };

  const handleDeleteImage = imageIndex => {
    AntdModal.operation([
      {
        text: 'Xóa',
        onPress: () => {
          setImages(images =>
            images.filter((image, index) => index !== imageIndex),
          );
        },
      },
    ]);
  };

  const handleAction = () => {
    if (images.length <= 0) {
      return Toast.fail('Bạn cần thêm ảnh!', 1);
    } else if (isFalsyValue(title)) {
      return Toast.fail('Bạn cần nhập tên mã!', 1);
    } else if (isFalsyValue(description)) {
      return Toast.fail('Bạn cần thêm mô tả!', 1);
    }

    const formData = new FormData();

    images.forEach(image => {
      if (Object.keys(image).length > 1) {
        formData.append('images', image);
      } else {
        formData.append(
          'oldImageUrls[]',
          `/images${image.uri.split('images')[1]}`,
        );
      }
    });
    formData.append('title', title);
    formData.append('description', description);
    formData.append('expires', dateTime.getTime());

    if (pDCEdited) {
      actUpdatePersonalDiscountCode(
        navigation.navigate,
        formData,
        pDCEdited && pDCEdited._id,
      );
    } else {
      actCreatePersonalDiscountCode(navigation.navigate, formData);
    }
  };

  const handleShowDateTimeModal = () => setIsModalDateTimeVisible(true);

  const handleChooseDateTime = () => setIsModalDateTimeVisible(false);

  const imagesPreview = images.map((image, index) => ({
    url: image.uri,
  }));

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setImages([]);
      setCurrentImage(0);
      setDescription('');
      setTitle('');
      setIsPreviewing(false);
      setDateTime(new Date(Date.now()));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container nestedScrollEnabled={true}>
      <ScreenTitle>
        {pDCEdited ? `Sửa mã cá nhân` : `Tạo mã cá nhân`}
      </ScreenTitle>

      <GridLayout>
        {images.length > 0 && (
          <Row>
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
                    onLongPress={() => handleDeleteImage(index)}
                    key={index}>
                    <ImageCustom
                      source={{uri: image.uri}}
                      resizeMode="contain"
                    />
                  </ImageBtn>
                ))}
              </CarouselCustom>
            </Col>
          </Row>
        )}

        <Row>
          <Col span={12}>
            <UploadImageBtn onPress={handleUploadImage}>
              <UploadImageBtnText>Tải ảnh lên</UploadImageBtnText>
            </UploadImageBtn>
          </Col>

          <Col span={12}>
            <SessionTitle>Tên mã</SessionTitle>
            <TextInputTitleCustom
              placeholder="Tên mã ..."
              onChangeText={handleChangeTitle}
              value={title}
            />
          </Col>

          <Col span={12}>
            <SessionTitle>Hạn dùng</SessionTitle>
            <RowCustom>
              <Col span={10}>
                <DateTimeValue>{getDateStringAndTime(dateTime)}</DateTimeValue>
              </Col>
              <Col span={2}>
                <DateTimeBtn onPress={handleShowDateTimeModal}>
                  <DateTimeBtnText>Đổi</DateTimeBtnText>
                </DateTimeBtn>
              </Col>
            </RowCustom>
          </Col>

          <Col span={12}>
            <SessionTitle>Mô tả</SessionTitle>
            <TextInputCustom
              placeholder="Viết mô tả ..."
              onChangeText={handleChangeDescription}
              value={description}
              numberOfLines={3}
              multiline={true}
            />
          </Col>
        </Row>
      </GridLayout>

      <ActionBtn type="primary" onPress={handleAction}>
        {pDCEdited ? `Cập nhật` : `Tạo mới`}
      </ActionBtn>

      <Modal visible={isPreviewing} transparent={true}>
        <ImageViewer
          imageUrls={imagesPreview}
          onCancel={handleHidePreview}
          onSwipeDown={handleHidePreview}
          enableSwipeDown
          swipeDownThreshold={20}
        />
      </Modal>

      <AntdModalDateTime
        visible={isModalDateTimeVisible}
        transparent
        title={
          <DateTimeModalTitle>
            {getDateStringAndTime(dateTime)}
          </DateTimeModalTitle>
        }
        footer={[{text: 'OK', onPress: handleChooseDateTime}]}>
        <DatePickerViewCustom value={dateTime} onChange={onChangeExpires} />
      </AntdModalDateTime>
    </Container>
  );
}

const mapDispatchToProps = {
  actCreatePersonalDiscountCode,
  actUpdatePersonalDiscountCode,
};

export default connect(null, mapDispatchToProps)(CreatePersonalDiscountCode);
