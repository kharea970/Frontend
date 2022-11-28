import React from "react";
const Aboutus = ()=>{
    return(
        <>
                <div className="aboutus-section" style={{marginBottom:"250px",marginTop:"20px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="aboutus">
                                    <h2 className="aboutus-title">About Us</h2>
                                    <p className="aboutus-text">PCase is the best place to shop online in India. Pcase is a well-established brand in the personalized gifts segment. Choose from a wide range of mobile covers, t-shirts, photo mugs, key-chains, 3D-crystals, photo clocks, picture frames and hundreds of other gifts.
                                        Pcase has been delivering Mobile Cover‘s Orders since we opened in 2018. Our goal is to provide both a superior customer experience and tremendous value for our customers.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="aboutus-banner">
                                    <img src="../assets/a1.jpg" alt="" style={{ width:"280px",height:"300px"}}/>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6 col-xs-12">
                                <div className="feature">
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Our team</h4>
                                                <p>We’ve built an active and extensive online store that sparks much of our innovation – we’re always finding new ways to engage with customers and share the joy of Pcase.in. So, stop wandering and begin exploring. Experience an innovation to make your memories lasts longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Unique Design</h4>
                                                <p>We started from a design focused company that puts innovative and trendy design from around the world into the hands of Indian consumers, quite literally.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Our Products</h4>
                                                <p>We use advanced technologies to create products that are as durable as they are delightful. We stand behindour products with customer service and support previously unseen in India.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
        </>
    )
}
export default Aboutus;