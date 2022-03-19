var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
enemyHealth = 50;

  var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player choses to skip

        if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight

          if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

        // subtract money from playerMoney for skipping

            playerMoney = playerMoney - 10;
            console.log("playerMoney" + playerMoney)
          break;
        }
      }  
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
        );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
        break;
      } else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
      };

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
  };
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      enemyHealth = 50;
    var pickedEnemyName = enemyNames[i];
    fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  };