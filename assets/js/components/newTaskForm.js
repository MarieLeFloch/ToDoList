// Module gérant la récupération des valeurs d'une nouvelle tâche
// On gérera ensuite l'ajout de la tâche dans les autres modules tâches

const newTaskForm = {
    init: function(){
        //* SUBMIT FORM 
        // Ajout écouteur sur l'event submit du formulaire
        // Sur le formulaire avec la classe .task--add
        const addTaskFormElement = document.querySelector('.task--add');
        addTaskFormElement.addEventListener('submit', newTaskForm.handleNewTaskFormSubmit);

    },

    handleNewTaskFormSubmit: function(event){

        // On stoppe le comportement par défaut : envoie du formulaire
        event.preventDefault();
        // console.log("envoie du formulaire") //ok

        // Récupération element
        const addTaskFormElement = event.currentTarget;

        // Récupération input
        const addFormTitleElement = addTaskFormElement.querySelector('.task__title-field');
        // debugger;
        const newTitleValue = addFormTitleElement.value;
        console.log("valeur du titre : "+newTitleValue);

        // On récupère la catégorie séléctionnée <select> .task__category
        const addFormCategoryElement = addTaskFormElement.querySelector('.task__category');
        const formCategoryValue = addFormCategoryElement.value;

        //! Checker les éléments html
        //! renommer valeur des options

        console.log("valeur de la catégorie : " +formCategoryValue);

        // Appel de la fonction createTaskElement du module Task pour créer cette nouvelle tâche
        const newTaskObject = task.createTaskElement(newTitleValue, formCategoryValue);

        // Puis Appel de la fonction qui insert cet élément
        tasksList.insertNewTask(newTaskObject);


    }

}