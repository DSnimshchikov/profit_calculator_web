import fetch from 'isomorphic-fetch';
import * as ctx from './const';

function fetchSettingDepositRequest(payload) {
  return {type: ctx.FETCH_SETTINGS_DEPOSIT_REQUEST, payload};
}

export function fetchSettingDepositSuccess(payload) {
  return {type: ctx.FETCH_SETTINGS_DEPOSIT_SUCCESS, payload};
}

function fetchSettingDepositError(payload) {
  return {type: ctx.FETCH_SETTINGS_DEPOSIT_ERROR, payload};
}

function fetchSettingCardRequest(payload) {
  return {type: ctx.FETCH_SETTINGS_CARD_REQUEST, payload};
}

export function fetchSettingCardSuccess(payload) {
  return {type: ctx.FETCH_SETTINGS_CARD_SUCCESS, payload};
}

function fetchSettingCardError(payload) {
  return {type: ctx.FETCH_SETTINGS_CARD_ERROR, payload};
}

function fetchSettingSavingAccountRequest(payload) {
  return {type: ctx.FETCH_SETTINGS_SAVING_ACCOUNT_REQUEST, payload};
}

export function fetchSettingSavingAccountSuccess(payload) {
  return {type: ctx.FETCH_SETTINGS_SAVING_ACCOUNT_SUCCESS, payload};
}

function fetchSettingSavingAccountError(payload) {
  return {type: ctx.FETCH_SETTINGS_SAVING_ACCOUNT_ERROR, payload};
}


function fetchSettingDeposit(dispatch) {
  fetch(`${ctx.BASE_PATH}/deposits`, {
    method: ctx.HTTP_METHOD_GET,
    headers: ctx.HEADERS,
  })
    .then(response => response.json())
    .then(json => dispatch(fetchSettingDepositSuccess(json)))
    .catch((error) => {
      console.log('Request failed', error);
      dispatch(fetchSettingDepositError(error));
    });
}

function fetchSettingCard(dispatch) {
  fetch(`${ctx.BASE_PATH}/cards`, {
    method: ctx.HTTP_METHOD_GET,
    headers: ctx.HEADERS,
  })
    .then(response => response.json())
    .then(json => dispatch(fetchSettingCardSuccess(json)))
    .catch((error) => {
      console.log('Request failed', error);
      dispatch(fetchSettingCardError(error));
    });
}

function fetchSettingSavingAccount(dispatch) {
  fetch(`${ctx.BASE_PATH}/savingAccounts`, {
    method: ctx.HTTP_METHOD_GET,
    headers: ctx.HEADERS,
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(fetchSettingSavingAccountSuccess(json));
    })
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
