import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/reducers/appThemeReducer";

const mapStateToProps = (state: RootState) => {
  const { appTheme } = state;
  return { appTheme };
};

const withAppTheme = connect(mapStateToProps, {
  toggleTheme,
});

export default withAppTheme;
