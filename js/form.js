$(document).ready(function() {
    $('#defaultForm').formValidation({
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required'
                        }
                    }
                },
                datebirth: {
                    validators: {
                        notEmpty: {
                            message: 'The date of birth is required'
                        }
                    }
                },
                address: {
                    validators: {
                        notEmpty: {
                            message: 'The address is required'
                        }
                    }
                },
                employmentStatus: {
                    validators: {
                        notEmpty: {
                            message: 'The employment status is required'
                        }
                    }
                },
                ordinaryhours: {
                    validators: {
                        notEmpty: {
                            message: 'The ordinary hours of work is required'
                        }
                    }
                }
               
            }
    }).on('success.form.fv', function(e) {
        e.preventDefault();

        var $form = $(e.target),                    
            fv    = $form.data('formValidation');  

        // Send data to back-end
        $.ajax({
            url: 'form.php',
            method: "POST",
            data: $form.serialize(),
            dataType: 'json'
        }).success(function(response) {
            // Clear the form
                $form.formValidation('resetForm', true);

                 // Show the message
                response.result === 'error'
                    ? $('#alertContainer')
                        .removeClass('alert-success')
                        .addClass('alert-warning')
                        .html('Sorry, cannot send the message')
                        .show()
                    : $('#alertContainer')
                        .removeClass('alert-warning')
                        .addClass('alert-success')
                        .html('Your message has been successfully sent')
                        .show();
        });
    });


});