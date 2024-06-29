import { useSelector } from 'react-redux';
import { DashboardMenu } from '../../components/ui';
import './AdminDashboard.scss';
import { optionsMenu as menuOptions } from '../../data/adminMenu';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin);

  return (
    <DashboardMenu
      user={user}
      menuOptions={menuOptions}
      content={admin.content}
    >
      <Outlet />
    </DashboardMenu>
  );
};

export default AdminDashboard;
