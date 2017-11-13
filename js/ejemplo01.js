/*
	turnos 0, 1 , 0 , 1
*/
var turno = 1;

function hasWinner(){
	var cont=0;
	var x=[];
	for(var i=0; i<3; i++){
		x[i] = [];
		for(var j=0; j<3; j++){
			//no ha sido usado aun
			if(document.getElementById(cont).classList.contains('btn-outline-dark')){
				x[i][j] = 0;
			}
			else if(document.getElementById(cont).classList.contains('btn-outline-success')){
				x[i][j] = 1;
			}
			else if(document.getElementById(cont).classList.contains('btn-outline-danger')){
				x[i][j] = 2;	
			}

			console.log("["+i+"]["+j+"]="+ x[i][j]);

			cont++;
		}
	}

	var winner = 0; //0 no hay ganador
	if(x[0][0]==x[1][1] && x[0][0]==x[2][2])
		return x[0][0];
	else if(x[0][2]==x[1][1] && x[0][2]==x[2][0])
		return x[0][0];
	else {
		//columnas
		for(var i=0; i<3; i++){
			if(x[0][i]==x[1][i] && x[0][i]==x[2][i])
				return x[0][i];
		}

		//filas
		for(var i=0; i<3; i++){
			if(x[i][0]==x[i][1] && x[i][1]==x[i][2])
				return x[i][0];
		}

	}

	return winner;

}

function evaluar(me){
	//console.log(me);
	//console.log(me.id);
	var id=me.id;
	console.log(id);
	console.log(me.innerHTML);
	console.log(me.classList);

	me.classList.remove('btn-outline-dark');

	switch(turno) {
		case 0: 
			me.innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";			
			me.classList.add('btn-outline-success');
			break;
		case 1:
			me.innerHTML = "<i class='fa fa-cog fa-4x' aria-hidden='true'></i>";			
			me.classList.add('btn-outline-danger');

			break;
	}

	me.classList.add('disabled');

	turno = (turno+1) % 2;

	hasWinner();
}

