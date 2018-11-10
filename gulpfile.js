const gulp = require("gulp"),
  sass = require("gulp-sass"),
  htmlmin = require("gulp-htmlmin"), //minify html
  cssnano = require("gulp-cssnano"), //minify css
  browserSync = require("browser-sync").create(), //live reload
  imagemin = require("gulp-imagemin"), //minify images
  uglify = require("gulp-uglify-es").default, //minify js
  pump = require("pump"), // use in place of pipe method for better error handling
  newer = require("gulp-newer"), //only updates updated files
  autoprefixer = require("gulp-autoprefixer"); //auto adds prefixes for css
// setup for live reload
gulp.task("browserSync", () => {
  browserSync.init({
    server: {
      baseDir: "docs/"
    },
    port: 3000
  });
});
// live reload
browserSyncReload = () => browserSync.reload({ stream: true });

// older error handler, may not need this
handleError = error => {
  console.log(error.toString());
  this.emit("end");
};

gulp.task("default", ["html", "css", "js", "browserSync", "images"]);

// HTML
gulp.task("html", cb => {
  pump(
    [
      gulp.src("index.html"),
      newer("docs/index.html"),
      htmlmin({ collapseWhitespace: true }),
      gulp.dest("docs/"),
      browserSyncReload()
    ],
    cb
  );
});

//CSS
gulp.task("css", cb => {
  pump(
    [
      gulp.src("style.scss"),
      //newer("docs/style.css"),
      sass(),
      cssnano({
        autoprefixer: {
          browsers: ["> 1%", "last 2 versions", "Firefox >= 20"],
          add: true
        }
      }),
      gulp.dest("docs/"),
      browserSyncReload()
    ],
    cb
  );
});

// JS
gulp.task("js", cb => {
  pump(
    [
      gulp.src("app.js"),
      newer("docs/app.js"),
      uglify(),
      gulp.dest("docs/"),
      browserSyncReload()
    ],
    cb
  );
});

// Image Optimization
gulp.task("images", cb => {
  pump(
    [
      gulp.src("images/**.*"),
      newer("docs/images/"),
      imagemin(),
      gulp.dest("docs/images/")
    ],
    cb
  );
});

gulp.task("watch", ["default"], () => {
  gulp.watch("index.html", ["html"]);
  gulp.watch("**.scss", ["css"]);
  gulp.watch("app.js", ["js"]);
  gulp.watch("images/**.*", ["images"]);
});
