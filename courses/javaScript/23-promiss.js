//Создание промиса

const myPromise = new Promise(function(resolve, reject){
    console.log('Promise created');
    setTimeout(function(){
        // запрос на сервер
        const response = true;
        if (response) {
            let message = "SUCCESS"
            resolve(message);
        } else {
            let message = "FAILED"
            reject(message);
        }
    }, 1500)
});

myPromise.then(function(data){
    setTimeout(() => {
        console.log('Then 1');
        console.log(data);
        return 'Data from then 1'   
    }, 1000)
    
}).then(function(data){
    console.log('Then 2');
    console.log(data);
}).catch(function(data){
    console.log('Catch');
    console.log(data);
})



//цепочки промисов
const checkRooms = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		// ---- код который отправляет запрос в отель ---
		let availableRooms = true;

		if (availableRooms) {
			resolve('Номера есть!');
		} else {
			reject('Номеров нет.');
		}
	}, 1500);
})
	.then(function (data) {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				console.log('---- then 1. checkTickets ----');
				console.log('Ответ на предыдущем шаге:', data);

				console.log('Проверяем авиабилеты...');
				// ---- код который отправляет запрос в авиакомпанию ---
				const availableTickets = true;

				if (availableTickets) {
					let message = 'Билеты есть';
					resolve('message');
				} else {
					let message = 'Билетов нет';
					throw new Error(message);
				}
			}, 1000);
		});
	})
	.then(function (data) {
		console.log('---- then 2. sumbitVacation ----');
		console.log('Ответ на предыдущем шаге:', data);
		console.log('Едем в отпуск! 🌴 :)');
	})
	.catch(function (data) {
		console.log('---- catch ----');
		console.log('Ответ на предыдущем шаге:', data);
		console.log('Отпуск отменяется 😢 :(');
	});
