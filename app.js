var actionObject = {
    "smiley": '<i class="fa fa-smile-o" aria-hidden="true"></i>',
    "frown": '<i class="fa fa-frown-o" aria-hidden="true"></i>',
    "meh": '<i class="fa fa-meh-o" aria-hidden="true"></i>',
    "heart": '<i class="fa fa-heart" aria-hidden="true"></i>',
    "thumbsUp": '<i class="fa fa-thumbs-up" aria-hidden="true"></i>',
    "thumbsDown": '<i class="fa fa-thumbs-down" aria-hidden="true"></i>',
    "addLink": '<a href=""></a>',
    "addImage": '<img src=">'
};

var commentActions = document.querySelectorAll("#icons li");
console.log(commentActions);

for(var i = 0; i < commentActions.length;i++) {
    commentActions[i].addEventListener("click", addToComment, false);
};

function addToComment() {
    var action = this.dataset.action;
    addCode(action);
}

function addCode(action) {
    console.log("You want to " + action);
    console.log(actionObject[action]);
}