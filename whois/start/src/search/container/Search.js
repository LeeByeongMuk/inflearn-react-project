import React, {useEffect} from 'react';
import {Row, Col, Typography} from 'antd';
import Settings from "../component/Settings";
import SearchInput from "../component/SearchInput";
import History from "../../common/component/History";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../state";

export default function Search() {
  const dispatch = useDispatch();
  const history = useSelector(state => {
    console.log(state);
    return state.search.history;
  });

  console.log(history);

  useEffect(() => {
    dispatch(actions.fetchAllHistory());
  }, [dispatch]);

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
        <Col xs={20} md={16} lg={12}>
          <SearchInput />
        </Col>
      </Row>
      <Row justify="center" style={{marginTop: 50}}>
        <Col xs={20} md={16} lg={12}>
          <History items={history}/>
        </Col>
      </Row>
    </>
  )
}
