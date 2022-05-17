import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import withAppTheme from "src/hoc/withAppTheme";
import { appThemeState } from "src/redux/reducers/appThemeReducer";

function ThemeProviders({
  children,
  appTheme,
}: {
  children: any;
  appTheme: appThemeState;
}) {
  return (
    <StyledComponentsThemeProvider theme={appTheme.styledTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

export default withAppTheme(ThemeProviders);
