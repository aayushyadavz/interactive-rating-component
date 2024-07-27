const submitBtn = document.querySelector(".submit-btn")
const thankYouCard = document.querySelector(".card-two")
const ratingBtns = document.querySelectorAll(".rating-btn")
const ratingNum = document.querySelector(".rating-num")
let selectedRating = null

ratingBtns.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        const ratingNumbers = e.currentTarget.textContent
        ratingNum.innerHTML = ratingNumbers
        selectedRating = ratingNumbers // Updating variable so that we can use it later on
        // Remove active class from all buttons
        ratingBtns.forEach((btns) => {
            btns.classList.remove("rating-active");
        });
        // Add active class to the clicked button
        e.currentTarget.classList.add("rating-active")
    });
});

submitBtn.addEventListener("click", function(){
    if (!selectedRating) {
        alert("Please select a rating first!")
        return // To exit the current function so that rest code doesn't executes
    }
    thankYouCard.classList.toggle("card-active")
});
