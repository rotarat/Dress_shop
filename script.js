function addReview ()
{
    var names = [];
    var dates = [];
    var reviews = [];
    
    var currRow = 1;
    var reviewEl = 0;
    var reviewTable = document.getElementById('display');
    var newRow = reviewTable.InsertRow(currRow);
    var nameCell = newRow.InsertCell(0);
    var dateCell = newRow.InsertCell(1);
    var reviewCell = newRow.InsertCell(2);

    names[x] = document.getElementById("review-name").value;
    dates[x] = document.getElementById("review-date").value;
    review[x] = document.getElementById("review").value;

    nameCell.innerHTML = names[reviewEl];
    dateCell.innerHTML = dates[reviewEl];
    reviewCell.innerHTML = reviews[reviewEl];
    
    currRow++;
    reviewEl++;
}

function alert () 
{
    var name = document.getElementById('name-order').value;
    alert(name + ", благодаря за поръчката!");
}

// function addReview () 
// {
//     var new_name = document.getElementById('review-name').value;
//     var new_date = document.getElementById('review-date').value;
//     var new_review = document.getElementById('review').value;

//     var li = document.createElement("li");

//     var nameDiv = document.createElement("div");
//     nameDiv.appendChild(new_name);
//     li.appendChild(nameDiv);

//     var dateDiv = document.createElement("div");
//     nameDiv.appendChild(new_date);
//     li.appendChild(dateDiv);

//     var reviewDiv = document.createElement("div");
//     nameDiv.appendChild(review);
//     li.appendChild(reviewDiv);

//     var ul = document.getElementById("review-container").getElementsByTagName("ul")[0];
//     ul.insertBefore(li, ul.getElementsByTagName("li") [0]);
// }
