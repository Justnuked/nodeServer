var http = require('http');

function onRequest(request, response){
 console.log('Er was een request.');
 response.writeHead(200, {'Content-Type': 'application/json'});

 var json = JSON.stringify({
	 
	 {
"results": [
{
"gender": "male",
"name": {
"title": "mr",
"first": "oğuzhan",
"last": "okumuş"
},
"location": {
"street": "7764 bağdat cd",
"city": "kütahya",
"state": "elazığ",
"postcode": 64642
},
"email": "oğuzhan.okumuş@example.com",
"login": {
"username": "goldenswan546",
"password": "abnormal",
"salt": "pOtYWpK0",
"md5": "28f9d05032272f6a6f183475decd46e0",
"sha1": "e6e141e1dfd703a60557f92c72bd0af80058da29",
"sha256": "c2116ada9bb457c550bef288b0f5c946eb8d170f482ae5813d8334b58de286e1"
},
"dob": "1965-02-11 09:04:47",
"registered": "2014-12-04 04:35:07",
"phone": "(165)-876-2992",
"cell": "(718)-562-4275",
"id": {
"name": "",
"value": null
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/78.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
},
"nat": "TR"
}
],
"info": {
"seed": "dd2e63e9e494491d",
"results": 1,
"page": 1,
"version": "1.1"
}
}
 })
 response.end(json);
}

http.createServer(onRequest).listen(3000);

console.log('De server luisterd op port 3000');