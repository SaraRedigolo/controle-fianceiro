import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value, color, isTotal }) => {
    const getColor = () => {
        if (isTotal) {
            return value < 0 ? "red" : "black";
        }
        return color;
    };

    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon color={color} />
            </C.Header>
            <C.Total color={getColor()}>{value}</C.Total>
        </C.Container>
    );
};

export default ResumeItem;