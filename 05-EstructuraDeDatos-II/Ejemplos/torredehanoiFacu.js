'use strict'
// TORRE DE HANOI // 

function Torre(){
  this.head = null;
  this.high = 0;
  this.push = function(data){
    var newDisc = new disc(data)
    if(this.head == null) {
      this.head = newDisc;
    }else{
      newDisc.under = this.head;
      this.head = newDisc;
    }
    this.high++;
  }
  this.pop = function(){
    if(this.head == null){
      return null
    }
    var popDisc = this.head;
    this.head = popDisc.under;
    this.high--;
    popDisc.under = null;
    return popDisc;
  }
  this.move = function(pila){
    if(pila.head == null || this.head.size < pila.head.size){
      pila.push(this.pop().size);
    }else if(this.head.size > pila.head.size){
      return console.log('Disco mas grande que la base pretendida');
    }else{
      return console.log('Torre vacia');
    } 

  }
  this.print = function(){
    if ( this.head == null ) return console.log('Torre vacia');
    var pointer = this.head;
    while( pointer != null ){
      console.log( pointer.size );
      pointer = pointer.under;
    }
  }
  function disc(data) {
    this.size = data;
    this.under = null;
  }
}

function torreDeHanoi(val){
  
  var t1 = new Torre();
  var t2 = new Torre();
  var t3 = new Torre();
  for(var i=val;i>0;i--){
    t1.push(i)
  };
  imprimirTorres();
  makeMove(t1,t2,t3,val);
  function makeMove( ppal , aux , final , altTorre ){ 
    if( altTorre == 1 ){
      ppal.move(final);
      return
    }
    makeMove( ppal , final , aux , altTorre-1 );
    ppal.move(final)
    makeMove( aux , ppal , final , altTorre-1 );
  };

  // Comentar la impresion para mejor rendimiento
  imprimirTorres();
  function imprimirTorres(){
    console.log('Torre 1 :');
    t1.print();
    console.log('Torre 2 :');
    t2.print();
    console.log('Torre 3 :');
    t3.print();
  };
};

// torreDeHanoi(6);