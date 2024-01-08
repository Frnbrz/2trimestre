
import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import LayoutPublic from "../layouts/LayoutPublic"
import NotFound from "./routeError"

const Home = React.lazy(() => import("../pages/Home"))
const Contact = React.lazy(() => import("../pages/Contact"))
const Portfolio = React.lazy(() => import("../pages/Portfolio"))

const title = window.location.pathname === '/' ? 'Home' : window.location.pathname === '/contact' ? 'Contact' : window.location.pathname === '/portfolio' ? 'Portfolio' : '404'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic title={title} />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <React.Suspense fallback={<p>Loading...</p>}><Home /></React.Suspense> },
            { path: "/contact", element: <React.Suspense fallback={<p>Loading...</p>}><Contact /></React.Suspense> },
            { path: "/portfolio", element: <React.Suspense fallback={<p>Loading...</p>}><Portfolio /></React.Suspense> },
        ],
    }
])