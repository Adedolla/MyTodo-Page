$(document).ready(function() {
    // Load tasks on page load
    loadTasks();

    // Function to add a new task
    $('#addTask').click(function() {
        var taskText = $("#New-task").val();
        if (taskText !== "") {
            addTask(taskText);
            $("#New-task").val("");
        } else {
            alert("Please enter a task");
        }
    });

    // Function to add a task to the list and local storage
    function addTask(taskText) {
        $("#Task-list").append(`
            <li>
                <span class="task-text">${taskText}</span>
                <button class="EditBtn">Edit</button>
                <button class="RemoveBtn">Remove</button>
            </li>`);
        saveTasks();
    }

    // Function to remove a task
    $(document).on('click', '.RemoveBtn', function() {
        $(this).closest('li').remove();
        saveTasks();
    });

    // Function to edit a task
    $(document).on('click', '.EditBtn', function() {
        var taskTextSpan = $(this).siblings('.task-text');
        var currentText = taskTextSpan.text();
        var newText = prompt("Edit your task", currentText);
        if (newText !== null && newText !== "") {
            taskTextSpan.text(newText);
            saveTasks();
        }
    });

    // Save tasks to local storage
    function saveTasks() {
        var tasks = [];
        $('#Task-list li').each(function() {
            tasks.push($(this).find('.task-text').text());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from local storage
    function loadTasks() {
        var tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(function(task) {
                addTask(task);
            });
        }
    }

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
