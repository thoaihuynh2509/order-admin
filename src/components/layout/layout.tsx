import React from 'react';
import { Layout as AntLayout, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';
import "./layout.css"

interface ILayoutProps {
  pageTitle?: string;
  goBackPath?: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, goBackPath, children }: ILayoutProps) => {
  const history = useHistory();

  const headerProps = {
    onBack: goBackPath ? () => history.goBack() : undefined,
  };

  return (
    <div>
      <PageHeader
        title={pageTitle}
        style={{ background: 'gray' }}
        {...headerProps}
      />
      <AntLayout.Content style={{ margin: '0px 16px' }}>{children}</AntLayout.Content>
    </div>
  );
};

export default Layout;
