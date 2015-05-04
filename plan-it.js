var notes = [{
    id:0,
    title:"Food",
    text:"<h1>Vendor&nbsp;Information</h1><p>The event is going to be serviced by two different restaurants, Pizza Planet and Kaletown. &nbsp;We're placing large orders with both of them for all of the attendees,&nbsp;estimating 100 meals total.</p><h2>Contact Information</h2><h3>Pizza Planet</h3><p>Email- littlegreenaliens@pizzaplanet.com</p><p>Cellphone- 617.867.5309</p><p>&nbsp;</p><h3>Kaletown</h3><p>Email- eatyourgreens@kaletown.com</p><p>Cellphone- 617.113.1847</p><h1>Meals</h1><p>We are going to be serving lunch and dinner, with vegan/gluten-free/lugnut-free options provided by Kaletown. &nbsp;The menu is</p><table style='height: 145px;' width='660'><tbody><tr><td><h2>Meal</h2></td><td><h2>Pizza Planet</h2></td><td><h2>Kaletown</h2></td></tr><tr><td>Saturday Lunch</td><td>Veggie Lovers, Meat Lovers, and Cheese Lovers pizzas</td><td>Kale and black bean burritos with kale, apple, and banana smoothies</td></tr><tr><td>Saturday Dinner</td><td>Spaghetti, meatballs, garlic bread, more pizzas</td><td>Sri Lankan noodles with kale, kale avocado salad, and kalekalekalekale</td></tr></tbody></table><h1>Snacks</h1><p>In between meals, people will be able to grab snacks&nbsp;which we purchase ahead of time. &nbsp;The current shopping list for snacks is:</p><ul><li>Protein bars</li><li>Apple slices</li><li>Fire Hot Cheetos</li><li>Bananas</li><li>Red Bull</li><li>Potato Chips</li><li>Celery</li><li>Carrots</li></ul><p>If you think we need something and you don't see it here, add it in yourself!</p><h1>Dietary Restrictions</h1><p>Apparently, we need to make sure that are no lugnuts in the food.</p>"},
{
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
    deadline: "5/5/2015",
    done: false
}, {
    id: 1,
    title: "Confirm Caterer",
    description: "Get the food dude to say he'll be there.",
    deadline: "5/5/2015",
    done: false
}, {
    id: 2,
    title: "Registration Form",
    description: "Put up a link to the updated registration form.",
    deadline: "5/10/2015",
    done: false
}, {
    id: 3,
    title: "Update time",
    description: "Let everyone know you'll be starting an hour late.",
    deadline: "5/15/2015",
    done: true
},{
    id: 4,
    title: "Reserve Room",
    description: "Contact admin",
    deadline: "5/16/2015",
    done: false
},{
    id: 5,
    title: "Call Brochacho",
    description: "",
    deadline: "5/17/2015",
    done: false
},{
    id: 6,
    title: "Buy banners",
    description: "Copytech...",
    deadline: "5/23/2015",
    done: true
},{
    id: 7,
    title: "Put in coffee order",
    description: "",
    deadline: "5/23/2015",
    done: false
},{
    id: 8,
    title: "Approve people's hours",
    description: "",
    deadline: "5/29/2015",
    done: false
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
    date:"04/06/2015",
    text:"Where's the event at?",
	responses:[{
		id: 0,
		responder:"Leela",
		date:"04/07/2015",
		text:"It will be at the Mars Institute of Technology, in the main science building. Once you enter the gates, just follow the signs!",
		edited:""
	},{
		id: 1,
		responder:"Brochacho",
		date:"04/09/2015",
		text:"Ok great, thanks!",
		edited:""
	}]
},{
	id: 2,
	isAnswered:true,
	subject:"Friends coming to spectate",
	asker:"Hermes",
	date:"04/05/2015",
	text:"I have some friends that would love to come see the results of the hackathon. What time can they show up? Should they use the same entrance as we use, or will there be a different entrance",
	responses:[{
		id: 0,
		responder:"Leela",
		date:"04/05/2015",
		text:"Great question. Viewers will be able to enter at 5pm on Sunday or later -- AFTER the projects have been turned in! The same signs will be up all weekend, so they will be able to get in the same way as you will. EDIT: Forgot to answer your second question, sorry!",
		edited:"04/06/2015"
	}]
},{
	id: 3,
	isAnswered:false,
	subject:"Dress code",
	asker:"Zoidberg",
	date:"04/12/2015",
	text:"Can our team wear costumes to the event? What restrictions are there on attire? WOOP WOOP WOOP WOOP",
	responses:[]
},{
	id: 4,
	isAnswered:true,
	subject:"Videos",
	asker:"Amy",
	date:"12/28/2014",
	text:"When will the videos of the event be posted online?",
	responses:[{
		id: 0,
		responder:"Leela",
		date:"01/02/2015",
		text:"We will try and get them up within a week of the hackathon ending, but it could take a little longer. We will do our best!",
		edited:""
	},{
		id: 1,
		responder:"Fry",
		date:"01/05/2015",
		text:"As Leela said, we will try our best to get them up quickly. Due to the amount of presentations we will be recording, however, it is possible this could actually take up to two weeks. Sorry!",
		edited:""
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
	showUnansweredQuestionsBadge();
};


//================ ANNOUNCMENTS =============

var loadAnnouncements = function(){
    var announcements = nunjucks.render('announcements.html', {
        allAnnouncements:allAnnouncements,
        activeAnnouncement:activeAnnouncement
    });

    loadPage(announcements);
	showUnansweredQuestionsBadge();
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
var editingResponse;

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
        if (!questions[i].isAnswered){
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
	if (editingResponse !== undefined){
		finishEdit(responseText);
	} else {
		activeQuestion.responses.push({id:activeQuestion.responses.length, responder:rspndr, date:responseDate, text:responseText, edited:""});
		$("#responseTextArea").val("");
		if (!activeQuestion.isAnswered){
			activeQuestion.isAnswered = true;
		}
	}
	loadQuestions();
};

var editQuestionResponse = function(responseId, editDate){
	var responseObj;
	for (var i=0; i<activeQuestion.responses.length; i++){
		if (activeQuestion.responses[i].id == responseId){
			responseObj = activeQuestion.responses[i];
		}
	}
	editingResponse = responseObj;
	responseObj.edited = editDate;
	$("#responseTextArea").val(responseObj.text);
	//$("#replyBtn").css("display", "none");
	//$("#saveEditBtn").css("display", "all");
	$("#replyBtn").html("Save");
	//loadQuestions();
}

var finishEdit = function(newText){
	editingResponse.text = newText;
	$("#responseTextArea").val("");
	//$("#replyBtn").css("display", "all");
	//$("#saveEditBtn").css("display", "none");
	$("#replyBtn").html("Reply");
	editingResponse = undefined;
	loadQuestions();
}

var showUnansweredQuestionsBadge = function(){
	var count = countUnansweredQuestions();
	if (count > 0){
		$("#unansweredQuestionsTabBadge").html(count);
	} else {
		$("#unansweredQuestionsTabBadge").html("");
	}
}

var loadQuestions = function(){
    var questionsTemplate = nunjucks.render('questions.html', {
        questions:questions,
        activeQuestion:activeQuestion,
        isActiveQuestion:isActiveQuestion
    });
    loadPage(questionsTemplate);
	showUnansweredQuestionsBadge();
};
//===========================================

//============== TODOS ====================

var todosOpen = true;
var todonesOpen = false;

var quickTodoVisible = false;
var newTodo;
var keepAtHome = false;

console.log(todos.length);

var toggleQuickTodo = function(){
    quickTodoVisible = quickTodoVisible === false;
    loadHome();
};

var submitQuickTodo = function(){
    creatingToDo = false;
    var todoText = $('#todoText').val();
    var deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    newTodo = {
        'id':Date.now(),
        'title':todoText,
        'description':'',
        'deadline':deadline.toLocaleDateString(),
        'done':false
    };
    
    activeTodo = newTodo;
    todos.push(newTodo);
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
};

var toggleTodonesOpen = function(){
    todonesOpen = todonesOpen === false;
};

var toggleTodoDone = function(todoID){
    var thisTodo = getOneTodo(todoID);
    thisTodo.done = thisTodo.done !== true;
    loadTodos();
};

var toggleTodoDoneHome = function(todoID){
    var thisTodo = getOneTodo(todoID);
    thisTodo.done = thisTodo.done !== true;
    loadHome();
    keepAtHome = true;
};

var selectTodo = function(todoID){
    if(keepAtHome){
        loadHome();
        keepAtHome = false;
    }
    else{
        activeTodo = getOneTodo(todoID);
        console.log(editingToDo);
        console.log("creatingToDo");
        console.log(creatingToDo);
        creatingToDo = false;
        console.log(activeTodo);
        loadTodos();
    }
    
};

var editToDo = function(){
    // Turns on the editable UI for the active note.
    editingToDo = true;
    $('#createToDo').hide();
    loadTodos();
};

var saveToDo = function(){
    // Saves the active note's content to be that contained
    // in the note detail text.  It then turns off the editable UI.
    
    if (creatingToDo){
        todos.push(newTodo);
    }
    editingToDo = false;
    creatingToDo = false;

    var newTitle = $('.todoTitleText').val();
    tinymce.triggerSave();
    var newContent = $('.todoBodyDescription').val();
    var newDeadline = $('.todoBodyDeadline').val();
    activeTodo.title = newTitle;
    activeTodo.description = newContent;
    activeTodo.deadline = newDeadline;
    selectTodo(activeTodo.id);
};

var deleteTodo = function(todoID){

    todos = _.filter(todos, function(todo){ return todo.id !== todoID });
    
    //if (typeof activeTodo === "undefined"){
        for (var i in todos){
            if (!todos[i].done){
                activeTodo = todos[i];
            }
        }
        var notDoneTodos = 0;
        for (var i in todos){
            if (!todos[i].done){
                notDoneTodos++;
            }
            console.log(todos[i]);
        }
        if (notDoneTodos === 0){
            createTodo();

        }
        if (todos.length === 0){
            createTodo();
        }
        //activeTodo = todos[0];
    //}
    //activeTodo = todos[0];

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
    newTodo = {
        'id':id,
        'title':subject,
        'description':details,
        'deadline':date,
        'done':false
    };
    
    activeTodo = newTodo;
    loadTodos();
    activateRichText();
};

var isActiveTodo = function(todo){
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
	showUnansweredQuestionsBadge();
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
        plugins:["advlist anchor autolink emoticons hr image insertdatetime link",
            "lists media paste spellchecker tabfocus table textcolor"],
        content_css:'/css/bootstrap.css'
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
    tinymce.triggerSave();
    var newContent = $('.noteBodyText').val();
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
	showUnansweredQuestionsBadge();
};

