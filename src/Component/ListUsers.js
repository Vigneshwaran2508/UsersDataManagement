import { useDispatch } from "react-redux";
import { removeUser } from "./userSlice";
const userDetails = {
  style: {
    display: "inline",
    textAlign: "left",
    margin: "2%",
    color: "#006400",
    maxWidth: "70%",
    wordWrap: "break-word",
  },
};
const userDetailsLabelFont = {
  style: { fontWeight: "bold" },
};

const userListCart = {
  style: {
    display: "flex",
    position: "relative",
  },
};
const mainBlock = {
  style: {
    border: "1px solid #006400",
    width: "70%",
    borderRadius: "3%",
    marginBottom: "2%",
  },
};
const closePoint = {
  style: {
    cursor: "pointer",
    fontWeight: "bold",
    display: "inline",
    position: "absolute",
    color: "#006400",
    borderRadius: "20%",
    background: "#C6E2C6",
    top: 6,
    right: 6,
  },
};

export const ListUsers = ({ users }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {users.map((user) => {
        return (
          <div {...mainBlock}>
            <div {...userListCart}>
              <div {...userDetails}>
                <p {...userDetailsLabelFont}>Name:</p>
                <p {...userDetailsLabelFont}>Age:</p>
                <p {...userDetailsLabelFont}>Phone Number:</p>
              </div>
              <div {...userDetails}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.phoneNumber}</p>
              </div>
              <button
                {...closePoint}
                onClick={(e) => {
                  dispatch(removeUser(e));
                }}
                id={user.id}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
