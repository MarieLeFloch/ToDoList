// Module gérant la liste de tâches
const tasksList = {

    init:function(){
        
        tasksList.handleAllTasks();
        //console.log('TEST INIT TASKS LIST'); //OK
    },

    // Méthode récupérant la liste de tasks & pose des écouteurs d'événement
    handleAllTasks: function() {
        // querySelectorAll car on a de multiples éléments task
        // On selectionne nos éléments avec la classe .task, dans le parent ayant la classe .tasks
        const tasksListArray = document.querySelectorAll('.tasks .task');
        //console.log(tasksListArray);
        //console.log('TEST HANDLEALLTASKS');//ok

        // On parcourt le tableau pour poser un écouteur d'événement sur chaque élément
        // On execute une fonction anonyme à chaque tour de boucle

        tasksListArray.forEach(function(taskElement) {
            //console.log(taskElement); //ok
            task.handleTaskEvents(taskElement);
        })

    }


}