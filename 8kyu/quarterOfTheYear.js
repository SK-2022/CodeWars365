// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//Answer

const quarterOf = (month) => {
    switch (month) {
        case 1:
        case 2:
        case 3:
          return 1; //At first I wrote a string "first quarter". This was a mistake. I did not read the instructions properly. I failed and realised that the quarters had to be represented in integer values.
        case 4:
        case 5:
        case 6:
          return 2;
        case 7:
        case 8:
        case 9:
          return 3;
        case 10:
        case 11:
        case 12:
          return 4;
    }
      return "That's not a month";
}