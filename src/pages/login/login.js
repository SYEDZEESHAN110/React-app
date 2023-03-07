import { Link } from 'react-router-dom' 

function NewEvent() {
  return (
    <form method="post" action="/events">
      <input type="text" name="title" />
      <input type="text" name="description" />
      <Link to='/'><button type="submit">Create</button></Link>
    </form>
  );
}

export default NewEvent