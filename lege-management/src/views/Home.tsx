import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet} from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;


const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/*左侧侧边栏*/}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <MainMenu/>
            </Sider>
            {/*右侧内容区*/}
            <Layout className="site-layout">
                {/*右侧内容区头部*/}
                <Header style={{ paddingLeft: "20px", background: colorBgContainer }}>
                    {/*面包屑*/}
                    <Breadcrumb style={{ lineHeight:"64px"}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/*右侧内容区核心*/}
                <Content style={{ margin: '16px 16px 0' }}>
                    <div style={{ padding: 24, height: "100%", background: colorBgContainer }}>
                        <Outlet/>
                    </div>
                </Content>
                {/*右侧内容区底部*/}
                <Footer style={{ textAlign: 'center',padding:0,height:"48px",lineHeight:'48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;