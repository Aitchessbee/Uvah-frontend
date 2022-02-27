let rating = [0,0,0,0];

console.log("hello");

function update_rating(){
    if(document.getElementById("rate-5").checked){
        rating[0] += 2;
        document.getElementById("widget1").style.display = "none";
        document.getElementById("rate-5").checked = false;
        console.log("Clicked");
    }else if(document.getElementById("rate-4").checked){
        rating[0] += 1;
        document.getElementById("widget1").style.display = "none";
        document.getElementById("rate-4").checked = false;
        console.log("Clicked");
    }else if(document.getElementById("rate-3").checked){
        rating[0] += 0;
        document.getElementById("widget1").style.display = "none";
        document.getElementById("rate-3").checked = false;
        console.log("Clicked");
    }else if(document.getElementById("rate-2").checked){
        rating[0] += -1;
        document.getElementById("widget1").style.display = "none";
        document.getElementById("rate-2").checked = false;
        console.log("Clicked");
    }else if(document.getElementById("rate-1").checked){
        rating[0] += -2;
        document.getElementById("widget1").style.display = "none";
        document.getElementById("rate-1").checked = false;
        console.log("Clicked");
    }else if(document.getElementById("rate-51").checked){
        rating[1] += 2;
        document.getElementById("widget2").style.display = "none";
        document.getElementById("rate-51").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-41").checked){
        rating[1] += 1;
        document.getElementById("widget2").style.display = "none";
        document.getElementById("rate-41").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-31").checked){
        rating[1] += 0;
        document.getElementById("widget2").style.display = "none";
        document.getElementById("rate-31").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-21").checked){
        rating[1] += -1;
        document.getElementById("widget2").style.display = "none";
        document.getElementById("rate-21").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-11").checked){
        rating[1] += -2;
        document.getElementById("widget2").style.display = "none";
        document.getElementById("rate-11").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-52").checked){
        rating[2] += 2;
        document.getElementById("widget3").style.display = "none";
        document.getElementById("rate-52").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-42").checked){
        rating[2] += 1;
        document.getElementById("widget3").style.display = "none";
        document.getElementById("rate-42").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-32").checked){
        rating[2] += 0;
        document.getElementById("widget3").style.display = "none";
        document.getElementById("rate-32").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-22").checked){
        rating[2] += -1;
        document.getElementById("widget3").style.display = "none";
        document.getElementById("rate-22").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-12").checked){
        rating[2] += -2;
        document.getElementById("widget3").style.display = "none";
        document.getElementById("rate-12").checked = false;
        console.log("Clicked");
    }else if(document.getElementById("rate-53").checked){
        rating[3] += 2;
        document.getElementById("widget4").style.display = "none";
        document.getElementById("rate-53").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-43").checked){
        rating[3] += 1;
        document.getElementById("widget4").style.display = "none";
        document.getElementById("rate-43").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-33").checked){
        rating[3] += 0;
        document.getElementById("widge4").style.display = "none";
        document.getElementById("rate-33").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-23").checked){
        rating[3] += -1;
        document.getElementById("widget4").style.display = "none";
        document.getElementById("rate-23").checked = false;
        console.log("Clicked");        
    }else if(document.getElementById("rate-13").checked){
        rating[3] += -2;
        document.getElementById("widget4").style.display = "none";
        document.getElementById("rate-13").checked = false;
        console.log("Clicked");
    }
}

