!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define(i)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_badMutable = i());
})(this, function () {
  "use strict";
  return function (t, i) {
    var n = i.prototype;
    (n.$g = function (t, i, n) {
      return this.$utils().u(t) ? this[i] : this.$set(n, t);
    }),
      (n.set = function (t, i) {
        return this.$set(t, i);
      });
    var e = n.startOf;
    n.startOf = function (t, i) {
      return (this.$d = e.bind(this)(t, i).toDate()), this.init(), this;
    };
    var s = n.add;
    n.add = function (t, i) {
      return (this.$d = s.bind(this)(t, i).toDate()), this.init(), this;
    };
    var o = n.locale;
    n.locale = function (t, i) {
      return t ? ((this.$L = o.bind(this)(t, i).$L), this) : this.$L;
    };
    var r = n.daysInMonth;
    n.daysInMonth = function () {
      return r.bind(this.clone())();
    };
    var u = n.isSame;
    n.isSame = function (t, i) {
      return u.bind(this.clone())(t, i);
    };
    var f = n.isBefore;
    n.isBefore = function (t, i) {
      return f.bind(this.clone())(t, i);
    };
    var d = n.isAfter;
    n.isAfter = function (t, i) {
      return d.bind(this.clone())(t, i);
    };
  };
});

dayjs.extend(dayjs_plugin_badMutable);
