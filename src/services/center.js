import xFetch from './xFetch';

export async function getSalerHome() {
  return xFetch('/ApiSaler/salerHome');
}
