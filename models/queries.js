const connection = require('../config/connection');

module.exports = {
    // Sample function to view all departments
    viewAllDepartments: function(callback) {
        const query = 'SELECT * FROM department';
        connection.query(query, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    }
};
