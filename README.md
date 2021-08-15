# better-sqlite3 [![build status](https://github.com/brownman/better-sqlite3/actions/workflows/build.yml/badge.svg)](https://github.com/brownman/better-sqlite3/actions/workflows/build.yml)

## publish to local npm registry:

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
