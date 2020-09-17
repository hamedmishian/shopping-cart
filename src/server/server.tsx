import DATA from '../data';


const productData = [...DATA.items];

export function getProducts(){
    return fakeApiCall(productData);
}

export function getProductDetail(id){
    return fakeApiCall(productData).then((data:any) => data.find(item => item.sys.id === id));
}

function fakeApiCall(values){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(values)
        },1000)
    })
}