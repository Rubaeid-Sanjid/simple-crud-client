import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Users: {users.length}</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h2>
            {user._id}: {user.name} : {user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Users;
