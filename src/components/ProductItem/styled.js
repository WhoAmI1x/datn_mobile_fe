import styled from "styled-components";
import { Row } from "../../../../utils/gridStyled";
import { Col, GridLayout } from "../../utils/gridStyled";
import {
    TouchableOpacity,
    Image,
} from "react-native";

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    background-color: #fff;
    padding: 10px;
    margin: 0 10px 10px 10px;
    border-radius: 10px;
`;

export const ProductImage = styled(Image)`
    width: 110px;
    height: 110px;
    border-radius: 10px;
    margin-right: 10px;
`;

export const ProductInfo = styled.View`
    justify-content: center;
    flex: 1;
`;

export const ProductTitle = styled.Text`
    font-weight: 700;
`;

export const ProductTag = styled.Text`
    font-size: 12px;
    padding: 1px 2px;
    border: 1px solid red;
    width: 44px;
    color: red;
    text-align: center;
    border-radius: 6px;
    margin-top: 2px;
`;

export const ProductPrice = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const PriceBeforeDiscount = styled.Text`
    margin-right: 10px;
    font-size: 13px;
    color: #999;
    text-decoration-line: line-through;
`;

export const CurrentPrice = styled.Text`
    color: red;
    font-size: 13px;
`;

export const ProductExpires = styled.View`
    
`;

export const ProductExpiresText = styled.Text`
    font-size: 13px;
    color: #999;
`;

export const FromEcommerce = styled(ProductExpiresText)``;

export const EcommerceTag = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 6px;
`;

export const EcommerceTagText = styled(ProductTag)`
    color: ${props => props.isTiki ? "#017FFF" : "red"};
    border-color: ${props => props.isTiki ? "#017FFF" : "red"};
    min-width: 100px;
    margin-left: 10px;
`;

export const GridLayoutCustom = styled(GridLayout)`
    margin: 0 5px;
`;

export const ColContentCustom = styled(Col)`
    padding-left: 0;
`;

export const ColBtnCustom = styled(Col)`
    padding-right: 0;
    justify-content: flex-end;
`;

export const ProductBtn = styled(TouchableOpacity)`
    font-size: 12px;
    background-color: #ff3d3d;
    padding: 4px 10px;
    border-radius: 2px;
`;

export const BtnText = styled.Text`
    color: #fff;
    text-align: center;
`;
