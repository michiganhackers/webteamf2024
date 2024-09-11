async function getStudentPages() {
    const response = await fetch('https://api.github.com/repos/michiganhackers/webteamf2024/contents/students');
    const data = await response.json();
    const studentList = document.getElementById('student-list');
    
    data.forEach(item => {
        if (item.type === 'dir') {
            const card = document.createElement('div');
            card.className = 'student-card';
            const link = document.createElement('a');
            link.href = `students/${item.name}`;
            link.textContent = item.name;
            card.appendChild(link);
            studentList.appendChild(card);
        }
    });
}

getStudentPages();