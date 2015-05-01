var notes = [{
    id:0,
    title:"Food",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet mollis tortor. Integer mauris ante, lacinia quis mi et, luctus tristique metus. Sed et justo fermentum, malesuada nisi ac, efficitur velit. Aliquam ac orci ut odio egestas iaculis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus tempus consequat. Vivamus et enim id turpis aliquam fringilla. Vivamus eu nulla non ligula rhoncus pharetra non non tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue vehicula ligula, eget tempus ligula sagittis non. Etiam nibh nulla, condimentum ac ullamcorper ut, fringilla ac lectus. Quisque."
}, {
    id:1,
    title:"Attendees",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet mollis tortor. Integer mauris ante, lacinia quis mi et, luctus tristique metus. Sed et justo fermentum, malesuada nisi ac, efficitur velit. Aliquam ac orci ut odio egestas iaculis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus tempus consequat. Vivamus et enim id turpis aliquam fringilla. Vivamus eu nulla non ligula rhoncus pharetra non non tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue vehicula ligula, eget tempus ligula sagittis non. Etiam nibh nulla, condimentum ac ullamcorper ut, fringilla ac lectus. Quisque."
}, {
    id:2,
    title:"Organizers",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet mollis tortor. Integer mauris ante, lacinia quis mi et, luctus tristique metus. Sed et justo fermentum, malesuada nisi ac, efficitur velit. Aliquam ac orci ut odio egestas iaculis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus tempus consequat. Vivamus et enim id turpis aliquam fringilla. Vivamus eu nulla non ligula rhoncus pharetra non non tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue vehicula ligula, eget tempus ligula sagittis non. Etiam nibh nulla, condimentum ac ullamcorper ut, fringilla ac lectus. Quisque."
}];
var activeNote = notes[0];

var todos = [{
    id: 0,
    title: "Go Grocery Shopping",
    description: "Make sure you have all the food you'll need!",
    deadline: "4/20/2015",
    done: false
}, {
    id: 1,
    title: "Confirm Caterer",
    description: "Get the food dude to say he'll be there.",
    deadline: "4/16/2015",
    done: false
}, {
    id: 2,
    title: "Registration Form",
    description: "Put up a link to the updated registration form.",
    deadline: "4/15/2015",
    done: false
}, {
    id: 3,
    title: "Update time",
    description: "Let everyone know you'll be starting an hour late.",
    deadline: "4/14/2015",
    done: true
}];
var activeTodo = todos[0];

var questions = [{
    id:0,
    isAnswered:false,
    subject:"Lug nuts",
    asker:"Bender",
    date:"04/15/2015",
    text: "I am allergic to lug nuts. Will there be lug nuts at the event? I would like to know in order to take the proper precautions.",
	responses:[]
},{
    id:1,
    isAnswered:true,
    subject:"Location?",
    asker:"Brochacho",
    date:"04/01/2015",
    text:"Where's the event at?",
	responses:[{
		responder:"Leela",
		date:"04/03/2015",
		text:"It will be at the Mars Institute of Technology, in the main science building. Once you enter the gates, just follow the signs!"
	},{
		responder:"Brochacho",
		date:"04/04/2015",
		text:"Ok great, thanks!"
	}]
}];
var activeQuestion = questions[0];

var allAnnouncements = [{
    id:1,
    subject:"New Time",
    body:"Hello everyone,\nWe will being moving the start time to 9 AM from 10 AM. This should allow everyone to get out on time.",
    time:"4/27/15",
    pinned:false
},{
    id:0,
    subject:"Hello Everyone",
    body:"We are just starting to use a new system to help us keep you informed. Please visit this page periodically to see announcments" +
     " and feel free to use the questions page if you have any other questions.",
    time:"4/25/15",
    pinned:true
}];

var activeAnnouncement = false;

var loadPage = function(renderedTemplate){
    $('#site-ui').html(renderedTemplate);
};

var loadHome = function(){
    var home = nunjucks.render('home.html', {
        notes:notes,
        questions:questions,
        todos:getTodos(),
        announcements:_sortAnnouncements(allAnnouncements),
        quickTodoVisible:quickTodoVisible
    });
    loadPage(home);
};


//================ ANNOUNCMENTS =============

var loadAnnouncements = function(){
    var announcements = nunjucks.render('announcements.html', {
        allAnnouncements:allAnnouncements,
        activeAnnouncement:activeAnnouncement
    });

    loadPage(announcements);
};

var createAnnouncement = function(id, subject, body, time, pinned){
    var newID = id;
    var announcement = {
        id:newID,
        subject:subject,
        body:body,
        time:time,
        pinned:pinned
    };
    allAnnouncements.unshift(announcement)
    allAnnouncements = _sortAnnouncements(allAnnouncements)
    return announcement
}

var _deleteAnnouncement = function(elt){
    var index = allAnnouncements.indexOf(elt);

    allAnnouncements.splice(index, 1);
}

var _sortAnnouncements = function(elts){
    var pinnedList = [],
        restList = [];


    pinnedList = _.filter(elts, function(elt){
        return (elt.pinned)
    });

    restList = _.filter(elts, function(elt){
        return (!elt.pinned)
    });
    return pinnedList.concat(restList)
}

var selectAnnouncement = function(announcementID){
    activeAnnouncement = _.find(allAnnouncements, function(announcement) {return announcement.id == announcementID});
    loadAnnouncements();
};

var unSelectAnnouncement = function(){
    activeAnnouncement = false
}


//===========================================

//================ QUESTIONS ================
var isActiveQuestion = function(questionID){
    return questionID === activeQuestion.id;
}

var createQuestion = function(subject, asker, date, text){
    var newQuestion = {
        'id':questions.length,
        'isAnswered':false,
        'subject':subject,
        'asker':asker,
        'date':date,
        'text':text,
		'responses':[]
    };
    questions.push(newQuestion);
    return newQuestion;
};

var countUnansweredQuestions = function(){
    var result = 0;
    for (var i=0; i<questions.length; i++){
        if (questions[i].isActiveNote){
            result++;
        }
    }
    return result;
};

var selectQuestion = function(questionID){
    var selectedQuestion = _.find(questions, function(question){return question.id == questionID});
    activeQuestion = selectedQuestion;
    loadQuestions();
};

var newQuestionResponse = function(responseText, rspndr, responseDate){
	activeQuestion.responses.push({responder:rspndr, date:responseDate, text:responseText});
	$("#responseTextArea").val("");
	loadQuestions();
};

var loadQuestions = function(){
    var questionsTemplate = nunjucks.render('questions.html', {
        questions:questions,
        activeQuestion:activeQuestion,
        isActiveQuestion:isActiveQuestion
    });
    loadPage(questionsTemplate);
};
//===========================================

//============== TODOS ====================

var todosOpen = true;
var todonesOpen = false;

var quickTodoVisible = false;



var toggleQuickTodo = function(){
    quickTodoVisible = quickTodoVisible === false;
    loadHome();
};

var submitQuickTodo = function(){
    var todoText = $('#todoText').val();
    var deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    console.log(deadline);
    todos.push({
        'id':Date.now(),
        'title':todoText,
        'description':'',
        'deadline':deadline.toLocaleDateString(),
        'done':false
    });
    quickTodoVisible = false;
    loadHome();
};

var editingToDo = false;
var creatingToDo = false;

var getOneTodo = function(todoID){
    return _.find(todos, function(todo){ return todo.id == todoID });
};

var getTodos = function(){
    return _.filter(todos, function(todo){ return todo.done === false });
};

var getTodones = function() {
    return _.filter(todos, function(todo){ return todo.done === true });
};

var toggleTodosOpen = function(){
    todosOpen = todosOpen === false;
    console.log("Just set todosOpen to :",todosOpen);
};

var toggleTodonesOpen = function(){
    todonesOpen = todonesOpen === false;
    console.log("Just set todonesOpen to :",todonesOpen);
};

var toggleTodoDone = function(todoID){
    var thisTodo = getOneTodo(todoID);
    thisTodo.done = thisTodo.done !== true;
    loadTodos();
};

var selectTodo = function(todoID){
    activeTodo = getOneTodo(todoID);
    loadTodos();
};

var editToDo = function(){
    // Turns on the editable UI for the active note.
    editingToDo = true;
    $('#createToDo').hide();
    loadTodos();
    if (editingToDo){
        $('#createToDo').hide();
    }
};

var saveToDo = function(){
    // Saves the active note's content to be that contained
    // in the note detail text.  It then turns off the editable UI.
    editingToDo = false;
    creatingToDo = false;
    var newTitle = $('.todoTitleText').val();
    tinymce.triggerSave();
    var newContent = $('.todoBodyDescription').val();
    var newDeadline = $('.todoBodyDeadline').val();
    console.log(newContent);
    activeTodo.title = newTitle;
    activeTodo.description = newContent;
    activeTodo.deadline = newDeadline;
    selectTodo(activeTodo.id);
};

var deleteTodo = function(todoID){

    todos = _.filter(todos, function(todo){ return todo.id !== todoID });
    if (typeof activeTodo === "undefined"){
        activeTodo = todos[0];
    }
    activeTodo = todos[0];
    loadTodos();
};

var activateRichText = function(){
    var maxWidth = Math.floor($('textarea').parent().innerWidth() * 0.95);
    tinymce.init({
        selector: "textarea",
        width:maxWidth,
        height:300,
        plugins:["advlist anchor autolink autoresize emoticons hr image insertdatetime link",
            "lists media paste spellchecker tabfocus table textcolor"]
    });
};

var createTodo = function(subject, details, date){
    creatingToDo = true;
    var id = todos.length;
    var newTodo = {
        'id':id,
        'title':subject,
        'description':details,
        'deadline':date,
        'done':false
    };
    todos.push(newTodo);
    activeTodo = newTodo;
    loadTodos();
    activateRichText();
};

var isActiveTodo = function(todo){
    console.log("isActiveTodo being called on: ",todo);
    if ((typeof todo !== "undefined") && (typeof activeTodo !== "undefined")){
        return todo.id == activeTodo.id;
    } else {
        return false;
    }

};

var loadTodos = function(){
    var pageTodos = getTodos();
    var pageTodones = getTodones();
    var todosPage = nunjucks.render('todos.html', {
        isActiveTodo:isActiveTodo,
        activeTodo:activeTodo,
        todos: pageTodos,
        todones: pageTodones,
        selectTodo: selectTodo,
        deleteTodo: deleteTodo,
        toggleTodoDone: toggleTodoDone,
        todosOpen: todosOpen,
        todonesOpen: todonesOpen,
        editingToDo:editingToDo,
        creatingToDo:creatingToDo
    });
    loadPage(todosPage);
};

var cancelTodo = function(){
    editingToDo = false;
    if (creatingToDo){
        todos.splice(todos.length - 1, 1);
    }
    creatingToDo = false;
    activeTodo = todos[0];
    loadTodos();
}

var numRemainingTodos = function(){
    var numRemaining = 0;
    for (var i in todos){
        if (!todos[i].done){
            numRemaining++;
        }
    }
    return numRemaining;
}

//============== NOTES ====================

var editingNote = false;
var creatingNote = false;

var activateRichText = function(){
    var maxWidth = Math.floor($('textarea').parent().innerWidth() * 0.95);
    tinymce.init({
        selector: "textarea",
        width:maxWidth,
        height:300,
        plugins:["advlist anchor autolink autoresize emoticons hr image insertdatetime link",
            "lists media paste spellchecker tabfocus table textcolor"]
    });
};

var isActiveNote = function(noteID){
    return noteID === activeNote.id;
};

var createNote = function(){
    creatingNote = true;
    var newID = notes.length;
    var newNote= {'id': newID,'title':'','text':''};
    notes.push(newNote);
    activeNote = newNote;
    loadNotes();
    activateRichText();
};

var selectNote = function(noteID){
    activeNote = _.find(notes, function(note){return note.id == noteID});
    loadNotes();
};

var editNote = function(){
    // Turns on the editable UI for the active note.
    editingNote = true;
    loadNotes();
    activateRichText();
};

var saveNote = function(){
    // Saves the active note's content to be that contained
    // in the note detail text.  It then turns off the editable UI.
    editingNote = false;
    creatingNote = false;
    var newTitle = $('.noteTitleText').val();
    console.log("newTitle: ",newTitle);
    tinymce.triggerSave();
    var newContent = $('.noteBodyText').val();
    console.log("newContent: ",newContent);
    activeNote.title = newTitle;
    activeNote.text = newContent;
    selectNote(activeNote.id);
};

var deleteNote = function(noteID){
    // Deletes the active note and sets the active note to the first one
    // in the list of remaining notes.
    var activeID = activeNote.id;
    notes = _.filter(notes, function(note){return note.id != activeID});
    activeNote = notes[0];
    loadNotes();
};

var loadNotes = function(){
    var notesTemplate = nunjucks.render('notes.html', {
        notes:notes,
        isActiveNote:isActiveNote,
        activeNote:activeNote,
        editingNote:editingNote,
        creatingNote:creatingNote
    });
    loadPage(notesTemplate);
};

