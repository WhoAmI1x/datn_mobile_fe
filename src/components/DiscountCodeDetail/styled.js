import { Modal } from "@ant-design/react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Row } from "../../utils/gridStyled";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Container = styled.View``;

export const HeadIcon = styled.View`
    width: 12%;
    margin: -14px 44% 8px 44%;
    height: 6px;
    border-radius: 6px;
    background-color: #fff;
`;

export const ModalCustom = styled(Modal)`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #FAFAFA;
`;

export const Head = styled.View`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
`;

export const HeadTitle = styled.Text`
    background-color: #FFF;
    padding: 10px 0;
    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: 26px;
`;

export const CodeRow = styled(Row)`
    padding: 10px;
`;

export const Code = styled.Text`
    color: #7D7D7D;
`;

export const CodeBtn = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
`;

export const CodeText = styled.Text`
    color: #2196F3;
`;

export const CodeCopy = styled(AntDesign)`
    margin-left: 20px;
    font-size: 18px;
    padding: 5px;
    color: #2196F3;
    background-color: #efefef;
    border-radius: 15px;
`;

export const ExpiresRow = styled(Row)`
    padding: 10px;
    background-color: #FFF;
    
`;

export const Expires = styled.Text`
    color: #7D7D7D;
`;

export const ExpiresText = styled.Text`
    color: #2196F3;
`;

export const DescriptionRow = styled(Row)`
    padding: 10px;
`;

export const Description = styled.Text`
    color: #7D7D7D;
`;

export const DescriptionText = styled.Text`
    padding: 8px;
`;
