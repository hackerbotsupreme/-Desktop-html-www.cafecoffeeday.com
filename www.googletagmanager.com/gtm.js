// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "3",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-9107407-3",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleRatio",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 5
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11081986475",
                "vtp_conversionLabel": "qr0zCOryo40YEKvjpqQp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 7
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Generic Click Listener",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["template", ["macro", 4], "|", ["macro", 5], "|", ["macro", 6], "|", ["macro", 7]],
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 10
            }, {
                "function": "__cl",
                "tag_id": 11
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "\/store-locator"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 3]
                ],
                [
                    ["if", 0, 1],
                    ["add", 1]
                ],
                [
                    ["if", 2],
                    ["add", 2]
                ]
            ]
        },
        "runtime": []










    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ca, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                    a: !0
                },
                la = {};
            try {
                la.__proto__ = ka;
                ja = la.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ia,
        na = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (ma) ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ol = b.prototype
        },
        oa = this || self,
        pa = function(a) {
            return a
        };
    var qa = function() {},
        ra = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        sa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ta = Array.isArray,
        ua = function(a, b) {
            if (a && ta(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        va = function(a, b) {
            if (!sa(a) || !sa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ya = function(a, b) {
            for (var c = new wa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Aa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ba = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ca = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Da = function(a) {
            var b = [];
            if (ta(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ea = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Fa = function() {
            return new Date(Date.now())
        },
        Ga = function() {
            return Fa().getTime()
        },
        wa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    wa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    wa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ha = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ia = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ja = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ka = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ma = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Na = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Oa = /^\w{1,9}$/,
        Pa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Oa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ra = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Sa() {
        for (var a = Ta, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ua() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ta, Va;

    function Wa(a) {
        Ta = Ta || Ua();
        Va = Va || Sa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Ta[m], Ta[n], Ta[p], Ta[q])
        }
        return b.join("")
    }

    function Xa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Va[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Ta = Ta || Ua();
        Va = Va || Sa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Ya = {},
        Za = function(a, b) {
            Ya[a] = Ya[a] || [];
            Ya[a][b] = !0
        },
        $a = function() {
            delete Ya.GA4_EVENT
        },
        ab = function(a) {
            var b = Ya[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Wa(c.join("")).replace(/\.+$/, "")
        };
    var bb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var cb, db = function() {
        if (void 0 === cb) {
            var a = null,
                b = oa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    oa.console && oa.console.error(c.message)
                }
                cb = a
            } else cb = a
        }
        return cb
    };
    var fb = function(a, b) {
        this.h = b === eb ? a : ""
    };
    fb.prototype.toString = function() {
        return this.h + ""
    };
    var eb = {};
    var gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var hb, ib;
    a: {
        for (var jb = ["CLOSURE_FLAGS"], kb = oa, lb = 0; lb < jb.length; lb++)
            if (kb = kb[jb[lb]], null == kb) {
                ib = null;
                break a
            }
        ib = kb
    }
    var mb = ib && ib[610401301];
    hb = null != mb ? mb : !1;

    function nb() {
        var a = oa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var ob, pb = oa.navigator;
    ob = pb ? pb.userAgentData || null : null;

    function qb(a) {
        return hb ? ob ? ob.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function rb(a) {
        return -1 != nb().indexOf(a)
    };

    function sb() {
        return hb ? !!ob && 0 < ob.brands.length : !1
    }

    function tb() {
        return sb() ? !1 : rb("Opera")
    }

    function ub() {
        return rb("Firefox") || rb("FxiOS")
    }

    function vb() {
        return sb() ? qb("Chromium") : (rb("Chrome") || rb("CriOS")) && !(sb() ? 0 : rb("Edge")) || rb("Silk")
    };
    var wb = {},
        xb = function(a, b) {
            this.h = b === wb ? a : ""
        };
    xb.prototype.toString = function() {
        return this.h.toString()
    };
    var yb = function(a) {
        return a instanceof xb && a.constructor === xb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function zb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function Ab(a) {
        var b = a = Bb(a),
            c = db(),
            d = c ? c.createHTML(b) : b;
        return new xb(d, wb)
    }

    function Bb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        C = document,
        Cb = navigator,
        Db = C.currentScript && C.currentScript.src,
        Eb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Fb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Gb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Hb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Ib(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Jb = function(a, b, c, d, e) {
            var f = C.createElement("script");
            Ib(f, d, Gb);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = Bb(a),
                m = db(),
                n = m ? m.createScriptURL(l) : l;
            g = new fb(n, eb);
            f.src = g instanceof fb && g.constructor === fb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, t, r = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Fb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = C.getElementsByTagName("script")[0] || C.body || C.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Kb = function() {
            if (Db) {
                var a = Db.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Lb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = C.createElement("iframe"), l = !0);
            Ib(g, c, Hb);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = C.body && C.body.lastChild || C.body ||
                    C.head;
                m.parentNode.insertBefore(g, m)
            }
            Fb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Mb = function(a, b, c, d) {
            var e = new Image(1, 1);
            Ib(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Nb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Ob = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        E = function(a) {
            z.setTimeout(a, 0)
        },
        Pb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Qb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Rb = function(a) {
            var b = C.createElement("div"),
                c = b,
                d = Ab("A<div>" + a + "</div>");
            1 === c.nodeType && zb(c);
            c.innerHTML = yb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Sb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f =
                    a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Tb = function(a) {
            var b;
            try {
                b = Cb.sendBeacon && Cb.sendBeacon(a)
            } catch (c) {
                Za("TAGGING", 15)
            }
            b || Mb(a)
        },
        Ub = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Vb = function(a, b) {
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Wb = function() {
            var a = z.performance;
            if (a && ra(a.now)) return a.now()
        },
        Xb = function() {
            return z.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Yb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Zb = function(a) {
            if (null == a) return String(a);
            var b = Yb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        $b = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        G = function(a) {
            if (!a || "object" != Zb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !$b(a, "constructor") && !$b(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || $b(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == Zb(a) ? [] : {}),
                d;
            for (d in a)
                if ($b(a, d)) {
                    var e = a[d];
                    "array" == Zb(e) ? ("array" != Zb(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : G(e) ? (G(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var ac = function(a) {
        if (void 0 === a || ta(a) || G(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var bc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            ii: a("consent"),
            ig: a("convert_case_to"),
            jg: a("convert_false_to"),
            kg: a("convert_null_to"),
            lg: a("convert_true_to"),
            mg: a("convert_undefined_to"),
            Rk: a("debug_mode_metadata"),
            sb: a("function"),
            pf: a("instance_name"),
            Xi: a("live_only"),
            Yi: a("malware_disabled"),
            Zi: a("metadata"),
            cj: a("original_activity_id"),
            Vk: a("original_vendor_template_id"),
            Uk: a("once_on_load"),
            bj: a("once_per_event"),
            oh: a("once_per_load"),
            Xk: a("priority_override"),
            Yk: a("respected_consent_types"),
            sh: a("setup_tags"),
            Zc: a("tag_id"),
            xh: a("teardown_tags")
        }
    }();
    var xc;
    var yc = [],
        zc = [],
        Ac = [],
        Bc = [],
        Cc = [],
        Dc = {},
        Ec, Fc, Hc = function() {
            var a = Gc;
            Fc = Fc || a
        },
        Ic, Jc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Dc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Ch && d.Ch(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.Bh && (f.vtp_gtmCachedValues = d.Bh);
            if (b) {
                if (null == b.name) {
                    var l;
                    a: {
                        var m = b.index;
                        if (null == m) l = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = yc[m];
                                    break;
                                case 1:
                                    n = Bc[m];
                                    break;
                                default:
                                    l = "";
                                    break a
                            }
                            var p = n && n[bc.pf];
                            l = p ? String(p) : ""
                        }
                    }
                    b.name = l
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : xc(c, f, b)
        },
        Lc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Kc(a[e], b, c));
            return d
        },
        Kc = function(a, b, c) {
            if (ta(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Kc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = yc[f];
                        if (!g || b.Ff(g)) return;
                        c[f] = !0;
                        var l =
                            String(g[bc.pf]);
                        try {
                            var m = Lc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Jc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Ic && (d = Ic.qj(d, m))
                        } catch (x) {
                            b.Nh && b.Nh(x, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Kc(a[n], b, c)] = Kc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = Kc(a[q], b, c);
                            Fc && (p = p || t === Fc.me);
                            d.push(t)
                        }
                        return Fc && p ? Fc.sj(d) : d.join("");
                    case "escape":
                        d = Kc(a[1], b, c);
                        if (Fc && ta(a[1]) && "macro" ===
                            a[1][0] && Fc.Rj(a)) return Fc.lk(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) cc[a[r]] && (d = cc[a[r]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Bc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Hh: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Mc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Mc = function(a, b, c) {
            try {
                return Ec(Lc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Pc = function(a) {
            function b(t) {
                for (var r = 0; r < t.length; r++) d[t[r]] = !0
            }
            for (var c = [], d = [], e = Nc(a), f = 0; f < zc.length; f++) {
                var g = zc[f],
                    l = Oc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < Bc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Oc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Nc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Mc(Ac[c], a));
                return b[c]
            }
        };
    var Qc = {
        qj: function(a, b) {
            b[bc.ig] && "string" === typeof a && (a = 1 == b[bc.ig] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(bc.kg) && null === a && (a = b[bc.kg]);
            b.hasOwnProperty(bc.mg) && void 0 === a && (a = b[bc.mg]);
            b.hasOwnProperty(bc.lg) && !0 === a && (a = b[bc.lg]);
            b.hasOwnProperty(bc.jg) && !1 === a && (a = b[bc.jg]);
            return a
        }
    };
    var hd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function id(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var jd = new wa;

    function kd(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = jd.get(e);
            f || (f = new RegExp(b, d), jd.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    };
    var rd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function sd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var wd = function(a) {
            return vd ? C.querySelectorAll(a) : null
        },
        xd = function(a, b) {
            if (!vd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        yd = !1;
    if (C.querySelectorAll) try {
        var zd = C.querySelectorAll(":root");
        zd && 1 == zd.length && zd[0] == C.documentElement && (yd = !0)
    } catch (a) {}
    var vd = yd;
    var M = function(a) {
        Za("GTM", a)
    };
    var Ad = function(a) {
            return null == a ? "" : h(a) ? Ea(String(a)) : "e0"
        },
        Cd = function(a) {
            return a.replace(Bd, "")
        },
        Ed = function(a) {
            return Dd(a.replace(/\s/g, ""))
        },
        Dd = function(a) {
            return Ea(a.replace(Fd, "").toLowerCase())
        },
        Hd = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return Gd.test(a) ? a : "e0"
        },
        Jd = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Id.test(c)) return c
            }
            return "e0"
        },
        Md = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Kd.indexOf(c.name) ? Ld(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Ld = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (Nd.test(a)) return Promise.resolve(a);
                try {
                    var b = Od(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        Od = function(a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        Fd = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Id = /^\S+@\S+\.\S+$/,
        Gd = /^\+\d{10,15}$/,
        Bd = /[.~]/g,
        Pd = /^[0-9A-Za-z_-]{43}$/,
        Nd = /^[0-9A-Fa-f]{64}$/,
        Qd = {},
        Rd = (Qd.email = "em", Qd.phone_number = "pn", Qd.first_name = "fn", Qd.last_name = "ln", Qd.street = "sa", Qd.city = "ct", Qd.region = "rg", Qd.country = "co", Qd.postal_code = "pc", Qd.error_code = "ec", Qd),
        Sd = {},
        Td = (Sd.email = "sha256_email_address", Sd.phone_number = "sha256_phone_number", Sd.first_name = "sha256_first_name", Sd.last_name =
            "sha256_last_name", Sd.street = "sha256_street", Sd),
        Ud = function(a, b) {
            function c(r, u, v, w) {
                var y = Ad(r);
                "" !== y && (Nd.test(y) ? m.push({
                    name: u,
                    value: y,
                    index: w
                }) : m.push({
                    name: u,
                    value: v(y),
                    index: w
                }))
            }

            function d(r, u) {
                var v = r;
                if (h(v) || ta(v)) {
                    v = ta(r) ? r : [r];
                    for (var w = 0; w < v.length; ++w) {
                        var y = Ad(v[w]),
                            x = Nd.test(y);
                        u && !x && M(89);
                        !u && x && M(88)
                    }
                }
            }

            function e(r, u) {
                var v = r[u];
                d(v, !1);
                var w = Td[u];
                r.hasOwnProperty(w) && (r.hasOwnProperty(u) && M(90), v = r[w], d(v, !0));
                return v
            }

            function f(r, u, v) {
                var w = e(r, u);
                w = ta(w) ? w : [w];
                for (var y =
                        0; y < w.length; ++y) c(w[y], u, v)
            }

            function g(r, u, v, w) {
                var y = e(r, u);
                c(y, u, v, w)
            }

            function l(r) {
                return function(u) {
                    M(64);
                    return r(u)
                }
            }
            var m = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", Jd);
                f(a, "phone_number", Hd);
                f(a, "first_name", l(Ed));
                f(a, "last_name", l(Ed));
                var n = a.home_address || {};
                f(n, "street", l(Dd));
                f(n, "city", l(Dd));
                f(n, "postal_code", l(Cd));
                f(n, "region", l(Dd));
                f(n, "country", l(Cd));
                var p = a.address || {};
                p = ta(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var t = p[q];
                    g(t, "first_name", Ed, q);
                    g(t, "last_name", Ed, q);
                    g(t, "street", Dd, q);
                    g(t, "city", Dd, q);
                    g(t, "postal_code", Cd, q);
                    g(t, "region", Dd, q);
                    g(t, "country", Cd, q)
                }
                Md(m, b)
            } else m.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(m)
        },
        Vd = function(a, b) {
            Ud(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        l = c[f].value,
                        m = c[f].index,
                        n = Rd[g];
                    n && l && (-1 === Kd.indexOf(g) || /^e\d+$/.test(l) || Pd.test(l) || Nd.test(l)) && (void 0 !== m && (n += m), d.push(n + "." + l), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Wd = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    Vd(a,
                        function(c, d) {
                            b({
                                Ee: c,
                                jk: d
                            })
                        })
                })
            } catch (b) {}
        },
        Kd = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var O = {
            g: {
                cg: "ad_data_sharing",
                H: "ad_storage",
                dg: "ad_user_data",
                O: "analytics_storage",
                Pb: "region",
                Cd: "consent_updated",
                eg: "wait_for_update",
                Mk: "ads",
                Nk: "all",
                Ok: "play",
                Pk: "search",
                Qk: "youtube",
                mi: "app_remove",
                ni: "app_store_refund",
                oi: "app_store_subscription_cancel",
                ri: "app_store_subscription_convert",
                si: "app_store_subscription_renew",
                ng: "add_payment_info",
                og: "add_shipping_info",
                wc: "add_to_cart",
                xc: "remove_from_cart",
                pg: "view_cart",
                Qb: "begin_checkout",
                yc: "select_item",
                wb: "view_item_list",
                Rb: "select_promotion",
                xb: "view_promotion",
                Ga: "purchase",
                zc: "refund",
                Ha: "view_item",
                qg: "add_to_wishlist",
                ui: "first_open",
                vi: "first_visit",
                oa: "gtag.config",
                Aa: "gtag.get",
                wi: "in_app_purchase",
                Ac: "page_view",
                xi: "session_start",
                Re: "user_engagement",
                jb: "gclid",
                ia: "ads_data_redaction",
                W: "allow_ad_personalization_signals",
                Ed: "allow_custom_scripts",
                yi: "allow_display_features",
                Fd: "allow_enhanced_conversions",
                kb: "allow_google_signals",
                wa: "allow_interest_groups",
                Sb: "auid",
                zi: "auto_detection_enabled",
                yb: "aw_remarketing",
                Se: "aw_remarketing_only",
                Gd: "discount",
                Hd: "aw_feed_country",
                Id: "aw_feed_language",
                X: "items",
                Jd: "aw_merchant_id",
                rg: "aw_basket_type",
                Kd: "campaign_content",
                Ld: "campaign_id",
                Md: "campaign_medium",
                Nd: "campaign_name",
                Bc: "campaign",
                Od: "campaign_source",
                Pd: "campaign_term",
                lb: "client_id",
                Ai: "content_group",
                Bi: "content_type",
                Ba: "conversion_cookie_prefix",
                Cc: "conversion_id",
                qa: "conversion_linker",
                zb: "conversion_api",
                Oa: "cookie_domain",
                Ca: "cookie_expires",
                Pa: "cookie_flags",
                Tb: "cookie_name",
                Qd: "cookie_path",
                Ia: "cookie_prefix",
                nb: "cookie_update",
                ob: "country",
                ra: "currency",
                Rd: "customer_lifetime_value",
                Ub: "custom_map",
                sg: "gcldc",
                Ci: "debug_mode",
                V: "developer_id",
                Di: "disable_merchant_reported_purchases",
                Vb: "dc_custom_params",
                ug: "dc_natural_search",
                Te: "dynamic_event_settings",
                Ei: "affiliation",
                vg: "checkout_option",
                wg: "checkout_step",
                Fi: "coupon",
                Ue: "item_list_name",
                Ve: "list_name",
                Gi: "promotions",
                Sd: "shipping",
                xg: "tax",
                Td: "engagement_time_msec",
                Dc: "enhanced_client_id",
                Ec: "enhanced_conversions",
                yg: "enhanced_conversions_automatic_settings",
                Ud: "estimated_delivery_date",
                We: "euid_logged_in_state",
                Wb: "event_callback",
                pb: "event_developer_id_string",
                zg: "event",
                Vd: "event_settings",
                Wd: "event_timeout",
                Hi: "experiments",
                Xe: "firebase_id",
                Xd: "first_party_collection",
                Yd: "_x_20",
                Ab: "_x_19",
                Ag: "fledge",
                Bg: "flight_error_code",
                Cg: "flight_error_message",
                Dg: "fl_activity_category",
                Eg: "fl_activity_group",
                Ye: "fl_advertiser_id",
                Fg: "fl_ar_dedupe",
                Gg: "fl_random_number",
                Hg: "tran",
                Ig: "u",
                Zd: "gac_gclid",
                Xb: "gac_wbraid",
                Jg: "gac_wbraid_multiple_conversions",
                Ze: "ga_restrict_domain",
                af: "ga_temp_client_id",
                ae: "gdpr_applies",
                Kg: "geo_granularity",
                Ta: "value_callback",
                Ja: "value_key",
                Sk: "google_ono",
                Ua: "google_signals",
                be: "google_tld",
                ce: "groups",
                Lg: "gsa_experiment_id",
                Mg: "iframe_state",
                de: "ignore_referrer",
                bf: "internal_traffic_results",
                ee: "is_legacy_loaded",
                fe: "is_passthrough",
                xa: "language",
                cf: "legacy_developer_id_string",
                sa: "linker",
                Yb: "accept_incoming",
                rb: "decorate_forms",
                P: "domains",
                Bb: "url_position",
                Ng: "method",
                Fc: "new_customer",
                Og: "non_interaction",
                Ii: "optimize_id",
                Pg: "page_hostname",
                Zb: "page_path",
                Da: "page_referrer",
                Cb: "page_title",
                Qg: "passengers",
                Rg: "phone_conversion_callback",
                Ji: "phone_conversion_country_code",
                Sg: "phone_conversion_css_class",
                Ki: "phone_conversion_ids",
                Tg: "phone_conversion_number",
                Ug: "phone_conversion_options",
                ac: "quantity",
                Gc: "redact_device_info",
                df: "redact_enhanced_user_id",
                Li: "redact_ga_client_id",
                Mi: "redact_user_id",
                he: "referral_exclusion_definition",
                Db: "restricted_data_processing",
                Ni: "retoken",
                Vg: "screen_name",
                Eb: "screen_resolution",
                Oi: "search_term",
                Ka: "send_page_view",
                Fb: "send_to",
                Hc: "session_duration",
                ie: "session_engaged",
                ef: "session_engaged_time",
                Va: "session_id",
                je: "session_number",
                Ic: "delivery_postal_code",
                Wg: "temporary_client_id",
                ff: "topmost_url",
                Pi: "tracking_id",
                hf: "traffic_type",
                ma: "transaction_id",
                va: "transport_url",
                Xg: "trip_type",
                Jc: "update",
                Wa: "url_passthrough",
                Kc: "_user_agent_architecture",
                Lc: "_user_agent_bitness",
                Mc: "_user_agent_full_version_list",
                Nc: "_user_agent_mobile",
                Oc: "_user_agent_model",
                Pc: "_user_agent_platform",
                Qc: "_user_agent_platform_version",
                Rc: "_user_agent_wow64",
                ka: "user_data",
                Yg: "user_data_auto_latency",
                Zg: "user_data_auto_meta",
                ah: "user_data_auto_multi",
                bh: "user_data_auto_selectors",
                dh: "user_data_auto_status",
                jf: "user_data_mode",
                kf: "user_data_settings",
                ya: "user_id",
                La: "user_properties",
                eh: "us_privacy_string",
                da: "value",
                bc: "wbraid",
                fh: "wbraid_multiple_conversions",
                lh: "_host_name",
                mh: "_in_page_command",
                nh: "_is_passthrough_cid",
                ne: "non_personalized_ads",
                Yc: "_sst_parameters",
                Sa: "conversion_label",
                ja: "page_location",
                qb: "global_developer_id_string",
                ke: "tc_privacy_string"
            }
        },
        Xd = {},
        Yd = Object.freeze((Xd[O.g.W] = 1, Xd[O.g.Fd] = 1, Xd[O.g.kb] = 1, Xd[O.g.X] = 1, Xd[O.g.Oa] = 1, Xd[O.g.Ca] = 1, Xd[O.g.Pa] = 1, Xd[O.g.Tb] = 1, Xd[O.g.Qd] = 1, Xd[O.g.Ia] = 1, Xd[O.g.nb] = 1, Xd[O.g.Ub] = 1, Xd[O.g.V] = 1, Xd[O.g.Te] = 1, Xd[O.g.Wb] = 1, Xd[O.g.Vd] = 1, Xd[O.g.Wd] = 1, Xd[O.g.Xd] = 1, Xd[O.g.Ze] = 1, Xd[O.g.Ua] = 1, Xd[O.g.be] = 1, Xd[O.g.ce] = 1, Xd[O.g.bf] = 1, Xd[O.g.ee] = 1, Xd[O.g.sa] = 1, Xd[O.g.df] = 1, Xd[O.g.he] = 1, Xd[O.g.Db] = 1, Xd[O.g.Ka] = 1, Xd[O.g.Fb] = 1, Xd[O.g.Hc] = 1, Xd[O.g.ef] = 1, Xd[O.g.Ic] = 1, Xd[O.g.va] = 1, Xd[O.g.Jc] = 1,
            Xd[O.g.kf] = 1, Xd[O.g.La] = 1, Xd[O.g.Yc] = 1, Xd));
    Object.freeze([O.g.ja, O.g.Da, O.g.Cb, O.g.xa, O.g.Vg, O.g.ya, O.g.Xe, O.g.Ai]);
    var Zd = {},
        $d = Object.freeze((Zd[O.g.mi] = 1, Zd[O.g.ni] = 1, Zd[O.g.oi] = 1, Zd[O.g.ri] = 1, Zd[O.g.si] = 1, Zd[O.g.ui] = 1, Zd[O.g.vi] = 1, Zd[O.g.wi] = 1, Zd[O.g.xi] = 1, Zd[O.g.Re] = 1, Zd)),
        ae = {},
        be = Object.freeze((ae[O.g.ng] = 1, ae[O.g.og] = 1, ae[O.g.wc] = 1, ae[O.g.xc] = 1, ae[O.g.pg] = 1, ae[O.g.Qb] = 1, ae[O.g.yc] = 1, ae[O.g.wb] = 1, ae[O.g.Rb] = 1, ae[O.g.xb] = 1, ae[O.g.Ga] = 1, ae[O.g.zc] = 1, ae[O.g.Ha] = 1, ae[O.g.qg] = 1, ae)),
        ce = Object.freeze([O.g.W, O.g.kb, O.g.nb]),
        de = Object.freeze([].concat(ce)),
        ee = Object.freeze([O.g.Ca, O.g.Wd, O.g.Hc, O.g.ef, O.g.Td]),
        fe = Object.freeze([].concat(ee)),
        he = {},
        ie = (he[O.g.H] = "1", he[O.g.O] = "2", he),
        je = {},
        ke = Object.freeze((je[O.g.W] = 1, je[O.g.Fd] = 1, je[O.g.wa] = 1, je[O.g.yb] = 1, je[O.g.Se] = 1, je[O.g.Gd] = 1, je[O.g.Hd] = 1, je[O.g.Id] = 1, je[O.g.X] = 1, je[O.g.Jd] = 1, je[O.g.Ba] = 1, je[O.g.qa] = 1, je[O.g.Oa] = 1, je[O.g.Ca] = 1, je[O.g.Pa] = 1, je[O.g.Ia] = 1, je[O.g.ra] = 1, je[O.g.Rd] = 1, je[O.g.V] = 1, je[O.g.Di] = 1, je[O.g.Ec] = 1, je[O.g.Ud] = 1, je[O.g.Xe] = 1, je[O.g.Xd] = 1, je[O.g.ee] = 1, je[O.g.xa] = 1, je[O.g.Fc] = 1, je[O.g.ja] = 1, je[O.g.Da] = 1, je[O.g.Rg] = 1, je[O.g.Sg] = 1, je[O.g.Tg] =
            1, je[O.g.Ug] = 1, je[O.g.Db] = 1, je[O.g.Ka] = 1, je[O.g.Fb] = 1, je[O.g.Ic] = 1, je[O.g.ma] = 1, je[O.g.va] = 1, je[O.g.Jc] = 1, je[O.g.Wa] = 1, je[O.g.ka] = 1, je[O.g.ya] = 1, je[O.g.da] = 1, je));
    Object.freeze(O.g);
    var le = {},
        me = z.google_tag_manager = z.google_tag_manager || {},
        ne = Math.random();
    le.rf = "34q0";
    le.Xc = Number("0") || 0;
    le.ca = "dataLayer";
    le.ki = "ChAI8ICzogYQqc6rzMG1xZtQEiQAdRH2RZ8WqXefOSoJi6OVIKX4pxvZxCpJvBaNbxeBJe0UgUMaAok0";
    var oe = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        pe = {
            __paused: 1,
            __tg: 1
        },
        qe;
    for (qe in oe) oe.hasOwnProperty(qe) && (pe[qe] = 1);
    var re = Ca(""),
        se, te = !1;
    se = te;
    var ue, ve = !1;
    ue = ve;
    var we, xe = !1;
    we = xe;
    var ye, ze = !1;
    ye = ze;
    le.Dd = "www.googletagmanager.com";
    var Ae = "" + le.Dd + (se ? "/gtag/js" : "/gtm.js"),
        Be = null,
        Ce = null,
        De = {},
        Ee = {},
        Fe = {},
        Ge = function() {
            var a = me.sequence || 1;
            me.sequence = a + 1;
            return a
        };
    le.ji = "";
    var He = "";
    le.se = He;
    var Ie = new wa,
        Je = {},
        Ke = {},
        Ne = {
            name: le.ca,
            set: function(a, b) {
                J(Na(a, b), Je);
                Le()
            },
            get: function(a) {
                return Me(a, 2)
            },
            reset: function() {
                Ie = new wa;
                Je = {};
                Le()
            }
        },
        Me = function(a, b) {
            return 2 != b ? Ie.get(a) : Oe(a)
        },
        Oe = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Je, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Pe = function(a, b) {
            Ke.hasOwnProperty(a) || (Ie.set(a, b), J(Na(a, b), Je), Le())
        },
        Le = function(a) {
            k(Ke, function(b, c) {
                Ie.set(b, c);
                J(Na(b), Je);
                J(Na(b,
                    c), Je);
                a && delete Ke[b]
            })
        },
        Qe = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Oe(a) : Ie.get(a);
            "array" === Zb(d) || "object" === Zb(d) ? c = J(d) : c = d;
            return c
        };
    var Re = [],
        Se = function(a) {
            return void 0 == Re[a] ? !1 : Re[a]
        };
    var P = [];
    P[7] = !0;
    P[9] = !0;
    P[27] = !0;
    P[11] = !0;
    P[13] = !0;
    P[15] = !0;
    P[16] = !0;
    P[25] = !0;
    P[34] = !0;
    P[36] = !0;
    P[38] = !0;
    P[39] = !0;
    P[40] = !0;
    P[41] = !0;
    P[82] = !0;
    P[43] = !0;
    P[52] = !0;
    P[57] = !0;
    P[59] = !0;
    P[61] = !0;
    P[67] = !0;
    P[68] = !0;
    P[69] = !0;
    P[72] = !0;
    P[75] = !0;
    Re[2] = !0;
    P[76] = !0;
    P[77] = !0;
    P[79] = !0;
    P[80] = !0;
    P[83] = !0;
    P[87] = !0;
    P[88] = !0;
    P[89] = !0;
    P[92] = !0;
    P[93] = !0;
    P[94] = !0;
    P[96] = !0;
    P[97] = !0;
    var Q = function(a) {
        return !!P[a]
    };
    var Ue = Te();

    function Te() {
        if (!Q(87)) return {};
        try {
            return JSON.parse(Xa("eyIwIjoiSU4iLCIxIjoiSU4tV0IiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
        } catch (a) {
            return M(123), Za("HEALTH", 2), {}
        }
    }
    var Ve = {
            rj: "IN",
            sk: "IN-WB",
            Nj: "true",
            Aj: ""
        },
        We = function() {
            return Q(87) ? Ue["0"] || "" : Ve.rj
        },
        Xe = function() {
            return Q(87) ? Ue["1"] || "" : Ve.sk
        },
        Ye = function() {
            var a = "";
            return a
        },
        Ze = function() {
            var a = !1;
            a = Q(87) ? !!Ue["5"] : "true" === Ve.Nj;
            return a
        };
    var $e, af = !1,
        bf = function(a) {
            if (!af) {
                af = !0;
                $e = $e || {}
            }
            return $e[a]
        };
    var cf = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        df = function(a) {
            if (C.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var qf = /:[0-9]+$/,
        rf = /^\d+\.fls\.doubleclick\.net$/,
        sf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        vf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = tf(a.protocol) || tf(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(qf, "").toLowerCase());
            return uf(a, b, c, d, e)
        },
        uf = function(a, b, c, d, e) {
            var f, g = tf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = wf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(qf, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || Za("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = sf(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        tf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        wf = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        xf = function(a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Za("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(qf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        yf = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = xf(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        zf = function(a) {
            var b = xf(z.location.href),
                c = vf(b, "host", !1);
            if (c && c.match(rf)) {
                var d = vf(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var Bf = function(a, b, c) {
            if (a) {
                var d = a.element,
                    e = {
                        cb: a.cb,
                        tagName: d.tagName,
                        type: 1
                    };
                b && (e.querySelector = Af(d));
                c && (e.isVisible = !df(d));
                return e
            }
        },
        Ef = function(a) {
            if (0 != a.length) {
                var b;
                b = Cf(a, function(c) {
                    return !Df.test(c.cb)
                });
                b = Cf(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = Cf(b, function(c) {
                    return !df(c.element)
                });
                return b[0]
            }
        },
        Cf = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        Af = function(a) {
            var b;
            if (a === C.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = Af(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Ff = !0,
        Gf = !1;
    var Hf = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        If = /@(gmail|googlemail)\./i,
        Df = /support|noreply/i,
        Jf = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        Kf = ["BR"],
        Lf = {},
        Mf = function(a) {
            a = a || {
                jd: !0,
                kd: !0
            };
            a.ub = a.ub || {
                email: !0,
                phone: !0,
                address: !0
            };
            var b, c = a,
                d = !!c.jd + "." + !!c.kd;
            c && c.ze && c.ze.length && (d += "." + c.ze.join("."));
            c && c.ub && (d += "." + c.ub.email + "." + c.ub.phone + "." + c.ub.address);
            b = d;
            var e = Lf[b];
            if (e && 200 > Ga() - e.timestamp) return e.result;
            var f;
            var g = [],
                l = C.body;
            if (l) {
                for (var m = l.querySelectorAll("*"),
                        n = 0; n < m.length && 1E4 > n; n++) {
                    var p = m[n];
                    if (!(0 <= Jf.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                            if (!(0 <= Kf.indexOf(p.children[t].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < m.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var r = f,
                u = r.status,
                v = [],
                w;
            if (a.ub && a.ub.email) {
                for (var y = r.elements, x = [], B = 0; B < y.length; B++) {
                    var A = y[B],
                        D = A.textContent;
                    "INPUT" === A.tagName.toUpperCase() && A.value && (D = A.value);
                    if (D) {
                        var I = D.match(Hf);
                        if (I) {
                            var H = I[0],
                                F;
                            if (z.location) {
                                var L = uf(z.location, "host", !0);
                                F = 0 <= H.toLowerCase().indexOf(L)
                            } else F = !1;
                            F || x.push({
                                element: A,
                                cb: H
                            })
                        }
                    }
                }
                var K = a && a.ze;
                if (K && 0 !== K.length) {
                    for (var W = [], fa = 0; fa < x.length; fa++) {
                        for (var T = !0, N = 0; N < K.length; N++) {
                            var ea = K[N];
                            if (ea && xd(x[fa].element, ea)) {
                                T = !1;
                                break
                            }
                        }
                        T && W.push(x[fa])
                    }
                    v = W
                } else v = x;
                w = Ef(v);
                10 < x.length && (u = "3")
            }
            var aa = [];
            !a.Bk && w && (v = [w]);
            for (var Y = 0; Y < v.length; Y++) aa.push(Bf(v[Y], a.jd, a.kd));
            var ba = {
                elements: aa.slice(0, 10),
                kk: Bf(w, a.jd,
                    a.kd),
                status: u
            };
            Lf[b] = {
                timestamp: Ga(),
                result: ba
            };
            return ba
        },
        Nf = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.cb.length + ":" + If.test(a.cb)
        };
    var Of = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), l = 0; l < g.length; l++) {
                    var m = g[l].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = Me(m.substring(10));
                        else {
                            var n = m.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && vd) {
                var q = wd(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var t = 0; t < q.length && t < ("email" === b || "phone_number" === b ? 5 : 1); t++) f.push(Qb(q[t]) ||
                        Ea(q[t].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        Pf = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Of(b, "email", a.email) || c;
                c = Of(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = Of(f, "first_name", d[e].first_name) || c;
                    c = Of(f, "last_name", d[e].last_name) || c;
                    c = Of(f, "street", d[e].street) || c;
                    c = Of(f, "city", d[e].city) || c;
                    c = Of(f, "region", d[e].region) || c;
                    c = Of(f, "country", d[e].country) || c;
                    c = Of(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        Qf = function(a) {
            return a.B[O.g.kf]
        },
        Rf = function(a) {
            var b = R(a, O.g.Ec) || {},
                c = !1;
            k(b, function(d, e) {
                var f = e.enhanced_conversions_mode;
                if ("automatic" === f || "manual" === f) c = !0
            });
            return c
        },
        Sf = function(a) {
            if (!G(a)) return !1;
            var b = a.mode;
            return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
        },
        Tf = function(a) {
            if (a) {
                if ("selectors" === a.mode || G(a.selectors)) return Pf(a.selectors);
                if ("auto_detect" === a.mode || G(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Mf({
                                jd: !1,
                                kd: !1,
                                ze: c.exclude_element_selectors,
                                ub: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    address: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.cb;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
                }
            }
        };
    var Uf = function(a) {
            var b = a && a[O.g.yg];
            return b && b[O.g.zi]
        },
        Vf = function() {
            return -1 !== Cb.userAgent.toLowerCase().indexOf("firefox")
        },
        Wf = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var Xf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Yf = function(a) {
        Yf[" "](a);
        return a
    };
    Yf[" "] = function() {};
    var $f = function() {
        var a = Zf,
            b = "Df";
        if (a.Df && a.hasOwnProperty(b)) return a.Df;
        var c = new a;
        return a.Df = c
    };
    var Zf = function() {
        var a = {};
        this.h = function() {
            var b = Xf.h,
                c = Xf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[Xf.h] = !0
        }
    };
    var ag = !1,
        bg = !1,
        cg = [],
        dg = {},
        eg = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_data_sharing: !1
        };

    function fg() {
        var a = Eb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            set: gg,
            update: hg,
            declare: ig,
            implicit: jg,
            addListener: kg,
            notifyListeners: lg,
            setCps: mg,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function ng(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function ig(a, b, c, d, e) {
        var f = fg();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            l = g[a] || {},
            m = l.declare_region,
            n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (ng(n, m, d, e)) {
            var p = {
                region: l.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: l.implicit,
                initial: l.initial,
                update: l.update,
                quiet: l.quiet
            };
            if ("" !== d || !1 !== l.declare) g[a] = p
        }
    }

    function jg(a, b) {
        var c = fg();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function gg(a, b, c, d, e, f) {
        var g = fg();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        Za("TAGGING", 19);
        if (void 0 == b) Za("TAGGING", 18);
        else {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (ng(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {
                        region: p,
                        declare_region: m.declare_region,
                        implicit: m.implicit,
                        initial: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) l[a] =
                    t;
                q && z.setTimeout(function() {
                    if (l[a] === t && t.quiet) {
                        t.quiet = !1;
                        var r = [a];
                        if (Se(4))
                            for (var u in dg) dg.hasOwnProperty(u) && dg[u] === a && r.push(u);
                        for (var v = 0; v < r.length; v++) og(r[v]);
                        lg();
                        Za("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function hg(a, b) {
        var c = fg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = pg(c, a, !0),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = pg(c, a, !0),
                l = [a];
            if (Se(4))
                for (var m in dg) dg.hasOwnProperty(m) && dg[m] === a && l.push(m);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < l.length; n++) og(l[n])
            } else if (g !== d)
                for (var p = 0; p < l.length; p++) og(l[p])
        }
    }

    function mg(a, b, c, d, e) {
        var f = fg(),
            g;
        a: {
            var l = f.cps,
                m, n = l[a] || {},
                p = n.region,
                q = c && h(c) ? c.toUpperCase() : void 0;m = d.toUpperCase();
            if (ng(q, p, m, e.toUpperCase())) {
                var t = {
                    enabled: "granted" === b,
                    region: q
                };
                if ("" !== m || !1 !== n.enabled) {
                    l[a] = t;
                    g = !0;
                    break a
                }
            }
            g = !1
        }
        g && (f.usedSetCps = !0)
    }

    function kg(a, b) {
        cg.push({
            consentTypes: a,
            zj: b
        })
    }

    function og(a) {
        for (var b = 0; b < cg.length; ++b) {
            var c = cg[b];
            ta(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Rh = !0)
        }
    }

    function lg(a, b) {
        for (var c = 0; c < cg.length; ++c) {
            var d = cg[c];
            if (d.Rh) {
                d.Rh = !1;
                try {
                    d.zj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function pg(a, b, c) {
        var d = a.entries[b] || {},
            e = d.update;
        if (void 0 !== e) return e;
        e = d.initial;
        if (void 0 !== e) return e;
        if (Se(4) && c && dg.hasOwnProperty(b)) return pg(a, dg[b], !1);
        e = d.declare;
        if (void 0 !== e) return e;
        e = d.implicit;
        if (void 0 !== e) return e;
        if (Se(3) && eg.hasOwnProperty(b)) return eg[b]
    }
    var qg = function(a) {
            var b = fg();
            b.accessedAny = !0;
            return pg(b, a, !0)
        },
        rg = function(a) {
            var b = fg();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        sg = function(a) {
            return (fg().entries[a] || {}).declare
        },
        tg = function(a) {
            var b = fg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        ug = function() {
            if (!$f().h()) return !1;
            var a = fg();
            a.accessedAny = !0;
            return a.active
        },
        vg = function() {
            var a = fg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        wg = function(a, b) {
            fg().addListener(a, b)
        },
        xg = function(a, b) {
            fg().notifyListeners(a,
                b)
        },
        yg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!tg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                wg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        zg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === qg(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && wg(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };

    function Ag() {}

    function Bg() {};

    function Cg(a, b) {
        if (!Q(104) || b) {
            for (var c = [], d = 0; d < Dg.length; d++) {
                var e = a(Dg[d]);
                c[d] = !0 === e ? "1" : !1 === e ? "0" : "-"
            }
            return c.join("")
        }
        for (var f = [], g = 0; g < Eg.length; g++) {
            var l = a(Eg[g]);
            f[g] = !0 === l ? "1" : !1 === l ? "0" : "-"
        }
        return f.join("")
    }
    var Dg = [O.g.H, O.g.O],
        Eg = [O.g.H, O.g.O, O.g.dg, O.g.cg],
        Fg = function(a) {
            for (var b = a[O.g.Pb], c = Array.isArray(b) ? b : [b], d = {
                    oc: 0
                }; d.oc < c.length; d = {
                    oc: d.oc
                }, ++d.oc) k(a, function(e) {
                return function(f, g) {
                    if (f !== O.g.Pb) {
                        var l = c[e.oc],
                            m = We(),
                            n = Xe();
                        bg = !0;
                        ag && Za("TAGGING", 20);
                        fg().declare(f, g, l, m, n)
                    }
                }
            }(d))
        },
        Gg = function(a) {
            var b = a[O.g.Pb];
            b && M(40);
            var c = a[O.g.eg];
            c && M(41);
            for (var d = ta(b) ? b : [b], e = {
                    qc: 0
                }; e.qc < d.length; e = {
                    qc: e.qc
                }, ++e.qc) k(a, function(f) {
                return function(g, l) {
                    if (g !== O.g.Pb && g !== O.g.eg) {
                        var m = d[f.qc],
                            n =
                            Number(c),
                            p = We(),
                            q = Xe();
                        ag = !0;
                        bg && Za("TAGGING", 20);
                        fg().set(g, l, m, p, q, n)
                    }
                }
            }(e))
        },
        Hg = function(a, b) {
            k(a, function(c, d) {
                ag = !0;
                bg && Za("TAGGING", 20);
                fg().update(c, d)
            });
            xg(b.eventId, b.priorityId)
        },
        Ig = function(a) {
            for (var b = a[O.g.Pb], c = Array.isArray(b) ? b : [b], d = {
                    sc: 0
                }; d.sc < c.length; d = {
                    sc: d.sc
                }, ++d.sc) k(a, function(e) {
                return function(f, g) {
                    if (f !== O.g.Pb) {
                        var l = c[e.sc],
                            m = We(),
                            n = Xe();
                        fg().setCps(f, g, l, m, n)
                    }
                }
            }(d))
        },
        Jg = function(a) {
            var b = qg(a);
            return void 0 != b ? b : !0
        },
        Kg = function() {
            return "G" + (Q(104) ? "2" : "1") + Cg(qg)
        },
        Lg = {},
        Mg = (Lg[O.g.H] = 0, Lg[O.g.O] = 1, Lg[O.g.dg] = 2, Lg[O.g.cg] = 3, Lg);

    function Ng(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var Og = function() {
            if (!Q(104)) return "G1" + Cg(rg, !0);
            for (var a = "1", b = 0; b < Eg.length; b++) {
                var c = a,
                    d, e = Eg[b],
                    f = dg[e];
                d = void 0 === f ? 0 : Mg.hasOwnProperty(f) ? 12 | Mg[f] : 8;
                var g = fg();
                g.accessedAny = !0;
                var l = g.entries[e] || {};
                d = d << 2 | Ng(l.implicit);
                a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Ng(l.declare) << 4 | Ng(l.initial) << 2 | Ng(l.update)])
            }
            return a
        },
        Pg = function(a, b) {
            zg(a, b)
        },
        Zg = function(a, b) {
            yg(a, b)
        };
    var $g = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var ah = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var bh = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        ch = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function dh(a) {
        return "null" !== a.origin
    };
    var gh = function(a, b, c, d) {
            return eh(d) ? ah(a, String(b || fh()), c) : []
        },
        jh = function(a, b, c, d, e) {
            if (eh(e)) {
                var f = hh(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = ih(f, function(g) {
                        return g.xe
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = ih(f, function(g) {
                        return g.od
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function kh(a, b, c, d) {
        var e = fh(),
            f = window;
        dh(f) && (f.document.cookie = a);
        var g = fh();
        return e != g || void 0 != c && 0 <= gh(b, g, !1, d).indexOf(c)
    }
    var oh = function(a, b, c) {
            function d(r, u, v) {
                if (null == v) return delete g[u], r;
                g[u] = v;
                return r + "; " + u + "=" + v
            }

            function e(r, u) {
                if (null == u) return delete g[u], r;
                g[u] = !0;
                return r + "; " + u
            }
            if (!eh(c.ab)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = lh(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.kl);
            f = d(f, "samesite",
                c.ml);
            c.nl && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = mh(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!nh(q, c.path) && kh(t, a, b, c.ab)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return nh(m, c.path) ? 1 : kh(f, a, b, c.ab) ? 0 : 1
        },
        ph = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return oh(a, b, c)
        };

    function ih(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function hh(a, b, c) {
        for (var d = [], e = gh(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    xe: 1 * m[0] || 1,
                    od: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var lh = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        qh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        rh = /(^|\.)doubleclick\.net$/i,
        nh = function(a, b) {
            return rh.test(window.document.location.hostname) || "/" === b && qh.test(a)
        },
        fh = function() {
            return dh(window) ? window.document.cookie : ""
        },
        mh = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            rh.test(e) || qh.test(e) || a.push("none");
            return a
        },
        eh = function(a) {
            if (!$f().h() || !a || !ug()) return !0;
            if (!tg(a)) return !1;
            var b = qg(a);
            return null == b ? !0 : !!b
        };
    var sh = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ $g(a) & 2147483647) : String(b)
        },
        th = function(a) {
            return [sh(a), Math.round(Ga() / 1E3)].join(".")
        },
        wh = function(a, b, c, d, e) {
            var f = uh(b);
            return jh(a, f, vh(c), d, e)
        },
        xh = function(a, b, c, d) {
            var e = "" + uh(c),
                f = vh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        uh = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        vh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var yh = function() {
        me.dedupe_gclid || (me.dedupe_gclid = "" + th());
        return me.dedupe_gclid
    };
    var zh = function() {
        var a = !1;
        return a
    };
    var Ah = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Bh = function() {
            var a = Eb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new Ah, a.tidr = b);
            return b
        };
    var S = {
            C: "GTM-W8KNLGB",
            ib: "30808714"
        },
        Ch = {
            Ph: "GTM-W8KNLGB",
            Qh: "GTM-W8KNLGB"
        };
    S.Uc = Ca("");
    var Dh = function() {
            return Ch.Ph ? Ch.Ph.split("|") : [S.C]
        },
        Eh = function() {
            return Ch.Qh ? Ch.Qh.split("|") : []
        },
        Fh = function() {
            for (var a = Bh(), b = Dh(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = Dh(), d.destinations = Eh()) : a.container[b[c]] = {
                    state: 2,
                    containers: Dh(),
                    destinations: Eh()
                }
            }
            for (var e = Eh(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && M(93);
                g ? (g.state = 2, g.containers = Dh(), g.destinations = Eh()) : a.destination[e[f]] = {
                    state: 2,
                    containers: Dh(),
                    destinations: Eh()
                }
            }
            a.canonical[S.ib] =
                2
        },
        Gh = function(a) {
            return !!Bh().container[a]
        };

    function Hh() {
        return {
            ctid: S.C,
            isDestination: S.Uc
        }
    }
    var Ih = function() {
            var a = Bh().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Jh = function() {
            var a = {};
            k(Bh().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    var Kh = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        Lh = function(a) {
            var b = S.C.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = S.C;
            c.wk = le.Xc;
            c.zk = le.rf;
            c.ck = S.Uc ? 2 : 1;
            se ? (c.Ie = Kh[b], c.Ie || (c.Ie = 0)) : c.Ie = ye ? 13 : 10;
            we ? c.Lf = 1 : zh() ? c.Lf = 2 : c.Lf = 3;
            var d;
            var e = c.Ie,
                f = c.Lf;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + sd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Zk,
                l = 4 + d + (g ? "" + sd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.zk;
            m = n && rd.test(n) ?
                "" + sd(3, 2) + n : "";
            var p, q = c.wk;
            p = q ? "" + sd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var t;
            var r = c.ctid;
            if (r && a) {
                var u = r.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) t = "";
                else {
                    var w = u[1];
                    t = "" + sd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.ck || 0) + w
                }
            } else t = "";
            return l + m + p + t
        };

    function Mh(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Nh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Oh() {
        return hb ? !!ob && !!ob.platform : !1
    }

    function Ph() {
        return rb("iPhone") && !rb("iPod") && !rb("iPad")
    }

    function Qh() {
        Ph() || rb("iPad") || rb("iPod")
    };
    tb();
    sb() || rb("Trident") || rb("MSIE");
    rb("Edge");
    !rb("Gecko") || -1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge") || rb("Trident") || rb("MSIE") || rb("Edge"); - 1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge") && rb("Mobile");
    Oh() || rb("Macintosh");
    Oh() || rb("Windows");
    (Oh() ? "Linux" === ob.platform : rb("Linux")) || Oh() || rb("CrOS");
    var Rh = oa.navigator || null;
    Rh && (Rh.appVersion || "").indexOf("X11");
    Oh() || rb("Android");
    Ph();
    rb("iPad");
    rb("iPod");
    Qh();
    nb().toLowerCase().indexOf("kaios");
    var Sh = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Th = /#|$/,
        Uh = function(a, b) {
            var c = a.search(Th),
                d = Sh(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Vh = /[?&]($|#)/,
        Wh = function(a, b, c) {
            for (var d, e = a.search(Th), f = 0, g, l = []; 0 <= (g = Sh(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Vh, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var r = d.indexOf("?"),
                    u;
                0 > r || r > t ? (r = t, u = "") : u = d.substring(r + 1, t);
                q = [d.slice(0, r), u, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Xh = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Yf(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Yh = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Zh() {
        if (!C.head) return null;
        var a = $h("META");
        C.head.appendChild(a);
        a.httpEquiv = "origin-trial";
        a.content = 'A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';
        return a
    }
    var ai = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Xh(z.top) ? 1 : 2
        },
        $h = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function bi(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = $h("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        l = bb(g, e);
                    0 <= l && Array.prototype.splice.call(g, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Nh(e, "load", f);
            Nh(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var di = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Yh(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            ci(c, b)
        },
        ci = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else bi(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var ei = function() {};
    var fi = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        gi = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.M = {};
            this.vb = 0;
            var c;
            this.Z = null != (c = b.Hk) ? c : 500;
            var d;
            this.J = null != (d = b.al) ? d : !1;
            this.B = null
        };
    na(gi, ei);
    gi.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = ch(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.Z && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.Z));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = fi(c), c.internalBlockOnErrors = b.J, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            hi(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    gi.prototype.removeEventListener = function(a) {
        a && a.listenerId && hi(this, "removeEventListener", null, a.listenerId)
    };
    var ji = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = ii(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && ii(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? ii(a.purpose.legitimateInterests,
                b) && ii(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        ii = function(a, b) {
            return !(!a || !a[b])
        },
        hi = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (ki(a)) {
                li(a);
                var f = ++a.vb;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        ki = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        li = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Nh(a.m, "message", a.B))
        },
        mi = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = fi(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (di({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var ni = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        oi = Mh('', 500);

    function pi() {
        var a = me.tcf || {};
        return me.tcf = a
    }
    var vi = function() {
        var a = pi(),
            b = new gi(z, {
                Hk: -1
            });
        qi(b) && ri() && M(124);
        if (!ri() && !a.active && qi(b)) {
            a.active = !0;
            a.Fe = {};
            si();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) ti(a), ui(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in ni) ni.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                l;
                            for (l in ni)
                                if (ni.hasOwnProperty(l))
                                    if ("1" ===
                                        l) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = mi(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : ji(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[l] = ji(c, l, ni[l]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Fe = d, ui(a))
                    }
                })
            } catch (c) {
                ti(a), ui(a)
            }
        }
    };

    function ti(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function si() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = oi, a);
        Gg(b)
    }

    function qi(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != ki(a) ? !0 : !1
    }
    var ri = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function ui(a) {
        var b = {},
            c = (b.ad_storage = a.Fe["1"] ? "granted" : "denied", b);
        Hg(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: wi()
        })
    }
    var wi = function() {
            var a = pi();
            return a.active ? a.tcString || "" : ""
        },
        xi = function() {
            var a = pi();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        yi = function(a) {
            if (!ni.hasOwnProperty(String(a))) return !0;
            var b = pi();
            return b.active && b.Fe ? !!b.Fe[String(a)] : !0
        };
    var zi = function(a) {
            var b = String(a[bc.sb] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        Ai = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var Bi = {
            sampleRate: "0.005000",
            fi: "",
            ei: Number("5"),
            pl: Number("")
        },
        Ci;
    if (!(Ci = Ai)) {
        var Di = Math.random(),
            Ei = Bi.sampleRate;
        Ci = Di < Ei
    }
    var Fi = Ci,
        Gi = "https://www.googletagmanager.com/a?id=" + S.C + "&cv=3";

    function Hi() {
        return [Gi, "&v=3&t=t", "&pid=" + va(), "&rv=" + le.rf].join("")
    }
    var Ii = Hi();

    function Ji() {
        Ii = Hi()
    }
    var Ki = {},
        Li = "",
        Mi = "",
        Ni = "",
        Oi = "",
        Pi = [],
        Qi = "",
        Ri = "",
        Si = void 0,
        Ti = {},
        Ui = {},
        Vi = void 0,
        Wi = 5;
    0 < Bi.ei && (Wi = Bi.ei);
    var Xi = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Sj: function() {
                    return c < a ? !1 : Ga() - d[c % a] < b
                },
                tk: function() {
                    var f = c++ % a;
                    d[f] = Ga()
                }
            }
        }(Wi, 1E3),
        Yi = 1E3;

    function Zi(a) {
        var b = Si;
        if (void 0 === b) return "";
        var c = ab("GTM"),
            d = ab("TAGGING"),
            e = ab("HEALTH"),
            f = Ii,
            g = Ki[b] ? "" : "&es=1",
            l = Ti[b],
            m = $i(),
            n = Li,
            p = Mi,
            q = Ri,
            t = Ni,
            r = Oi,
            u;
        return [f, g, l, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", m, n, p, q, t, r, u, Qi ? "&dl=" + encodeURIComponent(Qi) : "", 0 < Pi.length ? "&tdp=" + Pi.join(".") : "", le.Xc ? "&x=" + le.Xc : "",
            "&z=0"
        ].join("")
    }

    function bj() {
        Vi && (z.clearTimeout(Vi), Vi = void 0);
        if (void 0 !== Si && (!Ki[Si] || Li || Mi))
            if (Ui[Si] || Xi.Sj() || 0 >= Yi--) M(1), Ui[Si] = !0;
            else {
                Xi.tk();
                var a = Zi(!0);
                Mb(a);
                if (Oi || Qi && 0 < Pi.length) {
                    var b = a.replace("/a?", "/td?");
                    Mb(b)
                }
                Ki[Si] = !0;
                Qi = Oi = Ni = Ri = Mi = Li = "";
                Pi = []
            }
    }

    function cj() {
        Vi || (Vi = z.setTimeout(bj, 500))
    }

    function dj() {
        2022 <= Zi().length && bj()
    }

    function $i() {
        return "&tc=" + Bc.filter(function(a) {
            return a
        }).length
    }
    var ej = function(a, b) {
            if (Fi && !Ui[a] && Si !== a) {
                bj();
                Si = a;
                Ni = Li = "";
                var c;
                c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
                Ti[a] = "&e=" + c + "&eid=" + a;
                cj()
            }
        },
        fj = function(a, b, c) {
            if (Fi && b) {
                var d = zi(b),
                    e = c + d;
                if (!Ui[a]) {
                    a !== Si && (bj(), Si = a);
                    Li = Li ? Li + "." + e : "&tr=" + e;
                    var f = b["function"];
                    if (!f) throw Error("Error: No function name given for function call.");
                    var g = (Dc[f] ? "1" : "2") + d;
                    Ni = Ni ? Ni + "." + g : "&ti=" + g;
                    cj();
                    dj()
                }
            }
        },
        gj = function(a, b, c) {
            if (Fi && void 0 !== a && !Ui[a]) {
                a !== Si && (bj(), Si = a);
                var d = c + b;
                Mi = Mi ? Mi + "." + d : "&epr=" +
                    d;
                cj();
                dj()
            }
        },
        hj = function(a, b, c) {},
        aj = void 0;
    ub();
    Ph() || rb("iPod");
    rb("iPad");
    !rb("Android") || vb() || ub() || tb() || rb("Silk");
    vb();
    !rb("Safari") || vb() || (sb() ? 0 : rb("Coast")) || tb() || (sb() ? 0 : rb("Edge")) || (sb() ? qb("Microsoft Edge") : rb("Edg/")) || (sb() ? qb("Opera") : rb("OPR")) || ub() || rb("Silk") || rb("Android") || Qh();
    var ij = {},
        jj = null,
        kj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!jj) {
                jj = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    ij[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === jj[q] && (jj[q] = p)
                    }
                }
            }
            for (var t = ij[f], r = Array(Math.floor(b.length / 3)), u = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    B = b[v + 2],
                    A = t[y >> 2],
                    D = t[(y & 3) << 4 | x >> 4],
                    I = t[(x & 15) << 2 | B >> 6],
                    H = t[B & 63];
                r[w++] = "" + A + D + I + H
            }
            var F = 0,
                L = u;
            switch (b.length - v) {
                case 2:
                    F = b[v + 1], L = t[(F & 15) << 2] || u;
                case 1:
                    var K = b[v];
                    r[w] = "" + t[K >> 2] + t[(K & 3) << 4 | F >> 4] + L + u
            }
            return r.join("")
        };
    var lj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function mj() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function nj() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function oj() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function pj() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function qj() {
        if (!pj()) return null;
        var a = mj();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(lj).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var rj, sj = function() {
            if (pj() && (rj = Ga(), !oj())) {
                var a = qj();
                a && (a.then(function() {
                    M(95);
                }), a.catch(function() {
                    M(96)
                }))
            }
        },
        uj = function(a) {
            var b = tj.Lk,
                c = function(g, l) {
                    try {
                        a(g, l)
                    } catch (m) {}
                },
                d = nj();
            if (d) c(d);
            else {
                var e = oj();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.ld || (c.ld = !0, M(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.ld || (c.ld = !0, M(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.ld || (c.ld = !0, M(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        vj = function(a, b) {
            a && (b.m[O.g.Kc] = a.architecture, b.m[O.g.Lc] = a.bitness, a.fullVersionList && (b.m[O.g.Mc] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.m[O.g.Nc] = a.mobile ? "1" : "0", b.m[O.g.Oc] = a.model, b.m[O.g.Pc] = a.platform, b.m[O.g.Qc] = a.platformVersion, b.m[O.g.Rc] = a.wow64 ? "1" : "0")
        };

    function wj(a, b, c, d) {
        var e, f = Number(null != a.Ya ? a.Ya : void 0);
        0 !== f && (e = new Date((b || Ga()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            ab: d
        }
    };
    var xj;
    var Bj = function() {
            var a = yj,
                b = zj,
                c = Aj(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Nb(C, "mousedown", d);
                Nb(C, "keyup", d);
                Nb(C, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Cj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Aj().decorators.push(f)
        },
        Dj = function(a, b, c) {
            for (var d = Aj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Ja(e, g.callback())
                }
            }
            return e
        };

    function Aj() {
        var a = Eb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Ej = /(.*?)\*(.*?)\*(.*)/,
        Fj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Gj = /^(?:www\.|m\.|amp\.)+/,
        Hj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Zj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var bk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Wa(String(d))))
            }
        var e = b.join("*");
        return ["1", ak(e), e].join("*")
    };

    function ak(a, b) {
        var c = [Cb.userAgent, (new Date).getTimezoneOffset(), Cb.userLanguage || Cb.language, Math.floor(Ga() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = xj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        xj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ xj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function ck() {
        return function(a) {
            var b = xf(z.location.href),
                c = b.search.replace("?", ""),
                d = sf(c, "_gl", !0) || "";
            a.query = dk(d) || {};
            var e = vf(b, "fragment").match(Zj("_gl"));
            a.fragment = dk(e && e[3] || "") || {}
        }
    }

    function ek(a, b) {
        var c = Zj(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var fk = function(a, b) {
            b || (b = "_gl");
            var c = Hj.exec(a);
            if (!c) return "";
            var d = c[1],
                e = ek(b, (c[2] || "").slice(1)),
                f = ek(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        gk = function(a) {
            var b = ck(),
                c = Aj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ja(d, e.query), a && Ja(d, e.fragment));
            return d
        },
        dk = function(a) {
            try {
                var b = hk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Xa(d[e + 1]);
                        c[f] = g
                    }
                    Za("TAGGING", 6);
                    return c
                }
            } catch (l) {
                Za("TAGGING",
                    8)
            }
        };

    function hk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Ej.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ak(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                Za("TAGGING", 7)
            }
        }
    }

    function ik(a, b, c, d) {
        function e(p) {
            p = ek(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Hj.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function jk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Dj(b, 1, c),
            e = Dj(b, 2, c),
            f = Dj(b, 3, c);
        if (Ka(d)) {
            var g = bk(d);
            c ? kk("_gl", g, a) : lk("_gl", g, a, !1)
        }
        if (!c && Ka(e)) {
            var l = bk(e);
            lk("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        lk(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        kk(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && ik(n, p, q)
            }
    }

    function lk(a, b, c, d) {
        if (c.href) {
            var e = ik(a, b, c.href, void 0 === d ? !1 : d);
            gb.test(e) && (c.href = e)
        }
    }

    function kk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = C.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = ik(a, b, c.action);
                gb.test(n) && (c.action = n)
            }
        }
    }

    function yj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || jk(e, e.hostname)
            }
        } catch (g) {}
    }

    function zj(a) {
        try {
            if (a.action) {
                var b = vf(xf(a.action), "host");
                jk(a, b)
            }
        } catch (c) {}
    }
    var mk = function(a, b, c, d) {
            Bj();
            Cj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        nk = function(a, b) {
            Bj();
            Cj(a, [uf(z.location, "host", !0)], b, !0, !0)
        },
        ok = function() {
            var a = C.location.hostname,
                b = Fj.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Gj, ""),
                m = e.replace(Gj, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        pk = function(a, b) {
            return !1 === a ? !1 : a || b || ok()
        };
    var qk = ["1"],
        rk = {},
        sk = {},
        uk = function(a) {
            return rk[tk(a)]
        },
        yk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = tk(a.prefix);
            if (!rk[c])
                if (vk(c, a.path, a.domain)) {
                    if (Se(1)) {
                        var d = sk[tk(a.prefix)];
                        wk(a, d ? d.id : void 0, d ? d.If : void 0)
                    }
                } else {
                    if (Se(2)) {
                        var e = zf("auiddc");
                        if (e) {
                            Za("TAGGING", 17);
                            rk[c] = e;
                            return
                        }
                    }
                    if (b) {
                        var f = tk(a.prefix),
                            g = th();
                        if (0 === xk(f, g, a)) {
                            var l = Eb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = g)
                        }
                        vk(c, a.path, a.domain)
                    }
                }
        };

    function wk(a, b, c) {
        var d = tk(a.prefix),
            e = rk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Ga() / 1E3)));
                    xk(d, l, a, 1E3 * g)
                }
            }
        }
    }

    function xk(a, b, c, d) {
        var e = xh(b, "1", c.domain, c.path),
            f = wj(c, d);
        f.ab = "ad_storage";
        return ph(a, e, f)
    }

    function vk(a, b, c) {
        var d = wh(a, b, c, qk, "ad_storage");
        if (!d) return !1;
        zk(a, d);
        return !0
    }

    function zk(a, b) {
        var c = b.split(".");
        5 === c.length ? (rk[a] = c.slice(0, 2).join("."), sk[a] = {
            id: c.slice(2, 4).join("."),
            If: Number(c[4]) || 0
        }) : 3 === c.length ? sk[a] = {
            id: c.slice(0, 2).join("."),
            If: Number(c[2]) || 0
        } : rk[a] = b
    }

    function tk(a) {
        return (a || "_gcl") + "_au"
    }

    function Ak(a) {
        ug() || a();
        yg(function() {
            qg("ad_storage") && a();
            zg(a, "ad_storage")
        }, ["ad_storage"])
    }

    function Bk(a) {
        var b = gk(!0),
            c = tk(a.prefix);
        Ak(function() {
            var d = b[c];
            if (d) {
                zk(c, d);
                var e = 1E3 * Number(rk[c].split(".")[1]);
                if (e) {
                    Za("TAGGING", 16);
                    var f = wj(a, e);
                    f.ab = "ad_storage";
                    var g = xh(d, "1", a.domain, a.path);
                    ph(c, g, f)
                }
            }
        })
    }

    function Ck(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                l = wh(a, e.path, e.domain, qk, "ad_storage");
            l && (g[a] = l);
            return g
        };
        Ak(function() {
            mk(f, b, c, d)
        })
    };
    var Dk = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Wf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function Ek(a, b) {
        var c = Dk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Wf] || (d[c[e].Wf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ba: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Wf].push(g)
            }
        }
        return d
    };
    var Fk = /^\w+$/,
        Gk = /^[\w-]+$/,
        Hk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Ik = function() {
            if (!$f().h() || !ug()) return !0;
            var a = qg("ad_storage");
            return null == a ? !0 : !!a
        },
        Jk = function(a, b) {
            tg("ad_storage") ? Ik() ? a() : zg(a, "ad_storage") : b ? Za("TAGGING", 3) : yg(function() {
                Jk(a, !0)
            }, ["ad_storage"])
        },
        Lk = function(a) {
            return Kk(a).map(function(b) {
                return b.ba
            })
        },
        Kk = function(a) {
            var b = [];
            if (!dh(z) || !C.cookie) return b;
            var c = gh(a, C.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    xd: d.xd
                }, e++) {
                var f = Mk(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.xd = g.ba;
                    var m = g.timestamp,
                        n = g.labels,
                        p = ua(b, function(q) {
                            return function(t) {
                                return t.ba === q.xd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Nk(p.labels, n || [])) : b.push({
                        version: l,
                        ba: d.xd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp
            });
            return Ok(b)
        };

    function Nk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Pk(a) {
        return a && "string" == typeof a && a.match(Fk) ? a : "_gcl"
    }
    var Rk = function() {
            var a = xf(z.location.href),
                b = vf(a, "query", !1, void 0, "gclid"),
                c = vf(a, "query", !1, void 0, "gclsrc"),
                d = vf(a, "query", !1, void 0, "wbraid"),
                e = vf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || sf(f, "gclid");
                c = c || sf(f, "gclsrc");
                d = d || sf(f, "wbraid")
            }
            return Qk(b, c, e, d)
        },
        Qk = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Gk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Gk)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Tk = function(a) {
            var b = Rk();
            Jk(function() {
                Sk(b, !1, a)
            })
        };

    function Sk(a, b, c, d, e) {
        function f(w, y) {
            var x = Uk(w, g);
            x && (ph(x, y, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Pk(c.prefix);
        d = d || Ga();
        var l = wj(c, d, !0);
        l.ab = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                t = Uk("gb", g),
                r = !1;
            if (!b)
                for (var u = Kk(t), v = 0; v < u.length; v++) u[v].ba === q && u[v].labels &&
                    0 < u[v].labels.length && (r = !0);
            r || f("gb", p(q))
        }
    }
    var Wk = function(a, b) {
            var c = gk(!0);
            Jk(function() {
                for (var d = Pk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Hk[f]) {
                        var g = Uk(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(Vk(l), Ga()),
                                n;
                            b: {
                                var p = m;
                                if (dh(z))
                                    for (var q = gh(g, C.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (Vk(q[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var r = wj(b, m, !0);
                                r.ab = "ad_storage";
                                ph(g, l, r)
                            }
                        }
                    }
                }
                Sk(Qk(c.gclid, c.gclsrc), !1, b)
            })
        },
        Uk = function(a, b) {
            var c = Hk[a];
            if (void 0 !== c) return b + c
        },
        Vk = function(a) {
            return 0 !== Xk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Mk(a) {
        var b = Xk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ba: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Xk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Gk.test(a[2]) ? [] : a
    }
    var Yk = function(a, b, c, d, e) {
            if (ta(b) && dh(z)) {
                var f = Pk(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Uk(a[m], f);
                            if (n) {
                                var p = gh(n, C.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Jk(function() {
                    mk(g, b, c, d)
                })
            }
        },
        Ok = function(a) {
            return a.filter(function(b) {
                return Gk.test(b.ba)
            })
        },
        Zk = function(a, b) {
            if (dh(z)) {
                for (var c = Pk(b.prefix), d = {}, e = 0; e < a.length; e++) Hk[a[e]] && (d[a[e]] = Hk[a[e]]);
                Jk(function() {
                    k(d, function(f, g) {
                        var l = gh(c + g, C.cookie, void 0, "ad_storage");
                        l.sort(function(r,
                            u) {
                            return Vk(u) - Vk(r)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Vk(m),
                                p = 0 !== Xk(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== Xk(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            Sk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function $k(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var al = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (ug()) {
                var c = Rk();
                if ($k(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    nk(function() {
                        return d
                    }, 3);
                    nk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        bl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Ik()) return e;
            var f = Kk(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.ba].concat(l.labels || [], [b]).join("."),
                    p = wj(c, m, !0);
                p.ab = "ad_storage";
                ph(a, n, p)
            }
            return e
        };

    function cl(a, b) {
        var c = Pk(b),
            d = Uk(a, c);
        if (!d) return 0;
        for (var e = Kk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function dl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var el = function(a) {
        var b = Math.max(cl("aw", a), dl(Ik() ? Ek() : {}));
        return Math.max(cl("gb", a), dl(Ik() ? Ek("_gac_gb", !0) : {})) > b
    };
    var fl = function(a, b) {
            var c = a && !Jg(O.g.H);
            return b && c ? "0" : b
        },
        il = function(a) {
            function b(u) {
                var v;
                me.reported_gclid || (me.reported_gclid = {});
                v = me.reported_gclid;
                var w, y = g;
                w = !g || ug() && !Jg(O.g.H) ? m + (u ? "gcu" : "gcs") : m + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
                if (!v[w]) {
                    v[w] = !0;
                    var x = [],
                        B = {},
                        A = function(fa, T) {
                            T && (x.push(fa + "=" + encodeURIComponent(T)), B[fa] = !0)
                        },
                        D = "https://www.google.com";
                    if (ug()) {
                        var I = Jg(O.g.H);
                        A("gcs", Kg());
                        u && A("gcu", "1");
                        vg() && A("gcd", Og());
                        fg().usedDeclare && A("gcc", "G1" + Cg(sg, !0));
                        A("rnd",
                            yh());
                        if ((!m || n && "aw.ds" !== n) && Jg(O.g.H)) {
                            var H = Lk("_gcl_aw");
                            A("gclaw", H.join("."))
                        }
                        A("url", String(z.location).split(/[?#]/)[0]);
                        A("dclid", fl(d, p));
                        I || (D = "https://pagead2.googlesyndication.com")
                    }
                    A("gdpr_consent", wi());
                    A("gdpr", xi());
                    "1" === gk(!1)._up && A("gtm_up", "1");
                    A("gclid", fl(d, m));
                    A("gclsrc", n);
                    if (!(B.gclid || B.dclid || B.gclaw) && (A("gbraid", fl(d, q)), !B.gbraid && ug() && Jg(O.g.H))) {
                        var F = Lk("_gcl_gb");
                        0 < F.length && A("gclgb", F.join("."))
                    }
                    A("gtm", Lh(!e));
                    g && Jg(O.g.H) && (yk(f || {}), y && A("auid", uk(f.prefix) || ""));
                    hl || a.Fh && A("did", a.Fh);
                    a.Ce && A("gdid", a.Ce);
                    a.ye && A("edid", a.ye);
                    var L = Q(64) ? nj() : null;
                    if (L) {
                        var K = function(fa, T) {
                            x.push(fa + "=" + encodeURIComponent(T));
                            B[fa] = !0
                        };
                        K("uaa", L.architecture);
                        K("uab", L.bitness);
                        L.fullVersionList && K("uafvl", L.fullVersionList.map(function(fa) {
                            return encodeURIComponent(fa.brand || "") + ";" + encodeURIComponent(fa.version || "")
                        }).join("|"));
                        K("uam", L.model);
                        K("uap", L.platform);
                        K("uapv", L.platformVersion);
                        K("uaw", L.wow64 ? "1" : "0")
                    }
                    var W = D + "/pagead/landing?" + x.join("&");
                    Tb(W)
                }
            }
            var c = !!a.we,
                d = !!a.qd,
                e = a.aa,
                f = void 0 === a.Hb ? {} : a.Hb,
                g = void 0 === a.hd ? !0 : a.hd,
                l = Rk(),
                m = l.gclid || "",
                n = l.gclsrc,
                p = l.dclid || "",
                q = l.gbraid || "",
                t = !c && ((!m || n && "aw.ds" !== n ? !1 : !0) || q),
                r = ug();
            if (t || r) r ? Zg(function() {
                b();
                Jg(O.g.H) || Pg(function(u) {
                    return b(!0, u.consentEventId, u.consentPriorityId)
                }, O.g.H)
            }, [O.g.H]) : b()
        },
        gl = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = le.ki || z._CONSENT_MODE_SALT;
            return a ?
                c ? String($g(b + a + c)) : "0" : ""
        },
        hl = !1;
    var jl = /[A-Z]+/,
        kl = /\s/,
        ll = function(a) {
            if (h(a)) {
                a = Ea(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (jl.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || kl.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            U: c + "-" + d[0],
                            K: d
                        }
                    }
                }
            }
        },
        nl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = ll(a[c]);
                d && (b[d.id] = d)
            }
            ml(b);
            var e = [];
            k(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function ml(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.U)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var ol = function(a, b, c, d) {
        var e = Kb(),
            f;
        if (1 === e) a: {
            var g = Ae;g = g.toLowerCase();
            for (var l = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var t = p[q].src;
                if (t) {
                    t = t.toLowerCase();
                    if (0 === t.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === t.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var ql = function(a, b, c) {
            if (z[a.functionName]) return b.Of && E(b.Of), z[a.functionName];
            var d = pl();
            z[a.functionName] = d;
            if (a.ue)
                for (var e = 0; e < a.ue.length; e++) z[a.ue[e]] = z[a.ue[e]] || pl();
            a.De && void 0 === z[a.De] && (z[a.De] = c);
            Jb(ol("https://", "http://", a.Vf), b.Of, b.gk);
            return d
        },
        pl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        rl = {
            functionName: "_googWcmImpl",
            De: "_googWcmAk",
            Vf: "www.gstatic.com/wcm/loader.js"
        },
        sl = {
            functionName: "_gaPhoneImpl",
            De: "ga_wpid",
            Vf: "www.gstatic.com/gaphone/loader.js"
        },
        tl = {
            hi: "",
            ej: "5"
        },
        ul = {
            functionName: "_googCallTrackingImpl",
            ue: [sl.functionName, rl.functionName],
            Vf: "www.gstatic.com/call-tracking/call-tracking_" + (tl.hi || tl.ej) + ".js"
        },
        vl = {},
        wl = function(a, b, c, d) {
            M(22);
            if (c) {
                d = d || {};
                var e = ql(rl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Za && (f.autoreplace = c);
                e(2, d.Za, f, c, 0, Fa(), d.options)
            }
        },
        xl = function(a, b, c, d) {
            M(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Fa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    vl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                            ak: g.K[0],
                            cl: g.K[1]
                        }, vl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.U
                        }, vl[g.id] = !0))
                }(e.gaData || e.adData) && ql(ul, d)(d.Za, e, d.options)
            }
        },
        yl = function() {
            var a = !1;
            return a
        },
        zl = function(a, b) {
            if (a)
                if (zh()) {} else {
                    if (h(a)) {
                        var c =
                            ll(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = R(b, O.g.Ki);
                    if (f && ta(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = ll(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.U && a.U === l.U) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = R(b, O.g.Tg),
                            n;
                        if (m) {
                            ta(m) ? n = m : n = [m];
                            var p = R(b, O.g.Rg),
                                q = R(b, O.g.Sg),
                                t = R(b, O.g.Ug),
                                r = R(b, O.g.Ji),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) xl(d, n[w], r, {
                                        Za: u,
                                        options: t
                                    });
                                    else if ("AW" === a.prefix && a.K[1]) yl() ? xl([a], n[w], r || "US", {
                                Za: u,
                                options: t
                            }) : wl(a.K[0], a.K[1], n[w], {
                                Za: u,
                                options: t
                            });
                            else if ("UA" === a.prefix)
                                if (yl()) xl([a], n[w], r || "US", {
                                    Za: u
                                });
                                else {
                                    var y = a.U,
                                        x = n[w],
                                        B = {
                                            Za: u
                                        };
                                    M(23);
                                    if (x) {
                                        B = B || {};
                                        var A = ql(sl, B, y),
                                            D = {};
                                        void 0 !== B.Za ? D.receiver = B.Za : D.replace = x;
                                        D.ga_wpid = y;
                                        D.destination = x;
                                        A(2, Fa(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var Al = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = J(c.eventMetadata || {});
        this.I = !1
    };
    Al.prototype.copyToHitData = function(a, b) {
        var c = R(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var Bl = function(a, b, c) {
        var d = bf(a.target.U);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Cl(a) {
        return {
            getDestinationId: function() {
                return a.target.U
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            abort: function() {
                a.I = !0
            },
            getFromEventContext: function(b) {
                return R(a.h,
                    b)
            },
            jl: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };
    var El = function(a) {
            var b = Dl[a.target.U];
            if (!a.I && b)
                for (var c = Cl(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.I = !0
                    }
                    if (a.I) break
                }
        },
        Dl = {};
    var Hl = function(a) {
            a = a || {};
            var b;
            if (!ug() || qg(Fl)) {
                (b = Gl(a)) || (b = th());
                var c = a,
                    d = tk(c.prefix);
                wk(c, b);
                delete rk[d];
                delete sk[d];
                vk(d, c.path, c.domain);
                return Gl(a)
            }
        },
        Gl = function(a) {
            if (!ug() || qg(Fl)) {
                a = a || {};
                yk(a, !1);
                var b = sk[tk(Pk(a.prefix))];
                if (b && !(18E5 < Ga() - 1E3 * b.If)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < Ga() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        Fl = O.g.H;
    var Il = function(a, b) {
            var c = me.joined_auid = me.joined_auid || {},
                d = (a || "_gcl") + "." + b;
            if (c[d]) return !0;
            c[d] = !0;
            return !1
        },
        Jl = function() {
            var a = xf(z.location.href).search.replace("?", "");
            return "1" === sf(a, "gad", !0)
        },
        Kl = function(a) {
            var b = [];
            k(a, function(c, d) {
                d = Ok(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ba);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Ml = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = zf("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Pk(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !Jg(Ll) && c,
                    g;
                g = Rk()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var l = Uk(a, e);
            return l ? Lk(l) : []
        },
        Nl = function(a, b) {
            tg(Ll) ? Jg(Ll) ? a() : zg(a, Ll) : b ? M(42) : Zg(function() {
                Nl(a, !0)
            }, [Ll])
        },
        Ll = O.g.H,
        Ol = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Pl = /^www.googleadservices.com$/,
        Ql = function(a, b) {
            return Ml("aw", a, b)
        },
        Rl = function(a, b) {
            return Ml("dc", a, b)
        },
        Sl = function(a) {
            var b = zf("gac");
            return b ? !Jg(Ll) && a ? "0" : decodeURIComponent(b) : Kl(Ik() ? Ek() : {})
        },
        Tl = function(a) {
            var b = zf("gacgb");
            return b ? !Jg(Ll) && a ? "0" : decodeURIComponent(b) :
                Kl(Ik() ? Ek("_gac_gb", !0) : {})
        },
        Ul = function(a) {
            var b = Rk(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw",
                g = Q(93) && Jl();
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                ba: d,
                ed: f
            });
            e && c.push({
                ba: e,
                ed: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                ba: b.gbraid,
                ed: "gb"
            });
            Q(77) && 0 === c.length && "aw.ds" === f && c.push({
                ba: "",
                ed: "aw.ds"
            });
            Nl(function() {
                yk(a);
                var l = uk(a.prefix);
                if (l) {
                    var m = ["auid=" + l];
                    if (Q(15)) {
                        var n = C.referrer ? vf(xf(C.referrer), "host") : "";
                        0 === c.length && (Q(88) ? Ol.test(n) || Pl.test(n) : Ol.test(n)) && c.push({
                            ba: "",
                            ed: ""
                        });
                        if (0 === c.length && !g) return;
                        n && m.push("ref=" + encodeURIComponent(n));
                        var p = 1 === ai() ? z.top.location.href : z.location.href;
                        p = p.replace(/[\?#].*$/, "");
                        m.push("url=" + encodeURIComponent(p));
                        m.push("tft=" + Ga());
                        var q = Wb();
                        void 0 !== q && m.push("tfd=" + Math.round(q));
                        if (Q(76)) {
                            var t = ai();
                            m.push("frm=" + t)
                        }
                        g && m.push("gad=1")
                    }
                    if (0 < c.length)
                        for (var r = 0; r < c.length; r++) {
                            var u = c[r],
                                v = u.ba,
                                w = u.ed;
                            if (!Il(a.prefix, w + "." + v)) {
                                var y = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                                "" !== v ? y = "gb" === w ? y + "&wbraid=" + v : y + "&gclid=" + v + "&gclsrc=" +
                                    w : "aw.ds" === w && (y += "&gclsrc=aw.ds");
                                Tb(y)
                            }
                        } else if (g && !Il(a.prefix, "gad")) {
                            var x = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                            Tb(x)
                        }
                }
            })
        },
        Vl = function(a) {
            return zf("gclaw") || zf("gac") || 0 < (Rk().aw || []).length ? !1 : 0 < (Rk().gb || []).length ? !0 : el(a)
        };
    var Wl = function(a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.m = e;
            this.J = f;
            this.Z = g;
            this.B = l;
            this.eventMetadata = m;
            this.N = n;
            this.R = p;
            this.D = q
        },
        R = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.m[b]) return a.m[b];
            Fi && Xl(a, a.J[b], a.Z[b]) && (M(71), M(79));
            return void 0 !== a.J[b] ? a.J[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        Yl = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.m);
            b(a.J);
            if (Fi)
                for (var d = Object.keys(a.Z), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        M(71);
                        M(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        Zl = function(a, b, c) {
            function d(m) {
                G(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.J[b]), d(a.m[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (Fi) {
                var g = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.Z[b]), d(a.m[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Xl(a, e, l)) M(71), M(81);
                f = g;
                e = l
            }
            return f ? e : void 0
        },
        $l = function(a) {
            var b = [O.g.Bc, O.g.Kd, O.g.Ld, O.g.Md, O.g.Nd, O.g.Od, O.g.Pd],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.m)) return c;
            e(a.J);
            if (Fi) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.Z);
                Xl(a, c, f) && (M(71), M(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        Xl = function(a, b, c) {
            if (!Fi) return !1;
            try {
                if (b === c) return !1;
                var d = Zb(b);
                if (d !== Zb(c) || !(G(b) && G(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Xl(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Xl(a, b[g], c[g])) return !0
                }
            } catch (l) {
                M(72)
            }
            return !1
        },
        am = function(a, b) {
            this.Si = a;
            this.Ti = b;
            this.J = {};
            this.jh = {};
            this.h = {};
            this.M = {};
            this.m = {};
            this.Tc = {};
            this.B = {};
            this.vc = function() {};
            this.vb = function() {};
            this.Z = !1
        },
        bm = function(a, b) {
            a.J = b;
            return a
        },
        cm = function(a, b) {
            a.jh = b;
            return a
        },
        dm = function(a, b) {
            a.h = b;
            return a
        },
        em = function(a, b) {
            a.M = b;
            return a
        },
        fm = function(a, b) {
            a.m = b;
            return a
        },
        gm = function(a,
            b) {
            a.Tc = b;
            return a
        },
        hm = function(a, b) {
            a.B = b || {};
            return a
        },
        im = function(a, b) {
            a.vc = b;
            return a
        },
        jm = function(a, b) {
            a.vb = b;
            return a
        },
        km = function(a) {
            a.Z = !0;
            return a
        },
        lm = function(a) {
            return new Wl(a.Si, a.Ti, a.J, a.jh, a.h, a.M, a.m, a.Tc, a.B, a.vc, a.vb, a.Z)
        };
    var nm = function(a, b) {
            var c = a.Kf,
                d = a.Yf;
            a.xf && (pk(c[O.g.Yb], !!c[O.g.P]) && (Wk(mm, b), Q(73) && Bk(b)), Tk(b), Zk(mm, b), Ul(b));
            c[O.g.P] && (Yk(mm, c[O.g.P], c[O.g.Bb], !!c[O.g.rb], b.prefix), Q(73) && (Ck(tk(b.prefix), c[O.g.P], c[O.g.Bb], !!c[O.g.rb], b), Ck("FPAU", c[O.g.P], c[O.g.Bb], !!c[O.g.rb], b)));
            d && al(mm)
        },
        om = function(a, b, c, d) {
            var e = a.Zf,
                f = a.callback,
                g = a.Mf;
            if ("function" === typeof f)
                if (e === O.g.jb && void 0 === g) {
                    var l = d(b.prefix, c);
                    0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l)
                } else e === O.g.Sb ? (M(65), yk(b, !1), f(uk(b.prefix))) :
                    f(g)
        },
        mm = ["aw", "dc", "gb"];
    var pm = function() {
        var a = Cb && Cb.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };

    function qm() {
        return "attribution-reporting"
    }

    function rm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var sm = !1;

    function tm() {
        if (rm("join-ad-interest-group") && ra(Cb.joinAdInterestGroup)) return !0;
        sm || (Zh(), sm = !0);
        return rm("join-ad-interest-group") && ra(Cb.joinAdInterestGroup)
    }

    function um(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ga() - d) {
                Za("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Za("TAGGING", 10);
                return
            }
        } catch (e) {}
        Lb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ga()
        }, c)
    }

    function vm() {
        return "https://td.doubleclick.net"
    };
    var wm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        xm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        ym = /^\d+\.fls\.doubleclick\.net$/,
        zm = /;gac=([^;?]+)/,
        Am = /;gacgb=([^;?]+)/,
        Bm = /;gclaw=([^;?]+)/,
        Cm = /;gclgb=([^;?]+)/;

    function Dm(a, b) {
        if (ym.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(wm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].ba);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Em = function(a, b, c) {
        var d = Ik() ? Ek("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = bl("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            Dj: f ? e.join(";") : "",
            Cj: Dm(d, Am)
        }
    };

    function Fm(a, b, c) {
        if (ym.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match(xm)) return [{
                ba: d[1]
            }]
        } else return Kk((a || "_gcl") + b);
        return []
    }
    var Gm = function(a) {
            return Fm(a, "_aw", Bm).map(function(b) {
                return b.ba
            }).join(".")
        },
        Hm = function(a) {
            return Fm(a, "_gb", Cm).map(function(b) {
                return b.ba
            }).join(".")
        },
        Im = function(a, b) {
            var c = bl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Jm = function() {
        if (ra(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Km = function(a) {
            if (null != a) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        },
        Lm = function() {
            var a = C.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        Mm = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        Nm = function(a, b) {
            ta(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        Om = function(a) {
            var b = a.target.K[0];
            if (b) {
                a.m[O.g.Cc] = b;
                var c = a.target.K[1];
                c && (a.m[O.g.Sa] = c)
            } else a.I = !0
        },
        Pm = function(a) {
            if (Nm(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.m[O.g.Sa],
                    c = !0 === R(a.h, O.g.Se);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && Mm(a);
                        Vf() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.I = !0);
                        break;
                    case "remarketing":
                        !c && b || Mm(a)
                }
                a.m[O.g.lh] = a.metadata.is_gcp_conversion ?
                    "www.google.com" : "www.googleadservices.com"
            }
        },
        Qm = function(a) {
            Nm(a, ["conversion", "remarketing"])
        },
        Rm = function(a) {
            if (Nm(a, ["conversion", "remarketing"])) {
                var b = ai();
                a.m[O.g.Mg] = b;
                var c = R(a.h, O.g.ja);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                a.m[O.g.ja] = Km(c);
                a.copyToHitData(O.g.Da, C.referrer);
                a.m[O.g.Cb] = Lm();
                a.copyToHitData(O.g.xa);
                var d = cf();
                a.m[O.g.Eb] = d.width + "x" + d.height;
                if (Q(86)) {
                    for (var e, f = z, g = f; f && f != f.parent;) f = f.parent, Xh(f) && (g = f);
                    e = g;
                    var l;
                    var m = e.location.href;
                    if (e === e.top) l = {
                        url: m,
                        Tj: !0
                    };
                    else {
                        var n = !1,
                            p = e.document;
                        p && p.referrer && (m = p.referrer, e.parent === e.top && (n = !0));
                        var q = e.location.ancestorOrigins;
                        if (q) {
                            var t = q[q.length - 1];
                            t && -1 === m.indexOf(t) && (n = !1, m = t)
                        }
                        l = {
                            url: m,
                            Tj: n
                        }
                    }
                    var r = l;
                    r.url && c !== r.url && (a.m[O.g.ff] = Km(r.url))
                }
            }
        },
        Sm = function(a) {
            Nm(a, ["conversion", "remarketing"]) && (a.copyToHitData(O.g.ma), a.copyToHitData(O.g.da), a.copyToHitData(O.g.ra), "remarketing" === a.metadata.hit_type && a.copyToHitData(O.g.ya))
        },
        Tm = function(a) {
            if (Q(13))
                if (!pj()) M(87);
                else if (void 0 !== rj) {
                M(85);
                var b = nj();
                b ? vj(b, a) : M(86)
            }
        },
        Vm = function(a) {
            Nm(a, ["conversion"]) && (!0 === z._gtmpcm || pm() ? a.m[O.g.zb] = "2" : Q(7) && (Um || rm(qm()) || (Zh(), Um = !0), rm(qm()) && (a.m[O.g.zb] = "1")))
        },
        Wm = function(a) {
            Nm(a, ["conversion", "remarketing"]) && Q(9) && Jg(O.g.H) && !1 !== R(a.h, O.g.wa) && !1 !== R(a.h, O.g.W) && !1 !== R(a.h, O.g.yb) && !1 !== R(a.h, O.g.Ka) && tm() && (a.m[O.g.Ag] = "1", a.metadata.send_fledge_experiment = !0)
        },
        Xm = function(a) {
            var b = function(d) {
                return R(a.h, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(O.g.qa);
            var c = {
                prefix: b(O.g.Ba) ||
                    b(O.g.Ia),
                domain: b(O.g.Oa),
                Ya: b(O.g.Ca),
                flags: b(O.g.Pa)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(O.g.ia) && !1 !== b(O.g.ia);
            a.metadata.allow_ad_personalization = !1 !== b(O.g.W)
        },
        Ym = function(a) {
            if (Bl(a, "ccd_add_1p_data", !1) && Jg(O.g.H)) {
                var b = Qf(a.h);
                if (Sf(b)) {
                    var c = R(a.h, O.g.ka);
                    null === c ? a.metadata.user_data_from_code = null : (b.enable_code && G(c) && (a.metadata.user_data_from_code = c), G(b.selectors) && (a.metadata.user_data_from_manual = Pf(b.selectors)))
                }
            }
        },
        Zm = function(a) {
            var b = !a.metadata.send_user_data_hit &&
                Nm(a, ["conversion", "user_data_web"]),
                c = !Bl(a, "ccd_add_1p_data", !1) && Nm(a, "user_data_lead");
            if ((b || c) && Jg(O.g.H)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.h,
                    f = void 0,
                    g = R(e, O.g.ka);
                if (d) {
                    var l = (R(e, O.g.Ec) || {})[a.m[O.g.Sa]];
                    if (!0 === R(e, O.g.Fd) || l) {
                        var m;
                        var n;
                        if (l) b: {
                            switch (l.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && G(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = l.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = Pf(l[O.g.yg]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = z.enhanced_conversion_data;
                        var q = n,
                            t = (l || {}).enhanced_conversions_mode,
                            r;
                        if (q) {
                            if ("manual" === t) switch (q._tag_mode) {
                                case "CODE":
                                    r = "c";
                                    break;
                                case "AUTO":
                                    r = "a";
                                    break;
                                case "MANUAL":
                                    r = "m";
                                    break;
                                default:
                                    r = "c"
                            } else r = "automatic" === t ? Uf(l) ? "a" : "m" : "c";
                            m = {
                                cb: q,
                                di: r
                            }
                        } else m = {
                            cb: q,
                            di: void 0
                        };
                        var u = m,
                            v = u.di;
                        f = u.cb;
                        a.m[O.g.jf] = v
                    }
                } else {
                    if (a.metadata.is_config_command || !a.h.D && !Rf(a.h)) return;
                    Sf(Qf(a.h)) && null !== g && (G(g) ? f = g : f = Tf(Qf(a.h)), f && Mm(a))
                }
                a.metadata.user_data = f
            }
        },
        $m = function(a) {
            Nm(a, ["conversion", "remarketing"]) && (a.h.D ? "conversion" !==
                a.metadata.hit_type && a.eventName && (a.m[O.g.zg] = a.eventName) : a.m[O.g.zg] = a.eventName, k(a.h.h, function(b, c) {
                    ke[b.split(".")[0]] || (a.m[b] = c)
                }))
        },
        an = function(a) {
            if (a.eventName === O.g.oa && (a.metadata.is_config_command = !0, Nm(a, "conversion") && (a.metadata.speculative = !0), !Nm(a, "remarketing") || !1 !== R(a.h, O.g.yb) && !1 !== R(a.h, O.g.Ka) || (a.metadata.speculative = !0), Nm(a, "landing_page"))) {
                var b = R(a.h, O.g.nb),
                    c = R(a.h, O.g.sa) || {},
                    d = R(a.h, O.g.Wa),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                nm({
                    xf: e,
                    Dh: b,
                    Kf: c,
                    Yf: d
                }, f);
                zl(a.target, a.h);
                il({
                    we: !1,
                    qd: a.metadata.redact_ads_data,
                    aa: a.target.id,
                    eventId: a.h.eventId,
                    priorityId: a.h.priorityId,
                    Hb: e ? f : void 0,
                    hd: e,
                    Fh: a.m[O.g.cf],
                    Ce: a.m[O.g.qb],
                    ye: a.m[O.g.pb]
                });
                a.I = !0
            }
        },
        bn = function(a) {
            if (!Bl(a, "hasPreAutoPiiCcdRule", !1)) {
                var b = Q(50);
                if ((!Q(49) || b || a.h.D) && Nm(a, "conversion") && Jg(O.g.H)) {
                    var c = (R(a.h, O.g.Ec) || {})[a.m[O.g.Sa]],
                        d = a.m[O.g.Cc],
                        e;
                    if (!(e = Uf(c)))
                        if (Ze() && Ff)
                            if (Gf) e = !0;
                            else {
                                var f = bf("AW-" + d);
                                e = !!f && !!f.preAutoPii
                            }
                    else e = !1;
                    if (e) {
                        var g = Ga(),
                            l = Mf({
                                jd: !0,
                                kd: !0,
                                Bk: !0
                            });
                        if (0 !== l.elements.length) {
                            for (var m = [], n = 0; n < l.elements.length; ++n) {
                                var p = l.elements[n];
                                m.push(p.querySelector + "*" + Nf(p) + "*" + p.type)
                            }
                            a.m[O.g.ah] = m.join("~");
                            var q = l.kk;
                            q && (a.m[O.g.bh] = q.querySelector, a.m[O.g.Zg] = Nf(q));
                            a.m[O.g.Yg] = String(Ga() - g);
                            a.m[O.g.dh] = l.status
                        }
                    }
                }
            }
        },
        cn = function(a) {
            if (a.eventName === O.g.Aa && !a.h.D) {
                if (!a.metadata.consent_updated && Nm(a, "conversion")) {
                    var b = R(a.h, O.g.Ta);
                    if ("function" !== typeof b) return;
                    var c = String(R(a.h, O.g.Ja)),
                        d = a.m[c],
                        e = R(a.h, c);
                    c === O.g.jb || c ===
                        O.g.Sb ? om({
                            Zf: c,
                            callback: b,
                            Mf: e
                        }, a.metadata.cookie_options, a.metadata.redact_ads_data, Ql) : b(d || e)
                }
                a.I = !0
            }
        },
        dn = function(a) {
            if (Nm(a, "conversion") && Jg(O.g.H) && (a.m[O.g.bc] || a.m[O.g.Xb])) {
                var b = a.m[O.g.Sa],
                    c = J(a.metadata.cookie_options),
                    d = Pk(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.m[O.g.bc]) {
                    var e = Im(b, c);
                    e && (a.m[O.g.fh] = e)
                }
                if (a.m[O.g.Xb]) {
                    var f = Em(b, c).Dj;
                    f && (a.m[O.g.Jg] = f)
                }
            }
        },
        en = function(a) {
            var b = Q(4),
                c = a.h,
                d, e, f;
            if (!b) {
                var g = Zl(c, O.g.V);
                d = Pa(G(g) ? g : {})
            }
            var l = Zl(c, O.g.V, 1),
                m = Zl(c, O.g.V, 2);
            e = Pa(G(l) ?
                l : {}, ".");
            f = Pa(G(m) ? m : {}, ".");
            b || (a.m[O.g.cf] = d);
            a.m[O.g.qb] = e;
            a.m[O.g.pb] = f
        },
        fn = function(a) {
            if (Nm(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== O.g.Ga || (a.copyToHitData(O.g.X), b && (a.copyToHitData(O.g.Jd), a.copyToHitData(O.g.Hd), a.copyToHitData(O.g.Id), a.copyToHitData(O.g.Gd), a.m[O.g.rg] = a.eventName))
            }
        },
        gn = function(a) {
            if (Nm(a, ["conversion", "remarketing"])) {
                var b = a.h,
                    c = R(b, O.g.Db);
                if (!0 === c || !1 === c) a.m[O.g.Db] = c;
                var d = R(b, O.g.W);
                if (!0 === d || !1 === d) a.m[O.g.ne] = !d;
                !1 === d && Nm(a, "remarketing") && (a.I = !0)
            }
        },
        hn = function(a) {
            Nm(a, "conversion") && (a.copyToHitData(O.g.Fc), a.copyToHitData(O.g.Rd), a.copyToHitData(O.g.Ic), a.copyToHitData(O.g.Ud), a.copyToHitData(O.g.ob), a.copyToHitData(O.g.Sd))
        },
        jn = function(a) {
            El(a);
        },
        kn = function(a) {
            if (Nm(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (ra(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.m[O.g.Lg] = c)
                } catch (d) {}
            }
        },
        ln = function(a) {
            if (Nm(a, ["conversion", "remarketing"])) {
                var b = Jm();
                void 0 !== b && (a.m[O.g.eh] = b || "error");
                var c = xi();
                c && (a.m[O.g.ae] = c);
                var d = wi();
                d && (a.m[O.g.ke] = d)
            }
        },
        mn = function(a) {
            Nm(a, ["conversion"]) && "1" === gk(!1)._up && (a.m[O.g.fe] = !0)
        },
        nn = function(a) {
            Nm(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !Jg(O.g.H))
        },
        on = function(a) {
            if (Nm(a, ["conversion", "user_data_lead", "user_data_web"]) && Jg(O.g.H) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c = Pk(b.prefix);
                "_gcl" ===
                c && (c = "");
                var d = c;
                if (ym.test(C.location.host) ? Bm.test(C.location.href) || zm.test(C.location.href) : !el(d)) {
                    var e = Gm(c);
                    e && (a.m[O.g.jb] = e);
                    if (!c) {
                        var f = Dm(Ik() ? Ek() : {}, zm);
                        f && (a.m[O.g.Zd] = f)
                    }
                } else {
                    var g = Hm(c);
                    g && (a.m[O.g.bc] = g);
                    if (!c) {
                        var l = a.m[O.g.Sa];
                        b = J(b);
                        b.prefix = c;
                        var m = Em(l, b, !0).Cj;
                        m && (a.m[O.g.Xb] = m)
                    }
                }
            }
        },
        pn = function(a) {
            if (Nm(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && Jg(O.g.H)) {
                var b = !Q(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c =
                        a.metadata.cookie_options;
                    yk(c, "conversion" === a.metadata.hit_type && a.eventName !== O.g.Aa);
                    a.m[O.g.Sb] = uk(c.prefix)
                }
            }
        },
        qn = function(a) {
            if (Nm(a, ["conversion"])) {
                var b = Gl(a.metadata.cookie_options);
                if (b && !a.m[O.g.ma]) {
                    var c = th(a.m[O.g.Sa]);
                    a.m[O.g.ma] = c
                }
                b && (a.m[O.g.Va] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        rn = function(a) {
            var b = !Jg(O.g.H);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.I = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.I = b;
                    break;
                case "conversion":
                    a.metadata.consent_updated &&
                        (a.m[O.g.Cd] = !0)
            }
        },
        sn = function(a) {
            Nm(a, ["conversion"]) && a.h.eventMetadata.is_external_event && (a.m[O.g.mh] = !0)
        },
        tn = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    Mm(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    Mm(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && M(b);
            !0 === a.metadata.speculative && (a.I = !0)
        },
        Um = !1;
    var un = {
        F: {
            ag: "ads_conversion_hit",
            Ne: "container_execute_start",
            gg: "container_setup_end",
            Oe: "container_setup_start",
            fg: "container_execute_end",
            hg: "container_yield_end",
            Pe: "container_yield_start",
            gh: "event_execute_end",
            hh: "event_setup_end",
            Sc: "event_setup_start",
            ih: "ga4_conversion_hit",
            Vc: "page_load",
            Wk: "pageview",
            tb: "snippet_load",
            th: "tag_callback_error",
            uh: "tag_callback_failure",
            vh: "tag_callback_success",
            wh: "tag_execute_end",
            fc: "tag_execute_start"
        }
    };
    var vn = !1,
        wn = "L S Y E TC HTC".split(" "),
        xn = ["S", "E"],
        yn = ["TS", "TE"];
    var Zn = function(a) {},
        $n = function(a) {},
        zn = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var l = {};
            return l
        },
        An = function(a) {
            var b = !1;
            return b
        },
        Bn = function(a, b) {},
        ao = function() {
            var a = {};
            return a
        },
        Sn = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        bo = function() {},
        co = function(a, b, c) {};
    var eo = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var fo = function(a, b, c) {
        var d = Uh(a, "fmt");
        if (b) {
            var e = Uh(a, "random"),
                f = Uh(a, "label") || "";
            if (!e) return !1;
            var g = kj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!eo(g, b)) return !1
        }
        d && 4 != d && (a = Wh(a, "rfmt", d));
        var l = Wh(a, "fmt", 4);
        Jb(l, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var go = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    l;
                for (l in d) "google_business_vertical" !== l && (l in g || (g[l] = []), g[l].push(d[l]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        ho = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        io = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        ko = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(jo(d.value)), e.push(jo(d.quantity)),
                    e.push(jo(d.item_id)), e.push(jo(d.start_date)), e.push(jo(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        jo = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        mo = function(a, b) {
            var c = lo(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        lo = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            k(a, function(c, d) {
                var e, f;
                if (ta(d)) {
                    for (var g = [], l = 0; l < d.length; ++l) {
                        var m = no(d[l]);
                        void 0 != m && g.push(m)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    no(d);
                e = f;
                var n = no(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        no = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        oo = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            k(b, d);
            return c.join("&")
        },
        po = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.m[O.g.Cc],
                e = Jg(O.g.H),
                f = [],
                g, l = a.h.N,
                m, n = zh() ? 2 : 3,
                p = 0,
                q = function(w) {
                    f.push(w);
                    w.Ra && p++
                };
            switch (c) {
                case "conversion":
                    m = "pagead/conversion";
                    var t = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", m = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (t = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({
                        Xa: "" + g + m + "/" + d + "/?" + oo(a, b) + t,
                        format: n,
                        Ra: !0,
                        attributes: Q(89) ? {
                            attributionsrc: ""
                        } : void 0
                    });
                    a.metadata.send_ccm_parallel_ping && q({
                        Xa: "" + g + "ccm/conversion/" + d + "/?" + oo(a, b) + t,
                        format: 2,
                        Ra: !0
                    });
                    a.metadata.is_gcp_conversion && (t = "&gcp=1&ct_cookie_present=1", q({
                        Xa: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + oo(a, b) + t,
                        format: n,
                        Ra: !0
                    }));
                    break;
                case "remarketing":
                    var r = b.data || "",
                        u = go(ho(a.m[O.g.X]));
                    if (u.length) {
                        for (var v = 0; v < u.length; v++) b.data = mo(r, u[v]), q({
                                Xa: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + oo(a, b),
                                format: n,
                                Ra: !0
                            }),
                            a.metadata.send_fledge_experiment && q({
                                Xa: vm() + "/td/rul/" + d + "?" + oo(a, b),
                                format: 4,
                                Ra: !1
                            }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        Xa: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + oo(a, b),
                        format: n,
                        Ra: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        Xa: "https://google.com/pagead/form-data/" + d + "?" + oo(a, b),
                        format: 1,
                        Ra: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        Xa: "https://google.com/ccm/form-data/" + d + "?" + oo(a, b),
                        format: 1,
                        Ra: !0
                    })
            }
            1 < f.length && ra(a.h.N) &&
                (l = Ra(a.h.N, p));
            zh() || "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
                Xa: vm() + "/td/rul/" + d + "?" + oo(a, b),
                format: 4,
                Ra: !1
            });
            return {
                N: l,
                Kj: f
            }
        },
        qo = function(a, b, c, d, e, f) {
            $n(c);
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    Tb(a);
                    e && e();
                    break;
                case 2:
                    Mb(a, g, void 0, f);
                    break;
                case 3:
                    var l = !1;
                    try {
                        l = fo(a, g, f)
                    } catch (p) {
                        l = !1
                    }
                    l || qo(a, 2, c, d, g, f);
                    break;
                case 4:
                    var m = "AW-" + c.m[O.g.Cc],
                        n = c.m[O.g.Sa];
                    n && (m = m + "/" + n);
                    um(a, m)
            }
        },
        ro = {},
        so = (ro[O.g.Cd] = "gcu", ro[O.g.jb] = "gclaw", ro[O.g.Sb] = "auid", ro[O.g.Gd] =
            "dscnt", ro[O.g.Hd] = "fcntr", ro[O.g.Id] = "flng", ro[O.g.Jd] = "mid", ro[O.g.rg] = "bttype", ro[O.g.Sa] = "label", ro[O.g.zb] = "capi", ro[O.g.ra] = "currency_code", ro[O.g.Rd] = "vdltv", ro[O.g.Ci] = "_dbg", ro[O.g.Ud] = "oedeld", ro[O.g.pb] = "edid", ro[O.g.Ag] = "fledge", ro[O.g.Zd] = "gac", ro[O.g.Xb] = "gacgb", ro[O.g.Jg] = "gacmcov", ro[O.g.ae] = "gdpr", ro[O.g.qb] = "gdid", ro[O.g.Lg] = "gsaexp", ro[O.g.Mg] = "frm", ro[O.g.fe] = "gtm_up", ro[O.g.cf] = "did", ro[O.g.Fc] = void 0, ro[O.g.Cb] = "tiba", ro[O.g.Db] = "rdp", ro[O.g.Va] = "ecsid", ro[O.g.Ic] = "delopc", ro[O.g.ke] =
            "gdpr_consent", ro[O.g.ma] = "oid", ro[O.g.Yg] = "ec_lat", ro[O.g.Zg] = "ec_meta", ro[O.g.ah] = "ec_m", ro[O.g.bh] = "ec_sel", ro[O.g.dh] = "ec_s", ro[O.g.jf] = "ec_mode", ro[O.g.ya] = "userId", ro[O.g.eh] = "us_privacy", ro[O.g.da] = "value", ro[O.g.bc] = "gclgb", ro[O.g.fh] = "mcov", ro[O.g.lh] = "hn", ro[O.g.mh] = "gtm_ee", ro[O.g.ne] = "npa", ro[O.g.Cc] = null, ro[O.g.Eb] = null, ro[O.g.xa] = null, ro[O.g.X] = null, ro[O.g.ja] = null, ro[O.g.Da] = null, ro[O.g.ff] = null, ro),
        uo = function(a) {
            to(a, function(b) {
                for (var c = po(a, b), d = c.N, e = c.Kj, f = 0; f < e.length; f++) {
                    var g =
                        e[f];
                    qo(g.Xa, g.format, a, b, g.Ra ? d : void 0, g.attributes)
                }
            })
        },
        to = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = Lh();
            ug() && "remarketing" !== c && (d.gcs = Kg(), vg() && (d.gcd = Og()), fg().usedDeclare && (d.gcc = "G1" + Cg(sg, !0)));
            if (a.m[O.g.Eb]) {
                var l = a.m[O.g.Eb].split("x");
                2 === l.length && (d.u_w = l[0], d.u_h = l[1])
            }
            if (a.m[O.g.xa]) {
                var m = a.m[O.g.xa];
                2 === m.length ? d.hl =
                    m : 5 === m.length && (d.hl = m.substring(0, 2), d.gl = m.substring(3, 5))
            }
            var n = a.metadata.redact_click_ids,
                p = function(w, y) {
                    var x = a.m[y];
                    x && (d[w] = n ? yf(x) : x)
                };
            p("url", O.g.ja);
            p("ref", O.g.Da);
            p("top", O.g.ff);
            Q(13) && (so[O.g.Kc] = "uaa", so[O.g.Lc] = "uab", so[O.g.Mc] = "uafvl", so[O.g.Nc] = "uamb", so[O.g.Oc] = "uam", so[O.g.Pc] = "uap", so[O.g.Qc] = "uapv", so[O.g.Rc] = "uaw");
            k(a.m, function(w, y) {
                if (so.hasOwnProperty(w)) {
                    var x = so[w];
                    x && (d[x] = y)
                } else e[w] = y
            });
            var q = a.m[O.g.Fc];
            void 0 != q && "" !== q && (d.vdnc = String(q));
            var t = a.m[O.g.Sd];
            void 0 !==
                t && (d.shf = t);
            var r = a.m[O.g.ob];
            void 0 !== r && (d.delc = r);
            d.data = lo(e);
            var u = a.m[O.g.X];
            u && "conversion" === c && (d.iedeld = Wf(u), d.item = ko(io(u)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!Q(68) || Jg(O.g.H))) {
                var v = Wd(a.metadata.user_data);
                v && f.push(v.then(function(w) {
                    d.em = w.Ee;
                    if ("user_data_web" === c && 0 < w.jk) {
                        var y = Hl(a.metadata.cookie_options);
                        d.ecsid = y
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (w) {}
            b(d)
        };
    var vo = function() {
            this.h = {}
        },
        wo = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        xo = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        zo = function(a, b, c, d) {
            if (!ug()) {
                yo(a, b, c, d);
                return
            }
            Zg(function() {
                Jg(O.g.H) ? yo(a, b, c, d) : d && d()
            }, [O.g.H]);
        };
    var Ao = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return Ml("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Tl(c)
                    },
                    gclaw: function() {
                        return Ql(b, c).join(".")
                    },
                    gac: function() {
                        return Sl(c)
                    }
                },
                e = Vl(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                l = d[g],
                m = (0, d[f])(),
                n = "_gcl" !== b ? "" : l();
            m && wo(a, f, m);
            n && wo(a, g, n)
        },
        yo = function(a, b, c, d) {
            c = c || {};
            var e = c.Hb || {},
                f = new vo;
            Vd(b, function(g, l) {
                wo(f, "em", g);
                wo(f, "gtm", Lh());
                ug() && (wo(f, "gcs", Kg()), wo(f, "gcd", Og()), fg().usedDeclare && wo(f, "gcc", "G1" + Cg(sg, !0)));
                Ao(f, Pk(e.prefix), c.qd);
                wo(f, "auid", uk(e.prefix));
                if (0 < l) {
                    var m = Hl(e);
                    wo(f, "ecsid", m)
                }
                var n = xo(f);
                Tb("https://google.com/pagead/form-data/" + a + "?" + n);
                Tb("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function Bo(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return xf("" + c + b).href
        }
    }

    function Co() {
        return !!le.se && "SGTM_TOKEN" !== le.se.split("@@").join("")
    };
    var Eo = function(a, b, c, d) {
            if (!Do() && !Gh(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + le.ca,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var l = Co();
                l && (f += "&sign=" + le.se);
                var m = ue || we ? Bo(b, e + f) : void 0;
                if (!m) {
                    var n = le.Dd + e;
                    l && Db && g && (n = Db.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = ol("https://", "http://", n + f)
                }
                var p = Hh();
                Bh().container[a] = {
                    state: 1,
                    context: d,
                    parent: p
                };
                Jb(m)
            }
        },
        Fo = function(a, b, c) {
            var d;
            if (d = !Do()) {
                var e = Bh().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Ih()) Bh().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Hh()
                }, M(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + le.ca + "&cx=c";
                    Co() && (f += "&sign=" + le.se);
                    var g = ue || we ? Bo(b, f) : void 0;
                    g || (g = ol("https://", "http://", le.Dd + f));
                    Bh().destination[a] = {
                        state: 1,
                        context: c,
                        parent: Hh()
                    };
                    Jb(g)
                }
        };

    function Do() {
        if (zh()) {
            return !0
        }
        return !1
    };
    var Go = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Ho = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Io = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Jo = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Mo = function(a) {
            var b = Me("gtm.allowlist") || Me("gtm.whitelist");
            b && M(9);
            se && (b = ["google", "gtagfl", "lcl", "zone"]);
            Ko() && (se ?
                M(116) : M(117), Lo && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Ma(Da(b), Ho),
                d = Me("gtm.blocklist") || Me("gtm.blacklist");
            d || (d = Me("tagTypeBlacklist")) && M(3);
            d ? M(8) : d = [];
            Ko() && (d = Da(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Da(d).indexOf("google") && M(2);
            var e = d && Ma(Da(d), Io),
                f = {};
            return function(g) {
                var l = g && g[bc.sb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Ee[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        M(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var r = 0 <= e.indexOf(l);
                    if (r) t = r;
                    else {
                        var u = ya(e, m || []);
                        u && M(10);
                        t = u
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = ya(e, Jo));
                return f[l] = v
            }
        },
        Lo = !1;
    var Ko = function() {
        return Go.test(z.location && z.location.hostname)
    };
    var No = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Oo = {},
        Po = Object.freeze((Oo[O.g.Ka] = !0, Oo)),
        Qo = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
        So = function(a, b, c) {
            if (Fi && "config" === a && !(1 < ll(b).K.length)) {
                var d, e = Eb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.J);
                J(c.h, f);
                var g = [],
                    l;
                for (l in d) {
                    var m = Ro(d[l], f);
                    m.length && (Qo && console.log(m), g.push(l))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        Oi = Oi ? Oi + "!" + n : "&tdc=" + n
                    }
                    Za("TAGGING",
                        No[C.readyState] || 14)
                }
                d[b] = f
            }
        };

    function To(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Ro(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var r = t[q];
                return void 0 === r ? Po[q] : r
            },
            f;
        for (f in To(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Zb(l) || "array" === Zb(l),
                p = "object" === Zb(m) || "array" === Zb(m);
            if (n && p) Ro(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Uo = !1,
        Vo = 0,
        Wo = [];

    function Xo(a) {
        if (!Uo) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Uo = !0;
                for (var e = 0; e < Wo.length; e++) E(Wo[e])
            }
            Wo.push = function() {
                for (var f = 0; f < arguments.length; f++) E(arguments[f]);
                return 0
            }
        }
    }

    function Yo() {
        if (!Uo && 140 > Vo) {
            Vo++;
            try {
                C.documentElement.doScroll("left"), Xo()
            } catch (a) {
                z.setTimeout(Yo, 50)
            }
        }
    }
    var Zo = function(a) {
        Uo ? a() : Wo.push(a)
    };
    var $o = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: S.C
        }
    };

    function ap(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var cp = function(a, b) {
            this.h = !1;
            this.J = [];
            this.M = {
                tags: []
            };
            this.Z = !1;
            this.m = this.B = 0;
            bp(this, a, b)
        },
        dp = function(a, b, c, d) {
            if (pe.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            G(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        ep = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        fp = function(a) {
            if (!a.h) {
                for (var b = a.J, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.J.length = 0
            }
        },
        bp = function(a, b, c) {
            void 0 !== b && gp(a, b);
            c && z.setTimeout(function() {
                return fp(a)
            }, Number(c))
        },
        gp = function(a,
            b) {
            var c = Ia(function() {
                return E(function() {
                    b(S.C, a.M)
                })
            });
            a.h ? c() : a.J.push(c)
        },
        hp = function(a) {
            a.B++;
            return Ia(function() {
                a.m++;
                a.Z && a.m >= a.B && fp(a)
            })
        },
        ip = function(a) {
            a.Z = !0;
            a.m >= a.B && fp(a)
        };
    var jp = {},
        kp = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        lp = !1;
    var mp = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Fa());
                z[b] = c
            }
            return z[b]
        },
        np = function(a) {
            if (ug()) {
                var b = kp();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function op() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var pp = function(a) {},
        qp = function(a, b) {
            return function() {
                var c = kp(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function vp(a, b, c, d) {
        var e = Bc[a],
            f = Np(a, b, c, d);
        if (!f) return null;
        var g = Kc(e[bc.sh], c, []);
        if (g && g.length) {
            var l = g[0];
            f = vp(l.index, {
                N: f,
                R: 1 === l.Hh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Np(a, b, c, d) {
        function e() {
            if (f[bc.Yi]) l();
            else {
                var w = Lc(f, c, []),
                    y = w[bc.ii];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!Jg(y[x])) {
                            l();
                            return
                        }
                var B = dp(c.Gb, String(f[bc.sb]), Number(f[bc.Zc]), w[bc.Zi]),
                    A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var F = Ga() - H;
                        fj(c.id, Bc[a], "5");
                        ep(c.Gb, B, "success", F);
                        Q(70) && co(c, f, un.F.vh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var F = Ga() - H;
                        fj(c.id, Bc[a], "6");
                        ep(c.Gb, B, "failure", F);
                        Q(70) && co(c, f, un.F.uh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                fj(c.id, f, "1");
                var D = function() {
                    var F = Ga() - H;
                    fj(c.id, f, "7");
                    ep(c.Gb, B, "exception", F);
                    Q(70) && co(c, f, un.F.th);
                    A || (A = !0, l())
                };
                if (Q(70)) {
                    var I = zn(un.F.fc, S.C, c.id, Number(f[bc.Zc]), c.name, zi(f));
                    An(I)
                }
                var H = Ga();
                try {
                    Jc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (F) {
                    D(F)
                }
                Q(70) && co(c, f, un.F.wh)
            }
        }
        var f = Bc[a],
            g = b.N,
            l = b.R,
            m = b.terminate;
        if (c.Ff(f)) return null;
        var n = Kc(f[bc.xh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = vp(p.index, {
                    N: g,
                    R: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.Hh ? m : q
        }
        if (f[bc.oh] || f[bc.bj]) {
            var t = f[bc.oh] ? Cc : c.Fk,
                r = g,
                u = l;
            if (!t[a]) {
                e = Ia(e);
                var v = aq(a, t, e);
                g = v.N;
                l = v.R
            }
            return function() {
                t[a](r, u)
            }
        }
        return e
    }

    function aq(a, b, c) {
        var d = [],
            e = [];
        b[a] = bq(d, e, c);
        return {
            N: function() {
                b[a] = cq;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            R: function() {
                b[a] = dq;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function bq(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function cq(a) {
        a()
    }

    function dq(a, b) {
        b()
    };
    var fq = function(a, b) {
            return 1 === arguments.length ? eq("config", a) : eq("config", a, b)
        },
        gq = function(a, b, c) {
            c = c || {};
            c[O.g.Fb] = a;
            return eq("event", b, c)
        };

    function eq(a) {
        return arguments
    }
    var hq = function() {
        this.h = [];
        this.m = []
    };
    hq.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    hq.prototype.listen = function(a) {
        this.m.push(a)
    };
    hq.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    hq.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var jq = function(a, b, c) {
            iq().enqueue(a, b, c)
        },
        lq = function() {
            var a = kq;
            iq().listen(a)
        };

    function iq() {
        var a = me.mb;
        a || (a = new hq, me.mb = a);
        return a
    }
    var tq = function(a) {
            var b = me.zones;
            return b ? b.getIsAllowedFn(Dh(), a) : function() {
                return !0
            }
        },
        uq = function(a) {
            var b = me.zones;
            return b ? b.isActive(Dh(), a) : !0
        };
    var xq = function(a, b) {
        for (var c = [], d = 0; d < Bc.length; d++)
            if (a[d]) {
                var e = Bc[d];
                var f = hp(b.Gb);
                try {
                    var g = vp(d, {
                        N: f,
                        R: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = e["function"];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Dc[l];
                        c.push({
                            ai: d,
                            Sh: (m ? m.priorityOverride || 0 : 0) || ap(e[bc.sb], 1) || 0,
                            execute: g
                        })
                    } else vq(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(wq);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function wq(a, b) {
        var c, d = b.Sh,
            e = a.Sh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.ai,
                l = b.ai;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function vq(a, b) {
        if (Fi) {
            var c = function(d) {
                var e = b.Ff(Bc[d]) ? "3" : "4",
                    f = Kc(Bc[d][bc.sh], b, []);
                f && f.length && c(f[0].index);
                fj(b.id, Bc[d], e);
                var g = Kc(Bc[d][bc.xh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Aq = !1,
        yq;
    var Fq = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (Q(70)) {
            var e = zn(un.F.Sc, S.C, b, void 0, d);
            An(e)
        }
        if ("gtm.js" === d) {
            if (Aq) return !1;
            Aq = !0
        }
        var f, g = !1;
        if (uq(b)) f = tq(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            g = !0;
            f = tq(Number.MAX_SAFE_INTEGER)
        }
        ej(b, d);
        var l = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                Ff: Mo(f),
                Fk: [],
                Nh: function() {
                    M(6);
                    Za("HEALTH", 0)
                },
                Bh: Bq(),
                Ch: Cq(b),
                Gb: new cp(function() {
                    if (Q(70)) {
                        var v = zn(un.F.gh, S.C, b, void 0,
                            d);
                        if (An(v)) {
                            var w = zn(un.F.Sc, S.C, b, void 0, d);
                            Bn(v, w)
                        }
                        if ("gtm.load" === d) {
                            var y = zn(un.F.fg, S.C);
                            if (An(y)) {
                                var x = zn(un.F.Ne, S.C);
                                Bn(y, x)
                            }
                            bo();
                        }
                    }
                    l && l.apply(l, [].slice.call(arguments, 0))
                }, m)
            },
            p = Pc(n);
        g && (p = Dq(p));
        if (Q(70)) {
            var q = zn(un.F.hh, S.C, b, void 0, d);
            if (An(q)) {
                var t =
                    zn(un.F.Sc, S.C, b, void 0, d);
                Bn(q, t)
            }
        }
        var r = xq(p, n),
            u = !1;
        ip(n.Gb);
        "gtm.js" !== d && "gtm.sync" !== d || pp(S.C);
        return Eq(p, r) || u
    };

    function Cq(a) {
        return function(b) {
            Fi && (ac(b) || hj(a, "input", b))
        }
    }

    function Bq() {
        var a = {};
        a.event = Qe("event", 1);
        a.ecommerce = Qe("ecommerce", 1);
        a.gtm = Qe("gtm");
        a.eventModel = Qe("eventModel");
        return a
    }

    function Dq(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Bc[c][bc.sb]);
                if (oe[d] || void 0 !== Bc[c][bc.cj] || Fe[d] || ap(d, 2)) b[c] = !0
            }
        return b
    }

    function Eq(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Bc[c] && !pe[String(Bc[c][bc.sb])]) return !0;
        return !1
    }
    var Hq = function(a, b, c, d) {
            Gq.push("event", [b, a], c, d)
        },
        Iq = function(a, b, c, d) {
            Gq.push("get", [a, b], c, d)
        },
        Jq = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.M = {};
            this.Z = null;
            this.B = {};
            this.m = !1
        },
        Kq = function(a, b, c, d) {
            var e = Ga();
            this.type = a;
            this.m = e;
            this.aa = b || "";
            this.h = c;
            this.messageContext = d
        },
        Lq = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        Mq = function(a, b) {
            var c = ll(b);
            return a.m[c.U] = a.m[c.U] || new Jq
        },
        Nq = function(a, b, c, d) {
            if (d.aa) {
                var e = Mq(a, d.aa),
                    f = e.Z;
                if (f) {
                    var g = J(c),
                        l = J(e.J[d.aa]),
                        m = J(e.B),
                        n = J(e.h),
                        p = J(a.B),
                        q = {};
                    if (Fi) try {
                        q = J(Je)
                    } catch (v) {
                        M(72)
                    }
                    var t = ll(d.aa).prefix,
                        r = function(v) {
                            gj(d.messageContext.eventId, t, v);
                            var w = g[O.g.Wb];
                            w && E(w)
                        },
                        u = lm(jm(im(hm(fm(em(gm(dm(cm(bm(new am(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("2")
                            }
                        }), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("3")
                            }
                        }));
                    try {
                        gj(d.messageContext.eventId, t, "1"), So(d.type, d.aa, u), f(d.aa, b, d.m, u)
                    } catch (v) {
                        gj(d.messageContext.eventId, t, "4")
                    }
                }
            }
        };
    Lq.prototype.register = function(a, b, c) {
        var d = Mq(this, a);
        3 !== d.status && (d.Z = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    Lq.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!ll(c)) return;
            if (c) {
                var e = ll(c);
                e && 1 === Mq(this, c).status && (Mq(this, c).status = 2, this.push("require", [{}], e.U, {}))
            }
            Mq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new Kq(a, c, b, d));
        d.deferrable || this.flush()
    };
    Lq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.aa || Mq(this, f.aa).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Mq(this, f.aa);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.h[0], function(t, r) {
                            J(Na(t, r), b.B)
                        });
                        break;
                    case "config":
                        g = Mq(this, f.aa);
                        e.eb = {};
                        k(f.h[0], function(t) {
                            return function(r, u) {
                                J(Na(r, u), t.eb)
                            }
                        }(e));
                        var l = !!e.eb[O.g.Jc];
                        delete e.eb[O.g.Jc];
                        var m = ll(f.aa),
                            n = m.U === m.id;
                        l || (n ? g.B = {} : g.J[f.aa] = {});
                        g.m && l || Nq(this, O.g.oa, e.eb, f);
                        g.m = !0;
                        n ? J(e.eb, g.B) : (J(e.eb, g.J[f.aa]), M(70));
                        d = !0;
                        break;
                    case "event":
                        g = Mq(this, f.aa);
                        e.wd = {};
                        k(f.h[0], function(t) {
                            return function(r, u) {
                                J(Na(r, u), t.wd)
                            }
                        }(e));
                        Nq(this, f.h[1], e.wd, f);
                        break;
                    case "get":
                        g = Mq(this, f.aa);
                        var p = {},
                            q = (p[O.g.Ja] = f.h[0], p[O.g.Ta] = f.h[1], p);
                        Nq(this, O.g.Aa, q, f)
                }
                this.h.shift();
                Oq(this, f)
            }
            e = {
                eb: e.eb,
                wd: e.wd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Oq = function(a, b) {
            if ("require" !== b.type)
                if (b.aa)
                    for (var c = Mq(a, b.aa).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.M)
                                for (var g = f.M[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        Pq = function(a, b) {
            var c = Gq,
                d = J(b);
            J(Mq(c, a).h, d);
            Mq(c, a).h = d
        },
        Gq = new Lq;
    var Qq = {},
        Rq = {},
        Sq = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    Bd: d.Bd,
                    yd: d.yd
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.Bd = ll(f), d.Bd && (ua(Eh(), function(p) {
                    return function(q) {
                        return p.Bd.U === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = Qq[f] || [];
                    d.yd = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.yd[q] = !0
                        }
                    }(d));
                    for (var l = Dh(), m = 0; m < l.length; m++)
                        if (d.yd[l[m]]) {
                            b = b.concat(Eh());
                            break
                        }
                    var n = Rq[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                dk: b,
                fk: c
            }
        },
        Tq = function(a) {
            k(Qq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Uq = function(a) {
            k(Rq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Vq = "HA GF G UA AW DC MC".split(" "),
        Wq = !1,
        Xq = !1;

    function Yq(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ge()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Zq = {
            config: function(a, b) {
                var c = Yq(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !G(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = ll(a[1]);
                    if (e) {
                        ej(c.eventId, "gtag.config");
                        var f = e.U,
                            g = e.id !== f;
                        if (g ? -1 === Eh().indexOf(f) : -1 === Dh().indexOf(f)) {
                            if (!Q(61) || !d[O.g.ee]) {
                                var l = d[O.g.va] || Gq.B[O.g.va];
                                g ? Fo(f, l, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : Eo(f, l, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (re && !g && !d[O.g.Jc]) {
                                var m = Xq;
                                Xq = !0;
                                if (m) return
                            }
                            Wq ||
                                M(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    Uq(e.id);
                                    var n = e.id,
                                        p = d[O.g.ce] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var t = Rq[p[q]] || [];
                                        Rq[p[q]] = t;
                                        0 > t.indexOf(n) && t.push(n)
                                    }
                                } else {
                                    Tq(e.id);
                                    var r = e.id,
                                        u = d[O.g.ce] || "default";
                                    u = u.toString().split(",");
                                    for (var v = 0; v < u.length; v++) {
                                        var w = Qq[u[v]] || [];
                                        Qq[u[v]] = w;
                                        0 > w.indexOf(r) && w.push(r)
                                    }
                                }
                            delete d[O.g.ce];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = y;
                            delete d[O.g.Wb];
                            for (var x = g ? [e.id] : Eh(), B = 0; B < x.length; B++) {
                                var A = J(b);
                                Gq.push("config", [d], x[B], A)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    M(39);
                    var c = Yq(a, b),
                        d = a[1];
                    "default" === d ? Gg(a[2]) : "update" === d ? Hg(a[2], c) : "declare" === d ? b.fromContainerExecution && Fg(a[2]) : "core_platform_services" === d && Ig(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!G(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = J(e), e[O.g.Wb] && (g.eventCallback = e[O.g.Wb]),
                        e[O.g.Wd] && (g.eventTimeout = e[O.g.Wd]));
                    var l = Yq(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        t = q && q[O.g.Fb];
                    void 0 === t && (t = Me(O.g.Fb, 2), void 0 === t && (t = "default"));
                    if (h(t) || ta(t)) {
                        var r = t.toString().replace(/\s+/g, "").split(","),
                            u = Sq(r),
                            v = u.dk,
                            w = u.fk;
                        if (w.length)
                            for (var y = q && q[O.g.va] || Gq.B[O.g.va], x = 0; x < w.length; x++) {
                                var B = ll(w[x]);
                                B && Fo(B.U, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p =
                            nl(v)
                    } else p = void 0;
                    var A = p;
                    if (A) {
                        ej(m, c);
                        for (var D = [], I = 0; I < A.length; I++) {
                            var H = A[I],
                                F = J(b);
                            if (-1 !== Vq.indexOf(H.prefix)) {
                                var L = J(d),
                                    K = F.eventMetadata || {};
                                K.hasOwnProperty("is_external_event") || (K.is_external_event = !F.fromContainerExecution);
                                F.eventMetadata = K;
                                delete L[O.g.Wb];
                                Hq(c, L, H.id, F)
                            }
                            D.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < A.length ? g.eventModel[O.g.Fb] = D.join() : delete g.eventModel[O.g.Fb];
                        Wq || M(43);
                        Q(101) && void 0 === b.noGtmEvent && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        return b.noGtmEvent ?
                            void 0 : g
                    }
                }
            },
            get: function(a, b) {
                M(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && ra(a[3])) {
                    var c = ll(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Wq || M(43);
                        var f = Gq.B[O.g.va];
                        if (!ua(Eh(), function(l) {
                                return c.U === l
                            })) Fo(c.U, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Vq.indexOf(c.prefix)) {
                            Yq(a, b);
                            var g = {};
                            Ag(J((g[O.g.Ja] = d, g[O.g.Ta] = e, g)));
                            Iq(d, function(l) {
                                E(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Wq = !0;
                    var c = Yq(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && G(a[1]) ? c = J(a[1]) : 3 == a.length && h(a[1]) && (c = {}, G(a[2]) || ta(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Yq(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    J(c);
                    var g = J(c);
                    Gq.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    Q(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        $q = {
            policy: !0
        };
    var ar = function(a) {
            var b = z[le.ca].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        br = function(a) {
            var b = z[le.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var cr = !1,
        dr = [];

    function er() {
        if (!cr) {
            cr = !0;
            for (var a = 0; a < dr.length; a++) E(dr[a])
        }
    }
    var fr = function(a) {
        cr ? E(a) : dr.push(a)
    };
    var wr = function(a) {
        if (vr(a)) return a;
        this.h = a
    };
    wr.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var vr = function(a) {
        return !a || "object" !== Zb(a) || G(a) ? !1 : "getUntrustedMessageValue" in a
    };
    wr.prototype.getUntrustedMessageValue = wr.prototype.getUntrustedMessageValue;
    var xr = 0,
        yr = {},
        zr = [],
        Ar = [],
        Br = !1,
        Cr = !1;

    function Dr(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Er = function(a) {
            return z[le.ca].push(a)
        },
        Fr = function(a, b) {
            var c = me[le.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Gr(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && Pe(e), Pe(e, f))
        });
        Be || (Be = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ge(), a["gtm.uniqueEventId"] = d, Pe("gtm.uniqueEventId", d));
        return Fq(a)
    }

    function Hr(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Aa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Ir() {
        var a;
        if (Ar.length) a = Ar.shift();
        else if (zr.length) a = zr.shift();
        else return;
        var b;
        var c = a;
        if (Br || !Hr(c.message)) b = c;
        else {
            Br = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ge());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            zr.unshift(l, c);
            if (Fi && S.C) {
                var m;
                if (S.Uc) {
                    var n = S.C,
                        p = Bh().destination[n];
                    m = p && p.context
                } else {
                    var q = S.C,
                        t = Bh().container[q];
                    m = t && t.context
                }
                var r = m,
                    u, v = xf(z.location.href);
                u = v.hostname + v.pathname;
                var w = r && r.fromContainerExecution,
                    y = r && r.source,
                    x = S.C,
                    B = S.ib,
                    A = S.Uc;
                Qi || (Qi = u);
                Pi.push(x + ";" + B + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (A ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function Jr() {
        for (var a = !1, b; !Cr && (b = Ir());) {
            Cr = !0;
            delete Je.eventModel;
            Le();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Cr = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = Me(l, 1);
                        if (ta(m) || G(m)) m = J(m);
                        Ke[l] = m
                    }
                try {
                    if (ra(d)) try {
                        d.call(Ne)
                    } catch (D) {} else if (ta(d)) {
                        var n = d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                r = Me(p.join("."), 2);
                            if (null != r) try {
                                r[q].apply(r, t)
                            } catch (D) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Aa(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = Zq[d[0]];
                                    if (w && (!e.fromContainerExecution || !$q[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && M(101)
                        }
                        else u = d;
                        if (u) {
                            var y = Gr(u, e);
                            a = y || a;
                            v && y && M(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Le(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var B = yr[String(x)] || [], A = 0; A < B.length; A++) Ar.push(Kr(B[A]));
                        B.length && Ar.sort(Dr);
                        delete yr[String(x)];
                        x > xr && (xr = x)
                    }
                    Cr = !1
                }
            }
        }
        return !a
    }

    function Lr() {
        if (Q(70)) {
            var a = zn(un.F.Ne, S.C);
            An(a);
            if (Mr()) {
                var b = zn(un.F.hg, S.C);
                if (An(b)) {
                    var c = zn(un.F.Pe, S.C);
                    Bn(b, c)
                }
            }
        }
        var d = Jr();
        try {
            ar(S.C)
        } catch (e) {}
        return d
    }

    function kq(a) {
        if (xr < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            yr[b] = yr[b] || [];
            yr[b].push(a)
        } else Ar.push(Kr(a)), Ar.sort(Dr), E(function() {
            Cr || Jr()
        })
    }

    function Kr(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Nr = function() {
            function a(g) {
                var l = {};
                if (vr(g)) {
                    var m = g;
                    g = vr(m) ? m.getUntrustedMessageValue() : void 0;
                    l.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: l
                }
            }
            var b = Eb(le.ca, []),
                c = me[le.ca] = me[le.ca] || {};
            !0 === c.pruned && M(83);
            yr = iq().get();
            lq();
            Zo(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            fr(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < me.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var l = 0; l < arguments.length; l++) g[l] = new wr(arguments[l])
                } else g = [].slice.call(arguments, 0);
                var m = g.map(function(t) {
                    return a(t)
                });
                zr.push.apply(zr, m);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (M(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return Jr() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            zr.push.apply(zr, e);
            if (Mr()) {
                if (Q(70)) {
                    var f = zn(un.F.Pe, S.C);
                    An(f)
                }
                E(Lr)
            }
        },
        Mr = function() {
            var a = !0;
            return a
        };

    function Or(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ga();
        return b < c + 3E5 && b > c - 9E5
    }

    function Pr(a) {
        return a && 0 === a.indexOf("pending:") ? Or(a.substr(8)) : !1
    };
    var Gc = {};
    Gc.me = new String("undefined");
    var Tr = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Ub(a, "className"),
                "gtm.elementId": a["for"] || Pb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Ub(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Ub(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Ur = function(a) {
            me.hasOwnProperty("autoEventsSettings") || (me.autoEventsSettings = {});
            var b = me.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Vr = function(a, b, c) {
            Ur(a)[b] = c
        },
        Wr = function(a, b, c, d) {
            var e = Ur(a),
                f = Ha(e, b, d);
            e[b] = c(f)
        },
        Xr = function(a, b, c) {
            var d = Ur(a);
            return Ha(d, b, c)
        };
    var qs = z.clearTimeout,
        rs = z.setTimeout,
        U = function(a, b, c, d) {
            if (zh()) {
                b && E(b)
            } else return Jb(a, b, c, d)
        },
        ss = function() {
            return new Date
        },
        ts = function() {
            return z.location.href
        },
        us = function(a) {
            return vf(xf(a), "fragment")
        },
        vs = function(a) {
            return wf(xf(a))
        },
        ws = function(a, b) {
            return Me(a, b || 2)
        },
        xs = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Er(a)) : d = Er(a);
            return d
        },
        ys = function(a, b) {
            z[a] = b
        },
        V = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        zs = function(a, b, c) {
            return gh(a, b, void 0 === c ? !0 : !!c)
        },
        As = function(a, b, c) {
            return 0 === ph(a, b, c)
        },
        Bs = function(a, b) {
            if (zh()) {
                b && E(b)
            } else Lb(a, b)
        },
        Cs = function(a) {
            return !!Xr(a, "init", !1)
        },
        Ds = function(a) {
            Vr(a, "init", !0)
        },
        Es = function(a, b, c) {
            Fi && (ac(a) || hj(c, b, a))
        };

    function bt(a, b) {
        function c(g) {
            var l = xf(g),
                m = vf(l, "protocol"),
                n = vf(l, "host", !0),
                p = vf(l, "port"),
                q = vf(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function ct(a) {
        return dt(a) ? 1 : 0
    }

    function dt(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (ct(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < hd.length; g++) {
                            var l = hd[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return id(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return kd(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return bt(b, c)
        }
        return !1
    };
    Ze();

    function Ct() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Dt = function() {
            var a = Ct();
            a.hid = a.hid || va();
            return a.hid
        },
        Et = function(a, b) {
            var c = Ct();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var au = function() {
            var a = !0;
            yi(7) && yi(9) && yi(10) || (a = !1);
            return a
        },
        bu = function() {
            var a = !0;
            yi(3) && yi(4) || (a = !1);
            return a
        };
    var Cu = window,
        Du = document,
        Eu = function(a) {
            var b = Cu._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Du.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Cu["ga-disable-" + a]) return !0;
            try {
                var c = Cu.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = ah("AMP_TOKEN", String(Du.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Du.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Ku(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[O.g.La] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Tu = function(a, b) {};

    function Su(a, b) {
        var c = function() {};
        return c
    }

    function Uu(a, b, c) {};
    var Vu = function(a, b) {
            var c;
            c = b ? [ln, mn, on, Ym, bn, qn, cn, pn, jn, Zm, tn, dn, nn, Wm, rn, Tm] : [Xm, Om, $m, Pm, Qm, Rm, Sm, en, fn, hn, kn, an, gn, Vm, sn];
            for (var d = 0; d < c.length && (c[d](a), !a.I); d++);
        },
        Wu = function(a, b, c, d) {
            var e = new Al(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Ga();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        Xu = function(a) {
            var b = a.indexOf("/"),
                c = 3 <= b,
                d = a.substring(3, c ? b : a.length);
            return {
                id: a,
                prefix: "AW",
                U: "AW-" + d,
                K: [d, c ? a.substring(b +
                    1) : void 0]
            }
        },
        Yu = function(a, b, c, d) {
            function e() {
                for (var q = 0; q < g.length; q++) {
                    var t = g[q];
                    t.I || (Vu(g[q], !0), t.metadata.speculative || t.I || uo(t))
                }
            }
            var f = ll(a);
            !f && d.D && (f = Xu(a));
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var l = d.eventMetadata.hit_type_override;
                    Array.isArray(l) || (l = [l]);
                    for (var m = 0; m < l.length; m++) {
                        var n = Wu(l[m], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === O.g.oa && g.push(Wu("landing_page", f, b, d)), g.push(Wu("conversion", f, b, d)), g.push(Wu("user_data_lead", f, b, d)), g.push(Wu("user_data_web",
                    f, b, d)), g.push(Wu("remarketing", f, b, d));
                for (var p = 0; p < g.length; p++) Vu(g[p], !1);
                yg(function() {
                    for (var q = [], t = [], r = 0; r < g.length; r++) {
                        var u = g[r];
                        q.push(u.I);
                        t.push(u.metadata.speculative)
                    }
                    e();
                    qg(O.g.H) || zg(function(v) {
                        for (var w = v.consentEventId, y = v.consentPriorityId, x = 0; x < g.length; x++) {
                            var B = g[x];
                            B.metadata.consent_updated = !0;
                            B.metadata.speculative = t[x];
                            B.metadata.event_start_timestamp_ms = Ga();
                            B.I = q[x];
                            B.metadata.consent_event_id = w;
                            B.metadata.consent_priority_id = y
                        }
                        e()
                    }, [O.g.H])
                }, [O.g.H])
            }
        };
    var Nv = function(a, b) {
            if (!b.D) {
                var c = R(b, O.g.Ja),
                    d = R(b, O.g.Ta),
                    e = R(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    Kv.hasOwnProperty(c) ? f = Kv[c] : Lv.hasOwnProperty(c) && (f = Lv[c]);
                    1 === f && (f = Mv(c));
                    h(f) ? kp()(function() {
                        var g = kp().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        Ov = function(a, b) {
            var c = a[O.g.Bb],
                d = b + ".",
                e = a[O.g.P] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[O.g.rb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = kp();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, g)
        },
        Sv = function(a, b, c) {
            if (ug() &&
                (!c.D || !Pv[a])) {
                var d = !Jg(O.g.O),
                    e = function(f) {
                        var g, l, m = kp(),
                            n = Qv(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.D || Rv(b, n.createOnlyFields)) {
                            c.D && (g = "gtm" + Ge(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = g));
                            m(function() {
                                var r = m.getByName(b);
                                r && (p = r.get("clientId"));
                                c.D || m.remove(b)
                            });
                            m("create", a, c.D ? l : n.createOnlyFields);
                            d &&
                                Jg(O.g.O) && (d = !1, m(function() {
                                    var r = kp().getByName(c.D ? g : b);
                                    !r || r.get("clientId") == p && q || (c.D ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = ie[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = ie[f]), r.set(n.fieldsToSet), c.D ? r.send("pageview") : r.send("pageview", n.fieldsToSend))
                                }));
                            c.D && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                Pg(function() {
                    return e(O.g.O)
                }, O.g.O);
                Pg(function() {
                    return e(O.g.H)
                }, O.g.H);
                c.D && (Pv[a] = !0)
            }
        },
        Tv = function(a, b) {
            Co() && b && (a[O.g.Ab] = b)
        },
        bw = function(a, b, c) {
            function d() {
                var F =
                    R(c, O.g.Ub);
                l(function() {
                    if (!c.D && G(F)) {
                        var L = u.fieldsToSend,
                            K = m().getByName(n),
                            W;
                        for (W in F)
                            if (F.hasOwnProperty(W) && /^(dimension|metric)\d+$/.test(W) && void 0 != F[W]) {
                                var fa = K.get(Mv(F[W]));
                                Uv(L, W, fa)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var F = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: F
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                l = c.D ? mp(R(c, "gaFunctionName")) : mp();
            if (ra(l)) {
                var m = kp,
                    n;
                c.D ? n = R(c, "name") || R(c, "gtmTrackerName") : n = "gtag_" +
                    f.split("-").join("_");
                var p = function(F) {
                        var L = [].slice.call(arguments, 0);
                        L[0] = n ? n + "." + L[0] : "" + L[0];
                        l.apply(window, L)
                    },
                    q = function(F) {
                        var L = function(ea, aa) {
                                for (var Y = 0; aa && Y < aa.length; Y++) p(ea, aa[Y])
                            },
                            K = c.D,
                            W = K ? Vv(u) : Wv(b, c);
                        if (W) {
                            var fa = {};
                            Tv(fa, F);
                            p("require", "ec", "ec.js", fa);
                            K && W.yf && p("set", "&cu", W.yf);
                            var T = W.action;
                            if (K || "impressions" === T)
                                if (L("ec:addImpression", W.Mh), !K) return;
                            if ("promo_click" === T || "promo_view" === T || K && W.pd) {
                                var N = W.pd;
                                L("ec:addPromo", N);
                                if (N && 0 < N.length && "promo_click" === T) {
                                    K ?
                                        p("ec:setAction", T, W.Qa) : p("ec:setAction", T);
                                    return
                                }
                                if (!K) return
                            }
                            "promo_view" !== T && "impressions" !== T && (L("ec:addProduct", W.Jb), p("ec:setAction", T, W.Qa))
                        }
                    },
                    t = function(F) {
                        if (F) {
                            var L = {};
                            if (G(F))
                                for (var K in Xv) Xv.hasOwnProperty(K) && Yv(Xv[K], K, F[K], L);
                            Tv(L, y);
                            p("require", "linkid", L)
                        }
                    },
                    r = function() {
                        if (zh()) {} else {
                            var F = R(c, O.g.Ii);
                            F && (p("require", F, {
                                dataLayer: le.ca
                            }), p("require", "render"))
                        }
                    },
                    u = Qv(n, b, c),
                    v = function(F, L, K) {
                        K &&
                            (L = "" + L);
                        u.fieldsToSend[F] = L
                    };
                !c.D && Rv(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), Zv[n] = !1);
                l("create", f, u.createOnlyFields);
                if (u.createOnlyFields[O.g.Ab] && !c.D) {
                    var w = ue || we ? Bo(u.createOnlyFields[O.g.Ab], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var y = c.D ? u.fieldsToSet[O.g.Ab] : u.createOnlyFields[O.g.Ab];
                if (y) {
                    var x = c.D ? u.fieldsToSet[O.g.Yd] : u.createOnlyFields[O.g.Yd];
                    x && !Zv[n] && (Zv[n] = !0, l(qp(n, x)))
                }
                c.D ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), t(u.linkAttribution));
                var B =
                    u[O.g.sa];
                B && B[O.g.P] && Ov(B, n);
                p("set", u.fieldsToSet);
                if (c.D) {
                    if (u.enableLinkId) {
                        var A = {};
                        Tv(A, y);
                        p("require", "linkid", "linkid.js", A)
                    }
                    ug() && Sv(f, n, c)
                }
                if (b === O.g.Ac)
                    if (c.D) {
                        e();
                        if (u.remarketingLists) {
                            var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: D
                            })
                        }
                        q(y);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && np(n + ".")
                    } else r(), p("send", "pageview", u.fieldsToSend);
                else b === O.g.oa ? (r(), zl(f, c), R(c, O.g.Wa) && (al(["aw", "dc"]), np(n + ".")), 0 != u.sendPageView && p("send", "pageview",
                    u.fieldsToSend), Sv(f, n, c)) : b === O.g.Aa ? Nv(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.D ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Ba(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.D || ("track_social" === b && c.D ? (u.fieldsToSend.hitType = "social", v("socialNetwork",
                    u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.D || $v[b]) && q(y), c.D && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Ba(u.value))), p("send", u.fieldsToSend));
                if (!aw && !c.D) {
                    aw = !0;
                    var I = function() {
                            c.R()
                        },
                        H = function() {
                            m().loaded || I()
                        };
                    zh() ? E(H) : Jb(g, H, I)
                }
            } else E(c.R)
        },
        cw = function(a, b, c, d) {
            Zg(function() {
                bw(a,
                    b, d)
            }, [O.g.O, O.g.H])
        },
        ew = function(a) {
            function b(e) {
                function f(l, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[l] = e[p];
                            break
                        }
                    }
                }
                var g = J(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var l = "", m = 0; m < dw.length; m++) void 0 !== e[dw[m]] &&
                            (l && (l += "/"), l += e[dw[m]]);
                        l && (g.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && G(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        fw = function(a) {
            return Jg(a)
        },
        gw = !1;
    var aw, Zv = {},
        Pv = {},
        hw = {},
        iw = Object.freeze((hw.page_hostname = 1, hw[O.g.W] =
            1, hw[O.g.kb] = 1, hw[O.g.Oa] = 1, hw[O.g.Ca] = 1, hw[O.g.Pa] = 1, hw[O.g.Tb] = 1, hw[O.g.Qd] = 1, hw[O.g.Ia] = 1, hw[O.g.nb] = 1, hw[O.g.ja] = 1, hw[O.g.Zb] = 1, hw[O.g.Da] = 1, hw[O.g.Cb] = 1, hw)),
        jw = {},
        Kv = Object.freeze((jw.client_storage = "storage", jw.sample_rate = 1, jw.site_speed_sample_rate = 1, jw.store_gac = 1, jw.use_amp_client_id = 1, jw[O.g.lb] = 1, jw[O.g.qa] = "storeGac", jw[O.g.Oa] = 1, jw[O.g.Ca] = 1, jw[O.g.Pa] = 1, jw[O.g.Tb] = 1, jw[O.g.Qd] = 1, jw[O.g.nb] = 1, jw)),
        kw = {},
        lw = Object.freeze((kw._cs = 1, kw._useUp = 1, kw.allowAnchor = 1, kw.allowLinker = 1, kw.alwaysSendReferrer =
            1, kw.clientId = 1, kw.cookieDomain = 1, kw.cookieExpires = 1, kw.cookieFlags = 1, kw.cookieName = 1, kw.cookiePath = 1, kw.cookieUpdate = 1, kw.legacyCookieDomain = 1, kw.legacyHistoryImport = 1, kw.name = 1, kw.sampleRate = 1, kw.siteSpeedSampleRate = 1, kw.storage = 1, kw.storeGac = 1, kw.useAmpClientId = 1, kw._cd2l = 1, kw)),
        mw = Object.freeze({
            anonymize_ip: 1
        }),
        nw = {},
        Lv = Object.freeze((nw.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, nw.app_id = 1,
            nw.app_installer_id = 1, nw.app_name = 1, nw.app_version = 1, nw.description = "exDescription", nw.fatal = "exFatal", nw.language = 1, nw.page_hostname = "hostname", nw.transport_type = "transport", nw[O.g.ra] = "currencyCode", nw[O.g.Og] = 1, nw[O.g.ja] = "location", nw[O.g.Zb] = "page", nw[O.g.Da] = "referrer", nw[O.g.Cb] = "title", nw[O.g.Vg] = 1, nw[O.g.ya] = 1, nw)),
        ow = {},
        pw = Object.freeze((ow.content_id = 1, ow.event_action = 1, ow.event_category = 1, ow.event_label = 1, ow.link_attribution = 1, ow.name = 1, ow[O.g.sa] = 1, ow[O.g.Ng] = 1, ow[O.g.Ka] = 1, ow[O.g.da] =
            1, ow)),
        qw = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        dw = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        rw = {},
        Xv = Object.freeze((rw.levels = 1, rw[O.g.Ca] = "duration", rw[O.g.Tb] = 1, rw)),
        sw = {},
        tw = Object.freeze((sw.anonymize_ip = 1, sw.fatal = 1,
            sw.send_page_view = 1, sw.store_gac = 1, sw.use_amp_client_id = 1, sw[O.g.qa] = 1, sw[O.g.Og] = 1, sw)),
        Yv = function(a, b, c, d) {
            if (void 0 !== c)
                if (tw[b] && (c = Ca(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Mv(b)] = c;
                else if (h(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Mv = function(a) {
            return a && h(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        uw = {},
        $v = Object.freeze((uw.checkout_progress = 1, uw.select_content = 1, uw.set_checkout_option = 1, uw[O.g.wc] = 1, uw[O.g.xc] = 1, uw[O.g.Qb] =
            1, uw[O.g.yc] = 1, uw[O.g.wb] = 1, uw[O.g.Rb] = 1, uw[O.g.xb] = 1, uw[O.g.Ga] = 1, uw[O.g.zc] = 1, uw[O.g.Ha] = 1, uw)),
        vw = {},
        ww = Object.freeze((vw.checkout_progress = 1, vw.set_checkout_option = 1, vw[O.g.ng] = 1, vw[O.g.og] = 1, vw[O.g.wc] = 1, vw[O.g.xc] = 1, vw[O.g.pg] = 1, vw[O.g.Qb] = 1, vw[O.g.Ga] = 1, vw[O.g.zc] = 1, vw[O.g.qg] = 1, vw)),
        xw = {},
        yw = Object.freeze((xw.generate_lead = 1, xw.login = 1, xw.search = 1, xw.select_content = 1, xw.share = 1, xw.sign_up = 1, xw.view_search_results = 1, xw[O.g.yc] = 1, xw[O.g.wb] = 1, xw[O.g.Rb] = 1, xw[O.g.xb] = 1, xw[O.g.Ha] = 1, xw)),
        zw = function(a) {
            var b =
                "general";
            ww[a] ? b = "ecommerce" : yw[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Aw = {},
        Bw = Object.freeze((Aw.view_search_results = 1, Aw[O.g.wb] = 1, Aw[O.g.xb] = 1, Aw[O.g.Ha] = 1, Aw)),
        Uv = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Cw = function(a) {
            if (ta(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Qv = function(a, b, c) {
            var d = function(K) {
                    return R(c, K)
                },
                e = {},
                f = {},
                g = {},
                l = {},
                m = Cw(d(O.g.Hi));
            !c.D && m && Uv(f, "exp", m);
            g["&gtm"] = Lh(!0);
            Q(69) && !c.D && (g._no_slc = !0);
            ug() && (l._cs = fw);
            var n = d(O.g.Ub);
            if (!c.D && G(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Uv(f, p, q)
                    }
            for (var t = !c.D, r = Yl(c), u = 0; u < r.length; ++u) {
                var v = r[u];
                if (c.D) {
                    var w = d(v);
                    qw.hasOwnProperty(v) ? e[v] = w : lw.hasOwnProperty(v) ? l[v] = w : g[v] = w
                } else {
                    var y = void 0;
                    y = v !== O.g.V ? d(v) : Zl(c, v);
                    if (pw.hasOwnProperty(v)) Yv(pw[v], v, y, e);
                    else if (mw.hasOwnProperty(v)) Yv(mw[v],
                        v, y, g);
                    else if (Lv.hasOwnProperty(v)) Yv(Lv[v], v, y, f);
                    else if (Kv.hasOwnProperty(v)) Yv(Kv[v], v, y, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) Yv(1, v, y, f);
                    else if (v === O.g.V) {
                        if (!gw) {
                            var x = Pa(y);
                            x && (f["&did"] = x)
                        }
                        var B = void 0,
                            A = void 0;
                        b === O.g.oa ? B = Pa(Zl(c, v), ".") : (B = Pa(Zl(c, v, 1), "."), A = Pa(Zl(c, v, 2), "."));
                        B && (f["&gdid"] = B);
                        A && (f["&edid"] = A)
                    } else v === O.g.Ia && 0 > r.indexOf(O.g.Tb) && (l.cookieName = y + "_ga");
                    Q(96) && iw[v] && (c.m.hasOwnProperty(v) || b === O.g.oa && c.h.hasOwnProperty(v)) && (t = !1)
                }
            }
            Q(96) && t &&
                (f["&jsscut"] = "1");
            !1 !== d(O.g.yi) && !1 !== d(O.g.kb) && au() || (g.allowAdFeatures = !1);
            !1 !== d(O.g.W) && bu() || (g.allowAdPersonalizationSignals = !1);
            !c.D && d(O.g.Wa) && (l._useUp = !0);
            if (c.D) {
                l.name = l.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    ra(D) && D();
                    c.N()
                }
            } else {
                Uv(l, "cookieDomain", "auto");
                Uv(g, "forceSSL", !0);
                Uv(e, "eventCategory", zw(b));
                Bw[b] && Uv(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? Uv(e, "eventLabel", d(O.g.Ng)) : "search" === b || "view_search_results" === b ? Uv(e, "eventLabel",
                    d(O.g.Oi)) : "select_content" === b && Uv(e, "eventLabel", d(O.g.Bi));
                var I = e[O.g.sa] || {},
                    H = I[O.g.Yb];
                H || 0 != H && I[O.g.P] ? l.allowLinker = !0 : !1 === H && Uv(l, "useAmpClientId", !1);
                f.hitCallback = c.N;
                l.name = a
            }
            ug() && (g["&gcs"] = Kg(), Jg(O.g.O) || (l.storage = "none"), Jg(O.g.H) || (g.allowAdFeatures = !1, l.storeGac = !1));
            var F = d(O.g.va) || d(O.g.Ab),
                L = d(O.g.Yd);
            F && (c.D || (l[O.g.Ab] = F), l._cd2l = !0);
            L && !c.D && (l[O.g.Yd] = L);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = l;
            return e
        },
        Vv = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.yf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.Mh = "impressions" === b.translateIfKeyEquals ? ew(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.pd = "promoView" === b.translateIfKeyEquals ? ew(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.pd = "promoClick" === b.translateIfKeyEquals ? ew(f) : f;
                c.Qa = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !==
                    g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var l = b[g].products;
                    c.Jb = "products" === b.translateIfKeyEquals ? ew(l) : l;
                    c.Qa = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Wv = function(a, b) {
            function c(u) {
                return {
                    id: d(O.g.ma),
                    affiliation: d(O.g.Ei),
                    revenue: d(O.g.da),
                    tax: d(O.g.xg),
                    shipping: d(O.g.Sd),
                    coupon: d(O.g.Fi),
                    list: d(O.g.Ve) || d(O.g.Ue) || u
                }
            }
            for (var d = function(u) {
                    return R(b, u)
                }, e = d(O.g.X), f, g = 0; e && g < e.length && !(f = e[g][O.g.Ve] || e[g][O.g.Ue]); g++);
            var l =
                d(O.g.Ub);
            if (G(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Uv(n, p, n[l[p]])
                }
            var q = null,
                t = d(O.g.Gi);
            if (a === O.g.Ga || a === O.g.zc) q = {
                action: a,
                Qa: c(),
                Jb: ew(e)
            };
            else if (a === O.g.wc) q = {
                action: "add",
                Qa: c(),
                Jb: ew(e)
            };
            else if (a === O.g.xc) q = {
                action: "remove",
                Qa: c(),
                Jb: ew(e)
            };
            else if (a === O.g.Ha) q = {
                action: "detail",
                Qa: c(f),
                Jb: ew(e)
            };
            else if (a === O.g.wb) q = {
                action: "impressions",
                Mh: ew(e)
            };
            else if (a === O.g.xb) q = {
                action: "promo_view",
                pd: ew(t) ||
                    ew(e)
            };
            else if ("select_content" === a && t && 0 < t.length || a === O.g.Rb) q = {
                action: "promo_click",
                pd: ew(t) || ew(e)
            };
            else if ("select_content" === a || a === O.g.yc) q = {
                action: "click",
                Qa: {
                    list: d(O.g.Ve) || d(O.g.Ue) || f
                },
                Jb: ew(e)
            };
            else if (a === O.g.Qb || "checkout_progress" === a) {
                var r = {
                    step: a === O.g.Qb ? 1 : d(O.g.wg),
                    option: d(O.g.vg)
                };
                q = {
                    action: "checkout",
                    Jb: ew(e),
                    Qa: J(c(), r)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Qa: {
                    step: d(O.g.wg),
                    option: d(O.g.vg)
                }
            });
            q && (q.yf = d(O.g.ra));
            return q
        },
        Dw = {},
        Rv = function(a, b) {
            var c =
                Dw[a];
            Dw[a] = J(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Ew = Su;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Gw = encodeURI,
        X = encodeURIComponent,
        Hw = function(a, b, c) {
            Mb(a, b, c)
        },
        Iw = function(a, b) {
            if (!a) return !1;
            var c = vf(xf(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f =
                        c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Jw = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1
            })(function(a) {
                var b = ws("gtm.referrer", 1) || C.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? vf(xf(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : vs(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = Tr(c, "gtm.click");
                    xs(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1
            })(function(b) {
                if (!Cs("cl")) {
                    var c = V("document");
                    Nb(c, "click", a, !0);
                    Ds("cl")
                }
                E(b.vtp_gtmOnSuccess)
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : ws("gtm.url", 1)) || ts();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return vs(String(c));
                var e = xf(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? ta(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = vf(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = vf(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = ws(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Es(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.o.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.s = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100;
                Z.__gclidw.isInfrastructure = !1
            })(function(b) {
                E(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || !b.vtp_enableCrossDomain &&
                    !ok() || (Wk(a, g), Q(73) && Bk(g));
                Tk(g);
                Zk(["aw", "dc"], g);
                Ul(g);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var l = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Yk(a, l, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                    Q(73) && (Ck(tk(g.prefix), l, b.vtp_urlPosition, !!b.vtp_formDecoration, g), Ck("FPAU", l, b.vtp_urlPosition, !!b.vtp_formDecoration, g))
                }
                var m = ws(O.g.ia);
                il({
                    eventId: b.vtp_gtmEventId,
                    priorityId: b.vtp_gtmPriorityId,
                    we: !1,
                    qd: void 0 != m && !1 !== m,
                    Hb: g,
                    hd: !0
                });
                b.vtp_enableUrlPassthrough && al(["aw", "dc", "gb"])
            })
        }();

    Z.o.aev = ["google"],
        function() {
            function a(t, r, u, v, w) {
                w || (w = "element");
                var y = r + "." + u,
                    x;
                if (n.hasOwnProperty(y)) x = n[y];
                else {
                    var B = t[w];
                    if (B && (x = v(B), n[y] = x, p.push(y), 35 < p.length)) {
                        var A = p.shift();
                        delete n[A]
                    }
                }
                return x
            }

            function b(t, r, u) {
                var v = t[q[r]];
                return void 0 !== v ? v : u
            }

            function c(t, r) {
                if (!t) return !1;
                var u = d(ts());
                ta(r) || (r = String(r || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < r.length; w++) {
                    var y = r[w];
                    if (y.hasOwnProperty("is_regex"))
                        if (y.is_regex) try {
                            y = new RegExp(y.domain)
                        } catch (A) {
                            continue
                        } else y =
                            y.domain;
                    var x = d(t);
                    if (y instanceof RegExp) {
                        if (y.test(x)) return !1
                    } else {
                        var B = y;
                        if (0 != B.length) {
                            if (0 <= x.indexOf(B)) return !1;
                            v.push(d(B))
                        }
                    }
                }
                return !Iw(t, v)
            }

            function d(t) {
                m.test(t) || (t = "http://" + t);
                return vf(xf(t), "HOST", !0)
            }

            function e(t, r, u, v) {
                switch (t) {
                    case "SUBMIT_TEXT":
                        return a(r, u, "FORM." + t, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(r, u, "FORM." + t, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(r, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(r, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(r,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = r.interactedFormFieldPosition;
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var x = r.interactSequenceNumber;
                        return void 0 === x ? v : x;
                    default:
                        return v
                }
            }

            function f(t) {
                switch (t.tagName.toLowerCase()) {
                    case "input":
                        return Pb(t, "value");
                    case "button":
                        return Qb(t);
                    default:
                        return null
                }
            }

            function g(t) {
                if ("form" === t.tagName.toLowerCase() && t.elements) {
                    for (var r = 0, u = 0; u < t.elements.length; u++) $r(t.elements[u]) && r++;
                    return r
                }
            }

            function l(t, r, u) {
                var v = t.interactedFormField;
                return v && Pb(v, r) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(t) {
                Z.__aev = t;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1
            })(function(t) {
                var r =
                    t.vtp_gtmEventId,
                    u = t.vtp_defaultValue,
                    v = t.vtp_varType,
                    w = t.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var y = w.element;
                        return y && y.tagName || u;
                    case "TEXT":
                        return a(w, r, v, Qb) || u;
                    case "URL":
                        var x;
                        a: {
                            var B = String(w.elementUrl || u || ""),
                                A = xf(B),
                                D = String(t.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    x = B;
                                    break a;
                                case "IS_OUTBOUND":
                                    x = c(B, t.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    x = vf(A, D, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                            }
                        }
                        return x;
                    case "ATTRIBUTE":
                        var I;
                        if (void 0 === t.vtp_attribute) I = b(w,
                            v, u);
                        else {
                            var H = w.element;
                            I = H && Pb(H, t.vtp_attribute) || u || ""
                        }
                        return I;
                    case "MD":
                        var F = t.vtp_mdValue,
                            L = a(w, r, "MD", ls);
                        return F && L ? os(L, F) || u : L || u;
                    case "FORM":
                        return e(String(t.vtp_component || "SUBMIT_TEXT"), w, r, u);
                    default:
                        var K = b(w, v, u);
                        Es(K, "aev", t.vtp_gtmEventId);
                        return K
                }
            })
        }();









    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? Ca(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && J(Jw(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                J(Jw(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ca(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        t = ue || we ? Bo(n._x_19, "/analytics.js") : void 0,
                        r = ol("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    U("analytics.js" === p && t ? t : r, function() {
                        var u = kp();
                        u && u.loaded || q();
                    }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    t = {};
                if (m.vtp_gaSettings) {
                    var r = m.vtp_gaSettings;
                    J(Jw(r.vtp_contentGroup, "index", "group"), p);
                    J(Jw(r.vtp_dimension, "index", "dimension"), q);
                    J(Jw(r.vtp_metric, "index", "metric"), t);
                    var u = J(r);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = J(m, u)
                }
                J(Jw(m.vtp_contentGroup, "index", "group"), p);
                J(Jw(m.vtp_dimension, "index", "dimension"), q);
                J(Jw(m.vtp_metric, "index", "metric"), t);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    y = "",
                    x = "",
                    B = "";
                m.vtp_setTrackerName &&
                    "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (B = m.vtp_trackerName, x = B + ".") : (B = "gtm" + Ge(), x = B + ".");
                var A = function(aa, Y) {
                    for (var ba in Y) Y.hasOwnProperty(ba) && (v[aa + ba] = Y[ba])
                };
                A("contentGroup", p);
                A("dimension", q);
                A("metric", t);
                m.vtp_enableEcommerce && (y = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, y));
                if ("TRACK_EVENT" === m.vtp_trackType) y = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel),
                    v.value = c(Ba, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (y = O.g.Ac, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var D = {};
                        D[O.g.P] = m.vtp_autoLinkDomains;
                        D.use_anchor = m.vtp_useHashAutoLink;
                        D[O.g.rb] = m.vtp_decorateFormsAutoLink;
                        v[O.g.sa] = D
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (y = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) :
                    "TRACK_TIMING" == m.vtp_trackType && (y = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Ba(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var I = {};
                a(v, I);
                v.name || (I.gtmTrackerName = B);
                I.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (I.nonInteraction = m.vtp_nonInteraction);
                var H = lm(km(jm(im(bm(new am(m.vtp_gtmEventId, m.vtp_gtmPriorityId),
                    I), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure)));
                cw(w, y, Date.now(), H);
                var F = mp(m.vtp_functionName);
                if (ra(F)) {
                    var L = function(aa) {
                        var Y = [].slice.call(arguments, 0);
                        Y[0] = x + Y[0];
                        F.apply(window, Y)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else E(m.vtp_gtmOnFailure)
            })
        }();
    Z.o.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.s = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1
            })(function(a) {
                var b = J(a),
                    c = b;
                c[bc.sb] = null;
                c[bc.pf] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.o.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? ws(g) : b[f]
                }
            }(function(b) {
                Z.__awct = b;
                Z.__awct.s = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0;
                Z.__awct.isInfrastructure = !1
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = Jw(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[O.g.da] = b.vtp_conversionValue || 0, f[O.g.ra] =
                        b.vtp_currencyCode, f[O.g.ma] = b.vtp_orderId, f[O.g.Ba] = b.vtp_conversionCookiePrefix, f[O.g.qa] = c, f[O.g.Fd] = d, f[O.g.ia] = ws(O.g.ia), f[O.g.V] = ws("developer_id"), f);
                g[O.g.wa] = ws(O.g.wa), g[O.g.W] = ws(O.g.W), g[O.g.yb] = ws(O.g.yb), g[O.g.Ka] = ws(O.g.Ka);
                b.vtp_rdp && (g[O.g.Db] = !0);
                if (b.vtp_enableCustomParams)
                    for (var l in e) ke.hasOwnProperty(l) || (g[l] = e[l]);
                if (b.vtp_enableProductReporting) {
                    var m = a(b, g, b.vtp_productReportingDataSource);
                    m(O.g.Jd, "vtp_awMerchantId", "aw_merchant_id");
                    m(O.g.Hd, "vtp_awFeedCountry", "aw_feed_country");
                    m(O.g.Id, "vtp_awFeedLanguage", "aw_feed_language");
                    m(O.g.Gd, "vtp_discount", "discount");
                    m(O.g.X, "vtp_items", "items")
                }
                b.vtp_enableShippingData && (g[O.g.Ic] = b.vtp_deliveryPostalCode, g[O.g.Ud] = b.vtp_estimatedDeliveryDate, g[O.g.ob] = b.vtp_deliveryCountry, g[O.g.Sd] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[O.g.va] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(O.g.Fc, "vtp_awNewCustomer", "new_customer");
                    n(O.g.Rd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var t = p;
                if (t) {
                    var r = {};
                    g[O.g.Ec] = (r[b.vtp_conversionLabel] = t, r)
                }
                var u = lm(km(jm(im(bm(new am(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure))),
                    v = "AW-" +
                    b.vtp_conversionId + "/" + b.vtp_conversionLabel;
                u.eventMetadata.hit_type_override = "conversion";
                Yu(v, O.g.Ga, Date.now(), u)
            })
        }();







    var cy = {};
    cy.dataLayer = Ne;
    cy.callback = function(a) {
        De.hasOwnProperty(a) && ra(De[a]) && De[a]();
        delete De[a]
    };
    cy.bootstrap = 0;
    cy._spx = !1;

    function dy() {
        me[S.C] = me[S.C] || cy;
        S.ib && (me["ctid_" + S.ib] = cy);
        Fh();
        Ih() || k(Jh(), function(a, b) {
            Fo(a, b.transportUrl, b.context);
            M(92)
        });
        Ja(Ee, Z.o);
        Ic = Qc
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            Or(m) && (l = g.Qi)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = xf(C.referrer);
                c = "cct.google" === uf(d, "host")
            }
            if (!c) {
                var e = gh("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Jb("https://cct.google/taggy/agent.js"))
        }
        if (ye) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    se ? (v = "OGT", w = "GTAG") : ye && (w = v = "OPT");
                    var y = z["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        z["google.tagmanager.debugui2.queue"] = y, Jb("https://" + le.Dd + "/debug/bootstrap?id=" + S.C + "&src=" + w + "&cond=" + u + "&gtm=" + Lh()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Db,
                            containerProduct: v,
                            debug: !1,
                            id: S.C,
                            destinations: Eh()
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    le.ji && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    Tk: 1,
                    Ri: 2,
                    dj: 3,
                    li: 4,
                    Qi: 5
                },
                l = void 0,
                m = void 0,
                n = vf(z.location, "query", !1, void 0, "gtm_debug");
            Or(n) && (l = g.Ri);
            if (!l && C.referrer) {
                var p = xf(C.referrer);
                "tagassistant.google.com" === uf(p, "host") && (l = g.dj)
            }
            if (!l) {
                var q =
                    gh("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.li)
            }
            l || b();
            if (!l && Pr(m)) {
                var t = function() {
                        if (r) return !0;
                        r = !0;
                        b();
                        l && Db ? f(l) : a()
                    },
                    r = !1;
                Nb(C, "TADebugSignal", function() {
                    t()
                }, !1);
                z.setTimeout(function() {
                    t()
                }, 200)
            } else l && Db ? f(l) : a()
        }
    })(function() {
        if (Q(70)) {
            var a = zn(un.F.Oe, S.C);
            An(a)
        }
        $f().m();
        vi();
        if (S.ib ? me["ctid_" + S.ib] : me[S.C]) {
            var b = me.zones;
            b && b.unregisterChild(Dh());
        } else {
            (Q(11) || Q(13) || Q(55) || Q(48)) && sj();
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) yc.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) Bc.push(f[g]);
            for (var l = c.predicates || [], m = 0; m < l.length; m++) Ac.push(l[m]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) {
                for (var q = n[p], t = {}, r = 0; r < q.length; r++) t[q[r][0]] = Array.prototype.slice.call(q[r], 1);
                zc.push(t)
            }
            Dc = Z;
            Ec = ct;
            dy();
            if (Q(102)) {
                var u;
                if (Q(87)) {
                    for (var v = Ue["7"], w = v ? v.split("|") : [], y = {}, x = 0; x < w.length; x++) y[w[x]] = !0;
                    u = y
                } else u = {};
                for (var B = u, A = 0; A < Eg.length; A++) {
                    var D = Eg[A],
                        I = B[D] ? "granted" : "denied";
                    fg().implicit(D, I)
                }
            }
            Nr();
            Uo = !1;
            Vo = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Xo();
            else {
                Nb(C, "DOMContentLoaded", Xo);
                Nb(C, "readystatechange", Xo);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var H = !0;
                    try {
                        H = !z.frameElement
                    } catch (T) {}
                    H && Yo()
                }
                Nb(z, "load", Xo)
            }
            cr = !1;
            "complete" === C.readyState ? er() : Nb(z, "load", er);
            Fi && z.setInterval(Ji, 864E5);
            Za("HEALTH", 1);
            Ce = Ga();
            cy.bootstrap = Ce;
            if (Q(70)) {
                var W = zn(un.F.gg, S.C);
                if (An(W)) {
                    var fa = zn(un.F.Oe, S.C);
                    Bn(W, fa)
                }
            }
        }
    });

})()