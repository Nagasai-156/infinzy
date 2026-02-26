const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchAndSave(url) {
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            const json = JSON.parse(data);
            json.files.forEach(file => {
                const fullPath = path.join('d:/Ravi sir/3', file.path);
                fs.mkdirSync(path.dirname(fullPath), { recursive: true });
                fs.writeFileSync(fullPath, file.content);
                console.log(`Saved ${fullPath}`);
            });
        });
    }).on('error', (err) => {
        console.error(`Error fetching ${url}:`, err);
    });
}

fetchAndSave('https://21st.dev/r/tommyjepsen/cases-with-infinite-scroll');
fetchAndSave('https://21st.dev/r/vaib215/stagger-testimonials');
