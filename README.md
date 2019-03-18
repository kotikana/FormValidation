# FormValidation
1.Структура проекта

build / 
index.html 
img 
minCss 
minJs 

src / 
img 
less 
js
index.html

В проекте используется Gulp - таск-менеджер для автоматического выполнения часто используемых задач.
Gulp Tasks (описаны gulpfile.js) 
gulp задание по умолчанию, которое строит все, 
gulp-autoprefixer автоматически добавляет вендорные префиксы к CSS свойствам, 
gulp-minify-css сжатиt css кода, 
gulp-tinypng сжатие картинок, 
gulp-uglify сжатие JS, 
gulp-less компиляция less-css, 
gulp-sourcemaps при генерации css sourscemaps, помогает при отладке кода, 
gulp-watch наблюдение за изменениями файлов, 
gulp-concat конкатенации файлов, 
gulp-cleanhtml сжатие html,
gulp-svgo оптимизация svg. 

Для использования этих функций на вашем компьютере должны быть установлены глобально npm и Gulp.
npm install -g gulp

3.В проекте также используется препроцессор Less, компилируемый в CSS c помощью Gulp.

4.Для просмотра проекта открыть build / index.html
