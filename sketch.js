// trypophobia warning !

let webcam;
let mic;

function setup(){
  createCanvas(800,800);
  background('#FFF2E8');
  webcam = createCapture(VIDEO, {flipped:true});
  webcam.size(400,400);
  webcam.hide(); // hides default vid elements
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  
  // i'm pretty disappointed that push() and pop() have no impact on filters
  image(webcam,200,200);
  filter(POSTERIZE, 8);
  
  let vol = mic.getLevel();
  let place = map(vol, 0, 1, 10, 255);

  // i'm hoping this audio issue is just on my end but if it isn't, the other for loop
  // has been commented out but has sort of what my intended effect is
  fill('#C75A48');
  noStroke();
  for(i = 0; i < place; ++i){
    if(i % 2){
      push();
      fill('#77C9FC');
      circle(random(i),random(i),30);
      pop();
    }
    else{
    circle(random(i),random(i),30);
    }
  }
  
  // for(i = 0; i < 800; ++i){
  //   if(i % 2){
  //     push();
  //     fill('#77C9FC');
  //     circle(random(i),random(i),30);
  //     pop();
  //   }
  //   else{
  //   circle(random(i),random(i),30);
  //   }
  // }

}