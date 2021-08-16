const Database = require("better-sqlite3");
const db = new Database("analytics1.sqlite");

var runSafe = function (table, alter) {
  try {
    output = db.prepare(alter).run();
    // console.log(output);
    console.log("dbstat is ENABLED");
  } catch (e) {
    console.error(e);
    console.log("dbstat is DISABLED");
  }
};

runSafe("run dbstat query", "SELECT *  FROM dbstat");
