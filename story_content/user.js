function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mu7xN50ZrS":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx2Cm0BNHqEab4RZQRgMNmdIdSs9VQJseH0D5FV2Fsjx2yMXMdDQfL2hJu-Bz4luD_7wA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

