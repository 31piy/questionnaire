import './app.scss';

export const AppComponent = {
  template: require('./app.html'),

  controller: class App {
    /** @ngInject */
    constructor($log) {
      this.$log = $log;
    }

    scanAnswers() {
      this.resetValidationState();

      const questions = this.data.questions;
      const allAnswers = questions.map((_, index) => this.answers[index]);

      if (allAnswers.some(answer => !answer)) {
        this.state.validation.globalMessage = 'One or more questions need to be answered';

        questions.forEach((_, index) => {
          this.state.validation.answers[index] = !allAnswers[index];
        });

        return false;
      }

      questions.forEach((question, index) => {
        this.state.validation.answers[index] = question.answer_key !== allAnswers[index];
      });

      if (this.state.validation.answers.some(Boolean)) {
        this.state.validation.globalMessage = 'Some answers are incorrect';
        return false;
      }

      return true;
    }

    resetValidationState() {
      this.state.validation = {
        globalMessage: '',
        answers: []
      };
    }

    resetForm() {
      this.answers = [];
      this.resetValidationState();
    }

    $onInit() {
      this.data = require('../data.json');
      this.answers = [];

      this.state = {
        validation: {
          globalMessage: '',
          answers: []
        }
      };
    }
  }
};
