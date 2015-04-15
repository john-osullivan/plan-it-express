var notes = [{
    id:1,
    title:"Food",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet mollis tortor. Integer mauris ante, lacinia quis mi et, luctus tristique metus. Sed et justo fermentum, malesuada nisi ac, efficitur velit. Aliquam ac orci ut odio egestas iaculis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus tempus consequat. Vivamus et enim id turpis aliquam fringilla. Vivamus eu nulla non ligula rhoncus pharetra non non tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue vehicula ligula, eget tempus ligula sagittis non. Etiam nibh nulla, condimentum ac ullamcorper ut, fringilla ac lectus. Quisque."
}, {
    id:2,
    title:"Attendees",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet mollis tortor. Integer mauris ante, lacinia quis mi et, luctus tristique metus. Sed et justo fermentum, malesuada nisi ac, efficitur velit. Aliquam ac orci ut odio egestas iaculis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus tempus consequat. Vivamus et enim id turpis aliquam fringilla. Vivamus eu nulla non ligula rhoncus pharetra non non tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue vehicula ligula, eget tempus ligula sagittis non. Etiam nibh nulla, condimentum ac ullamcorper ut, fringilla ac lectus. Quisque."
}, {
    id:3,
    title:"Organizers",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet mollis tortor. Integer mauris ante, lacinia quis mi et, luctus tristique metus. Sed et justo fermentum, malesuada nisi ac, efficitur velit. Aliquam ac orci ut odio egestas iaculis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus tempus consequat. Vivamus et enim id turpis aliquam fringilla. Vivamus eu nulla non ligula rhoncus pharetra non non tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue vehicula ligula, eget tempus ligula sagittis non. Etiam nibh nulla, condimentum ac ullamcorper ut, fringilla ac lectus. Quisque."
}];
var activeNote = notes[1];
var activeQuestion;
var activeToDo;
var activeAnnouncement;

var loadPage = function(renderedTemplate){
    $('#site-ui').html(renderedTemplate);
};

var loadHome = function(){
    var home = nunjucks.render('home.html');
    loadPage(home);
};

var loadAnnouncements = function(){
    var announcements = nunjucks.render('announcements.html');
    loadPage(announcements);
};

var loadQuestions = function(){
    var questions = nunjucks.render('questions.html');
    loadPage(questions);
};



var loadTodos = function(){
    var todos = nunjucks.render('todos.html');
    loadPage(todos);
};


var isActiveNote = function(noteID){
        return noteID === activeNote.id;
    };

var createNote = function(title, text){
    var newID = notes.length + 1;
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
        test:"I am a test string!",
        isActiveNote:isActiveNote,
        activeNote:activeNote
    });
    loadPage(notesTemplate);
};