
// Реализуйте функцию formatPrice(), которая принимает число 
// и возвращает строку с округлением до второго числа после запятой. 
// Если пришел null или undefined должна вернуться '$0.00'.

function formatPrice(num?: number | null): string {
  if(!num) {
    return '$0.00';
  } 

  return '$' + num.toFixed(2);
}

formatPrice(3.145); // '$3.15'
formatPrice(200); // '$200.00'
formatPrice(); // '$0.00'
formatPrice(null); // '$0.00'