$(document).ready(function(){

  // MODAL
  var news = 
    [
      {
        title: "Celebration for Kai's tenure promotion",
        date: '4/8/2016',
        image: "tenure_lab_lunch.jpg",
        detail: 'No Text'
      },
      {
        title: 'International Conference on Intelligent Biology and Medicine ',
        date: '11/1/2017',
        image: "LRM_EXPORT_20171103_162733.png",
        detail: 'No Text'
      },
      {
        title: 'Our lab is moved to CHOP/Penn',
        date: '1/1/2018',
        image: "colket.jpg",
        detail: 'No Text'
      },
      {
        title: 'Mid-Atlantic Bioinformatics Conference (MABC) 2018',
        date: '10/29/2018',
        image: "MABC.png",
        detail: 'No Text'
      },
      {
        title: 'International Conference on Intelligent Biology and Medicine',
        date: '11/1/2018',
        image: "columbus_vista_header_with_icibm_logo_small.png",
        detail: 'No Text'
      },
      {
        title: 'Runner-up in door decoration competition',
        date: '12/11/2018',
        image: "labdoor2018_small.jpg",
        detail: '“You don’t need to be a font savant, or be a Creative Cloud wizard, or even have a degree in design in order to be a highly effective science designer.”<br/><br/>We had a competition of best door decoration in the fifth floor (CCMT) for celebrating the holiday. Thanks Ying for leading the effort! We were encouraged by the runner-up designation, and we will put out an improved design next year.'
      },
      {
        title: '1-Runner-up in door decoration competition',
        date: '12/11/2018',
        image: "labdoor2018_small.jpg",
        detail: '“You don’t need to be a font savant, or be a Creative Cloud wizard, or even have a degree in design in order to be a highly effective science designer.”<br/><br/>We had a competition of best door decoration in the fifth floor (CCMT) for celebrating the holiday. Thanks Ying for leading the effort! We were encouraged by the runner-up designation, and we will put out an improved design next year.'
      },
      {
        title: '2-Runner-up in door decoration competition',
        date: '12/11/2018',
        image: "labdoor2018_small.jpg",
        detail: '“You don’t need to be a font savant, or be a Creative Cloud wizard, or even have a degree in design in order to be a highly effective science designer.”<br/><br/>We had a competition of best door decoration in the fifth floor (CCMT) for celebrating the holiday. Thanks Ying for leading the effort! We were encouraged by the runner-up designation, and we will put out an improved design next year.'
      },
      {
        title: '3-Runner-up in door decoration competition',
        date: '12/11/2018',
        image: "labdoor2018_small.jpg",
        detail: '“You don’t need to be a font savant, or be a Creative Cloud wizard, or even have a degree in design in order to be a highly effective science designer.”<br/><br/>We had a competition of best door decoration in the fifth floor (CCMT) for celebrating the holiday. Thanks Ying for leading the effort! We were encouraged by the runner-up designation, and we will put out an improved design next year.'
      },
      {
        title: '4-Runner-up in door decoration competition',
        date: '12/11/2018',
        image: "labdoor2018_small.jpg",
        detail: '“You don’t need to be a font savant, or be a Creative Cloud wizard, or even have a degree in design in order to be a highly effective science designer.”<br/><br/>We had a competition of best door decoration in the fifth floor (CCMT) for celebrating the holiday. Thanks Ying for leading the effort! We were encouraged by the runner-up designation, and we will put out an improved design next year.'
      },
      {
        title: '5-Runner-up in door decoration competition',
        date: '12/11/2018',
        image: "labdoor2018_small.jpg",
        detail: '“You don’t need to be a font savant, or be a Creative Cloud wizard, or even have a degree in design in order to be a highly effective science designer.”<br/><br/>We had a competition of best door decoration in the fifth floor (CCMT) for celebrating the holiday. Thanks Ying for leading the effort! We were encouraged by the runner-up designation, and we will put out an improved design next year.'
      }
    ];

  var cur_load_id = news.length - 1;

  Init();

  $('.open-button-class').on('click', function(){
    fillHTML(this.id);
    $('html').animate({ scrollTop: 0 }, 300);
  });

  $('.viewall-button-class').on('click', function(){
    $('#single-news').hide();
    $('#all-news').show();
    $('html').animate({ scrollTop: 0 }, 300);
  });

  $('.loadmore-button-class').on('click', function(){
    for(var i = 1; i <= 3 && cur_load_id >= 0; i ++)
    {
      appendNews(cur_load_id - 1);
      cur_load_id --;
    }
    $('html').animate({ scrollTop: $(document).height() }, 2000);
  });

  function appendNews(id)
  {
    var element_html = '';
    element_html += '<div class="post-item col-lg-4 col-md-6" style="pointer-events: auto;">';
      element_html += '<a class="view-singlenews-class" style="cursor: pointer;" id="' + id +'$">';
        element_html += '<div class="post-item__img">';
          element_html += '<img src="assets/images/news/' + news[id].image + '" alt="img">';
        element_html += '</div>';
        element_html += '<div class="post-item__info">';
          element_html += '<h5 class="post-item__title">' + news[id].title + '</h5>';
          element_html += '<div class="post-item__date">' + news[id].date + '</div>'
          element_html += '<div class="post-item__link">read more</div>';
        element_html += '</div>';
      element_html += '</a>';
    element_html += '</div>';

    var element = $(element_html).on('click', function(){
      $('#single-news').show();
      $('#all-news').hide();
      $('html').animate({ scrollTop: 0 }, 300);
      fillHTML(id);
    });
    element.hide().appendTo("#blog").fadeIn(3000);
  }

  function fillHTML(id) {
    $('.news-title').html(news[id].title);
    $('.news-date').html(news[id].date);
    $('.news-image').attr('src', "assets/images/news/" + news[id].image);
    $('.news-detail').html(news[id].detail);

    for(var i = 1; i <= 6 && i <= news.length; i ++)
    {
      var tid = news.length - i;
      $('#' + tid + ' h6').css("color", "black");
      $('#' + tid + ' div').css("color", "black");
    }
    $('#' + id + ' h6').css("color", "red");
    $('#' + id + ' div').css("color", "red");
  }

  function Init() {
    for(var i = 1; i <= 6 && i <= news.length; i ++)
    {
      var id = news.length - i;
      $('.ms-right-sidebar').append('<div style="cursor: pointer;" class="col-md-12"><a class="open-button-class" id="' + id + '"><h6 class="latest-news-title">' + news[id].title + '</h6><div style="color: black;" class="latest-news-date">' + news[id].date + '</div></a></div>');
    }

    for(var i = 1; i <= 3 && i <= news.length; i ++)
    {
      var id = news.length - i;
      appendNews(id);
      cur_load_id = id;
    }

    fillHTML(news.length - 1);

    $('#single-news').hide();
  }
})
