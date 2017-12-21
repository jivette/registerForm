(function() {
 var flickerAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/corporations/fortune500.json";
 $.getJSON( flickerAPI, {
   format: "json"
 })
   .done(function( data ) {

$.each(data.companies,function(key, value) 
{
   $("#registered").append('<option value=' + key + '>' + value + '</option>');
});


   });
})();
