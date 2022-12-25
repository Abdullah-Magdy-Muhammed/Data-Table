window.addEventListener("load", function () {
    function Employee(_name, _postion, _office, _age) {
        this.name = _name;
        this.postion = _postion;
        this.office = _office;
        this.age = _age;
    }
    array = [
        new Employee("Abdullah", "Engineer", "Frence", 23),
        new Employee("Ammar", "Worker", "Egypt", 20),
        new Employee("Ahmed", "Officer", "Algeria", 27),
        new Employee("Abdelrahman", "Doctor", "Saudi Arabia", 32),
        new Employee("Shams", "Businessman", "Emirats", 47),
        new Employee("Amr", "Accountant", "United State", 23),
        new Employee("Moamen", "Vet", "Canda", 53),
        new Employee("Ayman", "Software Engineer", "Italy", 40),
        new Employee("Ramy", "Surgeon", "Egypt", 64),
        new Employee("Mazen", "Army Officer", "England", 35),
        new Employee("Hend", "Pilot", "Frence", 29),
        new Employee("Eman", "Electrical Engineer", "Egypt", 27),
        new Employee("Mahmoud", "Civil Engineer", "Germany", 34),
        new Employee("Hala", "Engineer", "Frence", 23),
        new Employee("Samir", "Worker", "Sweedan", 20),
        new Employee("Ahmed", "Officer", "Brazil", 27),
        new Employee("Abdelrahman", "Doctor", "Saudi Arabia", 32),
        new Employee("Shams", "Businessman", "Emirats", 33),
        new Employee("Sherif", "Biomedical Engineer", "Kawit", 25),

    ]

    var TableBody = document.getElementsByTagName("tbody")[0];
    function addTable(arr) {
        for (var i = 0; i < arr.length; i++) {
            createdTr = this.document.createElement("tr");
            tdName = this.document.createElement("td");
            tdPostion = this.document.createElement("td");
            tdOffice = this.document.createElement("td");
            tdAge = this.document.createElement("td");
            tdDelete = this.document.createElement("td");


            tdName.innerText = arr[i].name;
            tdPostion.innerText = arr[i].postion;
            tdOffice.innerText = arr[i].office;
            tdAge.innerText = arr[i].age;
            tdDelete.innerHTML = "<button class='del'>Delete</button";

            createdTr.appendChild(tdName);
            createdTr.appendChild(tdPostion);
            createdTr.appendChild(tdOffice);
            createdTr.appendChild(tdAge);
            createdTr.appendChild(tdDelete);
            TableBody.appendChild(createdTr);


            // Delete Any Row You Click!!
            button = tdDelete.getElementsByClassName('del')[0];
            button.addEventListener("click", function (e) {
                if (confirm("Are You Sure!")) {
                    e.target.parentElement.parentElement.remove();
                    var deletedItem = e.target.parentElement.parentElement.children[0].innerText;
                    for (var index = 0; index < array.length; index++) {
                        if (array[index].name == deletedItem) {
                            array.splice(i, 1);
                            break;

                        }

                    }

                }
            });
        }
    }
    function removeData() {
        rows = TableBody.children;
        for (var i = 0; rows.length; i++) {
            rows[0].remove();
        };
    }
    addTable(array);
    // Sort By Name
    counterName = 0;
    sortName = this.document.getElementById("name");
    sortName.addEventListener("click", function () {
        if (counterName) {

            sortedArray = array.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                } if (a.name < b.name) {
                    return 1;
                }
            });
            removeData();
            addTable(sortedArray);
            counterName = 0;



        } else {
            sortedArray = array.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                } if (a.name > b.name) {
                    return 1;
                }
            });
            removeData();
            addTable(sortedArray);
            counterName = 1;
        }
    })
    // Sort By Postion
    counterPostion = 0;
    sortPostion = this.document.getElementById("postion");
    sortPostion.addEventListener("click", function () {
        if (counterPostion) {
            sortedArray = array.sort(function (a, b) {
                if (a.postion > b.postion) {
                    return -1;
                } if (a.postion < b.postion) {
                    return 1;
                }
            });
            removeData();
            addTable(sortedArray);
            counterPostion = 0;

        } else {
            sortedArray = array.sort(function (a, b) {
                if (a.postion < b.postion) {
                    return -1;
                } if (a.postion > b.postion) {
                    return 1;
                }
            });
            removeData();
            addTable(sortedArray);
            counterPostion = 1;
        }
    })
    // Sort By Office
    counterOffice = 0
    sortOffice = this.document.getElementById("office");
    sortOffice.addEventListener("click", function () {
        if (counterOffice) {
            sortedArray = array.sort(function (a, b) {
                if (a.office > b.office) {
                    return -1;
                } if (a.office < b.office) {
                    return 1;
                }
            });
            removeData();
            addTable(sortedArray);
            counterOffice = 0;

        } else {
            sortedArray = array.sort(function (a, b) {
                if (a.office < b.office) {
                    return -1;
                } if (a.office > b.office) {
                    return 1;
                }
            });
            removeData();
            addTable(sortedArray);
            counterOffice = 1;
        }
    })
    // Sort By Age
    counterAge = 0;
    sortAge = this.document.getElementById("age");
    sortAge.addEventListener("click", function () {
        if (counterAge) {
            sortedArray1 = array.sort(function (a, b) {
                return b.age - a.age;
            });
            removeData();
            addTable(sortedArray1);
            counterAge = 0;

        } else {
            sortedArray = array.sort(function (a, b) {
                return a.age - b.age;
            });
            removeData();
            addTable(sortedArray);
            counterAge = 1;
        }

    })
    // search
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function () {
        searchArray = array.filter(function (v) {
            return v.name.toLowerCase().includes(input.value.trim());
        })
        removeData();
        addTable(searchArray);


    })

}); // end of load