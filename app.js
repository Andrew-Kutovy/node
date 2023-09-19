const fs = require('node:fs')
const path = require('node:path')

const directoryPath = path.join(__dirname, 'container')

fs.mkdir(directoryPath, (err) => {
    if (err) throw new Error(err.message)});

for (let i = 1; i <= 5; i++) {
    const folderPath = path.join(__dirname, 'container', 'folder' + i);
    const filePath = path.join(__dirname, 'container', `file${i}.txt`);

    fs.mkdir(folderPath, (err) => {
        if (err) throw new Error(err.message)});
    fs.writeFile(filePath, `This is file ${i}.`, (err) => {
        if (err) throw new Error(err.message)});
}
fs.readdir(directoryPath, (err, items) => {
    if (err) throw new Error(err.message)
    for (const item of items) {
        const itemPath = path.join(directoryPath, item);

        fs.stat(itemPath, (err, stats) => {
            if (err) throw new Error(err.message)
            const itemType = stats.isFile() ? 'файл' : (stats.isDirectory() ? 'директория' : 'не файл и не директория');
                console.log(`${item} является ${itemType}.`);
        });
    }
})