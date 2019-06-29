<?php
class QrcodeGen extends Plugin {

	private $host;

	function init($host) {
		$this->host = $host;

		$host->add_hook($host::HOOK_ARTICLE_BUTTON, $this);
	}

	function about() {
		return array(1.0,
			"Adds buttons that generate QR-Codes on each article",
			"jonrandoem");
	}

	function get_js() {
		return file_get_contents(dirname(__FILE__) . "/init.js");
	}

	function hook_article_button($line) {
		$article_id = $line["id"];

		$rv = "<img src=\"plugins.local/qrcodegen/qrcode.png\"
			class='tagsPic' style=\"cursor : pointer\"
			onclick=\"generateQrCode($article_id)\"
			title='".__('Generate a QR Code')."'>";

		return $rv;
	}

	function getQr() {
		$id = db_escape_string($_REQUEST['id']);

		$article_link = '';
		$result = db_query("SELECT title, link
				FROM ttrss_entries, ttrss_user_entries
				WHERE id = '$id' AND ref_id = id AND owner_uid = " .$_SESSION['uid']);
		if (db_num_rows($result) != 0) {
			$article_link = db_fetch_result($result, 0, 'link');
		}

		$pngPath = dirname(__FILE__) . '/cache/' . $id . '.png';
		if (!file_exists($pngPath)) {
			require_once(dirname(__FILE__) . '/phpqrcode/qrlib.php');
			QRcode::png($article_link, $pngPath);
		}
		echo '<div><img src="plugins.local/qrcodegen/cache/' . $id . '.png" style="display: block; margin: 0 auto;"></div>';
		echo "<div style='text-align : center'>";
		print "<button dojoType=\"dijit.form.Button\" onclick=\"dijit.byId('qrCodeArticleDlg').hide()\">".__('Close this dialog')."</button>";
		print "</div>";
	}

	function api_version() {
		return 2;
	}
}
?>
