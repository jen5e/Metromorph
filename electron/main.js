const { app, BrowserWindow } = require("electron");
const path = require("path");
function create() {
  const w = new BrowserWindow({
    width: 460, height: 900, minWidth: 360, minHeight: 600, backgroundColor: "#0b0b0d", title: "Metromorph",
    webPreferences: { autoplayPolicy: "no-user-gesture-required", backgroundThrottling: false }
  });
  w.setMenuBarVisibility(false);
  w.loadFile(path.join(__dirname, "..", "www", "index.html"));
}
app.whenReady().then(create);
app.on("window-all-closed", () => app.quit());
app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) create(); });
