import Data from "../data";

class Product {
  id: any;
  title: string;
  price: number;
  image: string;
  description: string;
  amount: number;
  products: any;
  constructor(
    id: any,
    title: string,
    price: number,
    image: string,
    description: string,
    amount: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.description = description;
    this.amount = amount;
  }
}

export const ProductList = Data.items.map((item) => {
  return new Product(
    item.sys.id,
    item.fields.title,
    item.fields.price,
    item.fields.image.fields.file.url,
    item.fields.description,
    item.fields.amount
  );
});

const initialState: any = {
  products: ProductList,
  cart: [],
  toggle: false,
  productCounter: 0,
};


export default function reducer(state = initialState, action: any) {
  
  switch (action.type) {
    case "CLEAR_BUTTON_CLICKED":
      return {
        ...state,
        cart: [],
        productCounter: 0,
        total: 0,
      };

    case "ADD_TO_CART_CLICKED":
      const newItem = state.products.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: [...state.cart, newItem],
        toggle: true,
        productCounter: state.productCounter + 1
      };

    case "REMOVE_ITEM_CLICKED":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        productCounter: state.productCounter - 1,
      };

    case "OPEN_OVERLAY-CLICKED":
      return {
        ...state,
        toggle: true,
      };

    case "CLOSE_OVERLAY_CLICKED":
      return {
        ...state,
        toggle: false,
      };

    case "INCREASE_AMOUNT_CLICKED":
      return {
        ...state,
        cart: [...state.cart].map((item) => {
          return item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : { ...item };
        }),
        productCounter: state.productCounter + 1
      };

    case "DECREASE_AMOUNT_CLICKED":
      return {
        ...state,
        cart: [...state.cart].map((item) => {
          return item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : { ...item };
        }),
        productCounter: state.productCounter - 1,
        // total : newTotalDec,
      };

    default:
      return state;
  }
}
