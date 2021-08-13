import SearchResult from 'components/SearchResult/SearchResult';
import SearchBoxes from 'containers/Home/SearchBoxes/SearchBoxes';
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
export default function Search() {
  let match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match?.path}/:keyword/:topics`}>
          <SearchResult />
        </Route>
        <Route path={`${match?.path}/:keyword`}>
          <SearchResult />
        </Route>
        <Route path={match?.path}>
          <SearchBoxes />
        </Route>
      </Switch>
    </div>
  );
}
