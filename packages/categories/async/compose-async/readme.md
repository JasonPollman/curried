# @foldr/compose-async

**The `composeAsync` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/compose-async) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/compose-async/src/index.js) for details.

Composes promise returning functions.

This function is similar to [compose](#compose), except that it works
for promise returning functions.

You can combine synchronous and asynchronous functions, but `composeAsync`
will always return a Promise object.

```js
import composeAsync from '@foldr/compose-async';

function getUserRecordWithId(id) {
  // Get the user from a db somehow...
  return Promise.resolve().then(() => ({
    id: 1234,
    firstName: 'Will',
    lastName: 'Smith',
  }))
}

function formatUserName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const getAndPrintUserName = composeAsync(
  formatUserName,
  getUserRecordWithId,
);

getAndPrintUserName();
// => 'Will Smith'
```
