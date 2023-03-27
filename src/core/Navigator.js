import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = ({authenticat, logoutUser}) => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/personajes">Personajes</Link>
                </li>
                    {authenticat ?Link(
                        <li>
                            <button onClick={logoutUser}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
            </ul>
        </nav>
    </div>
  )
}

export default Navigator