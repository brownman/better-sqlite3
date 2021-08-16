# better-sqlite3 [![build status](https://github.com/brownman/better-sqlite3/actions/workflows/build.yml/badge.svg)](https://github.com/brownman/better-sqlite3/actions/workflows/build.yml)

## Use

Q: how to use better-sqlite3 version v7.4.3 with dbstat enabled in your project:
1. follow this [Demo](./STEPS/demo)'s instructions

## Create

Q: how to create a packed version with the latest better-sqlite3 version which has dbstat enabled ?

1. fork the latest better-sqlite3 package and update the source-code to include the SQLITE_ENABLE_DBSTAT_VTAB flag (as done in this repo)

2. [prepare a packed package](./STEPS/prepare_packed_package)
