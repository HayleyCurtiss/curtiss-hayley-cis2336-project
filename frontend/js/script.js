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


const artFile = document.getElementById("artFile");

if (artFile) {
    artFile.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById("previewImage").src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });
}


const artForm = document.getElementById("artSubmissionForm");

if (artForm) {
    artForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}


const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        const faq = button.parentElement;

        faq.classList.toggle("expanded");

        if (faq.classList.contains("expanded")) {
            button.textContent = "Hide Answer";
        } else {
            button.textContent = "Show Answer";
        }
    });
});