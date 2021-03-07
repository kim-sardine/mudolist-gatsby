const fs = require(`fs`)
const yaml = require(`js-yaml`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const ymlDoc = yaml.load(fs.readFileSync(`./content/index.yaml`, `utf-8`))
  ymlDoc.forEach(element => {
    createPage({
      path: element.playlist_id,
      component: require.resolve(`./src/pages/detail.js`),
      context: {
        playlist: element
      },
    })
  })
}