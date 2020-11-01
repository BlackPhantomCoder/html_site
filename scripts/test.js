const count = 25;
const  pre_id = "q_"
const max_current_selected = 1;

var current = 1;
var current_selected = 0;
var btn = document.getElementById("btn");
{
    btn.onclick = function(event){
        if(current_selected == max_current_selected){
            if(current == count){
                hide(document.getElementById(pre_id + current));
                var result = document.getElementById("result_" + get_result());
                result.style.display = "block";
                btn.style.display = "none";
            }
            else{
                hide(document.getElementById(pre_id + current));
                current++;
                current_selected = 0;
                unhide(document.getElementById(pre_id + current));
            }
        }
        btn.style.opacity = 0.5;
    }
    btn.style.opacity = 0.5;
}

{
    var x = document.getElementsByClassName("qans");
    for(var i = 0; i < x.length; i++){
        var obj = x[i];
        obj.onclick = function(event){
            if(event.currentTarget.classList.contains("click")){
                event.currentTarget.classList.remove("click");
                current_selected--;
                if(current_selected == 0)btn.style.opacity = 0.5;
            }
            else{
                if(current_selected < max_current_selected){
                    click(event.currentTarget);
                    current_selected++;
                    btn.style.removeProperty("opacity");
                }
            }
        }
    }
}
