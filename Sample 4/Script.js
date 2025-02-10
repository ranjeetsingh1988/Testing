function showImage() {
    const imgElement = document.getElementById('myImage');
    console.log("imgElement : ",imgElement)
    imgElement.src = 'https://photos.google.com/photo/AF1QipMnWZReQNwInC4rVNoCLMvGB9aCRgBGgYXLNF-Y'; // Replace with your image URL
    imgElement.style.display = 'block'; // Show the image
}