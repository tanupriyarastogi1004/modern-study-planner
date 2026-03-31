document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const quoteDisplay = document.getElementById('quote-display');
    const taskForm = document.getElementById('task-form');
    const taskSubjectInput = document.getElementById('task-subject');
    const taskTopicInput = document.getElementById('task-topic');
    const taskTitleInput = document.getElementById('task-title');
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Quotes Array
    const quotes = [
        "The secret of getting ahead is getting started.",
        "It always seems impossible until it's done.",
        "Don't watch the clock; do what it does. Keep going.",
        "Success is the sum of small efforts, repeated day-in and day-out.",
        "Action is the foundational key to all success.",
        "Believe you can and you're halfway there.",
        "Your future is created by what you do today, not tomorrow.",
        "Push yourself, because no one else is going to do it for you."
    ];

    // State
    let taskState = [];
    try {
        const stored = localStorage.getItem('studyPlannerTasks');
        if (stored) taskState = JSON.parse(stored);
    } catch(e) {
        console.error("Could not load tasks from localStorage");
    }
    
    let isDarkMode = localStorage.getItem('studyPlannerTheme') === 'dark';

    // Initialize Theme
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }

    // Set Random Quote
    const setRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = `"${quotes[randomIndex]}"`;
    };

    // Toggle Theme
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('studyPlannerTheme', 'dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('studyPlannerTheme', 'light');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    });

    // Save Tasks
    const saveTasks = () => {
        localStorage.setItem('studyPlannerTasks', JSON.stringify(taskState));
        updateProgress();
    };

    // Update Progress
    const updateProgress = () => {
        if (taskState.length === 0) {
            progressBar.style.width = '0%';
            progressText.textContent = '0%';
            return;
        }

        const completedTasks = taskState.filter(task => task.completed).length;
        const percentage = Math.round((completedTasks / taskState.length) * 100);
        
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
    };

    // Render Tasks
    const renderTasks = () => {
        taskList.innerHTML = '';
        
        if (taskState.length === 0) {
            taskList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); font-size: 0.95rem; margin-top: 1rem;">No tasks yet. Add one above to get started!</p>';
            return;
        }

        taskState.forEach((task, index) => {
            const taskEl = document.createElement('div');
            taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            taskEl.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-index="${index}" aria-label="Mark task complete">
                <div class="task-content">
                    <div class="task-header">
                        <span>${escapeHtml(task.subject)}</span> &nbsp;&bull;&nbsp; <span>${escapeHtml(task.topic)}</span>
                    </div>
                    <div class="task-title">${escapeHtml(task.title)}</div>
                </div>
                <button class="delete-btn" data-index="${index}" aria-label="Delete Task" title="Delete Task">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </button>
            `;

            taskList.appendChild(taskEl);
        });

        // Add event listeners for checkboxes and delete buttons
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const index = e.target.getAttribute('data-index');
                const isChecked = e.target.checked;
                taskState[index].completed = isChecked;
                saveTasks();
                
                // Update UI directly instead of full re-render to preserve focus
                const taskItem = e.target.closest('.task-item');
                if (isChecked) {
                    taskItem.classList.add('completed');
                } else {
                    taskItem.classList.remove('completed');
                }
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const btnEl = e.target.closest('.delete-btn');
                const index = btnEl.getAttribute('data-index');
                taskState.splice(index, 1);
                saveTasks();
                renderTasks();
            });
        });
    };

    // Add Task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const subject = taskSubjectInput.value.trim();
        const topic = taskTopicInput.value.trim();
        const title = taskTitleInput.value.trim();

        if (subject && topic && title) {
            taskState.push({
                subject,
                topic,
                title,
                completed: false,
                id: Date.now().toString()
            });

            // Keep subject and clear topic + title for next entry optionally
            taskTitleInput.value = '';
            
            saveTasks();
            renderTasks();
        }
    });

    // Helper to prevent XSS
    function escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe.toString()
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }

    // Init
    setRandomQuote();
    renderTasks();
    updateProgress();
});
