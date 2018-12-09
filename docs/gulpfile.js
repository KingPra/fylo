const gulp=require("gulp"),sass=require("gulp-sass"),htmlmin=require("gulp-htmlmin"),cssnano=require("gulp-cssnano"),browserSync=require("browser-sync").create(),imagemin=require("gulp-imagemin"),uglify=require("gulp-uglify-es").default,pump=require("pump"),newer=require("gulp-newer"),autoprefixer=require("gulp-autoprefixer");gulp.task("browserSync",()=>{browserSync.init({server:{baseDir:"docs/"}})}),browserSyncReload=(()=>browserSync.reload({stream:!0})),handleError=(s=>{console.log(s.toString()),this.emit("end")}),gulp.task("default",["html","css","js","browserSync","images"]),gulp.task("html",s=>{pump([gulp.src("*.html"),newer("docs/*.html"),htmlmin({collapseWhitespace:!0}),gulp.dest("docs/"),browserSyncReload()],s)}),gulp.task("css",s=>{pump([gulp.src("styles/*.scss"),newer("docs/styles/*.css"),sass(),cssnano({autoprefixer:{browsers:["> 1%","last 2 versions","Firefox >= 20"],add:!0}}),gulp.dest("docs/styles/"),browserSyncReload()],s)}),gulp.task("js",s=>{pump([gulp.src("modules/*.js"),newer("docs/modules/*.js"),uglify(),gulp.dest("docs/modules/"),browserSyncReload()],s)}),gulp.task("js",s=>{pump([gulp.src("*.js"),newer("docs/*.js"),uglify(),gulp.dest("docs/"),browserSyncReload()],s)}),gulp.task("images",s=>{pump([gulp.src("images/**.*"),newer("docs/images/"),imagemin(),gulp.dest("docs/images/")],s)}),gulp.task("watch",["default"],()=>{gulp.watch("*.html",["html"]),gulp.watch("*.scss",["css"]),gulp.watch("*.js",["js"]),gulp.watch("modules/*.js",["js"]),gulp.watch("images/**.*",["images"])});