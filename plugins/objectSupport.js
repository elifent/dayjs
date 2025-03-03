!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_objectSupport = n());
})(this, function () {
  "use strict";
  return function (t, n, e) {
    var i = n.prototype,
      r = function (t) {
        var n,
          r = t.date,
          o = t.utc,
          a = {};
        if (
          !((n = r) instanceof Date) &&
          !(n instanceof Array) &&
          n instanceof Object
        ) {
          if (!Object.keys(r).length) return new Date();
          var u = o ? e.utc() : e();
          Object.keys(r).forEach(function (t) {
            var n, e;
            a[((n = t), (e = i.$utils().p(n)), "date" === e ? "day" : e)] =
              r[t];
          });
          var d = a.day || (a.year || a.month >= 0 ? 1 : u.date()),
            c = a.year || u.year(),
            f = a.month >= 0 ? a.month : a.year || a.day ? 0 : u.month(),
            s = a.hour || 0,
            h = a.minute || 0,
            b = a.second || 0,
            y = a.millisecond || 0;
          return o
            ? new Date(Date.UTC(c, f, d, s, h, b, y))
            : new Date(c, f, d, s, h, b, y);
        }
        return r;
      },
      o = i.parse;
    i.parse = function (t) {
      (t.date = r.bind(this)(t)), o.bind(this)(t);
    };
    var a = i.set,
      u = i.add,
      d = function (t, n, e, i) {
        if ((void 0 === i && (i = 1), n instanceof Object)) {
          var r = Object.keys(n),
            o = this;
          return (
            r.forEach(function (e) {
              o = t.bind(o)(n[e] * i, e);
            }),
            o
          );
        }
        return t.bind(this)(n * i, e);
      };
    (i.set = function (t, n) {
      return (
        (n = void 0 === n ? t : n),
        d.bind(this)(
          function (t, n) {
            return a.bind(this)(n, t);
          },
          n,
          t
        )
      );
    }),
      (i.add = function (t, n) {
        return d.bind(this)(u, t, n);
      }),
      (i.subtract = function (t, n) {
        return d.bind(this)(u, t, n, -1);
      });
  };
});

dayjs.extend(dayjs_plugin_objectSupport);