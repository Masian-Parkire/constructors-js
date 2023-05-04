//Question1

// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.
// Requirements:

// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)

function Car(make,model,year,isAvailable){
    this.make=make
    this.model=model
    this.year=year
    this.isAvailable=true
    this.toggleAvailability = function() {
        this.isAvailable = !this.isAvailable;
        
      }


}

let car= new Car("Toyota","Camry",2020);
console.log(car.isAvailable);
car.toggleAvailability()
console.log(car.isAvailable);
car.toggleAvailability()
console.log(car.isAvailable);

//2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.
function Rental(car,renterName,rentalStartDate,rentalEndDate){
   this.car=car;
   this.renterName=renterName;
   this.rentalStartDate=rentalStartDate;
   this.rentalEndDate=rentalEndDate;

}
Rental.prototype.calculateRentalDuration=function(){
    let start=this.rentalStartDate.getTime();
    let end=this.rentalEndDate.getTime();
    let dayDiff=end-start;
    let oneDay=24*60*60*1000;
    let duration=dayDiff/oneDay
    return duration

};

let rental= new Rental(car,"Ali Hassan", new Date(2023,2,15), new Date(2023,2,17))
console.log(rental);
console.log(rental.calculateRentalDuration());

//Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.

let car1 = new Car("Toyota", "Camry", 2020, true);
console.log(car1);
let rental1 = new Rental(car, "John Doe", new Date(2023, 2, 20), new Date(2023, 2, 23));
console.log(rental1);
let duration1 = rental.calculateRentalDuration();
console.log(duration1);

//Question 2
// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.

// // 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.

class Question{
    constructor(text,options,correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(answer) {
        return answer === this.correctAnswer;
      }
    }
    
 let question= new Question ("Who was the first president of Kenya?",
 ["Uhuru Kenyata","Mwai Kibaki","Jomo Kenyatta","Raila Odinga"],"Jomo Kenyatta")

 let answer="Jomo Kenyatta"
 let isCorrect=question.checkAnswer(answer)
 console.log(isCorrect);

//2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.


 class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  
    checkAnswer(answer) {
      const currentQuestion = this.getCurrentQuestion();
      if (currentQuestion.checkAnswer(answer)) {
        this.score++;
        return true;
      }
      return false;
    }
  
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        return true;
      }
      return false;
    }
  }

  const q1 = new Question('What is the longest River in AFRICA?', ['R.Tana', 'R.Nile', 'R.Orange', 'R.Mara'], 'R.Nile');
const q2 = new Question('Which is the tallest mountain in Kenya?', ['mt.Kenya', 'mt.Longonot', 'mt.Kilimanjaro', 'mt.Kilimambogo'], 'mt.Kenya');
const q3 = new Question('which one is not a programming language taught at AkiraChix?', ['JavaScript', 'React Native', 'Kotlin', 'Python'], 'React Native');


const quiz = new Quiz([q1, q2, q3]);


quiz.getNextQuestion();


quiz.answerCurrentQuestion('R.Nile');

quiz.getNextQuestion();


quiz.answerCurrentQuestion('mt.Kenya');


quiz.getNextQuestion();


quiz.answerCurrentQuestion('React Native');


console.log(`Your score is: ${quiz.getScore()} out of ${quiz.getNumQuestions()}`);
  






    
   


