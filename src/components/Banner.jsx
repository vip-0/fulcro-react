import React from 'react'


const Banner = () => {
  return (
    <div>
      <section ClassName="main-banner">
        <div>
            <span ClassName="mobile-hide">
                <img
                    ClassName="lazyload"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCAAmAGQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//EABQQAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQEAAT8AA//EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8AA//EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8AA//Z"
                    data-src="images/banner.jpg"
                    width="1920"
                    height="772"
                    alt=""
                    title=""
                />
            </span>
            <span ClassName="desktop-hide">
                <img
                    ClassName="lazyload"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCAAjADIDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACzAAAAAAAAAAAAAAAAAH//xAAUEAEAAAAAAAAAAAAAAAAAAABQ/9oACAEBAAE/AA//xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAECAQE/AA//xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAEDAQE/AA//2Q=="
                    data-src="images/banner-mobile.jpg"
                    width="1280"
                    height="900"
                    alt=""
                    title=""
                />
            </span>
        </div>
        <div ClassName="clear">
            <div ClassName="max_width">
                <div ClassName="banner-content">
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
