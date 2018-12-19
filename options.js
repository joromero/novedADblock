{
	var defaultcfg = {
		names : ["Paula Guerra G."],
		user_ids : ["e490d6e8ba153eff83a496169d4f5d7a"],
		keywords : ["emprendimiento","innovacion","innovación","openlab"]
	};
	var browser = chrome || browser;
	//browser.storage.sync.set(defaultcfg);
	browser.storage.sync.get(defaultcfg, function(cfg){
		for(var i=0; i<cfg.keywords.length; i++){
			let kw = cfg.keywords[i];
			let div = $("<div>");
			$("#keywords").append(div);
			div.append($("<b>").text(cfg.keywords[i]))
					.append($("<button>").append($("<img>").attr("src","remove.svg"))
										.click(function(evt){
											console.log("removido",kw);
											browser.storage.sync.get(defaultcfg,function(cfg){
												for(var j=cfg.keywords.length-1; j>=0; j--){
													if(kw === cfg.keywords[j]){
														cfg.keywords.splice(j,1);
													}
												}	
												browser.storage.sync.set(cfg);
												div.remove();
											});
										}))
										
					.append($("<br>"));
		}

		for(var i=0; i<cfg.user_ids.length; i++){
			let kw = cfg.user_ids[i];
			let div = $("<div>");
			$("#users").append(div);
			div.append($("<b>").text(cfg.user_ids[i]))
					.append($("<button>").append($("<img>").attr("src","remove.svg"))
										.click(function(evt){
											console.log("removido",kw);
											browser.storage.sync.get(defaultcfg,function(cfg){
												for(var j=cfg.user_ids.length-1; j>=0; j--){
													if(kw === cfg.user_ids[j]){
														cfg.user_ids.splice(j,1);
													}
												}	
												browser.storage.sync.set(cfg);
												div.remove();
											});
										}))
										
					.append($("<br>"));
		}

		for(var i=0; i<cfg.names.length; i++){
			let kw = cfg.names[i];
			let div = $("<div>");
			$("#names").append(div);
			div.append($("<b>").text(cfg.names[i]))
					.append($("<button>").append($("<img>").attr("src","remove.svg"))
										.click(function(evt){
											console.log("removido",kw);
											browser.storage.sync.get(defaultcfg,function(cfg){
												for(var j=cfg.names.length-1; j>=0; j--){
													if(kw === cfg.names[j]){
														cfg.names.splice(j,1);
													}
												}	
												browser.storage.sync.set(cfg);
												div.remove();
											});
										}))
										
					.append($("<br>"));
		}
	});
}