import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMember } from "../redux/memberSlice";
import { FaEdit, FaTrash } from "react-icons/fa";
import {IoMdReturnLeft} from "react-icons/io"

const MemberList = () => {
  const dispatch = useDispatch();
  const members = useSelector((store) => store.members);

  const handleRemoveMember = (id) => {
    dispatch(deleteMember({ id }));
  };

  const renderCard = () =>
    members.map((member) => (
      <div
        className="d-flex col-lg-6 mx-auto bg-dark mt-2 p-3 justify-content-between"
        key={member.id}
      >
        <div>
          <h3 className="font-bold text-lg text-white-700">
            {member.username}
          </h3>
          <span className="font-normal text-white-600">{member.email}</span>
        </div>
        <div>
          <Link to={`edit-member/${member.id}`}>
            <button><FaEdit /> </button>
          </Link>
          <button onClick={() => handleRemoveMember(member.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    ));

  return (
    <div className="container text-white mt-4 text-center">
      <h1>WELCOME TO THE RANDOM USERS GENERATOR</h1>
      <Link to="/add-member">
        <button className="text-dark ">JOIN THE MEMBERS</button>
      </Link>
      <Link to="/homepage"><button className="btns"><IoMdReturnLeft/> return home</button></Link>

      <div className="container">
        <div className="row">
          <div className="col">
            {members.length ? (
              renderCard()
            ) : (
              <p className="text-center text-gray-700 font-semibold"></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
