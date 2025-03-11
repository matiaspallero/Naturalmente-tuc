import React from 'react';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const BotonFlotante = () => (
  <div
    style={{
      height: '700vh',
      padding: 10,
    }}
  >
    <FloatButton.BackTop
      icon={<UpOutlined />}
      style={{
        backgroundColor: '#28c147',
        borderColor: '#1890ff',
        color: '#fff ',
      }}
      visibilityHeight={100}
    />
  </div>
);

export default BotonFlotante;

