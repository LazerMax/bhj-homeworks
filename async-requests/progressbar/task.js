const form = document.getElementById("form");
const progress = document.getElementById( 'progress' );
progress.value = 0.0;

    document.forms.upload.onsubmit = function() {
        let input = this.elements.file;
        let file = input.files[0];
        if (file) {
            upload(file);
        }
        return false;
    }


function upload(file) {
    let number = 0;
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        let eventPercent = event.loaded/event.total*100;
        console.log(eventPercent);
        if(eventPercent - number > 10){
            progress.value += 0.1;
            number+=10;
        }
    }
    progress.value += 0.1;
    xhr.onload = xhr.onerror = function() {
        if (this.status == 200) {
            console.log("success");
        } else {
            console.log("error " + this.status);
        }
    };

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);
    xhr.send(file);

}
