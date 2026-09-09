import gulp from "gulp";
import cleanCSS from "gulp-clean-css";

function minifyCSS() {
    return gulp.src("src/css/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/css"));
}

export { minifyCSS };