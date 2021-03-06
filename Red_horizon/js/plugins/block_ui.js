/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 * Examples at: http://malsup.com/jquery/block/
 */slider
 (function () {
    function p(b) {
        function p(c, a) {
            var f,
                h,
                e = c == window,
                g = a && void 0 !== a.message ? a.message : void 0;
            a = b.extend({}, b.blockUI.defaults, a || {});
            if (!a.ignoreIfBlocked || !b(c).data("blockUI.isBlocked")) {
                a.overlayCSS = b.extend({}, b.blockUI.defaults.overlayCSS, a.overlayCSS || {});
                f = b.extend({}, b.blockUI.defaults.css, a.css || {});
                a.onOverlayClick && (a.overlayCSS.cursor = "pointer");
                h = b.extend({}, b.blockUI.defaults.themedCSS, a.themedCSS || {});
                g = void 0 === g ? a.message : g;
                e && l && t(window, { fadeOut: 0 });
                if (g && "string" != typeof g && (g.parentNode || g.jquery)) {
                    var k = g.jquery ? g[0] : g,
                        d = {};
                    b(c).data("blockUI.history", d);
                    d.el = k;
                    d.parent = k.parentNode;
                    d.display = k.style.display;
                    d.position = k.style.position;
                    d.parent && d.parent.removeChild(k);
                }
                b(c).data("blockUI.onUnblock", a.onUnblock);
                var d = a.baseZ,
                    m;
                m =
                    u || a.forceIframe
                        ? b('<iframe class="blockUI" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + a.iframeSrc + '"></iframe>')
                        : b('<div class="blockUI" style="display:none"></div>');
                k = a.theme
                    ? b('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + d++ + ';display:none"></div>')
                    : b('<div class="blockUI blockOverlay" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
                a.theme && e
                    ? ((d = '<div class="blockUI ' + a.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:fixed">'),
                      a.title && (d += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>"),
                      (d += '<div class="ui-widget-content ui-dialog-content"></div></div>'))
                    : a.theme
                    ? ((d = '<div class="blockUI ' + a.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:absolute">'),
                      a.title && (d += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>"),
                      (d += '<div class="ui-widget-content ui-dialog-content"></div></div>'))
                    : (d = e
                          ? '<div class="blockUI ' + a.blockMsgClass + ' blockPage" style="z-index:' + (d + 10) + ';display:none;position:fixed"></div>'
                          : '<div class="blockUI ' + a.blockMsgClass + ' blockElement" style="z-index:' + (d + 10) + ';display:none;position:absolute"></div>');
                d = b(d);
                g && (a.theme ? (d.css(h), d.addClass("ui-widget-content")) : d.css(f));
                a.theme || k.css(a.overlayCSS);
                k.css("position", e ? "fixed" : "absolute");
                (u || a.forceIframe) && m.css("opacity", 0);
                f = [m, k, d];
                var r = e ? b("body") : b(c);
                b.each(f, function () {
                    this.appendTo(r);
                });
                a.theme && a.draggable && b.fn.draggable && d.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });
                h = B && (!b.support.boxModel || 0 < b("object,embed", e ? null : c).length);
                if (w || h) {
                    e && a.allowBodyStretch && b.support.boxModel && b("html,body").css("height", "100%");
                    if ((w || !b.support.boxModel) && !e) {
                        h = parseInt(b.css(c, "borderTopWidth"), 10) || 0;
                        var q = parseInt(b.css(c, "borderLeftWidth"), 10) || 0,
                            x = h ? "(0 - " + h + ")" : 0,
                            y = q ? "(0 - " + q + ")" : 0;
                    }
                    b.each(f, function (b, c) {
                        var d = c[0].style;
                        d.position = "absolute";
                        if (2 > b)
                            e
                                ? d.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + a.quirksmodeOffsetHack + ') + "px"')
                                : d.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                                e ? d.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : d.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                                y && d.setExpression("left", y),
                                x && d.setExpression("top", x);
                        else if (a.centerY)
                            e &&
                                d.setExpression(
                                    "top",
                                    '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                                ),
                                (d.marginTop = 0);
                        else if (!a.centerY && e) {
                            var f = a.css && a.css.top ? parseInt(a.css.top, 10) : 0;
                            d.setExpression("top", "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + f + ') + "px"');
                        }
                    });
                }
                g && (a.theme ? d.find(".ui-widget-content").append(g) : d.append(g), (g.jquery || g.nodeType) && b(g).show());
                (u || a.forceIframe) && a.showOverlay && m.show();
                a.fadeIn
                    ? ((f = a.onBlock ? a.onBlock : v), (m = a.showOverlay && !g ? f : v), (f = g ? f : v), a.showOverlay && k._fadeIn(a.fadeIn, m), g && d._fadeIn(a.fadeIn, f))
                    : (a.showOverlay && k.show(), g && d.show(), a.onBlock && a.onBlock.bind(d)());
                z(1, c, a);
                e ? ((l = d[0]), (n = b(a.focusableElements, l)), a.focusInput && setTimeout(A, 20)) : C(d[0], a.centerX, a.centerY);
                a.timeout &&
                    ((g = setTimeout(function () {
                        e ? b.unblockUI(a) : b(c).unblock(a);
                    }, a.timeout)),
                    b(c).data("blockUI.timeout", g));
            }
        }
        function t(c, a) {
            var f,
                h = c == window,
                e = b(c),
                g = e.data("blockUI.history"),
                k = e.data("blockUI.timeout");
            k && (clearTimeout(k), e.removeData("blockUI.timeout"));
            a = b.extend({}, b.blockUI.defaults, a || {});
            z(0, c, a);
            null === a.onUnblock && ((a.onUnblock = e.data("blockUI.onUnblock")), e.removeData("blockUI.onUnblock"));
            var d;
            d = h ? b("body").children().filter(".blockUI").add("body > .blockUI") : e.find(">.blockUI");
            a.cursorReset && (1 < d.length && (d[1].style.cursor = a.cursorReset), 2 < d.length && (d[2].style.cursor = a.cursorReset));
            h && (l = n = null);
            a.fadeOut
                ? ((f = d.length),
                  d.stop().fadeOut(a.fadeOut, function () {
                      0 === --f && r(d, g, a, c);
                  }))
                : r(d, g, a, c);
        }
        function r(c, a, f, h) {
            var e = b(h);
            if (!e.data("blockUI.isBlocked")) {
                c.each(function (a, b) {
                    this.parentNode && this.parentNode.removeChild(this);
                });
                a && a.el && ((a.el.style.display = a.display), (a.el.style.position = a.position), (a.el.style.cursor = "default"), a.parent && a.parent.appendChild(a.el), e.removeData("blockUI.history"));
                e.data("blockUI.static") && e.css("position", "static");
                if ("function" == typeof f.onUnblock) f.onUnblock(h, f);
                c = b(document.body);
                a = c.width();
                f = c[0].style.width;
                c.width(a - 1).width(a);
                c[0].style.width = f;
            }
        }
        function z(c, a, f) {
            var h = a == window;
            a = b(a);
            if (c || ((!h || l) && (h || a.data("blockUI.isBlocked"))))
                a.data("blockUI.isBlocked", c),
                    h &&
                        f.bindEvents &&
                        (!c || f.showOverlay) &&
                        (c ? b(document).bind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove", f, q) : b(document).unbind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove", q));
        }
        function q(c) {
            if ("keydown" === c.type && c.keyCode && 9 == c.keyCode && l && c.data.constrainTabKey) {
                var a = n,
                    f = c.shiftKey && c.target === a[0];
                if ((!c.shiftKey && c.target === a[a.length - 1]) || f)
                    return (
                        setTimeout(function () {
                            A(f);
                        }, 10),
                        !1
                    );
            }
            var a = c.data,
                h = b(c.target);
            if (h.hasClass("blockOverlay") && a.onOverlayClick) a.onOverlayClick(c);
            return 0 < h.parents("div." + a.blockMsgClass).length ? !0 : 0 === h.parents().children().filter("div.blockUI").length;
        }
        function A(b) {
            n && (b = n[!0 === b ? n.length - 1 : 0]) && b.focus();
        }
        function C(c, a, f) {
            var h = c.parentNode,
                e = c.style,
                g = (h.offsetWidth - c.offsetWidth) / 2 - (parseInt(b.css(h, "borderLeftWidth"), 10) || 0);
            c = (h.offsetHeight - c.offsetHeight) / 2 - (parseInt(b.css(h, "borderTopWidth"), 10) || 0);
            a && (e.left = 0 < g ? g + "px" : "0");
            f && (e.top = 0 < c ? c + "px" : "0");
        }
        b.fn._fadeIn = b.fn.fadeIn;
        var v = b.noop || function () {},
            u = /MSIE/.test(navigator.userAgent),
            w = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            B = b.isFunction(document.createElement("div").style.setExpression);
        b.blockUI = function (b) {
            p(window, b);
        };
        b.unblockUI = function (b) {
            t(window, b);
        };
        b.growlUI = function (c, a, f, h) {
            var e = b('<div class="growlUI"></div>');
            c && e.append("<h1>" + c + "</h1>");
            a && e.append("<h2>" + a + "</h2>");
            void 0 === f && (f = 3e3);
            var g = function (a) {
                a = a || {};
                b.blockUI({
                    message: e,
                    fadeIn: "undefined" !== typeof a.fadeIn ? a.fadeIn : 700,
                    fadeOut: "undefined" !== typeof a.fadeOut ? a.fadeOut : 1e3,
                    timeout: "undefined" !== typeof a.timeout ? a.timeout : f,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: h,
                    css: b.blockUI.defaults.growlCSS,
                });
            };
            g();
            e.css("opacity");
            e.mouseover(function () {
                g({ fadeIn: 0, timeout: 3e4 });
                var a = b(".blockMsg");
                a.stop();
                a.fadeTo(300, 1);
            }).mouseout(function () {
                b(".blockMsg").fadeOut(1e3);
            });
        };
        b.fn.block = function (c) {
            if (this[0] === window) return b.blockUI(c), this;
            var a = b.extend({}, b.blockUI.defaults, c || {});
            this.each(function () {
                var c = b(this);
                (a.ignoreIfBlocked && c.data("blockUI.isBlocked")) || c.unblock({ fadeOut: 0 });
            });
            return this.each(function () {
                "static" == b.css(this, "position") && ((this.style.position = "relative"), b(this).data("blockUI.static", !0));
                this.style.zoom = 1;
                p(this, c);
            });
        };
        b.fn.unblock = function (c) {
            return this[0] === window
                ? (b.unblockUI(c), this)
                : this.each(function () {
                      t(this, c);
                  });
        };
        b.blockUI.version = 2.7;
        b.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" },
            themedCSS: { width: "30%", top: "40%", left: "35%" },
            overlayCSS: { backgroundColor: "#000", opacity: 0.6, cursor: "wait" },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: 0.6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px",
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1,
        };
        var l = null,
            n = [];
    }
    "function" === typeof define && define.amd && define.amd.jQuery ? define(["jquery"], p) : p(jQuery);
})();