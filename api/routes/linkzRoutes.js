"use strict";

module.exports = function(app) {
  var linkz = require("../controllers/linkzController");

  app
    .route("/linkz")
    .get(linkz.list_all_linkz)
    .post(linkz.create_link);

  app
    .route("/linkz/:linkId")
    .get(linkz.read_link)
    .put(linkz.update_link)
    .delete(linkz.delete_link);

  app.route("/linkz/getLinkzByLabel/:name").get(linkz.get_links_by_label);
};
