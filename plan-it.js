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
var activeNote = notes[1];
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
var activeToDo;

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


var loadTodos = function(){
    var todos = nunjucks.render('todos.html');
    loadPage(todos);
};


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