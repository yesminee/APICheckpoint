import React, { useState, useEffect } from "react";
import UserCard from "./usersCard";

function UsersList() {
  const axios = require("axios");
  const [UsersList, SetList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => SetList(response.data));
  }, [axios]);
  return (
    <div className="d-flex flex-wrap">
      {UsersList.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </div>
  );
}

export default UsersList;