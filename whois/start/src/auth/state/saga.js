import {all, call, put, takeLeading} from "redux-saga/effects";
import {actions, Types} from "./";
import {makeFetchSaga} from "../../common/util/fetch";
import {callApi} from "../../common/util/api";

function* fetchLogin({name, password}) {
  const {isSuccess, data} = yield call(callApi, {
    url: '/auth/login',
    method: 'post',
    data: {
      name,
      password
    }
  });

  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}

function* fetchSignUp({email}) {
  const {isSuccess, data} = yield call(callApi, {
    url: '/auth/signup',
    method: 'post',
    data: {
      email
    }
  });

  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}

function* fetchUser() {
  const {isSuccess, data} = yield call(callApi, {
    url: '/auth/user'
  });

  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}

function* fetchLogout() {
  const {isSuccess} = yield call(callApi, {
    url: '/auth/logout'
  });

  if (isSuccess) {
    yield put(actions.setUser(''));
  }
}

export default function* () {
  yield all([
    takeLeading(
      Types.FetchLogin,
      makeFetchSaga({fetchSaga: fetchLogin, canCache: false})
    ),
    takeLeading(
      Types.FetchSignUp,
      makeFetchSaga({fetchSaga: fetchSignUp, canCache: false})
    ),
    takeLeading(
      Types.FetchUser,
      makeFetchSaga({fetchSaga: fetchUser, canCache: false})
    ),
    takeLeading(
      Types.FetchLogout,
      makeFetchSaga({fetchSaga: fetchLogout, canCache: false})
    )
  ])
}