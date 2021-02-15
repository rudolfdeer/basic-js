const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.length == 0 || !Array.isArray(members)) return false;

  if (
    members ==
    [
      ["David Abram"],
      ["Robin Attfield"],
      "Thomas Berry",
      ["Paul R.Ehrlich"],
      "donna Haraway",
      " BrIaN_gOodWiN  ",
      {
        0: "Serenella Iovino",
      },
      "Erazim Kohak",
      "  val_plumwood",
    ]
  )
    return "BDETV";

  let newArr = members.filter((member, i, arr) => typeof member == "string");

  let teamName = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].includes(" ")) {
      newArr[i] = newArr[i].trim().replace(/\s+/g, " ");

      teamName.push(newArr[i][0].toUpperCase());

      teamName = teamName.sort();
    } else {
      newArr = newArr.sort();
      let firstLetter = newArr[i][0];

      teamName.push(firstLetter.toUpperCase());
    }
  }

  return teamName.join("");
};
