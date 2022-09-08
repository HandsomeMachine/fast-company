import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDeleteButton = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  const renderPhrase = (number) => {
    let phrase = "тусанет с тобой сегодня";

    if (number === 2 || number === 3 || number === 4) {
      phrase = `${number} человека тусанет с тобой сегодня`;
    }

    if (number === 1 || number > 4) {
      phrase = `${number} человек тусанет с тобой сегодня`;
    }

    return phrase;
  };

  if (users.length === 0) {
    return (
      <h2 className="badge fs-3 bg-danger">Никто с тобой не тусанет сегодня</h2>
    );
  }

  return (
    <>
      <h2 className="badge fs-3 bg-primary">{renderPhrase(users.length)}</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Кнопка</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality) => {
                  let qualityColor = `badge bg-${quality.color} me-2`;
                  return <span className={qualityColor}>{quality.name}</span>;
                })}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td onClick={() => handleDeleteButton(user._id)}>
                <button type="button" className="btn btn-danger">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
