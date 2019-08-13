'use strict';


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * returns List
 **/
exports.teacherLeaderBoardGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{}", "{}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

