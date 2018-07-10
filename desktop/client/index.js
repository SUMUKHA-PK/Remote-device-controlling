const { app, BrowserWindow } = require('electron')

function createWindow(frame = true, width = 800, height = 600) {
    let window = new BrowserWindow({ frame: frame, width: width, height: height })

    window.webContents.openDevTools()
    window.on('closed', function () {
        window = null
    })

}

app.on('ready', createWindow.bind(this, false, 800, 600))

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})

