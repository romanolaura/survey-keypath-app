const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  officialLanguage: Array,
  thirdLargestCountry: String,
  hocheySaltLake: String,
  canadaColonizers: String,
  nationalAnimal: String,
  coldestTemperature: String,
  nationalSport: String,
  oldestCity: String,
  incorporatedMontreal: String,
  olimpicsMontreal: String,
  f1Montreal: String,
  foundingQuebecCity: String,
  walledQuebec: String,
  olympicMedallisQC: String,
  foundingRivieres: String,
  mergedRivieres: String,
  streetRaceRivieres: String,
  incorporatedJohns: String,
  firesJohn: Array,
  nhlTeamJohn: String,
  cityOfChampions: String,
  loonieAnimal: String,
  citiesCanada: Array,
  nbaMemphis: String,
  userId:String,
});

module.exports = mongoose.model("Quiz", quizSchema);

/*{
    age: String,
    favoriteSubject: String,
    officialLanguage: Array,
    thirdLargestCountry: String,
    canadaColonizers: String,
    nationalAnimal: String,
    coldestTemperature: String,
    nationalSport: String,
    loonieAnimal: String,
    citiesCanada:Array,
    userId:String,
}*/
// ['officialLanguage', 'thirdLargestCountry', 'hocheySaltLake', 'canadaColonizers', 'nationalAnimal', 'coldestTemperature', 'nationalSport', 'oldestCity', 'incorporatedMontreal', 'olimpicsMontreal', 'f1Montreal', 'foundingQuebecCity', 'walledQuebec', 'olympicMedallisQC', 'foundingRivieres', 'mergedRivieres', 'streetRaceRivieres', 'incorporatedJohns', 'firesJohn', 'nhlTeamJohn', 'cityOfChampions', 'loonieAnimal', 'citiesCanada', 'nbaMemphis']
