// Events will be sent when someone follows
document.addEventListener("goalLoad", function (obj) {
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  console.log(obj.detail);
  $("#title").html(obj.detail.title);
  $("#goal-current").text(obj.detail.amount.current);
  $("#goal-total").text(obj.detail.amount.target);

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

  var circle = document.querySelector(".custom-circle");
  var rect = circle.getBoundingClientRect();
  var radius = rect.width / 2; // Assuming the circle is a perfect circle
  var circumference = 2 * Math.PI * radius;

  // Calculate the stroke-dasharray based on the percentage
  var dasharray = (circumference * percentage) / 100;
  var dashoffset = circumference - dasharray;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = dashoffset;

  // Update the displayed values
  $("#goal-current").text(current);
}
