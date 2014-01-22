'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Meow");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(changeProject);
}

function projectClick(e) {
	// prevent the page from reloading
	e.preventDefault();
	// In an event handler, $(this) refers to the object that triggered the event
	//$(this).css("background-color", "#7fff00");

	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(containingProject).fadeOut();
    }
}

function changeProject(e) {
	e.preventDefault();

	var projectID = $("#project").val();
	var description = $("#description").val();

	$(projectID).animate({
		width: $("#width").val()
	});
	

	if (description.length != 0) { 
		if ($(projectID).find(".project-description").length == 0) // If there isn't any descriptions
			$(projectID).append("<div class='project-description'><p>" + description + "</p></div>");
		else // This will replace the old description with the new one
			$(projectID).find(".project-description").html("<p>" + description + "</p>");
	}
}