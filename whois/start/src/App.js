import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {actions as authActions} from './auth/state';
import Search from "./search/container/Search";
import User from "./user/container/User";
import Login from "./auth/container/Login";
import SignUp from "./auth/container/SignUp";
import 'antd/dist/antd.css';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.fetchUser());
  }, [dispatch])

  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </>
  );
}
