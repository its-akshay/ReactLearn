// import { Outlet } from "react-router-dom"
import Profile from "./Profile"

const About = () => {
    return (
        <div>
            <h1>About us Page</h1>
            <p>Just an page to show the info about the page</p>
            {/* <Outlet />
             */}
             <Profile />
             
        </div>
    )
}

export default About

//child component inside the parent component

// uncomment the line to use profile as a nested route