// "use strict";

// var toDos = [
// "Закончить писать эту книгу",
// "Вывести Грейси на прогулку в парк", 
// "Ответить на электронные письма", 
// "Подготовиться к лекции в понедельник", 
// "Обновить несколько новых задач", 
// "Купить продукты"
// ];

// $("document").ready( function(){

// $(".tabs a span").toArray().forEach(function (element) { 
// 	// создаем обработчик щелчков для этого элемента 
// 	$(element).on("click", function () {
// 		// поскольку мы используем версию элемента jQuery,
// 		// нужно создать временную переменную,
// 		// чтобы избежать постоянного обновления
// 		var $element = $(element);
// 		$(".tabs a span").removeClass("active"); 
// 		$(element).addClass("active");
// 		$("main .content").empty();

// 		if ($element.parent().is(":nth-child(1)")) { 
// 			for (var i = toDos.length-1; i > -1; i--) { 
// 				$(".content").append($("<li>").text(toDos[i]));
// 			}
// 		} 
// 		else if ($element.parent().is(":nth-child(2)")) { 
// 			toDos.forEach(function (todo) { 
// 				$(".content").append($("<li>").text(todo));
// 			});
// 		} 
// 		else if ($element.parent().is(":nth-child(3)")) { 
// 			$(".content").append(
// 				'<input type="text" class="inp">'+
// 				'<button class="btn">+</button>'
// 			);
// 			var newToDo;
// 			$('.btn').on('click',function(){
// 				newToDo= $('.inp').val();
// 				if (newToDo!='') {
// 					toDos.push( newToDo);
// 					alert('Новое задание "'+newToDo+'" успешно добавлено!');
// 					$('.inp').val("");
// 				}
// 			})
		
// 		}
// 		return false;
// 	})
// })



var main = function () {
"use strict";
var makeTabActive = function (tabNumber) {
// сконструируем селектор из tabNubmer
var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
$(".tabs span").removeClass("active");
$(tabSelector).addClass("active");
};
$(".tabs a:nth-child(1)").on("click", function () {
makeTabActive(1);
return false;
});
$(".tabs a:nth-child(2)").on("click", function () {
makeTabActive(2);
return false;
});
$(".tabs a:nth-child(3)").on("click", function () {
makeTabActive(3);
return false;
});
};$(document).ready(main);

// var main = function () {
// "use strict";
// var tabNumber;
// for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
// var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
// $(tabSelector).on("click", function () {
// $(".tabs span").removeClass("active");
// $(this).addClass("active");
// return false;
// });
// }
// };$(document).ready(main);
