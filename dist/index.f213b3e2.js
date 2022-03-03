// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lSXVC":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "23e5574cf213b3e2";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bCgIp":[function(require,module,exports) {
var _runtime = require("regenerator-runtime/runtime");
const template = document.createElement("template");
template.innerHTML = `
    <link href="suggestions.css" rel="stylesheet">
    <div class="wrapper">
        <input type="text" placeholder="Введите название, ИНН, ОГРН или адрес организации">
        <div class="suggestions"></div>
    </div>
`;
class InputSuggestions extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    async getResults(query) {
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
        var token = "7c558dcad2e616f814b24147370300cde9d8c7cb";
        var options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Token " + token
            },
            body: JSON.stringify({
                query: query
            })
        };
        const data = await fetch(url, options);
        const json = await data.json();
        return json.suggestions;
    }
    async fetchSuggestions(e) {
        // var url =
        //   "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
        // var token = "7c558dcad2e616f814b24147370300cde9d8c7cb";
        // var options = {
        //   method: "POST",
        //   mode: "cors",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     Authorization: "Token " + token,
        //   },
        //   body: JSON.stringify({ query: e.target.value }),
        // };
        // const data = await fetch(url, options);
        // const json = await data.json();
        // const results = json.suggestions;
        const results = [
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "290101001",
                    capital: null,
                    management: {
                        name: "Бределев Александр Николаевич",
                        post: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "48cb94246465dda592a5ea27967808e3d9760ae79ee8ae882199417aa84524c3",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1572393600000,
                        registration_date: 1571356800000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "2901298957",
                    ogrn: "1192901008717",
                    okpo: "41899478",
                    okato: "11401000000",
                    oktmo: "11701000001",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "30.99",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "г Архангельск, ул Коммунальная, д 6 стр 5",
                        unrestricted_value: "163002, Архангельская обл, г Архангельск, ул Коммунальная, д 6 стр 5",
                        data: {
                            postal_code: "163002",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Северо-Западный",
                            region_fias_id: "294277aa-e25d-428c-95ad-46719c4ddb44",
                            region_kladr_id: "2900000000000",
                            region_iso_code: "RU-ARK",
                            region_with_type: "Архангельская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Архангельская",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "06814fb6-0dc3-4bec-ba20-11f894a0faf5",
                            city_kladr_id: "2900000100000",
                            city_with_type: "г Архангельск",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Архангельск",
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: null,
                            city_district_type: null,
                            city_district_type_full: null,
                            city_district: null,
                            settlement_fias_id: null,
                            settlement_kladr_id: null,
                            settlement_with_type: null,
                            settlement_type: null,
                            settlement_type_full: null,
                            settlement: null,
                            street_fias_id: "3a986f84-0d8c-44f1-8518-9e6b0f250073",
                            street_kladr_id: "29000001000019300",
                            street_with_type: "ул Коммунальная",
                            street_type: "ул",
                            street_type_full: "улица",
                            street: "Коммунальная",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "dc9133fb-152c-4f46-9870-557c61675ed3",
                            house_kladr_id: "2900000100001930010",
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "6",
                            block_type: "стр",
                            block_type_full: "строение",
                            block: "5",
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: null,
                            flat_type_full: null,
                            flat: null,
                            flat_area: null,
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "dc9133fb-152c-4f46-9870-557c61675ed3",
                            fias_code: "29000001000000001930010",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "2900000100001930010",
                            geoname_id: "581049",
                            capital_marker: "2",
                            okato: "11401000000",
                            oktmo: "11701000001",
                            tax_office: "2901",
                            tax_office_legal: "2901",
                            timezone: "UTC+3",
                            geo_lat: "64.5295688",
                            geo_lon: "40.572254",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: null,
                            qc_geo: "1",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "163002, ОБЛАСТЬ АРХАНГЕЛЬСКАЯ, Г. АРХАНГЕЛЬСК, УЛ. КОММУНАЛЬНАЯ, Д. 6, СТР. 5",
                            qc: "0"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1571356800000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "402701001",
                    capital: null,
                    management: {
                        name: "Алексеев Денис Сергеевич",
                        post: "ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "29911a2e1e1f0261375d36633f801381fa665b8f091976939aa684c842e61b66",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1559606400000,
                        registration_date: 1334880000000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "4028051108",
                    ogrn: "1124028002273",
                    okpo: "37833858",
                    okato: "29401000000",
                    oktmo: "29701000001",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "45.3",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "г Калуга, ул Вишневского, д 17, кв 55",
                        unrestricted_value: "248007, Калужская обл, г Калуга, ул Вишневского, д 17, кв 55",
                        data: {
                            postal_code: "248007",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Центральный",
                            region_fias_id: "18133adf-90c2-438e-88c4-62c41656de70",
                            region_kladr_id: "4000000000000",
                            region_iso_code: "RU-KLU",
                            region_with_type: "Калужская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Калужская",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "b502ae45-897e-4b6f-9776-6ff49740b537",
                            city_kladr_id: "4000000100000",
                            city_with_type: "г Калуга",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Калуга",
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: null,
                            city_district_type: null,
                            city_district_type_full: null,
                            city_district: null,
                            settlement_fias_id: null,
                            settlement_kladr_id: null,
                            settlement_with_type: null,
                            settlement_type: null,
                            settlement_type_full: null,
                            settlement: null,
                            street_fias_id: "3c8b076e-a3a9-49fc-be7b-42e46e673810",
                            street_kladr_id: "40000001000005700",
                            street_with_type: "ул Вишневского",
                            street_type: "ул",
                            street_type_full: "улица",
                            street: "Вишневского",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "4cd73f00-bb5b-4947-96aa-bf29bbe17ce2",
                            house_kladr_id: "4000000100000570017",
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "17",
                            block_type: null,
                            block_type_full: null,
                            block: null,
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: "кв",
                            flat_type_full: "квартира",
                            flat: "55",
                            flat_area: "34.8",
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "4cd73f00-bb5b-4947-96aa-bf29bbe17ce2",
                            fias_code: "40000001000000000570017",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "4000000100000570017",
                            geoname_id: "553915",
                            capital_marker: "2",
                            okato: "29401000000",
                            oktmo: "29701000001",
                            tax_office: "4027",
                            tax_office_legal: "4027",
                            timezone: "UTC+3",
                            geo_lat: "54.534225",
                            geo_lon: "36.1665452",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: null,
                            qc_geo: "0",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "248007, ОБЛАСТЬ КАЛУЖСКАЯ, Г. КАЛУГА, УЛ. ВИШНЕВСКОГО, Д. 17, КВ. 55",
                            qc: "0"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1334880000000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "773101001",
                    capital: null,
                    management: {
                        name: "Чех Илья Игоревич",
                        post: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "baf582914d601bc5246e881b07dfa6e336091a3857bebc3bf389aa0b4073223c",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1628121600000,
                        registration_date: 1423094400000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "7719402047",
                    ogrn: "1157746078984",
                    okpo: "27539247",
                    okato: "45268569000",
                    oktmo: "45321000000",
                    okogu: "4210011",
                    okfs: "34",
                    okved: "72.19",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "121205, ГОРОД МОСКВА, ТЕР СКОЛКОВО ИННОВАЦИОННОГО ЦЕНТРА, Б-Р БОЛЬШОЙ, Д. 42, СТР. 1, ЭТ 1 ПОМ 334 РАБ 10",
                        unrestricted_value: "121205, ГОРОД МОСКВА, ТЕР СКОЛКОВО ИННОВАЦИОННОГО ЦЕНТРА, Б-Р БОЛЬШОЙ, Д. 42, СТР. 1, ЭТ 1 ПОМ 334 РАБ 10",
                        data: {
                            postal_code: "121205",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Центральный",
                            region_fias_id: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                            region_kladr_id: "7700000000000",
                            region_iso_code: "RU-MOW",
                            region_with_type: "г Москва",
                            region_type: "г",
                            region_type_full: "город",
                            region: "Москва",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                            city_kladr_id: "7700000000000",
                            city_with_type: "г Москва",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Москва",
                            city_area: "Западный",
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: "Можайский р-н",
                            city_district_type: "р-н",
                            city_district_type_full: "район",
                            city_district: "Можайский",
                            settlement_fias_id: "db22b565-f8ab-464b-b76f-1106629e9e95",
                            settlement_kladr_id: "7700000043000",
                            settlement_with_type: "тер Сколково инновационного центра",
                            settlement_type: "тер",
                            settlement_type_full: "территория",
                            settlement: "Сколково инновационного центра",
                            street_fias_id: "5a08abaa-929f-4855-a460-c691f37b5a25",
                            street_kladr_id: "77000000430000400",
                            street_with_type: "Большой б-р",
                            street_type: "б-р",
                            street_type_full: "бульвар",
                            street: "Большой",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "0519d3e3-d0f6-4106-b1af-c14ddf8f43f5",
                            house_kladr_id: "7700000043000040007",
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "42",
                            block_type: "стр",
                            block_type_full: "строение",
                            block: "1",
                            entrance: null,
                            floor: "1",
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: "помещ",
                            flat_type_full: "помещение",
                            flat: "334",
                            flat_area: null,
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "0519d3e3-d0f6-4106-b1af-c14ddf8f43f5",
                            fias_code: "77000000430000000040007",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "7700000043000040007",
                            geoname_id: "524901",
                            capital_marker: "0",
                            okato: "45268569000",
                            oktmo: "45321000",
                            tax_office: "7731",
                            tax_office_legal: "7731",
                            timezone: "UTC+3",
                            geo_lat: "55.6921337",
                            geo_lon: "37.3474933",
                            beltway_hit: "OUT_MKAD",
                            beltway_distance: "4",
                            metro: [
                                {
                                    name: "Сколково",
                                    line: "Белорусско-Савеловский",
                                    distance: 0.9
                                },
                                {
                                    name: "Баковка",
                                    line: "Белорусско-Савеловский",
                                    distance: 2.3
                                },
                                {
                                    name: "Немчиновка",
                                    line: "Белорусско-Савеловский",
                                    distance: 3.2
                                }, 
                            ],
                            qc_geo: "0",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "121205, ГОРОД МОСКВА, ТЕР СКОЛКОВО ИННОВАЦИОННОГО ЦЕНТРА, Б-Р БОЛЬШОЙ, Д. 42, СТР. 1, ЭТ 1 ПОМ 334 РАБ 10",
                            qc: "1"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1423094400000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "526201001",
                    capital: null,
                    management: {
                        name: "Снегуренко Евгений Алексеевич",
                        post: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "5b1bbf0bf10088dab2140cfd02987abb5116cef5828de47016456054840f47be",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1502409600000,
                        registration_date: 1436745600000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "5262321353",
                    ogrn: "1155262009561",
                    okpo: "50333681",
                    okato: "22401379000",
                    oktmo: "22701000001",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "73.11",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "г Нижний Новгород, ул Нартова, д 6, кв 5",
                        unrestricted_value: "603081, Нижегородская обл, г Нижний Новгород, Советский р-н, ул Нартова, д 6, кв 5",
                        data: {
                            postal_code: "603081",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Приволжский",
                            region_fias_id: "88cd27e2-6a8a-4421-9718-719a28a0a088",
                            region_kladr_id: "5200000000000",
                            region_iso_code: "RU-NIZ",
                            region_with_type: "Нижегородская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Нижегородская",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "555e7d61-d9a7-4ba6-9770-6caa8198c483",
                            city_kladr_id: "5200000100000",
                            city_with_type: "г Нижний Новгород",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Нижний Новгород",
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: "Советский р-н",
                            city_district_type: "р-н",
                            city_district_type_full: "район",
                            city_district: "Советский",
                            settlement_fias_id: null,
                            settlement_kladr_id: null,
                            settlement_with_type: null,
                            settlement_type: null,
                            settlement_type_full: null,
                            settlement: null,
                            street_fias_id: "c69b5f1e-7fe9-43d4-b478-b523e22a0373",
                            street_kladr_id: "52000001000071500",
                            street_with_type: "ул Нартова",
                            street_type: "ул",
                            street_type_full: "улица",
                            street: "Нартова",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "c38269c0-767d-4c6b-822f-8d4b0b284027",
                            house_kladr_id: "5200000100007150025",
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "6",
                            block_type: null,
                            block_type_full: null,
                            block: null,
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: "кв",
                            flat_type_full: "квартира",
                            flat: "5",
                            flat_area: null,
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "c38269c0-767d-4c6b-822f-8d4b0b284027",
                            fias_code: "52000001000000007150025",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "5200000100007150025",
                            geoname_id: "520555",
                            capital_marker: "2",
                            okato: "22401379000",
                            oktmo: "22701000001",
                            tax_office: "5262",
                            tax_office_legal: "5262",
                            timezone: "UTC+3",
                            geo_lat: "56.2824655",
                            geo_lon: "43.9954163",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: [
                                {
                                    name: "Горьковская",
                                    line: "Автозаводская",
                                    distance: 3.5
                                },
                                {
                                    name: "Ленинская",
                                    line: "Автозаводская",
                                    distance: 4
                                },
                                {
                                    name: "Заречная",
                                    line: "Автозаводская",
                                    distance: 4.2
                                }, 
                            ],
                            qc_geo: "0",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "603104, ОБЛАСТЬ НИЖЕГОРОДСКАЯ, Г. НИЖНИЙ НОВГОРОД, УЛ. НАРТОВА, Д. 6, К. 5, ОФИС 12",
                            qc: "0"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1436745600000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "631801001",
                    capital: null,
                    management: {
                        name: "Сладков Роман Николаевич",
                        post: "ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "799a54dcee1652b275f1e75f00e1fb9b8a818b4c3822972a33ee84c3cadec5e2",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1602547200000,
                        registration_date: 1423180800000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "6318002113",
                    ogrn: "1156318001058",
                    okpo: "40962051",
                    okato: "36401392000",
                    oktmo: "36701345000",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "45.40.2",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "443017, ОБЛАСТЬ САМАРСКАЯ, Г. САМАРА, Ш. ЗАВОДСКОЕ, Д. 13А, ЛИТЕР АА1А2А3",
                        unrestricted_value: "443017, ОБЛАСТЬ САМАРСКАЯ, Г. САМАРА, Ш. ЗАВОДСКОЕ, Д. 13А, ЛИТЕР АА1А2А3",
                        data: {
                            postal_code: "443022",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Приволжский",
                            region_fias_id: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
                            region_kladr_id: "6300000000000",
                            region_iso_code: "RU-SAM",
                            region_with_type: "Самарская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Самарская",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "bb035cc3-1dc2-4627-9d25-a1bf2d4b936b",
                            city_kladr_id: "6300000100000",
                            city_with_type: "г Самара",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Самара",
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: "Советский р-н",
                            city_district_type: "р-н",
                            city_district_type_full: "район",
                            city_district: "Советский",
                            settlement_fias_id: null,
                            settlement_kladr_id: null,
                            settlement_with_type: null,
                            settlement_type: null,
                            settlement_type_full: null,
                            settlement: null,
                            street_fias_id: "099e7974-8798-4107-a71f-4511d724138f",
                            street_kladr_id: "63000001000085500",
                            street_with_type: "Заводское шоссе",
                            street_type: "ш",
                            street_type_full: "шоссе",
                            street: "Заводское",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: null,
                            house_kladr_id: null,
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "13А",
                            block_type: "стр",
                            block_type_full: "строение",
                            block: "аа",
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: null,
                            flat_type_full: null,
                            flat: null,
                            flat_area: null,
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "099e7974-8798-4107-a71f-4511d724138f",
                            fias_code: "63000001000000008550000",
                            fias_level: "7",
                            fias_actuality_state: "0",
                            kladr_id: "63000001000085500",
                            geoname_id: "499099",
                            capital_marker: "2",
                            okato: "36401392000",
                            oktmo: "36701345",
                            tax_office: "6318",
                            tax_office_legal: "6318",
                            timezone: "UTC+4",
                            geo_lat: "53.1811884",
                            geo_lon: "50.2137364",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: [
                                {
                                    name: "Советская",
                                    line: "Первая",
                                    distance: 2.3
                                },
                                {
                                    name: "Спортивная",
                                    line: "Первая",
                                    distance: 2.4
                                },
                                {
                                    name: "Гагаринская",
                                    line: "Первая",
                                    distance: 3.3
                                }, 
                            ],
                            qc_geo: "1",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "443017, ОБЛАСТЬ САМАРСКАЯ, Г. САМАРА, Ш. ЗАВОДСКОЕ, Д. 13А, ЛИТЕР АА1А2А3",
                            qc: "1"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1423180800000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "667801001",
                    capital: null,
                    management: {
                        name: "Арсентьева Алла Юрьевна",
                        post: "ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "c8629a69eef93b52a80183b9786c08f939879b95efcbd0b7b41f98e3ac65a78f",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1605744000000,
                        registration_date: 1367798400000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "6678029047",
                    ogrn: "1136678006706",
                    okpo: "25078598",
                    okato: "65412000007",
                    oktmo: "65731000136",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "52.29",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "Свердловская обл, г Березовский, поселок Лосиный, ул Октябрьская, стр 6, офис 3",
                        unrestricted_value: "623710, Свердловская обл, г Березовский, поселок Лосиный, ул Октябрьская, стр 6, офис 3",
                        data: {
                            postal_code: "623710",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Уральский",
                            region_fias_id: "92b30014-4d52-4e2e-892d-928142b924bf",
                            region_kladr_id: "6600000000000",
                            region_iso_code: "RU-SVE",
                            region_with_type: "Свердловская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Свердловская",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "adf5df2b-2c2e-45a9-b971-05550353cf43",
                            city_kladr_id: "6600000300000",
                            city_with_type: "г Березовский",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Березовский",
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: null,
                            city_district_type: null,
                            city_district_type_full: null,
                            city_district: null,
                            settlement_fias_id: "17904e21-bee0-4722-8959-f7fe35c4636f",
                            settlement_kladr_id: "6600000300900",
                            settlement_with_type: "поселок Лосиный",
                            settlement_type: "п",
                            settlement_type_full: "поселок",
                            settlement: "Лосиный",
                            street_fias_id: "c2090ccc-7b8d-4aa7-983d-6529920c5a63",
                            street_kladr_id: "66000003009000800",
                            street_with_type: "ул Октябрьская",
                            street_type: "ул",
                            street_type_full: "улица",
                            street: "Октябрьская",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "1633552e-980a-45d1-a2c4-d1e45c66394e",
                            house_kladr_id: "6600000300900080016",
                            house_cadnum: null,
                            house_type: "стр",
                            house_type_full: "строение",
                            house: "6",
                            block_type: null,
                            block_type_full: null,
                            block: null,
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: "офис",
                            flat_type_full: "офис",
                            flat: "3",
                            flat_area: null,
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "1633552e-980a-45d1-a2c4-d1e45c66394e",
                            fias_code: "66000003009000000080016",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "6600000300900080016",
                            geoname_id: "1510203",
                            capital_marker: "0",
                            okato: "65412000007",
                            oktmo: "65731000136",
                            tax_office: "6678",
                            tax_office_legal: "6678",
                            timezone: "UTC+5",
                            geo_lat: "57.138429",
                            geo_lon: "61.0725829",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: null,
                            qc_geo: "2",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "623710, ОБЛАСТЬ СВЕРДЛОВСКАЯ, Г. БЕРЕЗОВСКИЙ, П ЛОСИНЫЙ, УЛ. ОКТЯБРЬСКАЯ, СТР. 6, ОФИС 3",
                            qc: "0"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1367798400000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "720301001",
                    capital: null,
                    management: {
                        name: "Рябова Мария Васильевна",
                        post: "ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "7bfa27fe9902aebaea21938e9395b122071e1f5b842ff15e4024523f22cb3d21",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1640995200000,
                        registration_date: 1172448000000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "7203190416",
                    ogrn: "1077203011115",
                    okpo: "98784938",
                    okato: "71401368000",
                    oktmo: "71701000001",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "42.22",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "г Тюмень, ул Дамбовская, д 10",
                        unrestricted_value: "625034, Тюменская обл, г Тюмень, ул Дамбовская, д 10",
                        data: {
                            postal_code: "625034",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Уральский",
                            region_fias_id: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
                            region_kladr_id: "7200000000000",
                            region_iso_code: "RU-TYU",
                            region_with_type: "Тюменская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Тюменская",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "9ae64229-9f7b-4149-b27a-d1f6ec74b5ce",
                            city_kladr_id: "7200000100000",
                            city_with_type: "г Тюмень",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Тюмень",
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: null,
                            city_district_type: null,
                            city_district_type_full: null,
                            city_district: null,
                            settlement_fias_id: null,
                            settlement_kladr_id: null,
                            settlement_with_type: null,
                            settlement_type: null,
                            settlement_type_full: null,
                            settlement: null,
                            street_fias_id: "d5ddd9c2-0ebf-4987-aed5-358fc60db06f",
                            street_kladr_id: "72000001000025900",
                            street_with_type: "ул Дамбовская",
                            street_type: "ул",
                            street_type_full: "улица",
                            street: "Дамбовская",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "72e17407-8f3e-41c5-9cbd-edf3b1f63a0b",
                            house_kladr_id: "7200000100002590031",
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "10",
                            block_type: null,
                            block_type_full: null,
                            block: null,
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: null,
                            flat_type_full: null,
                            flat: null,
                            flat_area: "446.0",
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "72e17407-8f3e-41c5-9cbd-edf3b1f63a0b",
                            fias_code: "72000001000000002590031",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "7200000100002590031",
                            geoname_id: "1488754",
                            capital_marker: "2",
                            okato: "71401000000",
                            oktmo: "71701000001",
                            tax_office: "7230",
                            tax_office_legal: "7203",
                            timezone: "UTC+5",
                            geo_lat: "57.1529173",
                            geo_lon: "65.6099649",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: null,
                            qc_geo: "0",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "625039, ОБЛАСТЬ ТЮМЕНСКАЯ, Г. ТЮМЕНЬ, УЛ. ДАМБОВСКАЯ, Д.10, -, -",
                            qc: "0"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1172448000000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "720301001",
                    capital: null,
                    management: {
                        name: "Никифоров Павел Владимирович",
                        post: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "0321847a77de25e03df98cc05f0ed24a34a6e4de02b345d1e29a2e1634bc4d51",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1542067200000,
                        registration_date: 1541721600000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "7203462155",
                    ogrn: "1187232027564",
                    okpo: "34086315",
                    okato: "71401372000",
                    oktmo: "71701000001",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "45.40",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "г Тюмень, ул Попова, д 7, кв 78",
                        unrestricted_value: "625048, Тюменская обл, г Тюмень, ул Попова, д 7, кв 78",
                        data: {
                            postal_code: "625048",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Уральский",
                            region_fias_id: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
                            region_kladr_id: "7200000000000",
                            region_iso_code: "RU-TYU",
                            region_with_type: "Тюменская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Тюменская",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "9ae64229-9f7b-4149-b27a-d1f6ec74b5ce",
                            city_kladr_id: "7200000100000",
                            city_with_type: "г Тюмень",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Тюмень",
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: null,
                            city_district_type: null,
                            city_district_type_full: null,
                            city_district: null,
                            settlement_fias_id: null,
                            settlement_kladr_id: null,
                            settlement_with_type: null,
                            settlement_type: null,
                            settlement_type_full: null,
                            settlement: null,
                            street_fias_id: "838b9d67-ddbc-40d7-9f30-79db31fd7988",
                            street_kladr_id: "72000001000015100",
                            street_with_type: "ул Попова",
                            street_type: "ул",
                            street_type_full: "улица",
                            street: "Попова",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "e82ace85-9b3d-4356-a185-fab7c2757c29",
                            house_kladr_id: "7200000100001510017",
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "7",
                            block_type: null,
                            block_type_full: null,
                            block: null,
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: "кв",
                            flat_type_full: "квартира",
                            flat: "78",
                            flat_area: "63.7",
                            square_meter_price: "64937",
                            flat_price: "4136487",
                            postal_box: null,
                            fias_id: "e82ace85-9b3d-4356-a185-fab7c2757c29",
                            fias_code: "72000001000000001510017",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "7200000100001510017",
                            geoname_id: "1488754",
                            capital_marker: "2",
                            okato: "71401000000",
                            oktmo: "71701000001",
                            tax_office: "7230",
                            tax_office_legal: "7203",
                            timezone: "UTC+5",
                            geo_lat: "57.1431044",
                            geo_lon: "65.5427791",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: null,
                            qc_geo: "0",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "625048, ОБЛАСТЬ ТЮМЕНСКАЯ, Г. ТЮМЕНЬ, УЛ. ПОПОВА, Д. 7, КВ. 78",
                            qc: "0"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1541721600000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "МОТОРИКА"',
                unrestricted_value: 'ООО "МОТОРИКА"',
                data: {
                    kpp: "731001001",
                    capital: null,
                    management: {
                        name: "Мазавин Алексей Владимирович",
                        post: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "0a487e33550bfb31a5dfcedb2a1bf8ec165838bf12dbeb6d619043fc13bec65b",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1614816000000,
                        registration_date: 1060905600000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОТОРИКА"',
                        short_with_opf: 'ООО "МОТОРИКА"',
                        latin: null,
                        full: "МОТОРИКА",
                        short: "МОТОРИКА"
                    },
                    inn: "7310008820",
                    ogrn: "1037300460823",
                    okpo: "25449793",
                    okato: "73222560000",
                    oktmo: "73622160051",
                    okogu: "4210014",
                    okfs: "16",
                    okved: "29.31",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: {
                        tax_system: null,
                        income: null,
                        expense: null,
                        debt: null,
                        penalty: null,
                        year: null
                    },
                    address: {
                        value: "Ульяновская обл, Мелекесский р-н, рп Новая Майна, ул Спортивная, зд 10",
                        unrestricted_value: "433556, Ульяновская обл, Мелекесский р-н, рп Новая Майна, ул Спортивная, зд 10",
                        data: {
                            postal_code: "433556",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Приволжский",
                            region_fias_id: "fee76045-fe22-43a4-ad58-ad99e903bd58",
                            region_kladr_id: "7300000000000",
                            region_iso_code: "RU-ULY",
                            region_with_type: "Ульяновская обл",
                            region_type: "обл",
                            region_type_full: "область",
                            region: "Ульяновская",
                            area_fias_id: "214a98f4-bd25-402b-9876-ce91d69b70a2",
                            area_kladr_id: "7300900000000",
                            area_with_type: "Мелекесский р-н",
                            area_type: "р-н",
                            area_type_full: "район",
                            area: "Мелекесский",
                            city_fias_id: null,
                            city_kladr_id: null,
                            city_with_type: null,
                            city_type: null,
                            city_type_full: null,
                            city: null,
                            city_area: null,
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: null,
                            city_district_type: null,
                            city_district_type_full: null,
                            city_district: null,
                            settlement_fias_id: "2c462b9b-7558-4166-9c1a-48a97e1a83d0",
                            settlement_kladr_id: "7300900001600",
                            settlement_with_type: "рп Новая Майна",
                            settlement_type: "рп",
                            settlement_type_full: "рабочий поселок",
                            settlement: "Новая Майна",
                            street_fias_id: "f0b5f1d2-e936-4352-a218-19beb8e664fe",
                            street_kladr_id: "73009000016003600",
                            street_with_type: "ул Спортивная",
                            street_type: "ул",
                            street_type_full: "улица",
                            street: "Спортивная",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "1253dd70-bc1a-45f0-8430-67e19469eaec",
                            house_kladr_id: "7300900001600360010",
                            house_cadnum: null,
                            house_type: "зд",
                            house_type_full: "здание",
                            house: "10",
                            block_type: null,
                            block_type_full: null,
                            block: null,
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: null,
                            flat_type_full: null,
                            flat: null,
                            flat_area: null,
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "1253dd70-bc1a-45f0-8430-67e19469eaec",
                            fias_code: "73009000016000000360010",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "7300900001600360010",
                            geoname_id: "479119",
                            capital_marker: "0",
                            okato: "73222560000",
                            oktmo: "73622160051",
                            tax_office: "7329",
                            tax_office_legal: "7329",
                            timezone: "UTC+4",
                            geo_lat: "54.1553108",
                            geo_lon: "49.7554759",
                            beltway_hit: null,
                            beltway_distance: null,
                            metro: null,
                            qc_geo: "2",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "433556, ОБЛАСТЬ УЛЬЯНОВСКАЯ, Р-Н МЕЛЕКЕССКИЙ, РП НОВАЯ МАЙНА, УЛ. СПОРТИВНАЯ, Д.10",
                            qc: "0"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1060905600000,
                    okved_type: "2014",
                    employee_count: null
                }
            },
            {
                value: 'ООО "ИЦ МОТОРИКА"',
                unrestricted_value: 'ООО "ИЦ МОТОРИКА"',
                data: {
                    kpp: "773101001",
                    capital: null,
                    management: {
                        name: "Чех Илья Игоревич",
                        post: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
                        disqualified: null
                    },
                    founders: null,
                    managers: null,
                    predecessors: null,
                    successors: null,
                    branch_type: "MAIN",
                    branch_count: 0,
                    source: null,
                    qc: null,
                    hid: "11fb2cef5967680d0da73657085fc2147643a365c78a53dc3741ed0c6e3ff9c2",
                    type: "LEGAL",
                    state: {
                        status: "ACTIVE",
                        code: null,
                        actuality_date: 1620345600000,
                        registration_date: 1612396800000,
                        liquidation_date: null
                    },
                    opf: {
                        type: "2014",
                        code: "12300",
                        full: "Общество с ограниченной ответственностью",
                        short: "ООО"
                    },
                    name: {
                        full_with_opf: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР МОТОРИКА"',
                        short_with_opf: 'ООО "ИЦ МОТОРИКА"',
                        latin: null,
                        full: "ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР МОТОРИКА",
                        short: "ИЦ МОТОРИКА"
                    },
                    inn: "9731074967",
                    ogrn: "1217700042218",
                    okpo: "47067632",
                    okato: "45268569000",
                    oktmo: "45321000000",
                    okogu: "4210011",
                    okfs: "34",
                    okved: "72.19",
                    okveds: null,
                    authorities: null,
                    documents: null,
                    licenses: null,
                    finance: null,
                    address: {
                        value: "121205, Г.Москва, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ МОЖАЙСКИЙ, ТЕР СКОЛКОВО ИННОВАЦИОННОГО ЦЕНТРА, Б-Р БОЛЬШОЙ, Д. 42, СТР. 1, ЭТАЖ/ПОМ/РМ 1/306/09",
                        unrestricted_value: "121205, Г.Москва, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ МОЖАЙСКИЙ, ТЕР СКОЛКОВО ИННОВАЦИОННОГО ЦЕНТРА, Б-Р БОЛЬШОЙ, Д. 42, СТР. 1, ЭТАЖ/ПОМ/РМ 1/306/09",
                        data: {
                            postal_code: "121205",
                            country: "Россия",
                            country_iso_code: "RU",
                            federal_district: "Центральный",
                            region_fias_id: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                            region_kladr_id: "7700000000000",
                            region_iso_code: "RU-MOW",
                            region_with_type: "г Москва",
                            region_type: "г",
                            region_type_full: "город",
                            region: "Москва",
                            area_fias_id: null,
                            area_kladr_id: null,
                            area_with_type: null,
                            area_type: null,
                            area_type_full: null,
                            area: null,
                            city_fias_id: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                            city_kladr_id: "7700000000000",
                            city_with_type: "г Москва",
                            city_type: "г",
                            city_type_full: "город",
                            city: "Москва",
                            city_area: "Западный",
                            city_district_fias_id: null,
                            city_district_kladr_id: null,
                            city_district_with_type: "Можайский р-н",
                            city_district_type: "р-н",
                            city_district_type_full: "район",
                            city_district: "Можайский",
                            settlement_fias_id: "db22b565-f8ab-464b-b76f-1106629e9e95",
                            settlement_kladr_id: "7700000043000",
                            settlement_with_type: "тер Сколково инновационного центра",
                            settlement_type: "тер",
                            settlement_type_full: "территория",
                            settlement: "Сколково инновационного центра",
                            street_fias_id: "5a08abaa-929f-4855-a460-c691f37b5a25",
                            street_kladr_id: "77000000430000400",
                            street_with_type: "Большой б-р",
                            street_type: "б-р",
                            street_type_full: "бульвар",
                            street: "Большой",
                            stead_fias_id: null,
                            stead_cadnum: null,
                            stead_type: null,
                            stead_type_full: null,
                            stead: null,
                            house_fias_id: "0519d3e3-d0f6-4106-b1af-c14ddf8f43f5",
                            house_kladr_id: "7700000043000040007",
                            house_cadnum: null,
                            house_type: "д",
                            house_type_full: "дом",
                            house: "42",
                            block_type: "стр",
                            block_type_full: "строение",
                            block: "1",
                            entrance: null,
                            floor: null,
                            flat_fias_id: null,
                            flat_cadnum: null,
                            flat_type: null,
                            flat_type_full: null,
                            flat: null,
                            flat_area: null,
                            square_meter_price: null,
                            flat_price: null,
                            postal_box: null,
                            fias_id: "0519d3e3-d0f6-4106-b1af-c14ddf8f43f5",
                            fias_code: "77000000430000000040007",
                            fias_level: "8",
                            fias_actuality_state: "0",
                            kladr_id: "7700000043000040007",
                            geoname_id: "524901",
                            capital_marker: "0",
                            okato: "45268569000",
                            oktmo: "45321000",
                            tax_office: "7731",
                            tax_office_legal: "7731",
                            timezone: "UTC+3",
                            geo_lat: "55.6921337",
                            geo_lon: "37.3474933",
                            beltway_hit: "OUT_MKAD",
                            beltway_distance: "4",
                            metro: [
                                {
                                    name: "Сколково",
                                    line: "Белорусско-Савеловский",
                                    distance: 0.9
                                },
                                {
                                    name: "Баковка",
                                    line: "Белорусско-Савеловский",
                                    distance: 2.3
                                },
                                {
                                    name: "Немчиновка",
                                    line: "Белорусско-Савеловский",
                                    distance: 3.2
                                }, 
                            ],
                            qc_geo: "0",
                            qc_complete: null,
                            qc_house: null,
                            history_values: null,
                            unparsed_parts: null,
                            source: "121205, Г.Москва, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ МОЖАЙСКИЙ, ТЕР СКОЛКОВО ИННОВАЦИОННОГО ЦЕНТРА, Б-Р БОЛЬШОЙ, Д. 42, СТР. 1, ЭТАЖ/ПОМ/РМ 1/306/09",
                            qc: "1"
                        }
                    },
                    phones: null,
                    emails: null,
                    ogrn_date: 1612396800000,
                    okved_type: "2014",
                    employee_count: null
                }
            }, 
        ];
        const list = this.shadowRoot.querySelector(".suggestions");
        if (results.length > 0 && e.target.value.length > 0) {
            list.style["display"] = "block";
            list.innerHTML = "";
            results.forEach((result)=>{
                const el = document.createElement("div");
                el.classList.add("suggestion-item");
                el.innerHTML += `
            <p>${result.value}</p>
        `;
                list.appendChild(el);
            });
        }
        if (e.target.value.length === 0) list.style["display"] = "none";
    }
    connectedCallback() {
        this.shadowRoot.querySelector("input").addEventListener("input", (e)=>this.fetchSuggestions(e)
        );
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector("input").removeEventListener();
    }
}
window.customElements.define("input-suggestions", InputSuggestions);

},{"regenerator-runtime/runtime":"dXNgZ"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err1) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},["lSXVC","bCgIp"], "bCgIp", "parcelRequireb83f")

//# sourceMappingURL=index.f213b3e2.js.map
