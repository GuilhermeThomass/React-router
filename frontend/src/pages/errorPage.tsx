import { Link } from "react-router-dom"

export default function ErrorPage() {
    return(
        <>
            <h1>404 not found</h1>
            <Link to='/'>Back to home</Link>
        </>
    )
}