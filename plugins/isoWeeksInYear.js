!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_isoWeeksInYear = n());
})(this, function () {
  "use strict";
  return function (e, n) {
    n.prototype.isoWeeksInYear = function () {
      var e = this.isLeapYear(),
        n = this.endOf("y").day();
      return 4 === n || (e && 5 === n) ? 53 : 52;
    };
  };
});

dayjs.extend(dayjs_plugin_isoWeeksInYear);
