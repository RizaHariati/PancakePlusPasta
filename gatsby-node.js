const fs = require("fs")

exports.onPostBuild = () => {
  if (fs.existsSync("./public/sitemap-0.xml")) {
    fs.renameSync("./public/sitemap-0.xml", "./public/sitemap.xml")
  }
}
