/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
    var n, r, i = typeof t,
        o = e.document,
        a = e.location,
        s = e.jQuery,
        u = e.$,
        l = {},
        c = [],
        p = "1.9.1",
        f = c.concat,
        d = c.push,
        h = c.slice,
        g = c.indexOf,
        m = l.toString,
        y = l.hasOwnProperty,
        v = p.trim,
        b = function(e, t) {
            return new b.fn.init(e, t, r)
        },
        x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        j = /^-ms-/,
        D = /-([\da-z])/gi,
        L = function(e, t) {
            return t.toUpperCase()
        },
        H = function(e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
        },
        q = function() {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
        };
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function(e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
                        for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = o, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return h.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return b.each(this, e, t)
        },
        ready: function(e) {
            return b.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === b.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || y.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(j, "ms-").replace(D, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: v && !v.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : v.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (g) return g.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return f.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(h.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) b.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(b(e), n)
                })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), b.ready.promise = function(t) {
        if (!n)
            if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
        else {
            o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
            var r = !1;
            try {
                r = null == e.frameElement && o.documentElement
            } catch (i) {}
            r && r.doScroll && function a() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    q(), b.ready()
                }
            }()
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};

    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [],
            l = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
            },
            p = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        (function i(t) {
                            b.each(t, function(t, n) {
                                var r = b.type(n);
                                "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = u.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return u && b.each(arguments, function(e, t) {
                        var r;
                        while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], this
                },
                disable: function() {
                    return u = l = r = t, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = t, r || p.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, b.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", b.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return b.Deferred(function(n) {
                            b.each(t, function(t, o) {
                                var a = o[0],
                                    s = b.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? b.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, b.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = h.call(arguments),
                r = n.length,
                i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : b.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, u, l;
            if (r > 1)
                for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n), o.promise()
        }
    }), b.support = function() {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: l.selected,
            enctype: !!o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
        }), n = s = u = l = r = a = null, t
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;

    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                p = l ? b.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                s = a ? b.cache : e,
                u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o)) return
                }(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
        },
        data: function(e, t, n) {
            return P(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
                a = 0,
                s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                b.data(this, e)
            }) : b.access(this, function(n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e)
            })
        }
    });

    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) {}
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function $(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    b.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t),
                a = function() {
                    b.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = b.Deferred(),
                a = this,
                s = this.length,
                u = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g,
        U = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        G = /^(?:checked|selected)$/i,
        Q = b.support.getSetAttribute,
        K = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = b.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0,
                        s = b(this),
                        u = t,
                        l = e.match(w) || [];
                    while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
                } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
            }
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(w);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), z = {
        get: function(e, n) {
            var r = b.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, K && Q || (b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function(e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
        }
    }), Q || (I = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: I.get,
        set: function(e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }
    b.event = {
            global: {},
            add: function(e, n, r, o, a) {
                var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
                if (v) {
                    r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                        return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                    }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                    while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && b.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
                if (m && (c = m.events)) {
                    t = (t || "").match(w) || [""], l = t.length;
                    while (l--)
                        if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                            p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                            while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                            u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                        } else
                            for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                    b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, a) {
                var s, u, l, c, p, f, d, h = [i || o],
                    g = y.call(n, "type") ? n.type : n,
                    m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!a && !p.noBubble && !b.isWindow(i)) {
                        for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                        f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                    }
                    d = 0;
                    while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                    if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                        f = i[u], f && (i[u] = null), b.event.triggered = g;
                        try {
                            i[g]()
                        } catch (v) {}
                        b.event.triggered = t, f && (i[u] = f)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = b.event.fix(e);
                var n, r, i, o, a, s = [],
                    u = h.call(arguments),
                    l = (b._data(this, "events") || {})[e.type] || [],
                    c = b.event.special[e.type] || {};
                if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    s = b.event.handlers.call(this, e, l), n = 0;
                    while ((o = s[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = o.elem, a = 0;
                        while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    u = n.delegateCount,
                    l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return n.length > u && s.push({
                    elem: this,
                    handlers: n.slice(u)
                }), s
            },
            fix: function(e) {
                if (e[b.expando]) return e;
                var t, n, r, i = e.type,
                    a = e,
                    s = this.fixHooks[i];
                s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
                while (t--) n = r[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, a, s = n.button,
                        u = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== o.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = b.extend(new b.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, b.removeEvent = o.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
        }, b.Event = function(e, n) {
            return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
        }, b.Event.prototype = {
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = it, this.stopPropagation()
            }
        }, b.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            b.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), b.support.submitBubbles || (b.event.special.submit = {
            setup: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                    r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), b._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
            }
        }), b.support.changeBubbles || (b.event.special.change = {
            setup: function() {
                return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), b.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
                })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                    }), b._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return b.event.remove(this, "._change"), !Z.test(this.nodeName)
            }
        }), b.support.focusinBubbles || b.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    b.event.simulate(t, e.target, b.event.fix(e), !0)
                };
            b.event.special[t] = {
                setup: function() {
                    0 === n++ && o.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && o.removeEventListener(e, r, !0)
                }
            }
        }), b.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (a in e) this.on(a, n, r, e[a], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) {
                    return b().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
                    b.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                    b.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    b.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? b.event.trigger(e, n, r, !0) : t
            }
        }),
        function(e, t) {
            var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
                w = e.document,
                T = {},
                N = 0,
                C = 0,
                k = it(),
                E = it(),
                S = it(),
                A = typeof t,
                j = 1 << 31,
                D = [],
                L = D.pop,
                H = D.push,
                q = D.slice,
                M = D.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                _ = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                O = F.replace("w", "w#"),
                B = "([*^$|!~]?=)",
                P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
                R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
                W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                $ = RegExp("^" + _ + "*," + _ + "*"),
                I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
                z = RegExp(R),
                X = RegExp("^" + O + "$"),
                U = {
                    ID: RegExp("^#(" + F + ")"),
                    CLASS: RegExp("^\\.(" + F + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + P),
                    PSEUDO: RegExp("^" + R),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                    needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /[\x20\t\r\n\f]*[+~]/,
                Y = /^[^{]+\{\s*\[native code/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                G = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                K = /'|\\/g,
                Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                tt = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                q.call(w.documentElement.childNodes, 0)[0].nodeType
            } catch (nt) {
                q = function(e) {
                    var t, n = [];
                    while (t = this[e++]) n.push(t);
                    return n
                }
            }

            function rt(e) {
                return Y.test(e + "")
            }

            function it() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function ot(e) {
                return e[x] = !0, e
            }

            function at(e) {
                var t = p.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function st(e, t, n, r) {
                var i, o, a, s, u, l, f, g, m, v;
                if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!d && !r) {
                    if (i = J.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                            if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                        }
                    if (T.qsa && !h.test(e)) {
                        if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                            while (u--) l[u] = g + dt(l[u]);
                            m = V.test(e) && t.parentNode || t, v = l.join(",")
                        }
                        if (v) try {
                            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                        } catch (b) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return wt(e.replace(W, "$1"), t, n, r)
            }
            a = st.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, c = st.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w;
                return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), T.attributes = at(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), T.getByClassName = at(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), T.getByName = at(function(e) {
                    e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                    return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
                }), i.attrHandle = at(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                }, T.getIdNotName ? (i.find.ID = function(e, t) {
                    if (typeof t.getElementById !== A && !d) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (i.find.ID = function(e, n) {
                    if (typeof n.getElementById !== A && !d) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
                    return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, i.find.NAME = T.getByName && function(e, n) {
                    return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
                }, i.find.CLASS = T.getByClassName && function(e, n) {
                    return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
                }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
                }), at(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                    T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
                }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, v = f.compareDocumentPosition ? function(e, t) {
                    var r;
                    return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return u = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                    if (o === a) return ut(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
            }, st.matches = function(e, t) {
                return st(e, null, null, t)
            }, st.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                    var n = m.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) {}
                return st(t, p, null, [e]).length > 0
            }, st.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && c(e), y(e, t)
            }, st.attr = function(e, t) {
                var n;
                return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, st.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, st.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                if (u = !T.detectDuplicates, e.sort(v), u) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            };

            function ut(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function lt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function ct(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function pt(e) {
                return ot(function(t) {
                    return t = +t, ot(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            o = st.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += o(t);
                return n
            }, i = st.selectors = {
                cacheLength: 50,
                createPseudo: ot,
                match: U,
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
                        return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = st.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !u && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [N, d, f];
                                            break
                                        }
                                } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                        return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ot(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(W, "$1"));
                        return r[x] ? ot(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: ot(function(e) {
                        return function(t) {
                            return st(e, t).length > 0
                        }
                    }),
                    contains: ot(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: ot(function(e) {
                        return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: pt(function() {
                        return [0]
                    }),
                    last: pt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pt(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: pt(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: pt(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: pt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: pt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[n] = lt(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[n] = ct(n);

            function ft(e, t) {
                var n, r, o, a, s, u, l, c = E[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, u = [], l = i.preFilter;
                while (s) {
                    (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), s = s.slice(n.length));
                    for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
            }

            function dt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function ht(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    a = C++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, s) {
                    var u, l, c, p = N + " " + a;
                    if (s) {
                        while (t = t[i])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[i])
                            if (1 === t.nodeType || o)
                                if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                    if ((u = l[1]) === !0 || u === r) return u === !0
                                } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
                }
            }

            function gt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function mt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    u = e.length,
                    l = null != t;
                for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function yt(e, t, n, r, i, o) {
                return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
                    var l, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : mt(g, f, e, s, u),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, u), r) {
                        l = mt(y, d), r(l, [], s, u), c = l.length;
                        while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                l = [], c = y.length;
                                while (c--)(p = y[c]) && l.push(m[c] = p);
                                i(null, y = [], l, u)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                        }
                    } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                })
            }

            function vt(e) {
                var t, n, r, o = e.length,
                    a = i.relative[e[0].type],
                    s = a || i.relative[" "],
                    u = a ? 1 : 0,
                    c = ht(function(e) {
                        return e === t
                    }, s, !0),
                    p = ht(function(e) {
                        return M.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; o > u; u++)
                    if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
                    else {
                        if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                            for (r = ++u; o > r; r++)
                                if (i.relative[e[r].type]) break;
                            return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                        }
                        f.push(n)
                    }
                return gt(f)
            }

            function bt(e, t) {
                var n = 0,
                    o = t.length > 0,
                    a = e.length > 0,
                    s = function(s, u, c, f, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            T = l,
                            C = s || a && i.find.TAG("*", d && u.parentNode || u),
                            k = N += null == T ? 1 : Math.random() || .1;
                        for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, u, c)) {
                                        f.push(h);
                                        break
                                    }
                                w && (N = k, r = ++n)
                            }
                            o && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, o && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, u, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = L.call(f));
                                y = mt(y)
                            }
                            H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                        }
                        return w && (N = k, l = T), x
                    };
                return o ? ot(s) : s
            }
            s = st.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = ft(e)), n = t.length;
                    while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                    o = S(e, bt(i, r))
                }
                return o
            };

            function xt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) st(e, t[r], n);
                return n
            }

            function wt(e, t, n, r) {
                var o, a, u, l, c, p = ft(e);
                if (!r && 1 === p.length) {
                    if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                        if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                        e = e.slice(a.shift().value.length)
                    }
                    o = U.needsContext.test(e) ? 0 : a.length;
                    while (o--) {
                        if (u = a[o], i.relative[l = u.type]) break;
                        if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                            if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                            break
                        }
                    }
                }
                return s(e, p)(r, t, d, n, V.test(e)), n
            }
            i.pseudos.nth = i.pseudos.eq;

            function Tt() {}
            i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
        }(e);
    var at = /Until$/,
        st = /^(?:parents|prev(?:Until|All))/,
        ut = /^.[^:#\[\.,]*$/,
        lt = b.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack;

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b.sibling(e.firstChild)
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Nt = /^(?:checkbox|radio)$/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(o),
        Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
        text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0,
                p = this.length,
                d = this,
                h = p - 1,
                g = e[0],
                m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
                var o = d.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                l = i = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e),
                a = b._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }

    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = b(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ot(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }

    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
                else _t(e, o);
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                }
                b.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                u = b.expando,
                l = b.cache,
                p = b.support.deleteExpando,
                f = b.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                    l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
                }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + x + ")(.*)$", "i"),
        Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + x + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    b.fn.extend({
        css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show(): b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n),
                    l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : o.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = o,
            n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
    }

    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }
    b.each(["height", "width"], function(e, n) {
        b.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (b.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), b.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, yn, vn = b.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Cn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = b.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }
    b.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function(e, n) {
        b[n] = function(e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                h = b.Deferred(),
                g = b.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                x = 0,
                T = "canceled",
                N = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else N.always(e[N.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return l && l.abort(t), k(0, t), this
                    }
                };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
            T = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) N[i](p[i]);
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    N.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, l.send(y, k)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        }
    });

    function _n(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function Fn(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + l + " to " + r
                            }
                        }
                }
                l = r
            }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function(t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var On = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || b.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = Yn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = b.css(i.elem, e, !0) || n || 1;
                        do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]),
                i = 0,
                o = r.length;
            for (; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = b.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    a = 0,
                    u = l.tweens.length;
                for (; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(l, e, c, l.opts)) return r;
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = o)
            } else t[r] = o
    }
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
            c.unqueued || p()
        }), c.unqueued++, f.always(function() {
            f.always(function() {
                c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (a = t[i], Vn.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
                b(e).hide()
            }), f.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) b.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e),
                o = b.speed(t, n, r),
                a = function() {
                    var t = er(this, b.extend({}, e), o);
                    a.finish = function() {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = b.timers,
                    a = b._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = b.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
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
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers,
            r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function() {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function() {
        clearInterval(Un), Un = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
                o = i.offset(),
                a = b.css(e, "top"),
                s = b.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
                l = {},
                c = {},
                p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
        }
    }, b.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || o.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            b.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b
    })
})(window);

/* Redifine browser as not support from 1.9 */
jQuery.browser = {};
(function() {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();
var $j = jQuery.noConflict();

/* jQuery UI - v1.11.4 - 2015-11-12
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, accordion.js, autocomplete.js, button.js, dialog.js, menu.js, selectmenu.js, tabs.js, tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(a) {
    /*
     * jQuery UI Core 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        scrollParent: function(z) {
            var B = this.css("position"),
                y = B === "absolute",
                A = z ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                C = this.parents().filter(function() {
                    var D = a(this);
                    if (y && D.css("position") === "static") {
                        return false
                    }
                    return A.test(D.css("overflow") + D.css("overflow-y") + D.css("overflow-x"))
                }).eq(0);
            return B === "fixed" || !C.length ? a(this[0].ownerDocument || document) : C
        },
        uniqueId: (function() {
            var y = 0;
            return function() {
                return this.each(function() {
                    if (!this.id) {
                        this.id = "ui-id-" + (++y)
                    }
                })
            }
        })(),
        removeUniqueId: function() {
            return this.each(function() {
                if (/^ui-id-\d+$/.test(this.id)) {
                    a(this).removeAttr("id")
                }
            })
        }
    });

    function h(y, A) {
        var B, C, z, D = y.nodeName.toLowerCase();
        if ("area" === D) {
            B = y.parentNode;
            C = B.name;
            if (!y.href || !C || B.nodeName.toLowerCase() !== "map") {
                return false
            }
            z = a("img[usemap='#" + C + "']")[0];
            return !!z && u(z)
        }
        return (/^(input|select|textarea|button|object)$/.test(D) ? !y.disabled : "a" === D ? y.href || A : A) && u(y)
    }

    function u(y) {
        return a.expr.filters.visible(y) && !a(y).parents().addBack().filter(function() {
            return a.css(this, "visibility") === "hidden"
        }).length
    }
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(y) {
            return function(z) {
                return !!a.data(z, y)
            }
        }) : function(y, z, A) {
            return !!a.data(y, A[3])
        },
        focusable: function(y) {
            return h(y, !isNaN(a.attr(y, "tabindex")))
        },
        tabbable: function(y) {
            var A = a.attr(y, "tabindex"),
                z = isNaN(A);
            return (z || A >= 0) && h(y, !z)
        }
    });
    if (!a("<a>").outerWidth(1).jquery) {
        a.each(["Width", "Height"], function(y, z) {
            var C = z === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                D = z.toLowerCase(),
                A = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };

            function B(F, H, E, G) {
                a.each(C, function() {
                    H -= parseFloat(a.css(F, "padding" + this)) || 0;
                    if (E) {
                        H -= parseFloat(a.css(F, "border" + this + "Width")) || 0
                    }
                    if (G) {
                        H -= parseFloat(a.css(F, "margin" + this)) || 0
                    }
                });
                return H
            }
            a.fn["inner" + z] = function(E) {
                if (E === undefined) {
                    return A["inner" + z].call(this)
                }
                return this.each(function() {
                    a(this).css(D, B(this, E) + "px")
                })
            };
            a.fn["outer" + z] = function(F, E) {
                if (typeof F !== "number") {
                    return A["outer" + z].call(this, F)
                }
                return this.each(function() {
                    a(this).css(D, B(this, F, true, E) + "px")
                })
            }
        })
    }
    if (!a.fn.addBack) {
        a.fn.addBack = function(y) {
            return this.add(y == null ? this.prevObject : this.prevObject.filter(y))
        }
    }
    if (a("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        a.fn.removeData = (function(y) {
            return function(z) {
                if (arguments.length) {
                    return y.call(this, a.camelCase(z))
                } else {
                    return y.call(this)
                }
            }
        })(a.fn.removeData)
    }
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.fn.extend({
        focus: (function(y) {
            return function(z, A) {
                return typeof z === "number" ? this.each(function() {
                    var B = this;
                    setTimeout(function() {
                        a(B).focus();
                        if (A) {
                            A.call(B)
                        }
                    }, z)
                }) : y.apply(this, arguments)
            }
        })(a.fn.focus),
        disableSelection: (function() {
            var y = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(y + ".ui-disableSelection", function(z) {
                    z.preventDefault()
                })
            }
        })(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(B) {
            if (B !== undefined) {
                return this.css("zIndex", B)
            }
            if (this.length) {
                var y = a(this[0]),
                    z, A;
                while (y.length && y[0] !== document) {
                    z = y.css("position");
                    if (z === "absolute" || z === "relative" || z === "fixed") {
                        A = parseInt(y.css("zIndex"), 10);
                        if (!isNaN(A) && A !== 0) {
                            return A
                        }
                    }
                    y = y.parent()
                }
            }
            return 0
        }
    });
    a.ui.plugin = {
        add: function(z, A, C) {
            var y, B = a.ui[z].prototype;
            for (y in C) {
                B.plugins[y] = B.plugins[y] || [];
                B.plugins[y].push([A, C[y]])
            }
        },
        call: function(B, C, z, y) {
            var A, D = B.plugins[C];
            if (!D) {
                return
            }
            if (!y && (!B.element[0].parentNode || B.element[0].parentNode.nodeType === 11)) {
                return
            }
            for (A = 0; A < D.length; A++) {
                if (B.options[D[A][0]]) {
                    D[A][1].apply(B.element, z)
                }
            }
        }
    };
    /*
     * jQuery UI Widget 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */
    var x = 0,
        w = Array.prototype.slice;
    a.cleanData = (function(y) {
        return function(B) {
            var C, A, D;
            for (D = 0;
                (A = B[D]) != null; D++) {
                try {
                    C = a._data(A, "events");
                    if (C && C.remove) {
                        a(A).triggerHandler("remove")
                    }
                } catch (z) {}
            }
            y(B)
        }
    })(a.cleanData);
    a.widget = function(D, y, F) {
        var C, B, A, z, G = {},
            E = D.split(".")[0];
        D = D.split(".")[1];
        C = E + "-" + D;
        if (!F) {
            F = y;
            y = a.Widget
        }
        a.expr[":"][C.toLowerCase()] = function(H) {
            return !!a.data(H, C)
        };
        a[E] = a[E] || {};
        B = a[E][D];
        A = a[E][D] = function(I, H) {
            if (!this._createWidget) {
                return new A(I, H)
            }
            if (arguments.length) {
                this._createWidget(I, H)
            }
        };
        a.extend(A, B, {
            version: F.version,
            _proto: a.extend({}, F),
            _childConstructors: []
        });
        z = new y();
        z.options = a.widget.extend({}, z.options);
        a.each(F, function(H, I) {
            if (!a.isFunction(I)) {
                G[H] = I;
                return
            }
            G[H] = (function() {
                var J = function() {
                        return y.prototype[H].apply(this, arguments)
                    },
                    K = function(L) {
                        return y.prototype[H].apply(this, L)
                    };
                return function() {
                    var L = this._super,
                        M = this._superApply,
                        N;
                    this._super = J;
                    this._superApply = K;
                    N = I.apply(this, arguments);
                    this._super = L;
                    this._superApply = M;
                    return N
                }
            })()
        });
        A.prototype = a.widget.extend(z, {
            widgetEventPrefix: B ? (z.widgetEventPrefix || D) : D
        }, G, {
            constructor: A,
            namespace: E,
            widgetName: D,
            widgetFullName: C
        });
        if (B) {
            a.each(B._childConstructors, function(J, H) {
                var I = H.prototype;
                a.widget(I.namespace + "." + I.widgetName, A, H._proto)
            });
            delete B._childConstructors
        } else {
            y._childConstructors.push(A)
        }
        a.widget.bridge(D, A);
        return A
    };
    a.widget.extend = function(C) {
        var y = w.call(arguments, 1),
            z = 0,
            A = y.length,
            B, D;
        for (; z < A; z++) {
            for (B in y[z]) {
                D = y[z][B];
                if (y[z].hasOwnProperty(B) && D !== undefined) {
                    if (a.isPlainObject(D)) {
                        C[B] = a.isPlainObject(C[B]) ? a.widget.extend({}, C[B], D) : a.widget.extend({}, D)
                    } else {
                        C[B] = D
                    }
                }
            }
        }
        return C
    };
    a.widget.bridge = function(z, A) {
        var y = A.prototype.widgetFullName || z;
        a.fn[z] = function(D) {
            var C = typeof D === "string",
                B = w.call(arguments, 1),
                E = this;
            if (C) {
                this.each(function() {
                    var G, F = a.data(this, y);
                    if (D === "instance") {
                        E = F;
                        return false
                    }
                    if (!F) {
                        return a.error("cannot call methods on " + z + " prior to initialization; attempted to call method '" + D + "'")
                    }
                    if (!a.isFunction(F[D]) || D.charAt(0) === "_") {
                        return a.error("no such method '" + D + "' for " + z + " widget instance")
                    }
                    G = F[D].apply(F, B);
                    if (G !== F && G !== undefined) {
                        E = G && G.jquery ? E.pushStack(G.get()) : G;
                        return false
                    }
                })
            } else {
                if (B.length) {
                    D = a.widget.extend.apply(null, [D].concat(B))
                }
                this.each(function() {
                    var F = a.data(this, y);
                    if (F) {
                        F.option(D || {});
                        if (F._init) {
                            F._init()
                        }
                    } else {
                        a.data(this, y, new A(D, this))
                    }
                })
            }
            return E
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(z, y) {
            y = a(y || this.defaultElement || this)[0];
            this.element = a(y);
            this.uuid = x++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            if (y !== this) {
                a.data(y, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(A) {
                        if (A.target === y) {
                            this.destroy()
                        }
                    }
                });
                this.document = a(y.style ? y.ownerDocument : y.document || y);
                this.window = a(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), z);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(A, D) {
            var B = A,
                C, y, z;
            if (arguments.length === 0) {
                return a.widget.extend({}, this.options)
            }
            if (typeof A === "string") {
                B = {};
                C = A.split(".");
                A = C.shift();
                if (C.length) {
                    y = B[A] = a.widget.extend({}, this.options[A]);
                    for (z = 0; z < C.length - 1; z++) {
                        y[C[z]] = y[C[z]] || {};
                        y = y[C[z]]
                    }
                    A = C.pop();
                    if (arguments.length === 1) {
                        return y[A] === undefined ? null : y[A]
                    }
                    y[A] = D
                } else {
                    if (arguments.length === 1) {
                        return this.options[A] === undefined ? null : this.options[A]
                    }
                    B[A] = D
                }
            }
            this._setOptions(B);
            return this
        },
        _setOptions: function(z) {
            var y;
            for (y in z) {
                this._setOption(y, z[y])
            }
            return this
        },
        _setOption: function(y, z) {
            this.options[y] = z;
            if (y === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!z);
                if (z) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus")
                }
            }
            return this
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            })
        },
        _on: function(C, z, A) {
            var y, B = this;
            if (typeof C !== "boolean") {
                A = z;
                z = C;
                C = false
            }
            if (!A) {
                A = z;
                z = this.element;
                y = this.widget()
            } else {
                z = y = a(z);
                this.bindings = this.bindings.add(z)
            }
            a.each(A, function(D, F) {
                function G() {
                    if (!C && (B.options.disabled === true || a(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof F === "string" ? B[F] : F).apply(B, arguments)
                }
                if (typeof F !== "string") {
                    G.guid = F.guid = F.guid || G.guid || a.guid++
                }
                var H = D.match(/^([\w:-]*)\s*(.*)$/),
                    E = H[1] + B.eventNamespace,
                    I = H[2];
                if (I) {
                    y.delegate(I, E, G)
                } else {
                    z.bind(E, G)
                }
            })
        },
        _off: function(y, z) {
            z = (z || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            y.unbind(z).undelegate(z);
            this.bindings = a(this.bindings.not(y).get());
            this.focusable = a(this.focusable.not(y).get());
            this.hoverable = a(this.hoverable.not(y).get())
        },
        _delay: function(z, y) {
            function A() {
                return (typeof z === "string" ? B[z] : z).apply(B, arguments)
            }
            var B = this;
            return setTimeout(A, y || 0)
        },
        _hoverable: function(y) {
            this.hoverable = this.hoverable.add(y);
            this._on(y, {
                mouseenter: function(z) {
                    a(z.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(z) {
                    a(z.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(y) {
            this.focusable = this.focusable.add(y);
            this._on(y, {
                focusin: function(z) {
                    a(z.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(z) {
                    a(z.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(D, A, z) {
            var C, B, y = this.options[D];
            z = z || {};
            A = a.Event(A);
            A.type = (D === this.widgetEventPrefix ? D : this.widgetEventPrefix + D).toLowerCase();
            A.target = this.element[0];
            B = A.originalEvent;
            if (B) {
                for (C in B) {
                    if (!(C in A)) {
                        A[C] = B[C]
                    }
                }
            }
            this.element.trigger(A, z);
            return !(a.isFunction(y) && y.apply(this.element[0], [A].concat(z)) === false || A.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(z, y) {
        a.Widget.prototype["_" + z] = function(C, E, A) {
            if (typeof E === "string") {
                E = {
                    effect: E
                }
            }
            var D, B = !E ? z : E === true || typeof E === "number" ? y : E.effect || y;
            E = E || {};
            if (typeof E === "number") {
                E = {
                    duration: E
                }
            }
            D = !a.isEmptyObject(E);
            E.complete = A;
            if (E.delay) {
                C.delay(E.delay)
            }
            if (D && a.effects && a.effects.effect[B]) {
                C[z](E)
            } else {
                if (B !== z && C[B]) {
                    C[B](E.duration, E.easing, A)
                } else {
                    C.queue(function(F) {
                        a(this)[z]();
                        if (A) {
                            A.call(C[0])
                        }
                        F()
                    })
                }
            }
        }
    });
    var v = a.widget;
    /*
     * jQuery UI Mouse 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/mouse/
     */
    var m = false;
    a(document).mouseup(function() {
        m = false
    });
    var l = a.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var y = this;
            this.element.bind("mousedown." + this.widgetName, function(z) {
                return y._mouseDown(z)
            }).bind("click." + this.widgetName, function(z) {
                if (true === a.data(z.target, y.widgetName + ".preventClickEvent")) {
                    a.removeData(z.target, y.widgetName + ".preventClickEvent");
                    z.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function(A) {
            if (m) {
                return
            }
            this._mouseMoved = false;
            (this._mouseStarted && this._mouseUp(A));
            this._mouseDownEvent = A;
            var B = this,
                y = (A.which === 1),
                z = (typeof this.options.cancel === "string" && A.target.nodeName ? a(A.target).closest(this.options.cancel).length : false);
            if (!y || z || !this._mouseCapture(A)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    B.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(A) && this._mouseDelayMet(A)) {
                this._mouseStarted = (this._mouseStart(A) !== false);
                if (!this._mouseStarted) {
                    A.preventDefault();
                    return true
                }
            }
            if (true === a.data(A.target, this.widgetName + ".preventClickEvent")) {
                a.removeData(A.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(C) {
                return B._mouseMove(C)
            };
            this._mouseUpDelegate = function(C) {
                return B._mouseUp(C)
            };
            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            A.preventDefault();
            m = true;
            return true
        },
        _mouseMove: function(y) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !y.button) {
                    return this._mouseUp(y)
                } else {
                    if (!y.which) {
                        return this._mouseUp(y)
                    }
                }
            }
            if (y.which || y.button) {
                this._mouseMoved = true
            }
            if (this._mouseStarted) {
                this._mouseDrag(y);
                return y.preventDefault()
            }
            if (this._mouseDistanceMet(y) && this._mouseDelayMet(y)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, y) !== false);
                (this._mouseStarted ? this._mouseDrag(y) : this._mouseUp(y))
            }
            return !this._mouseStarted
        },
        _mouseUp: function(y) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (y.target === this._mouseDownEvent.target) {
                    a.data(y.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(y)
            }
            m = false;
            return false
        },
        _mouseDistanceMet: function(y) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - y.pageX), Math.abs(this._mouseDownEvent.pageY - y.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    });
    /*
     * jQuery UI Position 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */
    (function() {
        a.ui = a.ui || {};
        var A, L, D = Math.max,
            z = Math.abs,
            H = Math.round,
            F = /left|center|right/,
            K = /top|center|bottom/,
            G = /[\+\-]\d+(\.[\d]+)?%?/,
            J = /^\w+/,
            I = /%$/,
            y = a.fn.position;

        function C(N, O, M) {
            return [parseFloat(N[0]) * (I.test(N[0]) ? O / 100 : 1), parseFloat(N[1]) * (I.test(N[1]) ? M / 100 : 1)]
        }

        function E(M, N) {
            return parseInt(a.css(M, N), 10) || 0
        }

        function B(M) {
            var N = M[0];
            if (N.nodeType === 9) {
                return {
                    width: M.width(),
                    height: M.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                }
            }
            if (a.isWindow(N)) {
                return {
                    width: M.width(),
                    height: M.height(),
                    offset: {
                        top: M.scrollTop(),
                        left: M.scrollLeft()
                    }
                }
            }
            if (N.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {
                        top: N.pageY,
                        left: N.pageX
                    }
                }
            }
            return {
                width: M.outerWidth(),
                height: M.outerHeight(),
                offset: M.offset()
            }
        }
        a.position = {
            scrollbarWidth: function() {
                if (A !== undefined) {
                    return A
                }
                var O, P, M = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    N = M.children()[0];
                a("body").append(M);
                O = N.offsetWidth;
                M.css("overflow", "scroll");
                P = N.offsetWidth;
                if (O === P) {
                    P = M[0].clientWidth
                }
                M.remove();
                return (A = O - P)
            },
            getScrollInfo: function(Q) {
                var O = Q.isWindow || Q.isDocument ? "" : Q.element.css("overflow-x"),
                    P = Q.isWindow || Q.isDocument ? "" : Q.element.css("overflow-y"),
                    M = O === "scroll" || (O === "auto" && Q.width < Q.element[0].scrollWidth),
                    N = P === "scroll" || (P === "auto" && Q.height < Q.element[0].scrollHeight);
                return {
                    width: N ? a.position.scrollbarWidth() : 0,
                    height: M ? a.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(M) {
                var P = a(M || window),
                    O = a.isWindow(P[0]),
                    N = !!P[0] && P[0].nodeType === 9;
                return {
                    element: P,
                    isWindow: O,
                    isDocument: N,
                    offset: P.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: P.scrollLeft(),
                    scrollTop: P.scrollTop(),
                    width: O || N ? P.width() : P.outerWidth(),
                    height: O || N ? P.height() : P.outerHeight()
                }
            }
        };
        a.fn.position = function(R) {
            if (!R || !R.of) {
                return y.apply(this, arguments)
            }
            R = a.extend({}, R);
            var M, W, U, V, N, P, T = a(R.of),
                X = a.position.getWithinInfo(R.within),
                S = a.position.getScrollInfo(X),
                O = (R.collision || "flip").split(" "),
                Q = {};
            P = B(T);
            if (T[0].preventDefault) {
                R.at = "left top"
            }
            W = P.width;
            U = P.height;
            V = P.offset;
            N = a.extend({}, V);
            a.each(["my", "at"], function() {
                var Z = (R[this] || "").split(" "),
                    Y, aa;
                if (Z.length === 1) {
                    Z = F.test(Z[0]) ? Z.concat(["center"]) : K.test(Z[0]) ? ["center"].concat(Z) : ["center", "center"]
                }
                Z[0] = F.test(Z[0]) ? Z[0] : "center";
                Z[1] = K.test(Z[1]) ? Z[1] : "center";
                Y = G.exec(Z[0]);
                aa = G.exec(Z[1]);
                Q[this] = [Y ? Y[0] : 0, aa ? aa[0] : 0];
                R[this] = [J.exec(Z[0])[0], J.exec(Z[1])[0]]
            });
            if (O.length === 1) {
                O[1] = O[0]
            }
            if (R.at[0] === "right") {
                N.left += W
            } else {
                if (R.at[0] === "center") {
                    N.left += W / 2
                }
            }
            if (R.at[1] === "bottom") {
                N.top += U
            } else {
                if (R.at[1] === "center") {
                    N.top += U / 2
                }
            }
            M = C(Q.at, W, U);
            N.left += M[0];
            N.top += M[1];
            return this.each(function() {
                var Z, ai, ab = a(this),
                    ad = ab.outerWidth(),
                    ac = ab.outerHeight(),
                    ae = E(this, "marginLeft"),
                    af = E(this, "marginTop"),
                    aa = ad + ae + E(this, "marginRight") + S.width,
                    Y = ac + af + E(this, "marginBottom") + S.height,
                    ah = a.extend({}, N),
                    ag = C(Q.my, ab.outerWidth(), ab.outerHeight());
                if (R.my[0] === "right") {
                    ah.left -= ad
                } else {
                    if (R.my[0] === "center") {
                        ah.left -= ad / 2
                    }
                }
                if (R.my[1] === "bottom") {
                    ah.top -= ac
                } else {
                    if (R.my[1] === "center") {
                        ah.top -= ac / 2
                    }
                }
                ah.left += ag[0];
                ah.top += ag[1];
                if (!L) {
                    ah.left = H(ah.left);
                    ah.top = H(ah.top)
                }
                Z = {
                    marginLeft: ae,
                    marginTop: af
                };
                a.each(["left", "top"], function(ak, aj) {
                    if (a.ui.position[O[ak]]) {
                        a.ui.position[O[ak]][aj](ah, {
                            targetWidth: W,
                            targetHeight: U,
                            elemWidth: ad,
                            elemHeight: ac,
                            collisionPosition: Z,
                            collisionWidth: aa,
                            collisionHeight: Y,
                            offset: [M[0] + ag[0], M[1] + ag[1]],
                            my: R.my,
                            at: R.at,
                            within: X,
                            elem: ab
                        })
                    }
                });
                if (R.using) {
                    ai = function(am) {
                        var al = V.left - ah.left,
                            an = al + W - ad,
                            ao = V.top - ah.top,
                            aj = ao + U - ac,
                            ak = {
                                target: {
                                    element: T,
                                    left: V.left,
                                    top: V.top,
                                    width: W,
                                    height: U
                                },
                                element: {
                                    element: ab,
                                    left: ah.left,
                                    top: ah.top,
                                    width: ad,
                                    height: ac
                                },
                                horizontal: an < 0 ? "left" : al > 0 ? "right" : "center",
                                vertical: aj < 0 ? "top" : ao > 0 ? "bottom" : "middle"
                            };
                        if (W < ad && z(al + an) < W) {
                            ak.horizontal = "center"
                        }
                        if (U < ac && z(ao + aj) < U) {
                            ak.vertical = "middle"
                        }
                        if (D(z(al), z(an)) > D(z(ao), z(aj))) {
                            ak.important = "horizontal"
                        } else {
                            ak.important = "vertical"
                        }
                        R.using.call(this, am, ak)
                    }
                }
                ab.offset(a.extend(ah, {
                    using: ai
                }))
            })
        };
        a.ui.position = {
            fit: {
                left: function(S, N) {
                    var T = N.within,
                        U = T.isWindow ? T.scrollLeft : T.offset.left,
                        P = T.width,
                        M = S.left - N.collisionPosition.marginLeft,
                        Q = U - M,
                        R = M + N.collisionWidth - P - U,
                        O;
                    if (N.collisionWidth > P) {
                        if (Q > 0 && R <= 0) {
                            O = S.left + Q + N.collisionWidth - P - U;
                            S.left += Q - O
                        } else {
                            if (R > 0 && Q <= 0) {
                                S.left = U
                            } else {
                                if (Q > R) {
                                    S.left = U + P - N.collisionWidth
                                } else {
                                    S.left = U
                                }
                            }
                        }
                    } else {
                        if (Q > 0) {
                            S.left += Q
                        } else {
                            if (R > 0) {
                                S.left -= R
                            } else {
                                S.left = D(S.left - M, S.left)
                            }
                        }
                    }
                },
                top: function(S, N) {
                    var T = N.within,
                        U = T.isWindow ? T.scrollTop : T.offset.top,
                        P = N.within.height,
                        M = S.top - N.collisionPosition.marginTop,
                        R = U - M,
                        Q = M + N.collisionHeight - P - U,
                        O;
                    if (N.collisionHeight > P) {
                        if (R > 0 && Q <= 0) {
                            O = S.top + R + N.collisionHeight - P - U;
                            S.top += R - O
                        } else {
                            if (Q > 0 && R <= 0) {
                                S.top = U
                            } else {
                                if (R > Q) {
                                    S.top = U + P - N.collisionHeight
                                } else {
                                    S.top = U
                                }
                            }
                        }
                    } else {
                        if (R > 0) {
                            S.top += R
                        } else {
                            if (Q > 0) {
                                S.top -= Q
                            } else {
                                S.top = D(S.top - M, S.top)
                            }
                        }
                    }
                }
            },
            flip: {
                left: function(X, O) {
                    var Y = O.within,
                        Z = Y.offset.left + Y.scrollLeft,
                        U = Y.width,
                        T = Y.isWindow ? Y.scrollLeft : Y.offset.left,
                        N = X.left - O.collisionPosition.marginLeft,
                        V = N - T,
                        W = N + O.collisionWidth - U - T,
                        P = O.my[0] === "left" ? -O.elemWidth : O.my[0] === "right" ? O.elemWidth : 0,
                        M = O.at[0] === "left" ? O.targetWidth : O.at[0] === "right" ? -O.targetWidth : 0,
                        S = -2 * O.offset[0],
                        R, Q;
                    if (V < 0) {
                        R = X.left + P + M + S + O.collisionWidth - U - Z;
                        if (R < 0 || R < z(V)) {
                            X.left += P + M + S
                        }
                    } else {
                        if (W > 0) {
                            Q = X.left - O.collisionPosition.marginLeft + P + M + S - T;
                            if (Q > 0 || z(Q) < W) {
                                X.left += P + M + S
                            }
                        }
                    }
                },
                top: function(X, O) {
                    var Z = O.within,
                        aa = Z.offset.top + Z.scrollTop,
                        U = Z.height,
                        T = Z.isWindow ? Z.scrollTop : Z.offset.top,
                        N = X.top - O.collisionPosition.marginTop,
                        W = N - T,
                        V = N + O.collisionHeight - U - T,
                        Y = O.my[1] === "top",
                        P = Y ? -O.elemHeight : O.my[1] === "bottom" ? O.elemHeight : 0,
                        M = O.at[1] === "top" ? O.targetHeight : O.at[1] === "bottom" ? -O.targetHeight : 0,
                        S = -2 * O.offset[1],
                        R, Q;
                    if (W < 0) {
                        Q = X.top + P + M + S + O.collisionHeight - U - aa;
                        if (Q < 0 || Q < z(W)) {
                            X.top += P + M + S
                        }
                    } else {
                        if (V > 0) {
                            R = X.top - O.collisionPosition.marginTop + P + M + S - T;
                            if (R > 0 || z(R) < V) {
                                X.top += P + M + S
                            }
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments);
                    a.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments);
                    a.ui.position.fit.top.apply(this, arguments)
                }
            }
        };
        (function() {
            var Q, R, S, P, O, M = document.getElementsByTagName("body")[0],
                N = document.createElement("div");
            Q = document.createElement(M ? "div" : "body");
            S = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            if (M) {
                a.extend(S, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                })
            }
            for (O in S) {
                Q.style[O] = S[O]
            }
            Q.appendChild(N);
            R = M || document.documentElement;
            R.insertBefore(Q, R.firstChild);
            N.style.cssText = "position: absolute; left: 10.7432222px;";
            P = a(N).offset().left;
            L = P > 10 && P < 11;
            Q.innerHTML = "";
            R.removeChild(Q)
        })()
    })();
    var n = a.ui.position;
    /*
     * jQuery UI Draggable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/draggable/
     */
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === "original") {
                this._setPositionRelative()
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable")
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled")
            }
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(y, z) {
            this._super(y, z);
            if (y === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName()
            }
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return
            }
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._removeHandleClassName();
            this._mouseDestroy()
        },
        _mouseCapture: function(y) {
            var z = this.options;
            this._blurActiveElement(y);
            if (this.helper || z.disabled || a(y.target).closest(".ui-resizable-handle").length > 0) {
                return false
            }
            this.handle = this._getHandle(y);
            if (!this.handle) {
                return false
            }
            this._blockFrames(z.iframeFix === true ? "iframe" : z.iframeFix);
            return true
        },
        _blockFrames: function(y) {
            this.iframeBlocks = this.document.find(y).map(function() {
                var z = a(this);
                return a("<div>").css("position", "absolute").appendTo(z.parent()).outerWidth(z.outerWidth()).outerHeight(z.outerHeight()).offset(z.offset())[0]
            })
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },
        _blurActiveElement: function(A) {
            var y = this.document[0];
            if (!this.handleElement.is(A.target)) {
                return
            }
            try {
                if (y.activeElement && y.activeElement.nodeName.toLowerCase() !== "body") {
                    a(y.activeElement).blur()
                }
            } catch (z) {}
        },
        _mouseStart: function(y) {
            var z = this.options;
            this.helper = this._createHelper(y);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return a(this).css("position") === "fixed"
            }).length > 0;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(y);
            this.originalPosition = this.position = this._generatePosition(y, false);
            this.originalPageX = y.pageX;
            this.originalPageY = y.pageY;
            (z.cursorAt && this._adjustOffsetFromHelper(z.cursorAt));
            this._setContainment();
            if (this._trigger("start", y) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !z.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, y)
            }
            this._normalizeRightBottom();
            this._mouseDrag(y, true);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStart(this, y)
            }
            return true
        },
        _refreshOffsets: function(y) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: y.pageX - this.offset.left,
                top: y.pageY - this.offset.top
            }
        },
        _mouseDrag: function(y, z) {
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset()
            }
            this.position = this._generatePosition(y, true);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!z) {
                var A = this._uiHash();
                if (this._trigger("drag", y, A) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = A.position
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, y)
            }
            return false
        },
        _mouseStop: function(z) {
            var A = this,
                y = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                y = a.ui.ddmanager.drop(this, z)
            }
            if (this.dropped) {
                y = this.dropped;
                this.dropped = false
            }
            if ((this.options.revert === "invalid" && !y) || (this.options.revert === "valid" && y) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, y))) {
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (A._trigger("stop", z) !== false) {
                        A._clear()
                    }
                })
            } else {
                if (this._trigger("stop", z) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function(y) {
            this._unblockFrames();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStop(this, y)
            }
            if (this.handleElement.is(y.target)) {
                this.element.focus()
            }
            return a.ui.mouse.prototype._mouseUp.call(this, y)
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function(y) {
            return this.options.handle ? !!a(y.target).closest(this.element.find(this.options.handle)).length : true
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(y) {
            var B = this.options,
                A = a.isFunction(B.helper),
                z = A ? a(B.helper.apply(this.element[0], [y])) : (B.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!z.parents("body").length) {
                z.appendTo((B.appendTo === "parent" ? this.element[0].parentNode : B.appendTo))
            }
            if (A && z[0] === this.element[0]) {
                this._setPositionRelative()
            }
            if (z[0] !== this.element[0] && !(/(fixed|absolute)/).test(z.css("position"))) {
                z.css("position", "absolute")
            }
            return z
        },
        _setPositionRelative: function() {
            if (!(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
        },
        _adjustOffsetFromHelper: function(y) {
            if (typeof y === "string") {
                y = y.split(" ")
            }
            if (a.isArray(y)) {
                y = {
                    left: +y[0],
                    top: +y[1] || 0
                }
            }
            if ("left" in y) {
                this.offset.click.left = y.left + this.margins.left
            }
            if ("right" in y) {
                this.offset.click.left = this.helperProportions.width - y.right + this.margins.left
            }
            if ("top" in y) {
                this.offset.click.top = y.top + this.margins.top
            }
            if ("bottom" in y) {
                this.offset.click.top = this.helperProportions.height - y.bottom + this.margins.top
            }
        },
        _isRootNode: function(y) {
            return (/(html|body)/i).test(y.tagName) || y === this.document[0]
        },
        _getParentOffset: function() {
            var z = this.offsetParent.offset(),
                y = this.document[0];
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== y && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                z.left += this.scrollParent.scrollLeft();
                z.top += this.scrollParent.scrollTop()
            }
            if (this._isRootNode(this.offsetParent[0])) {
                z = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: z.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: z.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") {
                return {
                    top: 0,
                    left: 0
                }
            }
            var y = this.element.position(),
                z = this._isRootNode(this.scrollParent[0]);
            return {
                top: y.top - (parseInt(this.helper.css("top"), 10) || 0) + (!z ? this.scrollParent.scrollTop() : 0),
                left: y.left - (parseInt(this.helper.css("left"), 10) || 0) + (!z ? this.scrollParent.scrollLeft() : 0)
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var B, y, z, C = this.options,
                A = this.document[0];
            this.relativeContainer = null;
            if (!C.containment) {
                this.containment = null;
                return
            }
            if (C.containment === "window") {
                this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || A.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (C.containment === "document") {
                this.containment = [0, 0, a(A).width() - this.helperProportions.width - this.margins.left, (a(A).height() || A.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (C.containment.constructor === Array) {
                this.containment = C.containment;
                return
            }
            if (C.containment === "parent") {
                C.containment = this.helper[0].parentNode
            }
            y = a(C.containment);
            z = y[0];
            if (!z) {
                return
            }
            B = /(scroll|auto)/.test(y.css("overflow"));
            this.containment = [(parseInt(y.css("borderLeftWidth"), 10) || 0) + (parseInt(y.css("paddingLeft"), 10) || 0), (parseInt(y.css("borderTopWidth"), 10) || 0) + (parseInt(y.css("paddingTop"), 10) || 0), (B ? Math.max(z.scrollWidth, z.offsetWidth) : z.offsetWidth) - (parseInt(y.css("borderRightWidth"), 10) || 0) - (parseInt(y.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (B ? Math.max(z.scrollHeight, z.offsetHeight) : z.offsetHeight) - (parseInt(y.css("borderBottomWidth"), 10) || 0) - (parseInt(y.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relativeContainer = y
        },
        _convertPositionTo: function(y, A) {
            if (!A) {
                A = this.position
            }
            var z = y === "absolute" ? 1 : -1,
                B = this._isRootNode(this.scrollParent[0]);
            return {
                top: (A.top + this.offset.relative.top * z + this.offset.parent.top * z - ((this.cssPosition === "fixed" ? -this.offset.scroll.top : (B ? 0 : this.offset.scroll.top)) * z)),
                left: (A.left + this.offset.relative.left * z + this.offset.parent.left * z - ((this.cssPosition === "fixed" ? -this.offset.scroll.left : (B ? 0 : this.offset.scroll.left)) * z))
            }
        },
        _generatePosition: function(B, z) {
            var A, y, H, C, D = this.options,
                G = this._isRootNode(this.scrollParent[0]),
                E = B.pageX,
                F = B.pageY;
            if (!G || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }
            }
            if (z) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        y = this.relativeContainer.offset();
                        A = [this.containment[0] + y.left, this.containment[1] + y.top, this.containment[2] + y.left, this.containment[3] + y.top]
                    } else {
                        A = this.containment
                    }
                    if (B.pageX - this.offset.click.left < A[0]) {
                        E = A[0] + this.offset.click.left
                    }
                    if (B.pageY - this.offset.click.top < A[1]) {
                        F = A[1] + this.offset.click.top
                    }
                    if (B.pageX - this.offset.click.left > A[2]) {
                        E = A[2] + this.offset.click.left
                    }
                    if (B.pageY - this.offset.click.top > A[3]) {
                        F = A[3] + this.offset.click.top
                    }
                }
                if (D.grid) {
                    H = D.grid[1] ? this.originalPageY + Math.round((F - this.originalPageY) / D.grid[1]) * D.grid[1] : this.originalPageY;
                    F = A ? ((H - this.offset.click.top >= A[1] || H - this.offset.click.top > A[3]) ? H : ((H - this.offset.click.top >= A[1]) ? H - D.grid[1] : H + D.grid[1])) : H;
                    C = D.grid[0] ? this.originalPageX + Math.round((E - this.originalPageX) / D.grid[0]) * D.grid[0] : this.originalPageX;
                    E = A ? ((C - this.offset.click.left >= A[0] || C - this.offset.click.left > A[2]) ? C : ((C - this.offset.click.left >= A[0]) ? C - D.grid[0] : C + D.grid[0])) : C
                }
                if (D.axis === "y") {
                    E = this.originalPageX
                }
                if (D.axis === "x") {
                    F = this.originalPageY
                }
            }
            return {
                top: (F - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : (G ? 0 : this.offset.scroll.top))),
                left: (E - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : (G ? 0 : this.offset.scroll.left)))
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy()
            }
        },
        _normalizeRightBottom: function() {
            if (this.options.axis !== "y" && this.helper.css("right") !== "auto") {
                this.helper.width(this.helper.width());
                this.helper.css("right", "auto")
            }
            if (this.options.axis !== "x" && this.helper.css("bottom") !== "auto") {
                this.helper.height(this.helper.height());
                this.helper.css("bottom", "auto")
            }
        },
        _trigger: function(z, y, A) {
            A = A || this._uiHash();
            a.ui.plugin.call(this, z, [y, A, this], true);
            if (/^(drag|start|stop)/.test(z)) {
                this.positionAbs = this._convertPositionTo("absolute");
                A.offset = this.positionAbs
            }
            return a.Widget.prototype._trigger.call(this, z, y, A)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(z, A, y) {
            var B = a.extend({}, A, {
                item: y.element
            });
            y.sortables = [];
            a(y.options.connectToSortable).each(function() {
                var C = a(this).sortable("instance");
                if (C && !C.options.disabled) {
                    y.sortables.push(C);
                    C.refreshPositions();
                    C._trigger("activate", z, B)
                }
            })
        },
        stop: function(z, A, y) {
            var B = a.extend({}, A, {
                item: y.element
            });
            y.cancelHelperRemoval = false;
            a.each(y.sortables, function() {
                var C = this;
                if (C.isOver) {
                    C.isOver = 0;
                    y.cancelHelperRemoval = true;
                    C.cancelHelperRemoval = false;
                    C._storedCSS = {
                        position: C.placeholder.css("position"),
                        top: C.placeholder.css("top"),
                        left: C.placeholder.css("left")
                    };
                    C._mouseStop(z);
                    C.options.helper = C.options._helper
                } else {
                    C.cancelHelperRemoval = true;
                    C._trigger("deactivate", z, B)
                }
            })
        },
        drag: function(z, A, y) {
            a.each(y.sortables, function() {
                var B = false,
                    C = this;
                C.positionAbs = y.positionAbs;
                C.helperProportions = y.helperProportions;
                C.offset.click = y.offset.click;
                if (C._intersectsWith(C.containerCache)) {
                    B = true;
                    a.each(y.sortables, function() {
                        this.positionAbs = y.positionAbs;
                        this.helperProportions = y.helperProportions;
                        this.offset.click = y.offset.click;
                        if (this !== C && this._intersectsWith(this.containerCache) && a.contains(C.element[0], this.element[0])) {
                            B = false
                        }
                        return B
                    })
                }
                if (B) {
                    if (!C.isOver) {
                        C.isOver = 1;
                        y._parent = A.helper.parent();
                        C.currentItem = A.helper.appendTo(C.element).data("ui-sortable-item", true);
                        C.options._helper = C.options.helper;
                        C.options.helper = function() {
                            return A.helper[0]
                        };
                        z.target = C.currentItem[0];
                        C._mouseCapture(z, true);
                        C._mouseStart(z, true, true);
                        C.offset.click.top = y.offset.click.top;
                        C.offset.click.left = y.offset.click.left;
                        C.offset.parent.left -= y.offset.parent.left - C.offset.parent.left;
                        C.offset.parent.top -= y.offset.parent.top - C.offset.parent.top;
                        y._trigger("toSortable", z);
                        y.dropped = C.element;
                        a.each(y.sortables, function() {
                            this.refreshPositions()
                        });
                        y.currentItem = y.element;
                        C.fromOutside = y
                    }
                    if (C.currentItem) {
                        C._mouseDrag(z);
                        A.position = C.position
                    }
                } else {
                    if (C.isOver) {
                        C.isOver = 0;
                        C.cancelHelperRemoval = true;
                        C.options._revert = C.options.revert;
                        C.options.revert = false;
                        C._trigger("out", z, C._uiHash(C));
                        C._mouseStop(z, true);
                        C.options.revert = C.options._revert;
                        C.options.helper = C.options._helper;
                        if (C.placeholder) {
                            C.placeholder.remove()
                        }
                        A.helper.appendTo(y._parent);
                        y._refreshOffsets(z);
                        A.position = y._generatePosition(z, true);
                        y._trigger("fromSortable", z);
                        y.dropped = false;
                        a.each(y.sortables, function() {
                            this.refreshPositions()
                        })
                    }
                }
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function(y, C, z) {
            var B = a("body"),
                A = z.options;
            if (B.css("cursor")) {
                A._cursor = B.css("cursor")
            }
            B.css("cursor", A.cursor)
        },
        stop: function(y, B, z) {
            var A = z.options;
            if (A._cursor) {
                a("body").css("cursor", A._cursor)
            }
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(y, C, z) {
            var B = a(C.helper),
                A = z.options;
            if (B.css("opacity")) {
                A._opacity = B.css("opacity")
            }
            B.css("opacity", A.opacity)
        },
        stop: function(y, B, z) {
            var A = z.options;
            if (A._opacity) {
                a(B.helper).css("opacity", A._opacity)
            }
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function(y, A, z) {
            if (!z.scrollParentNotHidden) {
                z.scrollParentNotHidden = z.helper.scrollParent(false)
            }
            if (z.scrollParentNotHidden[0] !== z.document[0] && z.scrollParentNotHidden[0].tagName !== "HTML") {
                z.overflowOffset = z.scrollParentNotHidden.offset()
            }
        },
        drag: function(z, E, A) {
            var B = A.options,
                C = false,
                D = A.scrollParentNotHidden[0],
                y = A.document[0];
            if (D !== y && D.tagName !== "HTML") {
                if (!B.axis || B.axis !== "x") {
                    if ((A.overflowOffset.top + D.offsetHeight) - z.pageY < B.scrollSensitivity) {
                        D.scrollTop = C = D.scrollTop + B.scrollSpeed
                    } else {
                        if (z.pageY - A.overflowOffset.top < B.scrollSensitivity) {
                            D.scrollTop = C = D.scrollTop - B.scrollSpeed
                        }
                    }
                }
                if (!B.axis || B.axis !== "y") {
                    if ((A.overflowOffset.left + D.offsetWidth) - z.pageX < B.scrollSensitivity) {
                        D.scrollLeft = C = D.scrollLeft + B.scrollSpeed
                    } else {
                        if (z.pageX - A.overflowOffset.left < B.scrollSensitivity) {
                            D.scrollLeft = C = D.scrollLeft - B.scrollSpeed
                        }
                    }
                }
            } else {
                if (!B.axis || B.axis !== "x") {
                    if (z.pageY - a(y).scrollTop() < B.scrollSensitivity) {
                        C = a(y).scrollTop(a(y).scrollTop() - B.scrollSpeed)
                    } else {
                        if (a(window).height() - (z.pageY - a(y).scrollTop()) < B.scrollSensitivity) {
                            C = a(y).scrollTop(a(y).scrollTop() + B.scrollSpeed)
                        }
                    }
                }
                if (!B.axis || B.axis !== "y") {
                    if (z.pageX - a(y).scrollLeft() < B.scrollSensitivity) {
                        C = a(y).scrollLeft(a(y).scrollLeft() - B.scrollSpeed)
                    } else {
                        if (a(window).width() - (z.pageX - a(y).scrollLeft()) < B.scrollSensitivity) {
                            C = a(y).scrollLeft(a(y).scrollLeft() + B.scrollSpeed)
                        }
                    }
                }
            }
            if (C !== false && a.ui.ddmanager && !B.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(A, z)
            }
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function(y, B, z) {
            var A = z.options;
            z.snapElements = [];
            a(A.snap.constructor !== String ? (A.snap.items || ":data(ui-draggable)") : A.snap).each(function() {
                var D = a(this),
                    C = D.offset();
                if (this !== z.element[0]) {
                    z.snapElements.push({
                        item: this,
                        width: D.outerWidth(),
                        height: D.outerHeight(),
                        top: C.top,
                        left: C.left
                    })
                }
            })
        },
        drag: function(B, M, E) {
            var L, z, G, J, F, I, K, y, D, C, H = E.options,
                A = H.snapTolerance,
                N = M.offset.left,
                O = N + E.helperProportions.width,
                P = M.offset.top,
                Q = P + E.helperProportions.height;
            for (D = E.snapElements.length - 1; D >= 0; D--) {
                F = E.snapElements[D].left - E.margins.left;
                I = F + E.snapElements[D].width;
                K = E.snapElements[D].top - E.margins.top;
                y = K + E.snapElements[D].height;
                if (O < F - A || N > I + A || Q < K - A || P > y + A || !a.contains(E.snapElements[D].item.ownerDocument, E.snapElements[D].item)) {
                    if (E.snapElements[D].snapping) {
                        (E.options.snap.release && E.options.snap.release.call(E.element, B, a.extend(E._uiHash(), {
                            snapItem: E.snapElements[D].item
                        })))
                    }
                    E.snapElements[D].snapping = false;
                    continue
                }
                if (H.snapMode !== "inner") {
                    L = Math.abs(K - Q) <= A;
                    z = Math.abs(y - P) <= A;
                    G = Math.abs(F - O) <= A;
                    J = Math.abs(I - N) <= A;
                    if (L) {
                        M.position.top = E._convertPositionTo("relative", {
                            top: K - E.helperProportions.height,
                            left: 0
                        }).top
                    }
                    if (z) {
                        M.position.top = E._convertPositionTo("relative", {
                            top: y,
                            left: 0
                        }).top
                    }
                    if (G) {
                        M.position.left = E._convertPositionTo("relative", {
                            top: 0,
                            left: F - E.helperProportions.width
                        }).left
                    }
                    if (J) {
                        M.position.left = E._convertPositionTo("relative", {
                            top: 0,
                            left: I
                        }).left
                    }
                }
                C = (L || z || G || J);
                if (H.snapMode !== "outer") {
                    L = Math.abs(K - P) <= A;
                    z = Math.abs(y - Q) <= A;
                    G = Math.abs(F - N) <= A;
                    J = Math.abs(I - O) <= A;
                    if (L) {
                        M.position.top = E._convertPositionTo("relative", {
                            top: K,
                            left: 0
                        }).top
                    }
                    if (z) {
                        M.position.top = E._convertPositionTo("relative", {
                            top: y - E.helperProportions.height,
                            left: 0
                        }).top
                    }
                    if (G) {
                        M.position.left = E._convertPositionTo("relative", {
                            top: 0,
                            left: F
                        }).left
                    }
                    if (J) {
                        M.position.left = E._convertPositionTo("relative", {
                            top: 0,
                            left: I - E.helperProportions.width
                        }).left
                    }
                }
                if (!E.snapElements[D].snapping && (L || z || G || J || C)) {
                    (E.options.snap.snap && E.options.snap.snap.call(E.element, B, a.extend(E._uiHash(), {
                        snapItem: E.snapElements[D].item
                    })))
                }
                E.snapElements[D].snapping = (L || z || G || J || C)
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function(y, D, A) {
            var B, C = A.options,
                z = a.makeArray(a(C.stack)).sort(function(E, F) {
                    return (parseInt(a(E).css("zIndex"), 10) || 0) - (parseInt(a(F).css("zIndex"), 10) || 0)
                });
            if (!z.length) {
                return
            }
            B = parseInt(a(z[0]).css("zIndex"), 10) || 0;
            a(z).each(function(E) {
                a(this).css("zIndex", B + E)
            });
            this.css("zIndex", (B + z.length))
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(y, C, z) {
            var B = a(C.helper),
                A = z.options;
            if (B.css("zIndex")) {
                A._zIndex = B.css("zIndex")
            }
            B.css("zIndex", A.zIndex)
        },
        stop: function(y, B, z) {
            var A = z.options;
            if (A._zIndex) {
                a(B.helper).css("zIndex", A._zIndex)
            }
        }
    });
    var g = a.ui.draggable;
    /*
     * jQuery UI Resizable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/resizable/
     */
    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(y) {
            return parseInt(y, 10) || 0
        },
        _isNumber: function(y) {
            return !isNaN(parseInt(y, 10))
        },
        _hasScroll: function(z, y) {
            if (a(z).css("overflow") === "hidden") {
                return false
            }
            var B = (y && y === "left") ? "scrollLeft" : "scrollTop",
                A = false;
            if (z[B] > 0) {
                return true
            }
            z[B] = 1;
            A = (z[B] > 0);
            z[B] = 0;
            return A
        },
        _create: function() {
            var C, B, z, y, A, E = this,
                D = this.options;
            this.element.addClass("ui-resizable");
            a.extend(this, {
                _aspectRatio: !!(D.aspectRatio),
                aspectRatio: D.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: D.helper || D.ghost || D.animate ? D.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
                this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles = D.handles || (!a(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            this._handles = a();
            if (this.handles.constructor === String) {
                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                C = this.handles.split(",");
                this.handles = {};
                for (B = 0; B < C.length; B++) {
                    z = a.trim(C[B]);
                    A = "ui-resizable-" + z;
                    y = a("<div class='ui-resizable-handle " + A + "'></div>");
                    y.css({
                        zIndex: D.zIndex
                    });
                    if ("se" === z) {
                        y.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[z] = ".ui-resizable-" + z;
                    this.element.append(y)
                }
            }
            this._renderAxis = function(J) {
                var G, F, H, I;
                J = J || this.element;
                for (G in this.handles) {
                    if (this.handles[G].constructor === String) {
                        this.handles[G] = this.element.children(this.handles[G]).first().show()
                    } else {
                        if (this.handles[G].jquery || this.handles[G].nodeType) {
                            this.handles[G] = a(this.handles[G]);
                            this._on(this.handles[G], {
                                mousedown: E._mouseDown
                            })
                        }
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
                        F = a(this.handles[G], this.element);
                        I = /sw|ne|nw|se|n|s/.test(G) ? F.outerHeight() : F.outerWidth();
                        H = ["padding", /ne|nw|n/.test(G) ? "Top" : /se|sw|s/.test(G) ? "Bottom" : /^e$/.test(G) ? "Right" : "Left"].join("");
                        J.css(H, I);
                        this._proportionallyResize()
                    }
                    this._handles = this._handles.add(this.handles[G])
                }
            };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.mouseover(function() {
                if (!E.resizing) {
                    if (this.className) {
                        y = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    E.axis = y && y[1] ? y[1] : "se"
                }
            });
            if (D.autoHide) {
                this._handles.hide();
                a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    if (D.disabled) {
                        return
                    }
                    a(this).removeClass("ui-resizable-autohide");
                    E._handles.show()
                }).mouseleave(function() {
                    if (D.disabled) {
                        return
                    }
                    if (!E.resizing) {
                        a(this).addClass("ui-resizable-autohide");
                        E._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var z, y = function(A) {
                a(A).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                y(this.element);
                z = this.element;
                this.originalElement.css({
                    position: z.css("position"),
                    width: z.outerWidth(),
                    height: z.outerHeight(),
                    top: z.css("top"),
                    left: z.css("left")
                }).insertAfter(z);
                z.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            y(this.originalElement);
            return this
        },
        _mouseCapture: function(z) {
            var B, A, y = false;
            for (B in this.handles) {
                A = a(this.handles[B])[0];
                if (A === z.target || a.contains(A, z.target)) {
                    y = true
                }
            }
            return !this.options.disabled && y
        },
        _mouseStart: function(C) {
            var y, A, z, D = this.options,
                B = this.element;
            this.resizing = true;
            this._renderProxy();
            y = this._num(this.helper.css("left"));
            A = this._num(this.helper.css("top"));
            if (D.containment) {
                y += a(D.containment).scrollLeft() || 0;
                A += a(D.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: y,
                top: A
            };
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: B.width(),
                height: B.height()
            };
            this.originalSize = this._helper ? {
                width: B.outerWidth(),
                height: B.outerHeight()
            } : {
                width: B.width(),
                height: B.height()
            };
            this.sizeDiff = {
                width: B.outerWidth() - B.width(),
                height: B.outerHeight() - B.height()
            };
            this.originalPosition = {
                left: y,
                top: A
            };
            this.originalMousePosition = {
                left: C.pageX,
                top: C.pageY
            };
            this.aspectRatio = (typeof D.aspectRatio === "number") ? D.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            z = a(".ui-resizable-" + this.axis).css("cursor");
            a("body").css("cursor", z === "auto" ? this.axis + "-resize" : z);
            B.addClass("ui-resizable-resizing");
            this._propagate("start", C);
            return true
        },
        _mouseDrag: function(C) {
            var z, D, E = this.originalMousePosition,
                y = this.axis,
                A = (C.pageX - E.left) || 0,
                B = (C.pageY - E.top) || 0,
                F = this._change[y];
            this._updatePrevProperties();
            if (!F) {
                return false
            }
            z = F.apply(this, [C, A, B]);
            this._updateVirtualBoundaries(C.shiftKey);
            if (this._aspectRatio || C.shiftKey) {
                z = this._updateRatio(z, C)
            }
            z = this._respectSize(z, C);
            this._updateCache(z);
            this._propagate("resize", C);
            D = this._applyChanges();
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            if (!a.isEmptyObject(D)) {
                this._updatePrevProperties();
                this._trigger("resize", C, this.ui());
                this._applyChanges()
            }
            return false
        },
        _mouseStop: function(y) {
            this.resizing = false;
            var C, z, E, F, D, A, H, B = this.options,
                G = this;
            if (this._helper) {
                C = this._proportionallyResizeElements;
                z = C.length && (/textarea/i).test(C[0].nodeName);
                E = z && this._hasScroll(C[0], "left") ? 0 : G.sizeDiff.height;
                F = z ? 0 : G.sizeDiff.width;
                D = {
                    width: (G.helper.width() - F),
                    height: (G.helper.height() - E)
                };
                A = (parseInt(G.element.css("left"), 10) + (G.position.left - G.originalPosition.left)) || null;
                H = (parseInt(G.element.css("top"), 10) + (G.position.top - G.originalPosition.top)) || null;
                if (!B.animate) {
                    this.element.css(a.extend(D, {
                        top: H,
                        left: A
                    }))
                }
                G.helper.height(G.size.height);
                G.helper.width(G.size.width);
                if (this._helper && !B.animate) {
                    this._proportionallyResize()
                }
            }
            a("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", y);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var y = {};
            if (this.position.top !== this.prevPosition.top) {
                y.top = this.position.top + "px"
            }
            if (this.position.left !== this.prevPosition.left) {
                y.left = this.position.left + "px"
            }
            if (this.size.width !== this.prevSize.width) {
                y.width = this.size.width + "px"
            }
            if (this.size.height !== this.prevSize.height) {
                y.height = this.size.height + "px"
            }
            this.helper.css(y);
            return y
        },
        _updateVirtualBoundaries: function(z) {
            var E, C, D, B, y, A = this.options;
            y = {
                minWidth: this._isNumber(A.minWidth) ? A.minWidth : 0,
                maxWidth: this._isNumber(A.maxWidth) ? A.maxWidth : Infinity,
                minHeight: this._isNumber(A.minHeight) ? A.minHeight : 0,
                maxHeight: this._isNumber(A.maxHeight) ? A.maxHeight : Infinity
            };
            if (this._aspectRatio || z) {
                E = y.minHeight * this.aspectRatio;
                D = y.minWidth / this.aspectRatio;
                C = y.maxHeight * this.aspectRatio;
                B = y.maxWidth / this.aspectRatio;
                if (E > y.minWidth) {
                    y.minWidth = E
                }
                if (D > y.minHeight) {
                    y.minHeight = D
                }
                if (C < y.maxWidth) {
                    y.maxWidth = C
                }
                if (B < y.maxHeight) {
                    y.maxHeight = B
                }
            }
            this._vBoundaries = y
        },
        _updateCache: function(y) {
            this.offset = this.helper.offset();
            if (this._isNumber(y.left)) {
                this.position.left = y.left
            }
            if (this._isNumber(y.top)) {
                this.position.top = y.top
            }
            if (this._isNumber(y.height)) {
                this.size.height = y.height
            }
            if (this._isNumber(y.width)) {
                this.size.width = y.width
            }
        },
        _updateRatio: function(B) {
            var z = this.position,
                A = this.size,
                y = this.axis;
            if (this._isNumber(B.height)) {
                B.width = (B.height * this.aspectRatio)
            } else {
                if (this._isNumber(B.width)) {
                    B.height = (B.width / this.aspectRatio)
                }
            }
            if (y === "sw") {
                B.left = z.left + (A.width - B.width);
                B.top = null
            }
            if (y === "nw") {
                B.top = z.top + (A.height - B.height);
                B.left = z.left + (A.width - B.width)
            }
            return B
        },
        _respectSize: function(B) {
            var I = this._vBoundaries,
                y = this.axis,
                F = this._isNumber(B.width) && I.maxWidth && (I.maxWidth < B.width),
                E = this._isNumber(B.height) && I.maxHeight && (I.maxHeight < B.height),
                H = this._isNumber(B.width) && I.minWidth && (I.minWidth > B.width),
                G = this._isNumber(B.height) && I.minHeight && (I.minHeight > B.height),
                D = this.originalPosition.left + this.originalSize.width,
                C = this.position.top + this.size.height,
                A = /sw|nw|w/.test(y),
                z = /nw|ne|n/.test(y);
            if (H) {
                B.width = I.minWidth
            }
            if (G) {
                B.height = I.minHeight
            }
            if (F) {
                B.width = I.maxWidth
            }
            if (E) {
                B.height = I.maxHeight
            }
            if (H && A) {
                B.left = D - I.minWidth
            }
            if (F && A) {
                B.left = D - I.maxWidth
            }
            if (G && z) {
                B.top = C - I.minHeight
            }
            if (E && z) {
                B.top = C - I.maxHeight
            }
            if (!B.width && !B.height && !B.left && B.top) {
                B.top = null
            } else {
                if (!B.width && !B.height && !B.top && B.left) {
                    B.left = null
                }
            }
            return B
        },
        _getPaddingPlusBorderDimensions: function(z) {
            var A = 0,
                C = [],
                y = [z.css("borderTopWidth"), z.css("borderRightWidth"), z.css("borderBottomWidth"), z.css("borderLeftWidth")],
                B = [z.css("paddingTop"), z.css("paddingRight"), z.css("paddingBottom"), z.css("paddingLeft")];
            for (; A < 4; A++) {
                C[A] = (parseInt(y[A], 10) || 0);
                C[A] += (parseInt(B[A], 10) || 0)
            }
            return {
                height: C[0] + C[2],
                width: C[1] + C[3]
            }
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var A, z = 0,
                y = this.helper || this.element;
            for (; z < this._proportionallyResizeElements.length; z++) {
                A = this._proportionallyResizeElements[z];
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions(A)
                }
                A.css({
                    height: (y.height() - this.outerDimensions.height) || 0,
                    width: (y.width() - this.outerDimensions.width) || 0
                })
            }
        },
        _renderProxy: function() {
            var y = this.element,
                z = this.options;
            this.elementOffset = y.offset();
            if (this._helper) {
                this.helper = this.helper || a("<div style='overflow:hidden;'></div>");
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++z.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function(z, y) {
                return {
                    width: this.originalSize.width + y
                }
            },
            w: function(A, z) {
                var y = this.originalSize,
                    B = this.originalPosition;
                return {
                    left: B.left + z,
                    width: y.width - z
                }
            },
            n: function(B, z, A) {
                var y = this.originalSize,
                    C = this.originalPosition;
                return {
                    top: C.top + A,
                    height: y.height - A
                }
            },
            s: function(A, y, z) {
                return {
                    height: this.originalSize.height + z
                }
            },
            se: function(A, y, z) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [A, y, z]))
            },
            sw: function(A, y, z) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [A, y, z]))
            },
            ne: function(A, y, z) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [A, y, z]))
            },
            nw: function(A, y, z) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [A, y, z]))
            }
        },
        _propagate: function(z, y) {
            a.ui.plugin.call(this, z, [y, this.ui()]);
            (z !== "resize" && this._trigger(z, y, this.ui()))
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    a.ui.plugin.add("resizable", "animate", {
        stop: function(y) {
            var G = a(this).resizable("instance"),
                B = G.options,
                C = G._proportionallyResizeElements,
                z = C.length && (/textarea/i).test(C[0].nodeName),
                D = z && G._hasScroll(C[0], "left") ? 0 : G.sizeDiff.height,
                E = z ? 0 : G.sizeDiff.width,
                F = {
                    width: (G.size.width - E),
                    height: (G.size.height - D)
                },
                A = (parseInt(G.element.css("left"), 10) + (G.position.left - G.originalPosition.left)) || null,
                H = (parseInt(G.element.css("top"), 10) + (G.position.top - G.originalPosition.top)) || null;
            G.element.animate(a.extend(F, H && A ? {
                top: H,
                left: A
            } : {}), {
                duration: B.animateDuration,
                easing: B.animateEasing,
                step: function() {
                    var I = {
                        width: parseInt(G.element.css("width"), 10),
                        height: parseInt(G.element.css("height"), 10),
                        top: parseInt(G.element.css("top"), 10),
                        left: parseInt(G.element.css("left"), 10)
                    };
                    if (C && C.length) {
                        a(C[0]).css({
                            width: I.width,
                            height: I.height
                        })
                    }
                    G._updateCache(I);
                    G._propagate("resize", y)
                }
            })
        }
    });
    a.ui.plugin.add("resizable", "containment", {
        start: function() {
            var D, H, A, z, B, J, E, I = a(this).resizable("instance"),
                F = I.options,
                C = I.element,
                G = F.containment,
                y = (G instanceof a) ? G.get(0) : (/parent/.test(G)) ? C.parent().get(0) : G;
            if (!y) {
                return
            }
            I.containerElement = a(y);
            if (/document/.test(G) || G === document) {
                I.containerOffset = {
                    left: 0,
                    top: 0
                };
                I.containerPosition = {
                    left: 0,
                    top: 0
                };
                I.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                D = a(y);
                H = [];
                a(["Top", "Right", "Left", "Bottom"]).each(function(K, L) {
                    H[K] = I._num(D.css("padding" + L))
                });
                I.containerOffset = D.offset();
                I.containerPosition = D.position();
                I.containerSize = {
                    height: (D.innerHeight() - H[3]),
                    width: (D.innerWidth() - H[1])
                };
                A = I.containerOffset;
                z = I.containerSize.height;
                B = I.containerSize.width;
                J = (I._hasScroll(y, "left") ? y.scrollWidth : B);
                E = (I._hasScroll(y) ? y.scrollHeight : z);
                I.parentData = {
                    element: y,
                    left: A.left,
                    top: A.top,
                    width: J,
                    height: E
                }
            }
        },
        resize: function(D) {
            var K, E, G, F, J = a(this).resizable("instance"),
                H = J.options,
                z = J.containerOffset,
                C = J.position,
                I = J._aspectRatio || D.shiftKey,
                B = {
                    top: 0,
                    left: 0
                },
                y = J.containerElement,
                A = true;
            if (y[0] !== document && (/static/).test(y.css("position"))) {
                B = z
            }
            if (C.left < (J._helper ? z.left : 0)) {
                J.size.width = J.size.width + (J._helper ? (J.position.left - z.left) : (J.position.left - B.left));
                if (I) {
                    J.size.height = J.size.width / J.aspectRatio;
                    A = false
                }
                J.position.left = H.helper ? z.left : 0
            }
            if (C.top < (J._helper ? z.top : 0)) {
                J.size.height = J.size.height + (J._helper ? (J.position.top - z.top) : J.position.top);
                if (I) {
                    J.size.width = J.size.height * J.aspectRatio;
                    A = false
                }
                J.position.top = J._helper ? z.top : 0
            }
            G = J.containerElement.get(0) === J.element.parent().get(0);
            F = /relative|absolute/.test(J.containerElement.css("position"));
            if (G && F) {
                J.offset.left = J.parentData.left + J.position.left;
                J.offset.top = J.parentData.top + J.position.top
            } else {
                J.offset.left = J.element.offset().left;
                J.offset.top = J.element.offset().top
            }
            K = Math.abs(J.sizeDiff.width + (J._helper ? J.offset.left - B.left : (J.offset.left - z.left)));
            E = Math.abs(J.sizeDiff.height + (J._helper ? J.offset.top - B.top : (J.offset.top - z.top)));
            if (K + J.size.width >= J.parentData.width) {
                J.size.width = J.parentData.width - K;
                if (I) {
                    J.size.height = J.size.width / J.aspectRatio;
                    A = false
                }
            }
            if (E + J.size.height >= J.parentData.height) {
                J.size.height = J.parentData.height - E;
                if (I) {
                    J.size.width = J.size.height * J.aspectRatio;
                    A = false
                }
            }
            if (!A) {
                J.position.left = J.prevPosition.left;
                J.position.top = J.prevPosition.top;
                J.size.width = J.prevSize.width;
                J.size.height = J.prevSize.height
            }
        },
        stop: function() {
            var F = a(this).resizable("instance"),
                E = F.options,
                z = F.containerOffset,
                A = F.containerPosition,
                y = F.containerElement,
                C = a(F.helper),
                D = C.offset(),
                G = C.outerWidth() - F.sizeDiff.width,
                B = C.outerHeight() - F.sizeDiff.height;
            if (F._helper && !E.animate && (/relative/).test(y.css("position"))) {
                a(this).css({
                    left: D.left - A.left - z.left,
                    width: G,
                    height: B
                })
            }
            if (F._helper && !E.animate && (/static/).test(y.css("position"))) {
                a(this).css({
                    left: D.left - A.left - z.left,
                    width: G,
                    height: B
                })
            }
        }
    });
    a.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var z = a(this).resizable("instance"),
                y = z.options;
            a(y.alsoResize).each(function() {
                var A = a(this);
                A.data("ui-resizable-alsoresize", {
                    width: parseInt(A.width(), 10),
                    height: parseInt(A.height(), 10),
                    left: parseInt(A.css("left"), 10),
                    top: parseInt(A.css("top"), 10)
                })
            })
        },
        resize: function(z, E) {
            var D = a(this).resizable("instance"),
                A = D.options,
                C = D.originalSize,
                B = D.originalPosition,
                y = {
                    height: (D.size.height - C.height) || 0,
                    width: (D.size.width - C.width) || 0,
                    top: (D.position.top - B.top) || 0,
                    left: (D.position.left - B.left) || 0
                };
            a(A.alsoResize).each(function() {
                var G = a(this),
                    H = a(this).data("ui-resizable-alsoresize"),
                    I = {},
                    F = G.parents(E.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                a.each(F, function(J, K) {
                    var L = (H[K] || 0) + (y[K] || 0);
                    if (L && L >= 0) {
                        I[K] = L || null
                    }
                });
                G.css(I)
            })
        },
        stop: function() {
            a(this).removeData("resizable-alsoresize")
        }
    });
    a.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var A = a(this).resizable("instance"),
                z = A.options,
                y = A.size;
            A.ghost = A.originalElement.clone();
            A.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: y.height,
                width: y.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof z.ghost === "string" ? z.ghost : "");
            A.ghost.appendTo(A.helper)
        },
        resize: function() {
            var y = a(this).resizable("instance");
            if (y.ghost) {
                y.ghost.css({
                    position: "relative",
                    height: y.size.height,
                    width: y.size.width
                })
            }
        },
        stop: function() {
            var y = a(this).resizable("instance");
            if (y.ghost && y.helper) {
                y.helper.get(0).removeChild(y.ghost.get(0))
            }
        }
    });
    a.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var M, P = a(this).resizable("instance"),
                J = P.options,
                z = P.size,
                L = P.originalSize,
                K = P.originalPosition,
                y = P.axis,
                A = typeof J.grid === "number" ? [J.grid, J.grid] : J.grid,
                B = (A[0] || 1),
                C = (A[1] || 1),
                N = Math.round((z.width - L.width) / B) * B,
                O = Math.round((z.height - L.height) / C) * C,
                I = L.width + N,
                H = L.height + O,
                E = J.maxWidth && (J.maxWidth < I),
                D = J.maxHeight && (J.maxHeight < H),
                G = J.minWidth && (J.minWidth > I),
                F = J.minHeight && (J.minHeight > H);
            J.grid = A;
            if (G) {
                I += B
            }
            if (F) {
                H += C
            }
            if (E) {
                I -= B
            }
            if (D) {
                H -= C
            }
            if (/^(se|s|e)$/.test(y)) {
                P.size.width = I;
                P.size.height = H
            } else {
                if (/^(ne)$/.test(y)) {
                    P.size.width = I;
                    P.size.height = H;
                    P.position.top = K.top - O
                } else {
                    if (/^(sw)$/.test(y)) {
                        P.size.width = I;
                        P.size.height = H;
                        P.position.left = K.left - N
                    } else {
                        if (H - C <= 0 || I - B <= 0) {
                            M = P._getPaddingPlusBorderDimensions(this)
                        }
                        if (H - C > 0) {
                            P.size.height = H;
                            P.position.top = K.top - O
                        } else {
                            H = C - M.height;
                            P.size.height = H;
                            P.position.top = K.top + L.height - H
                        }
                        if (I - B > 0) {
                            P.size.width = I;
                            P.position.left = K.left - N
                        } else {
                            I = B - M.width;
                            P.size.width = I;
                            P.position.left = K.left + L.width - I
                        }
                    }
                }
            }
        }
    });
    var p = a.ui.resizable;
    /*
     * jQuery UI Accordion 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/accordion/
     */
    var b = a.widget("ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var y = this.options;
            this.prevShow = this.prevHide = a();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            if (!y.collapsible && (y.active === false || y.active == null)) {
                y.active = 0
            }
            this._processPanels();
            if (y.active < 0) {
                y.active += this.headers.length
            }
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? a() : this.active.next()
            }
        },
        _createIcons: function() {
            var y = this.options.icons;
            if (y) {
                a("<span>").addClass("ui-accordion-header-icon ui-icon " + y.header).prependTo(this.headers);
                this.active.children(".ui-accordion-header-icon").removeClass(y.header).addClass(y.activeHeader);
                this.headers.addClass("ui-accordion-icons")
            }
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var y;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
            this._destroyIcons();
            y = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
            if (this.options.heightStyle !== "content") {
                y.css("height", "")
            }
        },
        _setOption: function(y, z) {
            if (y === "active") {
                this._activate(z);
                return
            }
            if (y === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event)
                }
                this._setupEvents(z)
            }
            this._super(y, z);
            if (y === "collapsible" && !z && this.options.active === false) {
                this._activate(0)
            }
            if (y === "icons") {
                this._destroyIcons();
                if (z) {
                    this._createIcons()
                }
            }
            if (y === "disabled") {
                this.element.toggleClass("ui-state-disabled", !!z).attr("aria-disabled", z);
                this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!z)
            }
        },
        _keydown: function(z) {
            if (z.altKey || z.ctrlKey) {
                return
            }
            var A = a.ui.keyCode,
                B = this.headers.length,
                y = this.headers.index(z.target),
                C = false;
            switch (z.keyCode) {
                case A.RIGHT:
                case A.DOWN:
                    C = this.headers[(y + 1) % B];
                    break;
                case A.LEFT:
                case A.UP:
                    C = this.headers[(y - 1 + B) % B];
                    break;
                case A.SPACE:
                case A.ENTER:
                    this._eventHandler(z);
                    break;
                case A.HOME:
                    C = this.headers[0];
                    break;
                case A.END:
                    C = this.headers[B - 1];
                    break
            }
            if (C) {
                a(z.target).attr("tabIndex", -1);
                a(C).attr("tabIndex", 0);
                C.focus();
                z.preventDefault()
            }
        },
        _panelKeyDown: function(y) {
            if (y.keyCode === a.ui.keyCode.UP && y.ctrlKey) {
                a(y.currentTarget).prev().focus()
            }
        },
        refresh: function() {
            var y = this.options;
            this._processPanels();
            if ((y.active === false && y.collapsible === true) || !this.headers.length) {
                y.active = false;
                this.active = a()
            } else {
                if (y.active === false) {
                    this._activate(0)
                } else {
                    if (this.active.length && !a.contains(this.element[0], this.active[0])) {
                        if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                            y.active = false;
                            this.active = a()
                        } else {
                            this._activate(Math.max(0, y.active - 1))
                        }
                    } else {
                        y.active = this.headers.index(this.active)
                    }
                }
            }
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var y = this.headers,
                z = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
            this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
            if (z) {
                this._off(y.not(this.headers));
                this._off(z.not(this.panels))
            }
        },
        _refresh: function() {
            var z, A = this.options,
                y = A.heightStyle,
                B = this.element.parent();
            this.active = this._findActive(A.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function() {
                var C = a(this),
                    D = C.uniqueId().attr("id"),
                    E = C.next(),
                    F = E.uniqueId().attr("id");
                C.attr("aria-controls", F);
                E.attr("aria-labelledby", D)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0)
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                })
            }
            this._createIcons();
            this._setupEvents(A.event);
            if (y === "fill") {
                z = B.height();
                this.element.siblings(":visible").each(function() {
                    var C = a(this),
                        D = C.css("position");
                    if (D === "absolute" || D === "fixed") {
                        return
                    }
                    z -= C.outerHeight(true)
                });
                this.headers.each(function() {
                    z -= a(this).outerHeight(true)
                });
                this.headers.next().each(function() {
                    a(this).height(Math.max(0, z - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")
            } else {
                if (y === "auto") {
                    z = 0;
                    this.headers.next().each(function() {
                        z = Math.max(z, a(this).css("height", "").height())
                    }).height(z)
                }
            }
        },
        _activate: function(z) {
            var y = this._findActive(z)[0];
            if (y === this.active[0]) {
                return
            }
            y = y || this.active[0];
            this._eventHandler({
                target: y,
                currentTarget: y,
                preventDefault: a.noop
            })
        },
        _findActive: function(y) {
            return typeof y === "number" ? this.headers.eq(y) : a()
        },
        _setupEvents: function(y) {
            var z = {
                keydown: "_keydown"
            };
            if (y) {
                a.each(y.split(" "), function(B, A) {
                    z[A] = "_eventHandler"
                })
            }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, z);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(C) {
            var E = this.options,
                y = this.active,
                z = a(C.currentTarget),
                A = z[0] === y[0],
                B = A && E.collapsible,
                G = B ? a() : z.next(),
                F = y.next(),
                D = {
                    oldHeader: y,
                    oldPanel: F,
                    newHeader: B ? a() : z,
                    newPanel: G
                };
            C.preventDefault();
            if ((A && !E.collapsible) || (this._trigger("beforeActivate", C, D) === false)) {
                return
            }
            E.active = B ? false : this.headers.index(z);
            this.active = A ? a() : z;
            this._toggle(D);
            y.removeClass("ui-accordion-header-active ui-state-active");
            if (E.icons) {
                y.children(".ui-accordion-header-icon").removeClass(E.icons.activeHeader).addClass(E.icons.header)
            }
            if (!A) {
                z.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
                if (E.icons) {
                    z.children(".ui-accordion-header-icon").removeClass(E.icons.header).addClass(E.icons.activeHeader)
                }
                z.next().addClass("ui-accordion-content-active")
            }
        },
        _toggle: function(y) {
            var A = y.newPanel,
                z = this.prevShow.length ? this.prevShow : y.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = A;
            this.prevHide = z;
            if (this.options.animate) {
                this._animate(A, z, y)
            } else {
                z.hide();
                A.show();
                this._toggleComplete(y)
            }
            z.attr({
                "aria-hidden": "true"
            });
            z.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            if (A.length && z.length) {
                z.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                })
            } else {
                if (A.length) {
                    this.headers.filter(function() {
                        return parseInt(a(this).attr("tabIndex"), 10) === 0
                    }).attr("tabIndex", -1)
                }
            }
            A.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(J, I, C) {
            var K, F, E, H = this,
                y = 0,
                A = J.css("box-sizing"),
                D = J.length && (!I.length || (J.index() < I.index())),
                z = this.options.animate || {},
                G = D && z.down || z,
                B = function() {
                    H._toggleComplete(C)
                };
            if (typeof G === "number") {
                E = G
            }
            if (typeof G === "string") {
                F = G
            }
            F = F || G.easing || z.easing;
            E = E || G.duration || z.duration;
            if (!I.length) {
                return J.animate(this.showProps, E, F, B)
            }
            if (!J.length) {
                return I.animate(this.hideProps, E, F, B)
            }
            K = J.show().outerHeight();
            I.animate(this.hideProps, {
                duration: E,
                easing: F,
                step: function(M, L) {
                    L.now = Math.round(M)
                }
            });
            J.hide().animate(this.showProps, {
                duration: E,
                easing: F,
                complete: B,
                step: function(M, L) {
                    L.now = Math.round(M);
                    if (L.prop !== "height") {
                        if (A === "content-box") {
                            y += L.now
                        }
                    } else {
                        if (H.options.heightStyle !== "content") {
                            L.now = Math.round(K - I.outerHeight() - y);
                            y = 0
                        }
                    }
                }
            })
        },
        _toggleComplete: function(y) {
            var z = y.oldPanel;
            z.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            if (z.length) {
                z.parent()[0].className = z.parent()[0].className
            }
            this._trigger("activate", null, y)
        }
    });
    /*
     * jQuery UI Menu 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/menu/
     */
    var k = a.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            if (this.options.disabled) {
                this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
            }
            this._on({
                "mousedown .ui-menu-item": function(y) {
                    y.preventDefault()
                },
                "click .ui-menu-item": function(y) {
                    var z = a(y.target);
                    if (!this.mouseHandled && z.not(".ui-state-disabled").length) {
                        this.select(y);
                        if (!y.isPropagationStopped()) {
                            this.mouseHandled = true
                        }
                        if (z.has(".ui-menu").length) {
                            this.expand(y)
                        } else {
                            if (!this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length) {
                                this.element.trigger("focus", [true]);
                                if (this.active && this.active.parents(".ui-menu").length === 1) {
                                    clearTimeout(this.timer)
                                }
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function(y) {
                    if (this.previousFilter) {
                        return
                    }
                    var z = a(y.currentTarget);
                    z.siblings(".ui-state-active").removeClass("ui-state-active");
                    this.focus(y, z)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(y, A) {
                    var z = this.active || this.element.find(this.options.items).eq(0);
                    if (!A) {
                        this.focus(y, z)
                    }
                },
                blur: function(y) {
                    this._delay(function() {
                        if (!a.contains(this.element[0], this.document[0].activeElement)) {
                            this.collapseAll(y)
                        }
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(y) {
                    if (this._closeOnDocumentClick(y)) {
                        this.collapseAll(y)
                    }
                    this.mouseHandled = false
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var y = a(this);
                if (y.data("ui-menu-submenu-carat")) {
                    y.remove()
                }
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(z) {
            var A, B, y, D, C = true;
            switch (z.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(z);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(z);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", z);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", z);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(z);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(z);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(z);
                    break;
                case a.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(z)
                    }
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(z);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(z);
                    break;
                default:
                    C = false;
                    B = this.previousFilter || "";
                    y = String.fromCharCode(z.keyCode);
                    D = false;
                    clearTimeout(this.filterTimer);
                    if (y === B) {
                        D = true
                    } else {
                        y = B + y
                    }
                    A = this._filterMenuItems(y);
                    A = D && A.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : A;
                    if (!A.length) {
                        y = String.fromCharCode(z.keyCode);
                        A = this._filterMenuItems(y)
                    }
                    if (A.length) {
                        this.focus(z, A);
                        this.previousFilter = y;
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1000)
                    } else {
                        delete this.previousFilter
                    }
            }
            if (C) {
                z.preventDefault()
            }
        },
        _activate: function(y) {
            if (!this.active.is(".ui-state-disabled")) {
                if (this.active.is("[aria-haspopup='true']")) {
                    this.expand(y)
                } else {
                    this.select(y)
                }
            }
        },
        refresh: function() {
            var A, z, C = this,
                y = this.options.icons.submenu,
                B = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            B.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var E = a(this),
                    D = E.parent(),
                    F = a("<span>").addClass("ui-menu-icon ui-icon " + y).data("ui-menu-submenu-carat", true);
                D.attr("aria-haspopup", "true").prepend(F);
                E.attr("aria-labelledby", D.attr("id"))
            });
            A = B.add(this.element);
            z = A.find(this.options.items);
            z.not(".ui-menu-item").each(function() {
                var D = a(this);
                if (C._isDivider(D)) {
                    D.addClass("ui-widget-content ui-menu-divider")
                }
            });
            z.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            z.filter(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !a.contains(this.element[0], this.active[0])) {
                this.blur()
            }
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(y, z) {
            if (y === "icons") {
                this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(z.submenu)
            }
            if (y === "disabled") {
                this.element.toggleClass("ui-state-disabled", !!z).attr("aria-disabled", z)
            }
            this._super(y, z)
        },
        focus: function(y, A) {
            var B, z;
            this.blur(y, y && y.type === "focus");
            this._scrollIntoView(A);
            this.active = A.first();
            z = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", z.attr("id"))
            }
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            if (y && y.type === "keydown") {
                this._close()
            } else {
                this.timer = this._delay(function() {
                    this._close()
                }, this.delay)
            }
            B = A.children(".ui-menu");
            if (B.length && y && (/^mouse/.test(y.type))) {
                this._startOpening(B)
            }
            this.activeMenu = A.parent();
            this._trigger("focus", y, {
                item: A
            })
        },
        _scrollIntoView: function(A) {
            var y, D, C, E, z, B;
            if (this._hasScroll()) {
                y = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0;
                D = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0;
                C = A.offset().top - this.activeMenu.offset().top - y - D;
                E = this.activeMenu.scrollTop();
                z = this.activeMenu.height();
                B = A.outerHeight();
                if (C < 0) {
                    this.activeMenu.scrollTop(E + C)
                } else {
                    if (C + B > z) {
                        this.activeMenu.scrollTop(E + C - z + B)
                    }
                }
            }
        },
        blur: function(y, z) {
            if (!z) {
                clearTimeout(this.timer)
            }
            if (!this.active) {
                return
            }
            this.active.removeClass("ui-state-focus");
            this.active = null;
            this._trigger("blur", y, {
                item: this.active
            })
        },
        _startOpening: function(y) {
            clearTimeout(this.timer);
            if (y.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(y)
            }, this.delay)
        },
        _open: function(z) {
            var y = a.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(z.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            z.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(y)
        },
        collapseAll: function(z, y) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var A = y ? this.element : a(z && z.target).closest(this.element.find(".ui-menu"));
                if (!A.length) {
                    A = this.element
                }
                this._close(A);
                this.blur(z);
                this.activeMenu = A
            }, this.delay)
        },
        _close: function(y) {
            if (!y) {
                y = this.active ? this.active.parent() : this.element
            }
            y.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(y) {
            return !a(y.target).closest(".ui-menu").length
        },
        _isDivider: function(y) {
            return !/[^\-\u2014\u2013\s]/.test(y.text())
        },
        collapse: function(y) {
            var z = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (z && z.length) {
                this._close();
                this.focus(y, z)
            }
        },
        expand: function(y) {
            var z = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            if (z && z.length) {
                this._open(z.parent());
                this._delay(function() {
                    this.focus(y, z)
                })
            }
        },
        next: function(y) {
            this._move("next", "first", y)
        },
        previous: function(y) {
            this._move("prev", "last", y)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(y, A, z) {
            var B;
            if (this.active) {
                if (y === "first" || y === "last") {
                    B = this.active[y === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                } else {
                    B = this.active[y + "All"](".ui-menu-item").eq(0)
                }
            }
            if (!B || !B.length || !this.active) {
                B = this.activeMenu.find(this.options.items)[A]()
            }
            this.focus(z, B)
        },
        nextPage: function(z) {
            var B, y, A;
            if (!this.active) {
                this.next(z);
                return
            }
            if (this.isLastItem()) {
                return
            }
            if (this._hasScroll()) {
                y = this.active.offset().top;
                A = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    B = a(this);
                    return B.offset().top - y - A < 0
                });
                this.focus(z, B)
            } else {
                this.focus(z, this.activeMenu.find(this.options.items)[!this.active ? "first" : "last"]())
            }
        },
        previousPage: function(z) {
            var B, y, A;
            if (!this.active) {
                this.next(z);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            if (this._hasScroll()) {
                y = this.active.offset().top;
                A = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    B = a(this);
                    return B.offset().top - y + A > 0
                });
                this.focus(z, B)
            } else {
                this.focus(z, this.activeMenu.find(this.options.items).first())
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(y) {
            this.active = this.active || a(y.target).closest(".ui-menu-item");
            var z = {
                item: this.active
            };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(y, true)
            }
            this._trigger("select", y, z)
        },
        _filterMenuItems: function(y) {
            var z = y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                A = new RegExp("^" + z, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return A.test(a.trim(a(this).text()))
            })
        }
    });
    /*
     * jQuery UI Autocomplete 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/autocomplete/
     */
    a.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var C, D, B, A = this.element[0].nodeName.toLowerCase(),
                z = A === "textarea",
                y = A === "input";
            this.isMultiLine = z ? true : y ? false : this.element.prop("isContentEditable");
            this.valueMethod = this.element[z || y ? "val" : "text"];
            this.isNewMenu = true;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(E) {
                    if (this.element.prop("readOnly")) {
                        C = true;
                        B = true;
                        D = true;
                        return
                    }
                    C = false;
                    B = false;
                    D = false;
                    var F = a.ui.keyCode;
                    switch (E.keyCode) {
                        case F.PAGE_UP:
                            C = true;
                            this._move("previousPage", E);
                            break;
                        case F.PAGE_DOWN:
                            C = true;
                            this._move("nextPage", E);
                            break;
                        case F.UP:
                            C = true;
                            this._keyEvent("previous", E);
                            break;
                        case F.DOWN:
                            C = true;
                            this._keyEvent("next", E);
                            break;
                        case F.ENTER:
                            if (this.menu.active) {
                                C = true;
                                E.preventDefault();
                                this.menu.select(E)
                            }
                            break;
                        case F.TAB:
                            if (this.menu.active) {
                                this.menu.select(E)
                            }
                            break;
                        case F.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                if (!this.isMultiLine) {
                                    this._value(this.term)
                                }
                                this.close(E);
                                E.preventDefault()
                            }
                            break;
                        default:
                            D = true;
                            this._searchTimeout(E);
                            break
                    }
                },
                keypress: function(E) {
                    if (C) {
                        C = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            E.preventDefault()
                        }
                        return
                    }
                    if (D) {
                        return
                    }
                    var F = a.ui.keyCode;
                    switch (E.keyCode) {
                        case F.PAGE_UP:
                            this._move("previousPage", E);
                            break;
                        case F.PAGE_DOWN:
                            this._move("nextPage", E);
                            break;
                        case F.UP:
                            this._keyEvent("previous", E);
                            break;
                        case F.DOWN:
                            this._keyEvent("next", E);
                            break
                    }
                },
                input: function(E) {
                    if (B) {
                        B = false;
                        E.preventDefault();
                        return
                    }
                    this._searchTimeout(E)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(E) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(E);
                    this._change(E)
                }
            });
            this._initSource();
            this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function(E) {
                    E.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var F = this.menu.element[0];
                    if (!a(E.target).closest(".ui-menu-item").length) {
                        this._delay(function() {
                            var G = this;
                            this.document.one("mousedown", function(H) {
                                if (H.target !== G.element[0] && H.target !== F && !a.contains(F, H.target)) {
                                    G.close()
                                }
                            })
                        })
                    }
                },
                menufocus: function(E, H) {
                    var G, F;
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (E.originalEvent && /^mouse/.test(E.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                a(E.target).trigger(E.originalEvent)
                            });
                            return
                        }
                    }
                    F = H.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", E, {
                            item: F
                        })) {
                        if (E.originalEvent && /^key/.test(E.originalEvent.type)) {
                            this._value(F.value)
                        }
                    }
                    G = H.item.attr("aria-label") || F.value;
                    if (G && a.trim(G).length) {
                        this.liveRegion.children().hide();
                        a("<div>").text(G).appendTo(this.liveRegion)
                    }
                },
                menuselect: function(E, H) {
                    var F = H.item.data("ui-autocomplete-item"),
                        G = this.previous;
                    if (this.element[0] !== this.document[0].activeElement) {
                        this.element.focus();
                        this.previous = G;
                        this._delay(function() {
                            this.previous = G;
                            this.selectedItem = F
                        })
                    }
                    if (false !== this._trigger("select", E, {
                            item: F
                        })) {
                        this._value(F.value)
                    }
                    this.term = this._value();
                    this.close(E);
                    this.selectedItem = F
                }
            });
            this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(y, z) {
            this._super(y, z);
            if (y === "source") {
                this._initSource()
            }
            if (y === "appendTo") {
                this.menu.element.appendTo(this._appendTo())
            }
            if (y === "disabled" && z && this.xhr) {
                this.xhr.abort()
            }
        },
        _appendTo: function() {
            var y = this.options.appendTo;
            if (y) {
                y = y.jquery || y.nodeType ? a(y) : this.document.find(y).eq(0)
            }
            if (!y || !y[0]) {
                y = this.element.closest(".ui-front")
            }
            if (!y.length) {
                y = this.document[0].body
            }
            return y
        },
        _initSource: function() {
            var y, A, z = this;
            if (a.isArray(this.options.source)) {
                y = this.options.source;
                this.source = function(B, C) {
                    C(a.ui.autocomplete.filter(y, B.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    A = this.options.source;
                    this.source = function(B, C) {
                        if (z.xhr) {
                            z.xhr.abort()
                        }
                        z.xhr = a.ajax({
                            url: A,
                            data: B,
                            dataType: "json",
                            success: function(D) {
                                C(D)
                            },
                            error: function() {
                                C([])
                            }
                        })
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },
        _searchTimeout: function(y) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var z = this.term === this._value(),
                    A = this.menu.element.is(":visible"),
                    B = y.altKey || y.ctrlKey || y.metaKey || y.shiftKey;
                if (!z || (z && !A && !B)) {
                    this.selectedItem = null;
                    this.search(null, y)
                }
            }, this.options.delay)
        },
        search: function(z, y) {
            z = z != null ? z : this._value();
            this.term = this._value();
            if (z.length < this.options.minLength) {
                return this.close(y)
            }
            if (this._trigger("search", y) === false) {
                return
            }
            return this._search(z)
        },
        _search: function(y) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({
                term: y
            }, this._response())
        },
        _response: function() {
            var y = ++this.requestIndex;
            return a.proxy(function(z) {
                if (y === this.requestIndex) {
                    this.__response(z)
                }
                this.pending--;
                if (!this.pending) {
                    this.element.removeClass("ui-autocomplete-loading")
                }
            }, this)
        },
        __response: function(y) {
            if (y) {
                y = this._normalize(y)
            }
            this._trigger("response", null, {
                content: y
            });
            if (!this.options.disabled && y && y.length && !this.cancelSearch) {
                this._suggest(y);
                this._trigger("open")
            } else {
                this._close()
            }
        },
        close: function(y) {
            this.cancelSearch = true;
            this._close(y)
        },
        _close: function(y) {
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", y)
            }
        },
        _change: function(y) {
            if (this.previous !== this._value()) {
                this._trigger("change", y, {
                    item: this.selectedItem
                })
            }
        },
        _normalize: function(y) {
            if (y.length && y[0].label && y[0].value) {
                return y
            }
            return a.map(y, function(z) {
                if (typeof z === "string") {
                    return {
                        label: z,
                        value: z
                    }
                }
                return a.extend({}, z, {
                    label: z.label || z.value,
                    value: z.value || z.label
                })
            })
        },
        _suggest: function(y) {
            var z = this.menu.element.empty();
            this._renderMenu(z, y);
            this.isNewMenu = true;
            this.menu.refresh();
            z.show();
            this._resizeMenu();
            z.position(a.extend({ of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next()
            }
        },
        _resizeMenu: function() {
            var y = this.menu.element;
            y.outerWidth(Math.max(y.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(A, y) {
            var z = this;
            a.each(y, function(B, C) {
                z._renderItemData(A, C)
            })
        },
        _renderItemData: function(z, y) {
            return this._renderItem(z, y).data("ui-autocomplete-item", y)
        },
        _renderItem: function(z, y) {
            return a("<li>").text(y.label).appendTo(z)
        },
        _move: function(y, z) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, z);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(y) || this.menu.isLastItem() && /^next/.test(y)) {
                if (!this.isMultiLine) {
                    this._value(this.term)
                }
                this.menu.blur();
                return
            }
            this.menu[y](z)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(z, y) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(z, y);
                y.preventDefault()
            }
        }
    });
    a.extend(a.ui.autocomplete, {
        escapeRegex: function(y) {
            return y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(y, A) {
            var z = new RegExp(a.ui.autocomplete.escapeRegex(A), "i");
            return a.grep(y, function(B) {
                return z.test(B.label || B.value || B)
            })
        }
    });
    a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(y) {
                    return y + (y > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(y) {
            var z;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            if (y && y.length) {
                z = this.options.messages.results(y.length)
            } else {
                z = this.options.messages.noResults
            }
            this.liveRegion.children().hide();
            a("<div>").text(z).appendTo(this.liveRegion)
        }
    });
    var c = a.ui.autocomplete;
    /*
     * jQuery UI Button 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/button/
     */
    var j, d = "ui-button ui-widget ui-state-default ui-corner-all",
        t = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        i = function() {
            var y = a(this);
            setTimeout(function() {
                y.find(":ui-button").button("refresh")
            }, 1)
        },
        o = function(A) {
            var z = A.name,
                y = A.form,
                B = a([]);
            if (z) {
                z = z.replace(/'/g, "\\'");
                if (y) {
                    B = a(y).find("[name='" + z + "'][type=radio]")
                } else {
                    B = a("[name='" + z + "'][type=radio]", A.ownerDocument).filter(function() {
                        return !this.form
                    })
                }
            }
            return B
        };
    a.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, i);
            if (typeof this.options.disabled !== "boolean") {
                this.options.disabled = !!this.element.prop("disabled")
            } else {
                this.element.prop("disabled", this.options.disabled)
            }
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var A = this,
                z = this.options,
                B = this.type === "checkbox" || this.type === "radio",
                y = !B ? "ui-state-active" : "";
            if (z.label === null) {
                z.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
            }
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(d).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (z.disabled) {
                    return
                }
                if (this === j) {
                    a(this).addClass("ui-state-active")
                }
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (z.disabled) {
                    return
                }
                a(this).removeClass(y)
            }).bind("click" + this.eventNamespace, function(C) {
                if (z.disabled) {
                    C.preventDefault();
                    C.stopImmediatePropagation()
                }
            });
            this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            if (B) {
                this.element.bind("change" + this.eventNamespace, function() {
                    A.refresh()
                })
            }
            if (this.type === "checkbox") {
                this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (z.disabled) {
                        return false
                    }
                })
            } else {
                if (this.type === "radio") {
                    this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (z.disabled) {
                            return false
                        }
                        a(this).addClass("ui-state-active");
                        A.buttonElement.attr("aria-pressed", "true");
                        var C = A.element[0];
                        o(C).not(C).map(function() {
                            return a(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    })
                } else {
                    this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        if (z.disabled) {
                            return false
                        }
                        a(this).addClass("ui-state-active");
                        j = this;
                        A.document.one("mouseup", function() {
                            j = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if (z.disabled) {
                            return false
                        }
                        a(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(C) {
                        if (z.disabled) {
                            return false
                        }
                        if (C.keyCode === a.ui.keyCode.SPACE || C.keyCode === a.ui.keyCode.ENTER) {
                            a(this).addClass("ui-state-active")
                        }
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        a(this).removeClass("ui-state-active")
                    });
                    if (this.buttonElement.is("a")) {
                        this.buttonElement.keyup(function(C) {
                            if (C.keyCode === a.ui.keyCode.SPACE) {
                                a(this).click()
                            }
                        })
                    }
                }
            }
            this._setOption("disabled", z.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var y, A, z;
            if (this.element.is("[type=checkbox]")) {
                this.type = "checkbox"
            } else {
                if (this.element.is("[type=radio]")) {
                    this.type = "radio"
                } else {
                    if (this.element.is("input")) {
                        this.type = "input"
                    } else {
                        this.type = "button"
                    }
                }
            }
            if (this.type === "checkbox" || this.type === "radio") {
                y = this.element.parents().last();
                A = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = y.find(A);
                if (!this.buttonElement.length) {
                    y = y.length ? y.siblings() : this.element.siblings();
                    this.buttonElement = y.filter(A);
                    if (!this.buttonElement.length) {
                        this.buttonElement = y.find(A)
                    }
                }
                this.element.addClass("ui-helper-hidden-accessible");
                z = this.element.is(":checked");
                if (z) {
                    this.buttonElement.addClass("ui-state-active")
                }
                this.buttonElement.prop("aria-pressed", z)
            } else {
                this.buttonElement = this.element
            }
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(d + " ui-state-active " + t).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            if (!this.hasTitle) {
                this.buttonElement.removeAttr("title")
            }
        },
        _setOption: function(y, z) {
            this._super(y, z);
            if (y === "disabled") {
                this.widget().toggleClass("ui-state-disabled", !!z);
                this.element.prop("disabled", !!z);
                if (z) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        this.buttonElement.removeClass("ui-state-focus")
                    } else {
                        this.buttonElement.removeClass("ui-state-focus ui-state-active")
                    }
                }
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var y = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            if (y !== this.options.disabled) {
                this._setOption("disabled", y)
            }
            if (this.type === "radio") {
                o(this.element[0]).each(function() {
                    if (a(this).is(":checked")) {
                        a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                })
            } else {
                if (this.type === "checkbox") {
                    if (this.element.is(":checked")) {
                        this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                }
            }
        },
        _resetButton: function() {
            if (this.type === "input") {
                if (this.options.label) {
                    this.element.val(this.options.label)
                }
                return
            }
            var z = this.buttonElement.removeClass(t),
                A = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(z.empty()).text(),
                B = this.options.icons,
                C = B.primary && B.secondary,
                y = [];
            if (B.primary || B.secondary) {
                if (this.options.text) {
                    y.push("ui-button-text-icon" + (C ? "s" : (B.primary ? "-primary" : "-secondary")))
                }
                if (B.primary) {
                    z.prepend("<span class='ui-button-icon-primary ui-icon " + B.primary + "'></span>")
                }
                if (B.secondary) {
                    z.append("<span class='ui-button-icon-secondary ui-icon " + B.secondary + "'></span>")
                }
                if (!this.options.text) {
                    y.push(C ? "ui-button-icons-only" : "ui-button-icon-only");
                    if (!this.hasTitle) {
                        z.attr("title", a.trim(A))
                    }
                }
            } else {
                y.push("ui-button-text-only")
            }
            z.addClass(y.join(" "))
        }
    });
    a.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(y, z) {
            if (y === "disabled") {
                this.buttons.button("option", y, z)
            }
            this._super(y, z)
        },
        refresh: function() {
            var A = this.element.css("direction") === "rtl",
                y = this.element.find(this.options.items),
                z = y.filter(":ui-button");
            y.not(":ui-button").button();
            z.button("refresh");
            this.buttons = y.map(function() {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(A ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(A ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    var e = a.ui.button;
    /*
     * jQuery UI Dialog 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/dialog/
     */
    var f = a.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            closeOnEscape: true,
            closeText: "Close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: true,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(y) {
                    var z = a(this).css(y).offset().top;
                    if (z < 0) {
                        a(this).css("top", y.top - z)
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },
        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            if (this.options.draggable && a.fn.draggable) {
                this._makeDraggable()
            }
            if (this.options.resizable && a.fn.resizable) {
                this._makeResizable()
            }
            this._isOpen = false;
            this._trackFocus()
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open()
            }
        },
        _appendTo: function() {
            var y = this.options.appendTo;
            if (y && (y.jquery || y.nodeType)) {
                return a(y)
            }
            return this.document.find(y || "body").eq(0)
        },
        _destroy: function() {
            var y, z = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(true, true).remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle)
            }
            y = z.parent.children().eq(z.index);
            if (y.length && y[0] !== this.element[0]) {
                y.before(this.element)
            } else {
                z.parent.append(this.element)
            }
        },
        widget: function() {
            return this.uiDialog
        },
        disable: a.noop,
        enable: a.noop,
        close: function(A) {
            var y, B = this;
            if (!this._isOpen || this._trigger("beforeClose", A) === false) {
                return
            }
            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();
            if (!this.opener.filter(":focusable").focus().length) {
                try {
                    y = this.document[0].activeElement;
                    if (y && y.nodeName.toLowerCase() !== "body") {
                        a(y).blur()
                    }
                } catch (z) {}
            }
            this._hide(this.uiDialog, this.options.hide, function() {
                B._trigger("close", A)
            })
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(y, A) {
            var z = false,
                C = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +a(this).css("z-index")
                }).get(),
                B = Math.max.apply(null, C);
            if (B >= +this.uiDialog.css("z-index")) {
                this.uiDialog.css("z-index", B + 1);
                z = true
            }
            if (z && !A) {
                this._trigger("focus", y)
            }
            return z
        },
        open: function() {
            var y = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable()
                }
                return
            }
            this._isOpen = true;
            this.opener = a(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);
            if (this.overlay) {
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1)
            }
            this._show(this.uiDialog, this.options.show, function() {
                y._focusTabbable();
                y._trigger("focus")
            });
            this._makeFocusTarget();
            this._trigger("open")
        },
        _focusTabbable: function() {
            var y = this._focusedElement;
            if (!y) {
                y = this.element.find("[autofocus]")
            }
            if (!y.length) {
                y = this.element.find(":tabbable")
            }
            if (!y.length) {
                y = this.uiDialogButtonPane.find(":tabbable")
            }
            if (!y.length) {
                y = this.uiDialogTitlebarClose.filter(":tabbable")
            }
            if (!y.length) {
                y = this.uiDialog
            }
            y.eq(0).focus()
        },
        _keepFocus: function(z) {
            function y() {
                var A = this.document[0].activeElement,
                    B = this.uiDialog[0] === A || a.contains(this.uiDialog[0], A);
                if (!B) {
                    this._focusTabbable()
                }
            }
            z.preventDefault();
            y.call(this);
            this._delay(y)
        },
        _createWrapper: function() {
            this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(y) {
                    if (this.options.closeOnEscape && !y.isDefaultPrevented() && y.keyCode && y.keyCode === a.ui.keyCode.ESCAPE) {
                        y.preventDefault();
                        this.close(y);
                        return
                    }
                    if (y.keyCode !== a.ui.keyCode.TAB || y.isDefaultPrevented()) {
                        return
                    }
                    var B = this.uiDialog.find(":tabbable"),
                        z = B.filter(":first"),
                        A = B.filter(":last");
                    if ((y.target === A[0] || y.target === this.uiDialog[0]) && !y.shiftKey) {
                        this._delay(function() {
                            z.focus()
                        });
                        y.preventDefault()
                    } else {
                        if ((y.target === z[0] || y.target === this.uiDialog[0]) && y.shiftKey) {
                            this._delay(function() {
                                A.focus()
                            });
                            y.preventDefault()
                        }
                    }
                },
                mousedown: function(y) {
                    if (this._moveToTop(y)) {
                        this._focusTabbable()
                    }
                }
            });
            if (!this.element.find("[aria-describedby]").length) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            }
        },
        _createTitlebar: function() {
            var y;
            this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(z) {
                    if (!a(z.target).closest(".ui-dialog-titlebar-close")) {
                        this.uiDialog.focus()
                    }
                }
            });
            this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: false
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(z) {
                    z.preventDefault();
                    this.close(z)
                }
            });
            y = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(y);
            this.uiDialog.attr({
                "aria-labelledby": y.attr("id")
            })
        },
        _title: function(y) {
            if (!this.options.title) {
                y.html("&#160;")
            }
            y.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var z = this,
                y = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if (a.isEmptyObject(y) || (a.isArray(y) && !y.length)) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            a.each(y, function(C, D) {
                var B, A;
                D = a.isFunction(D) ? {
                    click: D,
                    text: C
                } : D;
                D = a.extend({
                    type: "button"
                }, D);
                B = D.click;
                D.click = function() {
                    B.apply(z.element[0], arguments)
                };
                A = {
                    icons: D.icons,
                    text: D.showText
                };
                delete D.icons;
                delete D.showText;
                a("<button></button>", D).button(A).appendTo(z.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            var A = this,
                z = this.options;

            function y(B) {
                return {
                    position: B.position,
                    offset: B.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(B, C) {
                    a(this).addClass("ui-dialog-dragging");
                    A._blockFrames();
                    A._trigger("dragStart", B, y(C))
                },
                drag: function(B, C) {
                    A._trigger("drag", B, y(C))
                },
                stop: function(B, E) {
                    var C = E.offset.left - A.document.scrollLeft(),
                        D = E.offset.top - A.document.scrollTop();
                    z.position = {
                        my: "left top",
                        at: "left" + (C >= 0 ? "+" : "") + C + " top" + (D >= 0 ? "+" : "") + D,
                        of: A.window
                    };
                    a(this).removeClass("ui-dialog-dragging");
                    A._unblockFrames();
                    A._trigger("dragStop", B, y(E))
                }
            })
        },
        _makeResizable: function() {
            var D = this,
                A = this.options,
                z = A.resizable,
                B = this.uiDialog.css("position"),
                C = typeof z === "string" ? z : "n,e,s,w,se,sw,ne,nw";

            function y(E) {
                return {
                    originalPosition: E.originalPosition,
                    originalSize: E.originalSize,
                    position: E.position,
                    size: E.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: A.maxWidth,
                maxHeight: A.maxHeight,
                minWidth: A.minWidth,
                minHeight: this._minHeight(),
                handles: C,
                start: function(E, F) {
                    a(this).addClass("ui-dialog-resizing");
                    D._blockFrames();
                    D._trigger("resizeStart", E, y(F))
                },
                resize: function(E, F) {
                    D._trigger("resize", E, y(F))
                },
                stop: function(E, I) {
                    var G = D.uiDialog.offset(),
                        F = G.left - D.document.scrollLeft(),
                        H = G.top - D.document.scrollTop();
                    A.height = D.uiDialog.height();
                    A.width = D.uiDialog.width();
                    A.position = {
                        my: "left top",
                        at: "left" + (F >= 0 ? "+" : "") + F + " top" + (H >= 0 ? "+" : "") + H,
                        of: D.window
                    };
                    a(this).removeClass("ui-dialog-resizing");
                    D._unblockFrames();
                    D._trigger("resizeStop", E, y(I))
                }
            }).css("position", B)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(y) {
                    this._makeFocusTarget();
                    this._focusedElement = a(y.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var z = this._trackingInstances(),
                y = a.inArray(this, z);
            if (y !== -1) {
                z.splice(y, 1)
            }
        },
        _trackingInstances: function() {
            var y = this.document.data("ui-dialog-instances");
            if (!y) {
                y = [];
                this.document.data("ui-dialog-instances", y)
            }
            return y
        },
        _minHeight: function() {
            var y = this.options;
            return y.height === "auto" ? y.minHeight : Math.min(y.minHeight, y.height)
        },
        _position: function() {
            var y = this.uiDialog.is(":visible");
            if (!y) {
                this.uiDialog.show()
            }
            this.uiDialog.position(this.options.position);
            if (!y) {
                this.uiDialog.hide()
            }
        },
        _setOptions: function(y) {
            var B = this,
                A = false,
                z = {};
            a.each(y, function(C, D) {
                B._setOption(C, D);
                if (C in B.sizeRelatedOptions) {
                    A = true
                }
                if (C in B.resizableRelatedOptions) {
                    z[C] = D
                }
            });
            if (A) {
                this._size();
                this._position()
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", z)
            }
        },
        _setOption: function(A, C) {
            var y, z, B = this.uiDialog;
            if (A === "dialogClass") {
                B.removeClass(this.options.dialogClass).addClass(C)
            }
            if (A === "disabled") {
                return
            }
            this._super(A, C);
            if (A === "appendTo") {
                this.uiDialog.appendTo(this._appendTo())
            }
            if (A === "buttons") {
                this._createButtons()
            }
            if (A === "closeText") {
                this.uiDialogTitlebarClose.button({
                    label: "" + C
                })
            }
            if (A === "draggable") {
                y = B.is(":data(ui-draggable)");
                if (y && !C) {
                    B.draggable("destroy")
                }
                if (!y && C) {
                    this._makeDraggable()
                }
            }
            if (A === "position") {
                this._position()
            }
            if (A === "resizable") {
                z = B.is(":data(ui-resizable)");
                if (z && !C) {
                    B.resizable("destroy")
                }
                if (z && typeof C === "string") {
                    B.resizable("option", "handles", C)
                }
                if (!z && C !== false) {
                    this._makeResizable()
                }
            }
            if (A === "title") {
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
            }
        },
        _size: function() {
            var A, z, y, B = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            if (B.minWidth > B.width) {
                B.width = B.minWidth
            }
            A = this.uiDialog.css({
                height: "auto",
                width: B.width
            }).outerHeight();
            z = Math.max(0, B.minHeight - A);
            y = typeof B.maxHeight === "number" ? Math.max(0, B.maxHeight - A) : "none";
            if (B.height === "auto") {
                this.element.css({
                    minHeight: z,
                    maxHeight: y,
                    height: "auto"
                })
            } else {
                this.element.height(Math.max(0, B.height - A))
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var y = a(this);
                return a("<div>").css({
                    position: "absolute",
                    width: y.outerWidth(),
                    height: y.outerHeight()
                }).appendTo(y.parent()).offset(y.offset())[0]
            })
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },
        _allowInteraction: function(y) {
            if (a(y.target).closest(".ui-dialog").length) {
                return true
            }
            return !!a(y.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (!this.options.modal) {
                return
            }
            var y = true;
            this._delay(function() {
                y = true
            });
            if (!this.document.data("ui-dialog-overlays")) {
                this._on(this.document, {
                    focusin: function(z) {
                        if (y) {
                            return
                        }
                        if (!this._allowInteraction(z)) {
                            z.preventDefault();
                            this._trackingInstances()[0]._focusTabbable()
                        }
                    }
                })
            }
            this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            });
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
        },
        _destroyOverlay: function() {
            if (!this.options.modal) {
                return
            }
            if (this.overlay) {
                var y = this.document.data("ui-dialog-overlays") - 1;
                if (!y) {
                    this.document.unbind("focusin").removeData("ui-dialog-overlays")
                } else {
                    this.document.data("ui-dialog-overlays", y)
                }
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    /*
     * jQuery UI Selectmenu 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/selectmenu
     */
    var q = a.widget("ui.selectmenu", {
        version: "1.11.4",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var y = this.element.uniqueId().attr("id");
            this.ids = {
                element: y,
                button: y + "-button",
                menu: y + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            if (this.options.disabled) {
                this.disable()
            }
        },
        _drawButton: function() {
            var y = this;
            this.label = a("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
            this._on(this.label, {
                click: function(z) {
                    this.button.focus();
                    z.preventDefault()
                }
            });
            this.element.hide();
            this.button = a("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element);
            a("<span>", {
                "class": "ui-icon " + this.options.icons.button
            }).prependTo(this.button);
            this.buttonText = a("<span>", {
                "class": "ui-selectmenu-text"
            }).appendTo(this.button);
            this._setText(this.buttonText, this.element.find("option:selected").text());
            this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                if (!y.menuItems) {
                    y._refreshMenu()
                }
            });
            this._hoverable(this.button);
            this._focusable(this.button)
        },
        _drawMenu: function() {
            var y = this;
            this.menu = a("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = a("<div>", {
                "class": "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(z, A) {
                    z.preventDefault();
                    y._setSelection();
                    y._select(A.item.data("ui-selectmenu-item"), z)
                },
                focus: function(z, B) {
                    var A = B.item.data("ui-selectmenu-item");
                    if (y.focusIndex != null && A.index !== y.focusIndex) {
                        y._trigger("focus", z, {
                            item: A
                        });
                        if (!y.isOpen) {
                            y._select(A, z)
                        }
                    }
                    y.focusIndex = A.index;
                    y.button.attr("aria-activedescendant", y.menuItems.eq(A.index).attr("id"))
                }
            }).menu("instance");
            this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return false
            };
            this.menuInstance._isDivider = function() {
                return false
            }
        },
        refresh: function() {
            this._refreshMenu();
            this._setText(this.buttonText, this._getSelectedItem().text());
            if (!this.options.width) {
                this._resizeButton()
            }
        },
        _refreshMenu: function() {
            this.menu.empty();
            var y, z = this.element.find("option");
            if (!z.length) {
                return
            }
            this._parseOptions(z);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup");
            y = this._getSelectedItem();
            this.menuInstance.focus(null, y);
            this._setAria(y.data("ui-selectmenu-item"));
            this._setOption("disabled", this.element.prop("disabled"))
        },
        open: function(y) {
            if (this.options.disabled) {
                return
            }
            if (!this.menuItems) {
                this._refreshMenu()
            } else {
                this.menu.find(".ui-state-focus").removeClass("ui-state-focus");
                this.menuInstance.focus(null, this._getSelectedItem())
            }
            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();
            this._on(this.document, this._documentClick);
            this._trigger("open", y)
        },
        _position: function() {
            this.menuWrap.position(a.extend({ of: this.button
            }, this.options.position))
        },
        close: function(y) {
            if (!this.isOpen) {
                return
            }
            this.isOpen = false;
            this._toggleAttr();
            this.range = null;
            this._off(this.document);
            this._trigger("close", y)
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderMenu: function(B, z) {
            var A = this,
                y = "";
            a.each(z, function(C, D) {
                if (D.optgroup !== y) {
                    a("<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" + (D.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                        text: D.optgroup
                    }).appendTo(B);
                    y = D.optgroup
                }
                A._renderItemData(B, D)
            })
        },
        _renderItemData: function(z, y) {
            return this._renderItem(z, y).data("ui-selectmenu-item", y)
        },
        _renderItem: function(A, y) {
            var z = a("<li>");
            if (y.disabled) {
                z.addClass("ui-state-disabled")
            }
            this._setText(z, y.label);
            return z.appendTo(A)
        },
        _setText: function(y, z) {
            if (z) {
                y.text(z)
            } else {
                y.html("&#160;")
            }
        },
        _move: function(y, z) {
            var B, C, A = ".ui-menu-item";
            if (this.isOpen) {
                B = this.menuItems.eq(this.focusIndex)
            } else {
                B = this.menuItems.eq(this.element[0].selectedIndex);
                A += ":not(.ui-state-disabled)"
            }
            if (y === "first" || y === "last") {
                C = B[y === "first" ? "prevAll" : "nextAll"](A).eq(-1)
            } else {
                C = B[y + "All"](A).eq(0)
            }
            if (C.length) {
                this.menuInstance.focus(z, C)
            }
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function(y) {
            this[this.isOpen ? "close" : "open"](y)
        },
        _setSelection: function() {
            var y;
            if (!this.range) {
                return
            }
            if (window.getSelection) {
                y = window.getSelection();
                y.removeAllRanges();
                y.addRange(this.range)
            } else {
                this.range.select()
            }
            this.button.focus()
        },
        _documentClick: {
            mousedown: function(y) {
                if (!this.isOpen) {
                    return
                }
                if (!a(y.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length) {
                    this.close(y)
                }
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var y;
                if (window.getSelection) {
                    y = window.getSelection();
                    if (y.rangeCount) {
                        this.range = y.getRangeAt(0)
                    }
                } else {
                    this.range = document.selection.createRange()
                }
            },
            click: function(y) {
                this._setSelection();
                this._toggle(y)
            },
            keydown: function(y) {
                var z = true;
                switch (y.keyCode) {
                    case a.ui.keyCode.TAB:
                    case a.ui.keyCode.ESCAPE:
                        this.close(y);
                        z = false;
                        break;
                    case a.ui.keyCode.ENTER:
                        if (this.isOpen) {
                            this._selectFocusedItem(y)
                        }
                        break;
                    case a.ui.keyCode.UP:
                        if (y.altKey) {
                            this._toggle(y)
                        } else {
                            this._move("prev", y)
                        }
                        break;
                    case a.ui.keyCode.DOWN:
                        if (y.altKey) {
                            this._toggle(y)
                        } else {
                            this._move("next", y)
                        }
                        break;
                    case a.ui.keyCode.SPACE:
                        if (this.isOpen) {
                            this._selectFocusedItem(y)
                        } else {
                            this._toggle(y)
                        }
                        break;
                    case a.ui.keyCode.LEFT:
                        this._move("prev", y);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this._move("next", y);
                        break;
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.PAGE_UP:
                        this._move("first", y);
                        break;
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_DOWN:
                        this._move("last", y);
                        break;
                    default:
                        this.menu.trigger(y);
                        z = false
                }
                if (z) {
                    y.preventDefault()
                }
            }
        },
        _selectFocusedItem: function(y) {
            var z = this.menuItems.eq(this.focusIndex);
            if (!z.hasClass("ui-state-disabled")) {
                this._select(z.data("ui-selectmenu-item"), y)
            }
        },
        _select: function(z, y) {
            var A = this.element[0].selectedIndex;
            this.element[0].selectedIndex = z.index;
            this._setText(this.buttonText, z.label);
            this._setAria(z);
            this._trigger("select", y, {
                item: z
            });
            if (z.index !== A) {
                this._trigger("change", y, {
                    item: z
                })
            }
            this.close(y)
        },
        _setAria: function(z) {
            var y = this.menuItems.eq(z.index).attr("id");
            this.button.attr({
                "aria-labelledby": y,
                "aria-activedescendant": y
            });
            this.menu.attr("aria-activedescendant", y)
        },
        _setOption: function(y, z) {
            if (y === "icons") {
                this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(z.button)
            }
            this._super(y, z);
            if (y === "appendTo") {
                this.menuWrap.appendTo(this._appendTo())
            }
            if (y === "disabled") {
                this.menuInstance.option("disabled", z);
                this.button.toggleClass("ui-state-disabled", z).attr("aria-disabled", z);
                this.element.prop("disabled", z);
                if (z) {
                    this.button.attr("tabindex", -1);
                    this.close()
                } else {
                    this.button.attr("tabindex", 0)
                }
            }
            if (y === "width") {
                this._resizeButton()
            }
        },
        _appendTo: function() {
            var y = this.options.appendTo;
            if (y) {
                y = y.jquery || y.nodeType ? a(y) : this.document.find(y).eq(0)
            }
            if (!y || !y[0]) {
                y = this.element.closest(".ui-front")
            }
            if (!y.length) {
                y = this.document[0].body
            }
            return y
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var y = this.options.width;
            if (!y) {
                y = this.element.show().outerWidth();
                this.element.hide()
            }
            this.button.outerWidth(y)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            }
        },
        _parseOptions: function(z) {
            var y = [];
            z.each(function(A, B) {
                var D = a(B),
                    C = D.parent("optgroup");
                y.push({
                    element: D,
                    index: A,
                    value: D.val(),
                    label: D.text(),
                    optgroup: C.attr("label") || "",
                    disabled: C.prop("disabled") || D.prop("disabled")
                })
            });
            this.items = y
        },
        _destroy: function() {
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.label.attr("for", this.ids.element)
        }
    });
    /*
     * jQuery UI Tabs 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/tabs/
     */
    var r = a.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (function() {
            var y = /#.*$/;
            return function(z) {
                var A, C;
                z = z.cloneNode(false);
                A = z.href.replace(y, "");
                C = location.href.replace(y, "");
                try {
                    A = decodeURIComponent(A)
                } catch (B) {}
                try {
                    C = decodeURIComponent(C)
                } catch (B) {}
                return z.hash.length > 1 && A === C
            }
        })(),
        _create: function() {
            var z = this,
                y = this.options;
            this.running = false;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", y.collapsible);
            this._processTabs();
            y.active = this._initialActive();
            if (a.isArray(y.disabled)) {
                y.disabled = a.unique(y.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(A) {
                    return z.tabs.index(A)
                }))).sort()
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(y.active)
            } else {
                this.active = a()
            }
            this._refresh();
            if (this.active.length) {
                this.load(y.active)
            }
        },
        _initialActive: function() {
            var y = this.options.active,
                z = this.options.collapsible,
                A = location.hash.substring(1);
            if (y === null) {
                if (A) {
                    this.tabs.each(function(B, C) {
                        if (a(C).attr("aria-controls") === A) {
                            y = B;
                            return false
                        }
                    })
                }
                if (y === null) {
                    y = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                }
                if (y === null || y === -1) {
                    y = this.tabs.length ? 0 : false
                }
            }
            if (y !== false) {
                y = this.tabs.index(this.tabs.eq(y));
                if (y === -1) {
                    y = z ? false : 0
                }
            }
            if (!z && y === false && this.anchors.length) {
                y = 0
            }
            return y
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? a() : this._getPanelForTab(this.active)
            }
        },
        _tabKeydown: function(y) {
            var z = a(this.document[0].activeElement).closest("li"),
                B = this.tabs.index(z),
                A = true;
            if (this._handlePageNav(y)) {
                return
            }
            switch (y.keyCode) {
                case a.ui.keyCode.RIGHT:
                case a.ui.keyCode.DOWN:
                    B++;
                    break;
                case a.ui.keyCode.UP:
                case a.ui.keyCode.LEFT:
                    A = false;
                    B--;
                    break;
                case a.ui.keyCode.END:
                    B = this.anchors.length - 1;
                    break;
                case a.ui.keyCode.HOME:
                    B = 0;
                    break;
                case a.ui.keyCode.SPACE:
                    y.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(B);
                    return;
                case a.ui.keyCode.ENTER:
                    y.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(B === this.options.active ? false : B);
                    return;
                default:
                    return
            }
            y.preventDefault();
            clearTimeout(this.activating);
            B = this._focusNextTab(B, A);
            if (!y.ctrlKey && !y.metaKey) {
                z.attr("aria-selected", "false");
                this.tabs.eq(B).attr("aria-selected", "true");
                this.activating = this._delay(function() {
                    this.option("active", B)
                }, this.delay)
            }
        },
        _panelKeydown: function(y) {
            if (this._handlePageNav(y)) {
                return
            }
            if (y.ctrlKey && y.keyCode === a.ui.keyCode.UP) {
                y.preventDefault();
                this.active.focus()
            }
        },
        _handlePageNav: function(y) {
            if (y.altKey && y.keyCode === a.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true
            }
            if (y.altKey && y.keyCode === a.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true
            }
        },
        _findNextTab: function(A, z) {
            var B = this.tabs.length - 1;

            function y() {
                if (A > B) {
                    A = 0
                }
                if (A < 0) {
                    A = B
                }
                return A
            }
            while (a.inArray(y(), this.options.disabled) !== -1) {
                A = z ? A + 1 : A - 1
            }
            return A
        },
        _focusNextTab: function(z, y) {
            z = this._findNextTab(z, y);
            this.tabs.eq(z).focus();
            return z
        },
        _setOption: function(y, z) {
            if (y === "active") {
                this._activate(z);
                return
            }
            if (y === "disabled") {
                this._setupDisabled(z);
                return
            }
            this._super(y, z);
            if (y === "collapsible") {
                this.element.toggleClass("ui-tabs-collapsible", z);
                if (!z && this.options.active === false) {
                    this._activate(0)
                }
            }
            if (y === "event") {
                this._setupEvents(z)
            }
            if (y === "heightStyle") {
                this._setupHeightStyle(z)
            }
        },
        _sanitizeSelector: function(y) {
            return y ? y.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var z = this.options,
                y = this.tablist.children(":has(a[href])");
            z.disabled = a.map(y.filter(".ui-state-disabled"), function(A) {
                return y.index(A)
            });
            this._processTabs();
            if (z.active === false || !this.anchors.length) {
                z.active = false;
                this.active = a()
            } else {
                if (this.active.length && !a.contains(this.tablist[0], this.active[0])) {
                    if (this.tabs.length === z.disabled.length) {
                        z.active = false;
                        this.active = a()
                    } else {
                        this._activate(this._findNextTab(Math.max(0, z.active - 1), false))
                    }
                } else {
                    z.active = this.tabs.index(this.active)
                }
            }
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0)
            } else {
                this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
                this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })
            }
        },
        _processTabs: function() {
            var B = this,
                A = this.tabs,
                y = this.anchors,
                z = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(C) {
                if (a(this).is(".ui-state-disabled")) {
                    C.preventDefault()
                }
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                if (a(this).closest("li").is(".ui-state-disabled")) {
                    this.blur()
                }
            });
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return a("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels = a();
            this.anchors.each(function(E, C) {
                var I, G, H, D = a(C).uniqueId().attr("id"),
                    J = a(C).closest("li"),
                    F = J.attr("aria-controls");
                if (B._isLocal(C)) {
                    I = C.hash;
                    H = I.substring(1);
                    G = B.element.find(B._sanitizeSelector(I))
                } else {
                    H = J.attr("aria-controls") || a({}).uniqueId()[0].id;
                    I = "#" + H;
                    G = B.element.find(I);
                    if (!G.length) {
                        G = B._createPanel(H);
                        G.insertAfter(B.panels[E - 1] || B.tablist)
                    }
                    G.attr("aria-live", "polite")
                }
                if (G.length) {
                    B.panels = B.panels.add(G)
                }
                if (F) {
                    J.data("ui-tabs-aria-controls", F)
                }
                J.attr({
                    "aria-controls": H,
                    "aria-labelledby": D
                });
                G.attr("aria-labelledby", D)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
            if (A) {
                this._off(A.not(this.tabs));
                this._off(y.not(this.anchors));
                this._off(z.not(this.panels))
            }
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(y) {
            return a("<div>").attr("id", y).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
        },
        _setupDisabled: function(y) {
            if (a.isArray(y)) {
                if (!y.length) {
                    y = false
                } else {
                    if (y.length === this.anchors.length) {
                        y = true
                    }
                }
            }
            for (var z = 0, A;
                (A = this.tabs[z]); z++) {
                if (y === true || a.inArray(z, y) !== -1) {
                    a(A).addClass("ui-state-disabled").attr("aria-disabled", "true")
                } else {
                    a(A).removeClass("ui-state-disabled").removeAttr("aria-disabled")
                }
            }
            this.options.disabled = y
        },
        _setupEvents: function(y) {
            var z = {};
            if (y) {
                a.each(y.split(" "), function(B, A) {
                    z[A] = "_eventHandler"
                })
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(true, this.anchors, {
                click: function(A) {
                    A.preventDefault()
                }
            });
            this._on(this.anchors, z);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(y) {
            var z, A = this.element.parent();
            if (y === "fill") {
                z = A.height();
                z -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var B = a(this),
                        C = B.css("position");
                    if (C === "absolute" || C === "fixed") {
                        return
                    }
                    z -= B.outerHeight(true)
                });
                this.element.children().not(this.panels).each(function() {
                    z -= a(this).outerHeight(true)
                });
                this.panels.each(function() {
                    a(this).height(Math.max(0, z - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")
            } else {
                if (y === "auto") {
                    z = 0;
                    this.panels.each(function() {
                        z = Math.max(z, a(this).height("").height())
                    }).height(z)
                }
            }
        },
        _eventHandler: function(C) {
            var E = this.options,
                y = this.active,
                z = a(C.currentTarget),
                F = z.closest("li"),
                A = F[0] === y[0],
                B = A && E.collapsible,
                H = B ? a() : this._getPanelForTab(F),
                G = !y.length ? a() : this._getPanelForTab(y),
                D = {
                    oldTab: y,
                    oldPanel: G,
                    newTab: B ? a() : F,
                    newPanel: H
                };
            C.preventDefault();
            if (F.hasClass("ui-state-disabled") || F.hasClass("ui-tabs-loading") || this.running || (A && !E.collapsible) || (this._trigger("beforeActivate", C, D) === false)) {
                return
            }
            E.active = B ? false : this.tabs.index(F);
            this.active = A ? a() : F;
            if (this.xhr) {
                this.xhr.abort()
            }
            if (!G.length && !H.length) {
                a.error("jQuery UI Tabs: Mismatching fragment identifier.")
            }
            if (H.length) {
                this.load(this.tabs.index(F), C)
            }
            this._toggle(C, D)
        },
        _toggle: function(z, A) {
            var C = this,
                E = A.newPanel,
                D = A.oldPanel;
            this.running = true;

            function y() {
                C.running = false;
                C._trigger("activate", z, A)
            }

            function B() {
                A.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                if (E.length && C.options.show) {
                    C._show(E, C.options.show, y)
                } else {
                    E.show();
                    y()
                }
            }
            if (D.length && this.options.hide) {
                this._hide(D, this.options.hide, function() {
                    A.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    B()
                })
            } else {
                A.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                D.hide();
                B()
            }
            D.attr("aria-hidden", "true");
            A.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            if (E.length && D.length) {
                A.oldTab.attr("tabIndex", -1)
            } else {
                if (E.length) {
                    this.tabs.filter(function() {
                        return a(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            E.attr("aria-hidden", "false");
            A.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(A) {
            var z, y = this._findActive(A);
            if (y[0] === this.active[0]) {
                return
            }
            if (!y.length) {
                y = this.active
            }
            z = y.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: z,
                currentTarget: z,
                preventDefault: a.noop
            })
        },
        _findActive: function(y) {
            return y === false ? a() : this.tabs.eq(y)
        },
        _getIndex: function(y) {
            if (typeof y === "string") {
                y = this.anchors.index(this.anchors.filter("[href$='" + y + "']"))
            }
            return y
        },
        _destroy: function() {
            if (this.xhr) {
                this.xhr.abort()
            }
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tablist.unbind(this.eventNamespace);
            this.tabs.add(this.panels).each(function() {
                if (a.data(this, "ui-tabs-destroy")) {
                    a(this).remove()
                } else {
                    a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }
            });
            this.tabs.each(function() {
                var y = a(this),
                    z = y.data("ui-tabs-aria-controls");
                if (z) {
                    y.attr("aria-controls", z).removeData("ui-tabs-aria-controls")
                } else {
                    y.removeAttr("aria-controls")
                }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "")
            }
        },
        enable: function(z) {
            var y = this.options.disabled;
            if (y === false) {
                return
            }
            if (z === undefined) {
                y = false
            } else {
                z = this._getIndex(z);
                if (a.isArray(y)) {
                    y = a.map(y, function(A) {
                        return A !== z ? A : null
                    })
                } else {
                    y = a.map(this.tabs, function(A, B) {
                        return B !== z ? B : null
                    })
                }
            }
            this._setupDisabled(y)
        },
        disable: function(z) {
            var y = this.options.disabled;
            if (y === true) {
                return
            }
            if (z === undefined) {
                y = true
            } else {
                z = this._getIndex(z);
                if (a.inArray(z, y) !== -1) {
                    return
                }
                if (a.isArray(y)) {
                    y = a.merge([z], y).sort()
                } else {
                    y = [z]
                }
            }
            this._setupDisabled(y)
        },
        load: function(C, A) {
            C = this._getIndex(C);
            var F = this,
                E = this.tabs.eq(C),
                y = E.find(".ui-tabs-anchor"),
                D = this._getPanelForTab(E),
                B = {
                    tab: E,
                    panel: D
                },
                z = function(G, H) {
                    if (H === "abort") {
                        F.panels.stop(false, true)
                    }
                    E.removeClass("ui-tabs-loading");
                    D.removeAttr("aria-busy");
                    if (G === F.xhr) {
                        delete F.xhr
                    }
                };
            if (this._isLocal(y[0])) {
                return
            }
            this.xhr = a.ajax(this._ajaxSettings(y, A, B));
            if (this.xhr && this.xhr.statusText !== "canceled") {
                E.addClass("ui-tabs-loading");
                D.attr("aria-busy", "true");
                this.xhr.done(function(H, I, G) {
                    setTimeout(function() {
                        D.html(H);
                        F._trigger("load", A, B);
                        z(G, I)
                    }, 1)
                }).fail(function(G, H) {
                    setTimeout(function() {
                        z(G, H)
                    }, 1)
                })
            }
        },
        _ajaxSettings: function(y, z, A) {
            var B = this;
            return {
                url: y.attr("href"),
                beforeSend: function(C, D) {
                    return B._trigger("beforeLoad", z, a.extend({
                        jqXHR: C,
                        ajaxSettings: D
                    }, A))
                }
            }
        },
        _getPanelForTab: function(z) {
            var y = a(z).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + y))
        }
    });
    /*
     * jQuery UI Tooltip 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/tooltip/
     */
    var s = a.widget("ui.tooltip", {
        version: "1.11.4",
        options: {
            content: function() {
                var y = a(this).attr("title") || "";
                return a("<a>").text(y).html()
            },
            hide: true,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            tooltipClass: null,
            track: false,
            close: null,
            open: null
        },
        _addDescribedBy: function(z, A) {
            var y = (z.attr("aria-describedby") || "").split(/\s+/);
            y.push(A);
            z.data("ui-tooltip-id", A).attr("aria-describedby", a.trim(y.join(" ")))
        },
        _removeDescribedBy: function(z) {
            var A = z.data("ui-tooltip-id"),
                y = (z.attr("aria-describedby") || "").split(/\s+/),
                B = a.inArray(A, y);
            if (B !== -1) {
                y.splice(B, 1)
            }
            z.removeData("ui-tooltip-id");
            y = a.trim(y.join(" "));
            if (y) {
                z.attr("aria-describedby", y)
            } else {
                z.removeAttr("aria-describedby")
            }
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            if (this.options.disabled) {
                this._disable()
            }
            this.liveRegion = a("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(y, A) {
            var z = this;
            if (y === "disabled") {
                this[A ? "_disable" : "_enable"]();
                this.options[y] = A;
                return
            }
            this._super(y, A);
            if (y === "content") {
                a.each(this.tooltips, function(B, C) {
                    z._updateContent(C.element)
                })
            }
        },
        _disable: function() {
            var y = this;
            a.each(this.tooltips, function(A, B) {
                var z = a.Event("blur");
                z.target = z.currentTarget = B.element[0];
                y.close(z, true)
            });
            this.element.find(this.options.items).addBack().each(function() {
                var z = a(this);
                if (z.is("[title]")) {
                    z.data("ui-tooltip-title", z.attr("title")).removeAttr("title")
                }
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var y = a(this);
                if (y.data("ui-tooltip-title")) {
                    y.attr("title", y.data("ui-tooltip-title"))
                }
            })
        },
        open: function(y) {
            var A = this,
                z = a(y ? y.target : this.element).closest(this.options.items);
            if (!z.length || z.data("ui-tooltip-id")) {
                return
            }
            if (z.attr("title")) {
                z.data("ui-tooltip-title", z.attr("title"))
            }
            z.data("ui-tooltip-open", true);
            if (y && y.type === "mouseover") {
                z.parents().each(function() {
                    var C = a(this),
                        B;
                    if (C.data("ui-tooltip-open")) {
                        B = a.Event("blur");
                        B.target = B.currentTarget = this;
                        A.close(B, true)
                    }
                    if (C.attr("title")) {
                        C.uniqueId();
                        A.parents[this.id] = {
                            element: this,
                            title: C.attr("title")
                        };
                        C.attr("title", "")
                    }
                })
            }
            this._registerCloseHandlers(y, z);
            this._updateContent(z, y)
        },
        _updateContent: function(C, A) {
            var y, z = this.options.content,
                D = this,
                B = A ? A.type : null;
            if (typeof z === "string") {
                return this._open(A, C, z)
            }
            y = z.call(C[0], function(E) {
                D._delay(function() {
                    if (!C.data("ui-tooltip-open")) {
                        return
                    }
                    if (A) {
                        A.type = B
                    }
                    this._open(A, C, E)
                })
            });
            if (y) {
                this._open(A, C, y)
            }
        },
        _open: function(B, E, z) {
            var G, F, A, y, D = a.extend({}, this.options.position);
            if (!z) {
                return
            }
            G = this._find(E);
            if (G) {
                G.tooltip.find(".ui-tooltip-content").html(z);
                return
            }
            if (E.is("[title]")) {
                if (B && B.type === "mouseover") {
                    E.attr("title", "")
                } else {
                    E.removeAttr("title")
                }
            }
            G = this._tooltip(E);
            F = G.tooltip;
            this._addDescribedBy(E, F.attr("id"));
            F.find(".ui-tooltip-content").html(z);
            this.liveRegion.children().hide();
            if (z.clone) {
                y = z.clone();
                y.removeAttr("id").find("[id]").removeAttr("id")
            } else {
                y = z
            }
            a("<div>").html(y).appendTo(this.liveRegion);

            function C(H) {
                D.of = H;
                if (F.is(":hidden")) {
                    return
                }
                F.position(D)
            }
            if (this.options.track && B && /^mouse/.test(B.type)) {
                this._on(this.document, {
                    mousemove: C
                });
                C(B)
            } else {
                F.position(a.extend({ of: E
                }, this.options.position))
            }
            F.hide();
            this._show(F, this.options.show);
            if (this.options.show && this.options.show.delay) {
                A = this.delayedShow = setInterval(function() {
                    if (F.is(":visible")) {
                        C(D.of);
                        clearInterval(A)
                    }
                }, a.fx.interval)
            }
            this._trigger("open", B, {
                tooltip: F
            })
        },
        _registerCloseHandlers: function(y, A) {
            var z = {
                keyup: function(B) {
                    if (B.keyCode === a.ui.keyCode.ESCAPE) {
                        var C = a.Event(B);
                        C.currentTarget = A[0];
                        this.close(C, true)
                    }
                }
            };
            if (A[0] !== this.element[0]) {
                z.remove = function() {
                    this._removeTooltip(this._find(A).tooltip)
                }
            }
            if (!y || y.type === "mouseover") {
                z.mouseleave = "close"
            }
            if (!y || y.type === "focusin") {
                z.focusout = "close"
            }
            this._on(true, A, z)
        },
        close: function(y) {
            var B, A = this,
                z = a(y ? y.currentTarget : this.element),
                C = this._find(z);
            if (!C) {
                z.removeData("ui-tooltip-open");
                return
            }
            B = C.tooltip;
            if (C.closing) {
                return
            }
            clearInterval(this.delayedShow);
            if (z.data("ui-tooltip-title") && !z.attr("title")) {
                z.attr("title", z.data("ui-tooltip-title"))
            }
            this._removeDescribedBy(z);
            C.hiding = true;
            B.stop(true);
            this._hide(B, this.options.hide, function() {
                A._removeTooltip(a(this))
            });
            z.removeData("ui-tooltip-open");
            this._off(z, "mouseleave focusout keyup");
            if (z[0] !== this.element[0]) {
                this._off(z, "remove")
            }
            this._off(this.document, "mousemove");
            if (y && y.type === "mouseleave") {
                a.each(this.parents, function(D, E) {
                    a(E.element).attr("title", E.title);
                    delete A.parents[D]
                })
            }
            C.closing = true;
            this._trigger("close", y, {
                tooltip: B
            });
            if (!C.hiding) {
                C.closing = false
            }
        },
        _tooltip: function(y) {
            var A = a("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                z = A.uniqueId().attr("id");
            a("<div>").addClass("ui-tooltip-content").appendTo(A);
            A.appendTo(this.document[0].body);
            return this.tooltips[z] = {
                element: y,
                tooltip: A
            }
        },
        _find: function(z) {
            var y = z.data("ui-tooltip-id");
            return y ? this.tooltips[y] : null
        },
        _removeTooltip: function(y) {
            y.remove();
            delete this.tooltips[y.attr("id")]
        },
        _destroy: function() {
            var y = this;
            a.each(this.tooltips, function(B, C) {
                var A = a.Event("blur"),
                    z = C.element;
                A.target = A.currentTarget = z[0];
                y.close(A, true);
                a("#" + B).remove();
                if (z.data("ui-tooltip-title")) {
                    if (!z.attr("title")) {
                        z.attr("title", z.data("ui-tooltip-title"))
                    }
                    z.removeData("ui-tooltip-title")
                }
            });
            this.liveRegion.remove()
        }
    })
}));
/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(e) {
    function t(e) {
        var t = e.length,
            r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function(e) {
            return null != e && e == e.window
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e)
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            for (t in e);
            return void 0 === t || n.call(e, t)
        }, $.each = function(e, r, a) {
            var n, o = 0,
                i = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1) break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1) break;
            return e
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando],
                    o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando],
                n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t]
            })
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [e] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t),
                    n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    r = this.offset(),
                    a = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function(t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            C.getControlPoints = function() {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(),
                    r = v.State.calls.length;
                r > 1e4 && (v.State.calls = n(v.State.calls));
                for (var o = 0; r > o; o++)
                    if (v.State.calls[o]) {
                        var s = v.State.calls[o],
                            l = s[0],
                            u = s[2],
                            f = s[3],
                            d = !!f,
                            m = null;
                        f || (f = v.State.calls[o][3] = t - 16);
                        for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
                            var S = l[h],
                                w = S.element;
                            if (i(w)) {
                                var V = !1;
                                if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(C, function(e, t) {
                                            x.setPropertyValue(w, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(w, "display", u.display)
                                }
                                u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
                                for (var T in S)
                                    if ("element" !== T) {
                                        var k = S[T],
                                            A, F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                        if (1 === y) A = k.endValue;
                                        else {
                                            var E = k.endValue - k.startValue;
                                            if (A = k.startValue + E * F(y, u, E), !d && A === k.currentValue) continue
                                        }
                                        if (k.currentValue = A, "tween" === T) m = A;
                                        else {
                                            if (x.Hooks.registered[T]) {
                                                var j = x.Hooks.getRoot(T),
                                                    H = i(w).rootPropertyValueCache[j];
                                                H && (k.rootPropertyValue = H)
                                            }
                                            var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                            x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), "transform" === N[0] && (V = !0)
                                        }
                                    }
                                u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)", V = !0), V && x.flushTransformCache(w)
                            }
                        }
                        u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m), 1 === y && p(o)
                    }
            }
            v.State.isTicking && P(c)
        }

        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n)
                } catch (d) {
                    setTimeout(function() {
                        throw d
                    }, 1)
                }
                s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }
        var f = function() {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            d = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var r = (new Date).getTime(),
                        a;
                    return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                        t(r + a)
                    }, a)
                }
            }(),
            g = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400,
            h = "swing",
            v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: $,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: y,
                    easing: h,
                    begin: a,
                    complete: a,
                    progress: a,
                    display: a,
                    visibility: a,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    $.data(e, "velocity", {
                        isSVG: g.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }

            function r(r, a) {
                var n = {
                        dx: r.v,
                        dv: e(r)
                    },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    i = [0],
                    s = 0,
                    l = 1e-4,
                    u = .016,
                    c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
                    if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0]
                } : s
            }
        }();
        v.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, $.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)
                        for (r in x.Hooks.templates) {
                            a = x.Hooks.templates[r], n = a[0].split(" ");
                            var o = a[1].match(x.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e],
                                s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0],
                            o = a[1],
                            i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var a;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case "inject":
                                return "rect(" + r + ")"
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return v.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = n ? n[1] : 0
                                }
                                return a;
                            case "inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case "scal":
                                        case "scale":
                                            v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                            break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(n);
                                            break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                    else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r,
                        c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                if (!/^[\d-]/.test(l))
                    if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r))
                        if (/^(height|width)$/i.test(r)) try {
                            l = e.getBBox()[r]
                        } catch (g) {
                            l = 0
                        } else l = e.getAttribute(r);
                        else l = s(e, x.Names.prefixCheck(r)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r,
                            u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function() {
            function e() {
                return l ? T.promise || null : f
            }

            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a,
                            i = a,
                            s = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration), e[2] !== a && (s = e[2]))) : r = e, t || (i = i || o.easing), g.isFunction(r) && (r = r.call(n, w, P)), g.isFunction(s) && (s = s.call(n, w, P)), [r || 0, i, s]
                    }

                    function f(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }

                    function d() {
                        var e = {
                                myParent: n.parentNode || r.body,
                                position: x.getPropertyValue(n, "position"),
                                fontSize: x.getPropertyValue(n, "fontSize")
                            },
                            a = e.position === N.lastPosition && e.myParent === N.lastParent,
                            o = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (o && a) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
                        else {
                            var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n), l
                    }
                    if (o.begin && 0 === w) try {
                        o.begin.call(m, m)
                    } catch (y) {
                        setTimeout(function() {
                            throw y
                        }, 1)
                    }
                    if ("scroll" === k) {
                        var S = /^x$/i.test(o.axis) ? "Left" : "Top",
                            V = parseFloat(o.offset) || 0,
                            C, A, F;
                        o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, C = o.container["scroll" + S], F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]], A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], F = $(n).offset()[S.toLowerCase()] + V), s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: F,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {
                                    container: o.container,
                                    direction: S,
                                    alternateValue: A
                                }
                            },
                            element: n
                        }, v.debug && console.log("tweensContainer (scroll): ", s.scroll, n)
                    } else if ("reverse" === k) {
                        if (!i(n).tweensContainer) return void $.dequeue(n, o.queue);
                        "none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, b.easing || delete o.easing, b.duration || delete o.duration, o = $.extend({}, i(n).opts, o);
                        var E = $.extend(!0, {}, i(n).tweensContainer);
                        for (var j in E)
                            if ("element" !== j) {
                                var H = E[j].startValue;
                                E[j].startValue = E[j].currentValue = E[j].endValue, E[j].endValue = H, g.isEmptyObject(b) || (E[j].easing = o.easing), v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n)
                            }
                        s = E
                    } else if ("start" === k) {
                        var E;
                        i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer), $.each(h, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        o && f.push(o), u !== a && f.push(u[c]), h[e + s[c]] = f
                                    }
                                    delete h[e]
                                }
                            }
                        });
                        for (var R in h) {
                            var O = p(h[R]),
                                z = O[0],
                                q = O[1],
                                M = O[2];
                            R = x.Names.camelCase(R);
                            var I = x.Hooks.getRoot(R),
                                B = !1;
                            if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                (o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0), o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType), B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I), M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
                                var W, G, D, X = !1;
                                if (W = f(R, M), M = W[0], D = W[1], W = f(R, z), z = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return X = t, ""
                                    }), G = W[1], M = parseFloat(M) || 0, z = parseFloat(z) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100, G = "em") : /^scale/.test(R) ? (z /= 100, G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255, G = "")), /[\/*]/.test(X)) G = D;
                                else if (D !== G && 0 !== M)
                                    if (0 === z) G = D;
                                    else {
                                        l = l || d();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
                                        switch (D) {
                                            case "%":
                                                M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= l[D + "ToPx"]
                                        }
                                        switch (G) {
                                            case "%":
                                                M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= 1 / l[G + "ToPx"]
                                        }
                                    }
                                switch (X) {
                                    case "+":
                                        z = M + z;
                                        break;
                                    case "-":
                                        z = M - z;
                                        break;
                                    case "*":
                                        z = M * z;
                                        break;
                                    case "/":
                                        z = M / z
                                }
                                s[R] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: z,
                                    unitType: G,
                                    easing: q
                                }, v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n)
                            } else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
                        }
                        s.element = n
                    }
                    s.element && (x.Values.addClass(n, "velocity-animating"), L.push(s), "" === o.queue && (i(n).tweensContainer = s, i(n).opts = o), i(n).isAnimating = !0, w === P - 1 ? (v.State.calls.push([L, m, o, null, T.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : w++)
                }
                var n = this,
                    o = $.extend({}, v.defaults, b),
                    s = {},
                    l;
                switch (i(n) === a && v.init(n), parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function(e) {
                    v.velocityQueueEntryFlag = !0, i(n).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: e
                    }
                }), o.duration.toString().toLowerCase()) {
                    case "fast":
                        o.duration = 200;
                        break;
                    case "normal":
                        o.duration = y;
                        break;
                    case "slow":
                        o.duration = 600;
                        break;
                    default:
                        o.duration = parseFloat(o.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1, o.delay *= parseFloat(v.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !g.isFunction(o.begin) && (o.begin = null), o.progress && !g.isFunction(o.progress) && (o.progress = null), o.complete && !g.isFunction(o.complete) && (o.complete = null), o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))), o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function(t, r) {
                    return r === !0 ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n)
            }
            var s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
                l, f, d, m, h, b;
            if (g.isWrapped(this) ? (l = !1, d = 0, m = this, f = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                s ? (h = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (h = arguments[d], b = arguments[d + 1]);
                var P = m.length,
                    w = 0;
                if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
                    var V = d + 1;
                    b = {};
                    for (var C = V; C < arguments.length; C++) g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C]
                }
                var T = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                l && v.Promise && (T.promise = new v.Promise(function(e, t) {
                    T.resolver = e, T.rejecter = t
                }));
                var k;
                switch (h) {
                    case "scroll":
                        k = "scroll";
                        break;
                    case "reverse":
                        k = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        $.each(m, function(e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var A = [];
                        return $.each(v.State.calls, function(e, t) {
                            t && $.each(t[1], function(r, n) {
                                var o = b === a ? "" : b;
                                return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function(r, a) {
                                    a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function(e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), $.queue(a, g.isString(b) ? b : "", [])), "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), A.push(e)) : "finish" === h && (t[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === h && ($.each(A, function(e, t) {
                            p(t, !0)
                        }), T.promise && T.resolver(m)), e();
                    default:
                        if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
                            if (g.isString(h) && v.Redirects[h]) {
                                var F = $.extend({}, b),
                                    E = F.duration,
                                    j = F.delay || 0;
                                return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()), $.each(m, function(e, t) {
                                    parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)), F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y), F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)), v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a)
                                }), e()
                            }
                            var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return T.promise ? T.rejecter(new Error(H)) : console.log(H), e()
                        }
                        k = "start"
                }
                var N = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    L = [];
                $.each(m, function(e, t) {
                    g.isNode(t) && n.call(t)
                });
                var F = $.extend({}, v.defaults, b),
                    R;
                if (F.loop = parseInt(F.loop), R = 2 * F.loop - 1, F.loop)
                    for (var O = 0; R > O; O++) {
                        var z = {
                            delay: F.delay,
                            progress: F.progress
                        };
                        O === R - 1 && (z.display = F.display, z.visibility = F.visibility, z.complete = F.complete), S(m, "reverse", z)
                    }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});
$j(document).ready(function() {
    $j.widget("ui.dialog", $j.ui.dialog, {
        open: function() {
            var b = this._super();
            if (this.isOpen) {
                var c = this;

                function a() {
                    c.close()
                }
                this.overlay.unbind("touchstart click", a);
                this.overlay.bind("touchstart click", a)
            }
            return b
        }
    })
});
(function(a, b) {
    a.fn.DOMcollapse = function(c) {
        function d(e, h) {
            try {
                e.html(h)
            } catch (g) {
                try {
                    e[0].innerHTML = h
                } catch (f) {
                    e[0].innerText = h
                }
            }
        }
        return this.each(function() {
            var i = a.extend({
                trigger: "",
                triggerCopyCollapsed: "",
                triggerCopyExpanded: "",
                speed: 100,
                row: false,
                invert: false
            }, c);
            var f = a(this),
                j = f.data("domain-show"),
                k = f.parent().find(i.trigger),
                g = 0,
                e = false;
            var h = function() {
                g = 0;
                numPerRow = 0;
                if (i.invert) {
                    g = 0
                } else {
                    if (i.row) {
                        g = f.children().eq(0).outerHeight(true)
                    } else {
                        numPerRow = Math.round(f.outerWidth(true) / f.children().eq(0).outerWidth(true));
                        for (var m = 0; m < j; m = m + numPerRow) {
                            g = g + f.children().eq(m).outerHeight(true)
                        }
                    }
                }
                var l = (!j);
                if (i.invert) {
                    l = true
                }
                if (l) {
                    d(k, i.triggerCopyExpanded);
                    e = false;
                    k.attr("data-eventaction", "Show project listings");
                    return
                } else {
                    d(k, i.triggerCopyCollapsed);
                    e = true;
                    f.css({
                        height: g
                    });
                    k.attr("data-eventaction", "Hide project listings")
                }
            };
            a(k).on("click", function() {
                if (e) {
                    d(k, i.triggerCopyExpanded);
                    k.val(i.triggerCopyExpanded);
                    f.css({
                        height: "auto"
                    });
                    if (i.invert) {
                        f.removeClass("hide-visually")
                    }
                    e = false;
                    k.attr("data-eventaction", "Show project listings")
                } else {
                    d(k, i.triggerCopyCollapsed);
                    k.val(i.triggerCopyCollapsed);
                    f.css({
                        height: g
                    });
                    if (i.invert) {
                        f.addClass("hide-visually")
                    }
                    e = true;
                    k.attr("data-eventaction", "Hide project listings")
                }
            });
            h();
            if (!(a("html").hasClass("lte8"))) {
                a(b).resize(function() {
                    h()
                })
            }
        })
    }
}(jQuery, window));
(function(a) {
    a.fn.maps = function(g) {
        var h = a.extend({
                key: "",
                mapStatic: "",
                showStatic: false,
                trigger: "",
                stViewTrigger: "",
                stViewContainerID: "",
                mapID: "",
                mapCenter: [],
                mapZoomLevel: 16,
                retina: false
            }, g),
            c = false,
            i = false,
            d = a(h.trigger).data("pin"),
            b = a(h.trigger).data("pin_default"),
            f = 0,
            e = 0;
        if (!b) {
            f = 120;
            e = 40
        } else {
            f = 40;
            e = 62
        }
        getStaticMap = function(j) {
            var l = j.width(),
                k = j.height(),
                m = h.retina ? 2 : 1,
                n = "/googlemaps/staticmap?center=" + h.mapCenter[0] + "," + h.mapCenter[1] + "&zoom=" + h.mapZoomLevel + "&size=" + l + "x" + k + "&v=3&format=jpg&scale=" + m + "&sensor=false&mobile=true&" + h.key;
            j.css({
                "background-image": "url(" + n + ")"
            });
            if (!b) {
                j.prepend('<span class="static-map-pin logo"><img src="' + d + '"></span>')
            } else {
                j.prepend('<span class="static-map-pin"><img src="' + d + '"></span>')
            }
        }, setupGMaps = function(l, j, q, p) {
            var n = {
                center: new google.maps.LatLng(j[0], j[1]),
                zoom: q,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true
            };
            var k = new google.maps.Map(document.getElementById(l), n);
            var m = new google.maps.MarkerImage(p, null, null, null, new google.maps.Size(f, e));
            var o = new google.maps.Marker({
                position: new google.maps.LatLng(j[0], j[1]),
                icon: m,
                map: k
            })
        }, setupStreetView = function(k, m) {
            var l = new google.maps.StreetViewPanorama(document.getElementById(k)),
                j = new google.maps.LatLng(m[0], m[1]),
                n = new google.maps.StreetViewService();
            n.getPanoramaByLocation(j, 50, function(p) {
                var o = google.maps.geometry.spherical.computeHeading(p.location.latLng, j),
                    q = {
                        position: j,
                        pov: {
                            heading: o,
                            pitch: 10
                        }
                    };
                l.setOptions(q)
            })
        };
        if (h.showStatic) {
            getStaticMap(a(h.mapStatic))
        }
        a(h.trigger).on("click", function() {
            var j = h.mapID;
            a(h.stViewTrigger).removeClass("selected");
            a(h.trigger).addClass("selected");
            a("#" + h.stViewContainerID).removeClass("active");
            a("#" + j).addClass("active");
            if (!c) {
                setTimeout(function() {
                    setupGMaps(j, h.mapCenter, h.mapZoomLevel, d)
                }, 100);
                c = true
            }
        });
        a(h.stViewTrigger).on("click", function() {
            var j = h.stViewContainerID;
            a(h.trigger).removeClass("selected");
            a(h.stViewTrigger).addClass("selected");
            a("#" + h.mapID).removeClass("active");
            a("#" + j).addClass("active");
            if (!i) {
                setupStreetView(j, h.mapCenter);
                i = true
            }
        })
    }
}(jQuery)); +
function(a) {
    var b = ".dropdown-backdrop";
    var h = '[data-toggle="dropdown"]';
    var d = function(i) {
        a(i).on("click.bs.dropdown", this.toggle)
    };
    d.VERSION = "3.2.0";
    d.prototype.toggle = function(k) {
        var j = a(this);
        if (j.is(".disabled, :disabled")) {
            return
        }
        var i = e(j);
        var l = i.hasClass("open");
        c();
        if (!l) {
            if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) {
                a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", c)
            }
            var m = {
                relatedTarget: this
            };
            i.trigger(k = a.Event("show.bs.dropdown", m));
            if (k.isDefaultPrevented()) {
                return
            }
            j.trigger("focus");
            i.toggleClass("open").trigger("shown.bs.dropdown", m)
        }
        return false
    };
    d.prototype.keydown = function(m) {
        if (!/(38|40|27)/.test(m.keyCode)) {
            return
        }
        var k = a(this);
        m.preventDefault();
        m.stopPropagation();
        if (k.is(".disabled, :disabled")) {
            return
        }
        var j = e(k);
        var o = j.hasClass("open");
        if (!o || (o && m.keyCode == 27)) {
            if (m.which == 27) {
                j.find(h).trigger("focus")
            }
            return k.trigger("click")
        }
        var l = " li:not(.divider):visible a";
        var i = j.find('[role="menu"]' + l + ', [role="listbox"]' + l);
        if (!i.length) {
            return
        }
        var n = i.index(i.filter(":focus"));
        if (m.keyCode == 38 && n > 0) {
            n--
        }
        if (m.keyCode == 40 && n < i.length - 1) {
            n++
        }
        if (!~n) {
            n = 0
        }
        i.eq(n).trigger("focus")
    };

    function c(i) {
        if (i && i.which === 3) {
            return
        }
        a(b).remove();
        a(h).each(function() {
            var j = e(a(this));
            var k = {
                relatedTarget: this
            };
            if (!j.hasClass("open")) {
                return
            }
            j.trigger(i = a.Event("hide.bs.dropdown", k));
            if (i.isDefaultPrevented()) {
                return
            }
            j.removeClass("open").trigger("hidden.bs.dropdown", k)
        })
    }

    function e(j) {
        var k = j.attr("data-target");
        if (!k) {
            k = j.attr("href");
            k = k && /#[A-Za-z]/.test(k) && k.replace(/.*(?=#[^\s]*$)/, "")
        }
        var i = k && a(k);
        return i && i.length ? i : j.parent()
    }

    function g(i) {
        return this.each(function() {
            var j = a(this);
            var k = j.data("bs.dropdown");
            if (!k) {
                j.data("bs.dropdown", (k = new d(this)))
            }
            if (typeof i == "string") {
                k[i].call(j)
            }
        })
    }
    var f = a.fn.dropdown;
    a.fn.dropdown = g;
    a.fn.dropdown.Constructor = d;
    a.fn.dropdown.noConflict = function() {
        a.fn.dropdown = f;
        return this
    };
    a(document).on("click.bs.dropdown.data-api", function(i) {
        if (!a(i.target).hasClass("ui-menu-item")) {
            c()
        }
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(i) {
        if (!a(i.target).hasClass("ui-menu-item")) {
            i.stopPropagation()
        }
    }).on("click.bs.dropdown.data-api", h, d.prototype.toggle).on("keydown.bs.dropdown.data-api", h + ', [role="menu"], [role="listbox"]', d.prototype.keydown)
}(jQuery);
(function(a) {
    a.fn.stickyBanner = function() {
        var c = this.parent().position(),
            b = a(window).scrollTop();
        if (b > c.top) {
            this.addClass("sticky")
        } else {
            this.removeClass("sticky")
        }
    }
}(jQuery));
$j(document).ready(function() {
    if (typeof pageSettings != "undefined" && typeof pageSettings.map != "undefined" && pageSettings.map) {
        if ($j("#lat")[0] && $j("#long")[0]) {
            var a = [];
            a.push($j("#lat").val());
            a.push($j("#long").val());
            $j("#dialogMap").maps({
                key: "channel=domaincomau",
                mapStatic: "#map-static",
                showStatic: true,
                trigger: ".trigger_map",
                stViewTrigger: ".trigger_streetView",
                stViewContainerID: "streetView",
                mapID: "map",
                mapCenter: a,
                mapZoomLevel: 16,
                retina: isRetina
            })
        }
        if ($j("#displayLat")[0] && $j("#displayLong")[0]) {
            var a = [];
            a.push($j("#displayLat").val());
            a.push($j("#displayLong").val());
            $j("#dialogMapDisplay").maps({
                key: "channel=domaincomau",
                mapStatic: "",
                showStatic: false,
                trigger: ".trigger_map_display",
                stViewTrigger: ".trigger_streetView_display",
                stViewContainerID: "streetViewDisplay",
                mapID: "mapDisplay",
                mapCenter: a,
                mapZoomLevel: 16,
                retina: isRetina
            })
        }
    }
    
    $j("select").each(function() {
        $this = $j(this);
        var d = {
            my: "left top",
            at: "left bottom",
            collision: "none"
        };
        if ($this.data("uiMenuPosition") === "top-right") {
            d = {
                my: "right top",
                at: "right top-10"
            }
        }
        if ($this.data("select-icon")) {
            $this.selectmenu({
                icons: {
                    button: $this.data("select-icon")
                },
                position: d
            })
        } else {
            $this.selectmenu({
                icons: {
                    button: "icon-triangle"
                },
                position: d
            })
        }
    });
    SetupICheck();
    $j("[data-format-number]").keyup(function(d) {
        if (d.which >= 37 && d.which <= 40) {
            return
        }
        $j(this).val(function(e, f) {
            return f.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })
    });
    $j(".dropdown-content .dropdown-content-inner").on("click", function(d) {
        d.stopPropagation()
    });
    SetupCustomSelectMenuWidget();
    $j(".trigger_trigger").on("click", function() {
        var d = $j(this).data("trigger_trigger");
        $j("." + d).trigger("click")
    });
    $j(".addActive").on("click", function() {
        $j(this).addClass("active")
    });
    $j("[data-toggle-class]").on("click", function() {
        $this = $j(this);
        var d = $this.data("toggle-class");
        var f = $this.data("toggle-parent");
        if (typeof f !== "undefined") {
            $this.parents("." + f).first().toggleClass(d);
            var e = $this.data("only-active");
            if (e) {
                $this.parent("." + f).siblings("." + f).removeClass(d)
            }
        } else {
            $this.toggleClass(d)
        }
    });
    if (!isMobile()) {
        $j('[data-toggle="tooltip"]').tooltip({
            template: '<div class="bs-tooltip" role="tooltip"><div class="tooltip-outer-wrap"><div class="tooltip-arrow"></div><div class="tooltip-inner-wrap"><div class="tooltip-inner"></div></div></div></div>'
        });
        $j('[data-toggle="tooltip-closable"]').tooltip({
            template: '<div class="bs-tooltip closable t-left" role="tooltip"><div class="tooltip-outer-wrap"><div class="tooltip-arrow"></div><div class="tooltip-inner-wrap"><span class="close-tooltip icon domain-icon-ic_close"></span><div class="tooltip-inner"></div></div></div></div>'
        }).on("shown.bs.tooltip", function(d) {
            $this = $j("#" + $j(d.target).attr("aria-describedby"));
            $this.find(".close-tooltip").on("click", function(f) {
                $this.tooltip("hide")
            })
        })
    }
    $j("#lightGallery").lightGallery({
        caption: false,
        captionLink: false,
        desc: false,
        counter: true,
        mode: "fade",
        easing: "linear",
        speed: 400,
        loop: true,
        videoAutoplay: false,
        thumbWidth: 50,
        thumbMargin: 0,
        animateThumb: false,
        useCSS: true,
        videoMaxWidth: "80%",
        enableDrag: false,
        exThumbImage: "data-img-src",
        onOpen: function() {
            var d = ".lightgallery-ads";
            if ($j("body").find(d).length) {
                $j("#lightGallery-outer").addClass("ads-on");
                $j(d).addClass("show");
                var e = document.createElement("div");
                e.className = "ad";
                e.id = "adspot-160x600-pos-1";
                $j(d).append(e);
                var f = window.titan || {};
                f.requestConditionalAd = f.requestConditionalAd || [];
                f.requestConditionalAd.push("adspot-160x600-pos-1")
            }
            if (!isMobile()) {
                $j("#lightGallery-Gallery .lightGallery-slide").addClass("clickable").on("click", function() {
                    if (!$j(this).hasClass("not-transitional")) {
                        $j("#lightGallery-next").trigger("click")
                    }
                })
            }
            setTimeout(function() {
                initFlowPlayer()
            }, 2000);
            if (typeof(TrackLightBoxImageChange) == typeof(Function)) {
                TrackLightBoxImageChange()
            }
        },
        onSlideBefore: function() {},
        onSlideAfter: function() {
            if (typeof(TrackLightBoxImageChange) == typeof(Function)) {
                TrackLightBoxImageChange()
            }
            if (!isMobile()) {
                $j("#lightGallery-Gallery .lightGallery-slide .btn").on("click", function(d) {
                    d.stopPropagation()
                })
            }
        }
    });

    function c() {
        var d = ".lightgallery-ads";
        setTimeout(function() {
            if ($j("body").find(d).length) {
                $j(d).removeClass("show")
            }
        }, 550)
    }
    $j("html").on("click", "#lightGallery-Gallery a#lightGallery-close", function() {
        c()
    });
    var b = 27;
    $j(document).keyup(function(d) {
        if (d.keyCode == b) {
            c()
        }
    });
    $j("#firstImageTrigger").on("click", function(d) {
        $j(".gallery-image").first().trigger("click");
        d.stopPropagation();
        d.preventDefault()
    });
    $j("#firstFloorPlanTrigger").on("click", function(d) {
        $j(".gallery-floorplan").first().trigger("click");
        d.stopPropagation();
        d.preventDefault()
    });
    $j("#firstVideoTrigger").on("click", function(d) {
        $j(".gallery-video").first().trigger("click");
        d.stopPropagation();
        d.preventDefault()
    });
    $j("#first3DTourTrigger").on("click", function(d) {
        $j(".gallery-3DTour").first().trigger("click");
        d.stopPropagation();
        d.preventDefault()
    });
    $j("#firstPanoTrigger").on("click", function(d) {
        $j(".gallery-pano360").first().trigger("click");
        if (typeof lazyLoadPanoFunc === "function") {
            lazyLoadPanoFunc(1)
        }
        $j(".pano-wrap").addClass("front").attr("data-is-galleryview", "true");
        if (window.dataLayer && window.dataLayer.push) {
            window.dataLayer.push({
                event: "GAevent",
                eventCategory: "Interaction",
                eventAction: "View Images",
                eventLabel: "360 Image - Gallery Open"
            })
        }
        d.stopPropagation();
        d.preventDefault()
    });
    $j(".fadeThrough").fadeThrough({
        interval: 8000,
        fadeduration: 1000,
        heightduration: 0,
        animatestartheight: false,
        autostart: true,
        childIdentifier: "li"
    });
    $j("[data-stop-propagation]").on("click", function(d) {
        d.stopPropagation()
    });
    resizeWrap(".media-wrap");
    if ($j(".media-gallery.premium #imageHero").length) {
        $j(".media-gallery.premium #imageHero").imagesLoaded().done(function(d) {
            heroResize()
        })
    }
    $j(".dropdown-content .js-wrap").on("click", function(d) {
        d.stopPropagation()
    });
    SetupHomePageToggle()
});
$j(window).load(function() {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        document.addEventListener("touchmove", a, false);
        document.addEventListener("touchstart", a, false)
    }
    $j(window).on("scroll", function() {
        a()
    });

    function a() {
        if ($j(".project-banner-top").length) {
            $j(".project-banner-top").stickyBanner()
        }
    }
});
if (!($j("html").hasClass("lte8"))) {
    $j(window).resize(function() {
        resizeWrap(".media-wrap");
        if ($j(".media-gallery.premium #imageHero").length) {
            heroResize()
        }
    })
}

function initFlowPlayer() {
    $j(".flowplayerVideoWrap").each(function() {
        $this = $j(this);
        var b = $this.data("fpkey"),
            a = $this.data("agencyid"),
            c = $this.data("statsurl");
        FlowPlayercall("div.flowplayerVideoWrap", "", b, false, false, a, c)
    })
}

function heroResize() {
    var e = document.getElementById("heroWrap"),
        j = e.offsetWidth,
        i = e.offsetHeight,
        b = document.getElementById("imageHero");
    var g = new Image();
    if (b.src) {
        g.src = b.src
    }
    var d = g.width,
        a = g.height;
    b.className = "";
    e.style.height = "";
    b.style.margin = "";
    var h = (j <= (d * 1.2) ? true : false),
        f = (d / a);
    if (d < 420 && a < 280) {
        b.className = b.className + " small";
        marginTop = (i - b.height) / 2;
        b.style.margin = String(marginTop + "px auto auto auto");
        removeLoader("galleryLoader")
    } else {
        if (f > 1.333333333333333) {
            if (h) {
                b.className = b.className + " wide"
            } else {
                b.className = b.className + " regular"
            }
            var c = b.height;
            if (c <= i) {
                e.style.height = String(c + "px");
                removeLoader("galleryLoader")
            } else {
                marginTop = (b.height - i) / 2;
                b.style.margin = String("-" + marginTop + "px auto auto auto");
                removeLoader("galleryLoader")
            }
        } else {
            removeLoader("galleryLoader")
        }
    }
    if ($j(".gallery", e).hasClass("gallery-cover-3")) {
        e.style.height = b.height + "px";
        b.style.margin = 0
    }
    return false
}

function removeLoader(a) {
    var a = document.getElementById(a);
    a.className = "image-placeholder";
    a.className = a.className + " loaded"
}

function resizeWrap(a) {
    var a = $j(a);
    a.each(function() {
        $this = $j(this);
        $this.css({
            height: (Math.round($this.offsetWidth * 0.75)) + "px"
        })
    })
}

function SetupCustomSelectMenuWidget() {
    $j("select").each(function() {
        $this = $j(this);
        if ($j.isFunction($this.selectmenu)) {
            if ($this.data("select-icon")) {
                $this.selectmenu({
                    icons: {
                        button: $this.data("select-icon")
                    }
                }).selectmenu("menuWidget").addClass("overflow")
            } else {
                $this.selectmenu({
                    icons: {
                        button: "icon-triangle"
                    }
                }).selectmenu("menuWidget").addClass("overflow")
            }
        }
    })
}

function SetupHomePageToggle() {
    $j(".toggle-content").animateSlideToggle({
        trigger: ".toggle-trigger",
        triggerCopyCollapsed: 'More options<span class="f-icon"><span class="icon domain-icon-ic_navigational_down_arrow"></span></span>',
        triggerCopyExpanded: 'Less options<span class="f-icon"><span class="icon domain-icon-ic_navigational_up_arrow"></span></span>'
    })
}

function SetupICheck(a) {
    a = a || document;
    $j("input", a).iCheck({
        aria: true,
        cursor: true
    }).on("ifChanged", function(b) {
        $j(b.target).trigger("change")
    })
}

function isMobile() {
    if (navigator.userAgent.match(/iPod|iPhone|iPad|Android|BlackBerry|IEMobile|Opera Mini|webOS/)) {
        return true
    }
}
$j.fn.animateSlideToggle = function(a) {
    return this.each(function() {
        var d = $j.extend({
            trigger: "",
            triggerCopyCollapsed: "",
            triggerCopyExpanded: ""
        }, a);
        var c = $j(this),
            e = c.parent().find(d.trigger),
            b = !c.is(":visible");
        e.on("click", function() {
            c.slideToggle(200, "linear", function() {
                if (b) {
                    e.html(d.triggerCopyExpanded);
                    b = false
                } else {
                    e.html(d.triggerCopyCollapsed);
                    b = true
                }
            })
        })
    })
};
var onYouTubeIframeAPIReadyCustomisations = [];

function checkAndLoadContactPlayerYT() {
    if (typeof loadContactPlayer != "undefined" && loadContactPlayer) {
        loadContactPlayerYT()
    }
}

function registerContactYouTubePlayerLoader() {
    onYouTubeIframeAPIReadyCustomisations.push(checkAndLoadContactPlayerYT)
}
registerContactYouTubePlayerLoader();

function onYouTubeIframeAPIReady() {
    for (index in onYouTubeIframeAPIReadyCustomisations) {
        var a = onYouTubeIframeAPIReadyCustomisations[index];
        a()
    }
};

function filterByImage() {
    return this.className !== "gallery-blank"
}(function(a) {
    a.fn.lightGallery = function(x) {
        var p = {
                mode: "slide",
                useCSS: true,
                cssEasing: "ease",
                easing: "linear",
                speed: 600,
                addClass: "",
                closable: true,
                loop: false,
                auto: false,
                pause: 4000,
                escKey: true,
                controls: true,
                hideControlOnEnd: false,
                preload: 1,
                showAfterLoad: true,
                selector: null,
                index: false,
                lang: {
                    allPhotos: "All photos"
                },
                counter: false,
                exThumbImage: false,
                thumbnail: true,
                showThumbByDefault: false,
                animateThumb: true,
                currentPagerPosition: "middle",
                thumbWidth: 100,
                thumbMargin: 5,
                mobileSrc: false,
                mobileSrcMaxWidth: 640,
                swipeThreshold: 50,
                enableTouch: true,
                enableDrag: true,
                vimeoColor: "CCCCCC",
                videoAutoplay: true,
                videoMaxWidth: "855px",
                mp4tag: "&amp;#t=1206",
                dropboxTag: "&amp;raw=1",
                youtubePattern: /\/\/(?:www\.|m.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?(v|((t|x-yt-cl)=[0-9]+|(edit|feature)=[a-zA-Z_.]+)&v)=|embed\/|v\/)?([a-zA-Z0-9_\-]+)/i,
                vimeoPattern: /vimeo\.com\/((((user([0-9]+)|airappeal|realestateproductions|chosenphotography)\/review|video|external)\/))?([0-9a-z\-_]+)/i,
                dynamic: false,
                dynamicEl: [],
                onOpen: function(E) {},
                onSlideBefore: function(E) {},
                onSlideAfter: function(E) {},
                onSlideNext: function(E) {},
                onSlidePrev: function(E) {},
                onBeforeClose: function(E) {},
                onCloseAfter: function(E) {}
            },
            q = a(this),
            y = this,
            c = null,
            r = 0,
            t = false,
            w = false,
            u = document.createTouch !== undefined || ("ontouchstart" in window) || ("onmsgesturechange" in window) || navigator.msMaxTouchPoints,
            d, e, j, i, h, f, z, l, k, D, s, C = false,
            n = false,
            m = false;
        var A = a.extend(true, {}, p, x);
        var g = a(".pano-wrap"),
            b = a("a-sky", g),
            o = a(".gallery-pano360").first().data("pano");
        var v = {
            init: function() {
                q.each(function() {
                    var E = a(this);
                    if (A.dynamic) {
                        c = A.dynamicEl;
                        r = 0;
                        z = r;
                        B.init(r)
                    } else {
                        if (A.selector !== null) {
                            c = a(A.selector)
                        } else {
                            c = E.children()
                        }
                        c.on("click", function(F) {
                            if (A.selector !== null) {
                                c = a(A.selector)
                            } else {
                                c = E.children().filter(filterByImage)
                            }
                            F.preventDefault();
                            F.stopPropagation();
                            r = c.index(this);
                            if (!B.isPano360(c[r]) || F.isTrigger) {
                                z = r;
                                B.init(r)
                            }
                        })
                    }
                })
            }
        };
        var B = {
            init: function() {
                t = true;
                this.structure();
                this.getWidth();
                this.closeSlide();
                this.autoStart();
                this.counter();
                this.slideTo();
                this.buildThumbnail();
                this.keyPress();
                if (A.index) {
                    this.slide(A.index);
                    this.animateThumb(A.index)
                } else {
                    this.slide(r);
                    this.animateThumb(r)
                }
                if (A.enableDrag) {
                    this.touch()
                }
                if (A.enableTouch) {
                    this.enableTouch()
                }
                setTimeout(function() {
                    d.addClass("opacity")
                }, 50)
            },
            structure: function() {
                var F = this;
                a("body").append('<div id="lightGallery-outer" class="' + A.addClass + '"><div id="lightGallery-Gallery"><div id="lightGallery-slider"></div><a id="lightGallery-close" class="f-icon" title="close gallery"><span class="icon domain-icon-ic_close"></span><span class="hide-visually">close gallery</span></a></div></div>').addClass("lightGallery");
                e = a("#lightGallery-outer");
                d = a("#lightGallery-Gallery");
                if (A.showAfterLoad === true) {
                    d.addClass("showAfterLoad")
                }
                j = d.find("#lightGallery-slider");
                var G = "";
                if (A.dynamic) {
                    for (var E = 0; E < A.dynamicEl.length; E++) {
                        G += '<div class="lightGallery-slide"></div>'
                    }
                } else {
                    c.each(function(J, I) {
                        var H = F.isPano360(I) ? " pano" : "";
                        G += '<div class="lightGallery-slide' + H + '"></div>'
                    })
                }
                j.append(G);
                i = d.find(".lightGallery-slide")
            },
            openPanoOverlay: function() {
                g.addClass("front");
                g.attr("data-is-galleryview", "true")
            },
            removePanoOverlay: function() {
                g.removeClass("front");
                g.attr("data-is-galleryview", "false")
            },
            closeSlide: function() {
                var E = this;

                function F() {
                    y.destroy(false);
                    E.removePanoOverlay();
                    E.setPanoImage(o)
                }
                if (A.closable) {
                    a("#lightGallery-outer").on("click", function(G) {
                        if (G.target == this) {
                            F()
                        }
                    })
                }
                a("#lightGallery-close").bind("click touchend", F)
            },
            getWidth: function() {
                var E = function() {
                    D = a(window).width()
                };
                a(window).bind("resize.lightGallery", E())
            },
            doCss: function() {
                var E = function() {
                    var H = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"];
                    var G = document.documentElement;
                    for (var F = 0; F < H.length; F++) {
                        if (H[F] in G.style) {
                            return true
                        }
                    }
                };
                if (A.useCSS && E()) {
                    return true
                }
                return false
            },
            enableTouch: function() {
                var E = this;
                if (u) {
                    var G = {},
                        F = {};
                    a("body").on("touchstart.lightGallery", function(H) {
                        F = H.originalEvent.targetTouches[0];
                        G.pageX = H.originalEvent.targetTouches[0].pageX;
                        G.pageY = H.originalEvent.targetTouches[0].pageY
                    });
                    a("body").on("touchmove.lightGallery", function(H) {
                        var I = H.originalEvent;
                        F = I.targetTouches[0];
                        H.preventDefault()
                    });
                    a("body").on("touchend.lightGallery", function(I) {
                        var H = F.pageX - G.pageX,
                            J = A.swipeThreshold;
                        if (H >= J) {
                            E.prevSlide();
                            clearInterval(s)
                        } else {
                            if (H <= -J) {
                                E.nextSlide();
                                clearInterval(s)
                            }
                        }
                    })
                }
            },
            touch: function() {
                var G, F;
                var E = this;
                a(".lightGallery").bind("mousedown", function(H) {
                    H.stopPropagation();
                    G = H.pageX
                });
                a(".lightGallery").bind("mouseup", function(H) {
                    H.stopPropagation();
                    F = H.pageX;
                    if (F - G > 20) {
                        E.prevSlide()
                    } else {
                        if (G - F > 20) {
                            E.nextSlide()
                        }
                    }
                })
            },
            isVideo: function(H, G) {
                var J = decodeURI(H).match(A.youtubePattern);
                var I = H.match(A.vimeoPattern);
                var E = H.match(/.html$/i);
                var F = false;
                if (A.dynamic) {
                    if (A.dynamicEl[G].iframe == "true") {
                        F = true
                    }
                } else {
                    if (c.eq(G).attr("data-iframe") == "true") {
                        F = true
                    }
                }
                if (J || I || E || F) {
                    return true
                }
            },
            isPano360: function(E) {
                return a(E).data("ispano360")
            },
            loadVideo: function(L, E) {
                var Q = decodeURI(L).match(A.youtubePattern);
                var N = L.match(A.vimeoPattern);
                var I = L.match(/.html$/i);
                var M = "";
                var J = L.toLowerCase().includes(".mp4");
                var G = L.toLowerCase().includes("dropbox");
                var H = L.indexOf("?") !== -1;
                var F = "";
                if (Q) {
                    if (A.videoAutoplay === true && w === false) {
                        F = "?autoplay=1&rel=0&wmode=opaque"
                    } else {
                        F = "?wmode=opaque&rel=0"
                    }
                    var R = "//www.youtube.com/embed/" + Q.pop();
                    M = '<iframe class="object" width="560" height="315" src="' + R + F + '" frameborder="0" allowfullscreen title="Property video"></iframe>'
                } else {
                    if (N) {
                        var O = N[N.length - 1];
                        if (A.videoAutoplay === true && w === false) {
                            F = "autoplay=1&amp;"
                        } else {
                            if (J) {
                                F = A.mp4tag
                            } else {
                                F = "autoplay=0&amp;"
                            }
                        }
                        var K = L.match(/player\.vimeo\.com\//i);
                        var P = K == null ? ("https://player.vimeo.com/video/" + O + "?" + F + "byline=0&amp;portrait=0&amp;color=" + A.vimeoColor) : K.input + (K.input.indexOf("?") !== -1 ? "" : "?") + F;
                        M = '<iframe class="object" id="video' + E + '" width="560" height="315"  src="' + P + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen title="Property video"></iframe>'
                    } else {
                        if (I && ((c.eq(r).attr("data-html") == "true") || (c.eq(r).attr("data-tour") == "true"))) {
                            M = '<iframe class="object" id="video' + E + '" src="' + L + '" title="Property video"></iframe>'
                        } else {
                            if (c.eq(r).attr("data-tour") == "true") {
                                M = '<iframe sandbox="allow-forms allow-scripts allow-same-origin" class="object" frameborder="0" src="' + L + '"  allowfullscreen="true" title="Property video"></iframe>'
                            } else {
                                M = '<iframe sandbox="allow-forms allow-scripts allow-same-origin" class="object" frameborder="0" src="' + L + (H ? "" : "?") + (G ? A.dropboxTag : "") + (J ? A.mp4tag : "") + '"  allowfullscreen="true" title="Property video"></iframe>'
                            }
                        }
                    }
                }
                return '<div class="video_cont" style="max-width:' + A.videoMaxWidth + ' !important;"><div class="video">' + M + "</div></div>"
            },
            addHtml: function(G) {
                var E = null;
                if (A.dynamic) {
                    E = A.dynamicEl[G]["sub-html"]
                } else {
                    E = c.eq(G).attr("data-sub-html")
                }
                if (typeof E !== "undefined" && E !== null) {
                    var F = E.substring(0, 1);
                    if (F == "." || F == "#") {
                        E = a(E).html()
                    } else {
                        E = E
                    }
                    i.eq(G).append(E)
                }
            },
            preload: function(F) {
                var H = F;
                for (var G = 0; G <= A.preload; G++) {
                    if (G >= c.length - F) {
                        break
                    }
                    this.loadContent(H + G, true)
                }
                for (var E = 0; E <= A.preload; E++) {
                    if (H - E < 0) {
                        break
                    }
                    this.loadContent(H - E, true);
                    if (H === 0) {
                        this.loadContent(c.length - 1 - E, true)
                    }
                }
            },
            loadObj: function(G, F) {
                var E = this;
                i.eq(F).find(".object").on("load error", function() {
                    i.eq(F).addClass("complete")
                });
                if (G === false) {
                    if (!i.eq(F).hasClass("complete")) {
                        i.eq(F).find(".object").on("load error", function() {
                            E.preload(F)
                        })
                    } else {
                        E.preload(F)
                    }
                }
            },
            loadContent: function(H, I) {
                var E = this;
                var J, G = c.eq(H),
                    F = "";
                if (A.preload > c.length) {
                    A.preload = c.length
                }
                if (A.mobileSrc === true && D <= A.mobileSrcMaxWidth) {
                    if (A.dynamic) {
                        J = A.dynamicEl[H].mobileSrc
                    } else {
                        J = G.attr("data-responsive-src")
                    }
                } else {
                    if (A.dynamic) {
                        J = A.dynamicEl[H].src
                    } else {
                        J = G.attr("data-src");
                        F = c.eq(H).attr("data-alt")
                    }
                }
                var K = 0;
                if (I === true) {
                    K = A.speed + 400
                }
                if (typeof J !== "undefined" && J !== "") {
                    if (E.isVideo(J, H)) {
                        setTimeout(function() {
                            if (!i.eq(H).hasClass("loaded")) {
                                i.eq(H).prepend(E.loadVideo(J, H));
                                E.addHtml(H);
                                i.eq(H).addClass("loaded");
                                if (A.auto && A.videoAutoplay === true) {
                                    clearInterval(s)
                                }
                            }
                            E.loadObj(I, H)
                        }, K)
                    } else {
                        if (E.isPano360(G)) {
                            setTimeout(function() {
                                if (!i.eq(H).hasClass("loaded")) {
                                    i.eq(H).addClass("loaded complete")
                                }
                                E.loadObj(I, H)
                            }, K)
                        } else {
                            setTimeout(function() {
                                if (!i.eq(H).hasClass("loaded")) {
                                    i.eq(H).prepend('<img class="object" src="' + J + '" alt="' + F + '" />');
                                    if (c.eq(H).attr("class") === "gallery-video" || c.eq(H).attr("class") === "gallery-3DTour") {
                                        i.eq(H).prepend('<div class="video-overlay"><span class="f-icon"><span class="icon domain-icon-ic_play"></span><span class="hide-visually">Play video</span></span></div>');
                                        i.eq(H).off("click");
                                        i.eq(H).on("click", function(L) {
                                            window.open(c.eq(H).data("medialinkurl"))
                                        })
                                    }
                                    E.addHtml(H);
                                    i.eq(H).addClass("loaded")
                                }
                                E.loadObj(I, H)
                            }, K)
                        }
                    }
                } else {
                    setTimeout(function() {
                        if (!i.eq(H).hasClass("loaded")) {
                            var L = null;
                            if (A.dynamic) {
                                L = A.dynamicEl[H].html
                            } else {
                                L = G.attr("data-html")
                            }
                            if (typeof L !== "undefined" && L !== null) {
                                var M = L.substring(0, 1);
                                if (M == "." || M == "#") {
                                    L = a(L).html()
                                } else {
                                    L = L
                                }
                            }
                            if (typeof L !== "undefined" && L !== null) {
                                i.eq(H).append('<div class="video_cont" style="max-width:' + A.videoMaxWidth + ' !important;"><div class="video">' + L + "</div></div>")
                            }
                            E.addHtml(H);
                            i.eq(H).addClass("loaded complete");
                            if (A.auto && A.videoAutoplay === true) {
                                clearInterval(s)
                            }
                        }
                        E.loadObj(I, H)
                    }, K)
                }
            },
            counter: function() {
                if (A.counter === true) {
                    var E = a("#lightGallery-slider > div").length;
                    d.append("<div id='lightGallery_counter'><span class='f-icon size-24 with-text'><span class='icon domain-icon-ic_camera-24'></span><span class='copy'><span id='lightGallery_counter_current'></span><span> / </span><span id='lightGallery_counter_all'>" + E + "</span></span><span class='hide-visually'>images in gallery</span></span></div>")
                }
            },
            buildThumbnail: function() {
                if (A.thumbnail === true && c.length > 1) {
                    var F = this,
                        E = "";
                    if (!A.showThumbByDefault) {
                        E = '<span class="close ib"><i class="bUi-iCn-rMv-16" aria-hidden="true"></i></span>'
                    }
                    d.append('<div class="thumb_cont"><a class="cLthumb">Thumbnails<span></span></a><div class="thumb_info">' + E + '<span class="close ib"><i class="bUi-iCn-rMv-16" aria-hidden="true"></i></span></div><div class="thumb_inner"></div></div>');
                    l = d.find(".thumb_cont");
                    h.after('<a class="cLthumb"></a>');
                    h.parent().addClass("hasThumb");
                    d.find(".cLthumb").bind("click touchend", function() {
                        var N = a(this);
                        if (l.hasClass("open")) {
                            l.removeClass("open")
                        } else {
                            l.addClass("open")
                        }
                        d.addClass("open");
                        if (F.doCss() && A.mode === "slide") {
                            i.eq(r).prevAll().removeClass("nextSlide").addClass("prevSlide");
                            i.eq(r).nextAll().removeClass("prevSlide").addClass("nextSlide")
                        }
                    });
                    d.find(".thumb_cont .close").bind("click touchend", function() {
                        d.removeClass("open")
                    });
                    var K = d.find(".thumb_info");
                    var G = d.find(".thumb_inner");
                    var L = "";
                    var J, I;
                    if (A.dynamic) {
                        for (var H = 0; H < A.dynamicEl.length; H++) {
                            J = A.dynamicEl[H].thumb;
                            L += '<div class="thumb"><img src="' + J + '" alt="Thumbnail ' + H + '" /></div>'
                        }
                    } else {
                        c.each(function() {
                            if (A.exThumbImage === false || typeof a(this).attr(A.exThumbImage) == "undefined" || a(this).attr(A.exThumbImage) === null) {
                                if (F.isPano360(this)) {
                                    J = a(this).data("src");
                                    I = a(this).data("pano") || o
                                } else {
                                    J = a(this).find("img").attr("src")
                                }
                            } else {
                                J = a(this).attr(A.exThumbImage);
                                I = a(this).data("pano") || o
                            }
                            if (a(this).data("isvideo")) {
                                L += '<div class="thumb"><img src="' + J + '" /><div class="video-overlay compact"><span class="f-icon"><span class="icon domain-icon-ic_play"></span><span class="hide-visually">Play video</span></span></div></div>'
                            } else {
                                if (a(this).data("ispano360")) {
                                    L += '<div class="thumb" data-pano="' + I + '"><img src="' + J + '" /><div class="video-overlay compact"><span class="f-icon"><span class="icon domain-icon-ic_pano360"></span><span class="hide-visually">View 360 image</span></span></div></div>'
                                } else {
                                    L += '<div class="thumb"><img src="' + J + '" alt="Thumbnail ' + c.index(this) + '" /></div>'
                                }
                            }
                        })
                    }
                    G.append(L);
                    k = G.find(".thumb");
                    k.css({
                        "margin-right": A.thumbMargin + "px",
                        width: A.thumbWidth + "px"
                    });
                    if (A.animateThumb === true) {
                        var M = (c.length * (A.thumbWidth + A.thumbMargin));
                        d.find(".thumb_inner").css({
                            position: "relative",
                            "transition-duration": A.speed + "ms"
                        })
                    }
                    k.bind("click touchend", function() {
                        C = true;
                        var N = a(this);
                        var P = N.index();
                        var Q = (function() {
                            var R = document.querySelector(N.data("pano"));
                            return R && !R.getAttribute("data-lazy-src") && R.getAttribute("src")
                        })();

                        function O() {
                            F.setPanoImage(N.data("pano"))
                        }
                        k.removeClass("active");
                        N.addClass("active");
                        F.slide(P);
                        F.animateThumb(P);
                        clearInterval(s);
                        if (Q) {
                            O()
                        }
                        if (typeof lazyLoadPanoFunc === "function") {
                            lazyLoadPanoFunc(P, [O])
                        }
                    })
                }
            },
            setPanoImage: function(E) {
                b.attr("src", E)
            },
            animateThumb: function(E) {
                if (A.animateThumb === true) {
                    var H = d.find(".thumb_cont").width();
                    var G;
                    switch (A.currentPagerPosition) {
                        case "left":
                            G = 0;
                            break;
                        case "middle":
                            G = (H / 2) - (A.thumbWidth / 2);
                            break;
                        case "right":
                            G = H - A.thumbWidth
                    }
                    var F = ((A.thumbWidth + A.thumbMargin) * E - 1) - G;
                    var I = (c.length * (A.thumbWidth + A.thumbMargin));
                    if (F > (I - H)) {
                        F = I - H
                    }
                    if (F < 0) {
                        F = 0
                    }
                    if (this.doCss()) {
                        d.find(".thumb_inner").css("transform", "translate3d(-" + F + "px, 0px, 0px)")
                    } else {
                        d.find(".thumb_inner").animate({
                            left: -F + "px"
                        }, A.speed)
                    }
                }
            },
            slideTo: function() {
                var E = this;
                if (A.controls === true && c.length > 1) {
                    d.append('<div id="lightGallery-action"><a id="lightGallery-prev" class="lightGallery-nav f-icon"><span class="icon domain-icon-ic_navigational_left_arrow"></span><span class="hide-visually">previous image</span></a><a id="lightGallery-next" class="lightGallery-nav f-icon"><span class="icon domain-icon-ic_navigational_right_arrow"></span><span class="hide-visually">next image</span></a></div>');
                    h = d.find("#lightGallery-prev");
                    f = d.find("#lightGallery-next");
                    h.bind("click", function() {
                        E.prevSlide();
                        clearInterval(s)
                    });
                    f.bind("click", function() {
                        E.nextSlide();
                        clearInterval(s)
                    })
                }
            },
            autoStart: function() {
                var E = this;
                if (A.auto === true) {
                    s = setInterval(function() {
                        if (r + 1 < c.length) {
                            r = r
                        } else {
                            r = -1
                        }
                        r++;
                        E.slide(r)
                    }, A.pause)
                }
            },
            keyPress: function() {
                var E = this;
                a(window).bind("keyup.lightGallery", function(F) {
                    F.preventDefault();
                    F.stopPropagation();
                    if (F.keyCode === 37) {
                        E.prevSlide();
                        clearInterval(s)
                    }
                    if (F.keyCode === 38 && A.thumbnail === true && c.length > 1) {
                        if (!d.hasClass("open")) {
                            if (E.doCss() && A.mode === "slide") {
                                i.eq(r).prevAll().removeClass("nextSlide").addClass("prevSlide");
                                i.eq(r).nextAll().removeClass("prevSlide").addClass("nextSlide")
                            }
                            d.addClass("open")
                        }
                    } else {
                        if (F.keyCode === 39) {
                            E.nextSlide();
                            clearInterval(s)
                        }
                    }
                    if (F.keyCode === 40 && A.thumbnail === true && c.length > 1 && !A.showThumbByDefault) {
                        if (d.hasClass("open")) {
                            d.removeClass("open")
                        }
                    } else {
                        if (A.escKey === true && F.keyCode === 27) {
                            if (g) {
                                E.removePanoOverlay()
                            }
                            y.destroy(false)
                        }
                    }
                })
            },
            nextSlide: function() {
                var E = this;
                r = i.index(i.eq(z));
                if (r + 1 < c.length) {
                    r++;
                    E.slide(r)
                } else {
                    if (A.loop) {
                        r = 0;
                        E.slide(r)
                    } else {
                        if (A.thumbnail === true && c.length > 1 && !A.showThumbByDefault) {
                            d.addClass("open")
                        } else {
                            i.eq(r).find(".object").addClass("rightEnd");
                            setTimeout(function() {
                                i.find(".object").removeClass("rightEnd")
                            }, 400)
                        }
                    }
                }
                E.animateThumb(r);
                A.onSlideNext.call(this, y)
            },
            prevSlide: function() {
                var E = this;
                r = i.index(i.eq(z));
                if (r > 0) {
                    r--;
                    E.slide(r)
                } else {
                    if (A.loop) {
                        r = c.length - 1;
                        E.slide(r)
                    } else {
                        if (A.thumbnail === true && c.length > 1 && !A.showThumbByDefault) {
                            d.addClass("open")
                        } else {
                            i.eq(r).find(".object").addClass("leftEnd");
                            setTimeout(function() {
                                i.find(".object").removeClass("leftEnd")
                            }, 400)
                        }
                    }
                }
                E.animateThumb(r);
                A.onSlidePrev.call(this, y)
            },
            slide: function(F) {
                var E = this;
                if (w) {
                    setTimeout(function() {
                        E.loadContent(F, false)
                    }, A.speed + 400);
                    if (!j.hasClass("on")) {
                        j.addClass("on")
                    }
                    if (this.doCss() && A.speed !== "") {
                        if (!j.hasClass("speed")) {
                            j.addClass("speed")
                        }
                        if (m === false) {
                            j.css("transition-duration", A.speed + "ms");
                            m = true
                        }
                    }
                    if (this.doCss() && A.cssEasing !== "") {
                        if (!j.hasClass("timing")) {
                            j.addClass("timing")
                        }
                        if (n === false) {
                            j.css("transition-timing-function", A.cssEasing);
                            n = true
                        }
                    }
                    A.onSlideBefore.call(this, y)
                } else {
                    E.loadContent(F, false)
                }
                if (A.mode === "slide") {
                    var G = navigator.userAgent.match(/iPad/i) !== null;
                    if (this.doCss() && !j.hasClass("slide") && !G) {
                        j.addClass("slide")
                    } else {
                        if (this.doCss() && !j.hasClass("useLeft") && G) {
                            j.addClass("useLeft")
                        }
                    }
                    if (!this.doCss() && !w) {
                        j.css({
                            left: (-F * 100) + "%"
                        })
                    } else {
                        if (!this.doCss() && w) {
                            j.animate({
                                left: (-F * 100) + "%"
                            }, A.speed, A.easing)
                        }
                    }
                } else {
                    if (A.mode === "fade") {
                        if (this.doCss() && !j.hasClass("fadeM")) {
                            j.addClass("fadeM")
                        } else {
                            if (!this.doCss() && !j.hasClass("animate")) {
                                j.addClass("animate")
                            }
                        }
                        if (!this.doCss() && !w) {
                            i.fadeOut(100);
                            i.eq(F).fadeIn(100)
                        } else {
                            if (!this.doCss() && w) {
                                i.eq(z).fadeOut(A.speed, A.easing);
                                i.eq(F).fadeIn(A.speed, A.easing)
                            }
                        }
                    }
                }
                if (F + 1 >= c.length && A.auto && A.loop === false) {
                    clearInterval(s)
                }
                i.eq(z).removeClass("current");
                i.eq(F).addClass("current");
                if (i.eq(F).hasClass("pano")) {
                    E.openPanoOverlay()
                } else {
                    E.removePanoOverlay()
                }
                if (this.doCss() && A.mode === "slide") {
                    if (C === false) {
                        a(".prevSlide").removeClass("prevSlide");
                        a(".nextSlide").removeClass("nextSlide");
                        i.eq(F - 1).addClass("prevSlide");
                        i.eq(F + 1).addClass("nextSlide")
                    } else {
                        i.eq(F).prevAll().removeClass("nextSlide").addClass("prevSlide");
                        i.eq(F).nextAll().removeClass("prevSlide").addClass("nextSlide")
                    }
                }
                if (A.thumbnail === true && c.length > 1) {
                    k.removeClass("active");
                    k.eq(F).addClass("active")
                }
                if (A.controls && A.hideControlOnEnd && A.loop === false && c.length > 1) {
                    var H = c.length;
                    H = parseInt(H) - 1;
                    if (F === 0) {
                        h.addClass("disabled");
                        f.removeClass("disabled")
                    } else {
                        if (F === H) {
                            h.removeClass("disabled");
                            f.addClass("disabled")
                        } else {
                            h.add(f).removeClass("disabled")
                        }
                    }
                }
                z = F;
                w === false ? A.onOpen.call(this, y) : A.onSlideAfter.call(this, y);
                setTimeout(function() {
                    w = true
                });
                C = false;
                if (A.counter) {
                    a("#lightGallery_counter_current").text(F + 1)
                }
                a(window).bind("resize.lightGallery", function() {
                    setTimeout(function() {
                        E.animateThumb(F)
                    }, 200)
                })
            }
        };
        y.isActive = function() {
            if (t === true) {
                return true
            } else {
                return false
            }
        };
        y.destroy = function(E) {
            t = false;
            E = typeof E !== "undefined" ? false : true;
            A.onBeforeClose.call(this, y);
            var F = w;
            w = false;
            n = false;
            m = false;
            C = false;
            clearInterval(s);
            if (E === true) {
                c.off("click touch touchstart")
            }
            a(".lightGallery").off("mousedown mouseup");
            a("body").off("touchstart.lightGallery touchmove.lightGallery touchend.lightGallery");
            a(window).off("resize.lightGallery keyup.lightGallery");
            if (F === true) {
                d.addClass("fadeM");
                setTimeout(function() {
                    e.remove();
                    a("body").removeClass("lightGallery")
                }, 500)
            }
            A.onCloseAfter.call(this, y)
        };
        v.init();
        return this
    }
}(jQuery));
/*
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) {
                if (b && b.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.")
                }
                return
            }
            var c = a.data(this[0], "validator");
            if (c) {
                return c
            }
            this.attr("novalidate", "novalidate");
            c = new a.validator(b, this[0]);
            a.data(this[0], "validator", c);
            if (c.settings.onsubmit) {
                this.validateDelegate(":submit", "click", function(d) {
                    if (c.settings.submitHandler) {
                        c.submitButton = d.target
                    }
                    if (a(d.target).hasClass("cancel")) {
                        c.cancelSubmit = true
                    }
                    if (a(d.target).attr("formnovalidate") !== undefined) {
                        c.cancelSubmit = true
                    }
                });
                this.submit(function(d) {
                    if (c.settings.debug) {
                        d.preventDefault()
                    }

                    function e() {
                        var f;
                        if (c.settings.submitHandler) {
                            if (c.submitButton) {
                                f = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)
                            }
                            c.settings.submitHandler.call(c, c.currentForm, d);
                            if (c.submitButton) {
                                f.remove()
                            }
                            return false
                        }
                        return true
                    }
                    if (c.cancelSubmit) {
                        c.cancelSubmit = false;
                        return e()
                    }
                    if (c.form()) {
                        if (c.pendingRequest) {
                            c.formSubmitted = true;
                            return false
                        }
                        return e()
                    } else {
                        c.focusInvalid();
                        return false
                    }
                })
            }
            return c
        },
        valid: function() {
            if (a(this[0]).is("form")) {
                return this.validate().form()
            } else {
                var b = true;
                var c = a(this[0].form).validate();
                this.each(function() {
                    b = b && c.element(this)
                });
                return b
            }
        },
        removeAttrs: function(c) {
            var d = {},
                b = this;
            a.each(c.split(/\s/), function(e, f) {
                d[f] = b.attr(f);
                b.removeAttr(f)
            });
            return d
        },
        rules: function(c, b) {
            var e = this[0];
            if (c) {
                var i = a.data(e.form, "validator").settings;
                var j = i.rules;
                var f = a.validator.staticRules(e);
                switch (c) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(b));
                        delete f.messages;
                        j[e.name] = f;
                        if (b.messages) {
                            i.messages[e.name] = a.extend(i.messages[e.name], b.messages)
                        }
                        break;
                    case "remove":
                        if (!b) {
                            delete j[e.name];
                            return f
                        }
                        var g = {};
                        a.each(b.split(/\s/), function(k, l) {
                            g[l] = f[l];
                            delete f[l]
                        });
                        return g
                }
            }
            var d = a.validator.normalizeRules(a.extend({}, a.validator.classRules(e), a.validator.attributeRules(e), a.validator.dataRules(e), a.validator.staticRules(e)), e);
            if (d.required) {
                var h = d.required;
                delete d.required;
                d = a.extend({
                    required: h
                }, d)
            }
            return d
        }
    });
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    });
    a.validator = function(c, b) {
        this.settings = a.extend(true, {}, a.validator.defaults, c);
        this.currentForm = b;
        this.init()
    };
    a.validator.format = function(c, b) {
        if (arguments.length === 1) {
            return function() {
                var d = a.makeArray(arguments);
                d.unshift(c);
                return a.validator.format.apply(this, d)
            }
        }
        if (arguments.length > 2 && b.constructor !== Array) {
            b = a.makeArray(arguments).slice(1)
        }
        if (b.constructor !== Array) {
            b = [b]
        }
        a.each(b, function(d, e) {
            c = c.replace(new RegExp("\\{" + d + "\\}", "g"), function() {
                return e
            })
        });
        return c
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(b, c) {
                this.lastActive = b;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass)
                    }
                    this.addWrapper(this.errorsFor(b)).hide()
                }
            },
            onfocusout: function(b, c) {
                if (!this.checkable(b) && (b.name in this.submitted || !this.optional(b))) {
                    this.element(b)
                }
            },
            onkeyup: function(b, c) {
                if (c.which === 9 && this.elementValue(b) === "") {
                    return
                } else {
                    if (b.name in this.submitted || b === this.lastElement) {
                        this.element(b)
                    }
                }
            },
            onclick: function(b, c) {
                if (b.name in this.submitted) {
                    this.element(b)
                } else {
                    if (b.parentNode.name in this.submitted) {
                        this.element(b.parentNode)
                    }
                }
            },
            highlight: function(b, c, d) {
                if (b.type === "radio") {
                    this.findByName(b.name).addClass(c).removeClass(d)
                } else {
                    a(b).addClass(c).removeClass(d)
                }
            },
            unhighlight: function(b, c, d) {
                if (b.type === "radio") {
                    this.findByName(b.name).removeClass(c).addClass(d)
                } else {
                    a(b).removeClass(c).addClass(d)
                }
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c = (this.groups = {});
                a.each(this.settings.groups, function(e, f) {
                    if (typeof f === "string") {
                        f = f.split(/\s/)
                    }
                    a.each(f, function(g, h) {
                        c[h] = e
                    })
                });
                var d = this.settings.rules;
                a.each(d, function(e, f) {
                    d[e] = a.validator.normalizeRule(f)
                });

                function b(e) {
                    var g = a.data(this[0].form, "validator"),
                        f = "on" + e.type.replace(/^validate/, "");
                    if (g.settings[f]) {
                        g.settings[f].call(g, this[0], e)
                    }
                }
                a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b);
                if (this.settings.invalidHandler) {
                    a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                }
            },
            form: function() {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                if (!this.valid()) {
                    a(this.currentForm).triggerHandler("invalid-form", [this])
                }
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var c = 0, b = (this.currentElements = this.elements()); b[c]; c++) {
                    this.check(b[c])
                }
                return this.valid()
            },
            element: function(b) {
                b = this.validationTargetFor(this.clean(b));
                this.lastElement = b;
                this.prepareElement(b);
                this.currentElements = a(b);
                var c = this.check(b) !== false;
                if (c) {
                    delete this.invalid[b.name]
                } else {
                    this.invalid[b.name] = true
                }
                if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers)
                }
                this.showErrors();
                return c
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b);
                    this.errorList = [];
                    for (var c in b) {
                        this.errorList.push({
                            message: b[c],
                            element: this.findByName(c)[0]
                        })
                    }
                    this.successList = a.grep(this.successList, function(d) {
                        return !(d.name in b)
                    })
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList)
                } else {
                    this.defaultShowErrors()
                }
            },
            resetForm: function() {
                if (a.fn.resetForm) {
                    a(this.currentForm).resetForm()
                }
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(d) {
                var b = 0;
                for (var c in d) {
                    b++
                }
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                }
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && a.grep(this.errorList, function(c) {
                    return c.element.name === b.name
                }).length === 1 && b
            },
            elements: function() {
                var c = this,
                    b = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    if (!this.name && c.settings.debug && window.console) {
                        console.error("%o has no name assigned", this)
                    }
                    if (this.name in b || !c.objectLength(a(this).rules())) {
                        return false
                    }
                    b[this.name] = true;
                    return true
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(b) {
                this.reset();
                this.toHide = this.errorsFor(b)
            },
            elementValue: function(b) {
                var c = a(b).attr("type"),
                    d = a(b).val();
                if (c === "radio" || c === "checkbox") {
                    return a("input[name='" + a(b).attr("name") + "']:checked").val()
                }
                if (typeof d === "string") {
                    return d.replace(/\r/g, "")
                }
                return d
            },
            check: function(d) {
                d = this.validationTargetFor(this.clean(d));
                var i = a(d).rules();
                var b = false;
                var j = this.elementValue(d);
                var g;
                for (var f in i) {
                    var h = {
                        method: f,
                        parameters: i[f]
                    };
                    try {
                        g = a.validator.methods[f].call(this, j, d, h.parameters);
                        if (g === "dependency-mismatch") {
                            b = true;
                            continue
                        }
                        b = false;
                        if (g === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(d));
                            return
                        }
                        if (!g) {
                            this.formatAndAdd(d, h);
                            return false
                        }
                    } catch (c) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + d.id + ", check the '" + h.method + "' method.", c)
                        }
                        throw c
                    }
                }
                if (b) {
                    return
                }
                if (this.objectLength(i)) {
                    this.successList.push(d)
                }
                return true
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || (b.attributes && a(b).attr("data-msg-" + c.toLowerCase()))
            },
            customMessage: function(d, c) {
                var b = this.settings.messages[d];
                return b && (b.constructor === String ? b : b[c])
            },
            findDefined: function() {
                for (var b = 0; b < arguments.length; b++) {
                    if (arguments[b] !== undefined) {
                        return arguments[b]
                    }
                }
                return undefined
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || undefined, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(b, d) {
                var c = this.defaultMessage(b, d.method),
                    e = /\$?\{(\d+)\}/g;
                if (typeof c === "function") {
                    c = c.call(this, d.parameters, b)
                } else {
                    if (e.test(c)) {
                        c = a.validator.format(c.replace(e, "{$1}"), d.parameters)
                    }
                }
                this.errorList.push({
                    message: c,
                    element: b
                });
                this.errorMap[b.name] = c;
                this.submitted[b.name] = c
            },
            addWrapper: function(b) {
                if (this.settings.wrapper) {
                    b = b.add(b.parent(this.settings.wrapper))
                }
                return b
            },
            defaultShowErrors: function() {
                var d, b;
                for (d = 0; this.errorList[d]; d++) {
                    var c = this.errorList[d];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass)
                    }
                    this.showLabel(c.element, c.message)
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers)
                }
                if (this.settings.success) {
                    for (d = 0; this.successList[d]; d++) {
                        this.showLabel(this.successList[d])
                    }
                }
                if (this.settings.unhighlight) {
                    for (d = 0, b = this.validElements(); b[d]; d++) {
                        this.settings.unhighlight.call(this, b[d], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, d) {
                var c = this.errorsFor(b);
                if (c.length) {
                    c.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    c.html(d)
                } else {
                    c = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(d || "");
                    if (this.settings.wrapper) {
                        c = c.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                    }
                    if (!this.labelContainer.append(c).length) {
                        if (this.settings.errorPlacement) {
                            this.settings.errorPlacement(c, a(b))
                        } else {
                            c.insertAfter(b)
                        }
                    }
                }
                if (!d && this.settings.success) {
                    c.text("");
                    if (typeof this.settings.success === "string") {
                        c.addClass(this.settings.success)
                    } else {
                        this.settings.success(c, b)
                    }
                }
                this.toShow = this.toShow.add(c)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b);
                return this.errors().filter(function() {
                    return a(this).attr("for") === c
                })
            },
            idOrName: function(b) {
                return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
            },
            validationTargetFor: function(b) {
                if (this.checkable(b)) {
                    b = this.findByName(b.name).not(this.settings.ignore)[0]
                }
                return b
            },
            checkable: function(b) {
                return (/radio|checkbox/i).test(b.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function(c, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", b).length;
                    case "input":
                        if (this.checkable(b)) {
                            return this.findByName(b.name).filter(":checked").length
                        }
                }
                return c.length
            },
            depend: function(c, b) {
                return this.dependTypes[typeof c] ? this.dependTypes[typeof c](c, b) : true
            },
            dependTypes: {
                "boolean": function(c, b) {
                    return c
                },
                string: function(c, b) {
                    return !!a(c, b.form).length
                },
                "function": function(c, b) {
                    return c(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                if (!this.pending[b.name]) {
                    this.pendingRequest++;
                    this.pending[b.name] = true
                }
            },
            stopRequest: function(b, c) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0
                }
                delete this.pending[b.name];
                if (c && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    a(this.currentForm).submit();
                    this.formSubmitted = false
                } else {
                    if (!c && this.pendingRequest === 0 && this.formSubmitted) {
                        a(this.currentForm).triggerHandler("invalid-form", [this]);
                        this.formSubmitted = false
                    }
                }
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(b, c) {
            if (b.constructor === String) {
                this.classRuleSettings[b] = c
            } else {
                a.extend(this.classRuleSettings, b)
            }
        },
        classRules: function(c) {
            var d = {};
            var b = a(c).attr("class");
            if (b) {
                a.each(b.split(" "), function() {
                    if (this in a.validator.classRuleSettings) {
                        a.extend(d, a.validator.classRuleSettings[this])
                    }
                })
            }
            return d
        },
        attributeRules: function(c) {
            var e = {};
            var b = a(c);
            var f = b[0].getAttribute("type");
            for (var d in a.validator.methods) {
                var g;
                if (d === "required") {
                    g = b.get(0).getAttribute(d);
                    if (g === "") {
                        g = true
                    }
                    g = !!g
                } else {
                    g = b.attr(d)
                }
                if (/min|max/.test(d) && (f === null || /number|range|text/.test(f))) {
                    g = Number(g)
                }
                if (g) {
                    e[d] = g
                } else {
                    if (f === d && f !== "range") {
                        e[d] = true
                    }
                }
            }
            if (e.maxlength && /-1|2147483647|524288/.test(e.maxlength)) {
                delete e.maxlength
            }
            return e
        },
        dataRules: function(c) {
            var d, f, e = {},
                b = a(c);
            for (d in a.validator.methods) {
                f = b.data("rule-" + d.toLowerCase());
                if (f !== undefined) {
                    e[d] = f
                }
            }
            return e
        },
        staticRules: function(b) {
            var c = {};
            var d = a.data(b.form, "validator");
            if (d.settings.rules) {
                c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}
            }
            return c
        },
        normalizeRules: function(c, b) {
            a.each(c, function(e, f) {
                if (f === false) {
                    delete c[e];
                    return
                }
                if (f.param || f.depends) {
                    var d = true;
                    switch (typeof f.depends) {
                        case "string":
                            d = !!a(f.depends, b.form).length;
                            break;
                        case "function":
                            d = f.depends.call(b, b);
                            break
                    }
                    if (d) {
                        c[e] = f.param !== undefined ? f.param : true
                    } else {
                        delete c[e]
                    }
                }
            });
            a.each(c, function(e, d) {
                c[e] = a.isFunction(d) ? d(b) : d
            });
            a.each(["minlength", "maxlength"], function() {
                if (c[this]) {
                    c[this] = Number(c[this])
                }
            });
            a.each(["rangelength", "range"], function() {
                var d;
                if (c[this]) {
                    if (a.isArray(c[this])) {
                        c[this] = [Number(c[this][0]), Number(c[this][1])]
                    } else {
                        if (typeof c[this] === "string") {
                            d = c[this].split(/[\s,]+/);
                            c[this] = [Number(d[0]), Number(d[1])]
                        }
                    }
                }
            });
            if (a.validator.autoCreateRanges) {
                if (c.min && c.max) {
                    c.range = [c.min, c.max];
                    delete c.min;
                    delete c.max
                }
                if (c.minlength && c.maxlength) {
                    c.rangelength = [c.minlength, c.maxlength];
                    delete c.minlength;
                    delete c.maxlength
                }
            }
            return c
        },
        normalizeRule: function(b) {
            if (typeof b === "string") {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = true
                });
                b = c
            }
            return b
        },
        addMethod: function(d, c, b) {
            a.validator.methods[d] = c;
            a.validator.messages[d] = b !== undefined ? b : a.validator.messages[d];
            if (c.length < 3) {
                a.validator.addClassRules(d, a.validator.normalizeRule(d))
            }
        },
        methods: {
            required: function(e, b, c) {
                if (!this.depend(c, b)) {
                    return "dependency-mismatch"
                }
                if (b.nodeName.toLowerCase() === "select") {
                    var d = a(b).val();
                    return d && d.length > 0
                }
                if (this.checkable(b)) {
                    return this.getLength(e, b) > 0
                }
                return a.trim(e).length > 0
            },
            email: function(c, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)
            },
            url: function(c, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
            },
            date: function(c, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(c).toString())
            },
            dateISO: function(c, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)
            },
            number: function(c, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)
            },
            digits: function(c, b) {
                return this.optional(b) || /^\d+$/.test(c)
            },
            creditcard: function(h, d) {
                if (this.optional(d)) {
                    return "dependency-mismatch"
                }
                if (/[^0-9 \-]+/.test(h)) {
                    return false
                }
                var f = 0,
                    g = 0,
                    b = false;
                h = h.replace(/\D/g, "");
                for (var e = h.length - 1; e >= 0; e--) {
                    var c = h.charAt(e);
                    g = parseInt(c, 10);
                    if (b) {
                        if ((g *= 2) > 9) {
                            g -= 9
                        }
                    }
                    f += g;
                    b = !b
                }
                return (f % 10) === 0
            },
            minlength: function(e, b, d) {
                var c = a.isArray(e) ? e.length : this.getLength(a.trim(e), b);
                return this.optional(b) || c >= d
            },
            maxlength: function(e, b, d) {
                var c = a.isArray(e) ? e.length : this.getLength(a.trim(e), b);
                return this.optional(b) || c <= d
            },
            rangelength: function(e, b, d) {
                var c = a.isArray(e) ? e.length : this.getLength(a.trim(e), b);
                return this.optional(b) || (c >= d[0] && c <= d[1])
            },
            min: function(d, b, c) {
                return this.optional(b) || d >= c
            },
            max: function(d, b, c) {
                return this.optional(b) || d <= c
            },
            range: function(d, b, c) {
                return this.optional(b) || (d >= c[0] && d <= c[1])
            },
            equalTo: function(e, b, c) {
                var d = a(c);
                if (this.settings.onfocusout) {
                    d.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        a(b).valid()
                    })
                }
                return e === d.val()
            },
            remote: function(g, c, d) {
                if (this.optional(c)) {
                    return "dependency-mismatch"
                }
                var e = this.previousValue(c);
                if (!this.settings.messages[c.name]) {
                    this.settings.messages[c.name] = {}
                }
                e.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = e.message;
                d = typeof d === "string" && {
                    url: d
                } || d;
                if (e.old === g) {
                    return e.valid
                }
                e.old = g;
                var f = this;
                this.startRequest(c);
                var b = {};
                b[c.name] = g;
                a.ajax(a.extend(true, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: b,
                    success: function(j) {
                        f.settings.messages[c.name].remote = e.originalMessage;
                        var l = j === true || j === "true";
                        if (l) {
                            var k = f.formSubmitted;
                            f.prepareElement(c);
                            f.formSubmitted = k;
                            f.successList.push(c);
                            delete f.invalid[c.name];
                            f.showErrors()
                        } else {
                            var h = {};
                            var i = j || f.defaultMessage(c, "remote");
                            h[c.name] = e.message = a.isFunction(i) ? i(g) : i;
                            f.invalid[c.name] = true;
                            f.showErrors(h)
                        }
                        e.valid = l;
                        f.stopRequest(c, l)
                    }
                }, d));
                return "pending"
            }
        }
    });
    a.format = a.validator.format
}(jQuery));
(function(a) {
    var c = {};
    if (a.ajaxPrefilter) {
        a.ajaxPrefilter(function(f, d, g) {
            var e = f.port;
            if (f.mode === "abort") {
                if (c[e]) {
                    c[e].abort()
                }
                c[e] = g
            }
        })
    } else {
        var b = a.ajax;
        a.ajax = function(f) {
            var d = ("mode" in f ? f : a.ajaxSettings).mode,
                e = ("port" in f ? f : a.ajaxSettings).port;
            if (d === "abort") {
                if (c[e]) {
                    c[e].abort()
                }
                c[e] = b.apply(this, arguments);
                return c[e]
            }
            return b.apply(this, arguments)
        }
    }
}(jQuery));
(function(a) {
    a.extend(a.fn, {
        validateDelegate: function(b, d, c) {
            return this.bind(d, function(e) {
                var f = a(e.target);
                if (f.is(b)) {
                    return c.apply(f, arguments)
                }
            })
        }
    })
}(jQuery));
/*
 ** Unobtrusive validation support library for jQuery and jQuery Validate
 ** Copyright (C) Microsoft Corporation. All rights reserved.
 */
(function(a) {
    var b = a.validator,
        c, e = "unobtrusiveValidation";

    function l(o, p, q) {
        o.rules[p] = q;
        if (o.message) {
            o.messages[p] = o.message
        }
    }

    function m(o) {
        return o.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }

    function f(o) {
        return o.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }

    function g(o) {
        return o.substr(0, o.lastIndexOf(".") + 1)
    }

    function d(p, o) {
        if (p.indexOf("*.") === 0) {
            p = p.replace("*.", o)
        }
        return p
    }

    function h(p, q) {
        var o = a(this).find("[data-valmsg-for='" + f(q[0].name) + "']"),
            s = o.attr("data-valmsg-replace"),
            r = s ? a.parseJSON(s) !== false : null;
        o.removeClass("field-validation-valid").addClass("field-validation-error");
        p.data("unobtrusiveContainer", o);
        if (r) {
            o.empty();
            p.removeClass("input-validation-error").appendTo(o)
        } else {
            p.hide()
        }
    }

    function i(p, r) {
        var o = a(this).find("[data-valmsg-summary=true]"),
            q = o.find("ul");
        if (q && q.length && r.errorList.length) {
            q.empty();
            o.addClass("validation-summary-errors").removeClass("validation-summary-valid");
            a.each(r.errorList, function() {
                a("<li />").html(this.message).appendTo(q)
            })
        }
    }

    function k(p) {
        var o = p.data("unobtrusiveContainer"),
            r = o.attr("data-valmsg-replace"),
            q = r ? a.parseJSON(r) : null;
        if (o) {
            o.addClass("field-validation-valid").removeClass("field-validation-error");
            p.removeData("unobtrusiveContainer");
            if (q) {
                o.empty()
            }
        }
    }

    function j(p) {
        var o = a(this);
        o.data("validator").resetForm();
        o.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        o.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
    }

    function n(p) {
        var o = a(p),
            r = o.data(e),
            q = a.proxy(j, p);
        if (!r) {
            r = {
                options: {
                    errorClass: "input-validation-error",
                    errorElement: "span",
                    errorPlacement: a.proxy(h, p),
                    invalidHandler: a.proxy(i, p),
                    messages: {},
                    rules: {},
                    success: a.proxy(k, p)
                },
                attachValidation: function() {
                    o.unbind("reset." + e, q).bind("reset." + e, q).validate(this.options)
                },
                validate: function() {
                    o.validate();
                    return o.valid()
                }
            };
            o.data(e, r)
        }
        return r
    }
    b.unobtrusive = {
        adapters: [],
        parseElement: function(p, t) {
            var o = a(p),
                q = o.parents("form")[0],
                u, s, r;
            if (!q) {
                return
            }
            u = n(q);
            u.options.rules[p.name] = s = {};
            u.options.messages[p.name] = r = {};
            a.each(this.adapters, function() {
                var x = "data-val-" + this.name,
                    v = o.attr(x),
                    w = {};
                if (v !== undefined) {
                    x += "-";
                    a.each(this.params, function() {
                        w[this] = o.attr(x + this)
                    });
                    this.adapt({
                        element: p,
                        form: q,
                        message: v,
                        params: w,
                        rules: s,
                        messages: r
                    })
                }
            });
            a.extend(s, {
                __dummy__: true
            });
            if (!t) {
                u.attachValidation()
            }
        },
        parse: function(p) {
            var o = a(p).parents("form").andSelf().add(a(p).find("form")).filter("form");
            a(p).find(":input").filter("[data-val=true]").each(function() {
                b.unobtrusive.parseElement(this, true)
            });
            o.each(function() {
                var q = n(this);
                if (q) {
                    q.attachValidation()
                }
            })
        }
    };
    c = b.unobtrusive.adapters;
    c.add = function(o, q, p) {
        if (!p) {
            p = q;
            q = []
        }
        this.push({
            name: o,
            params: q,
            adapt: p
        });
        return this
    };
    c.addBool = function(o, p) {
        return this.add(o, function(q) {
            l(q, p || o, true)
        })
    };
    c.addMinMax = function(o, t, q, s, r, p) {
        return this.add(o, [r || "min", p || "max"], function(w) {
            var v = w.params.min,
                u = w.params.max;
            if (v && u) {
                l(w, s, [v, u])
            } else {
                if (v) {
                    l(w, t, v)
                } else {
                    if (u) {
                        l(w, q, u)
                    }
                }
            }
        })
    };
    c.addSingleVal = function(o, p, q) {
        return this.add(o, [p || "val"], function(r) {
            l(r, q || o, r.params[p])
        })
    };
    b.addMethod("__dummy__", function(q, o, p) {
        return true
    });
    b.addMethod("regex", function(r, o, q) {
        var p;
        if (this.optional(o)) {
            return true
        }
        p = new RegExp(q).exec(r);
        return (p && (p.index === 0) && (p[0].length === r.length))
    });
    b.addMethod("nonalphamin", function(r, o, q) {
        var p;
        if (q) {
            p = r.match(/\W/g);
            p = p && p.length >= q
        }
        return p
    });
    if (b.methods.extension) {
        c.addSingleVal("accept", "mimtype");
        c.addSingleVal("extension", "extension")
    } else {
        c.addSingleVal("extension", "extension", "accept")
    }
    c.addSingleVal("regex", "pattern");
    c.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    c.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    c.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    c.add("equalto", ["other"], function(q) {
        var s = g(q.element.name),
            r = q.params.other,
            p = d(r, s),
            o = a(q.form).find(":input").filter("[name='" + f(p) + "']")[0];
        l(q, "equalTo", o)
    });
    c.add("required", function(o) {
        if (o.element.tagName.toUpperCase() !== "INPUT" || o.element.type.toUpperCase() !== "CHECKBOX") {
            l(o, "required", true)
        }
    });
    c.add("remote", ["url", "type", "additionalfields"], function(o) {
        var q = {
                url: o.params.url,
                type: o.params.type || "GET",
                data: {}
            },
            p = g(o.element.name);
        a.each(m(o.params.additionalfields || o.element.name), function(s, r) {
            var t = d(r, p);
            q.data[t] = function() {
                return a(o.form).find(":input").filter("[name='" + f(t) + "']").val()
            }
        });
        l(o, "remote", q)
    });
    c.add("password", ["min", "nonalphamin", "regex"], function(o) {
        if (o.params.min) {
            l(o, "minlength", o.params.min)
        }
        if (o.params.nonalphamin) {
            l(o, "nonalphamin", o.params.nonalphamin)
        }
        if (o.params.regex) {
            l(o, "regex", o.params.regex)
        }
    });
    a(function() {
        b.unobtrusive.parse(document)
    })
}(jQuery));
/*
 ** Unobtrusive Ajax support library for jQuery
 ** Copyright (C) Microsoft Corporation. All rights reserved.
 */
(function(a) {
    var e = "unobtrusiveAjaxClick",
        f = "unobtrusiveAjaxClickTarget",
        g = "unobtrusiveValidation";

    function h(l, k) {
        var m = window,
            n = (l || "").split(".");
        while (m && n.length) {
            m = m[n.shift()]
        }
        if (typeof(m) === "function") {
            return m
        }
        k.push(l);
        return Function.constructor.apply(null, k)
    }

    function i(k) {
        return k === "GET" || k === "POST"
    }

    function b(l, k) {
        if (!i(k)) {
            l.setRequestHeader("X-HTTP-Method-Override", k)
        }
    }

    function c(m, l, k) {
        var n;
        if (k.indexOf("application/x-javascript") !== -1) {
            return
        }
        n = (m.getAttribute("data-ajax-mode") || "").toUpperCase();
        a(m.getAttribute("data-ajax-update")).each(function(o, q) {
            var p;
            switch (n) {
                case "BEFORE":
                    p = q.firstChild;
                    a("<div />").html(l).contents().each(function() {
                        q.insertBefore(this, p)
                    });
                    break;
                case "AFTER":
                    a("<div />").html(l).contents().each(function() {
                        q.appendChild(this)
                    });
                    break;
                case "REPLACE-WITH":
                    a(q).replaceWith(l);
                    break;
                default:
                    a(q).html(l);
                    break
            }
        })
    }

    function d(m, p) {
        var k, n, o, l;
        k = m.getAttribute("data-ajax-confirm");
        if (k && !window.confirm(k)) {
            return
        }
        n = a(m.getAttribute("data-ajax-loading"));
        l = parseInt(m.getAttribute("data-ajax-loading-duration"), 10) || 0;
        a.extend(p, {
            type: m.getAttribute("data-ajax-method") || undefined,
            url: m.getAttribute("data-ajax-url") || undefined,
            cache: !!m.getAttribute("data-ajax-cache"),
            beforeSend: function(r) {
                var q;
                b(r, o);
                q = h(m.getAttribute("data-ajax-begin"), ["xhr"]).apply(m, arguments);
                if (q !== false) {
                    n.show(l)
                }
                return q
            },
            complete: function() {
                n.hide(l);
                h(m.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(m, arguments)
            },
            success: function(q, r, s) {
                c(m, q, s.getResponseHeader("Content-Type") || "text/html");
                h(m.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(m, arguments)
            },
            error: function() {
                h(m.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(m, arguments)
            }
        });
        p.data.push({
            name: "X-Requested-With",
            value: "XMLHttpRequest"
        });
        o = p.type.toUpperCase();
        if (!i(o)) {
            p.type = "POST";
            p.data.push({
                name: "X-HTTP-Method-Override",
                value: o
            })
        }
        a.ajax(p)
    }

    function j(k) {
        var l = a(k).data(g);
        return !l || !l.validate || l.validate()
    }
    a(document).on("click", "a[data-ajax=true]", function(k) {
        k.preventDefault();
        d(this, {
            url: this.href,
            type: "GET",
            data: []
        })
    });
    a(document).on("click", "form[data-ajax=true] input[type=image]", function(k) {
        var m = k.target.name,
            o = a(k.target),
            l = a(o.parents("form")[0]),
            n = o.offset();
        l.data(e, [{
            name: m + ".x",
            value: Math.round(k.pageX - n.left)
        }, {
            name: m + ".y",
            value: Math.round(k.pageY - n.top)
        }]);
        setTimeout(function() {
            l.removeData(e)
        }, 0)
    });
    a(document).on("click", "form[data-ajax=true] :submit", function(k) {
        var m = k.currentTarget.name,
            n = a(k.target),
            l = a(n.parents("form")[0]);
        l.data(e, m ? [{
            name: m,
            value: k.currentTarget.value
        }] : []);
        l.data(f, n);
        setTimeout(function() {
            l.removeData(e);
            l.removeData(f)
        }, 0)
    });
    a(document).on("submit", "form[data-ajax=true]", function(m) {
        var k = a(this).data(e) || [],
            l = a(this).data(f),
            n = l && l.hasClass("cancel");
        m.preventDefault();
        if (!n && !j(this)) {
            return
        }
        d(this, {
            url: this.action,
            type: this.method || "GET",
            data: k.concat(a(this).serializeArray())
        })
    })
}(jQuery));
(function(a, d) {
    var b = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    a.fn.imagesLoaded = function(n) {
        function u() {
            var f = a(r),
                e = a(q);
            c && (q.length ? c.reject(l, f, e) : c.resolve(l));
            a.isFunction(n) && n.call(p, l, f, e)
        }

        function s(f, e) {
            f.src === b || -1 !== a.inArray(f, t) || (t.push(f), e ? q.push(f) : r.push(f), a.data(f, "imagesLoaded", {
                isBroken: e,
                src: f.src
            }), v && c.notifyWith(a(f), [e, l, a(r), a(q)]), l.length === t.length && (setTimeout(u), l.unbind(".imagesLoaded")))
        }
        var p = this,
            c = a.isFunction(a.Deferred) ? a.Deferred() : 0,
            v = a.isFunction(c.notify),
            l = p.find("img").add(p.filter("img")),
            t = [],
            r = [],
            q = [];
        a.isPlainObject(n) && a.each(n, function(f, e) {
            if ("callback" === f) {
                n = e
            } else {
                if (c) {
                    c[f](e)
                }
            }
        });
        l.length ? l.bind("load.imagesLoaded error.imagesLoaded", function(e) {
            s(e.target, "error" === e.type)
        }).each(function(g, f) {
            var h = f.src,
                i = a.data(f, "imagesLoaded");
            if (i && i.src === h) {
                s(f, i.isBroken)
            } else {
                if (f.complete && f.naturalWidth !== d) {
                    s(f, 0 === f.naturalWidth || 0 === f.naturalHeight)
                } else {
                    if (f.readyState || f.complete) {
                        f.src = b, f.src = h
                    }
                }
            }
        }) : u();
        return c ? c.promise(p) : p
    }
})(jQuery);
(function(a) {
    a.fn.imagefill = function(k) {
        var b = this,
            c = b.find("img").addClass("loading").css({
                position: "absolute"
            }),
            j = 1 / 1,
            f = 0,
            g = 0,
            h = {
                runOnce: false,
                throttle: 200
            },
            l = a.extend({}, h, k);
        var e = b.css("position");
        b.css({
            overflow: "hidden",
            position: (e === "static") ? "relative" : e
        });
        b.each(function() {
            f += a(this).outerHeight();
            g += a(this).outerWidth()
        });
        b.imagesLoaded().done(function(m) {
            j = c.width() / c.height();
            c.removeClass("loading");
            i();
            if (!l.runOnce) {
                d()
            }
        });

        function i() {
            f = 0;
            g = 0;
            b.each(function() {
                j = a(this).find("img").width() / a(this).find("img").height();
                var o = a(this).outerWidth(),
                    n = a(this).outerHeight();
                f += a(this).outerHeight();
                g += a(this).outerWidth();
                var m = o / n;
                if (m < j) {
                    a(this).find("img").css({
                        width: "auto",
                        height: n,
                        top: 0,
                        left: -(n * j - o) / 2
                    })
                } else {
                    a(this).find("img").css({
                        width: o,
                        height: "auto",
                        top: -(o / j - n) / 2,
                        left: 0
                    })
                }
            })
        }

        function d() {
            var n = 0,
                m = 0;
            b.each(function() {
                m += a(this).outerHeight();
                n += a(this).outerWidth()
            });
            if (f !== m || g !== n) {
                i()
            }
            setTimeout(d, l.throttle)
        }
        return this
    }
}(jQuery));
window.Modernizr = function(I, K, M) {
        function J(b) {
            Z.cssText = b
        }

        function L(c, d) {
            return J(ac.join(c + ";") + (d || ""))
        }

        function N(c, d) {
            return typeof c === d
        }

        function P(c, d) {
            return !!~("" + c).indexOf(d)
        }

        function R(c, f) {
            for (var g in c) {
                var h = c[g];
                if (!P(h, "-") && Z[h] !== M) {
                    return f == "pfx" ? h : !0
                }
            }
            return !1
        }

        function T(c, g, h) {
            for (var i in c) {
                var j = g[c[i]];
                if (j !== M) {
                    return h === !1 ? c[i] : N(j, "function") ? j.bind(h || g) : j
                }
            }
            return !1
        }

        function V(f, g, h) {
            var i = f.charAt(0).toUpperCase() + f.slice(1),
                j = (f + " " + ae.join(i + " ") + i).split(" ");
            return N(g, "string") || N(g, "undefined") ? R(j, g) : (j = (f + " " + af.join(i + " ") + i).split(" "), T(j, g, h))
        }
        var O = "2.8.3",
            Q = {},
            S = !0,
            U = K.documentElement,
            W = "modernizr",
            Y = K.createElement(W),
            Z = Y.style,
            aa, ab = {}.toString,
            ac = " -webkit- -moz- -o- -ms- ".split(" "),
            ad = "Webkit Moz O ms",
            ae = ad.split(" "),
            af = ad.toLowerCase().split(" "),
            ag = {
                svg: "http://www.w3.org/2000/svg"
            },
            ah = {},
            ai = {},
            aj = {},
            ak = [],
            al = ak.slice,
            am, an = function(b, g, h, o) {
                var p, q, r, s, t = K.createElement("div"),
                    u = K.body,
                    v = u || K.createElement("body");
                if (parseInt(h, 10)) {
                    while (h--) {
                        r = K.createElement("div"), r.id = o ? o[h] : W + (h + 1), t.appendChild(r)
                    }
                }
                return p = ["&#173;", '<style id="s', W, '">', b, "</style>"].join(""), t.id = W, (u ? t : v).innerHTML += p, v.appendChild(t), u || (v.style.background = "", v.style.overflow = "hidden", s = U.style.overflow, U.style.overflow = "hidden", U.appendChild(v)), q = g(t, b), u ? t.parentNode.removeChild(t) : (v.parentNode.removeChild(v), U.style.overflow = s), !!q
            },
            ao = {}.hasOwnProperty,
            ap;
        !N(ao, "undefined") && !N(ao.call, "undefined") ? ap = function(c, d) {
            return ao.call(c, d)
        } : ap = function(c, d) {
            return d in c && N(c.constructor.prototype[d], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var f = this;
            if (typeof f != "function") {
                throw new TypeError
            }
            var g = al.call(arguments, 1),
                h = function() {
                    if (this instanceof h) {
                        var b = function() {};
                        b.prototype = f.prototype;
                        var c = new b,
                            d = f.apply(c, g.concat(al.call(arguments)));
                        return Object(d) === d ? d : c
                    }
                    return f.apply(a, g.concat(al.call(arguments)))
                };
            return h
        }), ah.touch = function() {
            var a;
            return "ontouchstart" in I || I.DocumentTouch && K instanceof DocumentTouch ? a = !0 : an(["@media (", ac.join("touch-enabled),("), W, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
                a = b.offsetTop === 9
            }), a
        }, ah.csstransforms = function() {
            return !!V("transform")
        }, ah.csstransforms3d = function() {
            var b = !!V("perspective");
            return b && "webkitPerspective" in U.style && an("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(a, d) {
                b = a.offsetLeft === 9 && a.offsetHeight === 3
            }), b
        }, ah.csstransitions = function() {
            return V("transition")
        }, ah.svg = function() {
            return !!K.createElementNS && !!K.createElementNS(ag.svg, "svg").createSVGRect
        };
        for (var X in ah) {
            ap(ah, X) && (am = X.toLowerCase(), Q[am] = ah[X](), ak.push((Q[am] ? "" : "no-") + am))
        }
        return Q.addTest = function(c, e) {
                if (typeof c == "object") {
                    for (var f in c) {
                        ap(c, f) && Q.addTest(f, c[f])
                    }
                } else {
                    c = c.toLowerCase();
                    if (Q[c] !== M) {
                        return Q
                    }
                    e = typeof e == "function" ? e() : e, typeof S != "undefined" && S && (U.className += " " + (e ? "" : "no-") + c), Q[c] = e
                }
                return Q
            }, J(""), Y = aa = null,
            function(t, u) {
                function E(e, f) {
                    var g = e.createElement("p"),
                        h = e.getElementsByTagName("head")[0] || e.documentElement;
                    return g.innerHTML = "x<style>" + f + "</style>", h.insertBefore(g.lastChild, h.firstChild)
                }

                function F() {
                    var b = au.elements;
                    return typeof b == "string" ? b.split(" ") : b
                }

                function G(c) {
                    var d = C[c[A]];
                    return d || (d = {}, B++, c[A] = B, C[B] = d), d
                }

                function H(b, e, f) {
                    e || (e = u);
                    if (D) {
                        return e.createElement(b)
                    }
                    f || (f = G(e));
                    var h;
                    return f.cache[b] ? h = f.cache[b].cloneNode() : y.test(b) ? h = (f.cache[b] = f.createElem(b)).cloneNode() : h = f.createElem(b), h.canHaveChildren && !x.test(b) && !h.tagUrn ? f.frag.appendChild(h) : h
                }

                function aq(b, h) {
                    b || (b = u);
                    if (D) {
                        return b.createDocumentFragment()
                    }
                    h = h || G(b);
                    var i = h.frag.cloneNode(),
                        j = 0,
                        k = F(),
                        l = k.length;
                    for (; j < l; j++) {
                        i.createElement(k[j])
                    }
                    return i
                }

                function ar(c, d) {
                    d.cache || (d.cache = {}, d.createElem = c.createElement, d.createFrag = c.createDocumentFragment, d.frag = d.createFrag()), c.createElement = function(a) {
                        return au.shivMethods ? H(a, c, d) : d.createElem(a)
                    }, c.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + F().join().replace(/[\w\-]+/g, function(b) {
                        return d.createElem(b), d.frag.createElement(b), 'c("' + b + '")'
                    }) + ");return n}")(au, d.frag)
                }

                function at(b) {
                    b || (b = u);
                    var d = G(b);
                    return au.shivCSS && !z && !d.hasCSS && (d.hasCSS = !!E(b, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), D || ar(b, d), b
                }
                var v = "3.7.0",
                    w = t.html5 || {},
                    x = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    z, A = "_html5shiv",
                    B = 0,
                    C = {},
                    D;
                (function() {
                    try {
                        var b = u.createElement("a");
                        b.innerHTML = "<xyz></xyz>", z = "hidden" in b, D = b.childNodes.length == 1 || function() {
                            u.createElement("a");
                            var c = u.createDocumentFragment();
                            return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                        }()
                    } catch (d) {
                        z = !0, D = !0
                    }
                })();
                var au = {
                    elements: w.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: v,
                    shivCSS: w.shivCSS !== !1,
                    supportsUnknownElements: D,
                    shivMethods: w.shivMethods !== !1,
                    type: "default",
                    shivDocument: at,
                    createElement: H,
                    createDocumentFragment: aq
                };
                t.html5 = au, at(u)
            }(this, K), Q._version = O, Q._prefixes = ac, Q._domPrefixes = af, Q._cssomPrefixes = ae, Q.testProp = function(b) {
                return R([b])
            }, Q.testAllProps = V, Q.testStyles = an, Q.prefixed = function(d, e, f) {
                return e ? V(d, e, f) : V(d, "pfx")
            }, U.className = U.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (S ? " js " + ak.join(" ") : ""), Q
    }(this, this.document),
    function(C, E, G) {
        function H(b) {
            return "[object Function]" == S.call(b)
        }

        function I(b) {
            return "string" == typeof b
        }

        function J() {}

        function K(b) {
            return !b || "loaded" == b || "complete" == b || "uninitialized" == b
        }

        function L() {
            var b = T.shift();
            U = 1, b ? b.t ? Q(function() {
                ("c" == b.t ? F.injectCss : F.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
            }, 0) : (b(), L()) : U = 0
        }

        function M(b, g, h, m, n, p, q) {
            function s(a) {
                if (!v && K(t.readyState) && (x.r = v = 1, !U && L(), t.onload = t.onreadystatechange = null, a)) {
                    "img" != b && Q(function() {
                        X.removeChild(t)
                    }, 50);
                    for (var c in ac[g]) {
                        ac[g].hasOwnProperty(c) && ac[g][c].onload()
                    }
                }
            }
            var q = q || F.errorTimeout,
                t = E.createElement(b),
                v = 0,
                w = 0,
                x = {
                    t: h,
                    s: g,
                    e: n,
                    a: p,
                    x: q
                };
            1 === ac[g] && (w = 1, ac[g] = []), "object" == b ? t.data = g : (t.src = g, t.type = b), t.width = t.height = "0", t.onerror = t.onload = t.onreadystatechange = function() {
                s.call(this, w)
            }, T.splice(m, 0, x), "img" != b && (w || 2 === ac[g] ? (X.insertBefore(t, W ? null : R), Q(s, q)) : ac[g].push(t))
        }

        function N(e, g, h, i, j) {
            return U = 0, g = g || "j", I(e) ? M("c" == g ? Z : Y, e, g, this.i++, h, i, j) : (T.splice(this.i++, 0, e), 1 == T.length && L()), this
        }

        function O() {
            var b = F;
            return b.loader = {
                load: N,
                i: 0
            }, b
        }
        var P = E.documentElement,
            Q = C.setTimeout,
            R = E.getElementsByTagName("script")[0],
            S = {}.toString,
            T = [],
            U = 0,
            V = "MozAppearance" in P.style,
            W = V && !!E.createRange().compareNode,
            X = W ? P : R.parentNode,
            P = C.opera && "[object Opera]" == S.call(C.opera),
            P = !!E.attachEvent && !P,
            Y = V ? "object" : P ? "script" : "img",
            Z = P ? "script" : Y,
            aa = Array.isArray || function(b) {
                return "[object Array]" == S.call(b)
            },
            ab = [],
            ac = {},
            ad = {
                timeout: function(c, d) {
                    return d.length && (c.timeout = d[0]), c
                }
            },
            D, F;
        F = function(c) {
            function d(h) {
                var h = h.split("!"),
                    i = ab.length,
                    j = h.pop(),
                    l = h.length,
                    j = {
                        url: j,
                        origUrl: j,
                        prefixes: h
                    },
                    o, p, q;
                for (p = 0; p < l; p++) {
                    q = h[p].split("="), (o = ad[q.shift()]) && (j = o(j, q))
                }
                for (p = 0; p < i; p++) {
                    j = ab[p](j)
                }
                return j
            }

            function e(b, l, o, p, q) {
                var r = d(b),
                    s = r.autoCallback;
                r.url.split(".").pop().split("?").shift(), r.bypass || (l && (l = H(l) ? l : l[b] || l[p] || l[b.split("/").pop().split("?")[0]]), r.instead ? r.instead(b, l, o, p, q) : (ac[r.url] ? r.noexec = !0 : ac[r.url] = 1, o.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : G, r.noexec, r.attrs, r.timeout), (H(l) || H(s)) && o.load(function() {
                    O(), l && l(r.origUrl, q, p), s && s(r.origUrl, q, p), ac[r.url] = 2
                })))
            }

            function f(g, o) {
                function p(b, h) {
                    if (b) {
                        if (I(b)) {
                            h || (s = function() {
                                var i = [].slice.call(arguments);
                                t.apply(this, i), u()
                            }), e(b, s, o, 0, q)
                        } else {
                            if (Object(b) === b) {
                                for (w in v = function() {
                                        var a = 0,
                                            i;
                                        for (i in b) {
                                            b.hasOwnProperty(i) && a++
                                        }
                                        return a
                                    }(), b) {
                                    b.hasOwnProperty(w) && (!h && !--v && (H(s) ? s = function() {
                                        var i = [].slice.call(arguments);
                                        t.apply(this, i), u()
                                    } : s[w] = function(i) {
                                        return function() {
                                            var a = [].slice.call(arguments);
                                            i && i.apply(this, a), u()
                                        }
                                    }(t[w])), e(b[w], s, o, w, q))
                                }
                            }
                        }
                    } else {
                        !h && u()
                    }
                }
                var q = !!g.test,
                    r = g.load || g.both,
                    s = g.callback || J,
                    t = s,
                    u = g.complete || J,
                    v, w;
                p(q ? g.yep : g.nope, !!r), r && p(r)
            }
            var k, m, n = this.yepnope.loader;
            if (I(c)) {
                e(c, 0, n, 0)
            } else {
                if (aa(c)) {
                    for (k = 0; k < c.length; k++) {
                        m = c[k], I(m) ? e(m, 0, n, 0) : aa(m) ? F(m) : Object(m) === m && f(m, n)
                    }
                } else {
                    Object(c) === c && f(c, n)
                }
            }
        }, F.addPrefix = function(c, d) {
            ad[c] = d
        }, F.addFilter = function(b) {
            ab.push(b)
        }, F.errorTimeout = 10000, null == E.readyState && E.addEventListener && (E.readyState = "loading", E.addEventListener("DOMContentLoaded", D = function() {
            E.removeEventListener("DOMContentLoaded", D, 0), E.readyState = "complete"
        }, 0)), C.yepnope = O(), C.yepnope.executeStack = L, C.yepnope.injectJs = function(b, f, g, h, m, n) {
            var p = E.createElement("script"),
                q, r, h = h || F.errorTimeout;
            p.src = b;
            for (r in g) {
                p.setAttribute(r, g[r])
            }
            f = n ? L : f || J, p.onreadystatechange = p.onload = function() {
                !q && K(p.readyState) && (q = 1, f(), p.onload = p.onreadystatechange = null)
            }, Q(function() {
                q || (q = 1, f(1))
            }, h), m ? p.onload() : R.parentNode.insertBefore(p, R)
        }, C.yepnope.injectCss = function(b, f, h, k, l, m) {
            var k = E.createElement("link"),
                n, f = m ? L : f || J;
            k.href = b, k.rel = "stylesheet", k.type = "text/css";
            for (n in h) {
                k.setAttribute(n, h[n])
            }
            l || (R.parentNode.insertBefore(k, R), Q(f, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("cssfilters", function() {
        var b = document.createElement("div");
        return b.style.cssText = Modernizr._prefixes.join("filter:blur(2px); "), !!b.style.length && (document.documentMode === undefined || document.documentMode > 9)
    }), Modernizr.addTest("cssvhunit", function() {
        var b;
        return Modernizr.testStyles("#modernizr { height: 50vh; }", function(a, f) {
            var g = parseInt(window.innerHeight / 2, 10),
                h = parseInt((window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).height, 10);
            b = h == g
        }), b
    });

function SetCookie(a, b, d) {
    var e = new Date();
    var c = new Date();
    if (d == null || d == 0) {
        d = 1
    }
    c.setTime(e.getTime() + 3600000 * 24 * d);
    document.cookie = a + "=" + escape(b) + ";expires=" + c.toGMTString() + ";path=/"
}

function GetCookie(a) {
    var d = " " + document.cookie;
    var b = d.indexOf(" " + a + "=");
    if (b == -1) {
        b = d.indexOf(";" + a + "=")
    }
    if (b == -1 || a == "") {
        return ""
    }
    var c = d.indexOf(";", b + 1);
    if (c == -1) {
        c = d.length
    }
    return unescape(d.substring(b + a.length + 2, c))
};
if (typeof Object.create !== "function") {
    Object.create = function(b) {
        function a() {}
        a.prototype = b;
        return new a()
    }
}(function(a, e, b, d) {
    var c = {
        init: function(g, f) {
            var h = this;
            h.elem = f;
            h.$elem = a(f);
            if (typeof g === "string") {
                h.interval = g
            } else {
                h.options = a.extend({}, a.fn.fadeThrough.options, g)
            }
            h.$elem.children(h.options.childIdentifier).css({
                position: "absolute"
            });
            h.$elem.children(h.options.childIdentifier).hide();
            h.currentItem = h.$elem.children().first(h.options.childIdentifier);
            h.currentItem.show();
            if (h.options.animatestartheight) {
                h.$elem.animate({
                    height: h.currentItem.height()
                }, h.options.heightduration)
            } else {
                h.$elem.height(h.currentItem.height())
            }
            h.timer = false;
            if (h.options.autostart) {
                h.start()
            }
        },
        start: function() {
            var f = this;
            if (!f.timer) {
                f.timer = setInterval(function() {
                    f.next()
                }, f.options.interval)
            }
        },
        stop: function() {
            var f = this;
            clearInterval(f.timer);
            f.timer = false
        },
        next: function() {
            var g = this;
            var f = (g.currentItem.next().length > 0 ? g.currentItem.next() : g.$elem.children().first(g.options.childIdentifier));
            if (g.options.autowidth) {
                f.width(g.$elem.width())
            }
            g.$elem.animate({
                height: f.height()
            }, g.options.heightduration);
            g.currentItem.fadeOut();
            f.fadeIn(g.options.fadeduration);
            g.currentItem = f
        }
    };
    a.fn.fadeThrough = function(f) {
        return this.each(function(h, i) {
            if (typeof jQuery.data(i, "fadeThrough") === "undefined") {
                var g = Object.create(c);
                g.init(f, this);
                jQuery.data(i, "fadeThrough", g)
            } else {
                return jQuery.data(i, "fadeThrough")[f]()
            }
        })
    };
    a.fn.fadeThrough.options = {
        interval: 3000,
        fadeduration: 500,
        heightduration: 500,
        animatestartheight: false,
        autostart: true,
        autowidth: false,
        childIdentifier: ".item"
    }
})(jQuery, window, document);
$j.fn.tab = function() {
    var a = $j(this);
    a.each(function() {
        var b, c, f = $j(this),
            d = $j(".tabNav", this).attr({
                role: "tablist"
            }),
            e = $j(".tabPanel", this).attr({
                role: "tabpanel",
                "aria-hidden": "true"
            });
        $j("li > a", d).each(function(g) {
            b = $j(this).attr("href").slice(1);
            c = "tab-" + $j(this).attr("href").slice(1);
            $j(this).attr({
                id: c,
                role: "tab",
                "aria-selected": "false",
                tabindex: "-1"
            }).parent().attr({
                role: "presentation"
            });
            e.eq(g).attr("aria-labelledby", c)
        });
        $j(this).find("li.selected a", d).attr({
            "aria-selected": "true",
            tabindex: "0"
        });
        $j(this).find("div.selected").attr({
            "aria-hidden": "false"
        });
        $j("li > a", d).click(function() {
            var g = $j(this).attr("href");
            $j("li > a[href=" + g + "]", d).parents("ul").children().removeClass("selected").children("a").attr({
                "aria-selected": "false",
                tabindex: "-1"
            });
            $j("li > a[href=" + g + "]", d).parents("li").addClass("selected").children("a").attr({
                "aria-selected": "true",
                tabindex: "0"
            });
            $j(".tabPanel" + g, f).parent().children(".tabPanel").removeClass("selected").attr({
                "aria-hidden": "true"
            });
            $j(".tabPanel" + g, f).addClass("selected").attr({
                "aria-hidden": "false"
            });
            return false
        });
        d.delegate("a", "keydown", function(g) {
            if (g.keyCode == 37) {
                if ($j(this).parent().prev().length != 0) {
                    $j(this).parent().prev().children("a").focus().click()
                } else {
                    d.find("li:last > a").focus().click()
                }
            }
            if (g.keyCode == 39) {
                if ($j(this).parent().next().length != 0) {
                    $j(this).parent().next().children("a").focus().click()
                } else {
                    d.find("li:first > a").focus().click()
                }
            }
        })
    })
};
/*
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */
(function(a) {
    var j = "iCheck",
        k = j + "-helper",
        d = "checkbox",
        o = "radio",
        e = "checked",
        s = "un" + e,
        i = "disabled",
        h = "determinate",
        l = "in" + h,
        t = "update",
        r = "type",
        f = "click",
        q = "touchbegin.i touchend.i",
        b = "addClass",
        p = "removeClass",
        c = "trigger",
        m = "label",
        g = "cursor",
        n = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    a.fn[j] = function(J, D) {
        var F = 'input[type="' + d + '"], input[type="' + o + '"]',
            M = a(),
            N = function(O) {
                O.each(function() {
                    var P = a(this);
                    if (P.is(F)) {
                        M = M.add(P)
                    } else {
                        M = M.add(P.find(F))
                    }
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(J)) {
            J = J.toLowerCase();
            N(this);
            return M.each(function() {
                var O = a(this);
                if (J == "destroy") {
                    A(O, "ifDestroyed")
                } else {
                    y(O, true, J)
                }
                if (a.isFunction(D)) {
                    D()
                }
            })
        } else {
            if (typeof J == "object" || !J) {
                var L = a.extend({
                        checkedClass: e,
                        disabledClass: i,
                        indeterminateClass: l,
                        labelHover: true
                    }, J),
                    K = L.handle,
                    G = L.hoverClass || "hover",
                    E = L.focusClass || "focus",
                    B = L.activeClass || "active",
                    H = !!L.labelHover,
                    I = L.labelHoverClass || "hover",
                    C = ("" + L.increaseArea).replace("%", "") | 0;
                if (K == d || K == o) {
                    F = 'input[type="' + K + '"]'
                }
                if (C < -50) {
                    C = -50
                }
                N(this);
                return M.each(function() {
                    var Z = a(this);
                    A(Z);
                    var W = this,
                        T = W.id,
                        X = -C + "%",
                        aa = 100 + (C * 2) + "%",
                        V = {
                            position: "absolute",
                            top: X,
                            left: X,
                            display: "block",
                            width: aa,
                            height: aa,
                            margin: 0,
                            padding: 0,
                            background: "#fff",
                            border: 0,
                            opacity: 0
                        },
                        S = n ? {
                            position: "absolute",
                            visibility: "hidden"
                        } : C ? V : {
                            position: "absolute",
                            opacity: 0
                        },
                        Q = W[r] == d ? L.checkboxClass || "i" + d : L.radioClass || "i" + o,
                        U = a(m + '[for="' + T + '"]').add(Z.closest(m)),
                        O = !!L.aria,
                        P = j + "-" + Math.random().toString(36).substr(2, 6),
                        Y = '<div class="' + Q + '" ' + (O ? 'role="' + W[r] + '" ' : ""),
                        R;
                    if (O) {
                        U.each(function() {
                            Y += 'aria-labelledby="';
                            if (this.id) {
                                Y += this.id
                            } else {
                                this.id = P;
                                Y += P
                            }
                            Y += '"'
                        })
                    }
                    Y = Z.wrap(Y + "/>")[c]("ifCreated").parent().append(L.insert);
                    R = a('<ins class="' + k + '"/>').css(V).appendTo(Y);
                    Z.data(j, {
                        o: L,
                        s: Z.attr("style")
                    }).css(S);
                    !!L.inheritClass && Y[b](W.className || "");
                    !!L.inheritID && T && Y.attr("id", j + "-" + T);
                    Y.css("position") == "static" && Y.css("position", "relative");
                    y(Z, true, t);
                    if (U.length) {
                        U.on(f + ".i mouseover.i mouseout.i " + q, function(ab) {
                            var ad = ab[r],
                                ac = a(this);
                            if (!W[i]) {
                                if (ad == f) {
                                    if (a(ab.target).is("a")) {
                                        return
                                    }
                                    y(Z, false, true)
                                } else {
                                    if (H) {
                                        if (/ut|nd/.test(ad)) {
                                            Y[p](G);
                                            ac[p](I)
                                        } else {
                                            Y[b](G);
                                            ac[b](I)
                                        }
                                    }
                                }
                                if (n) {
                                    ab.stopPropagation()
                                } else {
                                    return false
                                }
                            }
                        })
                    }
                    Z.on(f + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(ab) {
                        var ad = ab[r],
                            ac = ab.keyCode;
                        if (ad == f) {
                            return false
                        } else {
                            if (ad == "keydown" && ac == 32) {
                                if (!(W[r] == o && W[e])) {
                                    if (W[e]) {
                                        w(Z, e)
                                    } else {
                                        x(Z, e)
                                    }
                                }
                                return false
                            } else {
                                if (ad == "keyup" && W[r] == o) {
                                    !W[e] && x(Z, e)
                                } else {
                                    if (/us|ur/.test(ad)) {
                                        Y[ad == "blur" ? p : b](E)
                                    }
                                }
                            }
                        }
                    });
                    R.on(f + " mousedown mouseup mouseover mouseout " + q, function(ab) {
                        var ad = ab[r],
                            ac = /wn|up/.test(ad) ? B : G;
                        if (!W[i]) {
                            if (ad == f) {
                                y(Z, false, true)
                            } else {
                                if (/wn|er|in/.test(ad)) {
                                    Y[b](ac)
                                } else {
                                    Y[p](ac + " " + B)
                                }
                                if (U.length && H && ac == G) {
                                    U[/ut|nd/.test(ad) ? p : b](I)
                                }
                            }
                            if (n) {
                                ab.stopPropagation()
                            } else {
                                return false
                            }
                        }
                    })
                })
            } else {
                return this
            }
        }
    };

    function y(E, C, F) {
        var G = E[0],
            H = /er/.test(F) ? l : /bl/.test(F) ? i : e,
            B = F == t ? {
                checked: G[e],
                disabled: G[i],
                indeterminate: E.attr(l) == "true" || E.attr(h) == "false"
            } : G[H];
        if (/^(ch|di|in)/.test(F) && !B) {
            x(E, H)
        } else {
            if (/^(un|en|de)/.test(F) && B) {
                w(E, H)
            } else {
                if (F == t) {
                    for (var D in B) {
                        if (B[D]) {
                            x(E, D, true)
                        } else {
                            w(E, D, true)
                        }
                    }
                } else {
                    if (!C || F == "toggle") {
                        if (!C) {
                            E[c]("ifClicked")
                        }
                        if (B) {
                            if (G[r] !== o) {
                                w(E, H)
                            }
                        } else {
                            x(E, H)
                        }
                    }
                }
            }
        }
    }

    function x(G, N, I) {
        var J = G[0],
            K = G.parent(),
            C = N == e,
            F = N == l,
            D = N == i,
            B = F ? h : C ? s : "enabled",
            L = z(G, B + v(J[r])),
            M = z(G, N + v(J[r]));
        if (J[N] !== true) {
            if (!I && N == e && J[r] == o && J.name) {
                var E = G.closest("form"),
                    H = 'input[name="' + J.name + '"]';
                H = E.length ? E.find(H) : a(H);
                H.each(function() {
                    if (this !== J && a(this).data(j)) {
                        w(a(this), N)
                    }
                })
            }
            if (F) {
                J[N] = true;
                if (J[e]) {
                    w(G, e, "force")
                }
            } else {
                if (!I) {
                    J[N] = true
                }
                if (C && J[l]) {
                    w(G, l, false)
                }
            }
            u(G, C, N, I)
        }
        if (J[i] && !!z(G, g, true)) {
            K.find("." + k).css(g, "default")
        }
        K[b](M || z(G, N) || "");
        if (!!K.attr("role") && !F) {
            K.attr("aria-" + (D ? i : e), "true")
        }
        K[p](L || z(G, B) || "")
    }

    function w(F, L, G) {
        var H = F[0],
            I = F.parent(),
            C = L == e,
            E = L == l,
            D = L == i,
            B = E ? h : C ? s : "enabled",
            J = z(F, B + v(H[r])),
            K = z(F, L + v(H[r]));
        if (H[L] !== false) {
            if (E || !G || G == "force") {
                H[L] = false
            }
            u(F, C, B, G)
        }
        if (!H[i] && !!z(F, g, true)) {
            I.find("." + k).css(g, "pointer")
        }
        I[p](K || z(F, L) || "");
        if (!!I.attr("role") && !E) {
            I.attr("aria-" + (D ? i : e), "false")
        }
        I[b](J || z(F, B) || "")
    }

    function A(C, B) {
        if (C.data(j)) {
            C.parent().html(C.attr("style", C.data(j).s || ""));
            if (B) {
                C[c](B)
            }
            C.off(".i").unwrap();
            a(m + '[for="' + C[0].id + '"]').add(C.closest(m)).off(".i")
        }
    }

    function z(B, D, C) {
        if (B.data(j)) {
            return B.data(j).o[D + (C ? "" : "Class")]
        }
    }

    function v(B) {
        return B.charAt(0).toUpperCase() + B.slice(1)
    }

    function u(D, C, B, E) {
        if (!E) {
            if (C) {
                D[c]("ifToggled")
            }
            D[c]("ifChanged")[c]("if" + v(B))
        }
    }
})(window.jQuery || window.Zepto);

function SaveNotificationPreference(c, e, b, d, a) {
    $j.ajax({
        type: "POST",
        url: "/notificationpreferences/savenotificationpreference",
        dataType: "json",
        data: {
            emailType: c,
            value: e,
            emailAddress: b,
            source: d ? (d.length === 10 ? "Listing" : "Project") : null,
            sourceId: d ? d : null,
            buyerType: a ? a : null,
        },
        success: function(f) {},
        error: function(g, h, f) {
            console.log("Error: Ajax logemailenquirystats failed for users stats service, error:" + g.status + " : " + f)
        }
    })
}

function updateQueryStringParameter(d, a, e) {
    var b = new RegExp("([?&])" + a + "=.*?(&|$)", "i");
    var c = d.indexOf("?") !== -1 ? "&" : "?";
    if (d.match(b)) {
        return encodeURIComponent(d.replace(b, "$1" + a + "=" + e + "$2"))
    } else {
        return encodeURIComponent(d + c + a + "=" + e)
    }
}; +
function(a) {
    function b() {
        var c = document.createElement("bootstrap");
        var e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var d in e) {
            if (c.style[d] !== undefined) {
                return {
                    end: e[d]
                }
            }
        }
        return false
    }
    a.fn.emulateTransitionEnd = function(f) {
        var e = false;
        var c = this;
        a(this).one("bsTransitionEnd", function() {
            e = true
        });
        var d = function() {
            if (!e) {
                a(c).trigger(a.support.transition.end)
            }
        };
        setTimeout(d, f);
        return this
    };
    a(function() {
        a.support.transition = b();
        if (!a.support.transition) {
            return
        }
        a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(c) {
                if (a(c.target).is(this)) {
                    return c.handleObj.handler.apply(this, arguments)
                }
            }
        }
    })
}(jQuery); +
function(a) {
    var b = function(e, f) {
        this.$element = a(e);
        this.options = a.extend({}, b.DEFAULTS, f);
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = a(this.options.parent)
        }
        if (this.options.toggle) {
            this.toggle()
        }
    };
    b.VERSION = "3.2.0";
    b.DEFAULTS = {
        toggle: true
    };
    b.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    };
    b.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) {
            return
        }
        var j = a.Event("show.bs.collapse");
        this.$element.trigger(j);
        if (j.isDefaultPrevented()) {
            return
        }
        var e = this.$parent && this.$parent.find("> .panel > .in");
        if (e && e.length) {
            var h = e.data("bs.collapse");
            if (h && h.transitioning) {
                return
            }
            d.call(e, "hide");
            h || e.data("bs.collapse", null)
        }
        var g = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[g](0);
        this.transitioning = 1;
        var f = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse")
        };
        if (!a.support.transition) {
            return f.call(this)
        }
        var i = a.camelCase(["scroll", g].join("-"));
        this.$element.one("bsTransitionEnd", a.proxy(f, this)).emulateTransitionEnd(350)[g](this.$element[0][i])
    };
    b.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) {
            return
        }
        var g = a.Event("hide.bs.collapse");
        this.$element.trigger(g);
        if (g.isDefaultPrevented()) {
            return
        }
        var f = this.dimension();
        this.$element[f](this.$element[f]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        this.transitioning = 1;
        var e = function() {
            this.transitioning = 0;
            this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        if (!a.support.transition) {
            return e.call(this)
        }
        this.$element[f](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(350)
    };
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };

    function d(e) {
        return this.each(function() {
            var f = a(this);
            var g = f.data("bs.collapse");
            var h = a.extend({}, b.DEFAULTS, f.data(), typeof e == "object" && e);
            if (!g && h.toggle && e == "show") {
                e = !e
            }
            if (!g) {
                f.data("bs.collapse", (g = new b(this, h)))
            }
            if (typeof e == "string") {
                g[e]()
            }
        })
    }
    var c = a.fn.collapse;
    a.fn.collapse = d;
    a.fn.collapse.Constructor = b;
    a.fn.collapse.noConflict = function() {
        a.fn.collapse = c;
        return this
    };
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(j) {
        var k;
        var h = a(this);
        var n = h.attr("data-target") || j.preventDefault() || (k = h.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, "");
        var g = a(n);
        var i = g.data("bs.collapse");
        var l = i ? "toggle" : h.data();
        var m = h.attr("data-parent");
        var f = m && a(m);
        if (!i || !i.transitioning) {
            if (f) {
                f.find('[data-toggle="collapse"][data-parent="' + m + '"]').not(h).addClass("collapsed")
            }
            h[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")
        }
        d.call(g, l)
    })
}(jQuery); +
function(a) {
    var d = function(e, f) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init("tooltip", e, f)
    };
    d.VERSION = "3.2.0";
    d.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    d.prototype.init = function(m, e, j) {
        this.enabled = true;
        this.type = m;
        this.$element = a(e);
        this.options = this.getOptions(j);
        this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        var l = this.options.trigger.split(" ");
        for (var h = l.length; h--;) {
            var k = l[h];
            if (k == "click") {
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this))
            } else {
                if (k != "manual") {
                    var f = k == "hover" ? "mouseenter" : "focusin";
                    var g = k == "hover" ? "mouseleave" : "focusout";
                    this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.enter, this));
                    this.$element.on(g + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? (this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        })) : this.fixTitle()
    };
    d.prototype.getDefaults = function() {
        return d.DEFAULTS
    };
    d.prototype.getOptions = function(e) {
        e = a.extend({}, this.getDefaults(), this.$element.data(), e);
        if (e.delay && typeof e.delay == "number") {
            e.delay = {
                show: e.delay,
                hide: e.delay
            }
        }
        return e
    };
    d.prototype.getDelegateOptions = function() {
        var f = {};
        var e = this.getDefaults();
        this._options && a.each(this._options, function(g, h) {
            if (e[g] != h) {
                f[g] = h
            }
        });
        return f
    };
    d.prototype.enter = function(e) {
        var f = e instanceof this.constructor ? e : a(e.currentTarget).data("bs." + this.type);
        if (!f) {
            f = new this.constructor(e.currentTarget, this.getDelegateOptions());
            a(e.currentTarget).data("bs." + this.type, f)
        }
        clearTimeout(f.timeout);
        f.hoverState = "in";
        if (!f.options.delay || !f.options.delay.show) {
            return f.show()
        }
        f.timeout = setTimeout(function() {
            if (f.hoverState == "in") {
                f.show()
            }
        }, f.options.delay.show)
    };
    d.prototype.leave = function(e) {
        var f = e instanceof this.constructor ? e : a(e.currentTarget).data("bs." + this.type);
        if (!f) {
            f = new this.constructor(e.currentTarget, this.getDelegateOptions());
            a(e.currentTarget).data("bs." + this.type, f)
        }
        clearTimeout(f.timeout);
        f.hoverState = "out";
        if (!f.options.delay || !f.options.delay.hide) {
            return f.hide()
        }
        f.timeout = setTimeout(function() {
            if (f.hoverState == "out") {
                f.hide()
            }
        }, f.options.delay.hide)
    };
    d.prototype.show = function() {
        var n = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            var o = a.contains(document.documentElement, this.$element[0]);
            if (n.isDefaultPrevented() || !o) {
                return
            }
            var t = this;
            var g = this.tip();
            var u = this.getUID(this.type);
            this.setContent();
            g.attr("id", u);
            this.$element.attr("aria-describedby", u);
            if (this.options.animation) {
                g.addClass("fade")
            }
            var r = typeof this.options.placement == "function" ? this.options.placement.call(this, g[0], this.$element[0]) : this.options.placement;
            var k = /\s?auto?\s?/i;
            var j = k.test(r);
            if (j) {
                r = r.replace(k, "") || "top"
            }
            g.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this);
            this.options.container ? g.appendTo(this.options.container) : g.insertAfter(this.$element);
            var s = this.getPosition();
            var i = g[0].offsetWidth;
            var h = g[0].offsetHeight;
            if (j) {
                var p = r;
                var f = this.$element.parent();
                var q = this.getPosition(f);
                r = r == "bottom" && s.top + s.height + h - q.scroll > q.height ? "top" : r == "top" && s.top - q.scroll - h < 0 ? "bottom" : r == "right" && s.right + i > q.width ? "left" : r == "left" && s.left - i < q.left ? "right" : r;
                g.removeClass(p).addClass(r)
            }
            var l = this.getCalculatedOffset(r, s, i, h);
            this.applyPlacement(l, r);
            var m = function() {
                t.$element.trigger("shown.bs." + t.type);
                t.hoverState = null
            };
            a.support.transition && this.$tip.hasClass("fade") ? g.one("bsTransitionEnd", m).emulateTransitionEnd(150) : m()
        }
    };
    d.prototype.applyPlacement = function(o, p) {
        var e = this.tip();
        var q = e[0].offsetWidth;
        var l = e[0].offsetHeight;
        var n = parseInt(e.css("margin-top"), 10);
        var m = parseInt(e.css("margin-left"), 10);
        if (isNaN(n)) {
            n = 0
        }
        if (isNaN(m)) {
            m = 0
        }
        o.top = o.top + n;
        o.left = o.left + m;
        a.offset.setOffset(e[0], a.extend({
            using: function(r) {
                e.css({
                    top: Math.round(r.top),
                    left: Math.round(r.left)
                })
            }
        }, o), 0);
        e.addClass("in");
        var g = e[0].offsetWidth;
        var f = e[0].offsetHeight;
        if (p == "top" && f != l) {
            o.top = o.top + l - f
        }
        var k = this.getViewportAdjustedDelta(p, o, g, f);
        if (k.left) {
            o.left += k.left
        } else {
            o.top += k.top
        }
        var h = k.left ? k.left * 2 - q + g : k.top * 2 - l + f;
        var j = k.left ? "left" : "top";
        var i = k.left ? "offsetWidth" : "offsetHeight";
        e.offset(o);
        this.replaceArrow(h, e[0][i], j)
    };
    d.prototype.replaceArrow = function(e, f, g) {
        this.arrow().css(g, e ? (50 * (1 - e / f) + "%") : "")
    };
    d.prototype.setContent = function() {
        var e = this.tip();
        var f = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](f);
        e.removeClass("fade in top bottom left right")
    };
    d.prototype.hide = function() {
        var i = this;
        var f = this.tip();
        var h = a.Event("hide.bs." + this.type);
        this.$element.removeAttr("aria-describedby");

        function g() {
            if (i.hoverState != "in") {
                f.detach()
            }
            i.$element.trigger("hidden.bs." + i.type)
        }
        this.$element.trigger(h);
        if (h.isDefaultPrevented()) {
            return
        }
        f.removeClass("in");
        a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g();
        this.hoverState = null;
        return this
    };
    d.prototype.fixTitle = function() {
        var e = this.$element;
        if (e.attr("title") || typeof(e.attr("data-original-title")) != "string") {
            e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }
    };
    d.prototype.hasContent = function() {
        return this.getTitle()
    };
    d.prototype.getPosition = function(e) {
        e = e || this.$element;
        var f = e[0];
        var g = f.tagName == "BODY";
        return a.extend({}, (typeof f.getBoundingClientRect == "function") ? f.getBoundingClientRect() : null, {
            scroll: g ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: g ? a(window).width() : e.outerWidth(),
            height: g ? a(window).height() : e.outerHeight()
        }, g ? {
            top: 0,
            left: 0
        } : e.offset())
    };
    d.prototype.getCalculatedOffset = function(g, h, f, e) {
        return g == "bottom" ? {
            top: h.top + h.height,
            left: h.left + h.width / 2 - f / 2
        } : g == "top" ? {
            top: h.top - e,
            left: h.left + h.width / 2 - f / 2
        } : g == "left" ? {
            top: h.top + h.height / 2 - e / 2,
            left: h.left - f
        } : {
            top: h.top + h.height / 2 - e / 2,
            left: h.left + h.width
        }
    };
    d.prototype.getViewportAdjustedDelta = function(j, k, f, e) {
        var h = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return h
        }
        var o = this.options.viewport && this.options.viewport.padding || 0;
        var n = this.getPosition(this.$viewport);
        if (/right|left/.test(j)) {
            var m = k.top - o - n.scroll;
            var g = k.top + o - n.scroll + e;
            if (m < n.top) {
                h.top = n.top - m
            } else {
                if (g > n.top + n.height) {
                    h.top = n.top + n.height - g
                }
            }
        } else {
            var i = k.left - o;
            var l = k.left + o + f;
            if (i < n.left) {
                h.left = n.left - i
            } else {
                if (l > n.width) {
                    h.left = n.left + n.width - l
                }
            }
        }
        return h
    };
    d.prototype.getTitle = function() {
        var g;
        var e = this.$element;
        var f = this.options;
        g = e.attr("data-original-title") || (typeof f.title == "function" ? f.title.call(e[0]) : f.title);
        return g
    };
    d.prototype.getUID = function(e) {
        do {
            e += ~~(Math.random() * 1000000)
        } while (document.getElementById(e));
        return e
    };
    d.prototype.tip = function() {
        return (this.$tip = this.$tip || a(this.options.template))
    };
    d.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"))
    };
    d.prototype.validate = function() {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null
        }
    };
    d.prototype.enable = function() {
        this.enabled = true
    };
    d.prototype.disable = function() {
        this.enabled = false
    };
    d.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    d.prototype.toggle = function(f) {
        var g = this;
        if (f) {
            g = a(f.currentTarget).data("bs." + this.type);
            if (!g) {
                g = new this.constructor(f.currentTarget, this.getDelegateOptions());
                a(f.currentTarget).data("bs." + this.type, g)
            }
        }
        g.tip().hasClass("in") ? g.leave(g) : g.enter(g)
    };
    d.prototype.destroy = function() {
        clearTimeout(this.timeout);
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };

    function c(e) {
        return this.each(function() {
            var f = a(this);
            var g = f.data("bs.tooltip");
            var h = typeof e == "object" && e;
            if (!g && e == "destroy") {
                return
            }
            if (!g) {
                f.data("bs.tooltip", (g = new d(this, h)))
            }
            if (typeof e == "string") {
                g[e]()
            }
        })
    }
    var b = a.fn.tooltip;
    a.fn.tooltip = c;
    a.fn.tooltip.Constructor = d;
    a.fn.tooltip.noConflict = function() {
        a.fn.tooltip = b;
        return this
    }
}(jQuery);

function callFloodlight_new(d, f, a) {
    var e = "https://" + d + ".fls.doubleclick.net/activityi;src=" + d + ";type=" + f + ";cat=" + a + ";ord=" + Math.floor(Math.random() * 999999) + "?";
    if (document.getElementById("DCLK_FLDiv")) {
        var c = document.getElementById("DCLK_FLDiv")
    } else {
        var c = document.body.appendChild(document.createElement("div"));
        c.id = "DCLK_FLDiv";
        c.style.display = "none"
    }
    var b = document.createElement("iframe");
    b.id = "DCLK_FLIframe_" + Math.floor(Math.random() * 999999);
    b.src = e;
    c.appendChild(b)
}

function callFloodlight_same(d, f, a) {
    var e = "https://fls.doubleclick.net/activityi;src=" + d + ";type=" + f + ";cat=" + a + ";ord=" + Math.floor(Math.random() * 999999) + "?";
    if (document.getElementById("DCLK_FLDiv")) {
        var c = document.getElementById("DCLK_FLDiv")
    } else {
        var c = document.body.appendChild(document.createElement("div"));
        c.id = "DCLK_FLDiv";
        c.style.display = "none"
    }
    var b = document.createElement("iframe");
    b.id = "DCLK_FLIframe_" + Math.floor(Math.random() * 999999);
    b.src = e;
    c.appendChild(b)
}

function FloodlightTrackingForClickToRevealNumbers(e) {
    var c = Math.random() + "";
    var b = c * 1e+16;
    var f = document.body.appendChild(document.createElement("div"));
    var i = e.data.type;
    var d = e.data.cat;
    var g = e.data.selector;
    var h = e.data.source;
    f.style.position = "absolute";
    f.style.top = "0";
    f.style.left = "0";
    f.style.width = "1px";
    f.style.height = "1px";
    f.style.display = "none";
    f.innerHTML = '<iframe id="DCLK_FLIframe1" src="https://' + h + ".fls.doubleclick.net/activityi;src=" + h + ";type=" + i + ";cat=" + d + ";ord=" + b + '?" width="1" height="1" frameborder="0"></iframe>';
    g.removeClass("FloodlightPhoneTracking");
    g.off("click", FloodlightTrackingForClickToRevealNumbers)
};
$j.fn.extend({
    GoogleEventTracking: function(a) {
        var b = a === undefined ? "click" : a;
        this.on(b, function() {
            TrackGoogleEvent($j(this).attr("data-ga-category"), $j(this).attr("data-ga-action"), $j(this).attr("data-ga-label"));
            if ("" + $j(this).attr("data-ga-agency") != "") {
                TrackGoogleEvent($j(this).attr("data-ga-category"), $j(this).attr("data-ga-agency"), $j(this).attr("data-ga-listingId"))
            }
        })
    },
    TrackGoogleEvent: function() {
        TrackGoogleEvent($j(this).attr("data-ga-category"), $j(this).attr("data-ga-action"), $j(this).attr("data-ga-label"));
        if ("" + $j(this).attr("data-ga-agency") != "") {
            TrackGoogleEvent($j(this).attr("data-ga-category"), $j(this).attr("data-ga-agency"), $j(this).attr("data-ga-listingId"))
        }
    },
    TrackGoogleUniversalAnalyticsEvent: function() {
        TrackGoogleUniversalAnalyticsEvent($j(this).attr("data-eventcategory"), $j(this).attr("data-eventaction"), $j(this).attr("data-eventlabel"))
    }
});

function TrackGoogleUniversalAnalyticsEvent(b, a, c) {
    pushToDataLayer(b, a, c)
}

function TrackGoogleEvent(b, a, c) {
    pushToDataLayer(b, a, c)
}

function pushToDataLayer(b, a, c) {
    if (b === undefined || a === undefined) {
        return
    }
    if (window.dataLayer && window.dataLayer.push) {
        if (c != undefined) {
            window.dataLayer.push({
                event: "GAevent",
                eventCategory: b,
                eventAction: a,
                eventLabel: c
            })
        } else {
            window.dataLayer.push({
                event: "GAevent",
                eventCategory: b,
                eventAction: a
            })
        }
    }
};
(function() {
    function a(d) {
        var b = ("https:" == document.location.protocol ? "https://" : "http://");
        var c = document.createElement("script");
        c.src = b + d;
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(c, e)
    }
    bm_website_code = "99C43F16BEAE4EF7";
    jQuery(document).ready(function() {
        a("asset.pagefair.com/measure.min.js")
    });
    jQuery(document).ready(function() {
        a("asset.pagefair.net/ads.min.js")
    })
})();