# 📚 Nepali Learning App — Project Structure

```bash
nepali-learning-app/
├── README.md
├── .gitignore
├── package.json
├── app.json
├── babel.config.js
├── metro.config.js
├── eas.json
│
├── frontend/
│   ├── App.js
│   ├── app.json
│   ├── package.json
│   ├── babel.config.js
│   ├── metro.config.js
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button.js
│   │   │   │   ├── Input.js
│   │   │   │   ├── LoadingSpinner.js
│   │   │   │   ├── ProgressBar.js
│   │   │   │   └── AudioPlayer.js
│   │   │   │
│   │   │   ├── lessons/
│   │   │   │   ├── MultipleChoice.js
│   │   │   │   ├── Translation.js
│   │   │   │   ├── AudioRecognition.js
│   │   │   │   ├── WritingPractice.js
│   │   │   │   └── SpeakingPractice.js
│   │   │   │
│   │   │   └── navigation/
│   │   │       ├── TabNavigator.js
│   │   │       └── StackNavigator.js
│   │   │
│   │   ├── screens/
│   │   │   ├── auth/
│   │   │   │   ├── LoginScreen.js
│   │   │   │   ├── RegisterScreen.js
│   │   │   │   └── OnboardingScreen.js
│   │   │   │
│   │   │   ├── main/
│   │   │   │   ├── HomeScreen.js
│   │   │   │   ├── LessonsScreen.js
│   │   │   │   ├── ProfileScreen.js
│   │   │   │   └── ProgressScreen.js
│   │   │   │
│   │   │   └── lessons/
│   │   │       ├── LessonScreen.js
│   │   │       ├── ExerciseScreen.js
│   │   │       └── ResultScreen.js
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── storage.js
│   │   │   ├── audio.js
│   │   │   └── firebase.js
│   │   │
│   │   ├── store/
│   │   │   ├── index.js
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── lessonsSlice.js
│   │   │   │   ├── progressSlice.js
│   │   │   │   └── userSlice.js
│   │   │   └── middleware/
│   │   │       └── api.js
│   │   │
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   ├── validators.js
│   │   │   └── nepaliHelpers.js
│   │   │
│   │   ├── styles/
│   │   │   ├── colors.js
│   │   │   ├── fonts.js
│   │   │   ├── globalStyles.js
│   │   │   └── themes.js
│   │   │
│   │   └── assets/
│   │       ├── images/
│   │       │   ├── icons/
│   │       │   ├── illustrations/
│   │       │   └── cultural/
│   │       ├── audio/
│   │       │   ├── words/
│   │       │   ├── phrases/
│   │       │   └── sounds/
│   │       └── fonts/
│   │           ├── Devanagari.ttf
│   │           └── NepaliUnicode.ttf
│   │
│   └── __tests__/
│       ├── components/
│       ├── screens/
│       └── utils/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   │
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── firebase.js
│   │   │   └── config.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Lesson.js
│   │   │   ├── Exercise.js
│   │   │   ├── Progress.js
│   │   │   └── Achievement.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── lessons.js
│   │   │   ├── progress.js
│   │   │   ├── users.js
│   │   │   └── admin.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── lessonController.js
│   │   │   ├── progressController.js
│   │   │   ├── userController.js
│   │   │   └── adminController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   │   ├── upload.js
│   │   │   └── errorHandler.js
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── lessonService.js
│   │   │   ├── progressService.js
│   │   │   └── emailService.js
│   │   │
│   │   └── utils/
│   │       ├── validators.js
│   │       ├── helpers.js
│   │       └── constants.js
│   │
│   └── tests/
│       ├── routes/
│       ├── controllers/
│       └── services/
│
├── admin-panel/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       ├── components/
│       │   ├── LessonEditor.js
│       │   ├── AudioUploader.js
│       │   ├── UserManagement.js
│       │   └── Analytics.js
│       │
│       ├── pages/
│       │   ├── Dashboard.js
│       │   ├── Lessons.js
│       │   ├── Users.js
│       │   └── Content.js
│       │
│       └── utils/
│           ├── api.js
│           └── helpers.js
│
├── shared/
│   ├── constants/
│   │   ├── api.js
│   │   ├── lessons.js
│   │   └── exercises.js
│   │
│   ├── types/
│   │   ├── user.js
│   │   ├── lesson.js
│   │   └── progress.js
│   │
│   └── utils/
│       ├── validation.js
│       └── helpers.js
│
├── content/
│   ├── lessons/
│   │   ├── lesson-1-greetings.json
│   │   ├── lesson-2-family.json
│   │   └── lesson-3-numbers.json
│   │
│   ├── audio/
│   │   ├── words/
│   │   ├── phrases/
│   │   └── instructions/
│   │
│   └── images/
│       ├── cultural/
│       ├── vocabulary/
│       └── ui/
│
├── docs/
│   ├── setup.md
│   ├── api-documentation.md
│   ├── deployment.md
│   └── content-guidelines.md
│
└── scripts/
    ├── setup-dev.sh
    ├── build-release.sh
    ├── deploy-backend.sh
    └── seed-database.js
