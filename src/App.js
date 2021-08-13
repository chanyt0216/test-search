import SearchBoxes from 'containers/Home/SearchBoxes/SearchBoxes';
import Layout from 'components/Layout/Layout';
import { Wrapper } from 'components/Layout/Wrapper';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from 'containers/Search/Search';

function App() {
  return (
    <Router>
      <Layout className="">
        <Wrapper>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <SearchBoxes />
            </Route>
          </Switch>
        </Wrapper>
      </Layout>
    </Router>
  );
}

export default App;
