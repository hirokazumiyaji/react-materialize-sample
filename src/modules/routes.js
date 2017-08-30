const routes = (
  <Route>
    <Route path="/" component={App}>
    </Route>
    <Route path="/sign_in" getComponent={Signin}></Route>
  </Route>
);

export default routes;
