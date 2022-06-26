import React from 'react';
import { Outlet, useNavigate } from
  'react-router-dom';
import { Layout, Menu } from 'antd';
import menuItem from '../../config/menu';
import './index.scss';

const { Content, Footer, Sider } = Layout;
const items = menuItem.map(
  (item, index) => ({
    key: index,
    label: item.title,
    children: item.subs?.map((its) => ({
      key: its.router,
      label: its.title,
      kaypath: its.router,
    })),
  }),
);
export default function Container() {
  const navigate = useNavigate();
  const onChangeRouter = (router) => { navigate(router); };
  return (
    <Layout className='layout'>
      <Layout>
        <Sider className='sider'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['0']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            onClick={({ key }) => onChangeRouter(key)}
          />
        </Sider>
        <Content className='content'>
          <Outlet />
          <Footer style={{ textAlign: 'center' }}>
            React 实例
            {new Date().getFullYear()}
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}
