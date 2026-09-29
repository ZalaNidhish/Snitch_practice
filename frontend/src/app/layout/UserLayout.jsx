import { Outlet } from "react-router";
import UserNavbar from "../../feature/user/ui/components/UserNavbar";

const UserLayout = () => {
  return (
    <div>
      <UserNavbar />
      <Outlet />
    </div>
  );
};

export default UserLayout;