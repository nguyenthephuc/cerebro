var electronInstaller = require('electron-winstaller');

var settings = {
    appDirectory: './release-builds/Cerebro-win32-ia32',
    outputDirectory: './release-setup',
    description: 'Tìm ưu đãi, khuyến mãi ăn uống xung quanh bạn',
    authors: 'Custom by Thế Phúc',
    exe: './Cerebro.exe',
    iconUrl: 'https://cerebroapp.com/images/favicon/android-icon-192x192.png',
    setupIcon: '../build/icon.ico'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});