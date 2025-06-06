import React from 'react';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const BotonFlotante = () => (
  // El div exterior con altura '700vh' y padding es probablemente para demostración/prueba.
  // Si es parte del layout deseado, también se puede convertir: className="h-[700vh] p-[10px]"
  // Asegúrate de que este div tenga sentido en el contexto de tu layout general.
  <div className="h-[700vh] p-[10px]">
    <FloatButton.BackTop
       icon={<UpOutlined />}
       className="!bg-[#28c147] !border-[#1890ff] !text-white" // Clases de Tailwind
       visibilityHeight={100}
     />
  </div>
);

export default BotonFlotante;
