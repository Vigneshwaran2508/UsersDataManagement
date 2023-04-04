import { useDispatch } from "react-redux";
import { addUsers } from "./userSlice";

const label = {
  style: {
    width: "20%",
    margin: "2%",
    paddingRight: "1rem",
    textAlign: "left",
    fontWeight: "bold",
    color: "#006400",
  },
};

const input = {
  style: {
    flex: 1,
    maxWidth: "60%",
    height: "2%",
    color: "#006400",
    border: "1px solid #006400",
    marginLeft: "6%",
    borderRadius: "4px",
    fontSize: "1rem",
  },
};

const userForm = {
  style: {
    display: "flex",
  },
};
const userFormMainBlock = {
  style: {
    border: "1px solid #006400",
    maxWidth: "70%",
    borderRadius: "3%",
    marginBottom: "2%",
  },
};
const div = {
  style: { display: "flex", alignItems: "center", margin: "1rem 0" },
};
const submitButton = {
  style: {
    cursor: "pointer",
    color: "#006400",
    borderRadius: "17%",
    background: "#C6E2C6",
    display: "inline",
    height: "4%",
    marginLeft: "2%",
    marginTop: "4%",
  },
};
export const AddUser = () => {
  const dispatch = useDispatch();
  const validation = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(data.entries());
    formObject["id"] = Math.random();
    const isAllFieldHaveValue = Object.values(formObject).every(
      (value) => value !== ""
    );
    isAllFieldHaveValue
      ? dispatch(addUsers({ type: event.type, user: formObject }))
      : alert("All fields are mandatory.");
  };
  return (
    <>
      <form {...userForm} onSubmit={(event) => validation(event)}>
        <div {...userFormMainBlock}>
          <div {...div}>
            <label for="name" {...label}>
              Name:
            </label>
            <input {...input} type="text" name="name" required />
          </div>
          <div {...div}>
            <label for="age" {...label}>
              Age:{" "}
            </label>
            <input {...input} type="number" name="age" required />
          </div>
          <div {...div}>
            <label for="phoneNumber" {...label}>
              Phone Number:{" "}
            </label>{" "}
            <input {...input} type="number" name="phoneNumber" required />
          </div>
        </div>
        <input {...submitButton} type="submit" value="Add" />
      </form>
    </>
  );
};
