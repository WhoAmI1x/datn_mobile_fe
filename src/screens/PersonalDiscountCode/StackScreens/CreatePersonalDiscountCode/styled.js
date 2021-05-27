import { Button, Carousel } from "@ant-design/react-native";
import { Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled(ScrollView)``;

export const ScreenTitle = styled.Text`
    font-size: 30px;
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const CarouselCustom = styled(Carousel)`
    height: 250px;
    margin: 0;
    background-color: #fff;
`;

export const ImageBtn = styled(TouchableOpacity)``;

export const ImageCustom = styled(Image)`
    height: 250px;
`;

export const UploadImageBtn = styled(TouchableOpacity)`
    margin: 10px auto 0;
`;

export const UploadImageBtnText = styled.Text`
    padding: 10px 20px;
    background-color: #fff;
    color: #1E94EA;
    border: 1px dashed #1E94EA;
    border-radius: 1px;
`;

export const TextInputTitleCustom = styled(TextInput)`
    height: 40px;
    font-size: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #1E94EA;
    padding: 5px;
    background-color: #fff;
`;

export const TextInputCustom = styled(TextInput)`
    height: 100px;
    font-size: 15px;
    border: 1px solid #ccc;
    text-align-vertical: top;
    padding: 5px;
    background-color: #fff;
`;

export const SessionTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const ActionBtn = styled(Button)`
    width: 80%;
    margin: 0 auto;
    margin: 20px auto 20px;
`;

export const DateTimeValue = styled.Text`
    font-weight: 100;
    font-size: 18px;
    color: #1E94EA;
`;