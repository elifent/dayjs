!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_calendar = t());
})(this, function () {
  "use strict";
  return function (e, t, a) {
    var n = "h:mm A",
      d = {
        lastDay: "[Yesterday at] " + n,
        sameDay: "[Today at] " + n,
        nextDay: "[Tomorrow at] " + n,
        nextWeek: "dddd [at] " + n,
        lastWeek: "[Last] dddd [at] " + n,
        sameElse: "MM/DD/YYYY",
      };
    t.prototype.calendar = function (e, t) {
      var n = t || this.$locale().calendar || d,
        o = a(e || void 0).startOf("d"),
        s = this.diff(o, "d", !0),
        i = "sameElse",
        f =
          s < -6
            ? i
            : s < -1
            ? "lastWeek"
            : s < 0
            ? "lastDay"
            : s < 1
            ? "sameDay"
            : s < 2
            ? "nextDay"
            : s < 7
            ? "nextWeek"
            : i,
        l = n[f] || d[f];
      return "function" == typeof l ? l.call(this, a()) : this.format(l);
    };
  };
});

dayjs.extend(dayjs_plugin_calendar)