
function upDate(previewPic)
{
  x = document.getElementById("image");

  mysrc = previewPic.src;
  x.style.backgroundImage = "url(" + mysrc + ")";

  x.innerHTML = previewPic.alt;
}

function unDo()
{
  x = document.getElementById("image");

  x.style.backgroundImage = "url('')"

  x.innerHTML = "Hover over an image below to display here.";
}
