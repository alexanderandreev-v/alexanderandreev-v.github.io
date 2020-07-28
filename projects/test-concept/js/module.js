var sVersion = "2004";

function CheckF5() {
	function disableF5(e) {
		if ((e.which || e.keyCode) == 116) e.preventDefault();
	};
	$(document).on("keydown", disableF5);
};

// Проверка места прохождения курса
pathname = window.location.href;

function CheckStartPlace() {
	// const homeblock = document.querySelector('.homeblock');
	console.log('Проверка места прохождения...')

	if (pathname.indexOf("e-learning.") != -1) {
		console.log('Курс запускается из дома');
		// homeblock.classList.remove('hide');
	} else {
		console.log('Курс запускается из офиса');
	};

};

// Getting parameters array...
function getSameData() {
	var str = "";
	switch (sVersion) {
		case "2004": //SCORM 2004
			str += "try to get student_id:" + ISCORM_GET("cmi.learner_id") + "\n";
			str += "try to get student_name:" + ISCORM_GET("cmi.learner_name") + "\n";
			str += "try to get credit:" + ISCORM_GET("cmi.credit") + "\n";
			str += "try to get entry:" + ISCORM_GET("cmi.entry") + "\n";
			str += "try to get completion_status:" + ISCORM_GET("cmi.completion_status") + "\n";
			str += "try to get success_status:" + ISCORM_GET("cmi.success_status") + "\n";
			str += "try to get progress_measure:" + ISCORM_GET("cmi.progress_measure") + "\n";
			str += "try to get completion_threshold:" + ISCORM_GET("cmi.completion_threshold") + "\n";
			str += "try to get scaled_passing_score:" + ISCORM_GET("cmi.scaled_passing_score") + "\n";
			str += "try to get score.max:" + ISCORM_GET("cmi.score.max") + "\n";
			str += "try to get score.raw:" + ISCORM_GET("cmi.score.raw") + "\n";
			str += "try to get score.min:" + ISCORM_GET("cmi.score.min") + "\n";
			str += "try to get objectives.0.id:" + ISCORM_GET("cmi.objectives.0.id") + "\n";
			str += "try to get objectives.0.success_status:" + ISCORM_GET("cmi.objectives.0.success_status") + "\n";
			str += "try to get objectives.0.completion_status:" + ISCORM_GET("cmi.objectives.0.completion_status") + "\n";
			str += "try to get objectives.0.progress_measure:" + ISCORM_GET("cmi.objectives.0.progress_measure") + "\n";
			str += "try to get objectives.0.score.max:" + ISCORM_GET("cmi.objectives.0.score.max") + "\n";
			str += "try to get objectives.0.score.raw:" + ISCORM_GET("cmi.objectives.0.score.raw") + "\n";
			str += "try to get objectives.0.score.min:" + ISCORM_GET("cmi.objectives.0.score.min") + "\n";
			str += "try to get objectives.0.description:" + ISCORM_GET("cmi.objectives.0.description") + "\n";
			var StartModule = ISCORM_GET("cmi.completion_status");
	};
};

function CheckSS() {
	var timerFor = Date.now();
	console.log('Проверка сессии...');
	var CheckSession = setInterval(testGet, 1000);
	getSameData();

	function testGet() {
		var timerResult = (Date.now() - timerFor) / 1000;
		var test = ISCORM_GET("cmi.score.raw");
		if (test === '') {
			// document.querySelector('.session-disconnect').classList.remove('hide');
		} else {
			clearInterval(CheckSession);
			!!
			console.log('Сессия установлена');


			function ShowContent() {
				document.querySelector('.course-start__skeleton').classList.add('hide');
				gsap.fromTo(".course-start__content", {
					opacity: 0,
				}, {
					duration: 2,
					opacity: 1,
					ease: "expo.inOut"
				})
			};

			gsap.to(".course-start__skeleton", {
				duration: 2,
				opacity: 0,
				ease: "expo.inOut",
				onComplete: ShowContent()
			});

			document.querySelector('.course-start__content').classList.remove('hide');

		}
		if (timerResult >= 10) {
			clearInterval(CheckSession);

			!!
			console.log('Сессия оборвалась');
		}
	}
}


// Setting parameters array...
function saveSameDataAfetFirstStart() {
	if (ISCORM_GET("cmi.completion_status") == "not attempted" || ISCORM_GET("cmi.completion_status") == "incomplete" && ISCORM_GET("cmi.score.raw") === "") {
		var str = "";
		switch (sVersion) {
			case "2004": //SCORM 2004
				str += "try to save completion_status (completed) :" + ISCORM_SET("cmi.completion_status", "incomplete") + "\n";
				str += "try to save progress_measure (0.5) :" + ISCORM_SET("cmi.progress_measure", "0.5") + "\n";
				str += "try to save completion_threshold (0.55) :" + ISCORM_SET("cmi.completion_threshold", "0.55") + "\n";
				str += "try to save scaled_passing_score (100) :" + ISCORM_SET("cmi.scaled_passing_score", "100") + "\n";
				str += "try to save success_status (passed) :" + ISCORM_SET("cmi.success_status", "incomplete") + "\n";
				str += "try to save score.max (100) :" + ISCORM_SET("cmi.score.max", "100") + "\n";
				str += "try to save score.min (0) :" + ISCORM_SET("cmi.score.min", "0") + "\n";
				str += "try to save score.raw (0) :" + ISCORM_SET("cmi.score.raw", "0") + "\n";
				ISCORM_COMMIT();
		}
	}
}

function saveSameDataCompleted() {
	var str = "";
	switch (sVersion) {
		case "1.2": //SCORM 1.2
			str += "try to save lesson_status (completed) :" + ISCORM_SET("cmi.core.lesson_status", "completed") + "\n";
			str += "try to save score.max (99) :" + ISCORM_SET("cmi.core.score.max", "99") + "\n";
			str += "try to save score.raw (77) :" + ISCORM_SET("cmi.core.score.raw", "77") + "\n";
			str += "try to save score.min (11) :" + ISCORM_SET("cmi.core.score.min", "11") + "\n";
			str += "try to save objectives.0.id (myObjective) :" + ISCORM_SET("cmi.objectives.0.id", "myObjective") + "\n";
			str += "try to save objectives.0.status (completed) :" + ISCORM_SET("cmi.objectives.0.status", "completed") + "\n";
			str += "try to save objectives.0.score.max (89) :" + ISCORM_SET("cmi.objectives.0.score.max", "89") + "\n";
			str += "try to save objectives.0.score.raw (66) :" + ISCORM_SET("cmi.objectives.0.score.raw", "66") + "\n";
			str += "try to save objectives.0.score.min (22) :" + ISCORM_SET("cmi.objectives.0.score.min", "22") + "\n";
			break;
		case "2004": //SCORM 2004
			str += "try to save completion_status (completed) :" + ISCORM_SET("cmi.completion_status", "completed") + "\n";
			str += "try to save progress_measure (0.5) :" + ISCORM_SET("cmi.progress_measure", "0.5") + "\n";
			str += "try to save completion_threshold (0.55) :" + ISCORM_SET("cmi.completion_threshold", "0.55") + "\n";
			str += "try to save scaled_passing_score (85) :" + ISCORM_SET("cmi.scaled_passing_score", "85") + "\n";
			str += "try to save success_status (passed) :" + ISCORM_SET("cmi.success_status", "passed") + "\n";
			str += "try to save score.max (99) :" + ISCORM_SET("cmi.score.max", "99") + "\n";
			str += "try to save score.raw (77) :" + ISCORM_SET("cmi.score.raw", "100") + "\n";
			str += "try to save score.min (11) :" + ISCORM_SET("cmi.score.min", "11") + "\n";
			str += "try to save objectives.0.id (s1) :" + ISCORM_SET("cmi.objectives.0.id", "s1") + "\n";
			str += "try to save objectives.0.success_status (passed) :" + ISCORM_SET("cmi.objectives.0.success_status", "passed") + "\n";
			str += "try to save objectives.0.completion_status (completed) :" + ISCORM_SET("cmi.objectives.0.completion_status", "completed") + "\n";
			str += "try to save objectives.0.progress_measure (0.5) :" + ISCORM_SET("cmi.objectives.0.progress_measure", "0.5") + "\n";
			str += "try to save objectives.0.score.max (89) :" + ISCORM_SET("cmi.objectives.0.score.max", "100") + "\n";
			str += "try to save objectives.0.score.raw (66) :" + ISCORM_SET("cmi.objectives.0.score.raw", "66") + "\n";
			str += "try to save objectives.0.score.min (22) :" + ISCORM_SET("cmi.objectives.0.score.min", "0") + "\n";
			str += "try to save objectives.0.description (AAA ?? ABC) :" + ISCORM_SET("cmi.objectives.0.description", "AAA ?? ABC") + "\n";
			break;
	}
	ISCORM_COMMIT();
	window.close();
}

function saveAddData(n) {
	var count = n;
	switch (sVersion) {
		case "2004": //SCORM 2004
			var stroke = parseFloat(ISCORM_GET("cmi.score.raw"));
			ISCORM_SET("cmi.score.raw", stroke + count);
			ISCORM_GET("cmi.score.raw")
			break;
	}
	ISCORM_COMMIT();
}


function GetUserData() {
	var req = new XMLHttpRequest();
	req.open('GET', '/tcsbank/ajax/ajax_course_requests.html?method=getUserInfo', true);
	req.setRequestHeader("Content-Type", "text/html;  charset=utf-8");
	req.send(null);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status == 200) {
				var data = JSON.parse(req.responseText);
				person_fullname = data.person_fullname;
				person_sex = data.person_sex;
				person_firstname = data.person_firstname;
				person_lastname = data.person_lastname;
				person_middlename = data.person_middlename;
				person_position = data.person_position_name;
				person_subdivision = data.person_subdivision_name;
				console.log('Определение данных сотрудника...');
				console.log(person_fullname);
				console.log(person_position);
				console.log(person_subdivision);
				var WriteName = document.querySelectorAll('.personal-greeting');
				$(".personal-greeting").text(person_firstname);
				$(".personal-greeting-lastname").text(person_middlename);
			}
		}
	}
}

// Запускаем главную функцию
function StartModule() {
	console.log('Главная функция запущена');
	CheckSS(); //Проверяем сессию
	CheckF5(); //Блокируем нажатие клавиши F5
	GetUserData(); // Узнаем данные сотрудника
	getSameData(); // Узнаем данные о прохождении курса сотрудником
	saveSameDataAfetFirstStart(); // Сохраняем статусы прохождения курса
	CheckStartPlace(); // Проверяем место прохождения курса (офис/дом)
}


// function person_subdivision_start() {
// 	console.log('Определение данных сотрудника...');
// 	console.log(person_fullname);
// 	console.log(person_position);
// 	console.log(person_subdivision);	

// 	// if (person_subdivision == "Сектор развития розничной сети") {
// 	// 	$('.Retail_Network_Development_Sector').removeClass('d-none');
// 	// }
// }