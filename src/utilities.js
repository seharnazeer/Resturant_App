export const CheckExistingCart = (id, desc, cartList) => {
    let cart = [...cartList]
        for (var i in cart) {
          if (cart[i].id === id) {
             cart[i].desc = desc;
             break; //Stop this loop, we found it!
          }
        }
        return cart
}