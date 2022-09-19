import React, { useState } from "react";
import API from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    const toggle = users.map((user) => {
      if (user._id === id) {
        user.bookmark = !user.bookmark;
      }
      return user;
    });
    setUsers(toggle);
  };

  return (
    <div>
      <SearchStatus length={users.length} />
      {users.length && (
        <Users
          users={users}
          id={users._id}
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
        />
      )}
    </div>
  );
};

export default App;
