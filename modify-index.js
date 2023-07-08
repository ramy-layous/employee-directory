import fs from 'fs';

const filePath = './dist/index.html';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const updatedData = data.replace(/\/assets/g, 'assets');

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Index file updated successfully!');
    });
});
