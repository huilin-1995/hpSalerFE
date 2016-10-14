import xFetch from './xFetch';

export async function getCustList() {
  return xFetch('/ApiSaler/custList');
}
