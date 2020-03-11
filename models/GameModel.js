var orm = require("../config/orm.js");

var game = {
    all: function (table, cb) {
        orm.all(table, function (res) {
            cb(res);
        });
    },
    select: function (id, cb) {
        orm.select("Randomizer", id, function(res) {
            cb(res);
        })
    },
    create: function (cols, vals, cb) {
        orm.create("Randomizer", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("Randomizer", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("Randomizer", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = game;