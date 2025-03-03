!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_customParseFormat = e());
})(this, function () {
  "use strict";
  var t = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    e =
      /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
    n = /\d\d/,
    r = /\d\d?/,
    i = /\d*[^\s\d-_:/()]+/,
    o = {},
    s = function (t) {
      return (t = +t) + (t > 68 ? 1900 : 2e3);
    };
  var a = function (t) {
      return function (e) {
        this[t] = +e;
      };
    },
    f = [
      /[+-]\d\d:?(\d\d)?|Z/,
      function (t) {
        (this.zone || (this.zone = {})).offset = (function (t) {
          if (!t) return 0;
          if ("Z" === t) return 0;
          var e = t.match(/([+-]|\d\d)/g),
            n = 60 * e[1] + (+e[2] || 0);
          return 0 === n ? 0 : "+" === e[0] ? -n : n;
        })(t);
      },
    ],
    u = function (t) {
      var e = o[t];
      return e && (e.indexOf ? e : e.s.concat(e.f));
    },
    h = function (t, e) {
      var n,
        r = o.meridiem;
      if (r) {
        for (var i = 1; i <= 24; i += 1)
          if (t.indexOf(r(i, 0, e)) > -1) {
            n = i > 12;
            break;
          }
      } else n = t === (e ? "pm" : "PM");
      return n;
    },
    d = {
      A: [
        i,
        function (t) {
          this.afternoon = h(t, !1);
        },
      ],
      a: [
        i,
        function (t) {
          this.afternoon = h(t, !0);
        },
      ],
      S: [
        /\d/,
        function (t) {
          this.milliseconds = 100 * +t;
        },
      ],
      SS: [
        n,
        function (t) {
          this.milliseconds = 10 * +t;
        },
      ],
      SSS: [
        /\d{3}/,
        function (t) {
          this.milliseconds = +t;
        },
      ],
      s: [r, a("seconds")],
      ss: [r, a("seconds")],
      m: [r, a("minutes")],
      mm: [r, a("minutes")],
      H: [r, a("hours")],
      h: [r, a("hours")],
      HH: [r, a("hours")],
      hh: [r, a("hours")],
      D: [r, a("day")],
      DD: [n, a("day")],
      Do: [
        i,
        function (t) {
          var e = o.ordinal,
            n = t.match(/\d+/);
          if (((this.day = n[0]), e))
            for (var r = 1; r <= 31; r += 1)
              e(r).replace(/\[|\]/g, "") === t && (this.day = r);
        },
      ],
      M: [r, a("month")],
      MM: [n, a("month")],
      MMM: [
        i,
        function (t) {
          var e = u("months"),
            n =
              (
                u("monthsShort") ||
                e.map(function (t) {
                  return t.substr(0, 3);
                })
              ).indexOf(t) + 1;
          if (n < 1) throw new Error();
          this.month = n % 12 || n;
        },
      ],
      MMMM: [
        i,
        function (t) {
          var e = u("months").indexOf(t) + 1;
          if (e < 1) throw new Error();
          this.month = e % 12 || e;
        },
      ],
      Y: [/[+-]?\d+/, a("year")],
      YY: [
        n,
        function (t) {
          this.year = s(t);
        },
      ],
      YYYY: [/\d{4}/, a("year")],
      Z: f,
      ZZ: f,
    };
  function c(n) {
    var r, i;
    (r = n), (i = o && o.formats);
    for (
      var s = (n = r.replace(
          /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
          function (e, n, r) {
            var o = r && r.toUpperCase();
            return (
              n ||
              i[r] ||
              t[r] ||
              i[o].replace(
                /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                function (t, e, n) {
                  return e || n.slice(1);
                }
              )
            );
          }
        )).match(e),
        a = s.length,
        f = 0;
      f < a;
      f += 1
    ) {
      var u = s[f],
        h = d[u],
        c = h && h[0],
        l = h && h[1];
      s[f] = l ? { regex: c, parser: l } : u.replace(/^\[|\]$/g, "");
    }
    return function (t) {
      for (var e = {}, n = 0, r = 0; n < a; n += 1) {
        var i = s[n];
        if ("string" == typeof i) r += i.length;
        else {
          var o = i.regex,
            f = i.parser,
            u = t.substr(r),
            h = o.exec(u)[0];
          f.call(e, h), (t = t.replace(h, ""));
        }
      }
      return (
        (function (t) {
          var e = t.afternoon;
          if (void 0 !== e) {
            var n = t.hours;
            e ? n < 12 && (t.hours += 12) : 12 === n && (t.hours = 0),
              delete t.afternoon;
          }
        })(e),
        e
      );
    };
  }
  return function (t, e, n) {
    (n.p.customParseFormat = !0),
      t && t.parseTwoDigitYear && (s = t.parseTwoDigitYear);
    var r = e.prototype,
      i = r.parse;
    r.parse = function (t) {
      var e = t.date,
        r = t.utc,
        s = t.args;
      this.$u = r;
      var a = s[1];
      if ("string" == typeof a) {
        var f = !0 === s[2],
          u = !0 === s[3],
          h = f || u,
          d = s[2];
        u && (d = s[2]),
          (o = this.$locale()),
          !f && d && (o = n.Ls[d]),
          (this.$d = (function (t, e, n) {
            try {
              if (["x", "X"].indexOf(e) > -1)
                return new Date(("X" === e ? 1e3 : 1) * t);
              var r = c(e)(t),
                i = r.year,
                o = r.month,
                s = r.day,
                a = r.hours,
                f = r.minutes,
                u = r.seconds,
                h = r.milliseconds,
                d = r.zone,
                l = new Date(),
                m = s || (i || o ? 1 : l.getDate()),
                M = i || l.getFullYear(),
                Y = 0;
              (i && !o) || (Y = o > 0 ? o - 1 : l.getMonth());
              var p = a || 0,
                v = f || 0,
                D = u || 0,
                g = h || 0;
              return d
                ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1e3))
                : n
                ? new Date(Date.UTC(M, Y, m, p, v, D, g))
                : new Date(M, Y, m, p, v, D, g);
            } catch (t) {
              return new Date("");
            }
          })(e, a, r)),
          this.init(),
          d && !0 !== d && (this.$L = this.locale(d).$L),
          h && e != this.format(a) && (this.$d = new Date("")),
          (o = {});
      } else if (a instanceof Array)
        for (var l = a.length, m = 1; m <= l; m += 1) {
          s[1] = a[m - 1];
          var M = n.apply(this, s);
          if (M.isValid()) {
            (this.$d = M.$d), (this.$L = M.$L), this.init();
            break;
          }
          m === l && (this.$d = new Date(""));
        }
      else i.call(this, t);
    };
  };
});

dayjs.extend(dayjs_plugin_customParseFormat);
