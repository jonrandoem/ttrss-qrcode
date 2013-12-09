function generateQrCode(id) {
	try {
		var query = "?op=pluginhandler&plugin=qrcodegen&method=getQr&id=" + param_escape(id);

		console.log(query);

		new Ajax.Request("backend.php", {
			parameters: query,
			onComplete: function(transport) {
				var reply = transport.responseText;

				var elem = $("CWRAP-" + id);

				if (elem) {
					elem.innerHTML = elem.innerHTML + '<br><br>' + reply;
				}
			}
		});


	} catch (e) {
		exception_error("generateQrCode", e);
	}
}

