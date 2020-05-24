

// @Author : Pawan_Saini
// @Github : pawanmawata020



var N_SIZE=3,EMPTY='&nbsp;',boxes=[],turn='X',score,moves;
var N_MAX_MOVES=6, prev_Erase;
var check_Matrix=[0, 0, 0, 0, 0, 0, 0, 0, 0];


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
			cell.setAttribute('height',3*165/(N_SIZE));
			cell.setAttribute('width',3*170/(N_SIZE));
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
	
	for(var i=0;i<N_SIZE*N_SIZE;i++){
		check_Matrix[i]=0;
	}
	
	prev_Erase=-1;
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


//
function indexn(idn){
	if(idn==1){ return 0;}
	else if(idn==2){ return 1;}
	else if(idn==4){ return 2;}
	else if(idn==8){ return 3;}
	else if(idn==16){ return 4;}
	else if(idn==32){ return 5;}
	else if(idn==64){ return 6;}
	else if(idn==128){ return 7;}
	else if(idn==256){ return 8;}
	else { return -1; }

}

// set when clicked as well change the turn

function set(){
	if(this.innerHTML !=EMPTY){
		if(moves==N_MAX_MOVES ){
			if(this.innerHTML==turn ){
				if(this.identifier==1 &(check_Matrix[1]==0 | check_Matrix[3]==0 | check_Matrix[4]==0)){
					
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==2 &(check_Matrix[0]==0 | check_Matrix[2]==0 | check_Matrix[4]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==4 &(check_Matrix[1]==0 | check_Matrix[4]==0 | check_Matrix[5]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==8 &(check_Matrix[0]==0 | check_Matrix[4]==0 | check_Matrix[6]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==16 &(check_Matrix[0]==0 | check_Matrix[1]==0 | check_Matrix[2]==0 | check_Matrix[3]==0 | check_Matrix[5]==0 | check_Matrix[6]==0 | check_Matrix[7]==0 | check_Matrix[8]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==32 &(check_Matrix[2]==0 | check_Matrix[4]==0 | check_Matrix[8]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==64 &(check_Matrix[3]==0 | check_Matrix[4]==0 | check_Matrix[7]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==128 &(check_Matrix[4]==0 | check_Matrix[6]==0 | check_Matrix[8]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else if(this.identifier==256 &(check_Matrix[4]==0 | check_Matrix[5]==0 | check_Matrix[7]==0)){
					console.log(this);
					check_Matrix[indexn(this.identifier)]=0;
					score[turn]-=this.identifier;
					this.innerHTML=EMPTY;
					moves -=1;
					prev_Erase=this.identifier;
				}
				else{
					document.getElementById('turn').textContent='Select Another Box That Can Move';					
				}
				
			}
			else{
				document.getElementById('turn').textContent='Select Your Own Box';
			}
		}
		else{
			document.getElementById('turn').textContent='Click On Empty Box';	
		}
	
	}
	else{
		if(moves<N_MAX_MOVES){
			if(prev_Erase==-1){
				console.log(this);
				this.innerHTML=turn;
				score[turn]+=this.identifier;
				moves +=1;
				check_Matrix[indexn(this.identifier)]=1;
				
				if(win(this)){
					
					document.getElementById('turn').textContent='Player '+turn+' is the WINNER';
					
					boxes.forEach(function (square){// learn
					square.removeEventListener('click',set);//clicking event is removed
					})
					
		

				}
				else{
					turn = turn === 'X' ? 'O' : 'X';
					document.getElementById('turn').textContent='Player '+turn;
				}
			}
			else{
				if(prev_Erase==1 &(this.identifier==2 | this.identifier==8 | this.identifier==16)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
					
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==2 &(this.identifier==1 | this.identifier==4 | this.identifier==16)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==4 &(this.identifier==2 | this.identifier==16 | this.identifier==32)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==8 &(this.identifier==1 | this.identifier==16 | this.identifier==64)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==16 &(this.identifier==1 | this.identifier==2 | this.identifier==4 | this.identifier==8 | this.identifier==32 | this.identifier==64 | this.identifier==128 | this.identifier==256)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==32 &(this.identifier==4 | this.identifier==16 | this.identifier==256)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==64 &(this.identifier==8 | this.identifier==16 | this.identifier==128)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==128 &(this.identifier==16 | this.identifier==64 | this.identifier==256)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(prev_Erase==256 &(this.identifier==16 | this.identifier==32 | this.identifier==128)){
					console.log(this);
					this.innerHTML=turn;
					score[turn]+=this.identifier;
					moves +=1;
					check_Matrix[indexn(this.identifier)]=1;

					if(win(this)){
		
						document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

						boxes.forEach(function (square){// learn
						square.removeEventListener('click',set);//clicking event is removed
						})
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else{
					document.getElementById('turn').textContent='Select A Neighbour Of Erased Box';			
				}
				
			}


		}
		else{
		
				document.getElementById('turn').textContent='Select Your Own Block To Next Move';

			
		}
	}


}


init();

