import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
 theme: 'dark',
 toggleTheme: () => null,
})

export function ThemeProvider({ children }) {
 // Read from localStorage or default to dark
 const [theme, setTheme] = useState(() => {
 if (typeof window !== 'undefined') {
 return localStorage.getItem('theme') || 'dark'
 }
 return 'dark'
 })

 useEffect(() => {
 const root = window.document.documentElement
 
 // Remove both classes to be safe
 root.classList.remove('light', 'dark')
 
 // Add the current theme class
 root.classList.add(theme)
 
 // Save to localStorage
 localStorage.setItem('theme', theme)
 }, [theme])

 const toggleTheme = () => {
 setTheme(prev => prev === 'dark' ? 'light' : 'dark')
 }

 return (
 <ThemeContext.Provider value={{ theme, toggleTheme }}>
 {children}
 </ThemeContext.Provider>
 )
}

export const useTheme = () => useContext(ThemeContext)
