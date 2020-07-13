import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { logIn } from "./api";
import { useAuth } from "../../context/auth";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props) => {
  // email: 'eve.holt@reqres.in',
  // password: 'cityslicka'
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const { username, password } = values;
      const response = await logIn({ username, password });
      setAuthTokens(response.data.token);
      setLoggedIn(true);
      console.log("props: ", props);
      console.log("Success");
    } catch (error) {
      // setIsError(true);
      console.log("Error: ", error.response.data.error);
    }
  };

  if (isLoggedIn) {
    const referer = props.location.state?.referer || "/";
    return <Redirect to={referer} />;
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
