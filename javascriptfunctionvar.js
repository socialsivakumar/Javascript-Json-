var MyGlobal = 10;

function func1 () {

    oopsGlobal=5;
    
}

function func2 () {

    var output="";

    if (typeof MyGlobal != "undefined") {
        output += "myglobal" + MyGlobal;
    }
    
    if (typeof oopsGlobal != "undefined") {
        output += "myglobal" + oopsGlobal;
    }

    return(output);

}

func1;
func2;