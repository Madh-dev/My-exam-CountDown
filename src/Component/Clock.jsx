import React from 'react'

const Clock = ({days,minutes,hours,seconds}) => {
  return (
            <>
            <section className='timer-container'>
                <section className='timer'>
                    <div className='clock'>
                        <section>
                            <p>{days}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>

                        <section>
                            <p>{hours}</p>
                            <small>Hours</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{minutes}</p>
                            <small>Minutes</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{seconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
            </>
  )
};
Clock.defaultProps ={
    days : 10,
    hours : 10,
    minutes : 10,
    seconds : 10
};

export default Clock