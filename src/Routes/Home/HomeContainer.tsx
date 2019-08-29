import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";

interface IUser {
    id: number;
    name: string;
    userName: string;
}

const HomeContainer = () => {
    const userData: IUser[] = [
        { id: 0, name: "김광훈", userName: "KKH" },
        { id: 1, name: "이광연", userName: "LKY" },
        { id: 2, name: "황영서", userName: "HYS" },
        { id: 3, name: "김수빈", userName: "KSB" }
    ];
    const initialUserData: IUser = {
        id: 0, name: "", userName: ""
    };
    const [ formType, setFormType ] = useState("add");
    const [ users, setUsers ] = useState(userData);
    const [ user, setUser ] = useState(initialUserData);

    const addUser = (user: IUser) => {
        user.id = users.length;
        setUsers([
            ...users,
            user
        ]);
    }

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const { target: { name, value }} = event;
        setUser({
            ...user,
            [name]: value
        });
    }
    const handleEditClick = (data: IUser) => {
        const { id, name, userName } = data;
        setUser({
            id,
            name,
            userName
        });
        setFormType("edit");
    }
    const handleDeleteClick = (id: number) => {
        console.log(id);
        var postUsers: IUser[] = [];
        users.map(user => {
            if(user.id !== id) {
                postUsers.push(user);
            }
        });
        console.log(users);
        setUsers([
            ...postUsers
        ]);
    }
    const onSubmit: React.FormEventHandler<HTMLFormElement> = () => {
        if(formType === "add") {
            addUser(user);
            console.log("add");
        } else if(formType === "edit") {
            users.map((currentUser: IUser) => {
                if(currentUser.id === user.id) {
                    currentUser.name = user.name;
                    currentUser.userName = user.userName;
                }
                console.log("edit");
                return currentUser;
            });
            setUsers([
                ...users
            ]);
            setFormType("add");
        }

        setUser({
            ...initialUserData
        });
    }
    const onCancelBtn = (event) => {
        event.preventDefault();
        setFormType("add");
        setUser({
            ...initialUserData
        });
    }

    useEffect(() => {
        console.log("useEffect");
        return () => {
            console.log("useEffect After");
        }
    })
    
    return <HomePresenter 
    user={user}
    users={users}
    onInputChange={onInputChange}
    onSubmit={onSubmit}
    handleEditClick={handleEditClick}
    handleDeleteClick={handleDeleteClick}
    formType={formType}
    onCancelBtn={onCancelBtn}
    />
}

export default HomeContainer;