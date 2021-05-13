import { all } from 'redux-saga/effects';

import { controlSagas } from 'store/reducers/control/sagas';
import { headerSagas } from 'store/reducers/header/sagas';
import { statisticSagas } from 'store/reducers/statistic/sagas';

export default function* root() {
  yield all([controlSagas(), headerSagas(), statisticSagas()]);
}
