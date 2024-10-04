import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <div className="error-title">Oops!</div>
            <div className="error-message">Something went wrong</div>
            <div className="error-subtitle">404: Not Found</div>
        </div>
    )
};

export default Error;