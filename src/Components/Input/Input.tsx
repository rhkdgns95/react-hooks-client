import React, { ChangeEventHandler } from "react";
import styled from "../../typed-components";

const Container = styled.input`
    border: 1px solid #dfdfdf;
    padding: 5px 10px;
    border-radius: 6px;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`;

interface IProps {
    type?: string;
    disabled?: boolean;
    onChange?: any;
    required?: boolean;
    value?: string;
    placeholder?: string;
    name?: string;
    className?: string;
}

const Input: React.FC<IProps> = ({
    type="text",
    disabled=false,
    onChange,
    required=true,
    value="",
    placeholder="",
    name="",
    className
}) => (
    <Container
        type={type}
        disabled={disabled}
        onChange={onChange}
        required={required}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        autoComplete={"off"}
    />
);

export default Input;