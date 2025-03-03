!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_toObject = e());
})(this, function () {
  "use strict";
  return function (t, e) {
    e.prototype.toObject = function () {
      return {
        years: this.$y,
        months: this.$M,
        date: this.$D,
        hours: this.$H,
        minutes: this.$m,
        seconds: this.$s,
        milliseconds: this.$ms,
      };
    };
  };
});

dayjs.extend(dayjs_plugin_toObject);