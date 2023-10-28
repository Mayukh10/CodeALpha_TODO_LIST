document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let li = document.createElement('li');
    li.textContent = document.getElementById('input').value;
    li.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });

    document.getElementById('list').appendChild(li);
    document.getElementById('input').value = '';
});