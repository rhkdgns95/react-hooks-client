import * as StyleThings from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IProps {
    addColor: string;
    updateColor: string;
    addActiveColor: string;
    updateActiveColor: string;
}

const {
    default: styled,
    createGlobalStyle,
    ThemeProvider
} = StyleThings as ThemedStyledComponentsModule<IProps>;

export { createGlobalStyle, ThemeProvider };
export default styled;