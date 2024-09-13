# sails-posgresql-text-array-bug

This is a bug reproduction of an issue in the sails-postgresql orm adapter where js arrays are not correctly serialized, making them incompatible with `columnType: 'text[]'` attributes. 



### Version info

This app was originally generated on Fri Sep 13 2024 16:04:21 GMT-0400 (Eastern Daylight Time) using Sails v1.5.11.

It uses sails-postgresql@5.0.1

## Reproducing the Issue
To see the bug in action, you need to create a postgresql database, boot up this application and hit its /dummy route. You will see the sails error page and the server will log the error more specifically.

### Detailed steps

First you need to ensure you have postgresql, node, and git installed. Then clone this repo with

```
git clone https://github.com/itsalaidbacklife/sails-postgresql-text-array-bug
```

cd into it and install dependencies with

```
npm install
```

Then create a postgres database named `sails-postgresql-text-array-bug` and boot the application with `sails lift`.

Lastly, open your browser to localhost:1337/dummy to see the error.

### Explanation
The essential issue is that sails is failing to translate js arrays into the text[] columnType in postgresql. The exact error is
```
AdapterError: Unexpected error from database adapter: malformed array literal: "['foo']"
```

This is triggered by a simple endpoint which attempts to create a record with Dummy.create({list: ['foo']});

If you look at `api/models/Dummy.js` you'll see that there is a `list` attribute of type `json` and `columnType: 'text[]'`. In order for values to be correctly serialized and persisted in a postgresql `text[]` column, they should be wrapped in `{}` characters instead of `[]` when sent to the database. The correct serialization should look like `'({foo})'`, or `'({foo, bar})'` for multiple elements.
