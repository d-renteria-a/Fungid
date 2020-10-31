import React from 'react';

let count = 0
const Counter = () => {
    count++    
}

const SidebarList = (array) => {
    // const onCheck = e => {

    // }

    return (
        array.map(elem => {
            return (
                <div className="custom-control custom-checkbox" key={"uniqueId" + count}>
                    <input type="checkbox" className="custom-control-input" id={"item" + count}></input>
                    <label className="custom-control-label" htmlFor={"item" + count}>{elem}</label>
                    {Counter()}
                </div>
            )
        })
    )
}

export default SidebarList;