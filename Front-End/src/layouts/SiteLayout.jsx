import { Outlet } from "react-router-dom"
import Navigation from "../components/partials/Navigation"
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from "@/components/theme-provider"

export default function () {
    return (
        <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
            <header className="bg-[#1F3C88] py-2 px-4 shadow-sm shadow-black text-gray-200 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
                <div>
                    <img src="/assets/logo.png" alt="FindMyStay-logo" className="h-16 object-cover w-24" />
                </div>
                <Navigation />
                <div>
                    <ModeToggle />
                </div>
            </header>
            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>
            <footer className="bg-slate-800 py-2 px-4">
                footer
            </footer></div>
            </ThemeProvider>
        </>
    )
}