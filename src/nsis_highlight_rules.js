/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

 define(function(require, exports) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var NSISHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
      start: [{
        token: "keyword.compiler.nsis",
        regex: /^\s*%NSIS_IMPORTANT%\b/,
        caseInsensitive: true
      }, {
        token: "keyword.command.nsis",
        regex: /^\s*%NSIS_KEYWORDS%\b/,
        caseInsensitive: true
      }, {
        token: "keyword.control.nsis",
        regex: /^\s*%NSIS_IMPORTANT_BLOCKS%\b/,
        caseInsensitive: true
      }, {
        token: "keyword.plugin.nsis",
        regex: /^\s*\w+::\w+/,
        caseInsensitive: true
      }, {
        token: "keyword.operator.comparison.nsis",
        regex: /[!<>]?=|<>|<|>/
      }, {
        token: "support.function.nsis",
        regex: /(?:\b|^\s*)%NSIS_BLOCKS%\b/,
        caseInsensitive: true
      }, {
        token: "support.library.nsis",
        regex: /\${[\w.:-]+}/
      }, {
        token: "constant.nsis",
        regex: /\b%NSIS_PROPERTIES_UPPERCASE%\b/,
        caseInsensitive: true
      }, {
        token: "constant.library.nsis",
        regex: /\${(?:AtLeastServicePack|AtLeastWin7|AtLeastWin8|AtLeastWin10|AtLeastWin95|AtLeastWin98|AtLeastWin2000|AtLeastWin2003|AtLeastWin2008|AtLeastWin2008R2|AtLeastWinME|AtLeastWinNT4|AtLeastWinVista|AtLeastWinXP|AtMostServicePack|AtMostWin7|AtMostWin8|AtMostWin10|AtMostWin95|AtMostWin98|AtMostWin2000|AtMostWin2003|AtMostWin2008|AtMostWin2008R2|AtMostWinME|AtMostWinNT4|AtMostWinVista|AtMostWinXP|IsDomainController|IsNT|IsServer|IsServicePack|IsWin7|IsWin8|IsWin10|IsWin95|IsWin98|IsWin2000|IsWin2003|IsWin2008|IsWin2008R2|IsWinME|IsWinNT4|IsWinVista|IsWinXP)}/
      }, {
        token: "constant.language.boolean.true.nsis",
        regex: /\b(?:true|on)\b/
      }, {
        token: "constant.language.boolean.false.nsis",
        regex: /\b(?:false|off)\b/
      }, {
        token: "constant.language.option.nsis",
        regex: /(?:\b|^\s*)%NSIS_PROPERTIES_LOWERCASE%\b/,
        caseInsensitive: true
      }, {
        token: "constant.language.slash-option.nsis",
        regex: /\b\/(?:a|BRANDING|CENTER|COMPONENTSONLYONCUSTOM|CUSTOMSTRING=|date|e|ENABLECANCEL|FILESONLY|file|FINAL|GLOBAL|gray|ifempty|ifndef|ignorecase|IMGID=|ITALIC|LANG=|NOCUSTOM|noerrors|NONFATAL|nonfatal|oname=|o|REBOOTOK|redef|RESIZETOFIT|r|SHORT|SILENT|SOLID|STRIKE|TRIM|UNDERLINE|utcdate|windows|x)\b/,
        caseInsensitive: true
      }, {
        token: "constant.numeric.nsis",
        regex: /\b(?:0(?:x|X)[0-9a-fA-F]+|[0-9]+(?:\.[0-9]+)?)\b/
      }, {
        token: "entity.name.function.nsis",
        regex: /\$\([\w.:-]+\)/
      }, {
        token: "storage.type.function.nsis",
        regex: /\$\w+/
      }, {
        token: "punctuation.definition.string.begin.nsis",
        regex: /`/,
        push: [{
          token: "punctuation.definition.string.end.nsis",
          regex: /`/,
          next: "pop"
        }, {
          token: "constant.character.escape.nsis",
          regex: /\$\\./
        }, {
          defaultToken: "string.quoted.back.nsis"
        }]
      }, {
        token: "punctuation.definition.string.begin.nsis",
        regex: /"/,
        push: [{
          token: "punctuation.definition.string.end.nsis",
          regex: /"/,
          next: "pop"
        }, {
          token: "constant.character.escape.nsis",
          regex: /\$\\./
        }, {
          defaultToken: "string.quoted.double.nsis"
        }]
      }, {
        token: "punctuation.definition.string.begin.nsis",
        regex: /'/,
        push: [{
          token: "punctuation.definition.string.end.nsis",
          regex: /'/,
          next: "pop"
        }, {
          token: "constant.character.escape.nsis",
          regex: /\$\\./
        }, {
          defaultToken: "string.quoted.single.nsis"
        }]
      }, {
        token: [
        "punctuation.definition.comment.nsis",
        "comment.line.nsis"
        ],
        regex: /(;|#)(.*$)/
      }, {
        token: "punctuation.definition.comment.nsis",
        regex: /\/\*/,
        push: [{
          token: "punctuation.definition.comment.nsis",
          regex: /\*\//,
          next: "pop"
        }, {
          defaultToken: "comment.block.nsis"
        }]
      }, {
        token: "text",
        regex: /(?:!include|!insertmacro)\b/
      }]
    };

    this.normalizeRules();
  };

  NSISHighlightRules.metaData = {
    fileTypes: ["nsi", "nsh", "bnsi", "bnsh", "nsdinc"],
    name: "NSIS",
    scopeName: "source.nsis"
  };


  oop.inherits(NSISHighlightRules, TextHighlightRules);

  exports.NSISHighlightRules = NSISHighlightRules;
});
