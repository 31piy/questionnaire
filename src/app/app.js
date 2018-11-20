import './app.scss';

export const AppComponent = {
  template: require('./app.html'),

  controller: class App {
    /** @ngInject */
    constructor($log, $scope) {
      this.$log = $log;
      this.$scope = $scope;
    }

    scanAnswers() {
      this.resetState();

      const questions = this.data.questions;
      const allAnswers = questions.map((_, index) => this.answers[index]);

      if (allAnswers.some(answer => !answer)) {
        this.state.validation.globalMessage = 'One or more questions need to be answered';

        questions.forEach((_, index) => {
          this.state.validation.answers[index] = !allAnswers[index];
        });

        return false;
      }

      this.state.showResult = true;

      questions.forEach((question, index) => {
        this.state.validation.answers[index] = question.answer_key !== allAnswers[index];

        if (this.state.validation.answers[index]) {
          this.chart.data[0][1]++;
        } else {
          this.chart.data[0][0]++;
        }
      });

      if (this.state.validation.answers.some(Boolean)) {
        this.state.validation.globalMessage = 'Some answers are incorrect';
        return false;
      }

      return true;
    }

    resetState() {
      this.chart.data = [[0, 0]];

      this.state = {
        showResult: false,
        validation: {
          globalMessage: '',
          answers: []
        }
      };
    }

    resetForm() {
      this.answers = [];
      this.resetState();
    }

    $onInit() {
      this.data = require('../data.json');
      this.answers = [];

      this.chart = {
        labels: ['Correct', 'Incorrect'],
        series: ['Numbers'],
        data: [
          [0, 0]
        ],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                callback(value) {
                  if (Math.floor(value) === value) {
                    return value;
                  }
                }
              }
            }]
          }
        }
      };

      this.resetState();
    }
  }
};
