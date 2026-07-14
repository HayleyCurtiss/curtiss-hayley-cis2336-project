function showMonth(month) {
    const months = document.querySelectorAll('.calendar-month');

    months.forEach(function(m) {
        m.style.display = 'none';
    });

    const target = document.getElementById('calendar-' + month);
    if (target) {
        target.style.display = 'block';
    }
}

document.getElementById("artFile").addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("previewImage").src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById("artSubmissionForm").addEventListener("submit", (e) => {
    e.preventDefault();
});