const version = 'v1';
self.addEventListener('install', event=> {
  event.waitUntil(precache());
})

self.addEventListener('fetch', event=> {
  const request = event.request;
  //get
  if (request.method != 'GET'){
    return;
  }
  //Buscar en cache
  event.respondWith(cachedResponse(request));

  //Actualizar cache
  event.waitUntil(updateCache(request));
})

async function precache(){
  try{
    const cache = await caches.open(version);//Creamos un espacio en cache
    return cache.addAll([
   '/',
   '/index.html',
   '/assets/Mediaplayer.js',
   '/assets/index.js',
   '/assets/index.css',
   '/assets/ejercicio.mp4',
   '/assets/plugins/AutoPlay.js',
   '/assets/plugins/AutoPause.js'])
  }catch(error){
    console.log(error.message);
  }
 
}

async function cachedResponse(request){
  const cache = await caches.open(version);
  const response= await cache.match(request);
  return response || fetch(request)
}
async function updateCache(request){
  const cache = await caches.open(version);
  const response= await fetch(request);
  return cache.put(request,response);
}