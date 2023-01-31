const fs = require('fs');
const path = require('path');

const getUsers = () => {
    const filePath = path.join(__dirname,'./src/data/users.json')
    return fs.readFileSync(path, filePath);
}

module.exports = getUsers;