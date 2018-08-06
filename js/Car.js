function initCanvas(id) {
    var screen = document.getElementById(id);
    var screenCanvas = document.createElement('canvas');//создаем новый холст
    screenCanvas.width = screen.clientWidth;//задаем ширину холста равную ширине блока
    screenCanvas.height = screen.clientHeight;//задаем высоту холста равную высоте блока
    screen.appendChild(screenCanvas);//добавляем холст в документ
    return screenCanvas.getContext('2d');//получаем контекст для рисования;
}

var ctx = initCanvas('carPreview');
var screen = document.getElementById('carPreview');

function render(windowSrc,spoilerSrc,shadowSrc,neonSrc,bodySrc,bumperSrc,aerographySrc,lightSrc,rimsSrc){ 
    ctx.clearRect(0,0,600,600);
    screen.classList.add('loading');
    drawImage(windowSrc,0,0,function(){
	 	drawImage(spoilerSrc,0,0, function(){
			drawImage(shadowSrc,0,0,function(){
	 			drawImage(neonSrc,0,0,function(){
					drawImage(bodySrc,0,0,function(){
						drawImage(bumperSrc,0,0,function(){
							 drawImage(aerographySrc,0,0,function(){
								drawImage(rimsSrc,0,0,function(){
    									drawImage(lightSrc,0,0,function(){
										screen.classList.remove('loading');});
                                        getGeneratedImg();
								});
							 }); 
						});
					}); 
				});
			});
		});
	});  
}

function drawImage(src , x , y, next){
    var img = new Image();  // Создание нового объекта изображения
    img.src = src;
    img.onload = function () {
        ctx.drawImage(img, x, y, 600, 600);//рисуем изображение на холсте от левого верхнего края
	setTimeout(next,100);
    };
}

function getGeneratedImg(){
    var imgDataS = screen.getElementsByTagName('canvas');
    imgDataS = imgDataS[0];
    var imgData = imgDataS.toDataURL("img/png");
    screen.style.backgroundImage = "url('"+imgData+"')";
}


var catalog =  "ford";

function  randomType(types,maxTypes){
    var name ='';
    name = types[randomInteger(1,maxTypes)];
    return name;
}

// Функция для рандома, если есть тип элемента, и он начинается с 1
function  randomElement1(maxTypes){
    var name='';
    name = name + randomInteger(1,maxTypes);
    return name+'.png';
}


// Функция для рандома, если есть тип элемента, и он начинается с 0
function  randomElement0(maxTypes){
    var name='';
    name = name + randomInteger(0,maxTypes);
    return name+'.png';
}

function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


var types = {
    1: '1',
    2: '2',
    3: '3'
};

 

// в отдельной функцию при клике вызывать функцию для рандома
   

function renderCar() { 
    var randomTypeValue = randomType(types,4); //делаем один и тот же тип у папки и у названия файла, если 3 типа
    var windowSrc = 'ford/'+'window/'+'window_'+ catalog + '_'+randomElement1(13);
    var spoilerSrc = 'ford/'+'spoiler/'+'type'+randomType(types,1)+'/'+'spo_'+ catalog + '_'+randomType(types,1)+'_'+randomElement0(12);
    var shadowSrc = 'ford/'+'shadow/1500w/'+'shadow_'+ catalog + '_'+randomElement1(1);
    var neonSrc = 'ford/'+'neon/'+'illum_'+ catalog + '_'+randomElement1(13);
    var bodySrc = 'ford/'+'body/'+'body_'+ catalog + '_'+randomElement1(13);
    var bumperSrc = 'ford/'+'bumper/'+'type'+randomTypeValue+'/'+'bump_'+ catalog + '_'+randomTypeValue+'_'+randomElement0(12);
    var aerographySrc = 'ford/'+'aerography/'+'vinyl_'+ catalog + '_'+randomElement1(12);
    var lightSrc = 'ford/'+'light/'+'lights_'+ catalog + '_'+randomElement1(13);
    var rimsSrc = 'ford/'+'rims/'+'disk'+'_'+ catalog + '_'+randomType(types,3)+'_'+randomElement1(13);

    render(windowSrc,spoilerSrc,shadowSrc,neonSrc,bodySrc,bumperSrc,aerographySrc,lightSrc,rimsSrc);
}

// console.log(windowSrc);
// console.log(spoilerSrc);
// console.log(shadowSrc);
// console.log(neonSrc);
// console.log(bodySrc);

// console.log(aerographySrc);
// console.log(lightSrc);
// console.log(rimsSrc);

// в итоге 3 файла js: инициализация canvas, логика, вызов по кнопке
