const Home = () => {
    const handleClick = () => {
        let result = fetch('/api/message')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        alert('Home : ', result);
    };
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
export default Home;