import { join, resolve } from 'path';
import shell from 'shelljs';

const cacheDir = resolve(process.cwd(), '.cache');
const distDir = resolve(process.cwd(), 'dist');

function main() {
    try {
        shell.cp(
            resolve(process.cwd(), './src/nsis*.js'),
            resolve(cacheDir, 'lib/ace/mode/')
        );
    } catch (e) {
        throw Error('Failed to copy nsis mode');
    }

    shell.exec('./Makefile.dryice.js normal', {
        cwd: cacheDir
    });

    try {
        shell.mkdir(distDir);
    } catch {
        console.log('dist directory already exists');
    }

    shell.cp(
        resolve(cacheDir, 'build/src/mode-nsis.js'),
        join(distDir, 'mode-nsis.js')
    );
    
    shell.cp(
        resolve(cacheDir, 'build/src-noconflict/mode-nsis.js'),
        join(distDir, 'mode-nsis.noconflict.js')
    );
}

main();