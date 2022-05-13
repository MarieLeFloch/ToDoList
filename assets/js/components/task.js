// Module task : gère chaque tâche

const task = {
    // Ajout des event listeners sur une tâche donnée
    handleTaskEvents: function(taskElement) {

        //* EDITION D'UNE TACHE
        // Ajout d'un event listener quand on clique sur le titre de la tâche (classe .title__label)
        const taskTitleElement = taskElement.querySelector('.task__title-label');
        //console.log(taskTitleElement)
        taskTitleElement.addEventListener('click', task.letEditingTaskTitle);

        // //Permet d'activer à l'événement une fonction anonyme affichant clik, pour checker
        // taskTitleElement.addEventListener('click', function() {
        //     //console.log('CLIK');
        // })


        // Selection de l'input contenant le titre
        const taskTitleInputElement = taskElement.querySelector('.task__title-field');
        // console.log(taskTitleInputElement);

        // On va considérer deux manières de valider un nouveau titre : 
        // perte du focus sur l'input
        taskTitleInputElement.addEventListener('blur', task.stopEditingWithEndFocus);
        // appui sur la touche enter
        //taskTitleInputElement.addEventListener('keydown', );

        //* COMPLETION D'UNE TACHE
        // Séléction des boutons concernés dans nos éléments task
        const completeTaskButton = taskElement.querySelector('.task__button--validate');
        //console.log(completeTaskButton); //ok
        // Lancement de la méthode pour marquer une tâche complète
        completeTaskButton.addEventListener('click', task.handleCompleteTask);
        


    },

    //* EDITION D'UNE TACHE

    // Permettre la modification d'un titre lorsqu'on clique dessus
    // On va passer d'un <p> non modifiable à un <input>
    letEditingTaskTitle: function(event) {
        // On selectionne le titre de l'élément ayant subi l'événement
        const taskTitleElement = event.currentTarget;

        // Ajout de la classe task--edit sur le parent div .task
        // Récupèrer l'élément parent le plus proche contenant telle classe => closest()
        const taskElement = taskTitleElement.closest('.task');

        taskElement.classList.add('task--edit');
    },

    // Méthode gérant la validation du nouveau titre via ENTER
    //stopEditingWithKeydown: function() {

    //},

    // Méthode gérant la validation du nouveau titre via SORTIE INPUT
    stopEditingWithEndFocus: function(event) {
        //console.log('Fin edition'); // dès sortie de l'input, apparait, ok!
        // On fait le chemin inverse de ci-dessus : on supprime la classe task--edit

        // On cible l'input ayant subi l'événement
        const taskTitleInputElement = event.currentTarget;

        // Stockage de la nouvelle valeur entrée dans l'input
        const newTaskTitle = taskTitleInputElement.value;

        // On cible l'élément parent
        const taskElement = taskTitleInputElement.closest('.task');

        // On modifie le contenu avec le nouveau titre
        taskElement.querySelector('.task__title-label').textContent = newTaskTitle;

        // On retire la classe task--edit
        taskElement.classList.remove('task--edit');
    },

    //* COMPLETION D'UNE TACHE

    handleCompleteTask: function(event) {
        console.log('clic bouton complété'); // ok
        
        // On cible le bouton ayant subi l'événement
        const taskCompleteButtonElement = event.currentTarget;

        // On cible l'élément parent
        const taskElement = taskCompleteButtonElement.closest('.task')

        // On modifie la classe de ce parent pour qu'elle soit considérée complète
        // Si elle passe en complète, c'est qu'elle étaient en todo
        taskElement.classList.remove('task--todo');
        taskElement.classList.add('task--complete');

        

    }


}
