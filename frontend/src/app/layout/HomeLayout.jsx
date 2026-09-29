import {Outlet} from 'react-router';
import LandingNavbar from '../../shared/ui/components/LandingNavbar';

const HomeLayout = () => {
  return (
    <div>
      <LandingNavbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;