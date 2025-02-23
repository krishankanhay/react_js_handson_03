import React, { useState } from 'react'
import HandsonThreeChild from './HandsonThreeChild';
import './Style.css'

const HandsonThree = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [rating, setRating] = useState("");
    const [click, setClick] = useState(true);
    const [data, setData] = useState([]);


    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === "name") {
            setName(value);
        }
        else if (name === "department") {
            setDepartment(value);
        }
        else if (name === "rating") {
            setRating(value);
        }
    }

    const togglefunction = () => {
        setClick(!click);
    };

    const handleClick = () => {
        const obj = {
            name: name,
            department: department,
            rating: rating
        };
        setData([...data, obj])

        setClick(false);
        setName("");
        setDepartment("");
        setRating("");

        // console.log(data);

    };

    return (
        <>
            {click
                ?
                <>
                    <h1 className="feedback">EMPLOYEE FEEDBACK FORM</h1>
                    <div className="three_input">
                        <label>
                            Name :
                            <input type='text' name='name' placeholder='Enter your name' onChange={handleChange} value={name} />
                        </label>
                        <br />
                        <label>
                            Department :
                            <input type='text' name='department' placeholder='Enter your department' onChange={handleChange} value={department} />
                        </label>
                        <br />
                        <label>
                            Rating :  
                            <input type='number' name='rating' placeholder='Enter your rating' onChange={handleChange} value={rating} />
                        </label>
                        <br />
                        <button className='submit_button' onClick={handleClick}>Submit</button>
                    </div>
                </>
                :
                <HandsonThreeChild value={data} togglefunction={togglefunction} />
            }
        </>
    )
}

export default HandsonThree
