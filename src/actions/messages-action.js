import * as ctx from './const';

export function clearInfos(payload) {
  return {type: ctx.CLEAR_INFOS};
}


export function clearErrors(payload) {
  return {type: ctx.CLEAR_ERRORS};
}
