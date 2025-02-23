import React from 'react'

const HandsonThreeChild = (props) => {
    return (
        <>
            <h1 className="feedback">EMPLOYEE FEEDBACK DATA</h1>
            <div className='box'>
                {props.value.map((item, index) => {
                    return (
                        <div key={index} className='return_box'>
                            <h2>{item.name} | {item.department} | {item.rating}</h2>
                        </div>
                    )
                })}
            </div>
            <div className='feedback'>
                <button className='button' onClick={props.togglefunction}>Go back</button>
            </div>
        </>
    )
}

export default HandsonThreeChild
