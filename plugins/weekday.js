!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_weekday = t());
})(this, function () {
  "use strict";
  return function (e, t) {
    t.prototype.weekday = function (e) {
      var t = this.$locale().weekStart || 0,
        i = this.$W,
        n = (i < t ? i + 7 : i) - t;
      return this.$utils().u(e) ? n : this.subtract(n, "day").add(e, "day");
    };
  };
});

dayjs.extend(dayjs_plugin_weekday);