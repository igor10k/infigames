Ember.Handlebars.helper('format-platform', function (platform) {
	var platformMappings = {
		'Microsoft Xbox':                      'xbox',
		'Microsoft Xbox 360':                  'x360',
		'Sony Playstation':                    'ps',
		'Sony Playstation 2':                  'ps2',
		'Sony Playstation 3':                  'ps3',
		'Sony Playstation 4':                  'ps4',
		'Sony PSP':                            'psp',
		'Sega Dreamcast':                      'dc',
		'Sega Saturn':                         'saturn',
		'Sega Genesis':                        'sg',
		'Nintendo Wii U':                      'wiiu',
		'Nintendo DS':                         'ds',
		'Nintendo GameCube':                   'gc',
		'Mac OS':                              'mac',
		'Sega Master System':                  'sms',
		'Nintendo Game Boy Advance':           'gba',
		'Nintendo Game Boy Color':             'gbc',
		'Nintendo Entertainment System (NES)': 'nes',
		'Super Nintendo (SNES)':               'snes',
		'Atari 2600':                          'a2600',
		'Commodore 64':                        'c64'
	};

	var result = platformMappings[platform] || platform && platform.toLowerCase() || '';

	return new Ember.Handlebars.SafeString(result);
});
