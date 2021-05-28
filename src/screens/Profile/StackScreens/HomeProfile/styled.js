import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Button } from "@ant-design/react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

export const Container = styled.View`
    flex: 1;
`;

export const Account = styled.View`
    background-color: #fff;
    height: 100px;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
`;

export const Avatar = styled(Image)`
    height: 60px;
    width: 60px;
`;

export const AccInfo = styled.View`
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const UserEmail = styled.Text`
    color: #999;
`;

export const LogOutBtn = styled(Button)`
    background-color: #fff;
    width: 80%;
    margin: 0 auto 10px;
`;

export const Sessions = styled.View`
    flex: 1;
`;

export const Session = styled(TouchableOpacity)`
    background-color: #fff;
    margin-top: 10px;
    padding: 14px;
    flex-direction: row;
    align-items: center;
`;

export const SessionTitle = styled.Text`
    color: #333;
`;

export const SessionIconCount = styled(MaterialCommunityIcons)`
    font-size: 26px;
    margin-right: 10px;
`;

export const SessionIconGuide = styled(MaterialCommunityIcons)`
    font-size: 26px;
    margin-right: 10px;
`;

export const SessionIconCart = styled(AntDesign)`
    font-size: 26px;
    margin-right: 10px;
`;

export const SessionIconDiscountCode = styled(Feather)`
    font-size: 26px;
    margin-right: 10px;
`;

export const SessionIconSearch = styled(AntDesign)`
    font-size: 26px;
    margin-right: 10px;
`;

export const SessionArrowIcon = styled(AntDesign)`
    margin-left: auto;
`;