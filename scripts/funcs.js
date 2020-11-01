
function unhide(obj){
	obj.style.display = "block";
}

function hide(obj){
	obj.style.display = "none";
}

function click(obj){
    obj.classList.add("click");
}


function get_result(){
    var res = 0;
    var x = document.getElementsByClassName("qans");
    for(var i = 0; i < x.length; i++){
        var obj = x[i];
        if(obj.classList.contains("click")){
            switch(parse_answear(res)){
                case 1:
                    res += 2;
                    break;
                case 2:
                    res += 1;
                    break;
                case 3:
                    res += 0;
                    break;
                case 4:
                    res += -1;
                    break;
                case 5:
                    res += -2;
                    break;
            }
        }
    }
    if(res < -30){
        return 1
    }
    else if (res > 20){
        return 3;
    }
    else return 2;
}

function parse_answear(ans){
    var i = 0;
    while(i != x.length){
        if(ans[i] == "_")break;
        i++;
    }
    var str = new String();
    for(; i < x.length; i++){
        str += x[i];
    }
    return parseInt(str);
}

function correct_sizes(){
	const w = window.screen.width;
	const h = window.screen.height;
	var obj = document.getElementById("all");
	var k = h/w;
	if(k > 1){
		var x = 0;
		if(w < 800){
			x = 2.5;
		}
		else if(w < 1200){
			x = 5;
		}
		else if(w < 1600){
			x = 7;
		} 
		else {
			x = 10;
		}
		obj.style.width = 100 - 2*x + "%";
		obj.style.paddingLeft = x + "%";
		obj.style.paddingRight = x + "%";
	}
}