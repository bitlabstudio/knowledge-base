# React Component Snapshots

One way to test components and making sure they're only updated when they're supposed to is through the use of snapshot tests.

Let's say we've got a component like this:

```jsx harmony
class TestComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    )
  }
}
```

We can write a test that renders the component and writes the output into a snapshot file.
Passing different props will alter the result and we can chain different variations to test different outcomes.

```jsx harmony
import React from 'react'
import renderer from 'react-test-renderer'

import TestComponent from './4-snapshots'

describe('TestCompont', () => {
  it('renders the correct title', () => {
    const component = renderer.create(<TestComponent title='Foobar' />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a different title', () => {
    const component = renderer.create(<TestComponent title='Different Title' />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
```

For this we need `react-test-renderer` installed separately first.
Then we can import its renderer and use it to create our rendered component

```jsx harmony
const component = renderer.create(<TestComponent title='Foobar' />)
```

Then we have to convert it to json:

```jsx harmony
let tree = component.toJSON()
```

And finally we can compare it with the existing snapshot:
```jsx harmony
expect(tree).toMatchSnapshot()
```

As with other tests `expect` initiates the assertion and then we want it `toMatchSnapshot()`
Calling `toMatchSnapshot` for the first time will always automatically create the initial snapshot.

If you want to update the snapshots because they became outdated, you have to pass the `-u` flag.

```bash
yarn test -- -u
```