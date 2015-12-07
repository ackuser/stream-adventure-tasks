var through2 = require('through2');
var split = require('split');
var i = 1;
process.stdin
   .pipe(split())
   .pipe(through2(function (line, _, next) {
       var new_line = line.toString();
       this.push(i % 2 === 0 ? new_line.toUpperCase()+ '\n':new_line.toLowerCase()+ '\n');
       next();
       i++;
})).pipe(process.stdout);
