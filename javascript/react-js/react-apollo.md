# Javascript > ReactJS > React Router

In this file:

* [Setup](#setup)
* [Usage](#usage)
  * [Fetching data](#fetching-data)
  * [Fetching data with variables](#fetching-data-with-variables)
  * [Writing data with mutations](#writing-data-with-mutations)

## Setup

Install react-apollo via `yarn add react-apollo`.

Wrap your entire app with the `<ApolloProvider>` component.

```js
import React, { Component } from 'react'
import { ApolloProvider, ApolloClient, createBatchingNetworkInterface, } from 'react-apollo'

const networkInterface = createBatchingNetworkInterface({
  // this must point at your Django instance
  uri: 'http://localhost:8000/gql',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin',
  },
})

const client = new ApolloClient({
  networkInterface: networkInterface,
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        [...]
      </ApolloProvider>
    )
  }
}

export default App
```

## Usage

### Fetching data

If a component needs data, just wrap it in a `graphql` wrapper. The data will
be loaded as soon as the component mounts. You can access
`this.props.data.loading` to check if the data has been loaded. The data will
be available under the name of your query, i.e. `this.props.data.currentProfile`:

```js
import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

const query = gql`
{
  currentProfile {
    id, avatar
  }
}
`

class Avatar extends Component {
  renderLoading() {
    return (
      <div>Placeholder avatar...</div>
    )
  }

  render() {
    const { data } = this.props
    if (data.loading) {
      return this.renderLoading()
    }

    return (
      <div>
        { data.currentProfile.avatar }
      </div>
    )
  }
}

Avatar = graphql(query)(Avatar)
export default Avatar
```

### Fetching data with variables

Very often you want to fetch data based on URL parameters. In order to achieve
this, you must add variables to your graphql query:

```js
import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

// You must give the query a name. Just name it after the component.
// You then define the variables and their types via ($varName: Type!)
// `!` means it is a mandatory variable.
const query = gql`
query BlogPost($slug: String!) {
  blogPost(slug: $slug) {
    id, title, date, content
  }
}
`

class BlogPost extends Component {
  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  render() {
    const { data } = this.props
    if (data.loading) {
      return this.renderLoading()
    }

    return (
      <div>
        { data.currentProfile.avatar }
      </div>
    )
  }
}

const queryOptions = {
  // options must be an object or a function that takes props as an argument
  options: props => ({
    variables: {
      slug: props.match.params.slug
    }
  })
}

BlogPost = graphql(query, queryOptions)(BlogPost)
export default BlogPost
```

### Writing data with mutations

Note: This example just shows the syntax for a mutation. For a fully fledged
example on how to collect form data, read more in the forms chapter.

```js
import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import serialize from 'from-serialize'

const query = gql`
  {
    currentProfile {
      id, firstName, lastName
    }
  }
`

const mutation = gql`
mutation UpdateUserProfile($firstName: String!, $lastName: String!) {
  updateUserProfile(firstName: $firstName, lastName: $lastName) {
    // as a best practice, all mutations should return status 200, 400 or 401
    status
    // if Django finds form errors, they should be returned as a JSON dict
    formErrors
    // if the mutation changed some object, it should return that saved object
    // so that the data in the cache for that object updates automatically
    currentProfile {
      id, firstName, lastName
    }
  }
}
`

class UserProfileForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.mutate({variables: {firstName: 'Test', lastName: 'Test'}}).then(res =>
      if (res.data.updateUserProfile.status === 200) {
        // do something for success
      }
      if (res.data.updateUserProfile.formErrors) {
        // save formErrors into state
      }
    ).catch(err => {
      console.log("Network error")
      console.log(err)
    })
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  render() {
    const { data } = this.props
    if (data.loading) {
      return this.renderLoading()
    }

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

UserProfileForm = graphql(query)(UserProfileForm)
UserProfileForm = graphql(mutation)(UserProfileForm)
export default UserProfileForm
```
