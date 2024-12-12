import { exec } from 'child_process';
import chokidar from 'chokidar';

// 감시할 디렉토리
const watcher = chokidar.watch('src', { ignored: /node_modules/ });

const build = () => {
    console.log('Building project...');
    exec('npm run build', (error, stdout, stderr) => {
        if (error) {
            console.error(`Build error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Build stderr: ${stderr}`);
        }
        console.log(stdout);
    });
};

watcher.on('ready', () => {
    console.log('Watching for file changes...');
    watcher.on('change', (path) => {
        console.log(`File changed: ${path}`);
        build();
    });
});