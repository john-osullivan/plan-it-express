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
    deadline: "2015-04-20",
    done: false
}, {
    id: 1,
    title: "Confirm Caterer",
    description: "Get the food dude to say he'll be there.",
    deadline: "2015-04-16",
    done: false
}, {
    id: 2,
    title: "Registration Form",
    description: "Put up a link to the updated registration form.",
    deadline: "2015-04-15",
    done: false
}, {
    id: 3,
    title: "Update time",
    description: "Let everyone know you'll be starting an hour late.",
    deadline: "2015-04-14",
    done: true
}];
var activeTodo = todos[0];

var questions = [{
    id:0,
    isAnswered:false,
    subject:"Lug nuts",
    asker:"Bender",
    date:"04/15/2015",
    /*text:"This is a much larger example question text which is meant to show that this text is displayed in its entirety."*/
    text: "I am allergic to lug nuts. Will there be lug nuts at the event? I would like to know in order to take the proper precautions."

},{
    id:1,
    isAnswered:true,
    subject:"Location?",
    asker:"Brochacho",
    date:"04/01/2015",
    text:"Where's the event at?"
}];
var activeQuestion = questions[0];

var allAnnouncements = [{
    id:0,
    subject:"Testing this Page",
    body:"Hello everyone,\nThis is a test\nI need to know",
    time:"4/10/15",
    pinned:false
}, {
    id:1,
    subject:"Moving Space",
    body:"Hello,\nWe will be moving to a new space",
    time:"4/9/15",
    pinned:false
},{
    id:2,
    subject:"Testing pinning",
    body:"This announcement should be pinned",
    time:"4/14/15",
    pinned:true
}];

var activeAnnouncement = allAnnouncements[0];

var loadPage = function(renderedTemplate){
    $('#site-ui').html(renderedTemplate);
};

var loadHome = function(){
    var home = nunjucks.render('home.html', {
        notes:notes,
        questions:questions,
        todos:getTodos(),
        announcements:_sortAnnouncements(allAnnouncements)
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

var createAnnouncement = function(subject, body, time, pinned){
    var newID = allAnnouncements.length;
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
        'text':text
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

var deleteTodo = function(todoID){

    todos = _.filter(todos, function(todo){ return todo.id !== todoID });
    if (typeof activeTodo === "undefined"){
        activeTodo = todos[0];
    }
    loadTodos();
};

var createTodo = function(subject, details, date){
    var id = todos.length;
    todos.push({
        'id':id,
        'title':subject,
        'description':details,
        'deadline':date,
        'done':false
    });
    loadTodos();
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
        todonesOpen: todonesOpen
    });
    loadPage(todosPage);
};

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
    console.log("notes: ",notes);
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

