import React from "react";
import styled from "../../typed-components";
import Table from "../../Components/Table";
import Input from "../../Components/Input";
import Form from "../../Components/Form";
import Button from "../../Components/Button";

const Container = styled.div`
    padding: 30px;
    @media(max-width: 800px) {
        padding: 10px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    @media(max-width: 800px) {
        flex-flow: column-reverse ;
    }
`;
const Box = styled.div`
    flex: 1;
    max-width: 49%;
    @media(max-width: 800px) {
        max-width: 100%;
    }
`;
const Title = styled.h1``;
const SubTitle = styled.h2`
    @media(max-width: 400px) {
        position: relative;
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            width: 200px;
            height: 3px;
            background-color: #060404;
        }
    }
`;
const InputExtended = styled(Input)`
    width: 100%;
    font-size: 17px;
    padding: 15px 20px;
`;
interface IButton {
    formType: string
}
const ButtonExtended = styled(Button)<IButton>`
    background-color: ${props => props.formType === "add" ? props.theme.addColor : props.theme.updateColor};
    margin-top: 10px;
    width: 200px;
    height: 40px;
    &:hover {
        background-color: ${props => props.formType === "add" ? props.theme.addActiveColor : props.theme.updateActiveColor};
    }
`;

const ButtonExtendedCancel = styled(Button)<IButton>`
    margin-left: 10px;
    visibility: ${props => props.formType === "add" ? "hidden" : "visible"};
    width: 100px;
    height: 40px;
    background-color: white;
    color: #424242;
    border: 1px solid #dfdfdf;
    &:hover {
        background-color: black;
        color: white;
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
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleEditClick: (data: IUser) => void;
    handleDeleteClick: (id: number) => void;
    formType: string;
    onCancelBtn: (data: any) => any;
};
const HomePresenter:React.FC<IProps> = ({
    user,
    users,
    onInputChange,
    onSubmit,
    handleEditClick,
    formType,
    onCancelBtn,
    handleDeleteClick
}) => {
       
        return (
        <Container>
            <Title>CRUD REACT HOOKS</Title>
            <Wrapper>
                <Box>
                    <SubTitle>{formType === "add" ? "Add user" : "Edit user"}</SubTitle>
                    <Form submitFn={onSubmit}>
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
                            value={formType === "add" ? "Add new user" : "Update user"}
                            formType={formType}
                            className={"submit-btn"}
                        />
                        <ButtonExtendedCancel
                            value={"Cancel"}
                            formType={formType}
                            className={"cancel-btn"}
                            onClick={onCancelBtn}
                        />

                    </Form>
                </Box>
                <Box>
                    <SubTitle>View users</SubTitle>
                    <Table 
                        users={users}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                </Box>
            </Wrapper>
        </Container>
    );
}

export default HomePresenter;