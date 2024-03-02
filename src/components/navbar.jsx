import React, { useEffect } from 'react';


function Navbar() {
    return (
       
        <div className="flex">
            <div className="bg-gray-800 text-white w-72 h-screen fixed">
                <p className="font-bold text-xl pt-10 pl-10">ADMIN DASHBOARD</p>
                <ul className="mt-10">
                    <li className="pageLinks"><a href="/posts" className="block py-2 px-10">All Posts</a></li>
                    <li className="pageLinks"><a href="/pending_posts" className="block py-2 px-10">Pending Posts</a></li>
                    <li className="pageLinks"><a href="/approved_posts" className="block py-2 px-10">Approved Posts</a></li>
                    <li className="pageLinks"><a href="/rejected_posts" className="block py-2 px-10">Rejected Posts</a></li>
                </ul>
            </div>

            <div className="fixed bottom-10 left-10">
                <form action="/logout">
                    <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer">Logout</button>
                </form>
            </div>
        </div>

    );
}

export default Navbar;
