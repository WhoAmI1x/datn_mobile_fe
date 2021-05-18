import { Button } from "@ant-design/react-native";
import { KeyboardAvoidingView, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
`;

export const Ecommerce = styled.View`
    margin-bottom: 30px;
`;

export const EcommerceName = styled.Text`
    font-size: 30px;
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
`;

export const EcommerceContent = styled.View`
    padding: 20px 20px 0 20px;
`;

export const PasswordRow = styled.View`
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const Password = styled(TextInput)`
    height: 40px;
    font-size: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #78B1FF;
    flex: 1;
`;

export const PasswordIconBtn = styled(TouchableOpacity)`
    position: absolute;
    right: 0;
`;

export const PasswordIcon = styled(AntDesign)`
    font-size: 26px;
`;

export const Username = styled(Password)`
    margin-bottom: 20px;
`;


export const EcommerceBtn = styled(Button)`
    background-color: #fff;
    width: 80%;
    margin: 20px auto 0;
`;
