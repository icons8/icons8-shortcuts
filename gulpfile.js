// Used for the first version. Windows version gets updated often, please use with care.

var gulp = require('gulp'); 
var replace = require('gulp-replace');
 
gulp.task('default', function(){
  gulp.src('./mac/shortcuts.md')
    .pipe(replace('Mac', 'Windows'))
    .pipe(replace('⌘ ', 'Ctrl + '))
    .pipe(replace('⎇ ', 'Alt + '))
    .pipe(replace('Ctrl + Q', 'Alt + F4'))
    .pipe(replace('Preferences |  Ctrl + ,\n', ''))
    .pipe(replace('Enter', 'F2'))
    .pipe(gulp.dest('win'));
});
