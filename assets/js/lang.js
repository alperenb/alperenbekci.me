var arrLang = {
    'en': {
      'home': 'Home',
      'about': 'About Me',
      'contact': 'Contact Me',
      'about_desc': 'Hi! I\'m Alperen. I \'m a software test engineer. I\'m focusing on test development in the software according to ISTQB principles. I have been investigating how could be perform software test in agile processes better and how it can be aoutomate, how to use better in CI/CD pipeline. I m also trying to automate my whole life :)',
      'things_i_can_do': "I'm trying gather information about all test tools apply it to the appropriate project. I 'm also building web projects and generally to virtualize the data or automize the test process. I have also started master degree to investigate how to use software test with AI.",
      'blog_post': "I have started to write article about software test. You can also follow from Medium.",
      'software_test':"Software Test Engineer",
      'biss':"I've been focusing to improve software test progress in the agile with our software test team. I'm developing the UI test automation with written manual test cases according to related projects and also writing API tests and load tests which should be realized according to our test progress. Also, we have been running embedded device tests.",
      'nevalabs': "I have written manual test cases for web-based face recognition application and then built UI test automation system according to these manual test cases. I have written API test cases for the necessary features. We have automatized the CI-CD pipeline via Jenkins, Jira, and Github. I was doing Regression tests before the installation step. I was also in charge of installing the application. I was also doing Camera tests according to ONVIF for connection and face recognition.",
      'dominant': "I have created a web application that includes the coordination of hotels using PHP. This application could list the hotels according to distance."
    },
    'tr': {
      'home': 'ev',
      'about': 'Hakkımda',
      'contact': 'İletişim',
      'about_desc': 'açıklama'
    }
  };

  // Process translation<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 
    var lang = 'en';

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });


  $(function() {

    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });