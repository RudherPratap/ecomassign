const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1, price: item.price * 2 } : item)
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1, price: item.price * 2 } : item)
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1), price: Math.max(item.price / 2, item.price * item.quantity / (item.quantity + 1)) } : item)
      };
    default:
      return state;
  }
};

export default reducer;
