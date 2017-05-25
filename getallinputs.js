<!-- ੴ ੨੦੧੭.੫.੨੫ ਸੁਭਮਸਤੁ-->
//  Get all input field names from page

fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    var DOMParser = require('xmldom').DOMParser;
    var doc = new DOMParser().parseFromString(
        data
        ,'text/html');

    var inputs = doc.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i += 1) {
        console.log(inputs[i].getAttribute('name'));
    };

});