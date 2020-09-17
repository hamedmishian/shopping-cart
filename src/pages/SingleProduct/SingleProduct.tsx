import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { initDetailData } from "../../store/actions";
interface StateType {
  products: any;
}

export default function SingleProduct() {
  // const selectedProduct = useSelector((state:any)=> state.selectedProductDetail);
  const { selectedProductDetail } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const {loading} = useSelector((state:any) => state)
  const { id } = useParams();
  // const products = useSelector((state: StateType) => state.products);
  // const selectedProduct = products.find((product: any) => product.id === id);
  // const { image, title, description, price } = selectedProduct;

  useEffect(() => {
    dispatch(initDetailData(id));
  }, [dispatch, id]);
  
  if(loading){
    return <img src={"./loading-arrow.gif".substring(1)} alt="loading" />
  }

  return (
    <>
      {selectedProductDetail.map((item) => (
        <>
          <p
            style={{ fontSize: "50px", textAlign: "center", margin: "40px 0" }}
          >
            {item.title}
          </p>
          <article className="product-container">
            <img src={item.image.substring(1)} alt="pic" />
            <span>
              <h2>Details :</h2>
              <h3>{item.description}</h3>
              <h2>{`Price : ${item.price}`}</h2>
              <Link to="/">
                <button className="banner-btn" style={{ margin: "40px 40px" }}>
                  Back to Products
                </button>
              </Link>
            </span>
          </article>
        </>
      ))}
    </>
  );
}
