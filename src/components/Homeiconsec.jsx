import React from 'react'

function Homeiconsec() {
  return (
    <div>
      <section className="counters-main bg-grey section-padding">
        <div className="max_width">
            <div className="clear">
                <div className="width25">
                    <div className="counter text-center wow fadeInUp" data-wow-delay="0.5s">
                        <a href="/digital/">
                            <img
                                className="lazyload"
                                src="/assets/images/digital.png"
                                alt="DIGITAL"
                                width="90"
                                height="90"
                            />
                        </a>
                        <h4><a href="/digital/">Digital</a></h4>
                    </div>
                </div>
                <div className="width25">
                    <div className="counter text-center wow fadeInUp" data-wow-delay="1.5s">
                        <a href="/media/">
                            <img
                                className="lazyload"
                                src="/assets/images/media.png"
                                alt="MEDIA"
                                width="90"
                                height="90"
                            />
                        </a>
                        <h4><a href="/media/">Media</a></h4>
                    </div>
                </div>
                <div className="width25">
                    <div className="counter text-center wow fadeInUp" data-wow-delay="2s">
                        <a href="/technology/">
                            <img
                                className="lazyload"
                                src="/assets/images/tech.png"
                                alt="TECHNOLOGY"
                                width="90"
                                height="90"
                            />
                        </a>
                        <h4><a href="/technology/">Technology</a></h4>
                    </div>
                </div>
                <div className="width25">
                    <div className="counter text-center wow fadeInUp" data-wow-delay="2.5s">
                        <img
                            className="lazyload"
                            src="/assets/images/Data.png"
                            alt="DATA"
                            width="90"
                            height="90"
                        />
                        <h4>Data</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Homeiconsec
