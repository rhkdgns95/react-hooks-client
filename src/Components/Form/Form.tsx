import React, { FormEvent, Children } from "react";
import styled from "../../typed-components";

const Container = styled.form`

`
interface IProps {
    submitFn: any;
}

const Form: React.FC<IProps> = ({
    submitFn,
    children
}) => (
    <Container  onSubmit={e => {e.preventDefault(); submitFn();}}>
        { children }
    </Container>
);

export default Form;