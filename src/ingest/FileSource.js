const fs = require('fs/promises');
const ManualSource = require("./ManualSource");

async function readAllFiles(dir) {
    const files = await fs.readdir(dir);
    return Promise.all(files
        .filter(file => file.endsWith('.json'))
        .map(async file => JSON.parse(await fs.readFile(`${dir}/${file}`, 'utf8')))
    );
}

class FileSource {

    constructor(network, dir = "./data") {
        this.network = network;
        this.dir = dir;
    }

    async fetchAll() {
        let ids = (await readAllFiles()).flatMap(f => {
            return Object.values(f);
        });

        return await new ManualSource(this.network, ids).fetchAll();
    }

}

module.exports = FileSource;