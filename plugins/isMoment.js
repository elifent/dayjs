!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_isMoment = n());
})(this, function () {
  "use strict";
  return function (e, n, t) {
    t.isMoment = function (e) {
      return t.isDayjs(e);
    };
  };
});

dayjs.extend(dayjs_plugin_isMoment);
