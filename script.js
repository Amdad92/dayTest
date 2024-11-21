document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('dayForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let day = document.getElementById("day").value.trim();

        if (!day) {
            document.getElementById("daycheck").innerHTML = "অনুগ্রহ করে একটি সঠিক দিন লিখুন।";
            return;
        }

        if (day === "শুক্রবার" || day === "শনিবার") {
            document.getElementById("daycheck").innerHTML = "কি মজা! আজকে ছুটির দিন।";
        } else if (
            day === "রবিবার" ||
            day === "সোমবার" ||
            day === "মঙ্গলবার" ||
            day === "বুধবার" ||
            day === "বৃহস্পতিবার"
        ) {
            document.getElementById("daycheck").innerHTML = "উহহ! আজকে আবার অফিসে যাওয়া লাগবে।";
        } else {
            document.getElementById("daycheck").innerHTML = "অনুগ্রহ করে সঠিক নাম লিখুন (যেমনঃ শুক্রবার)।";
        }
        document.getElementById("day").value = "";
    });
});
