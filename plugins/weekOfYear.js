!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_weekOfYear = t());
})(this, function () {
  "use strict";
  var e = "week",
    t = "year";
  return function (i, n, r) {
    var f = n.prototype;
    (f.week = function (i) {
      if ((void 0 === i && (i = null), null !== i))
        return this.add(7 * (i - this.week()), "day");
      var n = this.$locale().yearStart || 1;
      if (11 === this.month() && this.date() > 25) {
        var f = r(this).startOf(t).add(1, t).date(n),
          s = r(this).endOf(e);
        if (f.isBefore(s)) return 1;
      }
      var a = r(this).startOf(t).date(n).startOf(e).subtract(1, "millisecond"),
        o = this.diff(a, e, !0);
      return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
    }),
      (f.weeks = function (e) {
        return void 0 === e && (e = null), this.week(e);
      });
  };
});

dayjs.extend(dayjs_plugin_weekOfYear);