import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { data } from '../data'

function HelloWorld() {


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

        </div >
    )
}

export default withRouter(HelloWorld)