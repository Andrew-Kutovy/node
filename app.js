const fs = require("node:fs");
const path = require('node:path')

const baseDir = path.join(__dirname, 'files')

fs.readFileSync(baseDir, 'file1')