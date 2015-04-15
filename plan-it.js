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
    deadline: new Date("2015-04-20"),
    done: false
}, {
    id: 1,
    title: "Confirm Caterer",
    description: "Get the food dude to say he'll be there.",
    deadline: new Date("2015-04-16"),
    done: false
}, {
    id: 2,
    title: "Registration Form",
    description: "Put up a link to the updated registration form.",
    deadline: new Date("2015-04-15"),
    done: false
}, {
    id: 3,
    title: "Update time",
    description: "Let everyone know you'll be starting an hour late.",
    deadline: new Date("2015-04-14"),
    done: true
}];
var activeTodo = todos[0];

var questions = [{
		id:0,
		isAnswered:true,
		subject:"Subject1",
		asker:"Sender1",
		date:"MM/DD/YY",
		text:"This is a small amount of text."
	},{
		id:1,
		isAnswered:false,
		subject:"Subject2",
		asker:"Sender2",
		date:"MM/DD/YY",
		text:"This is a much larger example question text which is meant to show that this text is displayed in its entirety."
	}];
var activeQuestion = questions[1];

var allAnnouncements = [_makeAnnouncement("Testing this Page", "Hello everyone,\nThis is a test\nI need to know", "4/10/15",false),
    _makeAnnouncement("Moving Space", "Hello,\nWe will be moving to a new space", "4/9/15", false),
    _makeAnnouncement("Testing pinning", "This announcement should be pinned", "4/14/15", true)
    ];

var activeAnnouncement = allAnnouncements[2];

var loadPage = function(renderedTemplate){
    $('#site-ui').html(renderedTemplate);
};

var loadHome = function(){
    var home = nunjucks.render('home.html');
    loadPage(home);
};

//================ ANNOUNCMENTS =============


function _makeAnnouncement(subject, body, time, pinned){
        return {"subject":subject, "body":body, "time":time, "pinned":pinned}
    }

var loadAnnouncements = function(){
    var announcements = nunjucks.render('announcements.html', {
        allAnnouncements:allAnnouncements,
        activeAnnouncement:activeAnnouncement
    });
    loadPage(announcements);
};

var createAnnouncement = function(subject, body, time, pinned){
    var announcement = _makeAnnouncement(subject,body,time,pinned);

    allAnnouncements.unshift(announcement)
    console.log(announcement)
    return announcement
}

var _deleteAnnouncement = function(elt){
    var index = allAnnouncements.indexOf(elt);

    allAnnouncements.splice(index, 1);
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
		'text':text
	};
	questions.push(newQuestion);
	return newQuestion;
}

var countUnansweredQuestions = function(){
	var result = 0;
	for (var i=0; i<questions.length; i++){
		if (questions[i].isActiveNote){
			result++;
		}
	}
	return result;
}

var selectQuestion = function(questionID){
	var selectedQuestion = _.find(questions, function(question){return question.id == questionID});
	activeQuestion = selectedQuestion;
	loadQuestions();
}

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

var getOneTodo = function(todoID){
    return _.find(todos, function(todo){ return todo.id == todoID });
};

var getTodos = function(){
    var undoneTodos =  _.filter(todos, function(todo){ return todo.done === false });
    console.log("Just got todos, there were this many: ",undoneTodos.length);
    console.log(undoneTodos);
    return _.map(undoneTodos, function(todo){
        todo.deadline = todo.deadline.toDateString();
        return todo;
    });
};

var getTodones = function() {
    var todones = _.filter(todos, function(todo){ return todo.done === true });
    return _.map(todones, function(todone){
        todone.deadline = todone.deadline.toDateString();
        return todone;
    });
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
};

var createTodo = function(){

};

var isActiveTodo = function(todo){
    return todo.id == activeTodo.id;
};

var loadTodos = function(){
    var todos = getTodos();
    var todones = getTodones();
    var todosPage = nunjucks.render('todos.html', {
        isActiveTodo:isActiveTodo,
        activeTodo:activeTodo,
        todos: todos,
        todones: todones,
        selectTodo: selectTodo,
        deleteTodo: deleteTodo,
        toggleTodoDone: toggleTodoDone
    });
    loadPage(todosPage);
};

//============== NOTES ====================

var isActiveNote = function(noteID){
        return noteID === activeNote.id;
    };

var createNote = function(title, text){
    var newID = notes.length;
    var newNote= {'id': newID, 'title': title, "text":text};
    notes.push(newNote);
    return newNote;
};

var selectNote = function(noteID){
    var thisNote = _.find(notes, function(note){return note.id == noteID});
    activeNote = thisNote;
    loadNotes();
};

var loadNotes = function(){
    var notesTemplate = nunjucks.render('notes.html', {
        notes:notes,
        isActiveNote:isActiveNote,
        activeNote:activeNote
    });
    loadPage(notesTemplate);
};