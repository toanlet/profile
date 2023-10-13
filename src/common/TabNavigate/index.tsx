import { Tabs, TabsProps } from 'antd';
import { ReactNode } from 'react';

export interface TabProps {
  label: ReactNode;
  key: string;
  icon?: ReactNode;
}
interface TabNavigateProps extends TabsProps {
  tabs: TabProps[];
  component: ReactNode;
  onChange?: (activeKey: string | number) => void;
}

const TabNavigate: React.FC<TabNavigateProps> = ({
  tabs,
  component,
  onChange,
  ...props
}) => {
  const items = tabs.map((item) => {
    return {
      label: (
        <span>
          {item?.icon} {item.label}
        </span>
      ),
      key: item.key,
      children: component,
    };
  });
  return <Tabs items={items} {...props} onChange={onChange} />;
};

export default TabNavigate;
