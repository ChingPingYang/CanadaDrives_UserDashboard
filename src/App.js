import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routeMap } from "./routes/routeMap";

//components
import Wrapper from "./components/Wrapper";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Wrapper>
        <React.Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            {routeMap.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Wrapper>
    </Router>
  );
}

export default App;
