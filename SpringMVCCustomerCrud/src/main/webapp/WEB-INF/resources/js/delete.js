// to show delete alert and then popup message
$(document).ready(function() {
	$('.delete-link').click(function(e) {
		e.preventDefault();
		var deleteUrl = $(this).attr('href');

		$('#deleteConfirmationModal').modal('show');

		$('#confirmDeleteBtn').off('click').on('click', function() {
			$('#deleteConfirmationModal').modal('hide');

			// Show the customized alert modal
			$('#customAlertMessage').text('Data deleted successfully!');
			$('#customAlertModal').modal('show');

			// Automatically hide the alert modal after 1 second
			setTimeout(function() {
				$('#customAlertModal').modal('hide');
				window.location.href = deleteUrl;
			}, 1000); // 1000 milliseconds (1 second) delay
		});
	});
});
