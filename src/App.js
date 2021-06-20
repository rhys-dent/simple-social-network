import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsConfig from "./aws-exports";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import routes from "./hard-data/routes";

Amplify.configure(awsConfig);

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
