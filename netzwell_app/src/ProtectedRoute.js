import React from 'react'
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ component: Component, ...rest }) {
    const user = Cookies.get('user');
    return (
        <div>
            <Route {...rest}
                render={(props) => {
                    if (user) {
                        return <Component />
                    } else {
                        return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />
                    }
                }
                }
            />
        </div>
    )
}

export default ProtectedRoute