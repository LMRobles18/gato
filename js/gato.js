var matrix= new Array(3);
var jugador=-1;
for(var i=0; i<3; i++){
	matrix[i]=new Array(3);
	for (var j= 0; j<3; j++) {
		matrix[i][j]= -1;
	}

}
matrix[0][0]=1;


function equis(boton){
	if(jugador==-1){
		if(boton.innerHTML == '<i class="fa fa-square fa-4x" aria-hidden="true"></i>')
			boton.innerHTML ="<i class='fa fa-check fa-4x' aria-hidden='true'></i>";
		jugador=jugador*-1;
		var id= boton.id;
		aux1=id%10;
		aux2=id/10;
		aux2=Math.floor(aux2);
		console.log("Usuario x",aux2-1,"y",aux1-1);
		matrix[aux2-1][aux1-1]=2;
		if(verifica(2))
			alert("GANADOR");
		else
			if(empate())
				alert("Empate");
	}
	console.log("boton",boton);
	var activo=0;
	if(jugador==1){
		while(1){
			console.log("bloqueo: ",bloquear(2));
			var x=0;
			var y=0;

            
            var caso=bloquear(2);
            switch(caso){
            	case 1:
            	    for (var i = 0; i < 3; i++) {
            	    	if(matrix[0][i]!=2){
            	    		x=0;
            	    		y=i;
            	    	}
            	    }
            		break;
            	case 2:
            		for (var i = 0; i < 3; i++) {
            	    	if(matrix[1][i]!=2){
            	    		x=1;
            	    		y=i;
            	    	}
            	    }
            		break;
            	case 3:
            	    for (var i = 0; i < 3; i++) {
            	    	if(matrix[2][i]!=2){
            	    		x=2;
            	    		y=i;
            	    	}
            	    }
            		break;
            	case 4:
            	    for (var i = 0; i < 3; i++) {
            	    	if(matrix[i][0]!=2){
            	    		x=i;
            	    		y=0;
            	    	}
            	    }
            		break;
            	case 5:
            	    for (var i = 0; i < 3; i++) {
            	    	if(matrix[i][1]!=2){
            	    		x=i;
            	    		y=1;
            	    	}
            	    }
            		break;
            	case 6:
            	    for (var i = 0; i < 3; i++) {
            	    	if(matrix[i][2]!=2){
            	    		x=i;
            	    		y=2;
            	    	}
            	    }
            		break;
            	case 7:
            		break;
            	case 8:
            	    if(matrix[0][2]!=2){
						x=0; y=2;
            	    }
					if(matrix[1][1]!=2){ 
						x=1;y=1;
					}
					if(matrix[2][0]!=2){
						x=2;y=0;
					}
            		break;
            	default:
            		console.log("Error!!!!");
            }  
            if(estado(x,y))
				break;
            
            x=Math.floor(Math.random()*(3-0)+0);
			y=Math.floor(Math.random()*(3-0)+0);

			if(estado(x,y))
				break;

		}
		
		console.log("MAquina x",x,"y",y);
	//	if(estado(x,y)){
			console.log("Hace el cambio la maquina");
			x1=x+1;
			y1=y+1;
			var cadena=""+x1+y1;
			var myElement = document.getElementById(cadena);
			console.log("buuuuu",cadena);
			myElement.innerHTML ="<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
			matrix[x][y]=1;
			if(verifica(1))
				alert("GANADOR O");
			else
				if(empate())
					alert("Empate");
			jugador=jugador*-1;
		//}
	}
	console.log(matrix);
}
function estado(x,y){
	if(matrix[x][y]==-1)
		return true;
	return false;
}
function empate(){
	for(var i=0; i<3; i++){
		for (var j= 0; j<3; j++) {
			if(matrix[i][j]==-1)
				return false;
		}
	}
	return true;
}
function verifica(valor){
	if(valida(valor))
		return true;
	return false;
}
function valida(valor){
	//horizontal
	if(matrix[0][0]==valor && matrix[0][1]==valor && matrix[0][2]==valor)
		return true;
	if(matrix[1][0]==valor && matrix[1][1]==valor && matrix[1][2]==valor)
		return true;
	if(matrix[2][0]==valor && matrix[2][1]==valor && matrix[2][2]==valor)
		return true;
	//Vertical
	if(matrix[0][0]==valor && matrix[1][0]==valor && matrix[2][0]==valor)
		return true;
	if(matrix[0][1]==valor && matrix[1][1]==valor && matrix[2][1]==valor)
		return true;
	if(matrix[0][2]==valor && matrix[1][2]==valor && matrix[2][2]==valor)
		return true;
	//Diagonal
	if(matrix[0][0]==valor && matrix[1][1]==valor && matrix[2][2]==valor)
		return true;
	if(matrix[0][2]==valor && matrix[1][1]==valor && matrix[2][0]==valor)
		return true;
	return false;
}
function bloquear(valor){
	var cont=0;

	for(var i=0; i<3; i++){
		cont=0;
		for (var j= 0; j<3; j++) {
			if (matrix[i][j]==valor){
				cont++;
			}
		}
        if(cont==2)
			return (i+1); 
	}
    for(var i=0; i<3; i++){
		cont=0;
		for (var j= 0; j<3; j++) {
			if (matrix[j][i]==valor){
				cont++;
			}
		}
		if(cont==2)
			return (i+4); 
	}

	
	
	cont=0;
	//diagonales
	for(var i=0; i<3; i++)
			if(matrix[i][i]==valor)
				cont++;
	if (cont==2)
		return 7;
	
	cont=0;
	if(matrix[0][2]==valor)
		cont ++;
	if(matrix[1][1]==valor) 
		cont++;
	if(matrix[2][0]==valor)
		cont++;

	if(cont==2)
		return 8;
    
    return 0;

}

