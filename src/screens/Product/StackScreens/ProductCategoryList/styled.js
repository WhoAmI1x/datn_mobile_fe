import { Image, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { GridLayout } from "../../../../utils/gridStyled";

export const Container = styled(ScrollView)``;

export const Ecommerce = styled.View`
    margin-bottom: 40px;
`;

export const EcommerceName = styled.Text`
    font-size: 30px;
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
`;

export const EcommerceList = styled(GridLayout)``;

export const CategoryItem = styled(TouchableOpacity)`
    background-color: #fff;
    width: 100%;
    margin-top: 10px;
    flex: 1;
    align-items: center;
    padding: 20px;
`;

export const CategoryImage = styled(Image)`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
`;

export const CategoryName = styled.Text`
    text-align: center;
`;

export const CategoryIcon = styled.View``;


