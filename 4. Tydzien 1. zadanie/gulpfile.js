var gulp = require("gulp"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	plumber = require("gulp-plumber"),
	browserSync = require("browser-sync"),
	del = require("del"),
	useref = require("gulp-useref"),
	uglify = require("gulp-uglify"),
	gulpif = require("gulp-if"),
	imagemin = require("gulp-imagemin"),
	runSequence = require("run-sequence");


gulp.task("hello", function(){

console.log("hello world");

});

gulp.task("css", function() {

	return gulp.src("src/sass/main.scss")
		.pipe(plumber())
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ["last 5 version", "IE 9"]
		}))
		.pipe(gulp.dest("src/css/"))
		.pipe(browserSync.stream());
});


gulp.task("server", function(){
	browserSync.init({
		server: "src/"
	});
});



gulp.task("watch", function(){
	gulp.watch("src/sass/**/*.scss", ["css"]);
});


gulp.task("clean", function(){
	return del("dist/");


});

gulp.task("html", function(){

	return gulp.src("src/*.html")
		.pipe(useref())
		.pipe(gulpif("*.js",uglify()))
		.pipe(gulp.dest("dist/"));


});


gulp.task("images", function(){
	gulp.src("src/images/*", {
		base: "src/"
	})
		.pipe(imagemin())
		.pipe(gulp.dest("dist/"));
})


gulp.task("copy", function(){
	return gulp.src(["src/css/**/*.css", "src/images/*", "src/uploads/*"], {
		base: "src"
	})
	.pipe(gulp.dest("dist/"));
});

gulp.task("build", function(){
	runSequence("clean", "html", "copy", "images");
});

gulp.task("default", ["css", "server", "watch"]);