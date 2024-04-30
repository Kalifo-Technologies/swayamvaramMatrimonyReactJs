import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
    <div className="background-login">
      <div className="shape-login"></div>
      <div className="shape-login"></div>
    </div>
    <form>
      <h3>Register Here</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <button className="button-login">Log In</button>
      <div className="donthave">
        <Link to="/login">Allready have an account? Login</Link>
      </div>
    </form>
  </>
  )
}

export default Register