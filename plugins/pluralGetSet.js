!(function (e, o) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = o())
    : "function" == typeof define && define.amd
    ? define(o)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_pluralGetSet = o());
})(this, function () {
  "use strict";
  return function (e, o) {
    var s = o.prototype;
    [
      "milliseconds",
      "seconds",
      "minutes",
      "hours",
      "days",
      "weeks",
      "isoWeeks",
      "months",
      "quarters",
      "years",
      "dates",
    ].forEach(function (e) {
      s[e] = s[e.replace(/s$/, "")];
    });
  };
});

dayjs.extend(dayjs_plugin_pluralGetSet);