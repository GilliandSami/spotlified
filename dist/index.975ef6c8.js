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
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _artistCoverJs = require("./elements/artist-cover.js");
var _songItemJs = require("./elements/song-item.js");
var _artistsJs = require("./sections/artists.js");
var _songsJs = require("./sections/songs.js");
var _helpersJs = require("./helpers.js");
function routing() {
    const hash = window.location.hash || "#home";
    const tabHash = hash.split("-");
    (0, _helpersJs.activateLink)(tabHash[0]);
    switch(tabHash[0]){
        case "#home":
            (0, _helpersJs.displaySection)("home");
            break;
        ////////////////////////////////////////////////////////////////////
        case "#artists":
            if (tabHash[1]) {
                (0, _helpersJs.displaySection)("list");
                (0, _songsJs.displayArtistsSongs)(tabHash[1]);
            } else {
                (0, _helpersJs.displaySection)("artists");
                (0, _artistsJs.displayArtists)();
            }
            break;
        ////////////////////////////////////////////////////////////////////
        case "#player":
            (0, _helpersJs.displaySection)("player");
            break;
        ////////////////////////////////////////////////////////////////////
        case "#search":
            (0, _helpersJs.displaySection)("list");
            (0, _songsJs.displaySearchSongs)(tabHash[1]);
            break;
        ////////////////////////////////////////////////////////////////////
        case "#favorites":
            (0, _helpersJs.displaySection)("list");
            (0, _songsJs.displayFavoriteSongs)();
            break;
        ////////////////////////////////////////////////////////////////////
        case "#songs":
            (0, _helpersJs.displaySection)("lyrics");
            (0, _songsJs.displayLyrics)(tabHash[1]);
            break;
    }
}
routing();
window.addEventListener("hashchange", routing);
// Fonctionnalité de recherche - Interactions
const searchButton = document.querySelector("#search-trigger");
const searchInput = document.querySelector("#search-input");
searchButton.addEventListener("click", ()=>{
    searchInput.classList.add("active");
});
searchInput.addEventListener("input", (input)=>{
    window.location.hash = `#search-${encodeURIComponent(input.currentTarget.value)}`;
});

},{"./elements/artist-cover.js":"9wH0T","./elements/song-item.js":"2U4Q3","./sections/artists.js":"7tyNw","./sections/songs.js":"10tUP","./helpers.js":"ecN5O"}],"9wH0T":[function(require,module,exports) {
class ArtistCover extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<a href=${this.getAttribute("href")}>
            <img src=${this.getAttribute("cover")} />
            <div class="artist-list-item-title"> ${this.getAttribute("name")}</div>
        </a>`;
    }
}
customElements.define("artist-cover", ArtistCover);

},{}],"2U4Q3":[function(require,module,exports) {
const playClick = new CustomEvent("play_click");
const favoriteClick = new CustomEvent("favorite_click");
class SongItem extends HTMLElement {
    // observedAttributes est un getter statique qui retourne un tableau des noms d'attributs à observer.
    // Lorsque l'un de ces attributs change de valeur, attributeChangedCallback est appelé.
    static observedAttributes = [
        "favorite",
        "playpause"
    ];
    // connectedCallback est une méthode du cycle de vie qui est appelée lorsque l'élément est inséré dans le DOM.
    // C'est l'endroit idéal pour configurer l'initialisation, attacher des événements, ou effectuer le rendu.
    connectedCallback() {
        this.render();
    }
    // attributeChangedCallback est appelé automatiquement lorsque les attributs listés dans observedAttributes changent.
    // Ici, il appelle simplement render pour mettre à jour l'élément avec le nouvel état des attributs.
    attributeChangedCallback() {
        this.render();
    }
    render() {
        const favoriteIcon = this.getAttribute("favorite") == "true" ? "favorite" : "favorite_border";
        const playIcon = this.getAttribute("playpause") == "true" ? "pause" : "play_arrow";
        this.innerHTML = `<a href="${this.getAttribute("href")}">
            <div class="list-item-title">${this.getAttribute("title")}</div>
            <div class="list-item-actions">
                <button type="button" class="icon-button favorite-button ">
                    <span class="material-icons">${favoriteIcon}</span>
                </button>
                <button type="button" class="icon-button play-button">
                    <span class="material-icons">${playIcon}</span>
                </button>
            </div>
        </a>`;
        // Attache des gestionnaires d'événements aux boutons pour dispatcher des événements personnalisés lorsque ceux-ci sont cliqués.
        this.querySelector(".play-button").addEventListener("click", (e)=>{
            e.preventDefault();
            this.dispatchEvent(playClick);
        });
        this.querySelector(".favorite-button").addEventListener("click", (e)=>{
            e.preventDefault();
            this.dispatchEvent(favoriteClick);
        });
    }
}
customElements.define("song-item", SongItem);

},{}],"7tyNw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayArtists", ()=>displayArtists);
var _api = require("../api");
const artistList = document.querySelector(".artist-list");
function displayArtists() {
    (0, _api.loadArtists)().then((artists)=>{
        artistList.innerHTML = "";
        artists.forEach((artist)=>{
            const artistElement = document.createElement("artist-cover");
            artistElement.setAttribute("href", `#artists-${artist.id}`);
            artistElement.setAttribute("name", artist.name);
            artistElement.setAttribute("cover", artist.image_url);
            artistList.insertAdjacentElement("afterbegin", artistElement);
        });
    });
}

},{"../api":"8Zgej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Zgej":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadArtists", ()=>loadArtists);
parcelHelpers.export(exports, "loadSongs", ()=>loadSongs);
parcelHelpers.export(exports, "loadSearch", ()=>loadSearch);
parcelHelpers.export(exports, "loadLyrics", ()=>loadLyrics);
const MYURL = "https://webmob-ui-22-spotlified.herokuapp.com";
function loadJSON(url) {
    return fetch(url).then((answer)=>{
        return answer.json();
    });
}
function loadArtists() {
    const url = `${MYURL}/api/artists`;
    return loadJSON(url);
}
function loadSongs(id) {
    const url = `${MYURL}/api/artists/${id}/songs`;
    return loadJSON(url);
}
function loadSearch(query) {
    const url = `${MYURL}/api/songs/search/${query}`;
    return loadJSON(url);
}
function loadLyrics(id) {
    const url = `${MYURL}/api/songs/${id}`;
    return loadJSON(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"10tUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayArtistsSongs", ()=>displayArtistsSongs);
parcelHelpers.export(exports, "displaySearchSongs", ()=>displaySearchSongs);
parcelHelpers.export(exports, "displayFavoriteSongs", ()=>displayFavoriteSongs);
parcelHelpers.export(exports, "displayLyrics", ()=>displayLyrics);
var _api = require("../api");
var _localStorageJs = require("../local-storage.js");
var _playerJs = require("./player.js");
const listSectionTitle = document.querySelector("#list-section h4");
const songList = document.querySelector(".list");
function displaySongsArray(songs) {
    songList.innerHTML = "";
    songs.forEach((song)=>{
        const songElement = document.createElement("song-item");
        songElement.setAttribute("title", song.title);
        songElement.setAttribute("favorite", !!(0, _localStorageJs.getItem)(song.id));
        songElement.setAttribute("href", `#songs-${song.id}`);
        songElement.addEventListener("play_click", ()=>{
            const isPlaying = songElement.getAttribute("playpause") == "true";
            songElement.setAttribute("playpause", String(!isPlaying));
            (0, _playerJs.playSong)(song, songs);
        });
        songElement.addEventListener("favorite_click", ()=>{
            if ((0, _localStorageJs.getItem)(song.id)) (0, _localStorageJs.removeItem)(song.id);
            else (0, _localStorageJs.setItem)(song.id, song);
            songElement.setAttribute("favorite", !!(0, _localStorageJs.getItem)(song.id));
        });
        songList.insertAdjacentElement("afterbegin", songElement);
    });
}
function displayArtistsSongs(id) {
    (0, _api.loadSongs)(id).then((songs)=>{
        listSectionTitle.innerHTML = ` Artistes > ${songs[0].artist.name}`;
        displaySongsArray(songs);
    });
}
function displaySearchSongs(query) {
    (0, _api.loadSearch)(query).then((songs)=>{
        listSectionTitle.innerHTML = `Votre Recherche`;
        displaySongsArray(songs);
    });
}
function displayFavoriteSongs() {
    const allSongs = (0, _localStorageJs.getItems)();
    listSectionTitle.innerHTML = "Favoris";
    displaySongsArray(allSongs);
}
function displayLyrics(id) {
    (0, _api.loadLyrics)(id).then((song)=>{
        const nomArtiste = document.querySelector(`#lyrics-section h5`);
        const nomSong = document.querySelector("#lyrics-section h4");
        const lyrics = document.querySelector("#lyrics-section p");
        nomArtiste.innerHTML = song.title;
        nomSong.innerHTML = song.artist.name;
        lyrics.innerHTML = song.lyrics;
    });
}

},{"../api":"8Zgej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./player.js":"m0Ody","../local-storage.js":"EAMLy"}],"m0Ody":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playSong", ()=>playSong);
var _formatTimestamp = require("../lib/formatTimestamp");
var _formatTimestampDefault = parcelHelpers.interopDefault(_formatTimestamp);
const audioPlayer = document.querySelector("#audio-player");
const playerThumbnail = document.querySelector("#player-thumbnail-image");
const playerSongTitle = document.querySelector("#player-infos-song-title");
const playerArtistName = document.querySelector("#player-infos-artist-name");
const playerPrev = document.querySelector("#player-control-previous");
const playerPlay = document.querySelector("#player-control-play");
const playerPlayIcon = document.querySelector("#player-control-play .material-icons");
const playerNext = document.querySelector("#player-control-next");
const playerTimeCurrent = document.querySelector("#player-time-current");
const playerTimeDuration = document.querySelector("#player-time-duration");
const playerProgress = document.querySelector("#player-progress-bar");
////////////////////////////////////////////////////////////////////////////////////////////////7
let currentSongList = [];
let currentSong = null;
function playSong(song, songs) {
    currentSong = song;
    playerPlayIcon.innerHTML = "pause";
    if (songs) currentSongList = songs;
    playerSongTitle.innerHTML = song.title;
    playerArtistName.innerHTML = song.artist.name;
    playerThumbnail.src = song.artist.image_url;
    audioPlayer.src = song.audio_url;
    audioPlayer.play();
}
playerPlay.addEventListener("click", ()=>{
    if (audioPlayer.paused) {
        audioPlayer.play();
        playerPlayIcon.innerHTML = "pause";
    } else {
        audioPlayer.pause();
        playerPlayIcon.innerHTML = "play_arrow";
    }
});
playerPrev.addEventListener("click", ()=>{
    let index = currentSongList.indexOf(currentSong) - 1;
    if (index == -1) index = currentSongList.length - 1;
    playSong(currentSongList[index]);
});
playerNext.addEventListener("click", ()=>{
    let index = currentSongList.indexOf(currentSong) + 1;
    if (index == currentSongList.length) index = 0;
    playSong(currentSongList[index]);
});
// La fonction met à jour le point de lecture de l'audio pour correspondre à la position sélectionnée par l'utilisateur sur la barre de progression (range), permettant ainsi de sauter à différents points de la piste audio.
playerProgress.addEventListener("change", (event)=>{
    audioPlayer.currentTime = event.currentTarget.value;
});
// Cette fonction ajuste la valeur maximale de la barre de progression et affiche la durée totale de l'audio lorsque la durée de ce dernier change, assurant que la barre reflète la longueur exacte de la piste et que l'utilisateur voit la durée totale mise à jour.
audioPlayer.addEventListener("durationchange", ()=>{
    playerProgress.max = audioPlayer.duration;
    playerTimeDuration.innerText = (0, _formatTimestampDefault.default)(audioPlayer.duration);
});
// Cette fonction met à jour la position de la barre de progression et l'affichage du temps écoulé en fonction du moment actuel de la piste audio, gardant ainsi l'interface utilisateur synchronisée avec la lecture.
audioPlayer.addEventListener("timeupdate", ()=>{
    playerProgress.value = audioPlayer.currentTime;
    playerTimeCurrent.innerText = (0, _formatTimestampDefault.default)(audioPlayer.currentTime);
});

},{"../lib/formatTimestamp":"9L9AK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9L9AK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>formatTimestamp);
function formatTimestamp(timestamp) {
    timestamp = parseInt(timestamp, 10);
    let hours = Math.floor(timestamp / 3600);
    let minutes = Math.floor((timestamp - hours * 3600) / 60);
    let seconds = timestamp - hours * 3600 - minutes * 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"EAMLy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setItem", ()=>setItem);
parcelHelpers.export(exports, "getItem", ()=>getItem);
parcelHelpers.export(exports, "getItems", ()=>getItems);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
const setItem = (id, value)=>localStorage.setItem(id, JSON.stringify(value));
const getItem = (id)=>JSON.parse(localStorage.getItem(id));
const getItems = ()=>Object.keys(localStorage).map(getItem);
const removeItem = (id)=>localStorage.removeItem(id);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecN5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displaySection", ()=>displaySection);
parcelHelpers.export(exports, "activateLink", ()=>activateLink);
function displaySection(id) {
    const sectionActive = document.querySelector("section.active");
    sectionActive.classList.remove("active");
    const newSectionActive = document.querySelector(`#${id}-section`);
    newSectionActive.classList.add("active");
}
function activateLink(id) {
    const navActif = document.querySelector(`nav a.active`);
    navActif?.classList.remove("active");
    const newNavActif = document.querySelector(`nav a[href="${id}"]`);
    newNavActif?.classList.add("active");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["farZc","8lqZg"], "8lqZg", "parcelRequiref161")

//# sourceMappingURL=index.975ef6c8.js.map
