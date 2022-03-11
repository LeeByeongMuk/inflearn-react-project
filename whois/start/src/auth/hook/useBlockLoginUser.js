import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {AuthStatus} from "../../common/constant";

export default function useBlockLoginUser() {
  const history = useHistory();
  const status = useSelector(state => state.auth.status);
  useEffect(() => {
    if (status === AuthStatus.Login) {
      history.replace('/');
    }
  }, [history, status]);

}