import React from 'react'
import './Offer.css'
const Offer = ()=>{
    return(
        <>
            <div className="container" style={{marginBottom:"490px"}}>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="listing listing-default">
                            <div className="shape">
                                <div className="shape-text">New</div>
                            </div>
                            <div className="listing-content">
                                <h3 className="lead">New Bird Offer</h3>
                                <p>Get 50Rs off </p>
                                <h3><em>NEW50</em></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="listing listing-radius listing-success">
                            <div className="shape">
                                <div className="shape-text">Save</div>
                            </div>
                            <div className="listing-content">
                                <h3 className="lead">Get 100Rs off if cart value is greater than 500Rs.</h3>
                                <p>now - 100 off.</p>
                                <h3><em>SAVE100</em></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="listing listing-danger">
                            <div className="shape">
                                <div className="shape-text">hot</div>
                            </div>
                            <div className="listing-content">
                                <h3 className="lead">Hot Offer</h3>
                                <p>Get 100Rs of if selected category is Iphone 13 mini</p>
                                <h3><em>MINI100</em></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offer