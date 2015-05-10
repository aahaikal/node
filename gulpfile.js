var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function() {
	nodemon({
		script: 'app.js',
		ext: 'js',
		env: {
			PORT: 9000
		},
		igonre: ['./node_modules/**']
	})
	.on('restart', function(){
		console.log("Restarting......");
	});
});