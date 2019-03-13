import { ShoppingState } from './shopping.state';
import * as ShoppingActions from './shopping.actions';
import { ShoppingActionType } from './shopping.actions';
import { StoreKeyNames } from '../../../config';
import { ShoppingCartEntry } from '../types/shopping-cart-entry.type';

const initialShoppingState: ShoppingState =
  JSON.parse(localStorage.getItem(StoreKeyNames.SHOPPING))
  ||
  {
    catalogue: {
      '1' : {
        id: '1',
        name: 'Toothpaste',
        description: 'For the cleanest teeth possible',
        image: 'http://via.placeholder.com/250x250?text=Toothpaste',
        price: 3.99
      },
      '2' : {
        id: '2',
        name: 'Toothbrush',
        description: 'For the smoothest brush ever',
        image: 'http://via.placeholder.com/250x250?text=Toothbrush',
        price: 4.99
      },
      '3' : {
        id: '3',
        name: 'Shampoo',
        description: 'For silky-smooth hair',
        image: 'http://via.placeholder.com/250x250?text=Shampoo',
        price: 5.99
      },
      '4' : {
        id: '4',
        name: 'Conditioner',
        description: 'For hair volume',
        image: 'http://via.placeholder.com/250x250?text=Conditioner',
        price: 5.99
      },
      '5' : {
        id: '5',
        name: 'Dental Floss',
        description: 'With 100% extra wax',
        image: 'http://via.placeholder.com/250x250?text=Dental+Floss',
        price: 1.99
      },
      '6' : {
        id: '6',
        name: 'Shower Gel',
        description: 'Treat your skin right',
        image: 'http://via.placeholder.com/250x250?text=Shower Gel',
        price: 3.99
      },
    },
    cart: {
    },
  };

function addItemReducer(state: ShoppingState, action: ShoppingActions.AddItem): ShoppingState {
  const shoppingItem = state.catalogue[action.payload];
  const currentCartEntry = state.cart[action.payload];
  let updatedCartEntry: ShoppingCartEntry;

  if (currentCartEntry) {
    updatedCartEntry = {
      ...currentCartEntry,
      count: currentCartEntry.count + 1,
    };
  } else {
    updatedCartEntry = {
      itemId: shoppingItem.id,
      count: 1,
    };
  }

  return {
    ...state,
    cart: {
      ...state.cart,
      [shoppingItem.id]: updatedCartEntry,
    }
  };
}

function removeItemReducer(state: ShoppingState, action: ShoppingActions.RemoveItem): ShoppingState {
  const updatedCart = { ...state.cart };
  delete updatedCart[action.payload];
  return {
    ...state,
    cart: updatedCart
  };
}

function setItemAmountReducer(state: ShoppingState, action: ShoppingActions.SetItemAmount): ShoppingState {
  return {
    ...state,
    cart: {
      ...state.cart,
      [action.payload.itemId]: {
        ...state.cart[action.payload.itemId],
        count: action.payload.amount
      }
    }
  };
}

function clearCartReducer(state: ShoppingState, action: ShoppingActions.ClearCart): ShoppingState {
  return {
    ...state,
    cart: {
    }
  };
}

export function shoppingReducer(state: ShoppingState, action: ShoppingActions.ShoppingAction): ShoppingState {

  if (!state) {
    return initialShoppingState;
  }
  switch (action.type) {
    case ShoppingActionType.ADD_ITEM:
      return addItemReducer(state, <ShoppingActions.AddItem>action);

    case ShoppingActionType.REMOVE_ITEM:
      return removeItemReducer(state, <ShoppingActions.RemoveItem>action);

    case ShoppingActionType.SET_ITEM_AMOUNT:
      return setItemAmountReducer(state, <ShoppingActions.SetItemAmount>action);

    case ShoppingActionType.CLEAR_CART:
      return clearCartReducer(state, <ShoppingActions.ClearCart>action);

    default:
      return state;
  }
}
