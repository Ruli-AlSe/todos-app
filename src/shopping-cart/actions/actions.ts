import { getCookie, hasCookie, setCookie } from 'cookies-next';

export const getCoockieCart = (): { [id: string]: number } => {
  if (hasCookie('cart')) {
    const cookieCart = JSON.parse((getCookie('cart') as string) ?? '{}');

    return cookieCart;
  }

  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCoockieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie('cart', JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCoockieCart();

  delete cookieCart[id];
  setCookie('cart', JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCoockieCart();
  if (!cookieCart[id]) return;

  if (cookieCart[id] > 1) {
    cookieCart[id] -= 1;
  } else {
    delete cookieCart[id];
  }

  setCookie('cart', JSON.stringify(cookieCart));
};