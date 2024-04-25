import { useLoaderData } from "react-router-dom";

const Update = () => {
    const user = useLoaderData();

    const handleUpdate =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = {name, email};

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h3>Update user profile of {user.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user.name}/>
                <br />
                <input type="email" name="email" defaultValue={user.email}/>
                <br />
                <input type="submit" value={'Update'}/>
            </form>
        </div>
    );
};

export default Update;