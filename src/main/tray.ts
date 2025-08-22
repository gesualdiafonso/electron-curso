import { Menu, Tray, nativeImage, BrowserWindow} from 'electron';
import path from 'node:path';

export function createTray(window: BrowserWindow){
  const appIcon = path.join(__dirname, 'resources', 'menuTemplate.png');

  let icon = nativeImage.createFromPath(appIcon);

  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([
    { label: "Dev Clientes", enabled: false, },
    {type: 'separator'},
    {
      label: "Abrir",
      click: () => {
        window.show();
      }
    }
    ,
    {
      label: "Sair",
      // click: () => {
      //   window.close();
      // }
      role: 'quit'
    },
    // {
    //   label: "Minimizar",
    //   click: () => {
    //     window.minimize();
    //   }
    // },
    // {
    //   label: "Maximizar",
    //   click: () => {
    //     if (window.isMaximized()) {
    //       window.unmaximize();
    //     } else {
    //       window.maximize();
    //     }
    //   }
    // },

    {type: 'separator'},
    {
      label: "Sobre",
      click: () => {
        window.webContents.send('show-about');

        if(window.isMinimized()){
          window.restore();
        } else{
          window.focus();
        }
      }
    },
    {
      label: "Cadastrar cliente",
      click: () => {
        // window.webContents.send('show-register-client');
        //Enviar mensagem do precesso (main) para o processo frontend (renderer)
        window.webContents.send('new-customer');

        if(window.isMinimized()){
          window.restore();
        } else{
          window.focus();
        }
      }
    }

  ])

  tray.setToolTip('Dev Clientes');

  tray.setContextMenu(menu);
}