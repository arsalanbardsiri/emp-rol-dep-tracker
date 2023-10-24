const { mainMenu } = require('./utils/inquirerPrompts');

async function init() {
    await mainMenu();
}

init();
