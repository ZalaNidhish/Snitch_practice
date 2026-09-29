import {Outlet} from 'react-router';
import SellerSidebar from '../../feature/seller/ui/components/SellerSidebar';

const SellerLayout = () => {
  return (
    <div className="flex">
      <SellerSidebar />
      <Outlet />
    </div>
  );
};

export default SellerLayout;