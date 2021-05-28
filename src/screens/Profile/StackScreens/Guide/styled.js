import { Dimensions, Image, SafeAreaView, ScrollView, TouchableOpacity, VirtualizedList } from "react-native";
import styled from "styled-components";
import { Row } from "../../../../utils/gridStyled";

export const Container = styled(ScrollView)`
    flex: 1;
`;

export const EcommerceWrapper = styled.View`
    margin-bottom: 30px;
`;

export const Ecommerce = styled(Row)`
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 10px;
`;

export const EcommerceTitle = styled.Text`
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
    margin-left: 10px;
`;

export const ImageCustom = styled(Image)`
    margin: 0;
    width: ${Dimensions.get("screen").width}px;
    height: ${Dimensions.get("screen").width / 2.38}px;
`;

export const NumberOrder = styled.Text`
    font-weight: bold;
    text-align: center;
`;

export const LinkBtn = styled(TouchableOpacity)`
    margin-bottom: 10px;
`;

export const LinkBtnText = styled.Text`
    color: #2484E1;
`;

export const TextBold = styled.Text`
    font-weight: bold;
`;

