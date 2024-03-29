import React from 'react'
import '../Style/style.css'
const Featured = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                        <span className="fa fa-check text-primary m-0 mr-3" style={{fontSize: '35px'}}></span>
                        <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                        <span className="fa fa-shipping-fast text-primary m-0 mr-2" style={{fontSize: '35px'}}></span>
                        <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                        <span className="fas fa-exchange-alt text-primary m-0 mr-3" style={{fontSize: '35px'}}></span>
                        <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                        <span className="fa fa-phone-volume text-primary m-0 mr-3" style={{fontSize: '35px'}}></span>
                        <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
