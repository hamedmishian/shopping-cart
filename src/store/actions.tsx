
import { type } from 'os';
import {getProducts , getProductDetail} from '../server/server';


function actionCreator(type, payload){
    return {
        type,
        payload
    }
}


export function getInitData(){
    return function (dispatch){
        dispatch(actionCreator("LOADING", null));
        getProducts().then(products => dispatch({type:"DATA_LOADED", payload: products}))
    }
}

export function initDetailData(id){
    return function (dispatch){
        dispatch(actionCreator("LOADING",null));
        getProductDetail(id).then(product => dispatch({type: "PRODUCT_DETAIL_LOADED",payload: product}));
    }
}