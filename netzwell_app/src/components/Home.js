import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { data } from '../data'

function HelloWorld() {





    return (
        <div>
            <h1>hello </h1>
            <button>Logout</button>


        </div >
    )
}

export default withRouter(HelloWorld)