// Soldier

const ragnar = new Soldier(100, 90);

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    console.log('here');
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    // this.health = this.health - damage;

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }

    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    }

    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }

  attack(attackers, victims) {
    let victimIndex = Math.floor(Math.random() * victims.length);
    let attackerIndex = Math.floor(Math.random() * attackers.length);

    const randomVictim = attackers[attackerIndex];
    const randomAttacker = victims[victimIndex];

    const message = randomVictim.receiveDamage(randomAttacker.attack());

    if (randomVictim.health <= 0) {
      victims.splice(victimIndex, 1);
    }

    return message;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }

    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }

    return 'Vikings and Saxons are still in the thick of battle.';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

const war = new War();

// let viking = new Viking("Ragnar",200,100)
// war.addViking(viking)
