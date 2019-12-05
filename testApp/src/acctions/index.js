export {FECHING_DATA, FECHING_SUCCESS, FECHING_FAIL} from '../constants';

export const selected_tab = tabId => {
  return {
    type: ' ',
    payload: tabId,
  };
};

export const loing = () => {
  return {
    type: 'FECHING_LOGIN',
    token,
  };
};

export const getDataSuccess = data => {
  return {
    type: 'FECHING_SUCCESS',
    data,
  };
};

export const getDataFail = () => {
  return {
    type: 'FECHING_FAIL',
  };
};

export const fetchApi = () => {};
