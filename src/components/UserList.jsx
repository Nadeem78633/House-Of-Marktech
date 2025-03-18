
import SearchBar from "./SearchBar";
import '../assets/css/userList.css'

const UserList = ({ users, onSearch }) => {
  return (
    <section className="user-list">
      <h2>User List</h2>
      <SearchBar onSearch={onSearch} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
