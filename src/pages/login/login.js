import { Link } from 'react-router-dom' 
import '../../pages/login/style.css'

function NewEvent() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
        <Link to='/'><button type="submit">Create</button></Link>
        </div>
      </form>
    </div>
  );
}

export default NewEvent
