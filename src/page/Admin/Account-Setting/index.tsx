import { Outlet, useNavigate } from 'react-router-dom';
import TabNavigate, { TabProps } from 'src/common/TabNavigate';
import { PATH } from 'src/config/contanst';

const AccountSetting = () => {
  const tabs: TabProps[] = [
    {
      label: 'Account',
      key: PATH.ACCOUNT,
      icon: <i className="fa fa-user-o"></i>,
    },
    {
      label: 'Security',
      key: PATH.SECURITY,
      icon: <i className="fa fa-lock"></i>,
    },
    {
      label: 'Notification',
      key: PATH.NOTIFICATION,
      icon: <i className="fa fa-bell-o"></i>,
    },
  ];

  const navigate = useNavigate();
  const handleChangeTabs = (activeKey: string | number) => {
    if (activeKey) navigate(`${activeKey}`);
  };
  return (
    <div>
      <TabNavigate
        tabs={tabs}
        component={<Outlet />}
        defaultActiveKey={PATH.ACCOUNT}
        onChange={handleChangeTabs}
      />
    </div>
  );
};

export default AccountSetting;
