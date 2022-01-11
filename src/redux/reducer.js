import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import { dashboardSlice } from "../pages/dashboard/dashboardSlice";
import { employeeSlice } from "../pages/employee/employeeSlice";

export const rootReducer = combineReducers({
  dashboard: dashboardSlice.reducer,
  employee: employeeSlice.reducer,
});

export function* rootSaga() {
  yield all([]);
}
