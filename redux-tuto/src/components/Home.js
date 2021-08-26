import React from 'react'

function Home(props) {
    // console.log("Home:", props);
    return (
        <div className="">
            <h1>Home Components</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item ">
                    <img alt="" src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=316&q=80" />
                </div>
                <div className="text-wrapper item ">
                    <span>
                        Iphone
                    </span><br></br>
                    <span>
                        price: $1000
                    </span>
                </div>
                <div className="btn-wrapper1 item ">
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "iPhone 11" })}>Add to cart</button>
                </div>
                <div className="btn-wrapper2 item ">
                    <button onClick={() => props.removeToCartHandler({ price: 1000, name: "iPhone 11" })}>Remove from cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
