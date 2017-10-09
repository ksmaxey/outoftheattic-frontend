!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
        var t = !!e && "length" in e && e.length, n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function o(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return se.call(t, e) > -1 !== n;
        }) : Ce.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }
    function s(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function a(e) {
        var t = {};
        return he.each(e.match(De) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function l(e) {
        return e;
    }
    function u(e) {
        throw e;
    }
    function c(e, t, n, i) {
        var r;
        try {
            e && he.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && he.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [ e ].slice(i));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    function p() {
        te.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), 
        he.ready();
    }
    function d() {
        this.expando = he.expando + d.uid++;
    }
    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e);
    }
    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Re, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = f(n);
            } catch (e) {}
            ze.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function m(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return he.css(e, t, "");
        }, l = a(), u = n && n[3] || (he.cssNumber[t] ? "" : "px"), c = (he.cssNumber[t] || "px" !== u && +l) && Pe.exec(he.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, he.style(e, t, c + u);
            } while (o !== (o = a() / l) && 1 !== o && --s);
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, 
        i.start = c, i.end = r)), r;
    }
    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = Ue[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = he.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === r && (r = "block"), Ue[i] = r, r);
    }
    function v(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, 
        t ? ("none" === n && (r[o] = Me.get(i, "display") || null, r[o] || (i.style.display = "")), 
        "" === i.style.display && _e(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", 
        Me.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && r(e, t) ? he.merge([ e ], n) : n;
    }
    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"));
    }
    function x(e, t, n, i, r) {
        for (var o, s, a, l, u, c, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++) if ((o = e[f]) || 0 === o) if ("object" === he.type(o)) he.merge(d, o.nodeType ? [ o ] : o); else if (Ge.test(o)) {
            for (s = s || p.appendChild(t.createElement("div")), a = ($e.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = Xe[a] || Xe._default, s.innerHTML = l[1] + he.htmlPrefilter(o) + l[2], c = l[0]; c--; ) s = s.lastChild;
            he.merge(d, s.childNodes), (s = p.firstChild).textContent = "";
        } else d.push(t.createTextNode(o));
        for (p.textContent = "", f = 0; o = d[f++]; ) if (i && he.inArray(o, i) > -1) r && r.push(o); else if (u = he.contains(o.ownerDocument, o), 
        s = y(p.appendChild(o), "script"), u && b(s), n) for (c = 0; o = s[c++]; ) Qe.test(o.type || "") && n.push(o);
        return p;
    }
    function w() {
        return !0;
    }
    function E() {
        return !1;
    }
    function T() {
        try {
            return te.activeElement;
        } catch (e) {}
    }
    function C(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) C(e, a, n, i, t[a], o);
            return e;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = E; else if (!r) return e;
        return 1 === o && (s = r, r = function(e) {
            return he().off(e), s.apply(this, arguments);
        }, r.guid = s.guid || (s.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, r, i, n);
        });
    }
    function k(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e;
    }
    function F(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function A(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function S(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Me.hasData(e) && (o = Me.access(e), s = Me.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u) for (n = 0, i = u[r].length; n < i; n++) he.event.add(t, r, u[r][n]);
            }
            ze.hasData(e) && (a = ze.access(e), l = he.extend({}, a), ze.set(t, l));
        }
    }
    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function N(e, t, i, r) {
        t = re.apply([], t);
        var o, s, a, l, u, c, p = 0, d = e.length, f = d - 1, h = t[0], m = he.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !de.checkClone && tt.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), N(o, t, i, r);
        });
        if (d && (o = x(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), 
        s || r)) {
            for (l = (a = he.map(y(o, "script"), F)).length; p < d; p++) u = o, p !== f && (u = he.clone(u, !0, !0), 
            l && he.merge(a, y(u, "script"))), i.call(e[p], u, p);
            if (l) for (c = a[a.length - 1].ownerDocument, he.map(a, A), p = 0; p < l; p++) u = a[p], 
            Qe.test(u.type || "") && !Me.access(u, "globalEval") && he.contains(c, u) && (u.src ? he._evalUrl && he._evalUrl(u.src) : n(u.textContent.replace(it, ""), c));
        }
        return e;
    }
    function L(e, t, n) {
        for (var i, r = t ? he.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || he.cleanData(y(i)), 
        i.parentNode && (n && he.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function j(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || st(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), 
        !de.pixelMarginRight() && ot.test(s) && rt.test(t) && (i = a.width, r = a.minWidth, 
        o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, 
        a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
    }
    function q(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    function M(e) {
        if (e in dt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--; ) if ((e = pt[n] + t) in dt) return e;
    }
    function z(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = M(e) || e), t;
    }
    function I(e, t, n) {
        var i = Pe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function R(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += he.css(e, n + Oe[o], !0, r)), 
        i ? ("content" === n && (s -= he.css(e, "padding" + Oe[o], !0, r)), "margin" !== n && (s -= he.css(e, "border" + Oe[o] + "Width", !0, r))) : (s += he.css(e, "padding" + Oe[o], !0, r), 
        "padding" !== n && (s += he.css(e, "border" + Oe[o] + "Width", !0, r)));
        return s;
    }
    function H(e, t, n) {
        var i, r = st(e), o = j(e, t, r), s = "border-box" === he.css(e, "boxSizing", !1, r);
        return ot.test(o) ? o : (i = s && (de.boxSizingReliable() || o === e.style[t]), 
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + R(e, t, n || (s ? "border" : "content"), i, r) + "px");
    }
    function P(e, t, n, i, r) {
        return new P.prototype.init(e, t, n, i, r);
    }
    function O() {
        ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(O) : e.setTimeout(O, he.fx.interval), 
        he.fx.tick());
    }
    function _() {
        return e.setTimeout(function() {
            ft = void 0;
        }), ft = he.now();
    }
    function W(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Oe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function U(e, t, n) {
        for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function B(e, t) {
        var n, i, r, o, s;
        for (n in e) if (i = he.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], 
        o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) {
            o = s.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
    }
    function $(e, t, n) {
        var i, r, o = 0, s = $.prefilters.length, a = he.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (r) return !1;
            for (var t = ft || _(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
            return a.notifyWith(e, [ u, i, n ]), i < 1 && s ? n : (s || a.notifyWith(e, [ u, 1, 0 ]), 
            a.resolveWith(e, [ u ]), !1);
        }, u = a.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {
                specialEasing: {},
                easing: he.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ft || _(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = he.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i;
            },
            stop: function(t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) u.tweens[n].run(1);
                return t ? (a.notifyWith(e, [ u, 1, 0 ]), a.resolveWith(e, [ u, t ])) : a.rejectWith(e, [ u, t ]), 
                this;
            }
        }), c = u.props;
        for (B(c, u.opts.specialEasing); o < s; o++) if (i = $.prefilters[o].call(u, e, c, u.opts)) return he.isFunction(i.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(i.stop, i)), 
        i;
        return he.map(c, U, u), he.isFunction(u.opts.start) && u.opts.start.call(e, u), 
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), 
        he.fx.timer(he.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u;
    }
    function Q(e) {
        return (e.match(De) || []).join(" ");
    }
    function X(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function G(e, t, n, i) {
        var r;
        if (Array.isArray(t)) he.each(t, function(t, r) {
            n || Ft.test(e) ? i(e, r) : G(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
        }); else if (n || "object" !== he.type(t)) i(e, t); else for (r in t) G(e + "[" + r + "]", t[r], n, i);
    }
    function Y(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(De) || [];
            if (he.isFunction(n)) for (;i = o[r++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function V(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, he.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), 
                r(u), !1);
            }), l;
        }
        var o = {}, s = e === Ht;
        return r(t.dataTypes[0]) || !o["*"] && r("*");
    }
    function K(e, t) {
        var n, i, r = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e;
    }
    function J(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (r in a) if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break;
        }
        if (l[0] in n) o = l[0]; else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break;
                }
                s || (s = r);
            }
            o = o || s;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
    }
    function Z(e, t, n, i) {
        var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o])) for (r in u) if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    var ee = [], te = e.document, ne = Object.getPrototypeOf, ie = ee.slice, re = ee.concat, oe = ee.push, se = ee.indexOf, ae = {}, le = ae.toString, ue = ae.hasOwnProperty, ce = ue.toString, pe = ce.call(Object), de = {}, fe = "3.2.1", he = function(e, t) {
        return new he.fn.init(e, t);
    }, me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, ve = /-([a-z])/g, ye = function(e, t) {
        return t.toUpperCase();
    };
    he.fn = he.prototype = {
        jquery: fe,
        constructor: he,
        length: 0,
        toArray: function() {
            return ie.call(this);
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return he.each(this, e);
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), 
        a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], 
        i = e[t], s !== i && (u && i && (he.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, 
        o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s;
    }, he.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e);
        },
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof (n = ue.call(t, "constructor") && t.constructor) || ce.call(n) !== pe));
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            n(e);
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(ve, ye);
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [ e ] : e) : oe.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var r, o, s = 0, a = [];
            if (i(e)) for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o); else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return re.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), 
            r = function() {
                return e.apply(t || this, i.concat(ie.call(arguments)));
            }, r.guid = e.guid = e.guid || he.guid++, r;
        },
        now: Date.now,
        support: de
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), 
    he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ae["[object " + t + "]"] = t.toLowerCase();
    });
    var be = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, c, d, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== L && N(t), t = t || L, q)) {
                if (11 !== h && (l = me.exec(e))) if (r = l[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n;
                    } else if (f && (s = f.getElementById(r)) && R(t, s) && s.id === r) return n.push(s), 
                    n;
                } else {
                    if (l[2]) return V.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return V.apply(n, t.getElementsByClassName(r)), 
                    n;
                }
                if (x.qsa && !B[e + " "] && (!M || !M.test(e))) {
                    if (1 !== h) f = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = H), 
                        o = (c = C(e)).length; o--; ) c[o] = "#" + a + " " + p(c[o]);
                        d = c.join(","), f = ge.test(e) && u(t.parentNode) || t;
                    }
                    if (d) try {
                        return V.apply(n, f.querySelectorAll(d)), n;
                    } catch (e) {} finally {
                        a === H && t.removeAttribute("id");
                    }
                }
            }
            return F(e.replace(oe, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[H] = !0, e;
        }
        function r(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = t;
        }
        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function c() {}
        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function d(e, t, n) {
            var i = t.dir, r = t.next, o = r || i, s = n && "parentNode" === o, a = _++;
            return t.first ? function(t, n, r) {
                for (;t = t[i]; ) if (1 === t.nodeType || s) return e(t, n, r);
                return !1;
            } : function(t, n, l) {
                var u, c, p, d = [ O, a ];
                if (l) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || s) if (p = t[H] || (t[H] = {}), 
                c = p[t.uniqueID] || (p[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((u = c[o]) && u[0] === O && u[1] === a) return d[2] = u[2];
                    if (c[o] = d, d[2] = e(t, n, l)) return !0;
                }
                return !1;
            };
        }
        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i;
        }
        function m(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), 
            u && t.push(a)));
            return s;
        }
        function g(e, t, n, r, o, s) {
            return r && !r[H] && (r = g(r)), o && !o[H] && (o = g(o, s)), i(function(i, s, a, l) {
                var u, c, p, d = [], f = [], g = s.length, v = i || h(t || "*", a.nodeType ? [ a ] : a, []), y = !e || !i && t ? v : m(v, d, e, a, l), b = n ? o || (i ? e : g || r) ? [] : s : y;
                if (n && n(y, b, a, l), r) for (u = m(b, f), r(u, [], a, l), c = u.length; c--; ) (p = u[c]) && (b[f[c]] = !(y[f[c]] = p));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--; ) (p = b[c]) && u.push(y[c] = p);
                            o(null, b = [], u, l);
                        }
                        for (c = b.length; c--; ) (p = b[c]) && (u = o ? J(i, p) : d[c]) > -1 && (i[u] = !(s[u] = p));
                    }
                } else b = m(b === s ? b.splice(g, b.length) : b), o ? o(null, s, b, l) : V.apply(s, b);
            });
        }
        function v(e) {
            for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                return e === t;
            }, s, !0), u = d(function(e) {
                return J(t, e) > -1;
            }, s, !0), c = [ function(e, n, i) {
                var r = !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null, r;
            } ]; a < r; a++) if (n = w.relative[e[a].type]) c = [ d(f(c), n) ]; else {
                if ((n = w.filter[e[a].type].apply(null, e[a].matches))[H]) {
                    for (i = ++a; i < r && !w.relative[e[i].type]; i++) ;
                    return g(a > 1 && f(c), a > 1 && p(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(oe, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && p(e));
                }
                c.push(n);
            }
            return f(c);
        }
        function y(e, n) {
            var r = n.length > 0, o = e.length > 0, s = function(i, s, a, l, u) {
                var c, p, d, f = 0, h = "0", g = i && [], v = [], y = A, b = i || o && w.find.TAG("*", u), x = O += null == y ? 1 : Math.random() || .1, E = b.length;
                for (u && (A = s === L || s || u); h !== E && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (p = 0, s || c.ownerDocument === L || (N(c), a = !q); d = e[p++]; ) if (d(c, s || L, a)) {
                            l.push(c);
                            break;
                        }
                        u && (O = x);
                    }
                    r && ((c = !d && c) && f--, i && g.push(c));
                }
                if (f += h, r && h !== f) {
                    for (p = 0; d = n[p++]; ) d(g, v, s, a);
                    if (i) {
                        if (f > 0) for (;h--; ) g[h] || v[h] || (v[h] = G.call(l));
                        v = m(v);
                    }
                    V.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                }
                return u && (O = x, A = y), g;
            };
            return r ? i(s) : s;
        }
        var b, x, w, E, T, C, k, F, A, S, D, N, L, j, q, M, z, I, R, H = "sizzle" + 1 * new Date(), P = e.document, O = 0, _ = 0, W = n(), U = n(), B = n(), $ = function(e, t) {
            return e === t && (D = !0), 0;
        }, Q = {}.hasOwnProperty, X = [], G = X.pop, Y = X.push, V = X.push, K = X.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie), ce = new RegExp("^" + te + "$"), pe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, de = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, we = function() {
            N();
        }, Ee = d(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            V.apply(X = K.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType;
        } catch (e) {
            V = {
                apply: X.length ? function(e, t) {
                    Y.apply(e, K.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : P;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, j = L.documentElement, 
            q = !T(L), P !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), 
            x.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), x.getElementsByTagName = r(function(e) {
                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length;
            }), x.getElementsByClassName = he.test(L.getElementsByClassName), x.getById = r(function(e) {
                return j.appendChild(e).id = H, !L.getElementsByName || !L.getElementsByName(H).length;
            }), x.getById ? (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && q) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && q) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && q) return t.getElementsByClassName(e);
            }, z = [], M = [], (x.qsa = he.test(L.querySelectorAll)) && (r(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + H + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), 
                e.querySelectorAll("a#" + H + "+*").length || M.push(".#.+[+~]");
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), 
                j.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), M.push(",.*:");
            })), (x.matchesSelector = he.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), z.push("!=", ie);
            }), M = M.length && new RegExp(M.join("|")), z = z.length && new RegExp(z.join("|")), 
            t = he.test(j.compareDocumentPosition), R = t || he.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, $ = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === P && R(P, e) ? -1 : t === L || t.ownerDocument === P && R(P, t) ? 1 : S ? J(S, e) - J(S, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [ e ], l = [ t ];
                if (!r || !o) return e === L ? -1 : t === L ? 1 : r ? -1 : o ? 1 : S ? J(S, e) - J(S, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (;a[i] === l[i]; ) i++;
                return i ? s(a[i], l[i]) : a[i] === P ? -1 : l[i] === P ? 1 : 0;
            }, L) : L;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && N(e), n = n.replace(le, "='$1']"), x.matchesSelector && q && !B[n + " "] && (!z || !z.test(n)) && (!M || !M.test(n))) try {
                var i = I.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (e) {}
            return t(n, L, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && N(e), R(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && N(e);
            var n = w.attrHandle[t.toLowerCase()], i = n && Q.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
            return void 0 !== i ? i : x.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(be, xe);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (D = !x.detectDuplicates, S = !x.sortStable && e.slice(0), e.sort($), D) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return S = null, e;
        }, E = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += E(t);
            return n;
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var u, c, p, d, f, h, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (;m; ) {
                                    for (d = t; d = d[m]; ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ s ? g.firstChild : g.lastChild ], s && y) {
                                for (b = (f = (u = (c = (p = (d = g)[H] || (d[H] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === O && u[1]) && u[2], 
                                d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || h.pop(); ) if (1 === d.nodeType && ++b && d === t) {
                                    c[e] = [ O, f, b ];
                                    break;
                                }
                            } else if (y && (d = t, p = d[H] || (d[H] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), 
                            u = c[e] || [], f = u[0] === O && u[1], b = f), !1 === b) for (;(d = ++f && d && d[m] || (b = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (p = d[H] || (d[H] = {}), 
                            c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e] = [ O, b ]), d !== t)); ) ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (r = [ e, e, "", n ], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; ) i = J(e, r[s]), e[i] = !(t[i] = r[s]);
                    }) : function(e) {
                        return o(e, 0, r);
                    }) : o;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], r = k(e.replace(oe, "$1"));
                    return r[H] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye), function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === j;
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !w.pseudos.empty(e);
                },
                header: function(e) {
                    return fe.test(e.nodeName);
                },
                input: function(e) {
                    return de.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: l(function() {
                    return [ 0 ];
                }),
                last: l(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: l(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(b);
        for (b in {
            submit: !0,
            reset: !0
        }) w.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(b);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), C = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = w.preFilter; a; ) {
                i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), 
                i = !1, (r = ae.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) !(r = pe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), 
                o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? t.error(e) : U(e, l).slice(0);
        }, k = t.compile = function(e, t) {
            var n, i = [], r = [], o = B[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--; ) (o = v(t[n]))[H] ? i.push(o) : r.push(o);
                (o = B(e, y(r, i))).selector = e;
            }
            return o;
        }, F = t.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e, d = !i && C(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && q && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]); ) if ((l = w.find[a]) && (i = l(s.matches[0].replace(ve, ye), ge.test(o[0].type) && u(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && p(o))) return V.apply(n, i), n;
                    break;
                }
            }
            return (c || k(e, d))(i, t, !q, n, !t || ge.test(e) && u(t.parentNode) || t), n;
        }, x.sortStable = H.split("").sort($).join("") === H, x.detectDuplicates = !!D, 
        N(), x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"));
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), x.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), r(function(e) {
            return null == e.getAttribute("disabled");
        }) || o(Z, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), t;
    }(e);
    he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, 
    he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
    var xe = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (r && he(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, we = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, Ee = he.expr.match.needsContext, Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Ce = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [ i ] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, he.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < i; t++) if (he.contains(r[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, r[t], n);
            return i > 1 ? he.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0));
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Ee.test(e) ? he(e) : e || [], !1).length;
        }
    });
    var ke, Fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : Fe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), 
                Te.test(i[1]) && he.isPlainObject(t)) for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this);
    }).prototype = he.fn, ke = he(te);
    var Ae = /^(?:parents|prev(?:Until|All))/, Se = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && he(e);
            if (!Ee.test(e)) for (;i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return xe(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n);
        },
        next: function(e) {
            return s(e, "nextSibling");
        },
        prev: function(e) {
            return s(e, "previousSibling");
        },
        nextAll: function(e) {
            return xe(e, "nextSibling");
        },
        prevAll: function(e) {
            return xe(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n);
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return we(e.firstChild);
        },
        contents: function(e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), 
            he.merge([], e.childNodes));
        }
    }, function(e, t) {
        he.fn[e] = function(n, i) {
            var r = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), 
            this.length > 1 && (Se[e] || he.uniqueSort(r), Ae.test(e) && r.reverse()), this.pushStack(r);
        };
    });
    var De = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : he.extend({}, e);
        var t, n, i, r, o = [], s = [], l = -1, u = function() {
            for (r = r || e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < o.length; ) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, 
            n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
        }, c = {
            add: function() {
                return o && (n && !t && (l = o.length - 1, s.push(n)), function t(n) {
                    he.each(n, function(n, i) {
                        he.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== he.type(i) && t(i);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove: function() {
                return he.each(arguments, function(e, t) {
                    for (var n; (n = he.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? he.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return r = s = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return r = s = [], n || t || (o = n = ""), this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(e, n) {
                return r || (n = n || [], n = [ e, n.slice ? n.slice() : n ], s.push(n), t || u()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return c;
    }, he.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2 ], [ "resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", r = {
                state: function() {
                    return i;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return r.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return he.Deferred(function(t) {
                        he.each(n, function(n, i) {
                            var r = he.isFunction(e[i[4]]) && e[i[4]];
                            o[i[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, i, r) {
                    function o(t, n, i, r) {
                        return function() {
                            var a = this, c = arguments, p = function() {
                                var e, p;
                                if (!(t < s)) {
                                    if ((e = i.apply(a, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    p = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(p) ? r ? p.call(e, o(s, n, l, r), o(s, n, u, r)) : (s++, 
                                    p.call(e, o(s, n, l, r), o(s, n, u, r), o(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, 
                                    c = [ e ]), (r || n.resolveWith)(a, c));
                                }
                            }, d = r ? p : function() {
                                try {
                                    p();
                                } catch (e) {
                                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== u && (a = void 0, 
                                    c = [ e ]), n.rejectWith(a, c));
                                }
                            };
                            t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), 
                            e.setTimeout(d));
                        };
                    }
                    var s = 0;
                    return he.Deferred(function(e) {
                        n[0][3].add(o(0, e, he.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : l)), 
                        n[2][3].add(o(0, e, he.isFunction(i) ? i : u));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? he.extend(e, r) : r;
                }
            }, o = {};
            return he.each(n, function(e, t) {
                var s = t[2], a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a;
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = s.fireWith;
            }), r.promise(o), t && t.call(o, o), o;
        },
        when: function(e) {
            var t = arguments.length, n = t, i = Array(n), r = ie.call(arguments), o = he.Deferred(), s = function(e) {
                return function(n) {
                    i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r);
                };
            };
            if (t <= 1 && (c(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || he.isFunction(r[n] && r[n].then))) return o.then();
            for (;n--; ) c(r[n], s(n), o.reject);
            return o.promise();
        }
    });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, he.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var Le = he.Deferred();
    he.fn.ready = function(e) {
        return Le.then(e).catch(function(e) {
            he.readyException(e);
        }), this;
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Le.resolveWith(te, [ he ]));
        }
    }), he.ready.then = Le.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", p), 
    e.addEventListener("load", p));
    var je = function(e, t, n, i, r, o, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === he.type(n)) {
            r = !0;
            for (a in n) je(e, t, a, n[a], !0, o, s);
        } else if (void 0 !== i && (r = !0, he.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), 
        t = null) : (u = t, t = function(e, t, n) {
            return u.call(he(e), n);
        })), t)) for (;a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }, qe = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, qe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[he.camelCase(t)] = n; else for (i in t) r[he.camelCase(i)] = t[i];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [ t ] : t.match(De) || []), 
                    n = t.length;
                    for (;n--; ) delete i[t[n]];
                }
                (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t);
        }
    };
    var Me = new d(), ze = new d(), Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Re = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return ze.hasData(e) || Me.hasData(e);
        },
        data: function(e, t, n) {
            return ze.access(e, t, n);
        },
        removeData: function(e, t) {
            ze.remove(e, t);
        },
        _data: function(e, t, n) {
            return Me.access(e, t, n);
        },
        _removeData: function(e, t) {
            Me.remove(e, t);
        }
    }), he.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = ze.get(o), 1 === o.nodeType && !Me.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = he.camelCase(i.slice(5)), 
                    h(o, i, r[i]));
                    Me.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                ze.set(this, e);
            }) : je(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = ze.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n;
                } else this.each(function() {
                    ze.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                ze.remove(this, e);
            });
        }
    }), he.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Me.get(e, t), n && (!i || Array.isArray(n) ? i = Me.access(e, t, he.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t), i = n.length, r = n.shift(), o = he._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, function() {
                he.dequeue(e, t);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Me.get(e, n) || Me.access(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    Me.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = he.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = Me.get(o[s], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), r.promise(t);
        }
    });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"), Oe = [ "Top", "Right", "Bottom", "Left" ], _e = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display");
    }, We = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = s[o];
        return r;
    }, Ue = {};
    he.fn.extend({
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                _e(this) ? he(this).show() : he(this).hide();
            });
        }
    });
    var Be = /^(?:checkbox|radio)$/i, $e = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Qe = /^$|\/(?:java|ecma)script/i, Xe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, 
    Xe.th = Xe.td;
    var Ge = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")), t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ye = te.documentElement, Ve = /^key/, Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Je = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, p, d, f, h, m, g = Me.get(e);
            if (g) for (n.handler && (o = n, n = o.handler, r = o.selector), r && he.find.matchesSelector(Ye, r), 
            n.guid || (n.guid = he.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0;
            }), u = (t = (t || "").match(De) || [ "" ]).length; u--; ) a = Je.exec(t[u]) || [], 
            f = m = a[1], h = (a[2] || "").split(".").sort(), f && (p = he.event.special[f] || {}, 
            f = (r ? p.delegateType : p.bindType) || f, p = he.event.special[f] || {}, c = he.extend({
                type: f,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && he.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, o), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && !1 !== p.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), 
            p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), 
            he.event.global[f] = !0);
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, p, d, f, h, m, g = Me.hasData(e) && Me.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(De) || [ "" ]).length; u--; ) if (a = Je.exec(t[u]) || [], 
                f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                    for (p = he.event.special[f] || {}, d = l[f = (i ? p.delegateType : p.bindType) || f] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--; ) c = d[o], 
                    !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), 
                    c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                    s && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, g.handle) || he.removeEvent(e, f, g.handle), 
                    delete l[f]);
                } else for (f in l) he.event.remove(e, f + t[u], n, i, !0);
                he.isEmptyObject(l) && Me.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = he.event.fix(e), l = new Array(arguments.length), u = (Me.get(this, "events") || {})[a.type] || [], c = he.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = he.event.handlers.call(this, a, u), t = 0; (r = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = r.elem, 
                n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, 
                a.data = o.data, void 0 !== (i = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), 
                a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? he(r, this).index(u) > -1 : he.find(r, this, null, [ u ]).length), 
                s[r] && o.push(i);
                o.length && a.push({
                    elem: u,
                    handlers: o
                });
            }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a;
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return r(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, he.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, he.Event = function(e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : E, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void (this[he.expando] = !0)) : new he.Event(e, t);
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: E,
        isPropagationStopped: E,
        isImmediatePropagationStopped: E,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || he.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), he.fn.extend({
        on: function(e, t, n, i) {
            return C(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return C(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = E), 
            this.each(function() {
                he.event.remove(this, e, n, t);
            });
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ze, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (s = y(a), 
            o = y(e), i = 0, r = o.length; i < r; i++) D(o[i], s[i]);
            if (t) if (n) for (o = o || y(e), s = s || y(a), i = 0, r = o.length; i < r; i++) S(o[i], s[i]); else S(e, a);
            return (s = y(a, "script")).length > 0 && b(s, !l && y(e, "script")), a;
        },
        cleanData: function(e) {
            for (var t, n, i, r = he.event.special, o = 0; void 0 !== (n = e[o]); o++) if (qe(n)) {
                if (t = n[Me.expando]) {
                    if (t.events) for (i in t.events) r[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                    n[Me.expando] = void 0;
                }
                n[ze.expando] && (n[ze.expando] = void 0);
            }
        }
    }), he.fn.extend({
        detach: function(e) {
            return L(this, e, !0);
        },
        remove: function(e) {
            return L(this, e);
        },
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return N(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t);
            });
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Xe[($e.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return N(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var n, i = [], r = he(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), 
            he(r[s])[t](n), oe.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var rt = /^margin/, ot = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"), st = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", Ye.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", 
                r = "4px" === t.marginRight, Ye.removeChild(s), a = null;
            }
        }
        var n, i, r, o, s = te.createElement("div"), a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        s.appendChild(a), he.extend(de, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return t(), i;
            },
            pixelMarginRight: function() {
                return t(), r;
            },
            reliableMarginLeft: function() {
                return t(), o;
            }
        }));
    }();
    var at = /^(none|table(?!-c[ea]).+)/, lt = /^--/, ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ct = {
        letterSpacing: "0",
        fontWeight: "400"
    }, pt = [ "Webkit", "Moz", "ms" ], dt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = j(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = he.camelCase(t), l = lt.test(t), u = e.style;
                return l || (t = z(a)), s = he.cssHooks[t] || he.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : ("string" === (o = typeof n) && (r = Pe.exec(n)) && r[1] && (n = m(e, t, r), 
                o = "number"), void (null != n && n === n && ("number" === o && (n += r && r[3] || (he.cssNumber[a] ? "" : "px")), 
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))));
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = he.camelCase(t);
            return lt.test(t) || (t = z(a)), (s = he.cssHooks[t] || he.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), 
            void 0 === r && (r = j(e, t, i)), "normal" === r && t in ct && (r = ct[t]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), he.each([ "height", "width" ], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !at.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, i) : We(e, ut, function() {
                    return H(e, t, i);
                });
            },
            set: function(e, n, i) {
                var r, o = i && st(e), s = i && R(e, t, i, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return s && (r = Pe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), 
                I(0, n, s);
            }
        };
    }), he.cssHooks.marginLeft = q(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) r[e + Oe[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
            }
        }, rt.test(e) || (he.cssHooks[e + t].set = I);
    }), he.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = st(e), r = t.length; s < r; s++) o[t[s]] = he.css(e, t[s], !1, i);
                    return o;
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), he.Tween = P, P.prototype = {
        constructor: P,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = o || (he.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : P.propHooks._default.set(this), this;
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, he.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, he.fx = P.prototype.init, he.fx.step = {};
    var ft, ht, mt = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    he.Animation = he.extend($, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, Pe.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            he.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(De);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], $.tweeners[n] = $.tweeners[n] || [], 
            $.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var i, r, o, s, a, l, u, c, p = "width" in t || "height" in t, d = this, f = {}, h = e.style, m = e.nodeType && _e(e), g = Me.get(e, "fxshow");
            n.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, 
            s.empty.fire = function() {
                s.unqueued || a();
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, he.queue(e, "fx").length || s.empty.fire();
                });
            }));
            for (i in t) if (r = t[i], mt.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0;
                }
                f[i] = g && g[i] || he.style(e, i);
            }
            if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) {
                p && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                null == (u = g && g.display) && (u = Me.get(e, "display")), "none" === (c = he.css(e, "display")) && (u ? c = u : (v([ e ], !0), 
                u = e.style.display || u, c = he.css(e, "display"), v([ e ]))), ("inline" === c || "inline-block" === c && null != u) && "none" === he.css(e, "float") && (l || (d.done(function() {
                    h.display = u;
                }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), 
                n.overflow && (h.overflow = "hidden", d.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                })), l = !1;
                for (i in f) l || (g ? "hidden" in g && (m = g.hidden) : g = Me.access(e, "fxshow", {
                    display: u
                }), o && (g.hidden = !m), m && v([ e ], !0), d.done(function() {
                    m || v([ e ]), Me.remove(e, "fxshow");
                    for (i in f) he.style(e, i, f[i]);
                })), l = U(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, 
                l.start = 0));
            }
        } ],
        prefilter: function(e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e);
        }
    }), he.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue);
        }, i;
    }, he.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(_e).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var r = he.isEmptyObject(e), o = he.speed(t, n, i), s = function() {
                var t = $(this, he.extend({}, e), o);
                (r || Me.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, r = null != e && e + "queueHooks", o = he.timers, s = Me.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && gt.test(r) && i(s[r]);
                for (r = o.length; r--; ) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), 
                t = !1, o.splice(r, 1));
                !t && n || he.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = Me.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = he.timers, s = i ? i.length : 0;
                for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), he.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = he.fn[t];
        he.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r);
        };
    }), he.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        he.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), he.timers = [], he.fx.tick = function() {
        var e, t = 0, n = he.timers;
        for (ft = he.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), ft = void 0;
    }, he.fx.timer = function(e) {
        he.timers.push(e), he.fx.start();
    }, he.fx.interval = 13, he.fx.start = function() {
        ht || (ht = !0, O());
    }, he.fx.stop = function() {
        ht = null;
    }, he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, he.fn.delay = function(t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r);
            };
        });
    }, function() {
        var e = te.createElement("input"), t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = t.selected, (e = te.createElement("input")).value = "t", 
        e.type = "radio", de.radioValue = "t" === e.value;
    }();
    var vt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return je(this, he.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e);
            });
        }
    }), he.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)), 
            void 0 !== n ? null === n ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = he.find.attr(e, t)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(De);
            if (r && 1 === e.nodeType) for (;n = r[i++]; ) e.removeAttribute(n);
        }
    }), vt = {
        set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = yt[s], yt[s] = r, r = null != n(e, t, i) ? s : null, yt[s] = o), 
            r;
        };
    });
    var bt = /^(?:input|select|textarea|button)$/i, xt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return je(this, he.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e];
            });
        }
    }), he.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, 
            r = he.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), de.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), he.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        he.propFix[this.toLowerCase()] = this;
    }), he.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).addClass(e.call(this, t, X(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[l++]; ) if (r = X(n), 
            i = 1 === n.nodeType && " " + Q(r) + " ") {
                for (s = 0; o = t[s++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = Q(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).removeClass(e.call(this, t, X(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[l++]; ) if (r = X(n), 
            i = 1 === n.nodeType && " " + Q(r) + " ") {
                for (s = 0; o = t[s++]; ) for (;i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                r !== (a = Q(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                he(this).toggleClass(e.call(this, n, X(this), t), t);
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n) for (i = 0, r = he(this), o = e.match(De) || []; t = o[i++]; ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = X(this)) && Me.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Me.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + Q(X(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = he.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, he(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = he.map(r, function(e) {
                    return null == e ? "" : e + "";
                })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
            })) : r ? (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0;
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : Q(he.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [], u = a ? s + 1 : o.length;
                    for (i = s < 0 ? u : a ? s : 0; i < u; i++) if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                        if (t = he(n).val(), a) return t;
                        l.push(t);
                    }
                    return l;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = he.makeArray(t), s = r.length; s--; ) i = r[s], 
                    (i.selected = he.inArray(he.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), he.each([ "radio", "checkbox" ], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1;
            }
        }, de.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, p, d = [ i || te ], f = ue.call(t, "type") ? t.type : t, h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), 
            f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), 
            t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : he.makeArray(n, [ t ]), 
            p = he.event.special[f] || {}, r || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!r && !p.noBubble && !he.isWindow(i)) {
                    for (l = p.delegateType || f, Et.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
                    a = s;
                    a === (i.ownerDocument || te) && d.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = d[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? l : p.bindType || f, 
                (c = (Me.get(s, "events") || {})[t.type] && Me.get(s, "handle")) && c.apply(s, n), 
                (c = u && s[u]) && c.apply && qe(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), n) || !qe(i) || u && he.isFunction(i[f]) && !he.isWindow(i) && ((a = i[u]) && (i[u] = null), 
                he.event.triggered = f, i[f](), he.event.triggered = void 0, a && (i[u] = a)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var i = he.extend(new he.Event(), n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(i, null, t);
        }
    }), he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0);
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), de.focusin = "onfocusin" in e, de.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e));
        };
        he.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this, r = Me.access(i, t);
                r || i.addEventListener(e, n, !0), Me.access(i, t, (r || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, r = Me.access(i, t) - 1;
                r ? Me.access(i, t, r) : (i.removeEventListener(e, n, !0), Me.remove(i, t));
            }
        };
    });
    var Tt = e.location, Ct = he.now(), kt = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), 
        n;
    };
    var Ft = /\[\]$/, At = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = he.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) G(n, e[n], t, r);
        return i.join("&");
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Dt.test(this.nodeName) && !St.test(e) && (this.checked || !Be.test(e));
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                };
            }).get();
        }
    });
    var Nt = /%20/g, Lt = /#.*$/, jt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, zt = /^(?:GET|HEAD)$/, It = /^\/\//, Rt = {}, Ht = {}, Pt = "*/".concat("*"), Ot = te.createElement("a");
    Ot.href = Tt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: Mt.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, he.ajaxSettings), t) : K(he.ajaxSettings, e);
        },
        ajaxPrefilter: Y(Rt),
        ajaxTransport: Y(Ht),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, d, f, x, w, E = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, 
                u = t >= 200 && t < 300 || 304 === t, i && (x = J(h, T, i)), x = Z(h, x, T, u), 
                u ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w), 
                (w = T.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = x.state, 
                d = x.data, f = x.error, u = !f)) : (f = E, !t && E || (E = "error", t < 0 && (t = 0))), 
                T.status = t, T.statusText = (n || E) + "", u ? v.resolveWith(m, [ d, E, T ]) : v.rejectWith(m, [ T, E, f ]), 
                T.statusCode(b), b = void 0, p && g.trigger(u ? "ajaxSuccess" : "ajaxError", [ T, h, u ? d : f ]), 
                y.fireWith(m, [ T, E ]), p && (g.trigger("ajaxComplete", [ T, h ]), --he.active || he.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, p, d, f, h = he.ajaxSetup({}, n), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? he(m) : he.event, v = he.Deferred(), y = he.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, E = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!a) for (a = {}; t = qt.exec(s); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return c ? s : null;
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (c) T.always(e[T.status]); else for (t in e) b[t] = [ b[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || E;
                    return r && r.abort(t), i(0, t), this;
                }
            };
            if (v.promise(T), h.url = ((t || h.url || Tt.href) + "").replace(It, Tt.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [ "" ], 
            null == h.crossDomain) {
                u = te.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Ot.protocol + "//" + Ot.host != u.protocol + "//" + u.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), 
            V(Rt, h, n, T), c) return T;
            (p = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), 
            h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), o = h.url.replace(Lt, ""), 
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (f = h.url.slice(o.length), 
            h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(jt, "$1"), 
            f = (kt.test(o) ? "&" : "?") + "_=" + Ct++ + f), h.url = o + f), h.ifModified && (he.lastModified[o] && T.setRequestHeader("If-Modified-Since", he.lastModified[o]), 
            he.etag[o] && T.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), 
            T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) T.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, T, h) || c)) return T.abort();
            if (E = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), r = V(Ht, h, n, T)) {
                if (T.readyState = 1, p && g.trigger("ajaxSend", [ T, h ]), c) return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout");
                }, h.timeout));
                try {
                    c = !1, r.send(x, i);
                } catch (e) {
                    if (c) throw e;
                    i(-1, e);
                }
            } else i(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script");
        }
    }), he.each([ "get", "post" ], function(e, t) {
        he[t] = function(e, n, i, r) {
            return he.isFunction(n) && (r = r || i, i = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, he.isPlainObject(e) && e));
        };
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = he(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(n) {
                he(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes);
            }), this;
        }
    }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e);
    }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var _t = {
        0: 200,
        1223: 204
    }, Wt = he.ajaxSettings.xhr();
    de.cors = !!Wt && "withCredentials" in Wt, de.ajax = Wt = !!Wt, he.ajaxTransport(function(t) {
        var n, i;
        if (de.cors || Wt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(_t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e;
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type);
                    }), te.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Ut = [], Bt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || he.expando + "_" + Ct++;
            return this[e] = !0, e;
        }
    }), he.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        a ? t[a] = t[a].replace(Bt, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), 
        t.converters["script json"] = function() {
            return s || he.error(r + " was not called"), s[0];
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === o ? he(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, 
            Ut.push(r)), s && he.isFunction(o) && o(s[0]), s = o = void 0;
        }), "script";
    }), de.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), he.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), 
        i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), 
        r = Te.exec(e), o = !n && [], r ? [ t.createElement(r[1]) ] : (r = x([ e ], t, o), 
        o && o.length && he(o).remove(), he.merge([], r.childNodes));
    }, he.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = Q(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && he.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, he.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem;
        }).length;
    }, he.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = he.css(e, "position"), c = he(e), p = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = he.css(e, "top"), 
            l = he.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (i = c.position(), 
            s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), 
            null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), 
            "using" in t ? t.using.call(e, p) : c.css(p);
        }
    }, he.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                he.offset.setOffset(this, e, t);
            });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, 
            n = t.documentElement, r = t.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), r(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + he.css(e[0], "borderTopWidth", !0),
                    left: i.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - he.css(n, "marginTop", !0),
                    left: t.left - i.left - he.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position"); ) e = e.offsetParent;
                return e || Ye;
            });
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(i) {
            return je(this, function(e, i, r) {
                var o;
                return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r);
            }, e, i, arguments.length);
        };
    }), he.each([ "top", "left" ], function(e, t) {
        he.cssHooks[t] = q(de.pixelPosition, function(e, n) {
            if (n) return n = j(e, t), ot.test(n) ? he(e).position()[t] + "px" : n;
        });
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            he.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === o ? "margin" : "border");
                return je(this, function(t, n, r) {
                    var o;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? he.css(t, n, a) : he.style(t, n, r, a);
                }, t, s ? r : void 0, s);
            };
        });
    }), he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), he.holdReady = function(e) {
        e ? he.readyWait++ : he.ready(!0);
    }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he;
    });
    var $t = e.jQuery, Qt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Qt), t && e.jQuery === he && (e.jQuery = $t), he;
    }, t || (e.jQuery = e.$ = he), he;
}), function() {
    var e, t, n, i, r, o, s, a, l, u = [].slice, c = function(e, t) {
        function n() {
            this.constructor = e;
        }
        for (var i in t) p.call(t, i) && (e[i] = t[i]);
        return n.prototype = t.prototype, e.prototype = new n(), e.__super__ = t.prototype, 
        e;
    }, p = {}.hasOwnProperty;
    a = function() {}, t = function() {
        function e() {}
        return e.prototype.addEventListener = e.prototype.on, e.prototype.on = function(e, t) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), 
            this._callbacks[e].push(t), this;
        }, e.prototype.emit = function() {
            var e, t, n, i, r;
            if (n = arguments[0], e = 2 <= arguments.length ? u.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, 
            t = this._callbacks[n]) for (i = 0, r = t.length; i < r; i++) t[i].apply(this, e);
            return this;
        }, e.prototype.removeListener = e.prototype.off, e.prototype.removeAllListeners = e.prototype.off, 
        e.prototype.removeEventListener = e.prototype.off, e.prototype.off = function(e, t) {
            var n, i, r, o;
            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
            if (!(n = this._callbacks[e])) return this;
            if (1 === arguments.length) return delete this._callbacks[e], this;
            for (i = r = 0, o = n.length; r < o; i = ++r) if (n[i] === t) {
                n.splice(i, 1);
                break;
            }
            return this;
        }, e;
    }(), (e = function(e) {
        function i(e, t) {
            var n, o, s;
            if (this.element = e, this.version = i.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), 
            this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), 
            !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
            if (this.element.dropzone) throw new Error("Dropzone already attached.");
            if (i.instances.push(this), this.element.dropzone = this, n = null != (s = i.optionsForElement(this.element)) ? s : {}, 
            this.options = r({}, this.defaultOptions, n, null != t ? t : {}), this.options.forceFallback || !i.isBrowserSupported()) return this.options.fallback.call(this);
            if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), 
            !this.options.url) throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, 
            delete this.options.acceptedMimeTypes), null != this.options.renameFilename && (this.options.renameFile = function(e) {
                return function(t) {
                    return e.options.renameFilename.call(e, t.name, t);
                };
            }(this)), this.options.method = this.options.method.toUpperCase(), (o = this.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), 
            !1 !== this.options.previewsContainer && (this.options.previewsContainer ? this.previewsContainer = i.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), 
            this.options.clickable && (!0 === this.options.clickable ? this.clickableElements = [ this.element ] : this.clickableElements = i.getElements(this.options.clickable, "clickable")), 
            this.init();
        }
        var r, o;
        return c(i, t), i.prototype.Emitter = t, i.prototype.events = [ "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete" ], 
        i.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            timeout: 3e4,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            thumbnailMethod: "crop",
            resizeWidth: null,
            resizeHeight: null,
            resizeMimeType: null,
            resizeQuality: .8,
            resizeMethod: "contain",
            filesizeBase: 1e3,
            maxFiles: null,
            params: {},
            headers: null,
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            renameFile: null,
            forceFallback: !1,
            dictDefaultMessage: "",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            dictFileSizeUnits: {
                tb: "TB",
                gb: "GB",
                mb: "MB",
                kb: "KB",
                b: "b"
            },
            init: function() {
                return a;
            },
            accept: function(e, t) {
                return t();
            },
            fallback: function() {
                var e, t, n, r, o, s;
                for (this.element.className = this.element.className + " dz-browser-not-supported", 
                t = 0, n = (o = this.element.getElementsByTagName("div")).length; t < n; t++) e = o[t], 
                /(^| )dz-message($| )/.test(e.className) && (r = e, e.className = "dz-message");
                return r || (r = i.createElement('<div class="dz-message"><span></span></div>'), 
                this.element.appendChild(r)), (s = r.getElementsByTagName("span")[0]) && (null != s.textContent ? s.textContent = this.options.dictFallbackMessage : null != s.innerText && (s.innerText = this.options.dictFallbackMessage)), 
                this.element.appendChild(this.getFallbackForm());
            },
            resize: function(e, t, n, i) {
                var r, o, s;
                if (r = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: e.width,
                    srcHeight: e.height
                }, o = e.width / e.height, null == t && null == n ? (t = r.srcWidth, n = r.srcHeight) : null == t ? t = n * o : null == n && (n = t / o), 
                t = Math.min(t, r.srcWidth), n = Math.min(n, r.srcHeight), s = t / n, r.srcWidth > t || r.srcHeight > n) if ("crop" === i) o > s ? (r.srcHeight = e.height, 
                r.srcWidth = r.srcHeight * s) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / s); else {
                    if ("contain" !== i) throw new Error("Unknown resizeMethod '" + i + "'");
                    o > s ? n = t / o : t = n * o;
                }
                return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, 
                r.trgWidth = t, r.trgHeight = n, r;
            },
            transformFile: function(e, t) {
                return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e);
            },
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
            drop: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragstart: a,
            dragend: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragenter: function(e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragover: function(e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragleave: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            paste: a,
            reset: function() {
                return this.element.classList.remove("dz-started");
            },
            addedfile: function(e) {
                var t, n, r, o, s, a, l, u, c, p, d, f;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), 
                this.previewsContainer) {
                    for (e.previewElement = i.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, 
                    this.previewsContainer.appendChild(e.previewElement), t = 0, o = (l = e.previewElement.querySelectorAll("[data-dz-name]")).length; t < o; t++) l[t].textContent = e.name;
                    for (n = 0, s = (u = e.previewElement.querySelectorAll("[data-dz-size]")).length; n < s; n++) u[n].innerHTML = this.filesize(e.size);
                    for (this.options.addRemoveLinks && (e._removeLink = i.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), 
                    e.previewElement.appendChild(e._removeLink)), p = function(t) {
                        return function(n) {
                            return n.preventDefault(), n.stopPropagation(), e.status === i.UPLOADING ? i.confirm(t.options.dictCancelUploadConfirmation, function() {
                                return t.removeFile(e);
                            }) : t.options.dictRemoveFileConfirmation ? i.confirm(t.options.dictRemoveFileConfirmation, function() {
                                return t.removeFile(e);
                            }) : t.removeFile(e);
                        };
                    }(this), f = [], r = 0, a = (c = e.previewElement.querySelectorAll("[data-dz-remove]")).length; r < a; r++) d = c[r], 
                    f.push(d.addEventListener("click", p));
                    return f;
                }
            },
            removedfile: function(e) {
                var t;
                return e.previewElement && null != (t = e.previewElement) && t.parentNode.removeChild(e.previewElement), 
                this._updateMaxFilesReachedClass();
            },
            thumbnail: function(e, t) {
                var n, i, r, o;
                if (e.previewElement) {
                    for (e.previewElement.classList.remove("dz-file-preview"), n = 0, i = (r = e.previewElement.querySelectorAll("[data-dz-thumbnail]")).length; n < i; n++) (o = r[n]).alt = e.name, 
                    o.src = t;
                    return setTimeout(function() {
                        return e.previewElement.classList.add("dz-image-preview");
                    }, 1);
                }
            },
            error: function(e, t) {
                var n, i, r, o, s;
                if (e.previewElement) {
                    for (e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error), 
                    s = [], n = 0, i = (o = e.previewElement.querySelectorAll("[data-dz-errormessage]")).length; n < i; n++) r = o[n], 
                    s.push(r.textContent = t);
                    return s;
                }
            },
            errormultiple: a,
            processing: function(e) {
                if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.textContent = this.options.dictCancelUpload;
            },
            processingmultiple: a,
            uploadprogress: function(e, t, n) {
                var i, r, o, s, a;
                if (e.previewElement) {
                    for (a = [], i = 0, r = (s = e.previewElement.querySelectorAll("[data-dz-uploadprogress]")).length; i < r; i++) "PROGRESS" === (o = s[i]).nodeName ? a.push(o.value = t) : a.push(o.style.width = t + "%");
                    return a;
                }
            },
            totaluploadprogress: a,
            sending: a,
            sendingmultiple: a,
            success: function(e) {
                if (e.previewElement) return e.previewElement.classList.add("dz-success");
            },
            successmultiple: a,
            canceled: function(e) {
                return this.emit("error", e, "Upload canceled.");
            },
            canceledmultiple: a,
            complete: function(e) {
                if (e._removeLink && (e._removeLink.textContent = this.options.dictRemoveFile), 
                e.previewElement) return e.previewElement.classList.add("dz-complete");
            },
            completemultiple: a,
            maxfilesexceeded: a,
            maxfilesreached: a,
            queuecomplete: a,
            addedfiles: a
        }, r = function() {
            var e, t, n, i, r, o, s;
            for (o = arguments[0], e = 0, n = (r = 2 <= arguments.length ? u.call(arguments, 1) : []).length; e < n; e++) {
                i = r[e];
                for (t in i) s = i[t], o[t] = s;
            }
            return o;
        }, i.prototype.getAcceptedFiles = function() {
            var e, t, n, i, r;
            for (r = [], t = 0, n = (i = this.files).length; t < n; t++) (e = i[t]).accepted && r.push(e);
            return r;
        }, i.prototype.getRejectedFiles = function() {
            var e, t, n, i, r;
            for (r = [], t = 0, n = (i = this.files).length; t < n; t++) (e = i[t]).accepted || r.push(e);
            return r;
        }, i.prototype.getFilesWithStatus = function(e) {
            var t, n, i, r, o;
            for (o = [], n = 0, i = (r = this.files).length; n < i; n++) (t = r[n]).status === e && o.push(t);
            return o;
        }, i.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(i.QUEUED);
        }, i.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(i.UPLOADING);
        }, i.prototype.getAddedFiles = function() {
            return this.getFilesWithStatus(i.ADDED);
        }, i.prototype.getActiveFiles = function() {
            var e, t, n, r, o;
            for (o = [], t = 0, n = (r = this.files).length; t < n; t++) (e = r[t]).status !== i.UPLOADING && e.status !== i.QUEUED || o.push(e);
            return o;
        }, i.prototype.init = function() {
            var e, t, n, r, o, s, a;
            for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), 
            this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(i.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), 
            this.clickableElements.length && (a = function(e) {
                return function() {
                    return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), 
                    e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), 
                    (null == e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), 
                    e.hiddenFileInput.className = "dz-hidden-input", null != e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), 
                    null != e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), 
                    e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", 
                    e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", 
                    e.hiddenFileInput.style.width = "0", document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput), 
                    e.hiddenFileInput.addEventListener("change", function() {
                        var t, n, i, r;
                        if ((n = e.hiddenFileInput.files).length) for (i = 0, r = n.length; i < r; i++) t = n[i], 
                        e.addFile(t);
                        return e.emit("addedfiles", n), a();
                    });
                };
            }(this))(), this.URL = null != (o = window.URL) ? o : window.webkitURL, t = 0, n = (s = this.events).length; t < n; t++) e = s[t], 
            this.on(e, this.options[e]);
            return this.on("uploadprogress", function(e) {
                return function() {
                    return e.updateTotalUploadProgress();
                };
            }(this)), this.on("removedfile", function(e) {
                return function() {
                    return e.updateTotalUploadProgress();
                };
            }(this)), this.on("canceled", function(e) {
                return function(t) {
                    return e.emit("complete", t);
                };
            }(this)), this.on("complete", function(e) {
                return function(t) {
                    if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout(function() {
                        return e.emit("queuecomplete");
                    }, 0);
                };
            }(this)), r = function(e) {
                return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }, this.listeners = [ {
                element: this.element,
                events: {
                    dragstart: function(e) {
                        return function(t) {
                            return e.emit("dragstart", t);
                        };
                    }(this),
                    dragenter: function(e) {
                        return function(t) {
                            return r(t), e.emit("dragenter", t);
                        };
                    }(this),
                    dragover: function(e) {
                        return function(t) {
                            var n;
                            try {
                                n = t.dataTransfer.effectAllowed;
                            } catch (e) {}
                            return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", 
                            r(t), e.emit("dragover", t);
                        };
                    }(this),
                    dragleave: function(e) {
                        return function(t) {
                            return e.emit("dragleave", t);
                        };
                    }(this),
                    drop: function(e) {
                        return function(t) {
                            return r(t), e.drop(t);
                        };
                    }(this),
                    dragend: function(e) {
                        return function(t) {
                            return e.emit("dragend", t);
                        };
                    }(this)
                }
            } ], this.clickableElements.forEach(function(e) {
                return function(t) {
                    return e.listeners.push({
                        element: t,
                        events: {
                            click: function(n) {
                                return (t !== e.element || n.target === e.element || i.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), 
                                !0;
                            }
                        }
                    });
                };
            }(this)), this.enable(), this.options.init.call(this);
        }, i.prototype.destroy = function() {
            var e;
            return this.disable(), this.removeAllFiles(!0), (null != (e = this.hiddenFileInput) ? e.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), 
            this.hiddenFileInput = null), delete this.element.dropzone, i.instances.splice(i.instances.indexOf(this), 1);
        }, i.prototype.updateTotalUploadProgress = function() {
            var e, t, n, i, r, o, s;
            if (o = 0, r = 0, this.getActiveFiles().length) {
                for (t = 0, n = (i = this.getActiveFiles()).length; t < n; t++) o += (e = i[t]).upload.bytesSent, 
                r += e.upload.total;
                s = 100 * o / r;
            } else s = 100;
            return this.emit("totaluploadprogress", s, r, o);
        }, i.prototype._getParamName = function(e) {
            return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "");
        }, i.prototype._renameFile = function(e) {
            return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e);
        }, i.prototype.getFallbackForm = function() {
            var e, t, n, r;
            return (e = this.getExistingFallback()) ? e : (n = '<div class="dz-fallback">', 
            this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), 
            n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', 
            t = i.createElement(n), "FORM" !== this.element.tagName ? (r = i.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(t) : (this.element.setAttribute("enctype", "multipart/form-data"), 
            this.element.setAttribute("method", this.options.method)), null != r ? r : t);
        }, i.prototype.getExistingFallback = function() {
            var e, t, n, i, r, o;
            for (t = function(e) {
                var t, n, i;
                for (n = 0, i = e.length; n < i; n++) if (t = e[n], /(^| )fallback($| )/.test(t.className)) return t;
            }, n = 0, i = (r = [ "div", "form" ]).length; n < i; n++) if (o = r[n], e = t(this.element.getElementsByTagName(o))) return e;
        }, i.prototype.setupEventListeners = function() {
            var e, t, n, i, r, o, s;
            for (s = [], n = 0, i = (o = this.listeners).length; n < i; n++) e = o[n], s.push(function() {
                var n, i;
                n = e.events, i = [];
                for (t in n) r = n[t], i.push(e.element.addEventListener(t, r, !1));
                return i;
            }());
            return s;
        }, i.prototype.removeEventListeners = function() {
            var e, t, n, i, r, o, s;
            for (s = [], n = 0, i = (o = this.listeners).length; n < i; n++) e = o[n], s.push(function() {
                var n, i;
                n = e.events, i = [];
                for (t in n) r = n[t], i.push(e.element.removeEventListener(t, r, !1));
                return i;
            }());
            return s;
        }, i.prototype.disable = function() {
            var e, t, n, i, r;
            for (this.clickableElements.forEach(function(e) {
                return e.classList.remove("dz-clickable");
            }), this.removeEventListeners(), r = [], t = 0, n = (i = this.files).length; t < n; t++) e = i[t], 
            r.push(this.cancelUpload(e));
            return r;
        }, i.prototype.enable = function() {
            return this.clickableElements.forEach(function(e) {
                return e.classList.add("dz-clickable");
            }), this.setupEventListeners();
        }, i.prototype.filesize = function(e) {
            var t, n, i, r, o, s, a, l;
            if (o = 0, s = "b", e > 0) {
                for (n = i = 0, r = (l = [ "tb", "gb", "mb", "kb", "b" ]).length; i < r; n = ++i) if (a = l[n], 
                t = Math.pow(this.options.filesizeBase, 4 - n) / 10, e >= t) {
                    o = e / Math.pow(this.options.filesizeBase, 4 - n), s = a;
                    break;
                }
                o = Math.round(10 * o) / 10;
            }
            return "<strong>" + o + "</strong> " + this.options.dictFileSizeUnits[s];
        }, i.prototype._updateMaxFilesReachedClass = function() {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), 
            this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
        }, i.prototype.drop = function(e) {
            var t, n;
            e.dataTransfer && (this.emit("drop", e), t = e.dataTransfer.files, this.emit("addedfiles", t), 
            t.length && ((n = e.dataTransfer.items) && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t)));
        }, i.prototype.paste = function(e) {
            var t, n;
            if (null != (null != e && null != (n = e.clipboardData) ? n.items : void 0)) return this.emit("paste", e), 
            (t = e.clipboardData.items).length ? this._addFilesFromItems(t) : void 0;
        }, i.prototype.handleFiles = function(e) {
            var t, n, i, r;
            for (r = [], n = 0, i = e.length; n < i; n++) t = e[n], r.push(this.addFile(t));
            return r;
        }, i.prototype._addFilesFromItems = function(e) {
            var t, n, i, r, o;
            for (o = [], i = 0, r = e.length; i < r; i++) null != (n = e[i]).webkitGetAsEntry && (t = n.webkitGetAsEntry()) ? t.isFile ? o.push(this.addFile(n.getAsFile())) : t.isDirectory ? o.push(this._addFilesFromDirectory(t, t.name)) : o.push(void 0) : null != n.getAsFile && (null == n.kind || "file" === n.kind) ? o.push(this.addFile(n.getAsFile())) : o.push(void 0);
            return o;
        }, i.prototype._addFilesFromDirectory = function(e, t) {
            var n, i, r;
            return n = e.createReader(), i = function(e) {
                return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(e) : void 0;
            }, (r = function(e) {
                return function() {
                    return n.readEntries(function(n) {
                        var i, o, s;
                        if (n.length > 0) {
                            for (o = 0, s = n.length; o < s; o++) (i = n[o]).isFile ? i.file(function(n) {
                                if (!e.options.ignoreHiddenFiles || "." !== n.name.substring(0, 1)) return n.fullPath = t + "/" + n.name, 
                                e.addFile(n);
                            }) : i.isDirectory && e._addFilesFromDirectory(i, t + "/" + i.name);
                            r();
                        }
                        return null;
                    }, i);
                };
            }(this))();
        }, i.prototype.accept = function(e, t) {
            return e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : i.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), 
            this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType);
        }, i.prototype.addFile = function(e) {
            return e.upload = {
                progress: 0,
                total: e.size,
                bytesSent: 0,
                filename: this._renameFile(e)
            }, this.files.push(e), e.status = i.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), 
            this.accept(e, function(t) {
                return function(n) {
                    return n ? (e.accepted = !1, t._errorProcessing([ e ], n)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), 
                    t._updateMaxFilesReachedClass();
                };
            }(this));
        }, i.prototype.enqueueFiles = function(e) {
            var t, n, i;
            for (n = 0, i = e.length; n < i; n++) t = e[n], this.enqueueFile(t);
            return null;
        }, i.prototype.enqueueFile = function(e) {
            if (e.status !== i.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
            if (e.status = i.QUEUED, this.options.autoProcessQueue) return setTimeout(function(e) {
                return function() {
                    return e.processQueue();
                };
            }(this), 0);
        }, i.prototype._thumbnailQueue = [], i.prototype._processingThumbnail = !1, i.prototype._enqueueThumbnail = function(e) {
            if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), 
            setTimeout(function(e) {
                return function() {
                    return e._processThumbnailQueue();
                };
            }(this), 0);
        }, i.prototype._processThumbnailQueue = function() {
            var e;
            if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, 
            e = this._thumbnailQueue.shift(), this.createThumbnail(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function(t) {
                return function(n) {
                    return t.emit("thumbnail", e, n), t._processingThumbnail = !1, t._processThumbnailQueue();
                };
            }(this));
        }, i.prototype.removeFile = function(e) {
            if (e.status === i.UPLOADING && this.cancelUpload(e), this.files = l(this.files, e), 
            this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset");
        }, i.prototype.removeAllFiles = function(e) {
            var t, n, r, o;
            for (null == e && (e = !1), n = 0, r = (o = this.files.slice()).length; n < r; n++) ((t = o[n]).status !== i.UPLOADING || e) && this.removeFile(t);
            return null;
        }, i.prototype.resizeImage = function(e, t, r, o, s) {
            return this.createThumbnail(e, t, r, o, !1, function(t) {
                return function(r, o) {
                    var a, l;
                    return null === o ? s(e) : (null == (a = t.options.resizeMimeType) && (a = e.type), 
                    l = o.toDataURL(a, t.options.resizeQuality), "image/jpeg" !== a && "image/jpg" !== a || (l = n.restore(e.dataURL, l)), 
                    s(i.dataURItoBlob(l)));
                };
            }(this));
        }, i.prototype.createThumbnail = function(e, t, n, i, r, o) {
            var s;
            return s = new FileReader(), s.onload = function(a) {
                return function() {
                    e.dataURL = s.result;
                    {
                        if ("image/svg+xml" !== e.type) return a.createThumbnailFromUrl(e, t, n, i, r, o);
                        null != o && o(s.result);
                    }
                };
            }(this), s.readAsDataURL(e);
        }, i.prototype.createThumbnailFromUrl = function(e, t, n, i, r, o, a) {
            var l;
            return l = document.createElement("img"), a && (l.crossOrigin = a), l.onload = function(a) {
                return function() {
                    var u;
                    return u = function(e) {
                        return e(1);
                    }, "undefined" != typeof EXIF && null !== EXIF && r && (u = function(e) {
                        return EXIF.getData(l, function() {
                            return e(EXIF.getTag(this, "Orientation"));
                        });
                    }), u(function(r) {
                        var u, c, p, d, f, h, m, g;
                        switch (e.width = l.width, e.height = l.height, m = a.options.resize.call(a, e, t, n, i), 
                        u = document.createElement("canvas"), c = u.getContext("2d"), u.width = m.trgWidth, 
                        u.height = m.trgHeight, r > 4 && (u.width = m.trgHeight, u.height = m.trgWidth), 
                        r) {
                          case 2:
                            c.translate(u.width, 0), c.scale(-1, 1);
                            break;

                          case 3:
                            c.translate(u.width, u.height), c.rotate(Math.PI);
                            break;

                          case 4:
                            c.translate(0, u.height), c.scale(1, -1);
                            break;

                          case 5:
                            c.rotate(.5 * Math.PI), c.scale(1, -1);
                            break;

                          case 6:
                            c.rotate(.5 * Math.PI), c.translate(0, -u.height);
                            break;

                          case 7:
                            c.rotate(.5 * Math.PI), c.translate(u.width, -u.height), c.scale(-1, 1);
                            break;

                          case 8:
                            c.rotate(-.5 * Math.PI), c.translate(-u.width, 0);
                        }
                        if (s(c, l, null != (p = m.srcX) ? p : 0, null != (d = m.srcY) ? d : 0, m.srcWidth, m.srcHeight, null != (f = m.trgX) ? f : 0, null != (h = m.trgY) ? h : 0, m.trgWidth, m.trgHeight), 
                        g = u.toDataURL("image/png"), null != o) return o(g, u);
                    });
                };
            }(this), null != o && (l.onerror = o), l.src = e.dataURL;
        }, i.prototype.processQueue = function() {
            var e, t, n, i;
            if (t = this.options.parallelUploads, n = this.getUploadingFiles().length, e = n, 
            !(n >= t) && (i = this.getQueuedFiles()).length > 0) {
                if (this.options.uploadMultiple) return this.processFiles(i.slice(0, t - n));
                for (;e < t; ) {
                    if (!i.length) return;
                    this.processFile(i.shift()), e++;
                }
            }
        }, i.prototype.processFile = function(e) {
            return this.processFiles([ e ]);
        }, i.prototype.processFiles = function(e) {
            var t, n, r;
            for (n = 0, r = e.length; n < r; n++) (t = e[n]).processing = !0, t.status = i.UPLOADING, 
            this.emit("processing", t);
            return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e);
        }, i.prototype._getFilesWithXhr = function(e) {
            var t;
            return function() {
                var n, i, r, o;
                for (o = [], n = 0, i = (r = this.files).length; n < i; n++) (t = r[n]).xhr === e && o.push(t);
                return o;
            }.call(this);
        }, i.prototype.cancelUpload = function(e) {
            var t, n, r, o, s, a, l;
            if (e.status === i.UPLOADING) {
                for (r = 0, s = (n = this._getFilesWithXhr(e.xhr)).length; r < s; r++) (t = n[r]).status = i.CANCELED;
                for (e.xhr.abort(), o = 0, a = n.length; o < a; o++) t = n[o], this.emit("canceled", t);
                this.options.uploadMultiple && this.emit("canceledmultiple", n);
            } else (l = e.status) !== i.ADDED && l !== i.QUEUED || (e.status = i.CANCELED, this.emit("canceled", e), 
            this.options.uploadMultiple && this.emit("canceledmultiple", [ e ]));
            if (this.options.autoProcessQueue) return this.processQueue();
        }, o = function() {
            var e, t;
            return t = arguments[0], e = 2 <= arguments.length ? u.call(arguments, 1) : [], 
            "function" == typeof t ? t.apply(this, e) : t;
        }, i.prototype.uploadFile = function(e) {
            return this.uploadFiles([ e ]);
        }, i.prototype.uploadFiles = function(e) {
            var t, n, s, a, l, u, c, p, d, f, h, m, g, v, y, b, x, w, E, T, C, k, F, A, S, D, N, L, j, q, M, z, I, R, H, P;
            for (P = new XMLHttpRequest(), g = 0, x = e.length; g < x; g++) (s = e[g]).xhr = P;
            k = o(this.options.method, e), R = o(this.options.url, e), P.open(k, R, !0), P.timeout = o(this.options.timeout, e), 
            P.withCredentials = !!this.options.withCredentials, M = null, l = function(t) {
                return function() {
                    var n, i, r;
                    for (r = [], n = 0, i = e.length; n < i; n++) s = e[n], r.push(t._errorProcessing(e, M || t.options.dictResponseError.replace("{{statusCode}}", P.status), P));
                    return r;
                };
            }(this), I = function(t) {
                return function(n) {
                    var i, r, o, a, l, u, c, p, d;
                    if (null != n) for (p = 100 * n.loaded / n.total, r = 0, a = e.length; r < a; r++) (s = e[r]).upload.progress = p, 
                    s.upload.total = n.total, s.upload.bytesSent = n.loaded; else {
                        for (i = !0, p = 100, o = 0, l = e.length; o < l; o++) 100 === (s = e[o]).upload.progress && s.upload.bytesSent === s.upload.total || (i = !1), 
                        s.upload.progress = p, s.upload.bytesSent = s.upload.total;
                        if (i) return;
                    }
                    for (d = [], c = 0, u = e.length; c < u; c++) s = e[c], d.push(t.emit("uploadprogress", s, p, s.upload.bytesSent));
                    return d;
                };
            }(this), P.onload = function(t) {
                return function(n) {
                    var r;
                    if (e[0].status !== i.CANCELED && 4 === P.readyState) {
                        if ("arraybuffer" !== P.responseType && "blob" !== P.responseType && (M = P.responseText, 
                        P.getResponseHeader("content-type") && ~P.getResponseHeader("content-type").indexOf("application/json"))) try {
                            M = JSON.parse(M);
                        } catch (e) {
                            n = e, M = "Invalid JSON response from server.";
                        }
                        return I(), 200 <= (r = P.status) && r < 300 ? t._finished(e, M, n) : l();
                    }
                };
            }(this), P.onerror = function() {
                if (e[0].status !== i.CANCELED) return l();
            }, (null != (S = P.upload) ? S : P).onprogress = I, p = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            }, this.options.headers && r(p, this.options.headers);
            for (u in p) (c = p[u]) && P.setRequestHeader(u, c);
            if (a = new FormData(), this.options.params) {
                D = this.options.params;
                for (y in D) H = D[y], a.append(y, H);
            }
            for (v = 0, w = e.length; v < w; v++) s = e[v], this.emit("sending", s, P, a);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", e, P, a), "FORM" === this.element.tagName) for (b = 0, 
            E = (N = this.element.querySelectorAll("input, textarea, select, button")).length; b < E; b++) if (f = N[b], 
            h = f.getAttribute("name"), m = f.getAttribute("type"), "SELECT" === f.tagName && f.hasAttribute("multiple")) for (C = 0, 
            T = (L = f.options).length; C < T; C++) (A = L[C]).selected && a.append(h, A.value); else (!m || "checkbox" !== (j = m.toLowerCase()) && "radio" !== j || f.checked) && a.append(h, f.value);
            for (t = 0, z = [], d = F = 0, q = e.length - 1; 0 <= q ? F <= q : F >= q; d = 0 <= q ? ++F : --F) n = function(n) {
                return function(i, r, o) {
                    return function(i) {
                        if (a.append(r, i, o), ++t === e.length) return n.submitRequest(P, a, e);
                    };
                };
            }(this), z.push(this.options.transformFile.call(this, e[d], n(e[d], this._getParamName(d), e[d].upload.filename)));
            return z;
        }, i.prototype.submitRequest = function(e, t, n) {
            return e.send(t);
        }, i.prototype._finished = function(e, t, n) {
            var r, o, s;
            for (o = 0, s = e.length; o < s; o++) (r = e[o]).status = i.SUCCESS, this.emit("success", r, t, n), 
            this.emit("complete", r);
            if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), 
            this.options.autoProcessQueue) return this.processQueue();
        }, i.prototype._errorProcessing = function(e, t, n) {
            var r, o, s;
            for (o = 0, s = e.length; o < s; o++) (r = e[o]).status = i.ERROR, this.emit("error", r, t, n), 
            this.emit("complete", r);
            if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), 
            this.options.autoProcessQueue) return this.processQueue();
        }, i;
    }()).version = "5.1.1", e.options = {}, e.optionsForElement = function(t) {
        return t.getAttribute("id") ? e.options[i(t.getAttribute("id"))] : void 0;
    }, e.instances = [], e.forElement = function(e) {
        if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return e.dropzone;
    }, e.autoDiscover = !0, e.discover = function() {
        var t, n, i, r, o, s;
        for (document.querySelectorAll ? i = document.querySelectorAll(".dropzone") : (i = [], 
        (t = function(e) {
            var t, n, r, o;
            for (o = [], n = 0, r = e.length; n < r; n++) t = e[n], /(^| )dropzone($| )/.test(t.className) ? o.push(i.push(t)) : o.push(void 0);
            return o;
        })(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))), 
        s = [], r = 0, o = i.length; r < o; r++) n = i[r], !1 !== e.optionsForElement(n) ? s.push(new e(n)) : s.push(void 0);
        return s;
    }, e.blacklistedBrowsers = [ /opera.*Macintosh.*version\/12/i ], e.isBrowserSupported = function() {
        var t, n, i, r;
        if (t = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) for (n = 0, 
        i = (r = e.blacklistedBrowsers).length; n < i; n++) r[n].test(navigator.userAgent) && (t = !1); else t = !1; else t = !1;
        return t;
    }, e.dataURItoBlob = function(e) {
        var t, n, i, r, o, s, a;
        for (n = atob(e.split(",")[1]), s = e.split(",")[0].split(":")[1].split(";")[0], 
        t = new ArrayBuffer(n.length), r = new Uint8Array(t), i = o = 0, a = n.length; 0 <= a ? o <= a : o >= a; i = 0 <= a ? ++o : --o) r[i] = n.charCodeAt(i);
        return new Blob([ t ], {
            type: s
        });
    }, l = function(e, t) {
        var n, i, r, o;
        for (o = [], i = 0, r = e.length; i < r; i++) (n = e[i]) !== t && o.push(n);
        return o;
    }, i = function(e) {
        return e.replace(/[\-_](\w)/g, function(e) {
            return e.charAt(1).toUpperCase();
        });
    }, e.createElement = function(e) {
        var t;
        return t = document.createElement("div"), t.innerHTML = e, t.childNodes[0];
    }, e.elementInside = function(e, t) {
        if (e === t) return !0;
        for (;e = e.parentNode; ) if (e === t) return !0;
        return !1;
    }, e.getElement = function(e, t) {
        var n;
        if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), 
        null == n) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return n;
    }, e.getElements = function(e, t) {
        var n, i, r, o, s, a, l;
        if (e instanceof Array) {
            i = [];
            try {
                for (r = 0, s = e.length; r < s; r++) n = e[r], i.push(this.getElement(n, t));
            } catch (e) {
                e, i = null;
            }
        } else if ("string" == typeof e) for (i = [], o = 0, a = (l = document.querySelectorAll(e)).length; o < a; o++) n = l[o], 
        i.push(n); else null != e.nodeType && (i = [ e ]);
        if (null == i || !i.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return i;
    }, e.confirm = function(e, t, n) {
        return window.confirm(e) ? t() : null != n ? n() : void 0;
    }, e.isValidFile = function(e, t) {
        var n, i, r, o, s;
        if (!t) return !0;
        for (t = t.split(","), n = (o = e.type).replace(/\/.*$/, ""), i = 0, r = t.length; i < r; i++) if (s = t[i], 
        "." === (s = s.trim()).charAt(0)) {
            if (-1 !== e.name.toLowerCase().indexOf(s.toLowerCase(), e.name.length - s.length)) return !0;
        } else if (/\/\*$/.test(s)) {
            if (n === s.replace(/\/.*$/, "")) return !0;
        } else if (o === s) return !0;
        return !1;
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(t) {
        return this.each(function() {
            return new e(this, t);
        });
    }), "undefined" != typeof module && null !== module ? module.exports = e : window.Dropzone = e, 
    e.ADDED = "added", e.QUEUED = "queued", e.ACCEPTED = e.QUEUED, e.UPLOADING = "uploading", 
    e.PROCESSING = e.UPLOADING, e.CANCELED = "canceled", e.ERROR = "error", e.SUCCESS = "success", 
    o = function(e) {
        var t, n, i, r, o, s, a, l;
        for (e.naturalWidth, o = e.naturalHeight, (t = document.createElement("canvas")).width = 1, 
        t.height = o, (n = t.getContext("2d")).drawImage(e, 0, 0), i = n.getImageData(1, 0, 1, o).data, 
        l = 0, r = o, s = o; s > l; ) 0 === i[4 * (s - 1) + 3] ? r = s : l = s, s = r + l >> 1;
        return 0 === (a = s / o) ? 1 : a;
    }, s = function(e, t, n, i, r, s, a, l, u, c) {
        var p;
        return p = o(t), e.drawImage(t, n, i, r, s, a, l, u, c / p);
    }, n = function() {
        function e() {}
        return e.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
        e.encode64 = function(e) {
            var t, n, i, r, o, s, a, l, u;
            for (u = "", t = void 0, n = void 0, i = "", r = void 0, o = void 0, s = void 0, 
            a = "", l = 0; ;) if (t = e[l++], n = e[l++], i = e[l++], r = t >> 2, o = (3 & t) << 4 | n >> 4, 
            s = (15 & n) << 2 | i >> 6, a = 63 & i, isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64), 
            u = u + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(a), 
            t = n = i = "", r = o = s = a = "", !(l < e.length)) break;
            return u;
        }, e.restore = function(e, t) {
            var n, i, r;
            return e.match("data:image/jpeg;base64,") ? (i = this.decode64(e.replace("data:image/jpeg;base64,", "")), 
            r = this.slice2Segments(i), n = this.exifManipulation(t, r), "data:image/jpeg;base64," + this.encode64(n)) : t;
        }, e.exifManipulation = function(e, t) {
            var n, i;
            return n = this.getExifArray(t), i = this.insertExif(e, n), new Uint8Array(i);
        }, e.getExifArray = function(e) {
            var t, n;
            for (t = void 0, n = 0; n < e.length; ) {
                if (255 === (t = e[n])[0] & 225 === t[1]) return t;
                n++;
            }
            return [];
        }, e.insertExif = function(e, t) {
            var n, i, r, o, s, a;
            return o = e.replace("data:image/jpeg;base64,", ""), r = this.decode64(o), a = r.indexOf(255, 3), 
            s = r.slice(0, a), i = r.slice(a), n = s, n = n.concat(t), n = n.concat(i);
        }, e.slice2Segments = function(e) {
            var t, n, i, r;
            for (n = 0, r = []; ;) {
                if (255 === e[n] & 218 === e[n + 1]) break;
                if (255 === e[n] & 216 === e[n + 1] ? n += 2 : (t = n + (256 * e[n + 2] + e[n + 3]) + 2, 
                i = e.slice(n, t), r.push(i), n = t), n > e.length) break;
            }
            return r;
        }, e.decode64 = function(e) {
            var t, n, i, r, o, s, a, l, u;
            for ("", n = void 0, i = void 0, r = "", o = void 0, s = void 0, a = void 0, l = "", 
            u = 0, t = [], /[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warning("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), 
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); ;) if (o = this.KEY_STR.indexOf(e.charAt(u++)), 
            s = this.KEY_STR.indexOf(e.charAt(u++)), a = this.KEY_STR.indexOf(e.charAt(u++)), 
            l = this.KEY_STR.indexOf(e.charAt(u++)), n = o << 2 | s >> 4, i = (15 & s) << 4 | a >> 2, 
            r = (3 & a) << 6 | l, t.push(n), 64 !== a && t.push(i), 64 !== l && t.push(r), n = i = r = "", 
            o = s = a = l = "", !(u < e.length)) break;
            return t;
        }, e;
    }(), r = function(e, t) {
        var n, i, r, o, s, a, l, u, c;
        if (r = !1, c = !0, i = e.document, u = i.documentElement, n = i.addEventListener ? "addEventListener" : "attachEvent", 
        l = i.addEventListener ? "removeEventListener" : "detachEvent", a = i.addEventListener ? "" : "on", 
        o = function(n) {
            if ("readystatechange" !== n.type || "complete" === i.readyState) return ("load" === n.type ? e : i)[l](a + n.type, o, !1), 
            !r && (r = !0) ? t.call(e, n.type || n) : void 0;
        }, s = function() {
            try {
                u.doScroll("left");
            } catch (e) {
                return e, void setTimeout(s, 50);
            }
            return o("poll");
        }, "complete" !== i.readyState) {
            if (i.createEventObject && u.doScroll) {
                try {
                    c = !e.frameElement;
                } catch (e) {}
                c && s();
            }
            return i[n](a + "DOMContentLoaded", o, !1), i[n](a + "readystatechange", o, !1), 
            e[n](a + "load", o, !1);
        }
    }, e._autoDiscoverFunction = function() {
        if (e.autoDiscover) return e.discover();
    }, r(window, e._autoDiscoverFunction);
}.call(this);

var modal = document.getElementById("myModal"), btn = document.getElementById("myBtn"), span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}, span.onclick = function() {
    modal.style.display = "none";
}, window.onclick = function(e) {
    e.target == modal && (modal.style.display = "none");
}(function(e) {
    e.fn.grtyoutube = function(t) {
        return this.each(function() {
            var n = e(this).attr("youtubeid"), i = e.extend({
                videoID: n,
                autoPlay: !0,
                theme: "dark"
            }, t);
            !0 === i.autoPlay ? i.autoPlay = 1 : !1 === i.autoPlay && (i.autoPlay = 0), "dark" === i.theme ? i.theme = "grtyoutube-dark-theme" : "light" === i.theme && (i.theme = "grtyoutube-light-theme"), 
            n && e(this).on("click", function() {
                e("body").append('<div class="grtyoutube-popup ' + i.theme + '"><div class="grtyoutube-popup-content"><span class="grtyoutube-popup-close"></span><iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + i.videoID + "?rel=0&wmode=transparent&autoplay=" + i.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0"></iframe></div></div>');
            }), e(this).on("click", function(t) {
                t.preventDefault(), e(".grtyoutube-popup-close, .grtyoutube-popup").click(function() {
                    e(".grtyoutube-popup").remove();
                });
            }), e(document).keyup(function(t) {
                27 == t.keyCode && e(".grtyoutube-popup").remove();
            });
        });
    };
}(jQuery)), $(".youtube-link").grtyoutube({});
//# sourceMappingURL=styles-dist.js.map