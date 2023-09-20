const fs = require('node:fs');
const path = require('node:path');

const directoryPath = path.join(__dirname, 'container');
async function createDirectory(directoryPath) {
    try {
        await fs.promises.access(directoryPath, fs.constants.F_OK);
        console.log('Directory already exists');
    } catch (err) {
        await fs.promises.mkdir(directoryPath);
        console.log('Directory created successfully');
    }
}
async function createFoldersAndFiles(directoryPath) {
    for (let i = 1; i <= 5; i++) {
        const folderPath = path.join(directoryPath, 'folder' + i);
        const filePath = path.join(directoryPath, `file${i}.txt`);

        try {
            const folderExists = await fs.promises.access(folderPath, fs.constants.F_OK)
                .then(() => true)
                .catch(() => false);

            if (!folderExists) {
                await fs.promises.mkdir(folderPath);
                console.log(`Folder ${i} created successfully.`);
            } else {
                console.log(`Folder ${i} already exists.`);
            }

            const fileExists = await fs.promises.access(filePath, fs.constants.F_OK)
                .then(() => true)
                .catch(() => false);

            if (!fileExists) {
                await fs.promises.writeFile(filePath, `This is file ${i}.`);
                console.log(`File ${i} created successfully.`);
            } else {
                console.log(`File ${i} already exists.`);
            }
        } catch (err) {
            console.log(`Error creating file ${i} or folder ${i}:`, err);
        }
    }
}

async function readDirectory(directoryPath) {
    try {
        const items = await fs.promises.readdir(directoryPath);
        for (const item of items) {
            const itemPath = path.join(directoryPath, item);
            const stats = await fs.promises.stat(itemPath);
            const itemType = stats.isFile() ? 'FILE' : (stats.isDirectory() ? 'FOLDER' : '');
            console.log(`${item} : ${itemType}.`);
        }
    } catch (err) {
        console.log(err);
    }
}

async function main() {
    try {
        await createDirectory(directoryPath);
        await createFoldersAndFiles(directoryPath);
        await readDirectory(directoryPath);
    } catch (err) {
        console.log(err);
    }
}

main();