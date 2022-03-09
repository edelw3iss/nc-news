import { Link } from "react-router-dom";

export default function ErrorPage () {
    return <section>
       <h2>Looks like you have lost your way!</h2>
        <Link to="/">Return to Home Page</Link>
    </section>
    
}