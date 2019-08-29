import React from "react";
import styled from "../../typed-components";
import Table from "../../Components/Table";
import Input from "../../Components/Input";
import Form from "../../Components/Form";
import Button from "../../Components/Button";

const Container = styled.div`
    padding: 30px;
`;
const Wrapper = styled.div`
    display: flex;
    width: 100%:
    margin: 0 auto;
`;
const Box = styled.div`
    flex: 1;
`;
const Title = styled.h1``;
const SubTitle = styled.h2``;
const InputExtended = styled(Input)`
    width: 100%;
    font-size: 17px;
    padding: 15px 20px;
`;
const ButtonExtended = styled(Button)`
    background-color: ${props => props.theme.blueColor};
    margin-top: 10px;
    width: 200px;
    height: 40px;
    &:hover {
        background-color: blue;
    }
`;

const Text = styled.h5`
    font-size: 20px;
    margin: 5px 0;    
`;

interface IUser {
    id: number | any;
    name: string;
    userName: string;
}
interface IProps {
    user: IUser;
    users: IUser[];
    initialUserData: IUser;
    addUser: (data: IUser) => void;
    setUser: (event: React.SetStateAction<IUser>) => void;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const HomePresenter:React.FC<IProps> = ({
    user,
    users,
    initialUserData,
    addUser,
    setUser,
    onInputChange
}) => {
       
        return (
        <Container>
            <Title>CRUD REACT HOOKS</Title>
            <Wrapper>
                <Box>
                    <SubTitle>Add User</SubTitle>
                    <Form submitFn={() => {
                        addUser(user);
                        setUser({
                            userName: 'aa',
                            name: "rr",
                            id: '2'
                        })
                        }}
                    >
                        <Text>Name</Text>
                        <InputExtended 
                            placeholder={"Input name"}
                            value={user.name}
                            name={"name"}
                            onChange={onInputChange}
                        />
                        <Text>Username</Text>
                        <InputExtended 
                            placeholder={"Input Username"}
                            value={user.userName}
                            name={"userName"}
                            onChange={onInputChange}
                        />
                        <ButtonExtended 
                            value={"Add New User"}
                            className={"submit-btn"}
                        />
                    </Form>
                </Box>
                <Box>
                    <SubTitle>View Users</SubTitle>
                    <Table users={users}/>
                </Box>
            </Wrapper>
        </Container>
    );
}

export default HomePresenter;