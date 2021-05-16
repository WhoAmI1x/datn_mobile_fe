import { Modal } from "@ant-design/react-native";
import styled from "styled-components";
import { Row } from "../../utils/gridStyled";

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

export const CodeText = styled.Text``;

export const ExpiresRow = styled(Row)`
    padding: 10px;
    background-color: #FFF;
`;

export const Expires = styled.Text`
    color: #7D7D7D;
`;

export const ExpiresText = styled.Text``;

export const DescriptionRow = styled(Row)`
    padding: 10px;
`;

export const Description = styled.Text`
    color: #7D7D7D;
`;

export const DescriptionText = styled.Text`
    padding: 8px;
`;
