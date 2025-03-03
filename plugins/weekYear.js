!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_weekYear = t());
})(this, function () {
  "use strict";
  return function (e, t) {
    t.prototype.weekYear = function () {
      var e = this.month(),
        t = this.week(),
        n = this.year();
      return 1 === t && 11 === e ? n + 1 : 0 === e && t >= 52 ? n - 1 : n;
    };
  };
});

dayjs.extend(dayjs_plugin_weekYear);