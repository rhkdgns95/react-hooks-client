import React from "react";
import styled from "../../typed-components";

const Container = styled.div`
    
`;
const UserTable = styled.table`
    width: 90%;
    margin:0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    tr {
        border-bottom: 1px solid #dfdfdf;
    }
    th, td{
        text-align: center;
        padding: 10px;
    }
`;
interface IUser {
    id: number;
    name: string;
    userName: string;
}

interface IProps {
    users: IUser[];
}

const Table: React.FC<IProps> = ({
    users
}) => {
    return (
        <Container>
            <UserTable>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length === 0 && (
                            <tr>
                                <td colSpan={3}>No data.</td>
                            </tr>
                        )
                    }
                    {
                        users.length !== 0 && (
                            users.map((user, key) => (
                                <React.Fragment key={key}>
                                        <tr>
                                            <td>{ user.name }</td>
                                            <td>{ user.userName }</td>
                                            <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                            </td>
                                        </tr>
                                </React.Fragment>))
                        )
                    }
                </tbody>
            </UserTable>
        </Container>
    )
};

export default Table;