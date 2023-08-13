import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
        MuiDrawer: {
          styleOverrides: {
            paper: {
              width: 270,
              backgroundColor: '#1E1F1F',
              borderRight: '1px solid #282928',
              transition: 'width 10s cubic-bezier(0.4, 0, 0.2, 1), transform 10s cubic-bezier(0.4, 0, 0.2, 1)'
            },
          },
        },
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              color: '#666666', 
            },
          },
        },
        MuiListItemText: {
          styleOverrides: {
            primary: {
              color: '#666666',
            },
          },
        },
        MuiAppBar: {
            styleOverrides: {
              root: {
              },
            },
          },
      },

    // Add global styles
    styles: {
      '.app': {
        // hier Anpassungen vornehmen oder in der App.css
      }
  }
    });

  export default theme; 