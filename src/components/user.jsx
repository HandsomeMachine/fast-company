import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  const {
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
  } = props;

  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qualitie) => (
          <Qualitie qualitie={qualitie} {...qualitie} />
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

export default User;
