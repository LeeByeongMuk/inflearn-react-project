import React from "react";
import Form from "antd/es/form/Form";
import {Button, Input} from "antd";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actions} from "../state";
import AuthLayout from "../component/AuthLayout";
import useBlockLoginUser from "../hook/useBlockLoginUser";

export default function SignUp() {
  useBlockLoginUser();
  const dispatch = useDispatch();
  function onFinish({name}) {
    const email = `${name}${EMAIL_SUFFIX}`;
    dispatch(actions.fetchSignUp(email));
  }

  return (
    <AuthLayout onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your email!'
          }
        ]}
      >
        <Input autoFocus addonAfter={EMAIL_SUFFIX} placeholder="" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
          인증 메일 받기
        </Button>
        or <Link to="login">login</Link>
      </Form.Item>
    </AuthLayout>
  )
}

const EMAIL_SUFFIX = '@company.com';