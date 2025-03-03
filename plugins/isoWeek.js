!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_plugin_isoWeek = t());
})(this, function () {
  "use strict";
  var e = "day";
  return function (t, i, s) {
    var a = function (t) {
        return t.add(4 - t.isoWeekday(), e);
      },
      d = i.prototype;
    (d.isoWeekYear = function () {
      return a(this).year();
    }),
      (d.isoWeek = function (t) {
        if (!this.$utils().u(t)) return this.add(7 * (t - this.isoWeek()), e);
        var i,
          d,
          n,
          o,
          r = a(this),
          u =
            ((i = this.isoWeekYear()),
            (d = this.$u),
            (n = (d ? s.utc : s)().year(i).startOf("year")),
            (o = 4 - n.isoWeekday()),
            n.isoWeekday() > 4 && (o += 7),
            n.add(o, e));
        return r.diff(u, "week") + 1;
      }),
      (d.isoWeekday = function (e) {
        return this.$utils().u(e)
          ? this.day() || 7
          : this.day(this.day() % 7 ? e : e - 7);
      });
    var n = d.startOf;
    d.startOf = function (e, t) {
      var i = this.$utils(),
        s = !!i.u(t) || t;
      return "isoweek" === i.p(e)
        ? s
          ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day")
          : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf(
              "day"
            )
        : n.bind(this)(e, t);
    };
  };
});

dayjs.extend(dayjs_plugin_isoWeek);
