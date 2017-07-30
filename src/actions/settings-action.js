import fetch from 'isomorphic-fetch'
import * as ctx from './const'

function fetchSettingDepositRequest(payload) {
  return {type: ctx.FETCH_SETTINGS_DEPOSIT_REQUEST, payload}
}

export function fetchSettingDepositSuccess(payload) {
  return {type: ctx.FETCH_SETTINGS_DEPOSIT_SUCCESS, payload}
}

function fetchSettingDepositError(payload) {
  return {type: ctx.FETCH_SETTINGS_DEPOSIT_ERROR, payload}
}

function fetchSettingCardRequest(payload) {
  return {type: ctx.FETCH_SETTINGS_CARD_REQUEST, payload}
}

export function fetchSettingCardSuccess(payload) {
  return {type: ctx.FETCH_SETTINGS_CARD_SUCCESS, payload}
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

export function fetchSettingCardOptionSuccess(payload) {
  return {type: ctx.FETCH_SETTINGS_CARD_OPTION_SUCCESS, payload};
}

function fetchSettingSavingAccountError(payload) {
  return {type: ctx.FETCH_SETTINGS_SAVING_ACCOUNT_ERROR, payload}
}

function saveDepositsAction(payload) {
  return {type: ctx.SAVE_DEPOSITS, payload}
}

function saveDepositsSuccess(payload) {
  return {type: ctx.SAVE_DEPOSITS_SUCCESS, payload}
}

function saveDepositsError(payload) {
  return {type: ctx.SAVE_DEPOSITS_ERROR, payload}
}

function saveCardOptionsAction(payload) {
  return {type: ctx.SAVE_CARDS, payload}
}

function saveCardsAction(payload) {
  return {type: ctx.SAVE_CARDS, payload};
}

function saveCardOptionsSuccess(payload) {
  return {type: ctx.SAVE_CARD_OPTIONS_SUCCESS, payload}
}

function saveCardOptionssError(payload) {
  return {type: ctx.SAVE_CARD_OPTIONS_ERROR, payload}
}

function saveCardsSuccess(payload) {
  return {type: ctx.SAVE_CARDS_SUCCESS, payload}
}

function saveCardsError(payload) {
  return {type: ctx.SAVE_CARDS_ERROR, payload}
}

function saveSavingAccountsAction(payload) {
  return {type: ctx.SAVE_SAVING_ACCOUNTS, payload}
}

function saveSavingAccountsSuccess(payload) {
  return {type: ctx.SAVE_SAVING_ACCOUNTS_SUCCESS, payload}
}

function saveSavingAccountsError(payload) {
  return {type: ctx.SAVE_SAVING_ACCOUNTS_ERROR, payload}
}

function addError(payload) {
  return {type: ctx.ADD_ERROR, payload}
}


function fetchSettingDeposit(dispatch) {
  fetch(`${ctx.BASE_PATH}/deposits`, {
    method: ctx.HTTP_METHOD_GET,
    headers: ctx.HEADERS,
  })
    .then(response => response.json())
    .then(json => dispatch(fetchSettingDepositSuccess(json)))
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(fetchSettingDepositError(error))
      dispatch(addError('Произошла ошибка при загрузке настроек вкладов. Попробуйте повторить позже'))
    })
}

function fetchSettingCard(dispatch) {
  fetch(`${ctx.BASE_PATH}/cards`, {
    method: ctx.HTTP_METHOD_GET,
    headers: ctx.HEADERS,
  })
    .then(response => response.json())
    .then(json => dispatch(fetchSettingCardSuccess(json)))
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(fetchSettingCardError(error))
      dispatch(addError('Произошла ошибка при загрузке настроек карт. Попробуйте повторить позже'))
    })
}

function fetchSettingSavingAccount(dispatch) {
  fetch(`${ctx.BASE_PATH}/savingAccounts`, {
    method: ctx.HTTP_METHOD_GET,
    headers: ctx.HEADERS,
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(fetchSettingSavingAccountSuccess(json))
    })
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(fetchSettingSavingAccountError(error))
      dispatch({type: ctx.ADD_ERROR, payload: 'Произошла ошибка при загрузке настроек накопительных счетов. Попробуйте повторить позже'})
    })
}

function fetchSettingCardOptions(dispatch) {
  fetch(`${ctx.BASE_PATH}/settings/card-options`, {
    method: ctx.HTTP_METHOD_GET,
    headers: ctx.HEADERS,
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(fetchSettingCardOptionSuccess(json))
    })
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(dispatch({type: ctx.FETCH_SETTINGS_CARD_OPTION_ERROR, payload: error}))
      dispatch({type: ctx.ADD_ERROR, payload: 'Произошла ошибка при загрузке настроек. Попробуйте повторить позже'})
    })
}

export function loadSettings() {
  return (dispatch) => {
    dispatch(fetchSettingDepositRequest())
    fetchSettingDeposit(dispatch)

    dispatch(fetchSettingCardRequest())
    fetchSettingCard(dispatch)

    dispatch(fetchSettingSavingAccountRequest())
    fetchSettingSavingAccount(dispatch)

    dispatch({type: ctx.FETCH_SETTINGS_CARD_OPTION_REQUEST})
    fetchSettingCardOptions(dispatch)
  }
}

function storeDeposits(deposits, dispatch) {
  fetch(`${ctx.BASE_PATH}/deposits`, {
    method: ctx.HTTP_METHOD_POST,
    headers: ctx.HEADERS,
    body: JSON.stringify(deposits.deposits)
  })
    .then((json) => {
      dispatch(saveDepositsSuccess(json))
      dispatch({type: ctx.ADD_INFO, payload: 'Настройки вкладов успешно сохранены'})
    })
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(saveDepositsError(error))
      dispatch({type: ctx.ADD_ERROR, payload: 'Произошла ошибка при сохранении настроек, попробуйте повторить позже'})
    })
}

export function saveDeposits(deposits) {
  return (dispatch) => {
    dispatch(saveDepositsAction(deposits))
    storeDeposits(deposits, dispatch)
  }
}

function storeCards(cards, dispatch) {
  fetch(`${ctx.BASE_PATH}/cards`, {
    method: ctx.HTTP_METHOD_POST,
    headers: ctx.HEADERS,
    body: JSON.stringify(cards.cards)
  })
    .then((json) => {
      dispatch(saveCardsSuccess(json))
      dispatch({type: ctx.ADD_INFO, payload: 'Настройки карт успешно сохранены'})
    })
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(saveCardsError(error))
      dispatch({type: ctx.ADD_ERROR, payload: 'Произошла ошибка при сохранении настроек, попробуйте повторить позже'})
    })
}

function storeCardOptions(cardOptions, dispatch) {
  fetch(`${ctx.BASE_PATH}/settings/card-options`, {
    method: ctx.HTTP_METHOD_POST,
    headers: ctx.HEADERS,
    body: JSON.stringify(cardOptions.cardOptions)
  })
    .then((json) => {
      dispatch(saveCardsSuccess(json))
      dispatch({type: ctx.ADD_INFO, payload: 'Настройки карточных опций успешно сохранены'})
    })
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(saveCardsError(error))
      dispatch({type: ctx.ADD_ERROR, payload: 'Произошла ошибка при сохранении настроек, попробуйте повторить позже'})
    })
}

export function saveCards(cards) {
  return (dispatch) => {
    dispatch(saveCardsAction(cards))
    storeCards(cards, dispatch)
  }
}

export function saveCardOptions(cardOptions) {
  return (dispatch) => {
    dispatch(saveCardOptionsAction(cardOptions))
    storeCardOptions(cardOptions, dispatch)
  }
}

function storeSavingAccounts(savingAccounts, dispatch) {
  fetch(`${ctx.BASE_PATH}/savingAccounts`, {
    method: ctx.HTTP_METHOD_POST,
    headers: ctx.HEADERS,
    body: JSON.stringify(savingAccounts.savingAccounts)
  })
    .then((json) => {
      dispatch(saveSavingAccountsSuccess(json))
      dispatch({type: ctx.ADD_INFO, payload: 'Настройки накопительных счетов успешно сохранены'})
    })
    .catch((error) => {
      console.log('Request failed', error)
      dispatch(saveSavingAccountsError(error))
      dispatch({type: ctx.ADD_ERROR, payload: 'Произошла ошибка при сохранении настроек, попробуйте повторить позже'})
    })
}

export function saveSavingAccounts(savingAccounts) {
  return (dispatch) => {
    dispatch(saveSavingAccountsAction(savingAccounts))
    storeSavingAccounts(savingAccounts, dispatch)
  }
}

module.exports = {fetchSettingDepositSuccess, loadSettings, saveDeposits, saveCards, saveSavingAccounts, saveCardOptions}
