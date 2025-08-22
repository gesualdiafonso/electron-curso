import { ipcMain, app } from "electron"

// Handle IPC comunicaçõa unidirecional
ipcMain.handle("fetch-users", () => {
  // Simula uma busca de usuários
  return [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]
})

// Vamos pegar informações do nosso app para exibir na tela
ipcMain.handle("get-version", () => {
  return app.getVersion()
})