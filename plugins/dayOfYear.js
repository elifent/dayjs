!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_dayOfYear = t());
})(this, function () {
  "use strict";
  return function (e, t, n) {
    t.prototype.dayOfYear = function (e) {
      var t =
        Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) +
        1;
      return null == e ? t : this.add(e - t, "day");
    };
  };
});

dayjs.extend(dayjs_plugin_dayOfYear);
