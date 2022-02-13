import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { data } from '../data'
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import Menu from './Menu';

function HelloWorld() {

    const [places, setPlaces] = useState([])

    //for api call 
    {/** 
  useEffect(() => {
    axios.get('https://netzwelt-devtest.azurewebsites.net/Territories/All')
      .then(res => {
        console.log(res)
        setPlaces(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 */}
    //

    let history = useHistory();
    const logout = () => {
        Cookies.remove('user')
        history.push('/')
    };

    const nest = (items, id = null, link = 'parent') =>
        items.filter(item => item[link] === id)
            .map(
                item => (
                    { ...item, children: nest(items, item.id) }
                )
            );

    const check = nest(data) //change 'data' to 'places'

    return (
        <div>
            <h1>Home Page </h1>
            <button onClick={logout}>Logout</button>

            <Menu items={check} />

        </div >
    )
}

export default withRouter(HelloWorld)