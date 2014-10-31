//	HYPE.documents["github"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "github.hyperesources";
	var documentName = "github";
	var documentLoaderFilename = "github_hype_generated_script.js";
	var mainContainerID = "github_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"Pasted-3.png",p:1},"1":{n:"Pasted-1.png",p:1},"2":{n:"Pasted-2.png",p:1},"0":{n:"Pasted.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#212121",v:{"19":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"16",O:0,D:"#A0A0A0",a:182,b:182},"2":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"1",O:0,D:"#A0A0A0",a:16,b:16},"21":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"18",O:0,D:"#A0A0A0",a:680,b:182},"26":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"23",O:0,D:"#A0A0A0",a:680,b:348},"3":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"2",O:0,D:"#A0A0A0",a:514,b:16},"16":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"13",O:0,D:"#A0A0A0",a:680,b:16},"27":{o:"content-box",h:"0",x:"visible",a:514,q:"100% 100%",aE:[{type:5,goToURL:"http://github.com/Negusbuk/NeguPi",openInNewWindow:true}],j:"absolute",r:"inline",c:150,k:"div",z:"24",d:150,b:182,aP:"pointer"},"5":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"4",O:0,D:"#A0A0A0",a:348,b:16},"23":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"20",O:0,D:"#A0A0A0",a:514,b:348},"17":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"14",O:0,D:"#A0A0A0",a:16,b:182},"28":{o:"content-box",h:"1",x:"visible",a:182,q:"100% 100%",aE:[{type:5,goToURL:"http://github.com/Negusbuk/Neguino",openInNewWindow:true}],j:"absolute",r:"inline",c:150,k:"div",z:"25",d:150,b:16,aP:"pointer"},"30":{o:"content-box",h:"2",x:"visible",a:16,q:"100% 100%",aE:[{type:5,goToURL:"http://github.com/Negusbuk/MatDB",openInNewWindow:true}],j:"absolute",r:"inline",c:150,k:"div",z:"26",d:150,b:348,aP:"pointer"},"24":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"21",O:0,D:"#A0A0A0",a:182,b:348},"20":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"17",O:0,D:"#A0A0A0",a:348,b:182},"31":{o:"content-box",h:"3",x:"visible",a:348,q:"100% 100%",aE:[{type:5,goToURL:"http://github.com/DESY-FH-ELab/cmstkmodlab",openInNewWindow:true}],j:"absolute",r:"inline",c:150,k:"div",z:"27",d:150,b:348,aP:"pointer"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

