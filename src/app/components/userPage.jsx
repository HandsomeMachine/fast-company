import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../api";

const UserCard = () => {
    const params = useParams();
    const history = useHistory();

    const { userId } = params;
    const [user, setUser] = useState();

    useEffect(() => {
        API.users.getById(userId).then((data) => {
            setUser(data);
        });
    }, []);

    const handleUsers = () => {
        history.replace("/users");
    };

    if (user) {
        return (
            <div className="ms-2">
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                {user.qualities.map((item) => (
                    <p key={item._id} className={"badge m-1 bg-" + item.color}>
                        {item.name}
                    </p>
                ))}
                <p>CompletedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleUsers}>Все Пользователи</button>
            </div>
        );
    }
};

export default UserCard;
