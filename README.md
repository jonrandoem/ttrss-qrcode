ttrss-qrcode
==========

About
----------

An on-demand QR-Code generator plugin for TTRSS (http://tt-rss.org). The QR-Codes are generated through PHP and do not require any external service.

The QR-Codes are generated thanks to the [phpqrcode library](http://phpqrcode.sourceforge.net/).

Once created, any QR-Code is saved as a PNG on the server, and is cached for future serving. Make sur the "cache" subfolder of the plugin is writeable by your webserver.

This plugin has been tested on the version 1.10 of TTRSS.


Installation
----------

1. Download ZIP and unzip it
2. Rename the extracted folder from "ttrss-qrcode-master" to "qrcodegen"
3. Upload the "qrcodegen" folder inside the "plugins" folder of your TTRSS installation
4. Activate the plugin through the configuration area of TTRSS


Todo
----------

- Make the QR codes appear in a dialog instead of generating them inline of the article.



Credits
----------

* phpqrcode [Website](http://phpqrcode.sourceforge.net/) | [LGPL License](http://sourceforge.net/p/phpqrcode/git/ci/master/tree/LICENSE)


License
----------

This plugin is licensed under [MIT License](https://github.com/jonrandoem/ttrss-qrcode/blob/master/LICENSE).

