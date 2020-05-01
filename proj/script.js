

let money,time;

function start (){
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == '' || money == null){
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function choose(){
	for(let i = 0; i < 2;i++){
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
			
		if(typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50){
			console.log ('done');
			appData.expenses[a] = b;
		} else {
			i--;
		}
	}
}

choose();

function detectDayBudget(){
	appData.moneyPerDay = appData.budget / 30;
	alert("Ежедневный бюджет: " + (appData.moneyPerDay).toFixed());
}

detectDayBudget();

function detectLevel(){
	if(appData.moneyPerDay < 100){
		console.log('Минимальный уровень достатка');
	} else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
		console.log('Средний уровень достатка');
	} else if(appData.moneyPerDay > 2000){
		console.log('Высокий уровень достатка');
	} else{
		console.log('Ошибка');
	}
}

detectLevel();

function check(){
	if(appData.savings == true){
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Пож какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход за месяц с вашего депозита: " + appData.monthIncome);
	}
}

check();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();
