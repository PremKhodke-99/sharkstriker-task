import React from 'react'

const Accordian = () => {
    return (
        <div className="accordian">
            <div className="items">
                <div className='flex'>
                    <div className="elem1">
                        <div className="circle">
                            99.1 RISK
                        </div>
                        <p>10.0.1.38</p>
                        <img src="edit.png" alt="cpy" />
                        <button>Panoramic</button>
                    </div>
                    <div className="elem2">
                        <img src="down.png" />
                    </div>
                </div>
                <div className="flex2">
                    <p>0<br />Traffic</p>
                    <p>0<br />reconn</p>
                    <p>0<br />delivery</p>
                    <p>0<br />exploit</p>
                    <p>0<br />install</p>
                    <p>0<br />c&c</p>
                    <p>0<br />actions</p>
                </div>
                <p>No events in selected time period</p><br />
                <hr />
            </div>
        </div>
    )
}

export default Accordian