import React from 'react';
import {Row, Col, Typography} from 'antd';
import Settings from "../component/Settings";

export default function Search() {
  return (
    <>
      <Row justify="end" style={{padding: 20}}>
        <Col>
          <Settings logout={() => {}}/>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop: 100}}>
        <Col>
          <Typography.Title style={{fontFamily: '궁서체'}}>찾아야한다</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop: 50}}>
        <Col span={12}>검색</Col>
      </Row>
    </>
  )
}
