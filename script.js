
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dataForm");
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        if (foodCheckboxes.length < 2) {
            alert("Select at least two food options.");
            return;
        }

        const food = [];
        foodCheckboxes.forEach(function (checkbox) {
            food.push(checkbox.value);
        });

        const newRow = table.insertRow(table.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        const cell9 = newRow.insertCell(8);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = Email;
        cell4.innerHTML = address;
        cell5.innerHTML = pincode;
        cell6.innerHTML = gender;
        cell7.innerHTML = food.join(", ");
        cell8.innerHTML = state;
        cell9.innerHTML = country;

        form.reset();
    });
});
