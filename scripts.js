let text = "The difference between ordinary and extraordinary is just that one little extra.";



function type(i) {
    function main() {
        i++;
        document.getElementById("myP").innerHTML += (text[i]);
        type(i);
    }
    if (i < text.length - 1) {
        let timeout = setTimeout(main, 500);

        if (text[i] == " ") {
            clearTimeout(timeout);
            setTimeout(main, 10);
        }
    }
}
type(-1);