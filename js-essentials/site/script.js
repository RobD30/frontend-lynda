function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    };
}

var courses = [
        new Course('Javascript Esssential', 'Morty Mc Mort Mort', 1, true, 0),
        new Course('ES6', 'Mort Hendermort', 1, true, 123456)
    ];


console.log(courses[1].updateViews());