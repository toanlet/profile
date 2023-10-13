import { Form, Input } from 'antd';

interface InputBaseProps {
  label: string;
  name: string;
}
export const InputBase: React.FC<InputBaseProps> = ({ label, name }) => {
  return (
    <Form.Item label={label} name={name}>
      <Input />
    </Form.Item>
  );
};
