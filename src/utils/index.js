export function formatMoney(num) {
  if (typeof (num) == 'number') {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
  }
  return num
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
};



export const GHNToken = "6b47d361-0f52-11ed-8636-7617f3863de9"
export const GHNShopID = 3136159