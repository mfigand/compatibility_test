
$(function() {
    //Vertical align background on window resize.
    $(window).bind("load resize", function() {
        var screen_height = window.innerHeight;
        $('body').height(screen_height)
    })
});

function result_phrase(result){

  var phrase = document.getElementById('result_phrase');

  var phrase_group = [
  'Cupido es tu best friend. El romanticismo y los algodones de azúcar corren por tus venas y eso se nota. Eres de lo más detallista y no puedes vivir sin mimos. ¡Sin duda, para ti el amor es lo primero! Prometemos avisarte del casting de la segunda entrega de “El diario de Noah” (tenemos enchufe;))<br><br> Feliz San Valentín, ¡nunca pierdas aquello por lo que te caracterizas!',
  'En su justa medida. Tu cabeza y tu corazón están en constante conflicto. Quieres dejarte llevar, pero tu coherencia y sentido común te frenan a menudo. Este año, no hagas caso a los haters, da rienda suelta a la pasión y sorprende a tu pareja. Spoiler: Triunfarás.<br><br> Feliz San Valentín, a veces no está mal sacar el Julio Iglesias que llevamos dentro.',
  'Para ti el amor es otra cosa. Eres de los que piensan que San Valentín es un invento de los centros comerciales. Las cenas románticas y las escapadas no van contigo. Entiendes el amor como la libertad de disfrutar de cada momento, sin presión, poco a poco… ¡Y el futuro ya se verá!<br><br> Quizás el próximo año tengamos que repetirte el test, pero de momento, te dejamos disfrutar de tu No San Valentín.'
  ]

  switch (typeof result !== 'undefined') {
    case (result > 25 && result < 30):
      phrase.innerHTML = '<i class="fa fa-quote-left fa-1x" aria-hidden="true"></i>'+phrase_group[0]+' <i class="fa fa-quote-right fa-1x" aria-hidden="true"></i>';
      console.log("Muy Romántic@");
      break;
    case (result > 16 && result < 24):
      phrase.innerHTML = '<i class="fa fa-quote-left fa-1x" aria-hidden="true"></i>'+phrase_group[1]+' <i class="fa fa-quote-right fa-1x" aria-hidden="true"></i>';
      console.log("Romántic@");
      break;
    case (result > 10 && result < 15):
      phrase.innerHTML = '<i class="fa fa-quote-left fa-1x" aria-hidden="true"></i>'+phrase_group[2]+' <i class="fa fa-quote-right fa-1x" aria-hidden="true"></i>';
      console.log("Poco Romántic@");
      break;
  }
}

function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function nextQuestion(counter, result){
//change question group
  var question_groups = [
    {
      question: "Si tuvieras que elegir un plan con tu pareja…",
      img: "assets/images/heart_2.png",
      options: [
      "Sofá + manta + palomitas",
      "Una cena en su restaurante favorito",
      "Que decida él/ella"
      ],
      checkbox_values: [
      "2",
      "3",
      "1"
      ]
    },
    {
      question: "En dos días es su cumpleaños y te has olvidado de su regalo…",
      img: "assets/images/heart_3.png",
      options: [
      "Corro a comprarle su mochila Totto favorita",
      "Llamo a todos sus amigos para organizarle una fiesta sorpresa",
      "Le hago un collar de macarrones"
      ],
      checkbox_values: [
      "2",
      "3",
      "1"
      ]
    },
    {
      question: "El Día de San Valentín…",
      img: "assets/images/heart_4.png",
      options: [
      "Hago las mismas cosas que cualquier otro día",
      "Salgo a celebrarlo con mis amigos, ¡sólo se vive una vez!",
      "Aunque San Valentín es todos los días, tengo un detalle con mi pareja"
      ],
      checkbox_values: [
      "1",
      "2",
      "3"
      ]
    },
    {
      question: "Te regalan un oso de peluche…",
      img: "assets/images/heart_5.png",
      options: [
      "Se lo doy a mi primo pequeño para que juegue con él",
      "Lo importante es el detalle y que se acuerden de ti",
      "Le pido el ticket regalo para descambiarlo por otra cosa "
      ],
      checkbox_values: [
      "2",
      "3",
      "1"
      ]
    },
    {
      question: "¿Llevas una foto suya en tu cartera?",
      img: "assets/images/heart_6.png",
      options: [
      "Por supuesto. Así presumo de novio/a",
      "¿En qué siglo vivimos? Cuando quiero ver una foto suya abro Facebook",
      "No, es empalagoso total"
      ],
      checkbox_values: [
      "3",
      "2",
      "1"
      ]
    },
    {
      question: "Es viernes, llegas a casa y tu pareja te sorprende con una escapada romántica. ¿Cómo reaccionas?",
      img: "assets/images/heart_7.png",
      options: [
      "Vaya, yo que quería quedarme todo el fin de semana en pijama viendo películas",
      "¿No se supone que esto hay que planearlo entre las dos partes?",
      "¡Me muero, me encantan las sorpresas!"
      ],
      checkbox_values: [
      "1",
      "2",
      "3"
      ]
    },
    {
      question: "¿Cómo imaginas tu boda?",
      img: "assets/images/heart_8.png",
      options: [
      "A orillas de la playa y con toda mi familia y amigos",
      "En Las Vegas y disfrazados de Elvis Presley y Marilyn Monroe",
      "Íntima, con la gente más allegada"
      ],
      checkbox_values: [
      "3",
      "1",
      "2"
      ]
    },
    {
      question: "Tus amigos te invitan a un concierto y les dices que sí, pero un día antes tu pareja te propone un plan romántico",
      img: "assets/images/heart_9.png",
      options: [
      "Me voy al concierto",
      "Me invento que estoy enferm@ para quedarme en casa viendo la tele",
      "Me voy con mi pareja y me invento una excusa para que mis amigos no se enfaden"
      ],
      checkbox_values: [
      "2",
      "1",
      "3"
      ]
    },
    {
      question: "Si te dan a elegir dónde vivir durante un mes…",
      img: "assets/images/heart_10.png",
      options: [
      "Un piso cerca de mi trabajo, así no tengo que madrugar",
      "Una casita en el campo, al lado de un río o lago",
      "Un apartamento en cualquier país extranjero, ¡a la aventura!"
      ],
      checkbox_values: [
      "1",
      "2",
      "2"
      ]
    }
  ]

  var current_group = question_groups[counter-1];

  if(counter-1 < question_groups.length){

    var question = document.getElementById('question').children[0];
    var options_group = document.getElementsByClassName('options');
    var checkbox_group = document.querySelectorAll('input[type="checkbox"]');
    var heart_image = document.getElementById('heart_image');

    question.innerText = current_group.question;
    heart_image.src = current_group.img;

    for (var i = 0;  i < options_group.length; i++){
      options_group[i].innerHTML = current_group.options[i];
      checkbox_group[i].defaultValue = current_group.checkbox_values[i];
      checkbox_group[i].checked = false;
    }

  }else{
    window.location.href = "result.html?result="+result;
  }
}

function checkboxOnClick(checkbox){
  for (var i = 0; i < checkbox.length; i++){
    checkbox[i].addEventListener('click', function(){
      //Prevents to select more than one box
      var box = this;

      if (box.checked == true) {

        for (var i = 0; i < checkbox.length; i++){
          checkbox[i].checked = false;
        }

        box.checked = true;

      } else {

        box.checked = false;

      }
    })
  }
}

function nextButtonOnClick(next_button){
  var counter = 0;
  var result = 0;

  next_button.addEventListener('click', function() {
    
    var answer = document.querySelectorAll('input:checked');

    if (answer.length == 0){

        alert("Sorry, need to select one answer");

    }else{

      result += parseInt(answer[0].defaultValue);
      counter++;

      nextQuestion(counter, result);

    }
  });
}


window.onload = function() {

  //Add functionality to next button
  var next_button = document.getElementById('next_button');
  if (next_button){ nextButtonOnClick(next_button) };

  //Add on click event to checkboxes
  var checkbox = document.querySelectorAll('input[type="checkbox"]');
  checkboxOnClick(checkbox);

  var result = getQueryVariable("result");
  
  if(result){ result_phrase(result); }

  var share_button = document.getElementById('share_button');
  if (share_button){ 
    $('#share_button').socialShare({
      social: 'blogger,delicious,digg,facebook,google,linkedin,myspace,reddit,stumbleupon,tumblr,twitter,windows,yahoo'
  }); }

};








