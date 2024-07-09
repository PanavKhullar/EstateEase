import SearchBar from "../../components/navbar/searchBar/SearchBar"
import "./homePage.scss"

function HomePage(){
    return(
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                <p>
                Discover a wide array of stunning properties tailored to fit your unique lifestyle. From modern apartments to luxurious villas, find your perfect space with us.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""/>
            </div>

        </div>
    )
}

export default HomePage