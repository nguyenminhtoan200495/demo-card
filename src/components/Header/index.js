import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Header } = Layout;

const HeaderComponent = () => {
  console.log("window.location.href: ", window.location.href);
  const { authTokens } = useAuth();
  return authTokens ? (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  ) : (
    <></>
  );
};

export default HeaderComponent;
