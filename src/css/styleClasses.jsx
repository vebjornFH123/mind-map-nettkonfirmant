class styleClasses {
  constructor() {
    this.nodeStyles = {
      textBox: {
        white: "border-[#27dea6] bg-white",
        green: "border-white, bg-[#27dea6]",
        blue: "border-white bg-[#103a61]",
        lightBlue: "border-white bg-[#B7CEFF]",
      },
    };
  }
}

class styleKeys {
  constructor() {
    this.nodeKeys = {
      textBox: {
        white: "white",
        green: "green",
        blue: "blue",
        lightBlue: "lightBlue",
      },
    };
  }
}

// Creating an instance of the class
const Styles = new styleClasses();
const Keys = new styleKeys();

export { Styles, Keys };
