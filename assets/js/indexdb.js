const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

let bookAppDB = 'bookApp';


function logerr(err){
    console.log(err);
}


const request = indexedDB.open(bookAppDB, 3);

request.onerror = logerr;
request.onsuccess = function (ev) {
    console.log(ev)
    console.log(ev.target)
}