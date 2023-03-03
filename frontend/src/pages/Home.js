const Home = () => {
    const handleChange = (e) => {
        e.preventDefault();
        console.log('hello')
    }
    return (
        <div className='homePage'>
            <h1> Hello</h1>
            <input
            type="text"
            placeholder="Search for city"
            />
            <button type="submit" onClick={handleChange}>Search</button>
        </div>
    )
}
export default Home