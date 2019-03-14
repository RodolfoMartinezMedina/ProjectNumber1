
  const player = document.getElementById('player');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const constraints = 
  {
    video: true,
  };

  // Attach the video stream to the video element and autoplay.
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });

const takePhoto = function()
{
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    const img =  canvas.toDataURL("image/png");
    const data = img.replace(/^data:image\/\w+;base64,/, "");
    console.log(img);
    console.log(data);     
    document.querySelector("#capture").href = img;
}

$("#capture").on("click", takePhoto);