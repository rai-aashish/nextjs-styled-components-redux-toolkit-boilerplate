//styled default theme
const styledDefaultTheme = {
  colors: {
    primary: {
      light: "#d0c5e3",
      main: "#563493",
      dark: "#3c2479",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f3e5f5",
      main: "#ce93d8",
      dark: "#ab47bc",
      contrastText: "",
    },
    dark: {
      light: "#333333",
      main: "#222222",
      dark: "#000000",
      contrastText: "",
    },
    white: {
      light: "#fafafa",
      main: "#fff",
      dark: "#ccc",
      contrastText: "",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "",
    },
    warning: {
      light: "#ffb74d",
      main: "#ffa726",
      dark: "#f57c00",
      contrastText: "",
    },
    info: {
      light: "#4fc3f7",
      main: "#29b6f6",
      dark: "#0288d1",
      contrastText: "",
    },
    success: {
      light: "#81c784",
      main: "#66bb6a",
      dark: "#388e3c",
      contrastText: "",
    },
  },
  fonts: {
    primary: "'Roboto', sans-serif",
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

//styled dark theme
const styledDarkTheme = {
  ...styledDefaultTheme,
  colors: {
    primary: {
      light: "#555555",
      main: "#222222",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f3e5f5",
      main: "#ce93d8",
      dark: "#ab47bc",
      contrastText: "",
    },
    dark: {
      light: "#333333",
      main: "#222222",
      dark: "#000000",
      contrastText: "",
    },
    white: {
      light: "#fafafa",
      main: "#fff",
      dark: "#ccc",
      contrastText: "",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "",
    },
    warning: {
      light: "#ffb74d",
      main: "#ffa726",
      dark: "#f57c00",
      contrastText: "",
    },
    info: {
      light: "#4fc3f7",
      main: "#29b6f6",
      dark: "#0288d1",
      contrastText: "",
    },
    success: {
      light: "#81c784",
      main: "#66bb6a",
      dark: "#388e3c",
      contrastText: "",
    },
  },
};
type StyledThemeType = typeof styledDefaultTheme;

export type { StyledThemeType };

export { styledDefaultTheme, styledDarkTheme };
