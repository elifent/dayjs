!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_arraySupport = t());
})(this, function () {
  "use strict";
  return function (e, t, n) {
    var o = t.prototype,
      i = function (e) {
        var t = e.date,
          o = e.utc;
        return Array.isArray(t)
          ? o
            ? t.length
              ? new Date(Date.UTC.apply(null, t))
              : new Date()
            : 1 === t.length
            ? n(String(t[0])).toDate()
            : new (Function.prototype.bind.apply(Date, [null].concat(t)))()
          : t;
      },
      a = o.parse;
    o.parse = function (e) {
      (e.date = i.bind(this)(e)), a.bind(this)(e);
    };
  };
});

dayjs.extend(dayjs_plugin_arraySupport);
