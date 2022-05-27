import autoprefixer from "autoprefixer";
import browser from "browser-sync";
import csso from "postcss-csso";
import del from "del";
import gulp from "gulp";
import imagemin from "gulp-imagemin";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import rename from "gulp-rename";
import sass from "gulp-dart-sass";

import terser from 'gulp-terser';


export const styles = () => {
  return gulp
    .src("src/scss/styles.scss", { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("dist/css", { sourcemaps: "." }))
    .pipe(browser.stream());
};


const html = () => {
  return gulp
  .src("src/*.html")
  .pipe(gulp.dest("dist"));
};

const scripts = () => {
    return gulp.src("src/js/*.js")
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"))
  };


const optimizeImages = () => {
  return gulp
    .src("src/img/**/*.{png,jpg}")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
};


const copyImages = () => {
  return gulp.src("src/img/**/*.{png,jpg}").pipe(gulp.dest("dist/img"));
};


const clean = () => {
  return del("dist");
};


const server = (done) => {
  browser.init({
    server: {
      baseDir: "dist",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};


const reload = (done) => {
  browser.reload();
  done();
};

const watcher = () => {
  gulp.watch("src/scss/**/*.scss", gulp.series(styles));
  gulp.watch("src/js/**/*.js", gulp.series(scripts, reload));
  gulp.watch("src/*.html", gulp.series(html, reload));
};


export const build = gulp.series(
  clean,
  optimizeImages,
gulp.parallel(styles, html, scripts)
);


export default gulp.series(
    clean,
    gulp.parallel(
        styles,
        html,
        scripts,
        copyImages
        ),
    server,
    watcher
  );
