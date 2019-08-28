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

const TablePresenter = () => (
    <UserTable>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name Data</td>
                <td>Username data</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </UserTable>
);

const Table = () => (
    <Container>
        <TablePresenter />
    </Container>
);

export default Table;