import { createTheme } from '@mui/material/styles';

const lighttheme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#B2B6D8',
                mainGradient: "linear-gradient(to right bottom, #fdfcfb, #e2d1c3)"
            },
            secondary: {
                main: '#c6c9e2',
            },
            background: {
                default: '#f1f2f8',
                paper: '#d2d3db',
            },
            textColor: {
                default: '#2A2A2A',
                weaker: '#3C3C3C',
                subdued: '#5E5E5E'
            },
            detailsModal: {
                main: '#A6A7BB',
                section: '#d2d3db',
            },
            alertModal: {
                main: '#d2d3db',
                secondary: '#f1f2f8'
            },
            aboutTitle: {
                main: '#47474E'
            }
        },
        components: {
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: '#00B6FF'
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": { color: '#0066B6' }
                    }
                }
            },
        },
    })

export default lighttheme;