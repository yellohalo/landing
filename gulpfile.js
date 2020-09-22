const { series, src, dest } = require('gulp');
const minifyCSS = require('gulp-csso')

const inProduction = process.env.NODE_ENV === 'production'

function build() {
  const autoprefixer = require('autoprefixer')
  const postcss = require('gulp-postcss')

  const task = src('private/theme.css')
    .pipe(postcss([
      require('tailwindcss'),
      autoprefixer()
    ]));
  
  if (inProduction) {
    task.pipe(minifyCSS())
  }

  task.pipe(dest('public/'))

  return task
}

exports.build = build;
exports.default = series(build);