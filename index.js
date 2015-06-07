"use strict";

var through = require('through');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var File = gutil.File;
var Buffer = require('buffer').Buffer;
var fs = require('fs');
var path = require('path');


module.exports = function(callback, initialValue, fileName, serialize) {
    var accum = initialValue;

    function bufferContents(file) {
        if (file.isNull()) {
            return;
        }
        if (file.isStream()) {
            return this.emit('error', new PluginError('gulp-reduce',  'Streaming not supported'));
        }

        callback(accum, file);
    }

    function endStream() {
        var newFile = new File({
            path: fileName,
            contents: new Buffer(serialize(accum))
        });
        this.emit('data', newFile);
        this.emit('end');
    }

    return through(bufferContents, endStream);
};
