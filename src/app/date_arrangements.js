export class DateArrangements {
  static date = new Date();
  static month = () => this.date.getMonth();
  static year = () => this.date.getFullYear();
  static monthCellsArray = [];

  static getDayOfTheMonth(dayNumber) {
    this.date.setDate(dayNumber);
    return this.date.getDay();
  }

  static daysInMonth(yearNumber, monthNumber) {
    return new Date(yearNumber, monthNumber + 1, 0).getDate();
  }

  static createMonthCellsArray(firstDay, lastDay) {
    this.monthCellsArray = [];

    if (firstDay === 0) {
      this.monthCellsArray = ["", "", "", "", "", ""];
    }

    for (let i = 0; i < firstDay - 1; i++) {
      this.monthCellsArray.push("");
    }

    for (let i = 0; i < lastDay; i++) {
      this.monthCellsArray.push(i + 1);
    }

    if (this.monthCellsArray.length < 35) {
      let currentMonthLength = 35 - this.monthCellsArray.length;
      for (let i = 0; i < currentMonthLength; i++) {
        this.monthCellsArray.push("");
      }
    } else if (this.monthCellsArray.length > 35) {
      let currentMonthLength = 42 - this.monthCellsArray.length;
      for (let i = 0; i < currentMonthLength; i++) {
        this.monthCellsArray.push("");
      }
      
    }
  }
}
