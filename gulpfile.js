var gulp = require('gulp'); 
var replace = require('gulp-replace');
 
gulp.task('default', function(){
  gulp.src('./mac/shortcuts.md')
    .pipe(replace('Mac', 'Windows'))
    .pipe(replace('⌘ ', 'Ctrl + '))
    .pipe(replace('⎇ ', 'Alt + '))
    .pipe(replace('Ctrl + Q', 'Alt + F4'))
    .pipe(replace('Preferences |  Ctrl + ,\n', ''))
    .pipe(gulp.dest('win'));
});