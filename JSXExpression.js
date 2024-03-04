// how to access Variable

const productId = 139;
const element = <h1>Product ID : {productId}</h1>;


// How to access Object
const product = {
    productId : 123,
    price : 1200
}

const element1 = <p>Product ID: {product.productId}</p>

// JSX with its attributes

const imgUrl = 'image1.PNG'
const element2 = <img src={imgUrl} alt='image'/>