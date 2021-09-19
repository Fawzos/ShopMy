function Product({ product }) {
  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Price: ${product.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
