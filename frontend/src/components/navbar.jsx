import React from 'react'
import { Link } from 'react-router';
import { PlusIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
    <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
            <h1 href="/" className="text-3xl font-bold">Notes App</h1>
            <div className='flex items-center gap-4'>
                <Link to={"/create"} className="btn btn-primary"><PlusIcon className="w-5 h-5 mr-2" />Create Note</Link>
            </div>

         </div>
    </div>
    </header>
  )
}

export default Navbar
