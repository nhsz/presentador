function init() {
  shuffleList(studentsList);
  const randomPairButton = document.getElementById('randomPairButton');
  randomPairButton.addEventListener('click', updateRandomPair);
}

function shuffleList(list) {
  for (let i = list.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
  }
}

function updateRandomPair() {
  while (isNotEmpty(studentsList)) {
    const student = studentsList.pop();
    const question = getRandomElementFrom(questionsList);

    showStudentQuestionPair(student, question);
    return;
  }

  swal('¡Terminamos!', 'Gracias por presentarse 😎', 'success');
}

function isNotEmpty(list) {
  return list.length !== 0;
}

function getRandomElementFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function showStudentQuestionPair(student, question) {
  const studentElement = document.getElementById('studentName');
  const questionElement = document.getElementById('randomQuestion');

  studentElement.innerHTML = student;
  questionElement.innerHTML = `${question} 🤔`;
}

init();
