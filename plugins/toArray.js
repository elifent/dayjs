!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_toArray = e());
})(this, function () {
  "use strict";
  return function (t, e) {
    e.prototype.toArray = function () {
      return [this.$y, this.$M, this.$D, this.$H, this.$m, this.$s, this.$ms];
    };
  };
});

dayjs.extend(dayjs_plugin_toArray);