import React, { useEffect, useRef, useState } from "react";
import Button from './Button';

function Toggle(props) {
    const [state, setState] = useState({
        on: false,
    })

    function toggle(){
        setState({
           on: !state.on,
        })
    }

    return (
        <div>
            <Button variant={`${state.on ? "secondary" : "primary"}`} children={`${state.on ? "Hide Grades" : "Show Grade"}`} onClick={toggle}/>
            {state.on && props.children}
        </div>
    )
}

export default Toggle;