import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Singleproduct.css'

const Singleproduct = (props) => {
    const { setCartCount } = props
    // console.log(props)
    return (
        <div className='col-md-4'
            data-aos="zoom-in"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
            <div className="card p-3 border m-3">
                <img className='w-50 m-auto' src={props.product.image} alt="" />
                <h1>{props.product.title.slice(0, 10)}</h1>
                <div className='d-flex justify-content-around'>
                    <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default Singleproduct;