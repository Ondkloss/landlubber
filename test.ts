import { readFile } from "fs";
import { landlubbify } from "./landlubbify";

readFile("examples", "utf8", function(err, data) {
  const uniformData = data.replace(/\r\n/g, "\n");
  uniformData.split("\n").forEach(value => {
    if (value) console.log("" + landlubbify(value));
  });
});
