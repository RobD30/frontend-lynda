var course = new Object();

var course = {
    title: 'Javascript Essentials',
    instructor: 'Morty Mc Mort Mort',
    level: 1,
    published: true,
    views: 1,
    updateViews: function () {
        return ++course.views;
    }
};

console.log(course.title, course.instructor);