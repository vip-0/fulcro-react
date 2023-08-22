import React from 'react'


const Banner = () => {
  return (
    <div>
      <section className="main-banner">
        <div>
            <span className="mobile-hide">
                <img
                    src="/assets/images/banner.jpg"
                    width="1920"
                    height="772"
                    alt=""
                    title=""
                />
            </span>
            <span className="desktop-hide">
                <img
                    src="/assets/images/banner-mobile.jpg"
                    width="1280"
                    height="900"
                    alt=""
                    title=""
                />
            </span>
        </div>
        <div className="clear">
            <div className="max_width">
                <div className="banner-content">
                    <h1>
                        EXPONENTIAL <br />
                        NOT INCREMENTAL
                    </h1>
                    <p>Fulcro is empowering businesses to synergise their diverse initiatives under a digital transformation agenda.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Banner;
