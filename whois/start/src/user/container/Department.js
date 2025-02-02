import React, {useState} from 'react';
import {Button, Input, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../state";

export default function Department() {
  const [isEditDepartment, setIsEditDepartment] = useState(false);
  const [tempDepartment, setTempDepartment] = useState('');
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  function onSaveDepartment() {
    if (tempDepartment) {
      dispatch(actions.fetchUpdateUser({
        user,
        key: 'department',
        value: tempDepartment,
        fetchKey: 'department'
      }))
      setIsEditDepartment(false);
    } else {
      message.error('소속은 필수 입니다.');
    }
  }

  function onEditDepartment() {
    setIsEditDepartment(true);
    setTempDepartment(user.department);
  }

  return (
    <>
      {isEditDepartment && (
        <Input
          autoFocus
          // ref={ref => ref && ref.focus()}
          value={tempDepartment}
          onChange={e => setTempDepartment(e.target.value)}
          onPressEnter={onSaveDepartment}
          onBlur={() => setIsEditDepartment(false)}
          style={{width: '100%'}}
        />
      )}
      {!isEditDepartment && (
        <Button
          type="text"
          block
          onClick={onEditDepartment}
          style={{textAlign: 'left', padding: 0}}
        >
          {user.department}
        </Button>
      )}
    </>
  );
}