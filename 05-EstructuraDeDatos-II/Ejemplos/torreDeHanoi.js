'use strict'

function Pila(){
	this._arr = [];
}

Pila.prototype.push = function(v){
	return this._arr.push(v);
}

Pila.prototype.pop = function(){
	return this._arr.pop();
}

Pila.prototype.len = function(){
	return this._arr.length;
}

function Torre(){
	this._t1 = new Pila();
	this._t2 = new Pila();
	this._t3 = new Pila();
}

Torre.prototype.init = function(n){
	for(var i = 1; i <=n ; i++){
		this._t1.push(i);
	}
	return this;
}
/*
	Función Recursiva que realiza los movimientos para resolver la torre de Hanoi.
	@disk: Cantidad de platos a mover (pila de n platos).
	@source: Torre principal, sobre la que empezas a jugar (primera pila);
	@aux: Torre que vas a usar como auxiliar para poner los platos en movimientos intermedios.
	@dest: Torre objetivo, donde queres que lleguen los platos.
*/
 Torre.prototype.solve = function(disk, source, dest, aux){
 	// Al principio no le paso parametro, por defecto quiero que mueva todos los platos de la primera
 	// Pila hacia la última Pila.
 	if(!disk){
 		mov = 0;
 		var source = this._t1;
 		var disk = source.len();
 		var dest = this._t3;
 		var aux = this._t2;
 	}
    if(disk == 1  ){
    	// Cuando a la pila de la izquierda le quede sólo un plato
    	// hacemos el último movimiento y terminamos.
        dest.push(source.pop());
        return;
    } else {
    	//Mueve los platos de arriba del que queres move para hacer espacio
    	// desde la origen a el auxiliar.
        this.solve(disk-1, source, aux, dest);
        //Mueve el ultimo plato del origen al destino
        dest.push(source.pop());
        // Tiene que mover la torre que esta en auxiliar al destino, usando como auxiliar el origen que esta vacio
        this.solve(disk-1, aux, dest, source);
    }
}

let torreHanoi = new Torre();
torreHanoi.init(29).solve();

// console.log(torreHanoi);