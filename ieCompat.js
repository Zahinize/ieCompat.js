(function () {
  var docEl = document.documentElement,
    uA = navigator.userAgent,
	msieStr = uA.match(/MSIE /gi) || uA.match(/rv:/gi),
	engineStr = uA.match(/Trident\//gi),
	msieVrs = 8,
	engineVrs = 4,
	compatMsieVrs = 7,
    jsStr = "js-ie",
	ieStr = "ie",
	stdStr = "-std",
	cptStr = "-cpt",
	curMSIE, curEngine, curCompatMsieVrs;
	
	
	if (!docEl || !uA || !msieStr || !engineStr) {
	  return false;
	}
	
	for (var i=0; i<15; i++) {
	  curMSIE = msieStr + msieVrs + ".0";
	  curEngine = engineStr + engineVrs + ".0";
      curCompatMsieVrs = msieStr + compatMsieVrs + ".0";
		
	  if (uA.match(curEngine)) {
        if (uA.match(curMSIE)) {
	      docEl.className+= " " + (jsStr + msieVrs + stdStr);
          docEl.className+= " " + (ieStr + msieVrs + stdStr);
	      break;
        } else if (uA.match(curCompatMsieVrs)) {
	      docEl.className+= " " + (jsStr + msieVrs + cptStr);
	      docEl.className+= " " + (ieStr + msieVrs  + cptStr);
	      break;
		} else if (uA.match(msieStr + "10.0")) {
	      docEl.className+= " " + (jsStr + "10" + cptStr);
          docEl.className+= " " + (ieStr + "10" + cptStr);
	      break;
		} else if (uA.match(msieStr + "9.0")) {
	      docEl.className+= " " + (jsStr + "9" + cptStr);
          docEl.className+= " " + (ieStr + "9" + cptStr);
	      break;
        } else if (uA.match(msieStr + "8.0")) {
	      docEl.className+= " " + (jsStr + "8" + cptStr);
          docEl.className+= " " + (ieStr + "8" + cptStr);
	      break;
        }
	  } else {
        msieVrs++;
        engineVrs++;
	  }
	}
})();