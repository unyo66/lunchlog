import { POST } from '../utils/requestUtil';

const User = () => {
    const handleUserCreateClick = async (e) => {
        e.preventDefault();
        const param = {   
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        console.log(param);
        console.log(await POST("/api/user/create", param))
    };
    return (
        <div>
            <h1>User Pasge</h1>
            <form onSubmit={handleUserCreateClick}>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="text" name="email" placeholder="Email" required/>
                <input type="text" name="password" placeholder="Password" required/>
                <button type="submit">User Create</button>
            </form>
        </div>
    );
}
export default User;