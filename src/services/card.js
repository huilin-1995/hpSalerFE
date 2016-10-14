import xFetch from './xFetch';

export async function getCardList() {
  return xFetch('/ApiSaler/cardList');
}
export async function getAddCard() {
  return xFetch('/ApiSaler/addCard');
}
export async function getEditCard() {
  return xFetch('/ApiSaler/editCard');
}