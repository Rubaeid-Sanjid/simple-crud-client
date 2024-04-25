import { useLoaderData } from "react-router-dom";

const Update = () => {
    const user = useLoaderData();

    return (
        <div>
            <h3>Update user profile of {user.name}</h3>
            <form>
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