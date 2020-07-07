import React, { useEffect, useState, useDebugValue } from 'react';




const Navbar = (props) => {

    const lightsOn = { background: 'rgba(235, 235, 235, 0.7)', color: 'black' };
    const lightsOff = { background: 'rgba(11, 11, 11, 0.7)', color: 'white' };

    return (
        <div className="navBar d-flex justify-content-between mr-5" style={props.light ? lightsOff : lightsOn}>
            <div>

                <button className={"lightbulb btn btn-" + (props.light  ? 'dark' : 'default')} onClick={() => props.turnOn()}>
                    <h6 className="d-inline-block mr-2">
                        Turn lights off
                     </h6>
                    <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                </button>
            </div>

            <i className="fa fa-clock-o clock" aria-hidden="true"></i>
            <button className={'btn btn-' + (props.light  ? 'dark' : 'default')} >
                <h6>Themes</h6>
            </button>
        </div>

    )
}

export default Navbar


