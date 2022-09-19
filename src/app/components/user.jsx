import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
  const {
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark
  } = props;

  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qualitie) => (
          <Qualitie key={qualitie._id} {...qualitie} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <button onClick={() => props.onToggleBookMark(_id)}>
          <BookMark status={bookmark} />
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => props.onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default User;
