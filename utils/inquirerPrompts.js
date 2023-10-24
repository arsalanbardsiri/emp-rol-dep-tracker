const inquirer = require('inquirer');
const queries = require('../models/queries');

const mainMenu = async () => {
    const { choice } = await inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Departments', /* Other choices here */, 'Exit']
    });

    switch (choice) {
        case 'View All Departments':
            queries.viewAllDepartments(function(data) {
                console.table(data);
                mainMenu();
            });
            break;
        // Other cases for other choices would go here
        case 'Exit':
            process.exit(0);
    }
};

module.exports = { mainMenu };
