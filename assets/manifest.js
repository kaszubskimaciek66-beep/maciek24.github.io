let webManifest = {
    "name": "mObywatel",
    "short_name": "mObywatel",
    "icons": [
        {
            "src": "https://imgur.com/a/NtZWDW6",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
        },
        {
            "src": "https://imgur.com/a/NtZWDW6",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ],
    "theme_color": "#f5f6fb",
    "background_color": "#f5f6fb",
    "display": "standalone",
    "start_url": window.location.href 
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(webManifest)))));
document.head.prepend(manifestElem);
