!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_isSameOrAfter = t());
})(this, function () {
  "use strict";
  return function (e, t) {
    t.prototype.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    };
  };
});

dayjs.extend(dayjs_plugin_isSameOrAfter);
