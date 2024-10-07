import { Outlet } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About us Page</h1>
            <p>Just an page to show the info about the page</p>
            <Outlet />
        </div>
    )
}

export default About