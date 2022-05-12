// App : point d'entrée

const app = {
    // Init : execution du code nécessaire à notre application
    init: function() {
        //console.log('init app ok') //ok
        // On lance nos modules
        tasksList.init();
    }
}

// Lancement de init à la fin du chargement du DOM par le navigateur
document.addEventListener('DOMContentLoaded', app.init)