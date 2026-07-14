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