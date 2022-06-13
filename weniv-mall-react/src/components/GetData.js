// import React , { useEffect }from 'react'
import axios from 'axios'
async function GetData() {
    try {
        const response = await axios.get('http://35.76.53.28:8080/mall');
        console.log((response.data));
        return (response.data)
    } catch (err) {
        console.log(err);
    }
}

export default GetData