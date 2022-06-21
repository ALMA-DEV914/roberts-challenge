import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import TextField from "../components/TextField";
import { addMember } from "../redux/memberSlice"

const AddMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleAddMember = (e) => {
    e.preventDefault();
    setValues({ username: '', email: '' });
    dispatch(addMember({
      id: uuidv4(),
      username: values.username,
      email: values.email,
      password: values.password
    }));
    navigate('/homepage');
  }

  return (
    <div className="container mt-4  mx-auto text-white">
      <h1>WELCOME TO THE RANDOM USERS GENERATOR</h1>
      <form className="login-form col-lg-6 mx-auto text-left p-3">
        <h3 className="text-white">Registered</h3>
      <TextField
        label="Name"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Almita Braunova' }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'almita39@mail.com' }}
      />
    <TextField
        label="Password"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        inputProps={{ type: 'password', placeholder: '******' }}
      /><br></br>

      <button onClick={handleAddMember} className="btns">Submit</button>
      </form>
    </div>
  )
}

export default AddMember;
