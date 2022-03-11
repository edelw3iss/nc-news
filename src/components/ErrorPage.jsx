import { Link } from "react-router-dom";

export default function ErrorPage ({msg, status}) {
    return <main>
        {msg ? <h2>{`${status}: ${msg} `}</h2> : <h2>Looks like you have lost your way!</h2>}
       
        <Link to="/">Return to Home Page</Link>
    </main>
    
}