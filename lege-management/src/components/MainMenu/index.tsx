import React, {useState} from 'react';
import {MenuProps} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useLocation, useNavigate} from "react-router-dom";
import {Menu} from "antd";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('项目1', '/page1', <PieChartOutlined />),
    getItem('项目2', '/page2', <DesktopOutlined />),
    getItem('项目3', '/page3', <UserOutlined />, [
        getItem('类别301', '/page3/page301'),
        getItem('类别302', '/page3/page302'),
        getItem('类别303', '/page3/page303'),
    ]),
    getItem('项目4', 'page4', <TeamOutlined />, [
        getItem('类别401', '/page4/page401'),
        getItem('类别402', '/page4/page402')
    ]),
    getItem('项目5', 'page5', <FileOutlined />),
];

const MainMenu = () => {
    const navigateTo = useNavigate();

    const [openKeys,setOpenKeys] = useState([''])

    const currentLocation = useLocation();
    const menuClick = (e:{key:string})=>{
        // console.log(e.key)
        //点击跳转到对应的路由，编程式跳转
        navigateTo(e.key)
    }

    const handlerOnOpenChange = (keys:string[])=>{
        //点击展开栏触发的事件
        // console.log(keys)

        setOpenKeys([keys[keys.length-1]])
    }

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentLocation.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            //某项菜单展开和回收的事件
            onOpenChange={handlerOnOpenChange}
            openKeys={openKeys}
        />
    );
};

export default MainMenu;