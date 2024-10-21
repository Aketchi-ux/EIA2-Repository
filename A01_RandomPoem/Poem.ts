namespace RandomPoem {
    const subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    const predicate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    const objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subject);
    console.log(predicate);
    console.log(objects);

    for (let i = subject.length; i > 0; i--) {
        console.log(i);
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        let verse: string = "";
        
        // Random Indexes for subject, predicate and object
        const subjectIndex: number = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(subjectIndex, 1)[0] + " ";

        const predicateIndex: number = Math.floor(Math.random() * _predicate.length);
        verse += _predicate.splice(predicateIndex, 1)[0] + " ";
        
        const objectIndex: number = Math.floor(Math.random() * _object.length);
        verse += _object.splice(objectIndex, 1)[0];

        return verse;
    }

    for (let i = 0; i < 5; i++) {  // Fünf Zeilen generieren
        const line: string = getVerse(subject, predicate, objects);
        console.log(line);
    }
}