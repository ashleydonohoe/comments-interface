var actionObject = {
    "smiley": '<i class="fa fa-smile-o" aria-hidden="true"></i>',
    "frown": '<i class="fa fa-frown-o" aria-hidden="true"></i>',
    "meh": '<i class="fa fa-meh-o" aria-hidden="true"></i>',
    "heart": '<i class="fa fa-heart" aria-hidden="true"></i>',
    "thumbsUp": '<i class="fa fa-thumbs-up" aria-hidden="true"></i>',
    "thumbsDown": '<i class="fa fa-thumbs-down" aria-hidden="true"></i>',
    "break": "<br>"
};

var commentForm = document.getElementById("comment-box");
var previewArea = document.getElementById("preview-box");
var previewButton = document.getElementById("preview-comment");
var clearButton = document.getElementById("clear-comment");

clearButton.addEventListener("click", clearCommentBox, false);
previewButton.addEventListener("click", showPreview, false);

var commentActions = document.querySelectorAll("#icons li");

for(var i = 0; i < commentActions.length;i++) {
    commentActions[i].addEventListener("click", getAction, false);
};

function getAction() {
    var action = this.dataset.action;
    addCode(action);
}

function addCode(action) {
    if(action === "addLink") {
        var link = prompt("Enter your link below");
        var title = prompt("Enter the link title below");
        commentForm.value += "<a href='" + link + "'>" + title + "</a>";
    } else if(action === "addImage") {
        var imageURL = prompt("Enter the image URL below:");
        commentForm.value += '<img style="display:block;" src="' + imageURL + '">';
    } else {
        commentForm.value += actionObject[action];
    }
}

function showPreview() {
   var newHTML = "<p>" + commentForm.value + "</p>";
    console.log(newHTML);
    previewArea.innerHTML = newHTML;
}

function clearCommentBox() {
    commentForm.value = "";
    previewArea.innerHTML = "";
}
