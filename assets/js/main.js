'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: 'convertMS',
        value: function convertMS(ms) {
            var d, h, m, s;

            s = Math.floor(ms / 1000);
            m = Math.floor(s / 60);
            s = s % 60;
            h = Math.floor(m / 60);
            m = m % 60;
            d = Math.floor(h / 24);
            h = h % 24;
            return {
                d: d,
                h: h,
                m: m,
                s: s
            };
        }
    }, {
        key: 'addZ',
        value: function addZ(n) {
            if (!n) return "00";
            return (n < 10 ? '0' : '') + n;
        }
    }, {
        key: 'formatTime',
        value: function formatTime(obj) {

            if (obj.d > 0) {
                return Util.addZ(obj.d) + "D " + Util.addZ(obj.h) + "H";
            }
            if (obj.h > 0) {
                return Util.addZ(obj.h) + ": " + Util.addZ(obj.m) + "M";
            }
            return Util.addZ(obj.m) + ": " + Util.addZ(obj.s) + " min" ;
        }
    }]);

    return Util;
}();

var Countdown = function () {
    function Countdown(endTime, $element) {
        _classCallCheck(this, Countdown);

        this.now = moment();
        this.end = moment().add(endTime);
        this.diff = this.end.diff(this.now);
        this.$el = $element;
        this.svg = Snap(this.$el.find("svg")[0]);
        this.progress = this.svg.select("#progress");
        this.$txt = this.$el.find(".c-text");
        this.initCircle();
        this.initTimer();
    }

    _createClass(Countdown, [{
        key: 'initCircle',
        value: function initCircle() {
            var self = this;
            self.progress.attr({
                strokeDasharray: '0, 301.44'
            });
            Snap.animate(0, 301.44, function (value) {
                self.progress.attr({
                    'stroke-dasharray': value + ', 301.44'
                });
            }, self.diff);
        }
    }, {
        key: 'initTimer',
        value: function initTimer() {
            var self = this;
            self.timer = setInterval(function () {
                self.now = moment();
                self.diff = self.end.diff(self.now);
                if (self.diff > 0) {
                    self.$txt.text(Util.formatTime(Util.convertMS(self.diff)));
                } else {
                    self.$txt.text("Pedido pronto!");
                    clearInterval(self.timer);
                }
            }, 200);
        }
    }]);

    return Countdown;
}();

$(function () {
    var yeah = new Countdown({ minutes: 0, seconds: 10 }, $(".c-container"));
});