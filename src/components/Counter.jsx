import React from 'react'

function Counter() {
  return (
    <div>
        <section className="counters-main bg-dark-grey section-padding">
            <div className="max_width">
                <div className="clear">
                    <div className="width25">
                        <div className="counter text-center">
                            <img src="/assets/images/ET-500-Companies.png" alt="Companies" title="Companies" width="50" height="50" />
                            <h1>50+</h1>
                            <p><b>COMPANIES</b></p>
                        </div>
                    </div>
                    <div className="width25">
                        <div className="counter text-center">
                            <img src="/assets/images/150-Employees.png" alt="150 + Employees" title="150 + Employees" width="50" height="50" />
                            <h1>150+</h1>
                            <p><b>EMPLOYEES</b></p>
                        </div>
                    </div>
                    <div className="width25">
                        <div className="counter text-center">
                            <img src="/assets/images/Awards.png" alt="Fulcro Awards" title="Fulcro Awards" width="50" height="50" />
                            <h1>200+</h1>
                            <p><b>AWARDS</b></p>
                        </div>
                    </div>
                    <div className="width25">
                        <div className="counter text-center">
                            <img src="/assets/images/Retain.png" alt="Client Retention Rate" title="Client Retention Rate" width="50" height="50" />
                            <h1>89%</h1>
                            <p><b>CLIENT RETENTION RATE</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Counter
