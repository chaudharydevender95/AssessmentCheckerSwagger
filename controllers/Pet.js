'use strict';

var utils = require('../utils/writer.js');
var Pet = require('../service/PetService');

module.exports.teacherLeaderBoardGET = function teacherLeaderBoardGET (req, res, next) {
  Pet.teacherLeaderBoardGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
