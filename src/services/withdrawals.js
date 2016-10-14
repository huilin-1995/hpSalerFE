import xFetch from './xFetch';

// 获取收入提现基本信息
export async function getIncomeInfo() {
  return xFetch('/ApiSaler/getIncomeInfo');
}
//获取提现明细
export async function getCashedInfo() {
  return xFetch('/ApiSaler/getCashedInfo');
}
//获取奖金明细
export async function getBonusInfo() {
  return xFetch('/ApiSaler/getBonusInfo');
}