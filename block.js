$(window).bind("load",function(){
	var keywords = ["emprendimiento","innovacion","innovación","openlab"];
	var users = ["e490d6e8ba153eff83a496169d4f5d7a"];
	var people = ["Paula Guerra G."];

	if(window.location.href === "https://www.u-cursos.cl/ingenieria/2/novedades_institucion/"){
		var divs = $("div.objeto");
		$("div.objeto").each((ind,el) =>{
			var div = $(el);
			var usuario = div.find("a.usuario");
			for(var i=0; i<people.length; i++){
				if(usuario.text().includes(people[i])){
					div.hide();
					console.log("Bloqueado por ser mandado por",people[i]);
					return;
				}
			}
			for(var i=0; i<users.length; i++){
				if(usuario.attr("href").includes(users[i])){
					div.hide();
					console.log("Bloqueado por ser mandado por usuario",users[i]);
					return;
				}
			}
			for(var i=0; i<keywords.length; i++){
				if(div.text().toLowerCase().includes(keywords[i])){
					div.hide();
					console.log("Bloqueado por contener keyword",keywords[i]);
					return;
				}
			}

		})
	}
});