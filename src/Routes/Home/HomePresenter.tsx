import React from "react";
import styled from "../../typed-components";
import Table from "../../Components/Table";

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`;
const Box = styled.div`
    flex: 1;
`;

const Title = styled.h1`

`;
const SubTitle = styled.h2`

`;

const HomePresenter = () => (
    <Container>
        <Title>CRUD REACT HOOKS</Title>
        <Wrapper>
            <Box>
                <SubTitle>Add User</SubTitle>
            </Box>
            <Box>
                <SubTitle>View Users</SubTitle>
                <Table />
            </Box>
        </Wrapper>
    </Container>
);

export default HomePresenter;