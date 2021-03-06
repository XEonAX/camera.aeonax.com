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

	function GetAmznAds() {
		// var amznurls = [];
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B084DL5HWN&asins=B084DL5HWN&linkId=e42da0d7ac742847c8c92492a536f02e&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07BTKVG7S&asins=B07BTKVG7S&linkId=6584a6d10c48fc96bf629d28a1e1347f&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B079RQ6VXV&asins=B079RQ6VXV&linkId=ef6c63b304c20375ccdea0d0f470d84c&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07JY1BWZP&asins=B07JY1BWZP&linkId=95ff3b53907388b2ee48fcdd9e4ba16a&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07WLL998K&asins=B07WLL998K&linkId=908fe2771c671d505ed6188dfccafbe5&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07VTQGCF4&asins=B07VTQGCF4&linkId=f8004f24e9b89253d07aedd0d33b66f9&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07X841RGL&asins=B07X841RGL&linkId=bd79acd33d2c0f0768f68521987974fd&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07HGJKDQL&asins=B07HGJKDQL&linkId=6bf61ab7b183df678d03c98f7304d396&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B073K14CVB&asins=B073K14CVB&linkId=d61c97da20ae8df5e2449875eea37105&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07P8LDZJ5&asins=B07P8LDZJ5&linkId=3e9a298f78e5c47c4fa99d06ee7b20f7&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B07XMD275Q&asins=B07XMD275Q&linkId=4fcd735e4e4e2c2dc291e5a6c90926a0&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B08447C279&asins=B08447C279&linkId=ec10941f9a1b3b9cdb8bd0c52e29ba4a&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aeonax-21&language=en_IN&marketplace=amazon&region=IN&placement=B0851WWXJC&asins=B0851WWXJC&linkId=9034ba4463e2fc05bb726b7f51e6c174&show_border=true&link_opens_in_new_window=true"></iframe>');
		// amznurls.push('');
		// var amznsec = $("#AmznAds");
		// setTimeout(function() {
		// 	amznurls.forEach(function (aurl) {
		// 		amznsec.append($(aurl));
		// 	});
		// }, 5498);
	}

	var waitingsince = 0;

	// var adsloaded = setInterval(function () {
	// 	waitingsince++;
	// 	AntiAdblock("#tbDownloadsANX");
	// 	AntiAdblock("#tbDownloadsLUFFY");
	// 	var locs = [];
	//     var frames = document.getElementsByTagName("iframe");
	// 	for (i = 0; i < frames.length; i++) {
	// 		var url = 'tillcash';
	// 		try {
	// 			url = frames[i].src;
	// 			console.log(url);
	// 		} catch (error) {

	// 		}
	// 		locs.push(url);
	// 	}
	// 	var bad = 0;
	// 	for (j = 0; j < locs.length; j++) {
	// 		if (locs[j] == ("about:blank") || locs[j] == ("data:text/html;"))//AdamWr Please NO!!
	// 			bad++;
	// 		if (bad >= 2) {
	// 			console.log("tillcash and giodeluigi made me do this");
	// 			return;
	// 		}
	// 	}

	// 	if (typeof (window.BlockAdBlock) != "function" && window.frames.length > 2 && window.frames[2].location != undefined && tillcashSucks==2 && exodius48SucksToo==2) {
	// 		clearTimeout(adsloaded);
	// 		GetAmznAds();
	// 		GetDownloads();
	// 	}
	// }, 1001);

	GetAmznAds();
	GetDownloads();

	// function AntiAdblock(tbid) {
	// 	var tabd = $(tbid).find('tbody');
	// 	var $row = null;
	// 	if (waitingsince == 3) {
	// 		tabd.empty();
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('Waiting'));
	// 		$row.append($('<td>').text('For Ads'));
	// 		$row.append($('<td>').text('to Load'));
	// 		tabd.append($row);
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('Hope'));
	// 		$row.append($('<td>').text('you have disabled'));
	// 		$row.append($('<td>').text('adblockers'));
	// 		tabd.append($row);
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('Scroll'));
	// 		$row.append($('<td>').text('Up'));
	// 		$row.append($('<td>').text('and down'));
	// 		tabd.append($row);
	// 	}
	// 	if (waitingsince == 7) {
	// 		tabd.empty();
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('Still Waiting'));
	// 		$row.append($('<td>').text('For Ads'));
	// 		$row.append($('<td>').text('to Load'));
	// 		tabd.append($row);
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('Really Hope'));
	// 		$row.append($('<td>').text('you have disabled'));
	// 		$row.append($('<td>').text('adblockers'));
	// 		tabd.append($row);
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('Scroll'));
	// 		$row.append($('<td>').text('Up and Down'));
	// 		$row.append($('<td>').text('a lot'));
	// 		tabd.append($row);
	// 	}
	// 	if (waitingsince > 15) {
	// 		tabd.empty();
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('U seem smart'));
	// 		$row.append($('<td>').text('Maybe'));
	// 		$row.append($('<td>').text('Too Much'));
	// 		tabd.append($row);
	// 		$row = $('<tr/>');
	// 		$row.append($('<td>').text('Disable'));
	// 		$row.append($('<td>').text('adblock/ublock/adaway'));
	// 		$row.append($('<td>').text('to load downloads'));
	// 		tabd.append($row);
	// 	}
	// }

	function GetDownloads() {
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
			FillTablePling('#tbDownloadsANX', downloadsANX,"anx");
		});
		// $.getJSON('https://dry-waterfall-10e0.anx.workers.dev/?https://www.pling.com/p/1342269/getfilesajax?format=jsonp&ignore_status_code=0&status=active&collection_id=1575935661&perpage=1000&page=1', function (data) {
		// 	data.files.forEach(function (file) {
		// 		downloadsLUFFY.push({
		// 			id: file.id,
		// 			active: file.active,
		// 			name: file.name,
		// 			desc: file.description == null ? "" : file.description,
		// 			size: file.size,
		// 			version: file.version,
		// 			url: "https://www.pling.com/p/1342269/startdownload?file_id=" + file.id + "&file_name=" + file.name + "&file_type=application/zip&file_size=" + file.size
		// 		});
		// 	});
		// 	FillTablePling('#tbDownloadsLUFFY', downloadsLUFFY);
		// });
	}

	function FillTablePling(tbid, dwnlist,whose) {
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
				.attr('href', ((whose == 'anx') ? "https://www.pling.com/p/1321115#files-panel" : download.url))
				.attr('target', '_blank')
				// .attr('data-featherlight', 'iframe')
				// .attr('data-featherlight-iframe-style', 'display:block;border:none;height:500px;width:600px;max-width:100%')
				.text("Get '" + download.name + "' from Pling")
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
			// if (downloadid % 7 == 0) {
			// 	var $adrow = $('<tr/>');
			// 	$adrow.append(
			// 		($('<td>')
			// 			.append($('<ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-fb+5w+4e-db+86" data-ad-client="ca-pub-2619940801849241" data-ad-slot="9854743525"></ins>'))
			// 			.append($('<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>'))
			// 		)
			// 		.attr('colspan', 4));
			// 	tabd.append($adrow);
			// }
		});
	}

	function WaitForAnomaly() {
		setTimeout(function () {
			if (downloadsANX.length == 0) {
				$.getJSON('./assets/data/plinganx.json', function (data) {
					data.files.forEach(function (file) {
						var item = {
							id: file.id,
							active: file.active,
							name: file.name,
							desc: file.description == null ? "" : file.description,
							size: file.size,
							version: file.version,
							tag: file.version + "." + (file.description == null ? "" : file.description),
							mirror: file.tags ? decodeURIComponent(file.tags.replace('link##', '')) : file.tags,
							url: "https://www.pling.com/p/1321115/startdownload?file_id=" + file.id + "&file_name=" + file.name + "&file_type=application/zip&file_size=" + file.size
						};
						item.mirror = item.mirror.replace('dl1.sponsored-by.indianets.com', 'dl1.sponsored-by.indianets.com');
						downloadsANX.push(item);
					});
					FillTablePling('#tbDownloadsANX', downloadsANX);
				});
			}

			// if (downloadsLUFFY.length == 0) {
			// 	$.getJSON('./assets/data/plingluffy.json', function (data) {
			// 		data.files.forEach(function (file) {
			// 			downloadsLUFFY.push({
			// 				id: file.id,
			// 				active: file.active,
			// 				name: file.name,
			// 				desc: file.description == null ? "" : file.description,
			// 				size: file.size,
			// 				version: file.version,
			// 				tag: file.version + "." + (file.description == null ? "" : file.description),
			// 				url: "https://www.pling.com/p/1342269/startdownload?file_id=" + file.id + "&file_name=" + file.name + "&file_type=application/zip&file_size=" + file.size
			// 			});
			// 		});
			// 		FillTablePling('#tbDownloadsLUFFY', downloadsLUFFY);
			// 	});
			// }
		}, 15000);
	}
	if (top != self) {
		top.location.replace("https://camera.aeonax.com/");
	}
})(jQuery);