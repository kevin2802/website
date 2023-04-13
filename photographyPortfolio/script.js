document.getElementById("play").addEventListener("click",playvid);
document.getElementById("pause").addEventListener("click", pausevid);


function playvid() {
    document.querySelector('video').play();
  }

  function pausevid() {
    document.querySelector('video').pause();
  }