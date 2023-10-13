import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import './styles.scss';
import { useCheckDevice } from 'src/hook/useCheckDevice';
import { BREAKPOINTS } from 'src/config/contanst';
import { useAppDispatch } from 'src/hook/useAppDispatch';
import { toggle } from 'src/reducers/common';

const AdminHeader: React.FC<any> = () => {
  const [isMobile] = useCheckDevice(BREAKPOINTS.HORIZONTAL_MOBILE);

  const dispatch = useAppDispatch();
  const [searchForm] = useForm();
  const handleSearch = (e: any) => {};

  const handleToggle = () => {
    dispatch(toggle());
  };
  return (
    <div className="header">
      <div className="left">
        {isMobile && (
          <Button type="default" shape="circle" onClick={handleToggle}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </Button>
        )}
        <Form
          form={searchForm}
          onFinish={handleSearch}
          onKeyDown={handleSearch}
          className="search-box"
        >
          <Form.Item name="search" className="input">
            <Input
              placeholder="Search"
              prefix={<i className="fa fa-search" aria-hidden="true"></i>}
            />
          </Form.Item>
        </Form>
      </div>

      <div className="info">
        <Button type="default" shape="circle">
          <i className="fa fa-github" aria-hidden="true"></i>
        </Button>

        <Button type="default" shape="circle">
          <i className="fa fa-bell-o" aria-hidden="true"></i>
        </Button>

        <Button type="default" shape="circle">
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
