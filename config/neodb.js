//Require the Neo4J module
var neo4j = require('node-neo4j');

//Create a db object. We will using this object to work on the DB.
NEO_db = new neo4j('http://neo4j:password@localhost:7474');

module.exports = NEO_db; 

console.log("fds ", module.exports);
