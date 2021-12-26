bark=0
meow=0
moo=0
caw_caw=0
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dD1ccKsAJ/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
        red1=Math.floor(Math.random()*255)+1;
        blue1=Math.floor(Math.random()*255)+1;
        green1=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Voice detected of :"+ results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy :"+(results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color="rgb("+red1+","+blue1+","+green1+")";
        document.getElementById("result_confidence").style.color="rgb("+red1+","+blue1+","+green1+")";

        if (results[0].label=="Barking"){
            document.getElementById("dog").innerHTML="<span style='color: red;'>["+bark+"]</span> Cat</p>"
            bark=bark+1
        }
        else if (results[0].label=="Meowing"){
            document.getElementById("cat").innerHTML="<span style='color: red;'>["+meow+"]</span> Cat</p>"
            meow=meow+1
        }
        else if (results[0].label=="Moo"){
            document.getElementById("cow").innerHTML="<span style='color: red;'>["+moo+"]</span> Cat</p>"
            moo=moo+1
        }
        else if (results[0].label=="caw caw"){
            document.getElementById("crow").innerHTML="<span style='color: red;'>["+caw_caw+"]</span> Cat</p>"
            caw_caw=caw_caw+1
        }

    }
}