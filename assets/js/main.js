/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Hack: Enable IE flexbox workarounds.
	if (browser.name == 'ie')
		$body.addClass('is-ie');

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Forms.

	// Hack: Activate non-input submits.
	$('form').on('click', '.submit', function (event) {

		// Stop propagation, default.
		event.stopPropagation();
		event.preventDefault();

		// Submit form.
		$(this).parents('form').submit();

	});

	// Sidebar.
	if ($sidebar.length > 0) {

		var $sidebar_a = $sidebar.find('a');

		$sidebar_a
			.addClass('scrolly')
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$sidebar_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '-20vh',
					bottom: '-20vh',
					initialize: function () {

						// Deactivate section.
						$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($sidebar_a.filter('.active-locked').length == 0) {

							$sidebar_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			// If <=large, >small, and sidebar is present, use its height as the offset.
			if (breakpoints.active('<=large') &&
				!breakpoints.active('<=small') &&
				$sidebar.length > 0)
				return $sidebar.height();

			return 0;

		}
	});

	// Spotlights.
	$('.spotlights > section')
		.scrollex({
			mode: 'middle',
			top: '-10vh',
			bottom: '-10vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		})
		.each(function () {

			var $this = $(this),
				$image = $this.find('.image'),
				$img = $image.find('img'),
				x;

			// Assign image.
			$image.css('background-image', 'url(' + $img.attr('src') + ')');

			// Set background position.
			if (x == $img.data('position'))
				$image.css('background-position', x);

			// Hide <img>.
			$img.hide();

		});

	// Features.
	$('.features')
		.scrollex({
			mode: 'middle',
			top: '-20vh',
			bottom: '-20vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		});

	function formatBytes(a, b) {
		if (0 == a) return "0 Bytes";
		var c = 1024,
			d = b || 2,
			e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
			f = Math.floor(Math.log(a) / Math.log(c));
		return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
	}

	function GetAds() {
		var amznurls = [];
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07HCXQZ4P&asins=B07HCXQZ4P&linkId=a721918852fcba93be35f466e37c56a8&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07TGDC67L&asins=B07TGDC67L&linkId=3f8e6007f864b5913532b12ca000ecf0&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B075BCSFNN&asins=B075BCSFNN&linkId=db94df17d4daa2cf077e8b975e42a4ae&show_border=true&link_opens_in_new_window=true"></iframe>');
		var amznsec = $("#amznads");
		amznurls.forEach(function (aurl) {
			amznsec.append($(aurl));
		});
	}

	function GetDownloads() {
		$.getJSON('https://api.github.com/repos/xeonax/ANXCamera/releases', function (data) {
			data.forEach(function (release) {
				var releasesplit = release.name.split(".");
				var pub_date = release.published_at;
				//msg += release.name + ":\r\n";
				// msg += "tag_name:" + release.tag_name + "\r\n";
				release.assets.forEach(function (asset) {
					//msg += "[" + asset.name + "](" + asset.browser_download_url + ") [";
					var rtype = "";
					if (asset.name.includes("Magisk"))
						rtype = "Magisk";

					if (asset.name.includes("Unity"))
						rtype = "Magisk+TWRP";

					if (asset.name.includes("StockLib"))
						rtype = "Magisk+TWRP";

					downloads.push({
						developer: "AEonAX",
						device: releasesplit[0],
						name: asset.name,
						type: rtype,
						url: asset.browser_download_url,
						downloads: asset.download_count,
						pubdate: pub_date,
						size: asset.size,
					});
				});
			});
			GetLuffitys();
		});
	}

	function GetLuffitys() {
		$.getJSON('https://api.github.com/repos/Luffitys/ANXCamera_APK/releases', function (data) {
			data.forEach(function (release) {
				var releasesplit = release.name.split(".");
				var pub_date = release.published_at;
				release.assets.forEach(function (asset) {
					var rtype = "";
					if (asset.name.includes("Magisk"))
						rtype = "Magisk";

					if (asset.name.includes("Unity"))
						rtype = "Magisk+TWRP";

					if (asset.name.includes("StockLib"))
						rtype = "Magisk+TWRP";

					downloads.push({
						developer: "Luffitys",
						device: releasesplit[0],
						name: asset.name,
						type: rtype,
						url: asset.browser_download_url,
						downloads: asset.download_count,
						pubdate: pub_date,
						size: asset.size,
					});
				});
			});
			GetLuffitysOld();
		});
	}

	function GetLuffitysOld() {
		$.getJSON('https://api.github.com/repos/Luffitys/ANXCamera_APK_OLD/releases', function (data) {
			data.forEach(function (release) {
				var releasesplit = release.name.split(".");
				var pub_date = release.published_at;
				release.assets.forEach(function (asset) {
					var rtype = "";
					if (asset.name.includes("Magisk"))
						rtype = "Magisk";

					if (asset.name.includes("Unity"))
						rtype = "Magisk+TWRP";

					if (asset.name.includes("StockLib"))
						rtype = "Magisk+TWRP";

					downloads.push({
						developer: "Luffitys",
						device: releasesplit[0],
						name: asset.name,
						type: rtype,
						url: asset.browser_download_url,
						downloads: asset.download_count,
						pubdate: pub_date,
						size: asset.size,
					});
				});
			});
			GetANXOld();
		});
	}

	function GetANXOld() {
		$.getJSON('https://api.github.com/repos/xeonax/ANXCamera10/releases', function (data) {
			data.forEach(function (release) {
				var releasesplit = release.name.split(".");
				var pub_date = release.published_at;
				release.assets.forEach(function (asset) {
					var rtype = "";
					if (asset.name.includes("Magisk"))
						rtype = "Magisk";

					if (asset.name.includes("Unity"))
						rtype = "TWRP";

					downloads.push({
						developer: "AEonAX",
						device: releasesplit[0],
						name: asset.name,
						type: rtype,
						url: asset.browser_download_url,
						downloads: asset.download_count,
						pubdate: pub_date,
						size: asset.size,
					});
				});
			});
			FillTable();
		});
	}

	function FillTable() {
		var tabd = $("#tbDownloads").find('tbody');
		downloads.sort(function (a, b) {
			return new Date(b.pubdate) - new Date(a.pubdate);
		});
		tabd.empty();
		var downloadid = 0;
		downloads.forEach(function (download) {
			if (!download.name.toLowerCase().includes('anxcamera'))
				return;
			var $row = $('<tr/>');
			$row.append($('<td>').text(download.developer));
			var rdevice = [];
			if (download.device.toLowerCase().includes("singularity"))
				rdevice.push("All Devices");
			if (download.device.toLowerCase().includes("beryllium"))
				rdevice.push("Poco");
			if (download.device.toLowerCase().includes("dipper"))
				rdevice.push("Mi8");
			if (download.device.toLowerCase().includes("polaris"))
				rdevice.push("Mix2s");
			if (download.device.toLowerCase().includes("perseus"))
				rdevice.push("Mix3");
			if (download.device.toLowerCase().includes("oos"))
				rdevice.push("OxygenOS Only");
			if (rdevice.length == 0)
				rdevice.push(download.device);
			$row.append($('<td>').text(rdevice.join(",\n")).addClass("multiline"));
			$row.append($('<td>').append($('<a>')
				.attr('href', download.url)
				.text(download.name)
			));
			$row.append($('<td>').text(formatBytes(download.size)));
			tabd.append($row);
			downloadid++;
			if (downloadid % 7 == 0) {
				var $adrow = $('<tr/>');
				$adrow.append($('<td>').text("G Ads"));
				$adrow.append(
					($('<td>')
						.append($('<ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-fb+5w+4e-db+86" data-ad-client="ca-pub-2619940801849241" data-ad-slot="9854743525"></ins>'))
						.append($('<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>'))
					)
					.attr('colspan', 3));
				tabd.append($adrow);
			}
		});
	}

	var waitingsince = 0;

	var adsloaded = setInterval(function () {
		waitingsince++;
		var tabd = $("#tbDownloads").find('tbody');
		var $row = null;
		if (waitingsince == 3) {
			tabd.empty();
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('Waiting'));
			$row.append($('<td>').text('For Ads'));
			$row.append($('<td>').text('to Load'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('Hope'));
			$row.append($('<td>').text('you have disabled'));
			$row.append($('<td>').text('adblockers'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('Scroll'));
			$row.append($('<td>').text('Up'));
			$row.append($('<td>').text('and down'));
			tabd.append($row);
		}
		if (waitingsince == 7) {
			tabd = $("#tbDownloads").find('tbody');
			tabd.empty();
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('Still Waiting'));
			$row.append($('<td>').text('For Ads'));
			$row.append($('<td>').text('to Load'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('Really Hope'));
			$row.append($('<td>').text('you have disabled'));
			$row.append($('<td>').text('adblockers'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('Scroll'));
			$row.append($('<td>').text('Up and Down'));
			$row.append($('<td>').text('a lot'));
			tabd.append($row);
		}
		if (waitingsince > 15) {
			tabd = $("#tbDownloads").find('tbody');
			tabd.empty();
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('U seem smart'));
			$row.append($('<td>').text('Maybe'));
			$row.append($('<td>').text('Too Much'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('AEonAX'));
			$row.append($('<td>').text('Disable'));
			$row.append($('<td>').text('adblock/ublock/adaway'));
			$row.append($('<td>').text('to load downloads'));
			tabd.append($row);
		}
		if (window.frames.length > 2) {
			clearTimeout(adsloaded);
			GetAds();
			GetDownloads();
		}
	}, 1000);
})(jQuery);