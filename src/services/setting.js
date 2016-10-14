import xFetch from './xFetch';

export async function getShopInfo() {
  return xFetch('/ApiSaler/getShopInfo');
}
