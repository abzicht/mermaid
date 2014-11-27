/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,23],$V2=[1,24],$V3=[1,25],$V4=[1,26],$V5=[1,27],$V6=[1,28],$V7=[1,29],$V8=[1,30],$V9=[1,31],$Va=[1,17],$Vb=[1,18],$Vc=[1,19],$Vd=[1,15],$Ve=[1,16],$Vf=[34,35,36,37,38,39,40,41,42,54,56,57,58,60],$Vg=[11,45,46,47,48],$Vh=[9,11,22,25,27,29,30,45,46,47,48],$Vi=[9,11,22,25,27,29,30,34,35,36,37,38,39,40,41,42,45,46,47,48],$Vj=[9,11,22,25,27,29,30,33,34,35,36,37,38,39,40,41,42,45,46,47,48],$Vk=[6,9],$Vl=[34,35,36,37,38,39,40,41,42],$Vm=[34,35,36,37,38,39,40,41,42,49],$Vn=[1,86],$Vo=[1,84],$Vp=[1,83],$Vq=[1,87],$Vr=[1,75],$Vs=[1,76],$Vt=[1,77],$Vu=[1,78],$Vv=[1,79],$Vw=[1,80],$Vx=[1,81],$Vy=[1,82],$Vz=[1,85],$VA=[9,24,26,28,29,30,33,34,35,36,37,38,39,40,41,42,49],$VB=[2,56],$VC=[1,118],$VD=[1,115],$VE=[1,113],$VF=[1,116],$VG=[1,114],$VH=[1,121],$VI=[1,120],$VJ=[1,119],$VK=[1,117],$VL=[2,21],$VM=[1,128],$VN=[11,37],$VO=[9,11,33,34,35,36,37,41,42,59,63];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"graphConfig":4,"statements":5,"EOF":6,"spaceList":7,"GRAPH":8,"SPACE":9,"DIR":10,"SEMI":11,"statement":12,"verticeStatement":13,"styleStatement":14,"linkStyleStatement":15,"classDefStatement":16,"classStatement":17,"clickStatement":18,"vertex":19,"link":20,"alphaNum":21,"SQS":22,"text":23,"SQE":24,"PS":25,"PE":26,"DIAMOND_START":27,"DIAMOND_STOP":28,"TAGEND":29,"TAGSTART":30,"alphaNumStatement":31,"alphaNumToken":32,"MINUS":33,"ALPHA":34,"NUM":35,"COLON":36,"COMMA":37,"PLUS":38,"EQUALS":39,"MULT":40,"DOT":41,"BRKT":42,"linkStatement":43,"arrowText":44,"ARROW_POINT":45,"ARROW_CIRCLE":46,"ARROW_CROSS":47,"ARROW_OPEN":48,"PIPE":49,"textToken":50,"textStatement":51,"textNoTags":52,"textNoTagsToken":53,"CLASSDEF":54,"stylesOpt":55,"CLASS":56,"CLICK":57,"STYLE":58,"HEX":59,"LINKSTYLE":60,"style":61,"styleComponent":62,"UNIT":63,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",8:"GRAPH",9:"SPACE",10:"DIR",11:"SEMI",22:"SQS",24:"SQE",25:"PS",26:"PE",27:"DIAMOND_START",28:"DIAMOND_STOP",29:"TAGEND",30:"TAGSTART",33:"MINUS",34:"ALPHA",35:"NUM",36:"COLON",37:"COMMA",38:"PLUS",39:"EQUALS",40:"MULT",41:"DOT",42:"BRKT",45:"ARROW_POINT",46:"ARROW_CIRCLE",47:"ARROW_CROSS",48:"ARROW_OPEN",49:"PIPE",54:"CLASSDEF",56:"CLASS",57:"CLICK",58:"STYLE",59:"HEX",60:"LINKSTYLE",63:"UNIT"},
productions_: [0,[3,3],[3,4],[4,4],[5,3],[5,1],[7,2],[7,1],[12,2],[12,2],[12,2],[12,2],[12,2],[12,2],[13,3],[13,1],[19,4],[19,6],[19,4],[19,4],[19,4],[19,4],[19,1],[21,1],[21,2],[31,1],[31,3],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[20,2],[20,1],[43,1],[43,1],[43,1],[43,1],[44,3],[23,1],[23,2],[51,1],[51,2],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[52,1],[52,2],[53,1],[53,1],[53,1],[53,1],[53,1],[53,1],[53,1],[53,1],[53,1],[53,1],[53,1],[16,5],[17,5],[18,5],[14,5],[14,5],[15,5],[55,1],[55,3],[61,1],[61,2],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 2:
this.$=$$[$0-3];
break;
case 3:
 yy.setDirection($$[$0-1]);this.$ = $$[$0-1];
break;
case 14:
 yy.addLink($$[$0-2],$$[$0],$$[$0-1]);this.$ = 'oy'
break;
case 15:
this.$ = 'yo';
break;
case 16:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'square');
break;
case 17:
this.$ = $$[$0-5];yy.addVertex($$[$0-5],$$[$0-2],'circle');
break;
case 18:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'round');
break;
case 19: case 21:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'diamond');
break;
case 20:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'odd');
break;
case 22:
this.$ = $$[$0];yy.addVertex($$[$0]);
break;
case 23: case 25: case 27: case 28: case 43: case 47: case 48: case 60: case 62: case 63: case 81:
this.$=$$[$0];
break;
case 24: case 44: case 61:
this.$=$$[$0-1]+''+$$[$0];
break;
case 26:
this.$=$$[$0-2]+'-'+$$[$0];
break;
case 29: case 30: case 31: case 32: case 33: case 34: case 37: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 58: case 59: case 64: case 65: case 66: case 67: case 68: case 69: case 71: case 72:
this.$ = $$[$0];
break;
case 35: case 57: case 70:
this.$ = '<br>';
break;
case 36:
$$[$0-1].text = $$[$0];this.$ = $$[$0-1];
break;
case 38:
this.$ = {"type":"arrow"};
break;
case 39:
this.$ = {"type":"arrow_circle"};
break;
case 40:
this.$ = {"type":"arrow_cross"};
break;
case 41:
this.$ = {"type":"arrow_open"};
break;
case 42:
this.$ = $$[$0-1];
break;
case 73:
this.$ = $$[$0-4];yy.addClass($$[$0-2],$$[$0]);
break;
case 74:
this.$ = $$[$0-4];yy.setClass($$[$0-2], $$[$0]);
break;
case 75:
this.$ = $$[$0-4];yy.setClickEvent($$[$0-2], $$[$0]);
break;
case 76:
this.$ = $$[$0-4];yy.addVertex($$[$0-2],undefined,undefined,$$[$0]);
break;
case 77: case 78:
this.$ = $$[$0-4];yy.updateLink($$[$0-2],$$[$0]);
break;
case 79:
this.$ = [$$[$0]]
break;
case 80:
$$[$0-2].push($$[$0]);this.$ = $$[$0-2];
break;
case 82:
this.$ = $$[$0-1] + $$[$0];
break;
case 83: case 84: case 85: case 86: case 87: case 88: case 89: case 90: case 91:
this.$=$$[$0]
break;
}
},
table: [{3:1,4:2,8:[1,3]},{1:[3]},{5:4,7:5,9:$V0,12:6,13:8,14:9,15:10,16:11,17:12,18:13,19:14,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,54:$Va,56:$Vb,57:$Vc,58:$Vd,60:$Ve},{9:[1,32]},{6:[1,33]},{5:34,12:6,13:8,14:9,15:10,16:11,17:12,18:13,19:14,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,54:$Va,56:$Vb,57:$Vc,58:$Vd,60:$Ve},{6:[2,5],7:35,9:$V0},o($Vf,[2,7],{7:36,9:$V0}),{11:[1,37]},{11:[1,38]},{11:[1,39]},{11:[1,40]},{11:[1,41]},{11:[1,42]},{11:[2,15],20:43,43:44,45:[1,45],46:[1,46],47:[1,47],48:[1,48]},{9:[1,49]},{9:[1,50]},{9:[1,51]},{9:[1,52]},{9:[1,53]},o($Vg,[2,22],{22:[1,54],25:[1,55],27:[1,56],29:[1,57],30:[1,58]}),o($Vh,[2,23],{31:21,32:22,21:59,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9}),o($Vi,[2,25],{33:[1,60]}),o($Vj,[2,27]),o($Vj,[2,28]),o($Vj,[2,29]),o($Vj,[2,30]),o($Vj,[2,31]),o($Vj,[2,32]),o($Vj,[2,33]),o($Vj,[2,34]),o($Vj,[2,35]),{10:[1,61]},{1:[2,1]},{6:[1,62]},{5:63,12:6,13:8,14:9,15:10,16:11,17:12,18:13,19:14,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,54:$Va,56:$Vb,57:$Vc,58:$Vd,60:$Ve},o($Vf,[2,6]),o($Vk,[2,8]),o($Vk,[2,9]),o($Vk,[2,10]),o($Vk,[2,11]),o($Vk,[2,12]),o($Vk,[2,13]),{19:64,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},o($Vl,[2,37],{44:65,49:[1,66]}),o($Vm,[2,38]),o($Vm,[2,39]),o($Vm,[2,40]),o($Vm,[2,41]),{21:67,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,59:[1,68]},{35:[1,69]},{21:70,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{21:71,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{21:72,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{9:$Vn,23:73,29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:74},{9:$Vn,23:89,25:[1,88],29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:74},{9:$Vn,23:90,29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:74},{9:$Vn,23:91,29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:74},{9:$Vn,23:92,29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:74},o($Vh,[2,24]),{32:93,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{11:[1,94]},{1:[2,2]},{6:[2,4]},{11:[2,14]},o($Vl,[2,36]),{9:$Vn,23:95,29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:74},{9:[1,96]},{9:[1,97]},{9:[1,98]},{9:[1,99]},{9:[1,100]},{9:[1,101]},{9:$Vn,24:[1,102],29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:103},o($VA,[2,43]),o($VA,[2,47]),o($VA,[2,48]),o($VA,[2,49]),o($VA,[2,50]),o($VA,[2,51]),o($VA,[2,52]),o($VA,[2,53]),o($VA,[2,54]),o($VA,[2,55]),o($VA,$VB),o($VA,[2,57]),o($VA,[2,58]),o($VA,[2,59]),{9:$Vn,23:104,29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:74},{9:$Vn,26:[1,105],29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:103},{9:$Vn,28:[1,106],29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:103},{9:$Vn,24:[1,107],29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:103},{9:$Vn,29:[1,108],30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:103},o($Vi,[2,26]),o([9,34,35,36,37,38,39,40,41,42,54,56,57,58,60],[2,3]),{9:$Vn,29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,49:[1,109],50:103},{9:$VC,33:$VD,34:$VE,35:$VF,36:$VG,41:$VH,42:$VI,55:110,59:$VJ,61:111,62:112,63:$VK},{9:$VC,33:$VD,34:$VE,35:$VF,36:$VG,41:$VH,42:$VI,55:122,59:$VJ,61:111,62:112,63:$VK},{9:$VC,33:$VD,34:$VE,35:$VF,36:$VG,41:$VH,42:$VI,55:123,59:$VJ,61:111,62:112,63:$VK},{9:$VC,33:$VD,34:$VE,35:$VF,36:$VG,41:$VH,42:$VI,55:124,59:$VJ,61:111,62:112,63:$VK},{21:125,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{21:126,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},o($Vg,[2,16]),o($VA,[2,44]),{9:$Vn,26:[1,127],29:$Vo,30:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx,41:$Vy,42:$Vz,50:103},o($Vg,[2,18]),o($Vg,[2,19]),o($Vg,[2,20]),o([9,29,30,33,34,35,36,37,38,39,40,41,42],$VB,{11:$VL,45:$VL,46:$VL,47:$VL,48:$VL}),o($Vl,[2,42]),{11:[2,76],37:$VM},o($VN,[2,79],{62:129,9:$VC,33:$VD,34:$VE,35:$VF,36:$VG,41:$VH,42:$VI,59:$VJ,63:$VK}),o($VO,[2,81]),o($VO,[2,83]),o($VO,[2,84]),o($VO,[2,85]),o($VO,[2,86]),o($VO,[2,87]),o($VO,[2,88]),o($VO,[2,89]),o($VO,[2,90]),o($VO,[2,91]),{11:[2,77],37:$VM},{11:[2,78],37:$VM},{11:[2,73],37:$VM},{11:[2,74]},{11:[2,75]},{26:[1,130]},{9:$VC,33:$VD,34:$VE,35:$VF,36:$VG,41:$VH,42:$VI,59:$VJ,61:131,62:112,63:$VK},o($VO,[2,82]),o($Vg,[2,17]),o($VN,[2,80],{62:129,9:$VC,33:$VD,34:$VE,35:$VF,36:$VG,41:$VH,42:$VI,59:$VJ,63:$VK})],
defaultActions: {33:[2,1],62:[2,2],63:[2,4],64:[2,14],125:[2,74],126:[2,75]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 58;
break;
case 1:return 60;
break;
case 2:return 54;
break;
case 3:return 56;
break;
case 4:return 57;
break;
case 5:return 8;
break;
case 6:return 10;
break;
case 7:return 10;
break;
case 8:return 10;
break;
case 9:return 10;
break;
case 10:return 10;
break;
case 11:return 10;
break;
case 12:return 35;
break;
case 13:return 42;
break;
case 14:return 36;
break;
case 15:return 11;
break;
case 16:return 37;
break;
case 17:return 39;
break;
case 18:return 40;
break;
case 19:return 41;
break;
case 20:return 30;
break;
case 21:return 29;
break;
case 22:return 47;
break;
case 23:return 45;
break;
case 24:return 46;
break;
case 25:return 48;
break;
case 26:return 33;
break;
case 27:return 38;
break;
case 28:return 39;
break;
case 29:return 34;
break;
case 30:return 49;
break;
case 31:return 25;
break;
case 32:return 26;
break;
case 33:return 22;
break;
case 34:return 24;
break;
case 35:return 27
break;
case 36:return 28
break;
case 37:return 'QUOTE';
break;
case 38:return 9;
break;
case 39:return 'NEWLINE';
break;
case 40:return 6;
break;
}
},
rules: [/^(?:style\b)/,/^(?:linkStyle\b)/,/^(?:classDef\b)/,/^(?:class\b)/,/^(?:click\b)/,/^(?:graph\b)/,/^(?:LR\b)/,/^(?:RL\b)/,/^(?:TB\b)/,/^(?:BT\b)/,/^(?:TD\b)/,/^(?:BR\b)/,/^(?:[0-9])/,/^(?:#)/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:=)/,/^(?:\*)/,/^(?:\.)/,/^(?:<)/,/^(?:>)/,/^(?:--[x])/,/^(?:-->)/,/^(?:--[o])/,/^(?:---)/,/^(?:-)/,/^(?:\+)/,/^(?:=)/,/^(?:[a-zåäöæøA-ZÅÄÖÆØ_])/,/^(?:\|)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:")/,/^(?:\s)/,/^(?:\n)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}