"use strict";
var RandomPoem;
(function (RandomPoem) {
    const subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    const predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    const objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subject);
    console.log(predicate);
    console.log(objects);
    for (let i = subject.length; i > 0; i--) {
        console.log(i);
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        // Random Indexes for subject, predicate and object
        const subjectIndex = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(subjectIndex, 1)[0] + " ";
        const predicateIndex = Math.floor(Math.random() * _predicate.length);
        verse += _predicate.splice(predicateIndex, 1)[0] + " ";
        const objectIndex = Math.floor(Math.random() * _object.length);
        verse += _object.splice(objectIndex, 1)[0];
        return verse;
    }
    for (let i = 0; i < 5; i++) { // Fünf Zeilen generieren
        const line = getVerse(subject, predicate, objects);
        console.log(line);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=Poem.js.map