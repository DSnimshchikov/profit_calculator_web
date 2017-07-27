import fetch from 'isomorphic-fetch';
import {
  FETCH_SETTINGS_DEPOSIT_REQUEST, FETCH_SETTINGS_DEPOSIT_SUCCESS, FETCH_SETTINGS_DEPOSIT_ERROR,
  FETCH_SETTINGS_CARD_REQUEST, FETCH_SETTINGS_CARD_SUCCESS, FETCH_SETTINGS_CARD_ERROR,
  FETCH_SETTINGS_SAVING_ACCOUNT_REQUEST, FETCH_SETTINGS_SAVING_ACCOUNT_SUCCESS, FETCH_SETTINGS_SAVING_ACCOUNT_ERROR,
  HEADERS
} from './const';

function fetchSettingDepositRequest(payload) {
  return {type: FETCH_SETTINGS_DEPOSIT_REQUEST, payload};
}

export function fetchSettingDepositSuccess(payload) {
  return {type: FETCH_SETTINGS_DEPOSIT_SUCCESS, payload};
}

function fetchSettingDepositError(payload) {
  return {type: FETCH_SETTINGS_DEPOSIT_ERROR, payload};
}

function fetchSettingCardRequest(payload) {
  return {type: FETCH_SETTINGS_CARD_REQUEST, payload};
}

export function fetchSettingCardSuccess(payload) {
  return {type: FETCH_SETTINGS_CARD_SUCCESS, payload};
}

function fetchSettingCardError(payload) {
  return {type: FETCH_SETTINGS_CARD_ERROR, payload};
}

function fetchSettingSavingAccountRequest(payload) {
  return {type: FETCH_SETTINGS_SAVING_ACCOUNT_REQUEST, payload};
}

export function fetchSettingSavingAccountSuccess(payload) {
  return {type: FETCH_SETTINGS_SAVING_ACCOUNT_SUCCESS, payload};
}

function fetchSettingSavingAccountError(payload) {
  return {type: FETCH_SETTINGS_SAVING_ACCOUNT_ERROR, payload};
}


function fetchSettingDeposit(dispatch) {
  fetch('http://localhost:8080/api/v1/deposits', {
    method: 'get',
    headers: HEADERS,
  })
    .then(response => response.json())
    .then(json => dispatch(fetchSettingDepositSuccess(json._embedded)))
    .catch((error) => {
      console.log('Request failed', error);
      dispatch(fetchSettingDepositError(error));
    });
}

function fetchSettingCard(dispatch) {
  fetch('http://localhost:8080/api/v1/cards', {
    method: 'get',
    headers: HEADERS,
  })
    .then(response => response.json())
    .then(json => dispatch(fetchSettingCardSuccess(json._embedded)))
    .catch((error) => {
      console.log('Request failed', error);
      dispatch(fetchSettingCardError(error));
    });
}

function fetchSettingSavingAccount(dispatch) {
  fetch('http://localhost:8080/api/v1/savingAccounts', {
    method: 'get',
    headers: HEADERS,
  })
    .then(response => response.json())
    .then(json => dispatch(fetchSettingSavingAccountSuccess(json._embedded)))
    .catch((error) => {
      console.log('Request failed', error);
      dispatch(fetchSettingSavingAccountError(error));
    });
}

export function loadSettings() {
  return (dispatch) => {
    dispatch(fetchSettingDepositRequest());
    fetchSettingDeposit(dispatch);

    dispatch(fetchSettingCardRequest());
    fetchSettingCard(dispatch);

    dispatch(fetchSettingSavingAccountRequest());
    fetchSettingSavingAccount(dispatch);
  };
}

module.exports = {fetchSettingDepositSuccess, loadSettings};
