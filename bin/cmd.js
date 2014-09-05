var fs        = require('fs');
var mkdirp    = require('mkdirp');
var debug     = require('debug')('cmd');
var markdown  = require('markdown').markdown;
var async     = require('async');
var _         = require('underscore');
var srcDir    = require('../markdownfile').srcDir;
var targetDir = require('../markdownfile').targetDir;
var files     = require('../markdownfile').files;


var getSrcFilePath = function(fileName) {

    return srcDir + fileName + '.md';
};

var getTargetFilePath = function(fileName) {

    return targetDir + fileName + '.html';
};


_.each(files, function(filePath) {

    fs.readFile(getSrcFilePath(filePath), function(err, data) {

        if (err) throw err;

        fs.writeFile(getTargetFilePath(filePath), markdown.toHTML(data.toString()), function(err) {

            if (err) throw err;

            debug('write file success!');
        });

    });

});