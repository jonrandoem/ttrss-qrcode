function generateQrCode(id) {
	try {
		var query = "?op=pluginhandler&plugin=qrcodegen&method=getQr&id=" + param_escape(id);
		new Ajax.Request("backend.php", {
			parameters: query,
			onComplete: function(transport) {
				var reply = transport.responseText;
				var elem = $("CWRAP-" + id);
				if (elem) {
					var el = $("QR-" + id);
					if ( el ) {
						el.innerHTML = '<br><br>' + reply;
					} else {
						elem.innerHTML = elem.innerHTML + '<div id="QR-' + id + '"><br><br>' + reply + '</div>';
					}
				}
			}
		});
	} catch (e) {
		exception_error("generateQrCode", e);
	}
}

