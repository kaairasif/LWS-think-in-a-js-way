const languages = [
  { title: "JavaScript", type: "scripting" },
  {
    title: "Java",
    type: {
      case: "normal",
      established: 1990,
    },
  },
  { title: "C++", type: "normal" },
  { title: "Python", type: "scripting" },
];

let scriptingLanguages = {};

// Way 1
// languages.forEach((language) => {
//     const type = language.type;

//     if(!scriptingLanguage[type]) {
//         scriptingLanguage[type] = []
//     }
//     scriptingLanguage[type].push(language)
// })

// way 2
// scriptingLanguages = languages.reduce((res, language) => {
//     const type = language.type;
//     if (!res[type]) {
//         res[type] = [];
//     }
//     res[type].push(language);
//     return res;
// }, {});

scriptingLanguages = Object.groupBy(languages, (lang) =>
  lang.type.case ? lang.type.case : lang.type
);

console.log("🚀 ~ file: script.js:8 ~ scriptingLanguage:", scriptingLanguages);
