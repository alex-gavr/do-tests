function getYmid() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('z');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "uwoaptee.com",
    "resubscribeOnInstall": true,
    "zoneId": 5893057,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://uwoaptee.com/pfe/current/sw.perm.check.min.js?r=sw');
