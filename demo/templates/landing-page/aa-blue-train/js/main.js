$( document ).ready(function() {
    document.getElementById("submit-competition").click(function() {
    	ga('send', 'event', { eventCategory: 'Blue train campaign', eventAction: 'Click', eventLabel: 'Join now'});
    });
});


 function validate() {
        if (document.getElementById('date').checked) {
            document.getElementById("terms").disabled = false;
        }
        if (document.getElementById('terms').checked) {
         document.getElementById("submit-competition").disabled = false;
         }
    }
 