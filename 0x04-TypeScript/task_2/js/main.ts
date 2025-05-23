interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

class Director implements DirectorInterface {
    workFromHome(): string {
        return "working from home";
    };
    getCoffeeBreak(): string {
        return "Getting a coffee breal";
    };
    workDirectorTasks(): string {
        return "Getting to director tasks";
    };
};

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    };
    getCoffeeBreak(): string {
        return "Cannot get a coffee breal";
    };
    workTeacherTasks(): string {
        return "Getting to work";
    };
};

function createEmployee(salary: string | number): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    };
    return new Director();
};


// isDirector function

function isDirector(employee: Director| Teacher): employee is Director {
    return employee instanceof Director;
};

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  };
};


// 7
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  };
};
