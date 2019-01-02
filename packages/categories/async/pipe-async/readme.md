# @foldr/pipe-async

**The `pipeAsync` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pipe-async) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pipe-async/src/index.js) for details.

Pipes promise returning functions.

This function is similar to [pipe](#pipe), except that it works
for promise returning functions.

You can combine synchronous and asynchronous functions, but `pipeAsync`
will always return a Promise object.

```js
import pipeAsync from '@foldr/pipe-async';

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

const getAndPrintUserName = pipeAsync(
  getUserRecordWithId,
  formatUserName,
);

getAndPrintUserName();
// => 'Will Smith'
```
