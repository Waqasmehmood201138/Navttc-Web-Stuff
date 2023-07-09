
let data = [
    {
        sentence: "Rome wasn't built in a day. All that glitters is not gold."
    },
    {
        sentence: "Actions speak louder than words."
    }
]
// Above we have a objects thats is separated with comma

let spaces = 0;
let vowels = 0;
let sentence_count = 0;
// Here we declare and initialize a varaiable with value 0; 

for (let i = 0; i < data.length; i++) {

    // Here this loop will go only for objects

    for (let j = 0; j < data[i].sentence.length; j++) {

        // Here this loop will go for the objects sentences

        switch (data[i].sentence.charAt(j)) {

            // Here this will go for the characters of sentence

            case ' ':
                spaces++;
                break;

            // In the above case we only count spaces when there is empty space at charAt(j)

            case '.':
            case '!':
                sentence_count++;
                break;

            // In the above case we only count sentences when there is dot & exclamation mark at charAt(j)

            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels++;
                break;
        }
    }

    console.log(data[i].sentence)

    console.log("Spaces : ".concat(spaces))
    console.log("Vowels : ".concat(vowels))
    console.log("Sentences : ".concat(sentence_count))

    // Here when the sentence is completed we resetting the all variables we use in because for counting new spaces and vowels for new sentence
    spaces = 0;
    vowels = 0;
    sentence_count = 0;

}




