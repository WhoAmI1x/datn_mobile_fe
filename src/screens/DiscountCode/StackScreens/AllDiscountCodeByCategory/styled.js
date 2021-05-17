import { Image, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Row } from "../../../../utils/gridStyled";


export const Container = styled(ScrollView)``;

export const Category = styled(Row)`
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 10px;
    width: 100%;
    padding: 0 36px;
    flex-wrap: nowrap;
`;

export const CategoryImage = styled(Image)`
    height: 66px;
    width: 66px;
`;

export const CategoryTitle = styled.Text`
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
    margin-left: 10px;
`;

export const DiscountCodeItem = styled.View`
    flex-direction: row;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

export const DiscountCodeImage = styled(Image)`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-right: 10px;
`;

export const DiscountCodeInfo = styled.View`
    justify-content: center;
    flex: 1;
`;

export const DiscountCodeTitle = styled.Text`
    font-weight: 700;
`;


export const DiscountCodeShortDescription = styled.Text`
    font-size: 12px;
    color: #999;
    flex: 1;
`;

export const DiscountCodeExpires = styled.Text`
    font-size: 13px;
    color: #999;
`;

export const DiscountCodeActions = styled.View`
    justify-content: space-between;
    align-items: flex-end;
`;

export const DiscountCodeFullInfo = styled(AntDesign)`
    color: #007AFF;
    font-size: 20px;
`;

export const DiscountCodeBtn = styled(TouchableOpacity)`
    ${props => props.isSaveBtn && `font-size: 12px;
    background-color: #2196F3;
    padding: 4px 10px;
    border-radius: 2px;`}
`;

export const BtnText = styled.Text`
    color: #fff;
`;
