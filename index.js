const Mustache = require('mustache');
const fs = require('fs');
const mustacheMainDir = './main.mustache';

let DATA = {
  name: 'Wanderson José',
  date: new Date().toLocaleDateString('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'America/Sao_Paulo',
  }),
};

function generateReadMe() {
  fs.readFile(mustacheMainDir, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();