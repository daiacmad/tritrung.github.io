var video = document.getElementById("bgvid"),
pauseButton = document.querySelector("#polina button");

function vidFade() {
  video.classList.add("stopfade");
}

video.addEventListener('ended', function()
{
// only functional if "loop" is removed 
video.pause();
vidFade();
}, false); 
 
pauseButton.addEventListener("click", function() {
  video.classList.toggle("stopfade");
  if (video.paused) {
    video.play();
    pauseButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  } else {
    video.pause();
    pauseButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	//pauseButton.style.backgroundImage = "url('img_tree.png')"
  }
}, false);

video.addEventListener('touchstart', function(e) {
e.preventDefault();
video.play();
})