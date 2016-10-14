import xFetch from './xFetch';

export async function getQCode() {
  return xFetch('/ApiSaler/qCode');
}
