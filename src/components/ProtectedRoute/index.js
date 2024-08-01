import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!isLoggedIn) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />
}

export default ProtectedRoute