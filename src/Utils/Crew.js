const fs = require('fs')

const randomCrew = (crew) => {
  return crew.split(' ').sort(() => 0.5 - Math.random());
}

const frontend = randomCrew(fs.readFileSync('src/resources/frontend-crew.md', 'utf-8'));
const backend = randomCrew(fs.readFileSync('src/resources/backend-crew.md', 'utf-8'));

module.exports = { 
    frontend,
    backend,
 };
