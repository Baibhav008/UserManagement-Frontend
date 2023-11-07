import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar bg-info p-2">
        <Link to="/" className="navbar-brand">CRUD OPERATIONS</Link>
        <div className="nav">
            <Link to="/create-student" class="nav-link">Create Student</Link>
            <Link to="/student-list" class="nav-link">Student List</Link>

        </div>

    </nav>
  )
}
