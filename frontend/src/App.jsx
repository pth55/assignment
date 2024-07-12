import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components from files
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';

function App() {
    // State to save data received from the server
    const [mainData, setMainData] = useState([]);    

    // Asynchronous function to fetch data from server and update the state
    const getDataFromDB = async () => {
        try {
            const response = await axios.get("https://assignment-api-aru8.onrender.com/data");
            setMainData(response.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    // Calling the above function on first render
    useEffect(() => {
        getDataFromDB();
    }, []);

    // Print the length of data received for test purposes whenever mainData changes
    useEffect(() => {
        console.log(mainData.length);
    }, [mainData]);

    return (
        <div>
            <Header/>
            <Tabsrow data={mainData} setMainData={setMainData} />
        </div>
    );
}

export default App;
