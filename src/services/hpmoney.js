import xFetch from './xFetch';

export async function getHpMoney() {
  return xFetch('/ApiSaler/getHpMoney');
}
