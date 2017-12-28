function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    };
};

var courses = [
    new Course('JS Essentials', 'Morty McMort Mort', 1, true, 0),
    new Course('Geeb', 'Goblin', 1, true, 0),
];


console.log(courses[1].updateViews());