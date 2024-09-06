const input = document.getElementById(uploadImage)
const preview = document.getElementById(previeimage)
input.addEventListener('change' , () => {
    const file = input.file[0]


    if(file){
        const reader = new FileReader()


        reader.onload = (e) =>{
            preview.src = e.target.result

        }
        reader.readAsDataURL(file)
    }




})
document.getElementById('uploadImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});