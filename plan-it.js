var isActive = {'home':true, 'announcements':false, 'questions':false, 'notes':false, 'todo':false};

var loadPage = function(renderedTemplate){
    $('#site-ui').html(renderedTemplate);
};

var setActive = function(page){
    for (var entry in isActive){
        isActive[entry] = page === entry;
    }
};

var loadHome = function(){
    setActive('home');
    var newMenu = nunjucks.render('menu.html');
    var home = nunjucks.render('home.html');
    loadPage(home);
};

var loadAnnouncements = function(){
    var announcements = nunjucks.render('announcements.html');
    setActive('announcements');
    loadPage(announcements);
};

var loadQuestions = function(){
    var questions = nunjucks.render('questions.html');
    setActive('questions');
    loadPage(questions);
};

var loadNotes = function(){
    var notes = nunjucks.render('notes.html');
    setActive('notes');
    loadPage(notes);
};

var loadTodos = function(){
    var todos = nunjucks.render('todos.html');
    setActive('todo');
    loadPage(todos);
};
