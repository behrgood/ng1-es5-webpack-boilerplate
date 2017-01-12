function TechsData($q) {
  var _techs = [{
    key: "gulp",
    title: "Gulp",
    logo: "http://fountainjs.io/assets/imgs/gulp.png",
    text1: "The streaming build system",
    text2: "Automate and enhance your workflow"
  }, {
    key: "angular1",
    title: "Angular 1",
    logo: "http://fountainjs.io/assets/imgs/angular1.png",
    text1: "HTML enhanced for web apps!",
    text2: "AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop."
  }, {
    key: "browsersync",
    title: "Browsersync",
    logo: "http://fountainjs.io/assets/imgs/browsersync.png",
    text1: "Time-saving synchronised browser testing",
    text2: "It’s wicked-fast and totally free"
  }, {
    key: "scss",
    title: "Sass",
    logo: "http://fountainjs.io/assets/imgs/sass.png",
    text1: "Syntactically Awesome Style Sheets.",
    text2: "CSS with superpowers."
  }, {
    key: "js",
    title: "JavaScript",
    logo: "http://fountainjs.io/assets/imgs/js.png",
    text1: "A high-level, dynamic, untyped, and interpreted programming language.",
    text2: "A prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles."
  }, {
    key: "eslint",
    title: "ESLint",
    logo: "http://fountainjs.io/assets/imgs/eslint.png",
    text1: "The pluggable linting utility for JavaScript and JSX.",
    text2: "1 tool for identifying and reporting on patterns found in ECMAScript/JavaScript code."
  }, {
    key: "karma",
    title: "Karma",
    logo: "http://fountainjs.io/assets/imgs/karma.png",
    text1: "Spectacular Test Runner for JavaScript",
    text2: "Things should be simple. We believe in testing and so we want to make it as simple as possible"
  }, {
    key: "webpack",
    title: "Webpack",
    logo: "http://fountainjs.io/assets/imgs/webpack.png",
    text1: "Webpack is a module bundler",
    text2: "Webpack, the production / unbiased / flexible / extensible / open source module bundler"
  }];

  function getTechs() {
    return $q.when(_techs);
  }

  return {
    getTechs: getTechs
  };
}

module.exports = TechsData;
