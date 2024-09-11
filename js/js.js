var jsImport = [
    "../js/jquery-1.12.4.min.js",
    "../js/jquery-ui.js",
    "../js/common.js",
    "../js/bootstrap.js",
];
for(var i=0; i < jsImport.length; i++){
    document.write('<script type="text/javascript" src="'+ jsImport[i] + '"></script>');
}