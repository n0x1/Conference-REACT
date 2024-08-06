import React from "react";
import { Link } from 'react-router-dom'

export default function NotFound() {
    return(
        <div className="flex text-2xl flex-col h-svh items-center justify-center place-content-center">
            <p>Sorry! The page you were looking for does not exist.</p>
            <Link to={'/'}>Return Home</Link>
        </div>
    )
}