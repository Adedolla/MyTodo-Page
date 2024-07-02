$(document).ready(function() {
    // Function to add a new task
    $('#addTask').click(function() {
        var taskText = $("#New-task").val();
        if(taskText !== "") {
            $("#Task-list").append(`
                <li>
                    <span class="task-text">${taskText}</span>
                    <button class="EditBtn">Edit</button>
                    <button class="RemoveBtn">Remove</button>
                </li>`);
            $("#New-task").val("");
        } else {
            alert("Please enter a task");
        }
    });

    // Function to remove a task
    $(document).on('click', '.RemoveBtn', function() {
        $(this).closest('li').remove();
    });

    // Function to edit a task
    $(document).on('click', '.EditBtn', function() {
        var taskTextSpan = $(this).siblings('.task-text');
        var currentText = taskTextSpan.text();
        var newText = prompt("Edit your task", currentText);
        if (newText !== null && newText !== "") {
            taskTextSpan.text(newText);
        }
    });

    // Dark mode toggle
    if (localStorage.getItem('mode') === 'dark') {
        $('body').addClass('dark-mode');
    } else {
        $('body').addClass('light-mode');
    }

    $('#toggle-mode').click(function() {
        $('body').toggleClass('dark-mode light-mode');

        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'light');
        }
    });

    // Footer fade-in animation
    $('#footer').hide().fadeIn(2000);
});
