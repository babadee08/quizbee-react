const qBank = [
    {
        question: "What year was Nigeria's independence",
        answers: ["1958", "1959", "1960", "1966"],
        correct: "1960",
        questionId: "01"
    },
    {
        question: "The first military Coup in Nigeria happened in what year",
        answers: ["1958", "1959", "1960", "1966"],
        correct: "1966",
        questionId: "02"
    },
    {
        question: "When was Nigeria's Amalgamation of the North and South protectorate",
        answers: ["1904", "1914", "1919", "1966"],
        correct: "1914",
        questionId: "03"
    },
    {
        question: "When year did Gen. Sani Abacha of Nigeria died",
        answers: ["1958", "1998", "1960", "1999"],
        correct: "1998",
        questionId: "04"
    },
    {
        question: "What year was Gen. Murtala Mohammed killed",
        answers: ["1958", "1959", "1976", "1966"],
        correct: "1976",
        questionId: "05"
    },
    {
        question: "What year did the Nigerian civil war ended",
        answers: ["1958", "1959", "1960", "1970"],
        correct: "1970",
        questionId: "06"
    },
    {
        question: "What year did Queen Elizbeth first visited Nigeria",
        answers: ["1958", "1956", "1960", "1966"],
        correct: "1956",
        questionId: "07"
    },
    {
        question: "When did Nigeria become a republic",
        answers: ["1958", "1963", "1960", "1966"],
        correct: "1963",
        questionId: "08"
    },
    {
        question: "What year did the third Military coup happen in Nigeria",
        answers: ["1975", "1959", "1960", "1966"],
        correct: "1975",
        questionId: "09"
    },
    {
        question: "What year did Chief Dehinde Fernandez die?",
        answers: ["2017", "2015", "2016", "2018"],
        correct: "2015",
        questionId: "010"
    }
];

export default (n = 3) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));