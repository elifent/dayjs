!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_quarterOfYear = n());
})(this, function () {
  "use strict";
  var t = "month",
    n = "quarter";
  return function (e, i) {
    var r = i.prototype;
    r.quarter = function (t) {
      return this.$utils().u(t)
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((this.month() % 3) + 3 * (t - 1));
    };
    var s = r.add;
    r.add = function (e, i) {
      return (
        (e = Number(e)),
        this.$utils().p(i) === n ? this.add(3 * e, t) : s.bind(this)(e, i)
      );
    };
    var s = r.subtract;
    r.subtract = function (e, i) {
      return (
        (e = Number(e)),
        this.$utils().p(i) === n ? this.subtract(3 * e, t) : s.bind(this)(e, i)
      );
    };
    var u = r.startOf;
    r.startOf = function (e, i) {
      var r = this.$utils(),
        s = !!r.u(i) || i;
      if (r.p(e) === n) {
        var o = this.quarter() - 1;
        return s
          ? this.month(3 * o)
              .startOf(t)
              .startOf("day")
          : this.month(3 * o + 2)
              .endOf(t)
              .endOf("day");
      }
      return u.bind(this)(e, i);
    };
  };
});

dayjs.extend(dayjs_plugin_quarterOfYear);