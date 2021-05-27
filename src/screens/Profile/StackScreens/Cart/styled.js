import { Image, SafeAreaView, ScrollView, VirtualizedList } from "react-native";
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

export const FlatListCustom = styled(VirtualizedList)`
    margin-bottom: 20px;
`;

export const EmptyList = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 30px;
`;