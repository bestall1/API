function get_param(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

if( get_param("Download") != "0" ){
	var c = ['362683'];
	// console.log('https://yellowimages.com/stock/+get_param("Download")+'?yi='+c[0]');
	window.location.href = 'https://yellowimages.com/stock/'+get_param("Download")+'?yi='+c[0];
}
