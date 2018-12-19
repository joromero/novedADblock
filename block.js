$(window).bind("load",function(){
	var defaultcfg = {
		names : ["Paula Guerra G."],
		user_ids : ["e490d6e8ba153eff83a496169d4f5d7a"],
		keywords : ["emprendimiento","innovacion","innovación","openlab"]
	};
	var browser = chrome || browser;
	browser.storage.sync.get(defaultcfg, function(config){
		console.log(config);
		if(window.location.href.includes("novedades_institucion")){
			var divs = $("div.objeto");
			divs.each((ind,el) =>{
				var div = $(el);
				var usuario = div.find("a.usuario");
				var nameH = div.find("h2");
				console.log(nameH);
				var bloquear = $("<button>").text("Bloquear usuario").click(function(evt){
					div.hide();
					browser.storage.sync.get(defaultcfg,function(cfg){
						cfg.names.push(usuario.text());
						//cfg.user_ids.push(usuario.attr("href"));
						console.log("Usuario bloqueado:",usuario.text());
						browser.storage.sync.set(cfg);
					});
				});
				nameH.append(bloquear);
				for(var i=0; i<config.names.length; i++){
					if(usuario.text().includes(config.names[i])){
						div.hide();
						console.log("Bloqueado por ser mandado por",config.names[i]);
						return;
					}
				}
				for(var i=0; i<config.user_ids.length; i++){
					if(usuario.attr("href").includes(config.user_ids[i])){
						div.hide();
						console.log("Bloqueado por ser mandado por usuario",config.user_ids[i]);
						return;
					}
				}
				for(var i=0; i<config.keywords.length; i++){
					if(div.text().toLowerCase().includes(config.keywords[i])){
						div.hide();
						console.log("Bloqueado por contener keyword",config.keywords[i]);
						return;
					}
				}

			});
		}
	});


});