import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import Home from "../pages/site/Home";
import Properties from "../pages/site/Properties";
import Propertie from "../pages/site/Propertie";
import About from "../pages/site/About";
import Contact from "../pages/site/Contact";
import Faq from "../pages/site/Faq";
import Register from "../pages/site/Register";
import Login from "../pages/site/Login";
import ForgotPassword from "../pages/site/ForgotPassword";

// Links
// generale
export const HOME = '/'
export const PROPERTIES = '/properties'
export const PROPERTIE = (id) => `/properties/${id}`
export const ABOUT = '/about'
export const CONTACT = '/contact'
export const FAQ = '/faq'
export const REGISTER = '/register'
export const LOGIN = '/login'
export const FORGET_PASSWORD = '/forgot-password' 
//exebitor
export const USER_PROFILE = '/profile/me'
export const DASHBOARD_ME = '/profile/me/dashboard'
export const MY_PROPERTIES = '/profile/me/dashboard/properties'
export const NEW_PROPERTIE = '/profile/me/dashboard/properties/new'
export const EDIT_PROPERTIE = (id) => `/profile/me/dashboard/properties/${id}/edit`
export const MANAGE_BOOKING = '/profile/me/dashboard/booking'
//user or client
// export const MY_BOOKING = (id) => `client/${id+''+(Math.random()*1000000)}/my-rentals`
export const CONFIRME_BOOKING = '/client/booking/confirm'
export const FAVORITES = '/client/booking/favorites'
export const ADMIN_DASHBOARD = '/admin/dashboard'
export const USER_MANAGEMENT = '/admin/users'
// export const VIEW_USER = (id) => `/admin/user/${id+''+(Math.random()*1000000)}`
export const PROPERTY_MANAGEMENT = '/admin/properties'
export const BOOKING_OVERVIEW = '/admin/bookings'
export const SITE_SETTINGS = '/admin/settings'
export const RAPORTS = '/admin/raport'

export const Router = createBrowserRouter([
    {
        element: <SiteLayout />,
        children: [
            {
                path: HOME,
                element: <Home />
            },
            {
                path: PROPERTIES,
                element: <Properties />
            },
            {
                path: "/properties/:id",
                element: <Propertie />
            },
            {
                path: ABOUT,
                element: <About />
            },
            {
                path: CONTACT,
                element: <Contact />
            },
            {
                path: FAQ,
                element: <Faq />
            },
            {
                path: REGISTER,
                element: <Register />
            },
            {
                path: LOGIN,
                element: <Login />
            },
            {
                path: FORGET_PASSWORD,
                element: <ForgotPassword />
            },
        ]
    },
])