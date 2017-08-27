# Javascript > ReactJS > React Router

In this file:

* [Setup](#setup)
* [Usage](#usage)
  * [Accessing route params](#accessing-route-params)
  * [Using the Link component](#using-the-link-component)
  * [Programmatically changing the route](#programmatically-changing-the-route)

## Setup

Install react-router via `yarn add react-router-dom`.

Wrap your entire app with the `<Router>` component. When you read the code
below, the main thing to keep in mind is this:

* When the URL starts with `path`, then this route will be mounted
* This means, you can have many routes become visible, if they all have the
  same `path` property
* If you want to avoid several routes becoming visible at the same time, wrap
  them in the `<Switch>` component. Now only the first route that matches will
  become visible
* Wrapping things like `<MainNavigation>` and `<Footer>` in a `<Route>` is a
  nice convenience trick to make sure that these components have access to
  `this.props.location` and `this.props.history`.

```js
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CreateView from './views/CreateView'
import DetailView from './views/DetailView'
import ListView from './views/ListView'
import LoginView from './views/LoginView'

import MainNavigation from './components/MainNavigation'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={MainNavigation} />
          <Switch>
            <Route exact path="/" component={ListView} />
            <Route exact path="/login/" component={LoginView} />
            <Route exact path="/messages/create/" component={CreateView} />
            <Route exact path="/messages/:id/" component={DetailView} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </Router>
    )
  }
}

export default App
```

## Usage

### Accessing route params

When a route has dynamic parameters (i.e. `/blog/:slug/`), you can access
the parameter inside the component via `this.props.match.params.slug`.

### Using the Link component

Unless something is a link to an external URL, never use the `<a>` tag, always
use the `<Link to="/some/path/">` component.

The `<Link>` component renders as an `<a>` tag, so it will work even when the
user has JS disabled. Otherwise it will catch `onClick` events and trigger
a `browserHistory.push` (and therefore not a page refresh/HTTP request).

```js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainNavigation extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/login/">Login</Link>
      </div>
    )
  }
}

export default MainNavigation
```

### Programmatically changing the route

Often, you want to change the route not via a `<Link>` component but as a
reaction to an event or in a callback function.

If you want to do a real page refresh/HTTP request, use
`window.location.replace('/')`. This is useful if you want to flush the entire
apollo cache and want a proper re-render of the entire app (i.e. after login,
logout, language change).

If you want to change the route via react-router, use
`this.props.history.push('/')`. This only works if the component is wrapped
with `<Route component={YourComponent}>`.

If your component is not wrapped by `<Route>`, it does not have access to
`this.props.history`. in this, case, wrap it with [withRouter](https://reacttraining.com/react-router/web/api/withRouter):

```js
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class MainNavigation extends Component {
  render() {
    return ( ... )
  }
}

MainNavigation = withRouter(MainNavigation)
export default MainNavigation
```
