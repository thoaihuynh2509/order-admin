import React, { FC } from 'react';
import { Layout } from 'antd';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <Layout style={{ minHeight: '100vh', padding: 8 }}>{children}</Layout>;
};

export default AppLayout;
