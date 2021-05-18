import { SafeAreaView, TextInput, VirtualizedList } from "react-native";
import styled from "styled-components";
import { Button } from "@ant-design/react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const SearchInputWrapper = styled.View`
    padding: 20px;
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const SearchInput = styled(TextInput)`
    border: 1px solid #ccc;
    flex: 1;
    border-radius: 6px;
    margin-right: 10px;
    padding-left: 10px;
`;

export const SearchBtn = styled(Button)`

`;


export const VirtualizedListCustom = styled(VirtualizedList)``;

export const EmptyList = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 30px;
`;