

// @Author : Pawan_Saini
// @Github : pawanmawata020



var N_SIZE=3,EMPTY='&nbsp;',boxes=[],turn='X',score,moves;
var N_MAX_MOVES=6;


// make the board and start

function init(){

	var board=document.createElement('table');//create table 
	board.id='board';
	board.setAttribute('border',1);
	board.setAttribute('cellspacing',0);


	var identifier =1;

	for(var i=0;i<N_SIZE;i++){
		var row=document.createElement('tr');
		board.appendChild(row);

		for(var j=0;j<N_SIZE;j++){
			var cell=document.createElement('td');
			cell.setAttribute('height',3*110/(N_SIZE));
			cell.setAttribute('width',3*120/(N_SIZE));
			cell.setAttribute('align','center');
			cell.setAttribute('valign','center');
			cell.classList.add('col'+j,'row'+i);// learn
			if(i==j){
				cell.classList.add('diagonal0');
			}
			if(j==N_SIZE-i-1){
				cell.classList.add('diagonal1');
			}

			cell.identifier=identifier;//know 

			// cell.addEventListener('click',set);
			row.appendChild(cell);
			boxes.push(cell);
			identifier+=identifier;
		}

	}
	document.getElementById('tictactoe').appendChild(board);
	startNewGame();

}


// new game

function startNewGame(){

	score ={
		'X':0,'O':0

	};

	moves=0;
	turn='X';
	boxes.forEach(function (square){// learn
		square.innerHTML=EMPTY;
	})
	boxes.forEach(function (square){// learn
		square.addEventListener('click',set);//clicking event is add
	})
	document.getElementById('turn').textContent='Player '+turn;
}


//win or lose
function win(clicked){

	// all the cell classes
	var memberOf= clicked.className.split(/\s+/);
	console.log(memberOf);
	for(var i=0;i<memberOf.length;i++){
		var testClass='.'+memberOf[i];
		var items= contains('#tictactoe '+testClass,turn);
		//winning condition
		// console.log(items);
		if(items.length==N_SIZE){
			return true;
		}
	}
	return false;
}


// clicked node list
function contains(selector,text){
	var elements= document.querySelectorAll(selector);
	return [].filter.call(elements,function(element){
		return RegExp(text).test(element.textContent);
	});
}


// set when clicked as well change the turn

function set(){
	if(this.innerHTML !=EMPTY){
		
		console.log(this);
		this.innerHTML=EMPTY;
		moves -=1;
	
		
		// return;
	}else{
	console.log(this);
	this.innerHTML=turn;
	moves +=1;}



	score[turn]+=this.identifier;
	if(win(this)){
		// alert('Winner: Player'+turn);
		// startNewGame();
		document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

	// 	boxes.forEach(function (square){
	// 	square.removeEventListener('click',set);
	// })
		

	}else if(moves==N_MAX_MOVES){
		// alert('DRAW GAME');
		// startNewGame();
		/*boxes.forEach(function (square){// learn
		square.removeEventListener('click',set);//clicking event is removed
	})*/
		document.getElementById('turn').textContent='Select a your respective block to move';

	
		//moves--;
		
	}else{
		turn = turn === 'X' ? 'O' : 'X';
		document.getElementById('turn').textContent='Player '+turn;
	}
}




init();

