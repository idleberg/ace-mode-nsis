define('ace/mode/nsis_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], function (require, exports) {
	'use strict';

	const oop = require('../lib/oop');
	const TextHighlightRules = require('./text_highlight_rules').TextHighlightRules;

	const NSISHighlightRules = function () {
		this.$rules = {
			start: [
				{
					token: 'keyword.compiler.nsis',
					regex: /^\s*!(?:a(?:dd(?:includedir|plugindir)|ppendfile)|cd|de(?:fine|lfile)|e(?:cho|rror|xecute)|finalize|get(?:dllversion|tlbversion)|in(?:clude|sertmacro)|makensis|p(?:ackhdr|ragma)|s(?:earch(?:parse|replace)|ystem)|tempfile|un(?:def|instfinalize)|verbose|warning)\b/,
					caseInsensitive: true
				},
				{
					token: 'keyword.command.nsis',
					regex:
						/^\s*(?:A(?:bort|dd(?:BrandingImage|Size)|llow(?:RootDirInstall|SkipFiles)|utoCloseWindow)|B(?:G(?:Font|Gradient)|r(?:andingText|ingToFront))|C(?:RCCheck|a(?:ll(?:InstDLL)?|ption)|h(?:angeUI|eckBitmap)|learErrors|o(?:mp(?:letedText|onentText)|pyFiles)|reate(?:Directory|Font|ShortCut))|D(?:e(?:lete(?:(?:INIS(?:ec|tr)|Reg(?:Key|Value)))?|tail(?:Print|sButtonText))|ir(?:Text|V(?:ar|erify)))|E(?:n(?:ableWindow|umReg(?:Key|Value))|x(?:ch|ec(?:(?:Shell(?:Wait)?|Wait))?|pandEnvStrings))|F(?:i(?:le(?:(?:BufSize|Close|ErrorText|Open|Read(?:(?:Byte|UTF16LE|Word))?|Seek|Write(?:(?:Byte|UTF16LE|Word))?))?|nd(?:Close|First|Next|Window))|lushINI)|G(?:et(?:Cur(?:InstType|rentAddress)|D(?:LLVersion(?:Local)?|lgItem)|ErrorLevel|F(?:ileTime(?:Local)?|u(?:llPathName|nctionAddress))|InstDirError|KnownFolderPath|LabelAddress|TempFileName|WinVer)|oto)|HideWindow|I(?:con|f(?:Abort|Errors|FileExists|R(?:ebootFlag|tlLanguage)|S(?:hellVarContextAll|ilent))|n(?:itPluginsDir|st(?:ProgressFlags|Type(?:(?:GetText|SetText))?|all(?:ButtonText|Colors|Dir(?:RegKey)?))|t(?:64(?:CmpU?|Fmt)|CmpU?|Fmt|Op|Ptr(?:CmpU?|Op)))|sWindow)|L(?:angString|icense(?:BkColor|Data|ForceSelection|LangString|Text)|o(?:ad(?:AndSetImage|LanguageFile)|ckWindow|g(?:Set|Text)))|M(?:anifest(?:DPIAware|LongPathAware|MaxVersionTested|SupportedOS)|essageBox|iscButtonText)|N(?:ame|op)|OutFile|P(?:E(?:AddResource|DllCharacteristics|RemoveResource|SubsysVer)|age(?:Callbacks)?|op|ush)|Quit|R(?:MDir|e(?:ad(?:EnvStr|INIStr|Reg(?:DWORD|Str))|boot|gDLL|name|questExecutionLevel|serveFile|turn))|S(?:e(?:archPath|ction(?:Get(?:Flags|InstTypes|Size|Text)|In|Set(?:Flags|InstTypes|Size|Text))|ndMessage|t(?:AutoClose|BrandingImage|C(?:ompress(?:or(?:DictSize)?)?|tlColors|urInstType)|D(?:at(?:ablockOptimize|eSave)|etails(?:Print|View))|Error(?:Level|s)|F(?:ileAttributes|ont)|O(?:utPath|verwrite)|Re(?:bootFlag|gView)|S(?:hellVarContext|ilent)))|how(?:InstDetails|UninstDetails|Window)|ilent(?:Install|UnInstall)|leep|paceTexts|tr(?:C(?:mpS?|py)|Len)|ubCaption)|Target|Un(?:RegDLL|i(?:code|nst(?:Page|all(?:ButtonText|Caption|Icon|SubCaption|Text))))|V(?:I(?:AddVersionKey|FileVersion|ProductVersion)|ar)|W(?:indowIcon|rite(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller))|XPStyle)\b/,
					caseInsensitive: true
				},
				{
					token: 'keyword.control.nsis',
					regex: /^\s*!(?:if(?:(?:def|macro(?:def|ndef)|ndef))?|macro(?:end)?|e(?:lse|ndif))\b/,
					caseInsensitive: true
				},
				{
					token: 'keyword.plugin.nsis',
					regex: /^\s*\w+::\w+/,
					caseInsensitive: true
				},
				{
					token: 'keyword.operator.comparison.nsis',
					regex: /[!<>]?=|<>|<|>/
				},
				{
					token: 'support.function.nsis',
					regex: /(?:\b|^\s*)(?:Function(?:End)?|PageEx(?:End)?|Section(?:(?:Group(?:End)?|End))?)\b/,
					caseInsensitive: true
				},
				{
					token: 'support.library.nsis',
					regex: /\${[\w.:-]+}/
				},
				{
					token: 'constant.nsis',
					regex:
						/\b(?:ARCHIVE|FILE_ATTRIBUTE_(?:ARCHIVE|NORMAL|OFFLINE|READONLY|SYSTEM|TEMPORARY)|HK(?:C(?:R(?:(?:32|64))?|U(?:(?:32|64))?)|DD|EY_(?:C(?:LASSES_ROOT|URRENT_(?:CONFIG|USER))|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|LM(?:(?:32|64))?|PD|U)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON[1234]|ICON(?:EXCLAMATION|INFORMATION|QUESTION|STOP)|OK(?:CANCEL)?|R(?:ETRYCANCEL|IGHT|TLREADING)|SETFOREGROUND|TOPMOST|USERICON|YESNO)|OFFLINE|READONLY|S(?:H(?:CTX|ELL_CONTEXT)|YSTEM)|TEMPORARY)\b/,
					caseInsensitive: true
				},
				{
					token: 'constant.library.nsis',
					regex:
						/\${(?:AtLeastServicePack|AtLeastWin7|AtLeastWin8|AtLeastWin10|AtLeastWin95|AtLeastWin98|AtLeastWin2000|AtLeastWin2003|AtLeastWin2008|AtLeastWin2008R2|AtLeastWinME|AtLeastWinNT4|AtLeastWinVista|AtLeastWinXP|AtMostServicePack|AtMostWin7|AtMostWin8|AtMostWin10|AtMostWin95|AtMostWin98|AtMostWin2000|AtMostWin2003|AtMostWin2008|AtMostWin2008R2|AtMostWinME|AtMostWinNT4|AtMostWinVista|AtMostWinXP|IsDomainController|IsNT|IsServer|IsServicePack|IsWin7|IsWin8|IsWin10|IsWin95|IsWin98|IsWin2000|IsWin2003|IsWin2008|IsWin2008R2|IsWinME|IsWinNT4|IsWinVista|IsWinXP)}/
				},
				{
					token: 'constant.language.boolean.true.nsis',
					regex: /\b(?:true|on)\b/
				},
				{
					token: 'constant.language.boolean.false.nsis',
					regex: /\b(?:false|off)\b/
				},
				{
					token: 'constant.language.option.nsis',
					regex: /(?:\b|^\s*)(?:Win(?:10|Vista|[78])|a(?:dmin|ll|md64-unicode|uto)|b(?:ot(?:tom|h)|zip2)|c(?:o(?:lored|mponents)|u(?:rrent|stom))|directory|f(?:alse|orce)|hi(?:de|ghest)|i(?:f(?:diff|newer)|nstfiles)|l(?:astused|e(?:ave|ft)|i(?:cense|stonly)|zma)|n(?:evershow|o(?:ne|rmal|tset))|o(?:ff|pen|n)|print|right|s(?:how|ilent(?:log)?|mooth)|t(?:extonly|op|r(?:ue|y))|u(?:n(?:\.(?:c(?:omponents|ustom)|directory|instfiles|license)|instConfirm)|ser)|x86-(?:ansi|unicode)|zlib)\b/,
					caseInsensitive: true
				},
				{
					token: 'constant.language.slash-option.nsis',
					regex: /\b\/(?:a|BRANDING|CENTER|COMPONENTSONLYONCUSTOM|CUSTOMSTRING=|date|e|ENABLECANCEL|FILESONLY|file|FINAL|GLOBAL|gray|ifempty|ifndef|ignorecase|IMGID=|ITALIC|LANG=|NOCUSTOM|noerrors|NONFATAL|nonfatal|oname=|o|REBOOTOK|redef|RESIZETOFIT|r|SHORT|SILENT|SOLID|STRIKE|TRIM|UNDERLINE|utcdate|windows|x)\b/,
					caseInsensitive: true
				},
				{
					token: 'constant.numeric.nsis',
					regex: /\b(?:0(?:x|X)[0-9a-fA-F]+|[0-9]+(?:\.[0-9]+)?)\b/
				},
				{
					token: 'entity.name.function.nsis',
					regex: /\$\([\w.:-]+\)/
				},
				{
					token: 'storage.type.function.nsis',
					regex: /\$\w+/
				},
				{
					token: 'punctuation.definition.string.begin.nsis',
					regex: /`/,
					push: [
						{
							token: 'punctuation.definition.string.end.nsis',
							regex: /`/,
							next: 'pop'
						},
						{
							token: 'constant.character.escape.nsis',
							regex: /\$\\./
						},
						{
							defaultToken: 'string.quoted.back.nsis'
						}
					]
				},
				{
					token: 'punctuation.definition.string.begin.nsis',
					regex: /"/,
					push: [
						{
							token: 'punctuation.definition.string.end.nsis',
							regex: /"/,
							next: 'pop'
						},
						{
							token: 'constant.character.escape.nsis',
							regex: /\$\\./
						},
						{
							defaultToken: 'string.quoted.double.nsis'
						}
					]
				},
				{
					token: 'punctuation.definition.string.begin.nsis',
					regex: /'/,
					push: [
						{
							token: 'punctuation.definition.string.end.nsis',
							regex: /'/,
							next: 'pop'
						},
						{
							token: 'constant.character.escape.nsis',
							regex: /\$\\./
						},
						{
							defaultToken: 'string.quoted.single.nsis'
						}
					]
				},
				{
					token: ['punctuation.definition.comment.nsis', 'comment.line.nsis'],
					regex: /(;|#)(.*$)/
				},
				{
					token: 'punctuation.definition.comment.nsis',
					regex: /\/\*/,
					push: [
						{
							token: 'punctuation.definition.comment.nsis',
							regex: /\*\//,
							next: 'pop'
						},
						{
							defaultToken: 'comment.block.nsis'
						}
					]
				},
				{
					token: 'text',
					regex: /(?:!include|!insertmacro)\b/
				}
			]
		};

		this.normalizeRules();
	};

	NSISHighlightRules.metaData = {
		fileTypes: ['nsi', 'nsh', 'bnsi', 'bnsh', 'nsdinc'],
		name: 'NSIS',
		scopeName: 'source.nsis'
	};

	oop.inherits(NSISHighlightRules, TextHighlightRules);

	exports.NSISHighlightRules = NSISHighlightRules;
});

define('ace/mode/folding/cstyle', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/range', 'ace/mode/folding/fold_mode'], function (require, exports, module) {
	'use strict';

	var oop = require('../../lib/oop');
	var Range = require('../../range').Range;
	var BaseFoldMode = require('./fold_mode').FoldMode;

	var FoldMode = (exports.FoldMode = function (commentRegex) {
		if (commentRegex) {
			this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, '|' + commentRegex.start));
			this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, '|' + commentRegex.end));
		}
	});
	oop.inherits(FoldMode, BaseFoldMode);

	(function () {
		this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
		this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
		this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
		this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
		this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
		this._getFoldWidgetBase = this.getFoldWidget;
		this.getFoldWidget = function (session, foldStyle, row) {
			var line = session.getLine(row);

			if (this.singleLineBlockCommentRe.test(line)) {
				if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return '';
			}

			var fw = this._getFoldWidgetBase(session, foldStyle, row);

			if (!fw && this.startRegionRe.test(line)) return 'start'; // lineCommentRegionStart

			return fw;
		};

		this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
			var line = session.getLine(row);

			if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);

			var match = line.match(this.foldingStartMarker);
			if (match) {
				var i = match.index;

				if (match[1]) return this.openingBracketBlock(session, match[1], row, i);

				var range = session.getCommentFoldRange(row, i + match[0].length, 1);

				if (range && !range.isMultiLine()) {
					if (forceMultiline) {
						range = this.getSectionRange(session, row);
					} else if (foldStyle != 'all') range = null;
				}

				return range;
			}

			if (foldStyle === 'markbegin') return;

			var match = line.match(this.foldingStopMarker);
			if (match) {
				var i = match.index + match[0].length;

				if (match[1]) return this.closingBracketBlock(session, match[1], row, i);

				return session.getCommentFoldRange(row, i, -1);
			}
		};

		this.getSectionRange = function (session, row) {
			var line = session.getLine(row);
			var startIndent = line.search(/\S/);
			var startRow = row;
			var startColumn = line.length;
			row = row + 1;
			var endRow = row;
			var maxRow = session.getLength();
			while (++row < maxRow) {
				line = session.getLine(row);
				var indent = line.search(/\S/);
				if (indent === -1) continue;
				if (startIndent > indent) break;
				var subRange = this.getFoldWidgetRange(session, 'all', row);

				if (subRange) {
					if (subRange.start.row <= startRow) {
						break;
					} else if (subRange.isMultiLine()) {
						row = subRange.end.row;
					} else if (startIndent == indent) {
						break;
					}
				}
				endRow = row;
			}

			return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
		};
		this.getCommentRegionBlock = function (session, line, row) {
			var startColumn = line.search(/\s*$/);
			var maxRow = session.getLength();
			var startRow = row;

			var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
			var depth = 1;
			while (++row < maxRow) {
				line = session.getLine(row);
				var m = re.exec(line);
				if (!m) continue;
				if (m[1]) depth--;
				else depth++;

				if (!depth) break;
			}

			var endRow = row;
			if (endRow > startRow) {
				return new Range(startRow, startColumn, endRow, line.length);
			}
		};
	}.call(FoldMode.prototype));
});

define('ace/mode/nsis', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/nsis_highlight_rules', 'ace/mode/folding/cstyle'], function (require, exports) {
	'use strict';

	const oop = require('../lib/oop');
	const TextMode = require('./text').Mode;
	const NSISHighlightRules = require('./nsis_highlight_rules').NSISHighlightRules;
	const FoldMode = require('./folding/cstyle').FoldMode;

	const Mode = function () {
		this.HighlightRules = NSISHighlightRules;
		this.foldingRules = new FoldMode();
	};

	oop.inherits(Mode, TextMode);

	(function () {
		this.lineCommentStart = [';', '#'];
		this.blockComment = { start: '/*', end: '*/' };
		this.$id = 'ace/mode/nsis';
	}.call(Mode.prototype));

	exports.Mode = Mode;
});
(function () {
	window.require(['ace/mode/nsis'], function (m) {
		if (typeof module == 'object' && typeof exports == 'object' && module) {
			module.exports = m;
		}
	});
})();
