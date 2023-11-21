// Events will be sent when someone follows
// Please use event listeners to run functions.

document.addEventListener("goalLoad", function (obj) {
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  console.log(obj.detail);
  $("#title").html(obj.detail.title);
  $("#goal-current").text(obj.detail.amount.current);
  $("#goal-total").text(obj.detail.amount.target);
  $("#goal-end-date").text(obj.detail.to_go.ends_at);

  // Get current and total values
  var current = obj.detail.amount.current;
  var total = obj.detail.amount.target;

  // Call the function to update the progress bar
  updateProgressBar(current, total);
});

document.addEventListener("goalEvent", function (obj) {
  // obj.detail will contain information about the goal
  console.log(obj.detail);

  // Get current and total values
  var current = obj.detail.amount.current;
  var total = obj.detail.amount.target;

  // Call the function to update the progress bar
  updateProgressBar(current, total);
});

// Function to update the progress bar based on current and total values
function updateProgressBar(current, total) {
  // Calculate the percentage completion
  var percentage = (current / total) * 100;

  // Set the stroke-dashoffset to the calculated percentage
  var progressBarCircle = document.querySelector(".circle");
  progressBarCircle.style.animation = "none"; // Pause the animation
  progressBarCircle.style.strokeDashoffset = 440 - percentage * 4.4;
  void progressBarCircle.offsetWidth; // Trigger reflow to apply the changes immediately
  progressBarCircle.style.animation = null; // Resume the animation

  // Update the displayed values
  $("#goal-current").text(current);
}
