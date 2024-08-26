import { useState, ChangeEvent, FormEvent } from "react";
import Home from "../Home/Home";
// import something here
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [token, setToken] = useState("");
  const logout = ()=>setToken("");
  /**
   * Complete all the logging in and logout logic
   */
  const handleSubmit = async (e: FormEvent)=>{
    e.preventDefault();
    console.log("hello");
    setErrorMessage("");
    try {
      const { data } = await axios.post(
        // If you don't proxy the URL, you would have to use
        // http://localhost:3000/api/login
        "/api/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // This is how you get the access token
      setToken(data.token);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setErrorMessage("Your username or password is not correct");
        // Incorrect username or password
      }
    }
  };

if(token){
  return <Home token = {token} logout={logout} />
}

  /**
   * If the user is logged in, you should render the <Home /> component instead.
   */
  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      {/* Handle form submission */}
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="col">
          <label htmlFor="username" className="visually-hidden">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onSubmit={handleSubmit}
            className="form-control mr-3"
            required={true}
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </div>
        <div className="col">
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control mr-3"
            required={true}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            Login
          </button>
        </div>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is{" "}
          <em>password</em>
        </small>
      </p>
      {isLoading && <p>Loading ...</p>}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default App;
