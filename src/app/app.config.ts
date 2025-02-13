import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {QuizComponent} from './quiz/feature/quiz.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideAnimationsAsync(), provideRouter([{
    path: 'quiz',
    component: QuizComponent
  }])]
};
