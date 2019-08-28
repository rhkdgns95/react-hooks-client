import React from "react";
import { ThemeProvider } from "./typed-components";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import theme from "./theme";
import Home from "./Routes/Home";


const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppPresenter />
    </BrowserRouter>
  </ThemeProvider>
);

const AppPresenter = () => (
    <Switch>
      <Route to={"/"} exact={true} component={Home} />
      <Redirect to={"*"} from={"/"}/>
    </Switch>
);

export default App;