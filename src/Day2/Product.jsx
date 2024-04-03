import "../Day2/product.css"


function Product(props) {

 


    return (
        <>

        <div className="product">
        <h1>Product Name:- {props.Name}</h1>
        <h2>Product Price:- {props.Price}</h2>
        <h3>Product Rating:- {props.Rating}</h3>

        <h4>Product Id:- {props.myId}</h4>
        </div>
      

        
        </>
      );
}

export default Product;