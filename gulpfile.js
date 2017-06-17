var gulp = require('gulp'),
    path = require('path'),
    argv = require('yargs').argv,
    runner = require('gulp-aws-lambda-runner');
    
gulp.task('test', function(cb) {
    var specificLambda = argv.lambda,
        eventName = argv.event || 'event';
 
    if (!specificLambda) {
        return cb('[Aborting] Missing parameter: --lambda={NAME}');
    }
 
    return gulp.src(path.join(__dirname, 'src/', specificLambda, '*'))
               .pipe(runner({ eventFileName : eventName + '.json' }));
});