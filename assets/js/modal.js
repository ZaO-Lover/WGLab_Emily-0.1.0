$(document).ready(function(){

  // MODAL
  var modalText = {
    0: {
      name: 'Kai Wang, Ph.D.',
      role: 'Associate Professor of Pathology and Laboratory Medicine',
      contact: "3501 Civic Center Blvd, CTRB 5004<br/>Children's Hospital of Philadelphia<br/>Philadelphia, PA 19104<br/>Office: 2674259573<br/>Fax: 2155903660",
      education: 'B.S. (Biochemistry & Molecular Biology) Peking University, 2000.<br/> M.S. (Tumor Biology) Mayo Clinic, 2002.<br/> Ph.D. (Microbiology & Computational Biology) University Of Washington, 2005.',
      description: 'The research in our laboratory focuses on the development of bioinformatics methods to improve our understanding of the genetic basis of human diseases, and the integration of electronic health records and genomic information to facilitate genomic medicine on scale. Current projects include the development of computational tools to call structural variants and DNA modifications from long-read sequencing data, the identification/prioritization of disease-relevant genetic mutations, the use of deep neural network to predict prognosis and optimize therapy for patients with cancer, the application of systems biology approaches on single-cell gene expression data, and the data mining on electronic health records to predict genetic syndromes and causal genes.',
      link: 'https://www.med.upenn.edu/apps/faculty/index.php/g275/p8133343',
      Twitter: 'https://www.med.upenn.edu/apps/faculty/index.php/g275/p8133343',
      GitHub: 'https://www.med.upenn.edu/apps/faculty/index.php/g275/p8133343',
      photo: 'Kai_Wang.jpg'
    },
    1: {
      name: 'Qian Liu',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: 'https://www.med.upenn.edu/apps/faculty/index.php/g275/p8133343',
      GitHub: '#',
      photo: 'Qian_Liu.jpg'
    },
    2: {
      name: 'Li Fang',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: 'https://www.med.upenn.edu/apps/faculty/index.php/g275/p8133343',
      photo: 'LiFang_150px.png'
    },
    3: {
      name: 'Jim Havrilla',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'JimH_150px.png'
    },
    4: {
      name: 'Abolfazl Doostparast',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'Abolfazl_Doostparast.jpg'
    },
    5: {
      name: 'Umair Ahsan',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'umair_ahsan_150px.png'
    },
    6: {
      name: 'Mengge Zhao',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'mengge_zhao_150px.png'
    },
    7: {
      name: 'Chris Nicholson',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'chris_nicholson_150px.png'
    },
    8: {
      name: 'Jackie Peng',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'jackie_peng_150px.png'
    },
    9: {
      name: 'Jonathan Choi',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'jonathan_choi_150px.png'
    },
    10: {
      name: 'Atlas Khan',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'atlas_150px.png'
    },
    11: {
      name: 'Karen Xu',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'karen_xu_150px.png'
    },
    12: {
      name: 'Chenchao Zang',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'chenchao_zang_150px.png'
    },
    13: {
      name: 'Atif Ahmed',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'atif_ahmed_150px.png'
    },
    14: {
      name: 'Eshan Agarwal',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'Eshan1.png'
    },
    15: {
      name: 'Jayant Madugula',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'jayant_madugula_150px.png'
    },
    16: {
      name: 'Kelsey D’Souza',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'kelsey_dsouza_150px.png'
    },
    17: {
      name: 'Sarah Nedjar',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'sarah_nedjar_150px.png'
    },
    18: {
      name: 'Chris Armoskus',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'carmoskus1_150px.jpg'
    },
    19: {
      name: 'Hui Yang',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'huiyang_150px.jpg'
    },
    20: {
      name: 'Coco Dong',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'chengliangdong_150px.jpg'
    },
    21: {
      name: 'Mingyang Cai',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'mingyangcai_150px.jpg'
    },
    22: {
      name: 'Shuangchao Ma',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'shuangchaoma_150px.jpg'
    },
    23: {
      name: 'Yunfei Guo',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'yunfeiguo_150px.jpg'
    },
    24: {
      name: 'Leandro Lima',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'leandro_150px.jpg'
    },
    25: {
      name: 'Quan Li',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'quanli_150px.png'
    },
    26: {
      name: 'William Podevin',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'podevin_150px.jpg'
    },
    27: {
      name: 'JiHong Kim',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'jihongkim.jpg'
    },
    28: {
      name: 'Sarah Asiaban',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'sarah_150px.jpg'
    },
    29: {
      name: 'Ava Soleimany',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'soleimany_150px.jpg'
    },
    30: {
      name: 'Fan Gao',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'fangao_150px.jpg'
    },
    31: {
      name: 'Lingling Shi',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'linglingshi_150px.jpg'
    },
    32: {
      name: 'Xiao Chang',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'xiaochang_150px.jpg'
    },
    33: {
      name: 'Liyun Zeng',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'liyunzeng.jpg'
    },
    34: {
      name: 'Join Us',
      role: 'No Information',
      contact: "No Information",
      education: 'No Information',
      description: 'No Information',
      link: '#',
      Twitter: '#',
      GitHub: '#',
      photo: 'stamp_join_150px.png'
    }
  };

  $('.open-button-class').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap .modal').scrollTop(0);
    $('.modal-wrap').addClass('visible');
    $("body").addClass("modal-open");
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
    $("body").removeClass("modal-open");
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
    $("body").removeClass("modal-open");
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .name').html(modalText[id].name);
    $('#modal .role').html(modalText[id].role);
    $('#modal .contact').html(modalText[id].contact);
    $('#modal .education').html(modalText[id].education);
    $('#modal .description').html(modalText[id].description);
    if (modalText[id].link != '#') {
      $('#modal .button').show();
      $('#modal .button').attr('href', modalText[id].link);
    }
    else
    {
      $('#modal .button').hide();
    }

    if (modalText[id].Twitter != '#') {
      $('#modal .fa-twitter').show();
      $('#modal .fa-twitter').attr('href', modalText[id].Twitter);
    }
    else
    {
      $('#modal .fa-twitter').hide();
    }

    if (modalText[id].GitHub != '#') {
      $('#modal .fa-github').show();
      $('#modal .fa-github').attr('href', modalText[id].GitHub);
    }
    else
    {
      $('#modal .fa-github').hide();
    }
    $('#modal .photo').attr('src', "assets/images/members/" + modalText[id].photo);
  }
})
