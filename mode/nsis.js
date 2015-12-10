define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var NSISHighlightRules = require("./nsis_highlight_rules").NSISHighlightRules;
// TODO: pick appropriate fold mode
var FoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = NSISHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = [";", "#"];
    this.blockComment = {start: "/*", end: "*/"};
    this.$id = "ace/mode/nsis";
}).call(Mode.prototype);

exports.Mode = Mode;
});
