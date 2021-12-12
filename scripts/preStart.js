const fs = require('fs');
const path = require('path');

const examplePath = path.resolve(__dirname, '../packages/demo');

const mockPath = path.resolve(examplePath, './mock');

const dirs = fs.readdirSync(mockPath);

dirs
  .forEach(dir => {
    const packPath = path.resolve(mockPath, dir);
    const distPath = path.resolve(packPath, 'dist');
    const srcPath = path.resolve(packPath, 'src');

    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath);
      [
        'index.js', 'index.css'
      ].forEach(file => {
        fs.copyFileSync(
          path.resolve(srcPath, file),
          path.resolve(distPath, file)
        )
      });
    }
  })
