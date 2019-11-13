const statement = require('./movies');

let newReleaseCustomer = {
    "name": "martin",
    "rentals": [
        { "movieID": "F001", "days": 3 },
    ]
};

let newReleaseMovies = {
    "F001": { "title": "The Cell", "code": "new" }
}

test('test single NewRelease statement', () => {
    expect(statement(newReleaseCustomer, newReleaseMovies)).toMatchSnapshot();
});

let newReleaseCustomer2 = {
    "name": "martin",
    "rentals": [
        { "movieID": "F001", "days": 3 },
        { "movieID": "F002", "days": 3 },
    ]
};

let newReleaseMovies2 = {
    "F001": { "title": "The Cell", "code": "new" },
    "F002": { "title": "The Tigger Movie", "code": "new" }
}

test('test dual NewRelease statement', () => {
    expect(statement(newReleaseCustomer2, newReleaseMovies2)).toMatchSnapshot();
});

let newChildrenCustomer = {
    "name": "martin",
    "rentals": [
        { "movieID": "F001", "days": 3 },
    ]
};

let newChildrenMovies = {
    "F001": { "title": "The Tigger Movie", "code": "childrens" }
}

test('test single children statement', () => {
    expect(statement(newChildrenCustomer, newChildrenMovies)).toMatchSnapshot();
});

let regularCustomer = {
    "name": "martin",
    "rentals": [
        { "movieID": "F001", "days": 1 },
        { "movieID": "F002", "days": 2 },
        { "movieID": "F003", "days": 3 },
    ]
};

let regularMovies = {
    "F001": { "title": "Plan 9 from Outer Space", "code": "regular" },
    "F002": { "title": "8 1/2", "code": "regular" },
    "F003": { "title": "Eraserhead", "code": "regular" },
}

test('test multiple regular statement', () => {
    expect(statement(regularCustomer, regularMovies)).toMatchSnapshot();
});
