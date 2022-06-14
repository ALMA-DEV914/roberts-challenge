import Address from '../Location';
import moment from 'moment';


const UserCard = ({ userData }) => {
    const {name: {title, first, last},
email, phone, dob: {date, age}, picture:{large}} = userData;

    return (
    <div className="container">
    <div className='column'>
    <div className="card" >
    <img className="card-img-top" src={large} alt="user-profile"/>

    <div className="card-body">
    <h2>{title}.{first} {last}</h2>
      <p className="card-title">Date of birth: {moment(`${date}`).format("MMMM Do YYYY")}</p>
      <p>Age: {age}</p>
      <p>{email}</p>
      <p>{phone}</p>
     <Address userData={userData}/>
       <a href="/profile" className="btn btn-primary">See Profile</a>
    </div>
  </div>
  </div>
  </div>
  
    )
};

export default UserCard;