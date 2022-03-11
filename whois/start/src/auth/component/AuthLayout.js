import React from "react";
import {Col, Row, Typography} from "antd";
import Form from "antd/es/form/Form";

export default function AuthLayout({children, onFinish}) {
  return (
    <>
      <Row justify="center" style={{marginTop: 100}}>
        <Col>
          <Typography.Title style={{fontFamily: '궁서체'}}>
            찾 아 야 한 다
          </Typography.Title>
        </Col>
      </Row>

      <Row justify="center">
        <Col>
          <Form
            name="normal_login"
            initialValues={{remember: true}}
            style={{
              width: 300,
              marginTop: 50
            }}
            onFinish={onFinish}
          >
            {children}
          </Form>
        </Col>
      </Row>
    </>
  )
}