import React, { useState } from "react";
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
    
    return <HomePresenter 
    user={user}
    users={users}
    initialUserData={initialUserData}
    addUser={addUser}
    setUser={setUser}
    onInputChange={onInputChange}
    />
}

export default HomeContainer;