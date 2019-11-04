// var linkArray = ["bio", "projects",]
var lastClick = "";

$(".link").on("click", function(){
    $("#bio").attr("style", "display: none;");
    $("#projects").attr("style", "display: none;");
    $("#resume").attr("style", "display: none;");
    $("#contact").attr("style", "display: none;");
    var x = $(this).attr("value");
    if(x === "bio"){
        $("#bio").attr("style", "display: contents;");
    }else if(x === "projects"){
        $("#projects").attr("style", "display: contents;");
    }else if(x === "resume"){
        $("#resume").attr("style", "display: contents;");
    }else if(x === "contact"){
        $("#contact").attr("style", "display: contents;");
    }
    lastClick = x;
})


// $("#quiz").attr("style", "display : none;");
// $("#quizEnd").attr("style", "display : contents;");