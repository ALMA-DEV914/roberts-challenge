import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button"
import TextField from "../components/TextField"
import { editMember } from "../redux/memberSlice"

const EditMember = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const members = useSelector(store => store.members);
  const navigate = useNavigate();
  const existingUser = members.filter(member => member.id === params.id);
  const { username, email } = existingUser[0];
  const [values, setValues] = useState({
    username,
    email
  });

  const handleEditMember = () => {
    setValues({ username: '', email: '' });
    dispatch(editMember({
      id: params.id,
      username: values.username,
      email: values.email
    }));
    navigate('/');
  }

  return (
    <div className="container mt-4 col-lg-6 mx-auto text-white">
      <h2>Edit your details</h2><br></br>
      <TextField
        label="Name"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
      />
      <button onClick={handleEditMember} className="btns">Edit</button>
    </div>
  )
}

export default EditMember;
