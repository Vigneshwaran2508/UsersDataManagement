import { useSelector } from "react-redux";
import { users } from "./userSlice";
import { AddUser } from "./AddNewUser";
import { ListUsers } from "./ListUsers";

export function User() {
  const listUsers = useSelector(users);
  return (
    <div>
      <AddUser />
      <ListUsers users={listUsers} />
    </div>
  );
}
