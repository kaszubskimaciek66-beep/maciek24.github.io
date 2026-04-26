let webManifest = {
    "name": "mObywatel",
    "short_name": "mObywatel",
    "icons": [
        {
            "src": "https://i.imgur.com/vHq8m6y.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "https://i.imgur.com/vHq8m6y.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#f5f6fb",
    "background_color": "#f5f6fb",
    "display": "standalone",
    "start_url": window.location.href 
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(webManifest)))));
document.head.prepend(manifestElem);
