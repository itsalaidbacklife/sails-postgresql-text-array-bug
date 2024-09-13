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
