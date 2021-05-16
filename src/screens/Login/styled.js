import { Button } from "@ant-design/react-native";
import { Image, TextInput } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
    flex: 1;    
    align-items: center;
`;


export const KeyboardAvoidingViewCustom = styled.View`
    flex: 1;
    justify-content: center;
    overflow: scroll;
`;

export const ImageCustom = styled(Image)`
    width: 300px;
    height: 300px;
    margin-bottom: 60px;
`;

export const FormLoginWrapper = styled.View`
    min-width: 300px;
`;

export const FormItem = styled.View`
    flex-direction: row;
    border-bottom-color: #78B1FF;
    border-bottom-width: 2px;
    ${props => !props.isValid && "margin-bottom: 14px"}
`;

export const FormItemName = styled.Text`
    text-align: right;
    margin-right: 10px;
    min-width: 30px;
`;

export const TextInputCustom = styled(TextInput)`
    height: 40px;
    flex: 1;
    font-size: 15px;
`;

export const TextValidate = styled.Text`
    color: red;
    margin-bottom: 14px;
    font-size: 11px;
`;

export const ButtonLogin = styled(Button)`
    border-radius: 10px;
    margin-top: 16px;
`;

export const ButtonRegister = styled(Button)`
    border-radius: 10px;
`;

export const Or = styled.Text`
    color: #aaa;
    margin: 10px 0;
    text-align: center;
`;

export const Container4 = styled.View`
`;