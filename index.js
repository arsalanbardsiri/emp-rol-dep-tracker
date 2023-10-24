// Load environment variables from .env file
require('dotenv').config();

const { mainMenu } = require('./utils/inquirerPrompts');

async function init() {
    await mainMenu();
}

init();
