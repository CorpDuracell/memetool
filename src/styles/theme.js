import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: [
            'Roboto', 'sans-serif'
        ].join(','),

        h4: {
            fontSize: '1.25rem',
            fontWeight: '600',
            lineHeight: '1.4',
        },
        h5: {
            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: '1.5',
        },
        h6: {
            fontSize: '0.9rem',
            fontWeight: '550',
            lineHeight: '1.57',
            color: '#666666',
        },
        body2: {
            color: '#666666',
        }
    },
    components: {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: '#666666', // default color                    
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 270,
                    backgroundColor: '#1E1F1F',
                    borderRight: '1px solid #282928',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                color: 'white', // Ihre gewünschte Farbe
              },
            },
          },
    },
});

export default theme;
