import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { data } from '../data'

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
    const nest = (items, id = null, link = 'parent') =>
        items
            .filter(item => item[link] === id)
            .map(item => ({ ...item, children: nest(items, item.id) }));


    return (
        <div>
            <h1>hello </h1>
            <button>Logout</button>
            <ul>
                {


                }
            </ul>


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