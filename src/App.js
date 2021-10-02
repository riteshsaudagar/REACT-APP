import { useState } from "react";
import "./App.css";
import UserCard from "./UserCard";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import UseFullPageLoader from "./UseFullPageLoader";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const [Loader, showLoader, hideLoader] = UseFullPageLoader();

  const loadUsers = () => {
    showLoader();
    setTimeout(async () => {
      const response = await fetch("https://reqres.in/api/users?page=1");
      let userData = (await response.json()).data;

      setAllUsers(userData);
      setUsers(userData);

      hideLoader();
    }, 4000);
  };

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.first_name} ${user.last_name} ${user.id}`
        .toLowerCase()
        .includes(value)
    );
    setUsers(filteredUsers);
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="btn_div">
          <Button className="btn" onClick={loadUsers}>
            GET USERS
          </Button>
        </div>

        <h2>
          <b>USERS DATA</b>
        </h2>
        <div className="search-div">
          <input
            className="search-box"
            placeholder="User Name or ID"
            onInput={filterCards}
          />
        </div>
        <div className="cards_container">
          {users.map((user, index) => (
            <UserCard userData={user} key={index} />
          ))}
        </div>
      </div>
      ,{Loader}
    </>
  );
}

export default App;
