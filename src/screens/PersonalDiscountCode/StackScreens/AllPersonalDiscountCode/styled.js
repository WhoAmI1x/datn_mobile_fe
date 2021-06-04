import { List, SwipeAction } from "@ant-design/react-native";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectInput from 'react-native-select-input-ios';

export const Container = styled.View`
    position: relative;
    flex: 1;
`;

export const ScreenTitle = styled.Text`
    font-size: 30px;
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const CodeList = styled(ScrollView)``;

export const SwipeActionCustom = styled(SwipeAction)`
    background-color: transparent;
    margin-bottom: 10px;
`;

export const PersonalDiscountCodeItem = styled.View`
    flex-direction: row;
    background-color: #fff;
    padding: 10px;
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

export const DiscountCodeBtn = styled(TouchableOpacity)``;

export const DiscountCodeBtnUse = styled.Text`
    color: ${props => props.isUsed ? "#AFAFAF" : "#fff"};
    padding: 5px;
    background-color: ${props => props.isUsed ? "#EEEEEE" : "#007AFF"};
    border-radius: 5px;
`;

export const DiscountCodeBtnCreate = styled(TouchableOpacity)`
    position: absolute;
    bottom: 10px;
    right: 20px;
`;

export const BtnCreateIcon = styled(AntDesign)`
    background-color: #fff;
    font-size: 30px;
    color: #007AFF;
    border-radius: 50px;
    padding: 16px;
    border: 1px solid #eed;
`;

export const SelectInputCustom = styled(SelectInput)`
    margin-top: 5px;
    background-color: #fff;
    margin: 0 10px 10px;
`;