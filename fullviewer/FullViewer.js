const electron = require( 'electron' )
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require( 'path' )
const url = require( 'url' )

const ipc = electron.ipcMain
const Menu = electron.Menu
const Tray = electron.Tray

let appIcon = null

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  // mainWindow = new BrowserWindow( { width: 800, height: 600, frame:false, backgroundColor: '#2e2c29' } )
  // mainWindow = new BrowserWindow( { width: 800, height: 600, frame: false, show: false } )
  mainWindow = new BrowserWindow( { width: 800, height: 600, frame: false } )

  // and load the index.html of the app.
  mainWindow.loadURL( url.format( {
    pathname: path.join( __dirname, 'index.html' ),
    protocol: 'file:',
    slashes: true
  } ) )

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on( 'closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  } )
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on( 'ready', createWindow )

// Quit when all windows are closed.
app.on( 'window-all-closed', function () {
  if ( appIcon ) appIcon.destroy()
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if ( process.platform !== 'darwin' ) {
    app.quit()
  }
} )

app.on( 'activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if ( mainWindow === null ) {
    createWindow()
  }
} )

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on( 'put-in-tray', function ( event ) {
  const iconName = process.platform === 'win32' ? 'icon.png' : 'icon.png'
  const iconPath = path.join( __dirname, iconName )
  appIcon = new Tray( iconPath )
  const contextMenu = Menu.buildFromTemplate( [
    {
      label: 'Restaura',
      click: function () {
        if ( !mainWindow.show() ) {
          mainWindow.show()
        }
        if ( mainWindow.isMinimized() ) {
          mainWindow.restore()
        }
      }
    } ,
    {
      label: 'Sair',
      click: function () {
        app.quit()
      }
    }
  ] )
  appIcon.setToolTip( 'FullControl Viewer' )
  appIcon.setContextMenu( contextMenu )
} )

ipc.on( 'appIcon', function ( event ) {
  BrowserWindow.getFocusedWindow().restore()
} )
