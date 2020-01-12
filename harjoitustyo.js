

let size = prompt("Give the size of the playing area");
size = parseInt(size);
let position;
let array;
let score = 0;

function getTable() {
   array = new Array(size*size);
   let flag = false;
   let value = 0;
   position = 0;
   for (let i = 0; i < size*size; i++) {
      if (flag)
         value = Math.floor(Math.random() * 2);
      else
         value = Math.floor(Math.random() * 3);
      if (value < 2)
         array[i] = value;
      else {
         array[i] = value;
         position = i;
         flag = true;
      }
   }
   createTable(array);
   return array;
}

function createTable(array) {
    let theader = '<table border="1" class="table">\n';
    let tbody = '';
    let value = 0;
    let rowIndex = 0;
    let cellIndex = 0;
    let testi1 = 0;
    let testi2 = 0;

    for(let i=0; i<size; i++) {
        tbody += '<tr>';
        for(let j=size*i; j<size*(i+1); j++) {
            tbody += '<td ';
            value = array[j];
            switch (value) {
               case 0:
                  tbody += 'class="empty">';
                  break;
               case 1:
                  tbody += 'class="coin">';
                  break;
               case 2:
                  tbody += 'class="player">';
                  break;
            }
            tbody += '</td>';
        }
        tbody += '</tr>\n';
    }

    let tfooter = '</table>';
    document.getElementById('myTable').innerHTML = theader + tbody + tfooter;
}

function moveRight() {
   let positionOK = true;
   if ((position+2) % size == 1)
      positionOK = false;
   if (positionOK) {
      if (array[position+1] == 1)
         score = score + 100;
      array[position] = 0;
      array[position+1] = 2;
      position++;
      createTable(array);
   }
   document.getElementById("score").innerHTML = score;
}
function moveLeft() {
   if (position % size != 0) {
      if (array[position-1] == 1)
         score = score + 100;
      array[position] = 0;
      array[position-1] = 2;
      position--;     
      createTable(array); 
   }
   document.getElementById("score").innerHTML = score;   
}
function moveUp() {
   if (position >= size) {
      if (array[position-size] == 1)
         score = score + 100;
      array[position] = 0;
      array[position-size] = 2;
      position = position - size;     
      createTable(array);
   } 
   document.getElementById("score").innerHTML = score;   
}
function moveDown() {  
   if (position < (size*size - size)) {
      if (array[position+size] == 1)
         score = score + 100;
      array[position] = 0;
      array[position+size] = 2;
      position = position + size;
      createTable(array);
   }
   document.getElementById("score").innerHTML = score;
}

document.onkeydown = checkKey;

function checkKey(e) {
   e = e || window.event;
   if (e.keyCode == '38') {
      moveUp();
   }
   else if (e.keyCode == '40') {
      moveDown();
   }
   else if (e.keyCode == '37') {
      moveLeft();
   }
   else if (e.keyCode == '39') {
      moveRight();
   }
}

function setName() {
   let name = prompt("Give your name");
   if (name.length > 1)
      document.getElementById("name").innerHTML = name;
}



