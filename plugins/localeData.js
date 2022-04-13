!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((n =
        "undefined" != typeof globalThis
          ? globalThis
          : n || self).dayjs_plugin_localeData = e());
})(this, function () {
  "use strict";
  return function (n, e, t) {
    var r = e.prototype,
      o = function (n) {
        return n && (n.indexOf ? n : n.s);
      },
      u = function (n, e, t, r, u) {
        var i = n.name ? n : n.$locale(),
          a = o(i[e]),
          s = o(i[t]),
          f =
            a ||
            s.map(function (n) {
              return n.substr(0, r);
            });
        if (!u) return f;
        var d = i.weekStart;
        return f.map(function (n, e) {
          return f[(e + (d || 0)) % 7];
        });
      },
      i = function () {
        return t.Ls[t.locale()];
      },
      a = function (n, e) {
        return (
          n.formats[e] ||
          (function (n) {
            return n.replace(
              /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
              function (n, e, t) {
                return e || t.slice(1);
              }
            );
          })(n.formats[e.toUpperCase()])
        );
      },
      s = function () {
        var n = this;
        return {
          months: function (e) {
            return e ? e.format("MMMM") : u(n, "months");
          },
          monthsShort: function (e) {
            return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
          },
          firstDayOfWeek: function () {
            return n.$locale().weekStart || 0;
          },
          weekdays: function (e) {
            return e ? e.format("dddd") : u(n, "weekdays");
          },
          weekdaysMin: function (e) {
            return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
          },
          weekdaysShort: function (e) {
            return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
          },
          longDateFormat: function (e) {
            return a(n.$locale(), e);
          },
          meridiem: this.$locale().meridiem,
          ordinal: this.$locale().ordinal,
        };
      };
    (r.localeData = function () {
      return s.bind(this)();
    }),
      (t.localeData = function () {
        var n = i();
        return {
          firstDayOfWeek: function () {
            return n.weekStart || 0;
          },
          weekdays: function () {
            return t.weekdays();
          },
          weekdaysShort: function () {
            return t.weekdaysShort();
          },
          weekdaysMin: function () {
            return t.weekdaysMin();
          },
          months: function () {
            return t.months();
          },
          monthsShort: function () {
            return t.monthsShort();
          },
          longDateFormat: function (e) {
            return a(n, e);
          },
          meridiem: n.meridiem,
          ordinal: n.ordinal,
        };
      }),
      (t.months = function () {
        return u(i(), "months");
      }),
      (t.monthsShort = function () {
        return u(i(), "monthsShort", "months", 3);
      }),
      (t.weekdays = function (n) {
        return u(i(), "weekdays", null, null, n);
      }),
      (t.weekdaysShort = function (n) {
        return u(i(), "weekdaysShort", "weekdays", 3, n);
      }),
      (t.weekdaysMin = function (n) {
        return u(i(), "weekdaysMin", "weekdays", 2, n);
      });
  };
});

dayjs.extend(dayjs_plugin_localeData);