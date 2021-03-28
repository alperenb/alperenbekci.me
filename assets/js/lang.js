var arrLang = {
    'en': {
      'home': 'Home',
      'about': 'About Us',
      'contact': 'Contact Us',
      'desc': 'This is my description'
    },
    'tr': {
      'home': 'ev',
      'about': 'hakkımda',
      'contact': 'kontak',
      'desc': 'açıklama'
    }
  };

  // Process translation
  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });