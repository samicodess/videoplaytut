document.getElementById("sfive").addEventListener("click", function () {
  document.getElementById("vid").playbackRate = 0.5;
});

document.getElementById("sone").addEventListener("click", function () {
  document.getElementById("vid").playbackRate = 1;
});

document.getElementById("stwo").addEventListener("click", function () {
  document.getElementById("vid").playbackRate = 2;
});

document.getElementById("larr").addEventListener("click", function () {
  document.getElementById("vid").currentTime =
    document.getElementById("vid").currentTime - 10;
});

document.getElementById("rarr").addEventListener("click", function () {
  document.getElementById("vid").currentTime =
    document.getElementById("vid").currentTime + 10;
});

// document.getElementById('prog').style.display='none'

document.getElementById("speedcont").addEventListener("mouseover", function () {
  document.getElementById("speedcont").style.opacity = 1;
});
document.getElementById("skip").addEventListener("mouseover", function () {
  document.getElementById("skip").style.opacity = 1;
});
document.getElementById("prog").addEventListener("mouseover", function () {
  document.getElementById("prog").style.opacity = 1;
});
document
  .querySelector(".playAndTime")
  .addEventListener("mouseover", function () {
    document.querySelector(".playAndTime").style.opacity = 1;
  });

document.getElementById("vid").addEventListener("mouseover", function () {
  document.getElementById("prog").style.opacity = 1;
  document.querySelector(".playAndTime").style.opacity = 1;
  document.getElementById("skip").style.opacity = 1;
  document.getElementById("speedcont").style.opacity = 1;
});

document.getElementById("vid").addEventListener("mouseleave", function () {
  document.getElementById("prog").style.opacity = 0;
  document.querySelector(".playAndTime").style.opacity = 0;
  document.getElementById("skip").style.opacity = 0;
  document.getElementById("speedcont").style.opacity = 0;
});

setInterval(() => {
  let totalMinute = Math.floor(document.getElementById("vid").duration / 60);
  let totalSecond = Math.floor(document.getElementById("vid").duration % 60);
  let currentMinute = Math.floor(
    document.getElementById("vid").currentTime / 60
  );
  let currentSecond = Math.floor(
    document.getElementById("vid").currentTime % 60
  );

  document.getElementById("totalMinute").innerText = totalMinute;
  document.getElementById("totalSecond").innerText = totalSecond;
  document.getElementById("currentMinute").innerText = currentMinute;
  document.getElementById("currentSecond").innerText = currentSecond;

  if (totalMinute === currentMinute && totalSecond === currentSecond) {
    document.getElementById("btnPlay").classList.remove("active");
  }
}, 1000);

document.getElementById("vid").addEventListener("timeupdate", function () {
  document.getElementById("prog").value =
    (document.getElementById("vid").currentTime /
      document.getElementById("vid").duration) *
    100;
});

document.getElementById("prog").addEventListener("change", function () {
  document.getElementById("vid").currentTime =
    (document.getElementById("prog").value *
      document.getElementById("vid").duration) /
    100;
});

document.getElementById("btnPlay").addEventListener("click", function () {
  document.getElementById("btnPlay").classList.toggle("active");

  if (document.getElementById("btnPlay").className === "active") {
    document.getElementById("vid").play();
  }

  if (document.getElementById("btnPlay").className != "active") {
    document.getElementById("vid").pause();
  }
});
