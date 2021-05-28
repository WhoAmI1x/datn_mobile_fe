import { Button, Carousel } from "@ant-design/react-native";
import styled from "styled-components";
import { Image, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { Col, GridLayout, Row } from "../../../../utils/gridStyled";
import SelectInput from 'react-native-select-input-ios';

export const Container = styled(ScrollView)`
    flex: 1;
`;

export const CarouselCustom = styled(Carousel)`
    height: 350px;
    margin: 0;
    background-color: #fff;
`;

export const ImageCustom = styled(Image)`
    height: 350px;
`;

export const Content = styled(GridLayout)`
    margin-right: 5px;
    margin-left: 5px;
`;

export const BtnAddToCart = styled(TouchableOpacity)`
    background-color: #FF424E;
    margin-left: auto;
    border-radius: 6px;
`;

export const BtnAddToCartText = styled.Text`
    color: #fff;
    padding: 6px 18px;
`;

export const RowCustom = styled(Row)`
    background-color: #fff;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const ColCustom = styled(Col)`
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
`;

export const PriceBeforeDiscount = styled.Text`
    text-decoration-line: line-through;
    font-size: 18px;
    color: #999;
`;

export const CurrentPrice = styled.Text`
    font-weight: bold;
    font-size: 26px;
    margin-right: 6px;
`;

export const DiscountPercent = styled.Text`
    margin-left: auto;
    font-size: 14px;
    padding: 3px 6px;
    border: 1px solid red;
    border-radius: 10px;
    color: red;
`;

export const Rate = styled.View`
    flex-direction: row;
    align-items: center;
    border-right-color: #ccc;
    border-right-width: 1px;
    padding-right: 10px;
    margin-right: 10px;
`;

export const RateAverage = styled.Text`
    margin-left: 8px;
`;

export const Sold = styled.Text``;

export const DetailRow = styled(RowCustom)`
    margin-top: 10px;
    padding-bottom: 10px;
`;

export const TextSessionTitle = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

export const TableRow = styled(Row)`
    background-color:${props => props.isOdd ? "#fff" : "#fafafa"}
    padding: 10px 0;
`;

export const PropertyName = styled.Text`
    color: #999;
`;

export const PropertyValue = styled.Text``;


export const DescriptionRow = styled(DetailRow)``;

export const DescriptionText = styled.Text``;

export const ProductUrlRow = styled(DetailRow)``;

export const ProductUrl = styled.Text`
    color: #007BFF;
`;

export const SelectInputCustom = styled(SelectInput)`
    border: 1px solid #999;
    margin-top: 5px;
`;

