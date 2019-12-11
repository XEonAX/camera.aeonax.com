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

	//Note For Adguard Contributors, Users are not supposed to use my site if they want to block ads, The Downloads are not provided for free, they are provided assuming ads are visible on the site.
	function AdamWrTheGreat() { //Named after great AdGuard Contributor, Who wants to destroy my monetization attempts
		var amznurls = [];
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07WLL998K&asins=B07WLL998K&linkId=908fe2771c671d505ed6188dfccafbe5&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07HCXQZ4P&asins=B07HCXQZ4P&linkId=a721918852fcba93be35f466e37c56a8&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07TGDC67L&asins=B07TGDC67L&linkId=3f8e6007f864b5913532b12ca000ecf0&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B071Z8M4KX&asins=B071Z8M4KX&linkId=d69d15a466ce0b719a69e5a1ddd946d2&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07C2VJXP4&asins=B07C2VJXP4&linkId=6856a7f1623c16400ab8cfd896c3fd5e&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B0791YHVMK&asins=B0791YHVMK&linkId=167d9081e9de210f67934b4ca2dbd119&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07VZRJQX1&asins=B07VZRJQX1&linkId=6de05d6649632ec306ffe714aced8b9e&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B075S82HK8&asins=B075S82HK8&linkId=59414cf55c3f1333a59c171ea8d1aca4&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B074VXPXHV&asins=B074VXPXHV&linkId=9ffa6e5d2cb53c9e17f439d0970c9298&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B003Y5RYNY&asins=B003Y5RYNY&linkId=2d782af665cac363c06ebafa1d373670&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B0749D4QM9&asins=B0749D4QM9&linkId=5444132e4681d07dae9e893cf4610b0c&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07SPZMH5W&asins=B07SPZMH5W&linkId=a423219e8ade8b51e60ad7f97cdd51c5&show_border=true&link_opens_in_new_window=true"></iframe>');
		amznurls.push('');
		var amznsec = $("#AdamWr"); //Named after great AdGuard Contributor, Who wants to destroy my monetization attempts
		amznurls.forEach(function (aurl) {
			amznsec.append($(aurl));
		});
	}

	var waitingsince = 0;

	var adsloaded = setInterval(function () {
		waitingsince++;
		AntiAdblock("#tbDownloadsANX");
		AntiAdblock("#tbDownloadsLUFFY");
		if (window.frames.length > 2 && window.frames[2].location != undefined) {
			clearTimeout(adsloaded);
			AdamWrTheGreat();
			GetAdvts();
		}
	}, 1001);

	function AntiAdblock(tbid) {
		var tabd = $(tbid).find('tbody');
		var $row = null;
		if (waitingsince == 3) {
			tabd.empty();
			$row = $('<tr/>');
			$row.append($('<td>').text('Waiting'));
			$row.append($('<td>').text('For Ads'));
			$row.append($('<td>').text('to Load'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('Hope'));
			$row.append($('<td>').text('you have disabled'));
			$row.append($('<td>').text('adblockers'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('Scroll'));
			$row.append($('<td>').text('Up'));
			$row.append($('<td>').text('and down'));
			tabd.append($row);
		}
		if (waitingsince == 7) {
			tabd.empty();
			$row = $('<tr/>');
			$row.append($('<td>').text('Still Waiting'));
			$row.append($('<td>').text('For Ads'));
			$row.append($('<td>').text('to Load'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('Really Hope'));
			$row.append($('<td>').text('you have disabled'));
			$row.append($('<td>').text('adblockers'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('Scroll'));
			$row.append($('<td>').text('Up and Down'));
			$row.append($('<td>').text('a lot'));
			tabd.append($row);
		}
		if (waitingsince > 15) {
			tabd.empty();
			$row = $('<tr/>');
			$row.append($('<td>').text('U seem smart'));
			$row.append($('<td>').text('Maybe'));
			$row.append($('<td>').text('Too Much'));
			tabd.append($row);
			$row = $('<tr/>');
			$row.append($('<td>').text('Disable'));
			$row.append($('<td>').text('adblock/ublock/adaway'));
			$row.append($('<td>').text('to load downloads'));
			tabd.append($row);
		}
	}

	function GetAdvts() {
		WaitForAnomaly();
		$.getJSON('https://dry-waterfall-10e0.anx.workers.dev/?https://www.pling.com/p/1321115/getfilesajax?format=jsonp&ignore_status_code=0&status=active&collection_id=1566924312&perpage=1000&page=1', function (data) {
			data.files.forEach(function (file) {
				downloadsANX.push({
					id: file.id,
					active: file.active,
					name: file.name,
					desc: file.description == null ? "" : file.description,
					size: file.size,
					version: file.version,
					tag: file.version + "." + (file.description == null ? "" : file.description),
					mirror: file.tags ? decodeURIComponent(file.tags.replace('link##', '')) : file.tags,
					url: "https://www.pling.com/p/1321115/startdownload?file_id=" + file.id + "&file_name=" + file.name + "&file_type=application/zip&file_size=" + file.size
				});
			});
			FillTablePling('#tbDownloadsANX', downloadsANX);
		});
		$.getJSON('https://dry-waterfall-10e0.anx.workers.dev/?https://www.pling.com/p/1342269/getfilesajax?format=jsonp&ignore_status_code=0&status=active&collection_id=1575935661&perpage=1000&page=1', function (data) {
			data.files.forEach(function (file) {
				downloadsLUFFY.push({
					id: file.id,
					active: file.active,
					name: file.name,
					desc: file.description == null ? "" : file.description,
					size: file.size,
					version: file.version,
					url: "https://www.pling.com/p/1342269/startdownload?file_id=" + file.id + "&file_name=" + file.name + "&file_type=application/zip&file_size=" + file.size
				});
			});
			FillTablePling('#tbDownloadsLUFFY', downloadsLUFFY);
		});
	}

	function FillTablePling(tbid, dwnlist) {
		if (tbid == "#tbDownloadsANX") {
			var tabh = $(tbid).find('thead');
			tabh.empty();
			var $rowh = $('<tr/>');
			$rowh.append($('<th>').text("Device"));
			$rowh.append($('<th>').text("File"));
			$rowh.append($('<th>').text("Mirror"));
			$rowh.append($('<th>').text("Size"));
			tabh.append($rowh);
		}
		var tabd = $(tbid).find('tbody');
		dwnlist.sort(function (a, b) {
			return Number(b.version) - Number(a.version);
		});
		tabd.empty();
		var downloadid = 0;
		dwnlist.forEach(function (download) {
			if (download.active == "0")
				return;
			if (download.desc.toLowerCase().includes("addon"))
				return;
			var $row = $('<tr/>');
			if (tbid == "#tbDownloadsANX") {
				var rdevice = [];
				if (download.desc.toLowerCase().includes("beryllium"))
					rdevice.push("Poco");
				if (download.desc.toLowerCase().includes("dipper"))
					rdevice.push("Mi8");
				if (download.desc.toLowerCase().includes("polaris"))
					rdevice.push("Mix2s");
				if (download.desc.toLowerCase().includes("perseus"))
					rdevice.push("Mix3");
				if (download.desc.toLowerCase().includes("oos"))
					rdevice.push("OxygenOS Only");
				if (download.desc.toLowerCase().includes("singularity"))
					rdevice.push("All Devices");
				if (rdevice.length == 0)
					rdevice.push(download.desc);
				$row.append($('<td>').text(rdevice.join(",\n")).addClass("multiline"));

			} else
				$row.append($('<td>').text(download.desc).addClass("multiline"));

			$row.append($('<td>').append($('<a>')
				.attr('href', download.url)
				.attr('target', '_blank')
				.text(download.name)
			));
			if (tbid == "#tbDownloadsANX") {
				$row.append($('<td>').append($('<a>')
					.attr('href', download.mirror)
					.attr('target', '_blank')
					.text("APS1")
				).append(', ').append($('<a>')
					.attr('href', "https://downloads.sourceforge.net/project/anxcamera/" + download.tag + "/" + download.name.replace('-20190906145826', '') + "?r=https%3A%2F%2Fcamera.aeonax.com%2F&ts=" + Math.round((new Date()).getTime() / 1000))
					.attr('target', '_blank')
					.text("SFN2")
					.click(function (e) {
						$(this).attr("href", $(this).attr("href").slice(0, -10) + Math.round((new Date()).getTime() / 1000));
					})
				));
			}
			$row.append($('<td>').text(formatBytes(download.size)));
			tabd.append($row);
			downloadid++;
			if (downloadid % 7 == 0) {
				var $adrow = $('<tr/>');
				$adrow.append(
					($('<td>')
						.append($('<ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-fb+5w+4e-db+86" data-ad-client="ca-pub-2619940801849241" data-ad-slot="9854743525"></ins>'))
						.append($('<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>'))
					)
					.attr('colspan', 4));
				tabd.append($adrow);
			}
		});
	}

	function WaitForAnomaly() {
		setTimeout(function () {
			if (downloadsANX.length == 0) {
				$.getJSON('./assets/data/plinganx.json', function (data) {
					data.files.forEach(function (file) {
						downloadsANX.push({
							id: file.id,
							active: file.active,
							name: file.name,
							desc: file.description == null ? "" : file.description,
							size: file.size,
							version: file.version,
							tag: file.version + "." + (file.description == null ? "" : file.description),
							mirror: file.tags ? decodeURIComponent(file.tags.replace('link##', '')) : file.tags,
							url: "https://www.pling.com/p/1321115/startdownload?file_id=" + file.id + "&file_name=" + file.name + "&file_type=application/zip&file_size=" + file.size
						});
					});
					FillTablePling('#tbDownloadsANX', downloadsANX);
				});
			}

			if (downloadsLUFFY.length == 0) {
				$.getJSON('./assets/data/plingluffy.json', function (data) {
					data.files.forEach(function (file) {
						downloadsLUFFY.push({
							id: file.id,
							active: file.active,
							name: file.name,
							desc: file.description == null ? "" : file.description,
							size: file.size,
							version: file.version,
							tag: file.version + "." + (file.description == null ? "" : file.description),
							url: "https://www.pling.com/p/1342269/startdownload?file_id=" + file.id + "&file_name=" + file.name + "&file_type=application/zip&file_size=" + file.size
						});
					});
					FillTablePling('#tbDownloadsLUFFY', downloadsLUFFY);
				});
			}
		}, 18000);
	}
})(jQuery);