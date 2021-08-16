how-to get the archived form of the package which is also installable using npm  ?
-------
0. cd to the better-sqlite3 folder and update package.json with a version which is not listed [here](https://www.npmjs.com/package/better-sqlite3?activeTab=versions)
1. create a private npm registry and upload the package's source code 
```sh

    docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio

    npm adduser --registry http://localhost:4873/
        Username: user
        Password: user
        Email: user@user.of

    npm login
        Username: user
        Password: user
        Email: user@user.of

    npm publish --registry http://localhost:4873/
```

2. fetch a packed version of the package's source-code
- run `fetch.sh`

3. install the packed version and run it to check if dbstat is enabled
- run `time npm i`
- run `npm start`

4. the product of this lesson is a .tgz archive file which we can use elsewhere. 
