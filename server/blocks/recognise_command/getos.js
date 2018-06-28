var os = "windows"
if (process.platform === "darwin") {
    os = "mac"
}
else if (process.platform === "linux") {
    os = "linux"
}

module.exports = os