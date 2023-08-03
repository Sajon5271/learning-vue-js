const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      playerSurrendered: false,
      battleLog: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) return { width: '0%' };
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) return { width: '0%' };
      return { width: this.playerHealth + '%' };
    },
    specialAttackAvailable() {
      return !(this.currentRound % 3);
    },
    winner() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) return 'draw';
      else if (this.playerHealth <= 0 || this.playerSurrendered)
        return 'monster';
      else if (this.monsterHealth <= 0) return 'player';
      else return null;
    },
  },
  watch: {
    // Not using wathers since condition depends on both player and monster health
    playerHealth() {},
    monsterHealth() {},
  },
  methods: {
    restartGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.playerSurrendered = false;
      this.battleLog = [];
    },
    playerAttack() {
      const damage = getRandom(10);
      this.monsterHealth -= damage;
      this.addLog('Player', 'attacks', damage);
      this.monsterAttack();
      this.currentRound++;
    },
    monsterAttack() {
      const damage = getRandom(15);
      this.playerHealth -= damage;
      this.addLog('Monster', 'attacks', damage);
    },
    specialAttack() {
      const damage = getRandom(40);
      this.monsterHealth -= damage;
      this.addLog('Player', 'attacks', damage);
      this.monsterAttack();
      this.currentRound++;
    },
    healPlayer() {
      const heal = getRandom(10);
      this.playerHealth =
        this.playerHealth + heal > 100 ? 100 : this.playerHealth + heal;
      this.currentRound++;
      this.addLog('Player', 'heals', heal);
      this.monsterAttack();
    },
    surrender() {
      this.playerSurrendered = true;
    },
    addLog(who, what, val) {
      this.battleLog.unshift({ who, what, val });
    },
  },
});

app.mount('#game');

const getRandom = (max) => {
  return Math.ceil(Math.random() * max);
};
