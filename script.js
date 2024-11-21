$(document).ready(function () {
    const words = [
      { word: "always", translation: "завжди" },
      { word: "apple", translation: "яблуко" },
      { word: "house", translation: "будинок" },
      { word: "sun", translation: "сонце" },
      { word: "water", translation: "вода" },
      { word: "friend", translation: "друг" },
      { word: "school", translation: "школа" },
      { word: "book", translation: "книга" },
      { word: "city", translation: "місто" },
      { word: "family", translation: "сім'я" },
      { word: "world", translation: "світ" },
      { word: "computer", translation: "комп'ютер" },
      { word: "music", translation: "музика" },
      { word: "happiness", translation: "щастя" },
      { word: "morning", translation: "ранок" },
      { word: "night", translation: "ніч" },
      { word: "forest", translation: "ліс" },
      { word: "dream", translation: "мрія" },
      { word: "road", translation: "дорога" },
      { word: "movie", translation: "фільм" }
    ];
  
    const totalSteps = 10;
    let currentStep = 1;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
  
    function loadWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        const currentWord = words[randomIndex];
        $('#word').text(currentWord.word);
        $('#translation').val('');
        return currentWord;
    }
  
    function startNewGame() {
        currentStep = 1;
        correctAnswers = 0;
        incorrectAnswers = 0;
  
        $('#correct').text(correctAnswers);
        $('#incorrect').text(incorrectAnswers);
        $('#step-counter').text(`${currentStep}/${totalSteps}`);
  
        $('#check').show();
        $('#translation').show();
        $('#word').show();
        $('#show-result').hide();
        $('#restart').hide();
  
        currentWord = loadWord();
    }
  
    let currentWord = loadWord();

    $('#check').click(function () {
        const userTranslation = $('#translation').val().trim().toLowerCase();
        if (userTranslation === currentWord.translation.toLowerCase()) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
  
    $('#correct').text(correctAnswers);
    $('#incorrect').text(incorrectAnswers);
  
    currentStep++;
    if (currentStep <= totalSteps) {
        $('#step-counter').text(`${currentStep}/${totalSteps}`);
        currentWord = loadWord();
    } else {
        $('#check').hide();
        $('#translation').hide();
        $('#word').hide();
        $('#show-result').show();
        $('#restart').show();
    }
    });
  
    $('#show-result').click(function () {
        const level =
        correctAnswers === totalSteps
            ? "С2"
            : correctAnswers >= totalSteps / 2
            ? "B1"
            : "A1";
        $('#result-text').text(`Ваш рівень: ${level}`);
        $('#result-modal').fadeIn();
    });
  
    $('.close').click(function () {
        $('#result-modal').fadeOut();
    });
  
    $('#restart').click(function () {
        startNewGame();
    });
  
    startNewGame();
});
  