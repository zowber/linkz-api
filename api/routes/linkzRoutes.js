"use strict"

module.exports = function(app) {
  var linkz = require("../controllers/linkzController")

  app.route("/linkz/getLinkzByLabel/:name").get(linkz.get_linkz_by_label)

  app.route("/linkz/getPageTitle/:url").get(linkz.get_page_title)

  app
    .route("/linkz")
    .get(linkz.list_all_linkz)
    .post(linkz.create_link)

  app
    .route("/linkz/:linkId")
    .get(linkz.read_link)
    .put(linkz.update_link)
    .delete(linkz.delete_link)
}
