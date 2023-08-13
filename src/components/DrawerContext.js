import React, { createContext, useState, useContext, useEffect } from 'react';

const DrawerContext = createContext();

export const useDrawer = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }) => {
    // Set initial state based on window width
    const [open, setOpen] = useState(window.innerWidth > 768);
    const [activeMenu, setActiveMenu] = useState("Dashboard"); // Default to "Dashboard"

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
