const fs = require('fs');
const path = require('path');

const dir = 'd:/Ravi sir/3/src/components/ui';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    content = content.replace(/@\/lib\/utils/g, '../../lib/utils');
    content = content.replace(/@\/components\/ui\//g, './');

    fs.writeFileSync(fullPath, content);
});
console.log('Done replacing aliases.');
