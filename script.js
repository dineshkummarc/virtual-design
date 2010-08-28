 //IE fix Array.indeOf
 if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){
        for(var i=0; i<this.length; i++){
            if(this[i]==obj){
                return i;
            }
        }
        return -1;
    };
}


// Main Variables
var xFields = 10,
    yFields = 20,
    fieldSize = 15,
    container = document.getElementById('container'),
    //construction Vars
    table = document.createElement('table'),
    tbody = document.createElement('tbody');

container.appendChild(table); 
table.appendChild(tbody);

for( var y = 0; y < yFields; y++ ) { //'draw' rows
    var row = document.createElement('tr');
    tbody.appendChild(row);
    for( var x = 0; x < xFields; x++ ) { //and cols
        var field = document.createElement('td');
        field.style.width = field.style.height = fieldSize;
        field.id = x+"_"+y;
        row.appendChild(field);
    }
}