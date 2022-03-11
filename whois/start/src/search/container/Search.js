import React, {useEffect} from 'react';
import {Row, Col, Typography} from 'antd';
import Settings from "../component/Settings";
import SearchInput from "../component/SearchInput";
import History from "../../common/component/History";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../state";
import {actions as authActions} from "../../auth/state";
import useNeedLogin from "../../common/hook/useNeedLogin";

export default function Search() {
  useNeedLogin();
  const dispatch = useDispatch();
  const history = useSelector(state => state.search.history);
  useEffect(() => {
    dispatch(actions.fetchAllHistory());
  }, [dispatch]);

  function logout() {
    dispatch(authActions.fetchLogout());
  }

  return (
    <>
      <Row justify="end" style={{padding: 20}}>
        <Col>
          <Settings logout={logout}/>
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
