import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, VirtualizedList } from "react-native";
import styled from "styled-components";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Row } from "../../../../utils/gridStyled";

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const Category = styled(Row)`
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 10px;
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

export const FlatListCustom = styled(VirtualizedList)`
`;

export const EmptyList = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 30px;
`;