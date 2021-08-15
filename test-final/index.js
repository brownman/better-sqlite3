// const db = new better_sqlite3(); //.Database(":memory:");
// db.Database().execute("CREATE TABLE test (id INTEGER PRIMARY KEY, name TEXT)");
// db.Database().execute("INSERT INTO test VALUES (1, 'Hello')");
// db.Database().execute("INSERT INTO test VALUES (2, 'World')");
// db.Database().execute("INSERT INTO test VALUES (3, 'Goodbye')");

// db.execute("SELECT * FROM test");

const Database = require("better-sqlite3");
const db = new Database("analytics1.sqlite");

var runSafe = function (table, alter) {
  try {
    output = db.prepare(alter).run();
    console.log(output);
  } catch (e) {
    console.error(e);
    // Table does not need altering
  }
};

runSafe("run dbstat query", "SELECT *  FROM dbstat");
