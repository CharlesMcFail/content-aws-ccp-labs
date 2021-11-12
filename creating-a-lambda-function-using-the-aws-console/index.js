const https = require('https')
let url = "https://www.charlesmcfail.com" 

exports.handler = function(event, context, callback) { 
	https.get(url, (res) => { 
  		    callback(null, res.statusCode) 	
    	}).on('error', (e) => { 
		    callback(Error(e)) 
	    }) 
}
