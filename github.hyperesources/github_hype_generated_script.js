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
	
	var resources = {"3":{n:"Pasted-3.png",p:1},"1":{n:"Pasted-1.png",p:1},"4":{n:"github%20button%20cpp11.png",p:1},"2":{n:"Pasted-2.png",p:1},"0":{n:"Pasted.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#212121",v:{"48":{aU:8,G:"#D6D6D6",aE:[{type:5,goToURL:"https://github.com/Negusbuk",openInNewWindow:true}],c:302,aV:8,r:"inline",d:12,t:10,Z:"break-word",aP:"pointer",w:"http://github.com/Negusbuk",j:"absolute",x:"visible",k:"div",y:"preserve",z:"33",aS:8,aT:8,a:514,F:"right",b:500},"26":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"22",O:0,D:"#A0A0A0",a:680,b:348},"19":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"15",O:0,D:"#A0A0A0",a:182,b:182},"27":{aD:[{timelineIdentifier:"37",type:3}],aE:[{goToURL:"http://github.com/Negusbuk/NeguPi",type:5,openInNewWindow:true}],q:"100% 100%",c:150,d:150,r:"inline",aP:"pointer",h:"0",j:"absolute",x:"visible",k:"div",Q:0,z:"28",R:"#EBEBEB",aC:[{timelineIdentifier:"38",type:3}],S:0,a:514,o:"content-box",T:0,b:182},"42":{c:154,d:154,I:"None",e:"1.000000",J:"None",K:"None",g:"#212121",L:"None",M:0,N:0,A:"#212121",x:"visible",j:"absolute",B:"#212121",P:0,k:"div",O:0,z:"23",C:"#212121",D:"#212121",a:346,b:346},"35":{c:154,d:154,I:"None",e:"1.000000",J:"None",K:"None",g:"#212121",L:"None",M:0,N:0,A:"#212121",x:"visible",j:"absolute",B:"#212121",P:0,k:"div",O:0,z:"31",C:"#212121",D:"#212121",a:180,b:14},"28":{b:16,z:"32",K:"None",c:150,aD:[{timelineIdentifier:"33",type:3}],L:"None",aS:0,aE:[{goToURL:"http://github.com/Negusbuk/Neguino",type:5,openInNewWindow:true}],d:150,M:0,N:0,aT:0,O:0,aU:0,P:0,h:"1",Q:0,aV:0,R:"#EBEBEB",j:"absolute",S:0,k:"div",T:0,o:"content-box",A:"#EBEBEB",q:"100% 100%",B:"#EBEBEB",r:"inline",C:"#EBEBEB",D:"#EBEBEB",aP:"pointer",x:"visible",I:"None",aC:[{timelineIdentifier:"34",type:3}],a:182,J:"None"},"20":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"16",O:0,D:"#A0A0A0",a:348,b:182},"2":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"1",O:0,D:"#A0A0A0",a:16,b:16},"36":{c:154,d:154,I:"None",e:"1.000000",J:"None",K:"None",g:"#212121",L:"None",M:0,N:0,A:"#212121",x:"visible",j:"absolute",B:"#212121",P:0,k:"div",O:0,z:"27",C:"#212121",D:"#212121",a:512,b:180},"3":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"2",O:0,D:"#A0A0A0",a:514,b:16},"21":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"17",O:0,D:"#A0A0A0",a:680,b:182},"5":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"4",O:0,D:"#A0A0A0",a:348,b:16},"45":{p:"no-repeat",aD:[{timelineIdentifier:"46",type:3}],aE:[{goToURL:"http://github.com/Negusbuk/CPP11",type:5,openInNewWindow:true}],q:"100% 100%",c:150,d:150,r:"inline",aP:"pointer",h:"4",j:"absolute",x:"visible",k:"div",Q:0,z:"30",R:"#EBEBEB",aC:[{timelineIdentifier:"47",type:3}],S:0,a:680,o:"content-box",T:0,b:15},"30":{aD:[{timelineIdentifier:"40",type:3}],aE:[{goToURL:"http://github.com/Negusbuk/MatDB",type:5,openInNewWindow:true}],q:"100% 100%",c:150,d:150,r:"inline",aP:"pointer",h:"2",j:"absolute",x:"visible",k:"div",Q:0,z:"26",R:"#EBEBEB",aC:[{timelineIdentifier:"41",type:3}],S:0,a:16,o:"content-box",T:0,b:348},"23":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"19",O:0,D:"#A0A0A0",a:514,b:348},"16":{c:154,d:154,I:"None",J:"None",K:"None",g:"#212121",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"29",O:0,D:"#A0A0A0",a:678,b:13},"39":{c:154,d:154,I:"None",e:"1.000000",J:"None",K:"None",g:"#212121",L:"None",M:0,N:0,A:"#212121",x:"visible",j:"absolute",B:"#212121",P:0,k:"div",O:0,z:"25",C:"#212121",D:"#212121",a:14,b:346},"31":{aD:[{timelineIdentifier:"43",type:3}],aE:[{goToURL:"http://github.com/DESY-FH-ELab/cmstkmodlab",type:5,openInNewWindow:true}],q:"100% 100%",c:150,d:150,r:"inline",aP:"pointer",h:"3",j:"absolute",x:"visible",k:"div",Q:0,z:"24",R:"#EBEBEB",aC:[{timelineIdentifier:"44",type:3}],S:0,a:348,o:"content-box",T:0,b:348},"24":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"20",O:0,D:"#A0A0A0",a:182,b:348},"17":{c:150,d:150,I:"None",J:"None",K:"None",g:"#EBEBEB",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",C:"#A0A0A0",z:"13",O:0,D:"#A0A0A0",a:16,b:182}},n:"Untitled Scene",T:{"46":{d:0.03,i:"46",n:"CPP11 In",a:[{f:"2",t:0,d:0.03,i:"g",e:"#EBEBEB",r:1,s:"#212121",o:"16"}],f:30},"34":{d:0.03,i:"34",n:"Neguino Out",a:[{f:"2",t:0,d:0.03,i:"g",e:"#212121",r:1,s:"#EBEBEB",o:"35"}],f:30},"47":{d:0.03,i:"47",n:"CPP11 Out",a:[{f:"2",t:0,d:0.03,i:"g",e:"#212121",r:1,s:"#212121",o:"16"}],f:30},"37":{d:0.03,i:"37",n:"NeguPi In",a:[{f:"2",t:0,d:0.03,i:"g",e:"#EBEBEB",r:1,s:"#212121",o:"36"}],f:30},"40":{d:0.03,i:"40",n:"MatDB In",a:[{f:"2",t:0,d:0.03,i:"g",e:"#EBEBEB",r:1,s:"#212121",o:"39"}],f:30},"43":{d:0.03,i:"43",n:"cmstkmodlab In",a:[{f:"2",t:0,d:0.03,i:"g",e:"#EBEBEB",r:1,s:"#212121",o:"42"}],f:30},"38":{d:0.03,i:"38",n:"NeguPi Out",a:[{f:"2",t:0,d:0.03,i:"g",e:"#212121",r:1,s:"#EBEBEB",o:"36"}],f:30},"33":{d:0.03,i:"33",n:"Neguino In",a:[{f:"2",t:0,d:0.03,i:"g",e:"#EBEBEB",r:1,s:"#212121",o:"35"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"41":{d:0.03,i:"41",n:"MatDB Out",a:[{f:"2",t:0,d:0.03,i:"g",e:"#212121",r:1,s:"#EBEBEB",o:"39"}],f:30},"44":{d:0.03,i:"44",n:"cmstkmodlab Out",a:[{f:"2",t:0,d:0.03,i:"g",e:"#212121",r:1,s:"#EBEBEB",o:"42"}],f:30}},o:"1"}];
	
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

