# Study Planner Full Source Code

Since Git isn't available to push directly to GitHub, you have two options to export and use this project:

### Option 1: Download the ZIP file
I have already bundled your entire project into a `.zip` file. You can download or move it by navigating to this path on your computer:
> [!TIP]
> **`C:\Users\Lenovo\.gemini\antigravity\scratch\StudyPlannerExport.zip`**

### Option 2: Copy the Code Manually
If you want to manually create this project in another IDE (like VS Code) or upload it directly to a GitHub repository from your browser, you can copy the full code of the three core files below:

---

### 1. `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Study Planner</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header>
            <div class="header-top">
                <h1>Study Planner</h1>
                <button id="theme-toggle" class="icon-btn" aria-label="Toggle Dark Mode">
                    <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    <svg id="sun-icon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                </button>
            </div>
            <p id="quote-display" class="quote">"The secret of getting ahead is getting started."</p>
        </header>

        <section class="progress-section">
            <div class="progress-header">
                <h2>Daily Progress</h2>
                <span id="progress-text">0%</span>
            </div>
            <div class="progress-bar-container">
                <div id="progress-bar" class="progress-bar" style="width: 0%"></div>
            </div>
        </section>

        <section class="task-form-section">
            <form id="task-form">
                <div class="input-group">
                    <input type="text" id="task-subject" placeholder="Subject (e.g., Math)" required>
                    <input type="text" id="task-topic" placeholder="Topic (e.g., Algebra)" required>
                </div>
                <div class="input-group">
                    <input type="text" id="task-title" placeholder="What do you need to study?" required>
                    <button type="submit" class="primary-btn">Add Task</button>
                </div>
            </form>
        </section>

        <section class="task-list-section">
            <h2>Your Tasks</h2>
            <div id="task-list" class="task-list">
                <!-- Tasks will be dynamically injected here -->
            </div>
        </section>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 2. `styles.css`
```css
:root {
    --bg-color: #f3f4f6;
    --container-bg: #ffffff;
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --accent-color: #6366f1;
    --accent-hover: #4f46e5;
    --success-color: #10b981;
    --border-color: #e5e7eb;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --border-radius: 12px;
    --transition: all 0.3s ease;
}

[data-theme="dark"] {
    --bg-color: #0f172a;
    --container-bg: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent-color: #818cf8;
    --accent-hover: #6366f1;
    --border-color: #334155;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.5;
    transition: var(--transition);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
}

.app-container {
    background-color: var(--container-bg);
    max-width: 600px;
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    padding: 2rem;
    transition: var(--transition);
}

header {
    margin-bottom: 2rem;
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
}

.icon-btn {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.icon-btn:hover {
    background-color: var(--border-color);
    color: var(--text-primary);
}

.hidden {
    display: none !important;
}

.quote {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-style: italic;
}

.progress-section {
    margin-bottom: 2rem;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
}

.progress-bar-container {
    width: 100%;
    height: 10px;
    background-color: var(--border-color);
    border-radius: 5px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background-color: var(--success-color);
    border-radius: 5px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.task-form-section {
    margin-bottom: 2rem;
}

#task-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.input-group {
    display: flex;
    gap: 1rem;
}

.input-group input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1.5px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.95rem;
    transition: var(--transition);
}

.input-group input:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.primary-btn {
    padding: 0.8rem 1.5rem;
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    white-space: nowrap;
}

.primary-btn:hover {
    background-color: var(--accent-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.primary-btn:active {
    transform: translateY(0);
}

.task-list-section h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.task-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.task-item {
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    background-color: var(--bg-color);
    border: 1.5px solid transparent;
    border-radius: var(--border-radius);
    transition: var(--transition);
    animation: slideIn 0.3s ease;
}

.task-item:hover {
    box-shadow: var(--shadow-sm);
    border-color: var(--border-color);
}

.task-checkbox {
    margin-top: 0.25rem;
    margin-right: 1rem;
    appearance: none;
    width: 22px;
    height: 22px;
    border: 2px solid var(--text-secondary);
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: var(--transition);
}

.task-checkbox:checked {
    background-color: var(--success-color);
    border-color: var(--success-color);
}

.task-checkbox:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    margin-top: -1px;
}

.task-content {
    flex: 1;
}

.task-header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent-color);
}

.task-title {
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--text-primary);
    transition: var(--transition);
}

.task-item.completed .task-title {
    text-decoration: line-through;
    color: var(--text-secondary);
}

.delete-btn {
    background: transparent;
    border: none;
    color: #ef4444;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: var(--border-radius);
    opacity: 0;
    transition: var(--transition);
}

.task-item:hover .delete-btn {
    opacity: 1;
}

.delete-btn:hover {
    background-color: rgba(239, 68, 68, 0.1);
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
    .input-group {
        flex-direction: column;
    }
    .app-container {
        padding: 1.5rem;
    }
    .primary-btn {
        width: 100%;
    }
}
```

### 3. `script.js`
```javascript
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
```
