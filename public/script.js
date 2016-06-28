window.onload = function () {
    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdown = document.getElementById('markdown');

    var backupText;

    var convertTextToMarkdown = function () {
        var text = pad.value;
        var html = converter.makeHtml(text);
        markdown.innerHTML = html;
        backupText = text;
    }

    pad.addEventListener('input', convertTextToMarkdown);

    sharejs.open('home', 'text', function(error, doc) {
        doc.attach_textarea(pad);
        convertTextToMarkdown();
    });

    setInterval(function() {
        var text = pad.value;
        if (backupText !== text) {
            convertTextToMarkdown();
        }
    }, 1000);
}