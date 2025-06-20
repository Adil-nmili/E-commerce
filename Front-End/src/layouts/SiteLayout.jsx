import { Outlet } from "react-router-dom"
import Navigation from "../components/partials/Navigation"
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from "@/components/theme-provider"

export default function () {
    return (
        <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
            <header className="bg-slate-800 py-2 px-4 text-gray-200 flex justify-between">
                <div>
                    <h1>LOGO</h1>
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