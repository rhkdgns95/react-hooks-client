import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
    background-color: black;
    color: white;
    outline: none;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    padding: 5px 12px;
    font-size: 18px;
    &:active {
        outline: none;
    }
`;

interface IProps {
    value: string;
    className: string;
}
const Button: React.FC<IProps> = ({
    value,
    className
}) => <Container
    value={value}
    type={"submit"}
    className={className}
    />;

export default Button;