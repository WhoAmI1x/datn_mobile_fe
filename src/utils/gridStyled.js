import styled from "styled-components";

export const GridLayout = styled.View`
    margin: 0 10px;
`;

export const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -5px;
`;

export const Col = styled.View`
    width: ${props => (100 / 12) * props.span}%;
    padding: 0 5px;
`;