import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
function Login() {
    const params = useParams()
  return (
    <div>
      I am Login
      <Link to="/signup">Signup</Link>
      <p>{params.id}</p>
    </div>
  )
}

export default Login
