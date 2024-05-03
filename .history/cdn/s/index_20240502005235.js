$(document).ready(function () {
    // Function to fetch user's profile from API
    var accessToken = localStorage.getItem("access_token");

    // Check if access token is available
    if (!accessToken) {
        console.error("Access token not found.");
        // Handle the case where access token is not available
        // For example, redirect the user to the login page
        window.location.href = "/login";
        return;
    }

    // Make a GET request to fetch user's profile
    $.ajax({
        url: "https://ksdfj-production.up.railway.app/api/user/profile/",
        type: "GET",
        headers: {
            "Authorization": "Bearer " + accessToken
        },
        success: function (response) {
            // Handle successful response
            // Assuming the response contains user profile data
            console.log("User profile:", response);
            // You can access specific properties like bio
            console.log("Bio:", response.username);
        
            // Update HTML element with class 'username' with the user's bio
            $('.username').text(response.username);
        },
        
        error: function (xhr, status, error) {
            // Handle error response
            console.error("Error fetching user profile:", error);
            // Depending on the error, you might want to handle it gracefully
            // For example, display a message to the user
        }
    });
});