function generateQrCode(id) {
	try {
		if (!id) {
			var ids = getSelectedArticleIds2();
			if (ids.length == 0) {
				alert(__("No articles are selected."));
				return;
			}
			id = ids.toString();
		}

		var query = "backend.php?op=pluginhandler&plugin=qrcodegen&method=getQr&id=" + encodeURIComponent(id);
		if (dijit.byId("qrCodeArticleDlg")) {
			dijit.byId("qrCodeArticleDlg").destroyRecursive();
		}

		dialog = new dijit.Dialog({
			id: "qrCodeArticleDlg",
			title: __("QR code for article"),
			style: "width: 215px; height: 215px;",
			href: query
		});

		dialog.show();
		/*
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
		*/
	} catch (e) {
		exception_error("generateQrCode", e);
	}
}

