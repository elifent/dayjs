!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_minMax = n());
})(this, function () {
  "use strict";
  return function (e, n, t) {
    var i = function (e, n) {
      if (!n || !n.length || !n[0] || (1 === n.length && !n[0].length))
        return null;
      var t;
      1 === n.length && n[0].length > 0 && (n = n[0]);
      t = n[0];
      for (var i = 1; i < n.length; i += 1)
        (n[i].isValid() && !n[i][e](t)) || (t = n[i]);
      return t;
    };
    (t.max = function () {
      var e = [].slice.call(arguments, 0);
      return i("isAfter", e);
    }),
      (t.min = function () {
        var e = [].slice.call(arguments, 0);
        return i("isBefore", e);
      });
  };
});

dayjs.extend(dayjs_plugin_minMax);