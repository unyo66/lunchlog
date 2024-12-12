import { GET } from '../utils/requestUtil';
import axios from 'axios';

const Home = () => {
    const handleClick = async () => {
       console.log(await GET("/api/user"))
    };
    const handleUserListClick = () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        };
        axios.get("/api/user/list", requestOptions)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div>
            <h1>Home Pasge</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleUserListClick}>User List</button>
        </div>
    );
}
export default Home;