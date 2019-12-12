function renderHomePage(req,res) {
    
    res.render('pages/home');
}

function renderProject(req,res) {
    res.render('pages/project');
}

function renderAbout(req,res){
    res.render('pages/about')
}

module.exports = {
    renderHomePage: renderHomePage,
    renderProject: renderProject,
    renderAbout: renderAbout
};