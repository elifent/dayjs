!(function (e, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define(i)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_isBetween = i());
})(this, function () {
  "use strict";
  return function (e, i, t) {
    i.prototype.isBetween = function (e, i, s, f) {
      var n = t(e),
        o = t(i),
        r = "(" === (f = f || "()")[0],
        u = ")" === f[1];
      return (
        ((r ? this.isAfter(n, s) : !this.isBefore(n, s)) &&
          (u ? this.isBefore(o, s) : !this.isAfter(o, s))) ||
        ((r ? this.isBefore(n, s) : !this.isAfter(n, s)) &&
          (u ? this.isAfter(o, s) : !this.isBefore(o, s)))
      );
    };
  };
});

dayjs.extend(dayjs_plugin_isBetween);
