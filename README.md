(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-reduce-to-file
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> reduce plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-reduce-to-file` as a development dependency:

```shell
npm install --save-dev gulp-reduce-to-file
```

Then, add it to your `gulpfile.js`:

```javascript
var reduce = require("gulp-reduce-to-file");

function accumulate(accum, file) {
    var contents = file.contents.toString('utf8');
    accum[file.path] = contents.length;
    return accum;
};

gulp.src("./src/*.ext")
	.pipe(reduce(accumulate, {}, 'character_count.json', function(val) {
        return JSON.stringify(val, null, '  ');
    }))
	.pipe(gulp.dest("./dist"));
```

## API

### reduce(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-reduce-to-file
[npm-image]: https://badge.fury.io/js/gulp-reduce-to-file.png

[travis-url]: http://travis-ci.org/chrisdanford/gulp-reduce-to-file
[travis-image]: https://secure.travis-ci.org/chrisdanford/gulp-reduce-to-file.png?branch=master

[coveralls-url]: https://coveralls.io/r/chrisdanford/gulp-reduce-to-file
[coveralls-image]: https://coveralls.io/repos/chrisdanford/gulp-reduce-to-file/badge.png

[depstat-url]: https://david-dm.org/chrisdanford/gulp-reduce-to-file
[depstat-image]: https://david-dm.org/chrisdanford/gulp-reduce-to-file.png
