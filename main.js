const URI = require("urijs");
const got = require("got");
const fs = require("fs");

const link =
  "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top1000&wd=%CC%EC%BD%F2%CC%EC%BA%A3%D5%FD%CA%BD%BD%E2%C9%A2";

got(link)
  .then((res) => {
    fs.writeFile("link.html", res.body.toString("utf8"), function (err) {
      if (err) console.error("writeFile link err:" + err);
    });
  })
  .catch((err) => console.error("got link err:" + err));

var _uri = URI(link);
// _uri.iso8859();
_uri.unicode();
got(_uri.href())
  .then((res) => {
    fs.writeFile("uri.html", res.body.toString("utf8"), function (err) {
      if (err) console.error("writeFile uri err:" + err);
    });
  })
  .catch((err) => console.error("got uri err:" + err));

// console.log(_uri);
// console.log(_uri.href());
// _uri.iso8859();
// // console.log(_uri);
// console.log(_uri.href());
// _uri.unicode();
// console.log(_uri);
// console.log(_uri.href());

// var _uri2 = URI(link);
// // console.log(_uri2);
// console.log(_uri2.href());
// // console.log(JSON.stringify(_uri2));
// _uri2 = _uri2.iso8859();
// // console.log(_uri2);
// console.log(_uri2.href());
