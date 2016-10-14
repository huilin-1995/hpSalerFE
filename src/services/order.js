import xFetch from './xFetch';

export async function getOrder() {
  return xFetch('/ApiSaler/getOrder');
}