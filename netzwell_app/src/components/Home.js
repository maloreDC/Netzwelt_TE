import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { data } from '../data'
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import Menu from './Menu';

function HelloWorld() {

    {/** 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 */}

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

    const check = nest(data)
    console.log(check)

    return (
        <div>
            <h1>hello </h1>
            <button onClick={logout}>Logout</button>



            <Menu items={check} />




            {/** 
            {

                <ul>
                    {
                        data.map(data => <li key={data.id}> {data.name}</li>)
                    }
                </ul>
            }
        */}
            {/** 
      <ul>
        {
          users.map(user => <li key={user.id}>
            {user.name}
          </li>
          )}
      </ul>
          */}


        </div >
    )
}

export default withRouter(HelloWorld)