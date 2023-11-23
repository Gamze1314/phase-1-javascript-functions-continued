function saturdayFun(activity = "roller-skate"){
    return "This Saturday, I want to " + activity + "!";

}
saturdayFun("bathe my dog");

function mondayWork(toDo = "go to the office"){
    return "This Monday, I will " + toDo + ".";

}
mondayWork("work from home");

let wrapAdjective = function(style="*") {
    return function(adj="special") {
      return "You are " + style + adj + style + "!"; 
    }
  }

  console.log(wrapAdjective("a hard worker"("*")));
  console.log(wrapAdjective("a dedicated programmer")("||"));