/*
[복습예제1]
책 한권은 50만원. 30%할인. 배송료는 5천원.
10권 주문. 총 지불액?

var a =3;
var b=3;
var result = a+b;
console.log(result);

[설계]
책값 : 50 0000 원
할인률 : 30 퍼센트
배송료 : 5000 원
주문책 갯수 = 10 개

현재 책값(할인적용) =
총 책값 = 판매액 * 주문책 숫자
지불액(배송료포함) = 총 책값 + 배송료

총판매금 = 책값 * (1-할인률/100) * 주문책 숫자 + 배송료
*/

var price = 500000;
var discount_rate = 30;
var delivery_fee = 5000;
var product_num = 10;
var total_price;

function calculate_price (price, discount_rate, delivery_fee, product_num) {
  var result = price * (100-discount_rate)/100 * product_num + delivery_fee;
  return result;
}

total_price = calculate_price(price, discount_rate, delivery_fee, product_num);
console.log(total_price);



/*
var book_price = 500000;
var delivery_price = 5000;
var sale_percent = 30;
var order_book_num = 10;


function calculate_sales_price(book_price, sale_percent) {
    return book_price * (1 - sale_percent/100);
}


function calculate_total_book_price(sale_book_price, order_book_num) {
    return sale_book_price * order_book_num;
}

function calculate_total_order_price(total_book_price, delivery_price) {
  return total_book_price * delivery_price;
}

var sale_book_price = calculate_sales_price(book_price, sale_percent);

var total_book_price = calculate_total_book_price(sale_book_price, order_book_num);

var total_order_price = calculate_total_order_price(total_book_price, delivery_price);

console.log(sale_book_price);
console.log(total_book_price);
console.log(total_order_price);
*/
/*
  고칠점: 설게 디자인이 잘 안되었다. 수식 하나당 함수를 만드는 것은 비효율적이었다.
  매개변수와 변수들을 많이 사용해야 하고, 함수가 서로 연관되어 있으니 더 복잡하다.

  디자인할 때, 단순하게 짜고, 그 다음에 수정해서 만드는 생각으로 하면 되겠다.
  처음부터 완벽하게 만들지 말자.

*/
