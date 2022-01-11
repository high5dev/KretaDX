import * as requestFromServer from "./employeeApi";
import { employeeSlice } from "./employeeSlice";

const { actions } = employeeSlice;

export const fetchData = () => (dispatch) => {
  dispatch(actions.startCall());
  return requestFromServer
    .fetchApi()
    .then((response) => {
      dispatch(actions.fetch(response.data));
    })
    .catch((error) => {
      error.clientMessage = "Can't fetch data";
      dispatch(actions.catchError({ error }));
    });
};
