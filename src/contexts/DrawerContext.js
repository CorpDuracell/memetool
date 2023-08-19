import React, { createContext, useState, useContext, useEffect } from 'react';

const DrawerContext = createContext();

export const useDrawer = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }) => {
    // Initialize state with undefined so it doesn't try to access window on the server
    const [open, setOpen] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState("Dashboard"); // Default to "Dashboard"

    useEffect(() => {
        // Now that we're on the client, we can safely access window
        setOpen(window.innerWidth > 768);
    }, []); // Empty dependency array means this useEffect runs once when component mounts

    const toggleDrawer = () => {
        setOpen(prevOpen => !prevOpen);
    };

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            if (window.innerWidth <= 768 && open) {
                setOpen(false);
            } else if (window.innerWidth > 768 && !open) {
                setOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [open]);

    return (
        <DrawerContext.Provider value={{ open, toggleDrawer, activeMenu, setActiveMenu }}>
            {children}
        </DrawerContext.Provider>
    );
};
