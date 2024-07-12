import React from 'react'
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

// here we are returning a bootstrap dropdown and just a button
const Filters = ({ setMainData }) => {
    //function to call the getDataFromDB function and passing the 'year' to it entered by the user
    const handleSelect = (eventKey, event) => {
        getDataFromDB(event.target.innerText)
    };
    
    // func to fetch the filtered data by year and update the state
    const getDataFromDB = async(year) => {
        try{
            const response = await axios.get(`https://assignment-api-aru8.onrender.com/data/year/${year}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    
    return (
        <div className='tabsClass' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="danger" id="dropdown-basic" className='btn-lg'>
                    Filter By Year
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1" >2014</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >2015</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >2016</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >2017</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >2018</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >2019</Dropdown.Item>
                    <Dropdown.Item eventKey="7" >2020</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
       </div>
    )
}

export default Filters