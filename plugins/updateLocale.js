!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_updateLocale = n());
})(this, function () {
  "use strict";
  return function (e, n, t) {
    t.updateLocale = function (e, n) {
      var o = t.Ls[e];
      if (o)
        return (
          (n ? Object.keys(n) : []).forEach(function (e) {
            o[e] = n[e];
          }),
          o
        );
    };
  };
});

dayjs.extend(dayjs_plugin_updateLocale);