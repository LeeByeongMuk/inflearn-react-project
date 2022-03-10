import React from 'react';
import {Route} from 'react-router-dom';
import Search from "./search/container/Search";
import User from "./user/container/User";

import 'antd/dist/antd.css';

export default function App() {
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
    </>
  );
}
