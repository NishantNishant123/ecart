// const initialState = 0;

// const changeTheNumber = (state = initialState, action) => {
//     switch (action.type) {
//         case "INCREMENT": return state + action.payload;
//         case "DECREMENT": return state - 1;
//         default: return state;
//     }
// }

// export default changeTheNumber;
import productarr  from '../Productarr';
const initialState1 = {
    items: [],
    cartcounter: 0,
    totalamount: 0,
allitems:productarr
}

const additem = (state = initialState1, action) => {

    switch (action.type) {
        case "ADDITEM":
            {
                let founditem = state.items.find((item) => {
                    return item.id === action.item.id;
                })
                let indexforitem = state.items.findIndex((item) => {
                    return item.id === action.item.id;
                })

                if (founditem) {
                    founditem = { ...founditem, count: Number(founditem.count) + 1 };


                    const totalamount = state.totalamount + founditem.price;
                    console.log(founditem.id);
                    const cartcounter = state.cartcounter + 1;
                    state.items[indexforitem] = founditem;
                    console.log(state.items);
                  
                    return {...state, items: state.items, cartcounter: cartcounter, totalamount: totalamount }
                }
                else {
                    return {...state, items: [...state.items, { ...action.item, count: 1 }], totalamount: state.totalamount + action.item.price, cartcounter: state.cartcounter + 1 }
                }
            }
        case "CHANGEORDER":
            {

                const changeorder = state.items.findIndex((item) => {
                    return item.id === action.order.id;
                })
                let cartcounter = state.cartcounter - state.items[changeorder].count;
                cartcounter = cartcounter + action.order.count;
                let totalamount = state.totalamount - state.items[changeorder].count * state.items[changeorder].price;
                state.items[changeorder].count = action.order.count;
                totalamount = totalamount + action.order.count * state.items[changeorder].price;

               
                return {...state, items: state.items, cartcounter: cartcounter, totalamount: totalamount }

            }
        case "REMOVEITEM":
            { const removeitemindex = state.items.findIndex((item) => {
                return item.id === action.removeitem.id;
            })

            let count=state.items[removeitemindex].count;
            let cartcounter=state.cartcounter-count;
            let totalamount=state.totalamount-(state.items[removeitemindex].count * state.items[removeitemindex].price);
            const removeupdateitems = state.items.filter((item) => {
                    return item.id !== action.removeitem.id;
                })
                console.log(removeupdateitems);
                return {...state, items: removeupdateitems, cartcounter: cartcounter, totalamount: totalamount }

            }
            case "ALLITEM":
                {     let price= Number(action.product.price);
                    let product={...action.product,price:price}
                      state.allitems.push(product);
                      return state;
    
                }
    
        default: return state;
    }
}
export default additem;