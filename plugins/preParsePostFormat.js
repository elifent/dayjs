!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_preParsePostFormat = e());
})(this, function () {
  "use strict";
  return function (t, e) {
    var o = e.prototype.parse;
    e.prototype.parse = function (t) {
      if ("string" == typeof t.date) {
        var e = this.$locale();
        t.date = e && e.preparse ? e.preparse(t.date) : t.date;
      }
      return o.bind(this)(t);
    };
    var r = e.prototype.format;
    e.prototype.format = function () {
      for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
        e[o] = arguments[o];
      var a = r.call.apply(r, [this].concat(e)),
        p = this.$locale();
      return p && p.postformat ? p.postformat(a) : a;
    };
    var a = e.prototype.fromToBase;
    a &&
      (e.prototype.fromToBase = function (t, e, o, r) {
        var p = this.$locale() || o.$locale();
        return a.call(this, t, e, o, r, p && p.postformat);
      });
  };
});

dayjs.extend(dayjs_plugin_preParsePostFormat);