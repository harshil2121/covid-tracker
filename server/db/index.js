const Sequelize = require("sequelize")

const sequelize = new Sequelize("ecommerce","root","", {host:"localhost", dialect: "mysql"})

let db = {}

db.sequelize = sequelize
db.user = require("./user")(sequelize,Sequelize)

module.exports = {db}