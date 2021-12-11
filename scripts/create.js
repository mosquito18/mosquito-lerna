const fs = require('fs');
const path = require('path');
const prompt = require('prompt');

const _TEMPLATE_ = path.resolve(__dirname, './template');
const _PACKAGES_ = path.resolve(__dirname, '../packages');

async function exec(str) {
    const { name } = await prompt.get(['name']);

    try {
        fs.statSync(path.resolve(_PACKAGES_, name));
        exec(`${name}已存在!`);
    } catch (e) {
        mkdir(name);
        cp(name)
    }
}

function mkdir(name) {
    const absolutePath = path.resolve(_PACKAGES_, name);

    fs.mkdirSync(absolutePath);

    ['src', 'tests', `src${path.sep}utils`]
        .forEach((_path) => {
            fs.mkdirSync(
                path.resolve(absolutePath, _path)
            )
        })
}

function cp(name) {
    const files = scan(_TEMPLATE_);

    files.forEach(file => {
      const content = fs
        .readFileSync(file, { encoding: 'utf-8' })
        .replace(/__PACKAGE_NAME__/g, name);

      fs.writeFileSync(
        file.replace(_TEMPLATE_, path.resolve(_PACKAGES_, name)),
        content,
        { encoding: 'utf-8' }
      );
    })
}

const scan = (dirPath) => {
    const filesPath = [];

    fs
        .readdirSync(dirPath)
        .forEach(file => {
            const absolutePath = path.resolve(dirPath, file);
            const stat = fs.statSync(absolutePath);
            if (stat.isDirectory()) {
                const _filesPath = scan(absolutePath);
                _filesPath.forEach(_path => filesPath.push(_path));
            } else {
                filesPath.push(absolutePath);
            }
        })
    return filesPath;
}

exec('请输入包名')