// data/model.js
export class SDG {
    constructor(id, name, targets) {
      this.id = id;
      this.name = name;
      this.targets = targets;
    }
  }
  
  export class Target {
    constructor(id, name, indicators) {
      this.id = id;
      this.name = name;
      this.indicators = indicators;
    }
  }
  
  export class Indicator {
    constructor(id, name, data) {
      this.id = id;
      this.name = name;
      this.data = data;
    }
  }