const C="jarvis-v3",T="jarvis-tiles",F=["./","index.html","manifest.json","icon-192.png","icon-512.png","icon-maskable.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==T).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 const r=e.request,u=new URL(r.url);
 if(r.method!=="GET")return;
 if(/tile\.openstreetmap\.org$/.test(u.hostname)){ // map tiles: cache-first so visited areas work offline
  e.respondWith(caches.open(T).then(async c=>{const m=await c.match(r);if(m)return m;try{const n=await fetch(r);c.put(r,n.clone());c.keys().then(k=>{if(k.length>800)c.delete(k[0])});return n}catch(x){return m||Response.error()}}));return}
 if(u.origin!==location.origin)return;
 e.respondWith(fetch(r).then(n=>{const c=n.clone();caches.open(C).then(x=>x.put(r,c));return n}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))))});
