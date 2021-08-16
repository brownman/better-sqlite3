how-to get the archived form of the package which is also installable using npm  ?
-------
1. create a private npm registery and upload the package's source code 
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


    cd test-final
    cat README.md #and follow the steps described on file
```

2. fetch a packed version of the source-code
- run `fetch.sh`

3. install the packed version and run it to check if dbstat is enabled
- run `time npm i`
- run `npm start`
