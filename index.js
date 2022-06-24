 
// const puppeteer = require('puppeteer');
var request = require('request');
var cheerio = require('cheerio');
const express = require('express')
const axios = require('axios')
const fs = require('fs')
var find = require('cheerio-eq');
require("json-circular-stringify");
const Downloader = require("nodejs-file-downloader");

queue = [
   "https://allfamous.org/people/robert-parish-19530830.html",
    "https://allfamous.org/people/hannah-rollins-20000830.html",
    
    "https://allfamous.org/people/derryck-gleaton-19880830.html",
    "https://allfamous.org/people/kareem-grimes-19750830.html",
    "https://allfamous.org/people/brice-purton-19940830.html",
    "https://allfamous.org/people/rebecca-king-19990830.html",
    "https://allfamous.org/people/pavel-nedved-19720830.html",
    "https://allfamous.org/people/julia-gamaliy-20030830.html",
    "https://allfamous.org/people/christiana-burkhalter-tiktok-star.html",
    "https://allfamous.org/people/michael-fessey-19920830.html",
    "https://allfamous.org/people/dwayne-bacon-19950830.html",
    "https://allfamous.org/people/mykell-wilson-19830830.html",
    "https://allfamous.org/people/jasmine-sanchez-20000830.html",
    "https://allfamous.org/people/adam-roberts-19650830.html",
    "https://allfamous.org/people/allen-carter-20000830.html",
    "https://allfamous.org/people/wind-lee-19880830.html",
    "https://allfamous.org/people/theo-hutchcraft-19860830.html",
    "https://allfamous.org/people/tory-jones-20000830.html",
    "https://allfamous.org/people/paulo-sousa-19700830.html",
    "https://allfamous.org/people/heo-young-ji-19940830.html",
    "https://allfamous.org/people/john-kani-19430830.html",
    "https://allfamous.org/people/alexander-lukashenko-19540830.html",
    "https://allfamous.org/people/tyler-karren-20030830.html",
    "https://allfamous.org/people/tom-stefaniuk-19960830.html",
    "https://allfamous.org/people/jasmin-elago-19920830.html",
    "https://allfamous.org/people/wouter-janssen-19820830.html",
    "https://allfamous.org/people/myka-espina-gonzaga-19930830.html",
    "https://allfamous.org/people/shaun-alexander-19770830.html",
    "https://allfamous.org/people/mike-van-reekum-19920830.html",
    "https://allfamous.org/people/hamad-bin-jassim-bin-jaber-al-thani-19590830.html",
    "https://allfamous.org/people/mey-santamaria-19760830.html",
    "https://allfamous.org/people/peytonpov-20050830.html",
    "https://allfamous.org/people/gabriel-barbosa-19960830.html",
    "https://allfamous.org/people/mouhammad-elbannan-19900830.html",
    "https://allfamous.org/people/timo-kettunen-19930830.html",
    "https://allfamous.org/people/theo-griezmann-19960830.html",
    "https://allfamous.org/people/sara-socas-19970830.html",
    "https://allfamous.org/people/jackson-parrott-19960830.html",
    "https://allfamous.org/people/tianna-bartoletta-19850830.html",
    "https://allfamous.org/people/elizabeth-alvarez-19770830.html",
    "https://allfamous.org/people/anjali-bhimani-19740830.html",
    "https://allfamous.org/people/johvonnie-jackson-19740830.html",
    "https://allfamous.org/people/lindsay-marie-hay-19910830.html",
    "https://allfamous.org/people/gabriel-aubry-19750830.html",
    "https://allfamous.org/people/spencer-drever-20030830.html",
    "https://allfamous.org/people/paco-alcacer-19930830.html",
    "https://allfamous.org/people/tavia-yeung-19790830.html",
    "https://allfamous.org/people/trey-johnson-19840830.html",
    "https://allfamous.org/people/liam-cooper-19910830.html",
    "https://allfamous.org/people/joe-staley-19840830.html",
    
    "https://allfamous.org/people/joe-crawford-19510830.html",
    "https://allfamous.org/people/anchal-mua-19910830.html",
    "https://allfamous.org/people/ola-szkolda-20050830.html",
    "https://allfamous.org/people/samuel-morales-19830830.html",
    "https://allfamous.org/people/cao-lu-19870830.html",
    "https://allfamous.org/people/embla-wigum-vald.html",
    "https://allfamous.org/people/dajuan-mcdaniel-19900830.html",
    "https://allfamous.org/people/savannah-morris-19950830.html",
    "https://allfamous.org/people/ivan-magla-19970830.html",
    "https://allfamous.org/people/lyssyb333-20020830.html",
    "https://allfamous.org/people/alphafamilia-19970830.html",
    "https://allfamous.org/people/b-lynn-cuhh-19910830.html",
    "https://allfamous.org/people/atl-garza-19970830.html",
    "https://allfamous.org/people/antoine-troupe-19880830.html",
    "https://allfamous.org/people/liam-bennett-20140830.html",
    "https://allfamous.org/people/ulyana-sergeenko-19810830.html",
    "https://allfamous.org/people/bankroll-dede-instagram-star.html",
    "https://allfamous.org/people/chad-zuber-19720830.html",
    "https://allfamous.org/people/ashish-sharma-19840830.html",
    "https://allfamous.org/people/johanna-oholm-19930830.html",
    "https://allfamous.org/people/norkys-batista-19770830.html",
    "https://allfamous.org/people/raul-castillo-19770830.html",
    "https://allfamous.org/people/cliff-lee-19780830.html",
    "https://allfamous.org/people/maria-isabel-gutierrez-19900830.html",
    "https://allfamous.org/people/jessica-bass-byge-19890830.html",
    "https://allfamous.org/people/jaidan-salisbury-20000830.html",
    "https://allfamous.org/people/antony-gormley-19500830.html",
    "https://allfamous.org/people/thom-tillis-19600830.html",
    "https://allfamous.org/people/mama-jan-smith-19560830.html",
    "https://allfamous.org/people/timothy-bottoms-19510830.html",
    "https://allfamous.org/people/jessica-pietroniro-19940830.html",
    "https://allfamous.org/people/emily-fisher-19860830.html",
    "https://allfamous.org/people/vanja-jagnic-19950830.html",
    "https://allfamous.org/people/sancho-saucy-19900830.html",
    "https://allfamous.org/people/marques-hall-20020830.html",
    "https://allfamous.org/people/antoinette-taus-19800830.html",
    "https://allfamous.org/people/ulrikke-lund-19900830.html",
    "https://allfamous.org/people/diego-amozurrutia-19900830.html",
    "https://allfamous.org/people/raphael-calier-19860830.html",
    "https://allfamous.org/people/jija-parida-19940830.html",
    "https://allfamous.org/people/holly-weston-19850830.html",
    "https://allfamous.org/people/tori-de-jong-19910830.html",
    "https://allfamous.org/people/sarah-weber-19930830.html",
    "https://allfamous.org/people/laquan-smith-19880830.html",
    "https://allfamous.org/people/wyatt2215-20040830.html",
    "https://allfamous.org/people/lars-frederiksen-19710830.html",
    "https://allfamous.org/people/rylie-shaw-20040830.html",
    "https://allfamous.org/people/piyush-bhagat-19970830.html",
    
    "https://allfamous.org/people/jason-maybaum-20070831.html",
    "https://allfamous.org/people/malinda-panton-19880831.html",
    "https://allfamous.org/people/jeff-hardy-19770831.html",
    "https://allfamous.org/people/chloe-ferry-19950831.html",
    "https://allfamous.org/people/chris-tucker-19710831.html",
    "https://allfamous.org/people/taylor-skeens-19930831.html",
    "https://allfamous.org/people/megan-stitz-19990831.html",
    "https://allfamous.org/people/jaylen-barron-19980831.html",
    "https://allfamous.org/people/ciera-stitz-19990831.html",
    "https://allfamous.org/people/sara-ramirez-19750831.html",
    "https://allfamous.org/people/freya-nightingale-19930831.html",
    "https://allfamous.org/people/ashton-chavis-20000831.html",
    "https://allfamous.org/people/joe-budden-19800831.html",
    "https://allfamous.org/people/thalia-bree-19990831.html",
    "https://allfamous.org/people/lily-trescot-20050831.html",
    "https://allfamous.org/people/gianmarco-rottaro-19990831.html",
    "https://allfamous.org/people/mickie-james-19790831.html",
    "https://allfamous.org/people/ryan-kelley-19860831.html",
    "https://allfamous.org/people/arian-ajeli-instagram-star.html",
    "https://allfamous.org/people/lael-hansen-19970831.html",
    "https://allfamous.org/people/jerome-copeland-19990831.html",
    "https://allfamous.org/people/blake-lee-pxka.html",
    "https://allfamous.org/people/larry-fitzgerald-19830831.html",
    "https://allfamous.org/people/lira-mercer-19930831.html",
    "https://allfamous.org/people/mostack-19940831.html",
    "https://allfamous.org/people/mabel-matiz-19850831.html",
    "https://allfamous.org/people/richard-gere-19490831.html",
    "https://allfamous.org/people/ember-moon-19880831.html",
    "https://allfamous.org/people/katie-huntley-20000831.html",
    "https://allfamous.org/people/riley-mcdonough-19950831.html",
    "https://allfamous.org/people/weronika-sowa-19960831.html",
    "https://allfamous.org/people/jang-won-young-20040831.html",
    "https://allfamous.org/people/yael-shelbia-20010831.html",
    "https://allfamous.org/people/moneymarr-20020831.html",
    "https://allfamous.org/people/jeffrey-chang-19940831.html",
    "https://allfamous.org/people/reiya-downs-19990831.html",
    "https://allfamous.org/people/jre-19900831.html",
    "https://allfamous.org/people/pepe-reina-19820831.html",
    "https://allfamous.org/people/batista-19910831.html",
    "https://allfamous.org/people/justice-mccort-20020831.html",
    "https://allfamous.org/people/spencer-sutherland-19920831.html",
    "https://allfamous.org/people/jack-tisdall-20010831.html",
    "https://allfamous.org/people/matt-anderton-20020831.html",
    "https://allfamous.org/people/matilda-freeman-20040831.html",
    "https://allfamous.org/people/debbie-gibson-19700831.html",
    "https://allfamous.org/people/dee-bradley-baker-19620831.html",
    "https://allfamous.org/people/rayce-aaronson-20000831.html",
    "https://allfamous.org/people/faze-orba-19990831.html",
    
    "https://allfamous.org/people/shar-jackson-19760831.html",
    "https://allfamous.org/people/queen-rania-of-jordan-19700831.html",
    "https://allfamous.org/people/yara-martinez-19790831.html",
    "https://allfamous.org/people/dreka-gates-19860831.html",
    "https://allfamous.org/people/dylan-polley-20010831.html",
    "https://allfamous.org/people/simon-unge-19900831.html",
    "https://allfamous.org/people/garick-vanbrocklin-19950831.html",
    "https://allfamous.org/people/bella-boo-20100831.html",
    "https://allfamous.org/people/eden-dally-19920831.html",
    "https://allfamous.org/people/corey-maison-20010831.html",
    "https://allfamous.org/people/vanna-m-pareja-19950831.html",
    "https://allfamous.org/people/esteban-vicentini-20040831.html",
    "https://allfamous.org/people/van-morrison-19450831.html",
    "https://allfamous.org/people/bobrisky-19920831.html",
    "https://allfamous.org/people/tomato-gaming-19960831.html",
    "https://allfamous.org/people/wessam-qutob-19950831.html",
    "https://allfamous.org/people/liliana-filipa-19940831.html",
    "https://allfamous.org/people/chanel-jabro-19960831.html",
    "https://allfamous.org/people/charles-brockman-iii-19990831.html",
    "https://allfamous.org/people/ceallach-spellman-19950831.html",
    "https://allfamous.org/people/tec-luciano-19930831.html",
    "https://allfamous.org/people/clarababylegs-19960831.html",
    "https://allfamous.org/people/mohammad-bin-salman-19850831.html",
    "https://allfamous.org/people/tanaya-henry-19880831.html",
    "https://allfamous.org/people/kat-curtis-20000831.html",
    "https://allfamous.org/people/everleigh-mcdonell-20120831.html",
    "https://allfamous.org/people/heather-rooney-19930831.html",
    "https://allfamous.org/people/cj-faison-19930831.html",
    "https://allfamous.org/people/robyn-l-20020831.html",
    "https://allfamous.org/people/kajal-bagwandeen-19820831.html",
    "https://allfamous.org/people/zalen-belizaire-20000831.html",
    "https://allfamous.org/people/cody-hong-19950831.html",
    "https://allfamous.org/people/garrett-wareing-20010831.html",
    "https://allfamous.org/people/kristina-babicz-19930831.html",
    "https://allfamous.org/people/maddison-hubbard-20060831.html",
    "https://allfamous.org/people/nelson-venceslai-19940831.html",
    "https://allfamous.org/people/leanna-decker-19910831.html",
    "https://allfamous.org/people/andres-ceballos-19920831.html",
    "https://allfamous.org/people/sydney-bechter-20030831.html",
    "https://allfamous.org/people/carl-emil-lohmann-20010831.html",
    "https://allfamous.org/people/melanie-wright-19860831.html",
    "https://allfamous.org/people/mjg-19710831.html",
    "https://allfamous.org/people/max-ferguson-20070831.html",
    "https://allfamous.org/people/lilgangsign-20000831.html",
    "https://allfamous.org/people/itztaylor-20010831.html",
    "https://allfamous.org/people/noelia-19790831.html",
    "https://allfamous.org/people/fil-thorpe-evans-19920831.html",
    "https://allfamous.org/people/xavier-williams-19910831.html",
    
    "https://allfamous.org/people/nil-moretto-19790831.html",
    "https://allfamous.org/people/cassie-brown-19950831.html",
    "https://allfamous.org/people/madison-king-19970831.html",
    "https://allfamous.org/people/kris-carr-19710831.html",
    "https://allfamous.org/people/jason-carl-fox-19760831.html",
    "https://allfamous.org/people/beatrix-carlin-sweetin-20100831.html",
    "https://allfamous.org/people/angel-gomes-20000831.html",
    "https://allfamous.org/people/roi-19910831.html",
    "https://allfamous.org/people/david-ospina-19880831.html",
    "https://allfamous.org/people/eric-artell-19800831.html",
    "https://allfamous.org/people/izzee-20050831.html",
    "https://allfamous.org/people/gavin-malouf-20020831.html",
    "https://allfamous.org/people/rachelle-ann-go-19860831.html",
    "https://allfamous.org/people/dennis-lim-ming-19900831.html",
    "https://allfamous.org/people/williwhey-19940831.html",
    "https://allfamous.org/people/holly-earl-19920831.html",
    "https://allfamous.org/people/trey-beckham-19980831.html",
    "https://allfamous.org/people/elizabeth-clare-cullen-19970831.html",
    "https://allfamous.org/people/kross-asghedom-20160831.html",
    "https://allfamous.org/people/nick-snider-19880831.html",
    "https://allfamous.org/people/cailey-huddelson-20010831.html",
    "https://allfamous.org/people/lyss-ryann-19920831.html",
    "https://allfamous.org/people/patrick-dougall-19920831.html",
    "https://allfamous.org/people/marcia-clark-19530831.html",
    "https://allfamous.org/people/diamond-jimenez-19890831.html",
    "https://allfamous.org/people/julie-brown-19540831.html",
    "https://allfamous.org/people/akilah-hughes-19890831.html",
    "https://allfamous.org/people/peyton-christina-cranford-19940831.html",
    "https://allfamous.org/people/taylor-simone-ledward-19900831.html",
    "https://allfamous.org/people/pablo-motos-19650831.html",
    "https://allfamous.org/people/matt-adams-19880831.html",
    "https://allfamous.org/people/lucas-king-19910831.html",
    "https://allfamous.org/people/cloe-romagnoli-20060831.html",
    "https://allfamous.org/people/blake-wheeler-19860831.html",
    "https://allfamous.org/people/lucius-hoyos-20010831.html",
    "https://allfamous.org/people/emily-boo-19880831.html",
    "https://allfamous.org/people/simon-neil-19790831.html",
    "https://allfamous.org/people/intel-edits-20000831.html",
    "https://allfamous.org/people/alisa-sabirova-20080831.html",
    "https://allfamous.org/people/piculincito-20150831.html",
    "https://allfamous.org/people/tanner-delaney-20000831.html",
    "https://allfamous.org/people/viviane-audi-19930831.html",
    "https://allfamous.org/people/jamie-elliott-19920831.html",
    "https://allfamous.org/people/alexia-eram-20000831.html",
    "https://allfamous.org/people/lara-ann-19990831.html",
    "https://allfamous.org/people/candis-cayne-19710831.html",
    "https://allfamous.org/people/alex-richardson-19930831.html",
    "https://allfamous.org/people/elena-arenas-20010831.html",
    
    "https://allfamous.org/people/graysie-holmes-20000831.html",
    "https://allfamous.org/people/ondrej-pavelec-19870831.html",
    "https://allfamous.org/people/ryan-kesler-19840831.html",
    "https://allfamous.org/people/ricky-rayment-19900831.html",
    "https://allfamous.org/people/itzhak-perlman-19450831.html",
    "https://allfamous.org/people/larry-hankin-19400831.html",
    "https://allfamous.org/people/egyptian-lover-19630831.html",
    "https://allfamous.org/people/jack-thompson-19400831.html",
    "https://allfamous.org/people/zanna-van-dijk-19920831.html",
    "https://allfamous.org/people/rajkummar-rao-19840831.html",
    "https://allfamous.org/people/nick-slater-19880831.html",
    "https://allfamous.org/people/shyann-roberts-19960831.html",
    "https://allfamous.org/people/jalen-brunson-19960831.html",
    "https://allfamous.org/people/shima-bty-19870831.html",
    "https://allfamous.org/people/bella-lotz-20080831.html",
    "https://allfamous.org/people/andrew-de-leon-19920831.html",
    "https://allfamous.org/people/kissedbyken-19930831.html",
    "https://allfamous.org/people/ernesto-cazares-19990831.html",
    "https://allfamous.org/people/jaz-kuyper-19910831.html",
    "https://allfamous.org/people/goofy-ginger-19860831.html",
    "https://allfamous.org/people/mia-jenkins-20010831.html",
    "https://allfamous.org/people/oli-wright-19920831.html",
    "https://allfamous.org/people/kaleb-belizaire-20000831.html",
    "https://allfamous.org/people/jenae-heffington-20030831.html",
    "https://allfamous.org/people/larry-caputo-19560831.html",
    "https://allfamous.org/people/marc-webb-19740831.html",
    "https://allfamous.org/people/intak-20030831.html",
    "https://allfamous.org/people/cynical-historian-19880831.html",
    "https://allfamous.org/people/alicia-villarreal-19710831.html",
    "https://allfamous.org/people/savannah-hubbard-20060831.html",
    "https://allfamous.org/people/nikola-gruevski-19700831.html",
    "https://allfamous.org/people/alicia-ramsdell-19920831.html",
    "https://allfamous.org/people/jessica-forrest-19900831.html",
    "https://allfamous.org/people/jood-aziz-20010831.html",
    "https://allfamous.org/people/nina-garcia-20000831.html",
    "https://allfamous.org/people/kyngtavii-19950831.html",
    "https://allfamous.org/people/anthony-carranza-xdej.html",
    "https://allfamous.org/people/bailey-k-tiktok-star.html",
    "https://allfamous.org/people/tom-coughlin-19460831.html",
    "https://allfamous.org/people/yungtown-19900831.html",
    "https://allfamous.org/people/kirstie-allsopp-19710831.html",
    "https://allfamous.org/people/jimmy-mckenna-19530831.html",
    "https://allfamous.org/people/brent-morin-19860831.html",
    "https://allfamous.org/people/imani-knox-20010831.html",
    "https://allfamous.org/people/lance-moore-19830831.html",
    "https://allfamous.org/people/houda-hourani-19850831.html",
    "https://allfamous.org/people/malek-belizaire-20000831.html",
    "https://allfamous.org/people/molly-mcfadden-20010831.html",
    
    "https://allfamous.org/people/judika-sihotang-19780831.html",
    "https://allfamous.org/people/padraig-harrington-19710831.html",
    "https://allfamous.org/people/derrick-freske-19940831.html",
    "https://allfamous.org/people/zach-boucher-19970831.html",
    "https://allfamous.org/people/dana-hamm-19800831.html",
    "https://allfamous.org/people/erica-fett-19870831.html",
    "https://allfamous.org/people/katie-hall-19900831.html",
    "https://allfamous.org/people/ted-ligety-19840831.html",
    "https://allfamous.org/people/jason-boland-19870831.html",
    "https://allfamous.org/people/pete-kingston-19930831.html",
    "https://allfamous.org/people/jake-galluccio-20010831.html",
    "https://allfamous.org/people/rudolf-schenker-19480831.html",
    "https://allfamous.org/people/alex-cortex-tiktok-star.html",
    "https://allfamous.org/people/benny-banks-19890831.html",
    "https://allfamous.org/people/elis-ferreira-iesd.html",
    "https://allfamous.org/people/william-mcdowell-19760831.html",
    "https://allfamous.org/people/gia-macool-19860831.html",
    "https://allfamous.org/people/amanda-anisimova-20010831.html",
    "https://allfamous.org/people/mia-c-19900831.html",
    "https://allfamous.org/people/tsai-ing-wen-19560831.html",
    "https://allfamous.org/people/joselyn-dumas-19800831.html",
    "https://allfamous.org/people/malacueca-19930831.html",
    "https://allfamous.org/people/zack-ward-19700831.html",
    "https://allfamous.org/people/shubham-gandhi-19950831.html",
    "https://allfamous.org/people/iconical1-20050831.html",
    "https://allfamous.org/people/cata-freer-19910831.html",
    "https://allfamous.org/people/carley-belmonte-19900831.html",
    "https://allfamous.org/people/dawn-lyen-gardner-19850831.html",
    "https://allfamous.org/people/chris-rogers-19770831.html",
    "https://allfamous.org/people/francis-chan-19670831.html",
    "https://allfamous.org/people/cedric-soares-19910831.html",
    "https://allfamous.org/people/jason-farrell-19990831.html",
    "https://allfamous.org/people/siananscrivner-19970831.html",
    "https://allfamous.org/people/yuvan-shankar-raja-19790831.html",
    "https://allfamous.org/people/mona-marshall-19470831.html",
    "https://allfamous.org/people/sonya-rudskaya-20000831.html",
    "https://allfamous.org/people/bruno-santos-19790831.html",
    "https://allfamous.org/people/nabiha-bensouda-19860831.html",
    "https://allfamous.org/people/caiz-youtube-star.html",
    "https://allfamous.org/people/leyana-magat-19970831.html",
    "https://allfamous.org/people/ricky-duran-19890831.html",
    "https://allfamous.org/people/jayasurya-19780831.html",
    "https://allfamous.org/people/mike-erwin-19780831.html",
    "https://allfamous.org/people/malena-costa-sjogren-19890831.html",
    "https://allfamous.org/people/adrian32108-tiktok-star.html",
    "https://allfamous.org/people/jonathan-lapaglia-19690831.html",
    "https://allfamous.org/people/lucy-speed-19760831.html",
    "https://allfamous.org/people/todd-carty-19630831.html",
    
    "https://allfamous.org/people/jungkook-19970901.html",
    "https://allfamous.org/people/zendaya-19960901.html",
    "https://allfamous.org/people/sam-hurley-20030901.html",
    "https://allfamous.org/people/olivia-haschak-20050901.html",
    "https://allfamous.org/people/romeo-beckham-20020901.html",
    "https://allfamous.org/people/dr-phil-19500901.html",
    "https://allfamous.org/people/laura-lee-19880901.html",
    "https://allfamous.org/people/coyote-peterson-19810901.html",
    "https://allfamous.org/people/tessa-netting-19900901.html",
    "https://allfamous.org/people/eve-franke-20130901.html",
    "https://allfamous.org/people/chanel-west-coast-19880901.html",
    "https://allfamous.org/people/megan-nicole-19930901.html",
    "https://allfamous.org/people/alex-holtti-19940901.html",
    "https://allfamous.org/people/lil-blurry-20050901.html",
    "https://allfamous.org/people/meggi-lashes-usgm.html",
    "https://allfamous.org/people/rosie-lewis-19990901.html",
    "https://allfamous.org/people/cory-gruter-andrew-20010901.html",
    "https://allfamous.org/people/tion-wayne-19930901.html",
    "https://allfamous.org/people/lilan-bowden-19850901.html",
    "https://allfamous.org/people/indigo-white-19950901.html",
    "https://allfamous.org/people/joe-trohman-19840901.html",
    "https://allfamous.org/people/gloria-estefan-19570901.html",
    "https://allfamous.org/people/fin-argus-19980901.html",
    "https://allfamous.org/people/ricky-horror-19880901.html",
    "https://allfamous.org/people/kailand-morris-20010901.html",
    "https://allfamous.org/people/barry-gibb-19460901.html",
    "https://allfamous.org/people/sarah-jones-19850901.html",
    "https://allfamous.org/people/leroy-sanchez-19910901.html",
    "https://allfamous.org/people/danny-burke-19910901.html",
    "https://allfamous.org/people/josh-bastin-20020901.html",
    "https://allfamous.org/people/aleksandr-vitaly-19920901.html",
    "https://allfamous.org/people/rapunzel-asmr-19860901.html",
    "https://allfamous.org/people/bobby-moore-tiktok-star.html",
    "https://allfamous.org/people/daniel-sturridge-19890901.html",
    "https://allfamous.org/people/ryan-allen-19990901.html",
    "https://allfamous.org/people/daunte-baccus-19960901.html",
    "https://allfamous.org/people/noob3-19990901.html",
    "https://allfamous.org/people/lily-tomlin-19390901.html",
    "https://allfamous.org/people/carlos-sainz-jr-19940901.html",
    "https://allfamous.org/people/jason-linton-19780901.html",
    "https://allfamous.org/people/bianca-ryan-19940901.html",
    "https://allfamous.org/people/ruud-gullit-19620901.html",
    "https://allfamous.org/people/rayan-fahmi-20070901.html",
    "https://allfamous.org/people/brittany-matthews-19950901.html",
    "https://allfamous.org/people/erik-lamkin-19930901.html",
    "https://allfamous.org/people/taddl-19940901.html",
    "https://allfamous.org/people/danny-tran-20030901.html",
    "https://allfamous.org/people/kaylee-marie-20040901.html",
    
    "https://allfamous.org/people/bill-kaulitz-19890901.html",
    "https://allfamous.org/people/loredana-zefi-19950901.html",
    "https://allfamous.org/people/jaymes-young-19910901.html",
    "https://allfamous.org/people/alexis-olympia-ohanian-jr-20170901.html",
    "https://allfamous.org/people/chronicshah-20000901.html",
    "https://allfamous.org/people/padma-lakshmi-19700901.html",
    "https://allfamous.org/people/amy-anderson-19720901.html",
    "https://allfamous.org/people/issy-walsh-20040901.html",
    "https://allfamous.org/people/cassady-mcclincy-20000901.html",
    "https://allfamous.org/people/rawan-fahmi-20070901.html",
    "https://allfamous.org/people/cam-reddish-19990901.html",
    "https://allfamous.org/people/timothy-leeks-19980901.html",
    "https://allfamous.org/people/boyd-holbrook-19810901.html",
    "https://allfamous.org/people/stefan-de-vries-19950901.html",
    "https://allfamous.org/people/nuhchez-19990901.html",
    "https://allfamous.org/people/zendy-neves-de-pina-19970901.html",
    "https://allfamous.org/people/dario-medrano-19920901.html",
    "https://allfamous.org/people/nathan-mackinnon-19950901.html",
    "https://allfamous.org/people/tom-kaulitz-19890901.html",
    "https://allfamous.org/people/sirkazzio-19920901.html",
    "https://allfamous.org/people/thaddeus-markas-19940901.html",
    "https://allfamous.org/people/dan-gheesling-19830901.html",
    "https://allfamous.org/people/tim-kennedy-19790901.html",
    "https://allfamous.org/people/emma-wewearcute-20030901.html",
    "https://allfamous.org/people/hazelzquad-19980901.html",
    "https://allfamous.org/people/rachel-zoe-19710901.html",
    "https://allfamous.org/people/ned-napier-19950901.html",
    "https://allfamous.org/people/danny-cressey-19940901.html",
    "https://allfamous.org/people/jene-marie-20050901.html",
    "https://allfamous.org/people/bbgbrendan-19930901.html",
    "https://allfamous.org/people/brandon-mufalli-20000901.html",
    "https://allfamous.org/people/ashley-fongho-19920901.html",
    "https://allfamous.org/people/carl-benjamin-19790901.html",
    "https://allfamous.org/people/fern-deacon-19980901.html",
    "https://allfamous.org/people/lidia-zullo-20000901.html",
    "https://allfamous.org/people/maggie-budzyna-20000901.html",
    "https://allfamous.org/people/lyra-sheeran-20200901.html",
    "https://allfamous.org/people/itsmemadd-19950901.html",
    "https://allfamous.org/people/florina-kaja-19820901.html",
    "https://allfamous.org/people/tee-noir-3zbk.html",
    "https://allfamous.org/people/david-fung-19860901.html",
    "https://allfamous.org/people/mea-gold-19970901.html",
    "https://allfamous.org/people/faiza-rammuny-19840901.html",
    "https://allfamous.org/people/beckah-shae-19780901.html",
    "https://allfamous.org/people/taika-octavius-kwan-20170901.html",
    "https://allfamous.org/people/jasmine-carter-19930901.html",
    "https://allfamous.org/people/shoshana-bean-19770901.html",
    "https://allfamous.org/people/isla-donnelly-20180901.html",
    
    "https://allfamous.org/people/peter-ruppert-fqrn.html",
    "https://allfamous.org/people/asaf-goren-19910901.html",
    "https://allfamous.org/people/juan-pablo-villamil-19940901.html",
    "https://allfamous.org/people/john-kanell-cwkk.html",
    "https://allfamous.org/people/nico-conte-19880901.html",
    "https://allfamous.org/people/mats-zuccarello-19870901.html",
    "https://allfamous.org/people/sheena-melwani-19830901.html",
    "https://allfamous.org/people/adrian-romoff-20040901.html",
    "https://allfamous.org/people/tim-hardaway-19660901.html",
    "https://allfamous.org/people/bella-tierno-tiktok-star.html",
    "https://allfamous.org/people/chezzo-19990901.html",
    "https://allfamous.org/people/mia-swier-19850901.html",
    "https://allfamous.org/people/billy-blanks-19550901.html",
    "https://allfamous.org/people/jadagrace-19990901.html",
    "https://allfamous.org/people/steve-pemberton-19670901.html",
    "https://allfamous.org/people/josh-davis-19720901.html",
    "https://allfamous.org/people/jorden-shaw-20030901.html",
    "https://allfamous.org/people/megan-renee-19960901.html",
    "https://allfamous.org/people/burn-gorman-19740901.html",
    "https://allfamous.org/people/nabeel-19680901.html",
    "https://allfamous.org/people/jasmine-sagginario-19940901.html",
    "https://allfamous.org/people/yung-fran-symk.html",
    "https://allfamous.org/people/epikrika-20010901.html",
    "https://allfamous.org/people/kaiden-raiyn-20000901.html",
    "https://allfamous.org/people/karin-moskalensky-19940901.html",
    "https://allfamous.org/people/zoe-lister-jones-19820901.html",
    "https://allfamous.org/people/diego-marquez-20100901.html",
    "https://allfamous.org/people/scott-speedman-19750901.html",
    "https://allfamous.org/people/taryn-marler-19880901.html",
    "https://allfamous.org/people/itsdelayna-19980901.html",
    "https://allfamous.org/people/sam-cahill-19970901.html",
    "https://allfamous.org/people/maritza-rodriguez-19750901.html",
    "https://allfamous.org/people/munir-el-haddadi-19950901.html",
    "https://allfamous.org/people/jhonen-vasquez-19740901.html",
    "https://allfamous.org/people/sire-jackson-20120901.html",
    "https://allfamous.org/people/jawn-ha-19890901.html",
    "https://allfamous.org/people/mermaid-mo-19980901.html",
    "https://allfamous.org/people/kelly-lauren-19970901.html",
    "https://allfamous.org/people/jason-taylor-19740901.html",
    "https://allfamous.org/people/omar-rodriguez-lopez-19750901.html",
    "https://allfamous.org/people/kaansanity-19990901.html",
    "https://allfamous.org/people/amanda-bouldin-19860901.html",
    "https://allfamous.org/people/ahn-yujin-20030901.html",
    "https://allfamous.org/people/betty-cantrell-19940901.html",
    "https://allfamous.org/people/zuri-tibby-19950901.html",
    "https://allfamous.org/people/mandi-gardiner-19950901.html",
    "https://allfamous.org/people/exzd-19970901.html",
    "https://allfamous.org/people/anabel-englund-19920901.html",
    
    "https://allfamous.org/people/bbgsteven-19930901.html",
    "https://allfamous.org/people/shah-ahmed-20000901.html",
    "https://allfamous.org/people/jack-robinson-19930901.html",
    "https://allfamous.org/people/noon-huck-19900901.html",
    "https://allfamous.org/people/glitch-sixxle-20010901.html",
    "https://allfamous.org/people/slow-bucks-19870901.html",
    "https://allfamous.org/people/michael-adamthwaite-19810901.html",
    "https://allfamous.org/people/emil-rengle-19900901.html",
    "https://allfamous.org/people/sandra-sahi-19990901.html",
    "https://allfamous.org/people/patrick-holt-19670901.html",
    "https://allfamous.org/people/lara-pulver-19800901.html",
    "https://allfamous.org/people/james-nguyen-19660901.html",
    "https://allfamous.org/people/sevdaliza-19870901.html",
    "https://allfamous.org/people/madison-brown-belafonte-20110901.html",
    "https://allfamous.org/people/taylor-blackwell-19980901.html",
    "https://allfamous.org/people/ceceiswoke-tiktok-star.html",
    "https://allfamous.org/people/jacob-ewaniuk-20000901.html",
    "https://allfamous.org/people/kelsey-wells-19900901.html",
    "https://allfamous.org/people/lachlan-waugh-19910901.html",
    "https://allfamous.org/people/kieran-lee-19920901.html",
    "https://allfamous.org/people/louise-delos-reyes-19930901.html",
    "https://allfamous.org/people/gael-monfils-19860901.html",
    "https://allfamous.org/people/ullyses-webb-basa-19930901.html",
    "https://allfamous.org/people/natalie-bassingthwaighte-19750901.html",
    "https://allfamous.org/people/sean-stewart-19800901.html",
    "https://allfamous.org/people/ihssane-benalluch-19970901.html",
    "https://allfamous.org/people/mariano-razo-19990901.html",
    "https://allfamous.org/people/a-raww-the-machine-19960901.html",
    "https://allfamous.org/people/calais-campbell-19860901.html",
    "https://allfamous.org/people/dayrvir-20000901.html",
    "https://allfamous.org/people/skye-townsend-19930901.html",
    "https://allfamous.org/people/sophia-vegas-wollersheim-19870901.html",
    "https://allfamous.org/people/yesly-dimate-rh54.html",
    "https://allfamous.org/people/stella-mwangi-19860901.html",
    "https://allfamous.org/people/jannah-kissmi-19910901.html",
    "https://allfamous.org/people/lil-boii-kantu-19980901.html",
    "https://allfamous.org/people/jon-etheridge-19820901.html",
    "https://allfamous.org/people/danny-muro-20000901.html",
    "https://allfamous.org/people/babydaddy-19760901.html",
    "https://allfamous.org/people/teresa-andres-gonzalvo-19930901.html",
    "https://allfamous.org/people/zach-thomas-19730901.html",
    "https://allfamous.org/people/kathleen-de-leon-jones-19770901.html",
    "https://allfamous.org/people/boraslegend-19920901.html",
    "https://allfamous.org/people/mike-kaufman-19920901.html",
    "https://allfamous.org/people/lea-sirk-19890901.html",
    "https://allfamous.org/people/silje-norendal-19930901.html",
    "https://allfamous.org/people/renars-kaupers-19740901.html",
    "https://allfamous.org/people/gato0901-20000901.html",
    
    "https://allfamous.org/people/ricky-merino-19860901.html",
    "https://allfamous.org/people/charlie-robison-19640901.html",
    "https://allfamous.org/people/morven-christie-19810901.html",
    "https://allfamous.org/people/april-gloria-19870901.html",
    "https://allfamous.org/people/adolfo-angel-19630901.html",
    "https://allfamous.org/people/lisalisad1-19700901.html",
    "https://allfamous.org/people/ray-darcy-19640901.html",
    "https://allfamous.org/people/dean-sherwood-19860901.html",
    "https://allfamous.org/people/kirani-james-19920901.html",
    "https://allfamous.org/people/boney-james-19610901.html",
    "https://allfamous.org/people/ricardo-chavira-19710901.html",
    "https://allfamous.org/people/jamie-spicer-lewis-19870901.html",
    "https://allfamous.org/people/chloeandcosmetics-20000901.html",
    "https://allfamous.org/people/allen-jones-19370901.html",
    "https://allfamous.org/people/chul-soon-19830901.html",
    "https://allfamous.org/people/maddy-mchugh-19930901.html",
    "https://allfamous.org/people/hyelim-19920901.html",
    "https://allfamous.org/people/lena-perminova-19860901.html",
    "https://allfamous.org/people/amy-walker-19820901.html",
    "https://allfamous.org/people/alexander-conti-19930901.html",
    "https://allfamous.org/people/fsd8-19970901.html",
    "https://allfamous.org/people/jite-agege-20000901.html",
    "https://allfamous.org/people/joseph-williams-19600901.html",
    "https://allfamous.org/people/jay-armstrong-johnson-19870901.html",
    "https://allfamous.org/people/josh-okogie-19980901.html",
    "https://allfamous.org/people/clinton-portis-19810901.html",
    "https://allfamous.org/people/jorge-aparicio-20010901.html",
    "https://allfamous.org/people/shawn-sutton-dddx.html",
    "https://allfamous.org/people/spacejam-jaye-19900901.html",
    "https://allfamous.org/people/ram-kapoor-19730901.html",
    "https://allfamous.org/people/damon-vincent-rktm.html",
    "https://allfamous.org/people/angaleena-presley-19760901.html",
    "https://allfamous.org/people/maliboo-ziegler-20130901.html",
    "https://allfamous.org/people/jamie-hauptmann-19950901.html",
    "https://allfamous.org/people/nora-gharib-19930901.html",
    "https://allfamous.org/people/amalia-foy-20010901.html",
    "https://allfamous.org/people/mushfiqur-rahim-19880901.html",
    "https://allfamous.org/people/vahe-sevani-19880901.html",
    "https://allfamous.org/people/sidney-rice-19860901.html",
    "https://allfamous.org/people/aiden-jude-20030901.html",
    "https://allfamous.org/people/jacopo-sarno-19890901.html",
    "https://allfamous.org/people/magic-singh-19850901.html",
    "https://allfamous.org/people/karlie-thoma-19970901.html",
    "https://allfamous.org/people/jovanny-cadena-19880901.html",
    "https://allfamous.org/people/miles-plumlee-19880901.html",
    "https://allfamous.org/people/lyra-aoko-19920901.html",
    "https://allfamous.org/people/sydney-merrill-19960901.html",
    "https://allfamous.org/people/litzy-torres-20000901.html",
    
    "https://allfamous.org/people/hayley-leblanc-20080902.html",
    "https://allfamous.org/people/kian-lawley-19950902.html",
    "https://allfamous.org/people/leah-ashe-19930902.html",
    "https://allfamous.org/people/thomas-petrou-19980902.html",
    "https://allfamous.org/people/chance-sutton-19960902.html",
    "https://allfamous.org/people/madilyn-bailey-19920902.html",
    "https://allfamous.org/people/keanu-reeves-19640902.html",
    "https://allfamous.org/people/romina-gafur-19990902.html",
    "https://allfamous.org/people/isabelle-ingham-20050902.html",
    "https://allfamous.org/people/zedd-19890902.html",
    "https://allfamous.org/people/imdontai-19920902.html",
    "https://allfamous.org/people/salma-hayek-19660902.html",
    "https://allfamous.org/people/erika-titus-jqbe.html",
    "https://allfamous.org/people/ross-smith-19920902.html",
    "https://allfamous.org/people/eugenio-derbez-19610902.html",
    "https://allfamous.org/people/jden-20080902.html",
    "https://allfamous.org/people/nia-rader-19880902.html",
    "https://allfamous.org/people/gavin-casalegno-19990902.html",
    "https://allfamous.org/people/mark-harmon-19510902.html",
    "https://allfamous.org/people/charles-trippy-19840902.html",
    "https://allfamous.org/people/katt-williams-19710902.html",
    "https://allfamous.org/people/du-shaunt-stegall-19940902.html",
    "https://allfamous.org/people/lala-kent-19900902.html",
    "https://allfamous.org/people/twosync-mat-19880902.html",
    "https://allfamous.org/people/lee-simms-20020902.html",
    "https://allfamous.org/people/kelly-kim-pkdc.html",
    "https://allfamous.org/people/brandon-ingram-19970902.html",
    "https://allfamous.org/people/andrew-rea-19870902.html",
    "https://allfamous.org/people/spencer-smith-19870902.html",
    "https://allfamous.org/people/terry-bradshaw-19480902.html",
    "https://allfamous.org/people/tamara-avinami-20030902.html",
    "https://allfamous.org/people/naz-izi-19860902.html",
    "https://allfamous.org/people/patrick-cloud-19890902.html",
    "https://allfamous.org/people/austin-abrams-19960902.html",
    "https://allfamous.org/people/roman-serfaty-20080902.html",
    "https://allfamous.org/people/mohsin-saleh-20140902.html",
    "https://allfamous.org/people/nijhea-aniah-20030902.html",
    "https://allfamous.org/people/syleena-johnson-19760902.html",
    "https://allfamous.org/people/lilyan-cole-20000902.html",
    "https://allfamous.org/people/jake-ryan-19830902.html",
    "https://allfamous.org/people/marina-yers-19990902.html",
    "https://allfamous.org/people/maile-hammahz-20020902.html",
    "https://allfamous.org/people/tamra-barney-19670902.html",
    "https://allfamous.org/people/sydney-renae-19940902.html",
    "https://allfamous.org/people/jamie-zhu-19930902.html",
    "https://allfamous.org/people/sierra-neudeck-20010902.html",
    "https://allfamous.org/people/harvey-levin-19500902.html",
    "https://allfamous.org/people/isaiah-russell-20030902.html",
    
    "https://allfamous.org/people/faye-chrisley-19430902.html",
    "https://allfamous.org/people/natalie-coppes-19980902.html",
    "https://allfamous.org/people/nate-archibald-19480902.html",
    "https://allfamous.org/people/isimeme-edeko-19940902.html",
    "https://allfamous.org/people/ysabelle-cuevas-19960902.html",
    "https://allfamous.org/people/luana-vjollca-19910902.html",
    "https://allfamous.org/people/guessjae-19990902.html",
    "https://allfamous.org/people/jack-vale-19730902.html",
    "https://allfamous.org/people/jairus-kersey-19910902.html",
    "https://allfamous.org/people/rutger-vink-19890902.html",
    "https://allfamous.org/people/samantha-black-19840902.html",
    "https://allfamous.org/people/bispen-youtube-star.html",
    "https://allfamous.org/people/valentina-fradegrada-19910902.html",
    "https://allfamous.org/people/nigel-jones-19920902.html",
    "https://allfamous.org/people/camille-grammer-19680902.html",
    "https://allfamous.org/people/sungha-jung-19960902.html",
    "https://allfamous.org/people/scott-moir-19870902.html",
    "https://allfamous.org/people/claraandherself-19960902.html",
    "https://allfamous.org/people/marcus-black-19860902.html",
    "https://allfamous.org/people/jackie-wyers-19950902.html",
    "https://allfamous.org/people/amie-jay-19900902.html",
    "https://allfamous.org/people/tineke-younger-20010902.html",
    "https://allfamous.org/people/keith-allen-19530902.html",
    "https://allfamous.org/people/johanna-ottosson-20030902.html",
    "https://allfamous.org/people/arin-ray-19950902.html",
    "https://allfamous.org/people/damson-idris-19910902.html",
    "https://allfamous.org/people/pawan-kalyan-19710902.html",
    "https://allfamous.org/people/egypt-criss-19980902.html",
    "https://allfamous.org/people/merritt-patterson-19900902.html",
    "https://allfamous.org/people/jasmine-fares-19950902.html",
    "https://allfamous.org/people/felly-19950902.html",
    "https://allfamous.org/people/strawberryyuu-20020902.html",
    "https://allfamous.org/people/ella-rae-wahlberg-20030902.html",
    "https://allfamous.org/people/travis-dean-19770902.html",
    "https://allfamous.org/people/perrin-hooper-20010902.html",
    "https://allfamous.org/people/marcus-morris-19890902.html",
    "https://allfamous.org/people/lennox-lewis-19650902.html",
    "https://allfamous.org/people/cistreactz-20010902.html",
    "https://allfamous.org/people/malachiae-warren-19950902.html",
    "https://allfamous.org/people/alfa-19660902.html",
    "https://allfamous.org/people/alexys-cruz-19990902.html",
    "https://allfamous.org/people/yani-gellman-19850902.html",
    "https://allfamous.org/people/aleksander-barkov-jr-19950902.html",
    "https://allfamous.org/people/bibiana-julian-19870902.html",
    "https://allfamous.org/people/paris-nicole-19890902.html",
    "https://allfamous.org/people/chink-santana-19720902.html",
    "https://allfamous.org/people/devorah-kuperhand-19890902.html",
    "https://allfamous.org/people/big-cash-cass-20010902.html",
    
    "https://allfamous.org/people/michael-zee-19850902.html",
    "https://allfamous.org/people/dina-dash-19940902.html",
    "https://allfamous.org/people/lex-lu-19910902.html",
    "https://allfamous.org/people/robine-salomons-20010902.html",
    "https://allfamous.org/people/matthew-wentworth-19880902.html",
    "https://allfamous.org/people/hudson-sheaffer-19890902.html",
    "https://allfamous.org/people/mina-tobias-19930902.html",
    "https://allfamous.org/people/markieff-morris-19890902.html",
    "https://allfamous.org/people/k-ci-19690902.html",
    "https://allfamous.org/people/crispyrob-19930902.html",
    "https://allfamous.org/people/camila-escribens-19980902.html",
    "https://allfamous.org/people/shady-cosplay-20030902.html",
    "https://allfamous.org/people/charlie-walk-19660902.html",
    "https://allfamous.org/people/ashley-slimeyoda-instagram-star.html",
    "https://allfamous.org/people/mary-jo-catlett-19380902.html",
    "https://allfamous.org/people/jack-messina-20070902.html",
    "https://allfamous.org/people/gyasi-zardes-19910902.html",
    "https://allfamous.org/people/braiden-wood-19930902.html",
    "https://allfamous.org/people/sam-taylor-19990902.html",
    "https://allfamous.org/people/jauz-19930902.html",
    "https://allfamous.org/people/joey-barton-19820902.html",
    "https://allfamous.org/people/patrick-kenneth-20000902.html",
    "https://allfamous.org/people/sniper-j0nes-19940902.html",
    "https://allfamous.org/people/eric-dickerson-19600902.html",
    "https://allfamous.org/people/raghad-hussein-19680902.html",
    "https://allfamous.org/people/austin-forkner-19980902.html",
    "https://allfamous.org/people/keir-starmer-19620902.html",
    "https://allfamous.org/people/sudeep-19730902.html",
    "https://allfamous.org/people/jonathan-goldstein-19680902.html",
    "https://allfamous.org/people/ravn-19950902.html",
    "https://allfamous.org/people/daniel-vargas-19870902.html",
    "https://allfamous.org/people/marcus-ericsson-19900902.html",
    "https://allfamous.org/people/chris-grabenstein-19550902.html",
    "https://allfamous.org/people/andrew-kantarias-19940902.html",
    "https://allfamous.org/people/emiliano-martinez-19920902.html",
    "https://allfamous.org/people/montana-cox-19930902.html",
    "https://allfamous.org/people/tayler-buono-19930902.html",
    "https://allfamous.org/people/allison-miller-19850902.html",
    "https://allfamous.org/people/josh-bryant-mzxw.html",
    "https://allfamous.org/people/shayla-worley-19900902.html",
    "https://allfamous.org/people/brittany-sky-19880902.html",
    "https://allfamous.org/people/vance-degeneres-19540902.html",
    "https://allfamous.org/people/juron-20010902.html",
    "https://allfamous.org/people/cynthia-watros-19680902.html",
    "https://allfamous.org/people/dain-yoon-19930902.html",
    "https://allfamous.org/people/george-conway-19630902.html",
    "https://allfamous.org/people/alexandre-pato-19890902.html",
    "https://allfamous.org/people/qb-black-diamond-19900902.html",
    
    "https://allfamous.org/people/jake-bundrick-19830902.html",
    "https://allfamous.org/people/mark-battles-19910902.html",
    "https://allfamous.org/people/gabe-eggerling-20030902.html",
    "https://allfamous.org/people/jayden-martinez-20000902.html",
    "https://allfamous.org/people/dylan-mayoral-19970902.html",
    "https://allfamous.org/people/rojay-mlp-gu8d.html",
    "https://allfamous.org/people/carlos-valderrama-19610902.html",
    "https://allfamous.org/people/sam-mitchell-19630902.html",
    "https://allfamous.org/people/sophie-lloyd-19960902.html",
    "https://allfamous.org/people/matt-moneymaker-19650902.html",
    "https://allfamous.org/people/nikki-taylor-melton-19970902.html",
    "https://allfamous.org/people/ama-qamata-19980902.html",
    "https://allfamous.org/people/walker-diggs-20090902.html",
    "https://allfamous.org/people/mazin-elsadig-19870902.html",
    "https://allfamous.org/people/atz-kilcher-sr-19470902.html",
    "https://allfamous.org/people/sue-cleaver-19630902.html",
    "https://allfamous.org/people/berguzar-korel-19820902.html",
    "https://allfamous.org/people/rae-morris-19920902.html",
    "https://allfamous.org/people/nikolas-dukic-20030902.html",
    "https://allfamous.org/people/matthew-chapman-19500902.html",
    "https://allfamous.org/people/montell-van-leijen-19980902.html",
    "https://allfamous.org/people/shauna-sand-19710902.html",
    "https://allfamous.org/people/tati-sacramento-19810902.html",
    "https://allfamous.org/people/io-tillett-wright-19850902.html",
    "https://allfamous.org/people/evan-engram-19940902.html",
    "https://allfamous.org/people/kakai-bautista-19780902.html",
    "https://allfamous.org/people/larry-smith-19470902.html",
    "https://allfamous.org/people/tony-alva-19570902.html",
    "https://allfamous.org/people/aimee-osbourne-19830902.html",
    "https://allfamous.org/people/dj-jr-19870902.html",
    "https://allfamous.org/people/jimmy-connors-19520902.html",
    "https://allfamous.org/people/lindi-nunziato-19870902.html",
    "https://allfamous.org/people/hendersin-19880902.html",
    "https://allfamous.org/people/jessica-wilde-19880902.html",
    "https://allfamous.org/people/tirahanees-19980902.html",
    "https://allfamous.org/people/javi-martinez-19880902.html",
    "https://allfamous.org/people/tessa-barresi-19990902.html",
    "https://allfamous.org/people/lyrics-born-19720902.html",
    "https://allfamous.org/people/robert-shapiro-19420902.html",
    "https://allfamous.org/people/danielle-fogarty-19910902.html",
    "https://allfamous.org/people/ayman-sadiq-19920902.html",
    "https://allfamous.org/people/greg-remmey-19890902.html",
    "https://allfamous.org/people/soosuperior-19970902.html",
    "https://allfamous.org/people/nicholas-torres-19990902.html",
    "https://allfamous.org/people/taj-speights-19970902.html",
    "https://allfamous.org/people/playa-fly-19770902.html",
    "https://allfamous.org/people/ayla-dimitri-19940902.html",
    "https://allfamous.org/people/riley-b-smith-20050902.html",
    
    "https://allfamous.org/people/sylvan-lacue-19900902.html",
    "https://allfamous.org/people/funky-matas-19870902.html",
    "https://allfamous.org/people/mike-duce-19880902.html",
    "https://allfamous.org/people/stephen-brenland-cijz.html",
    "https://allfamous.org/people/carley-wynn-20050902.html",
    "https://allfamous.org/people/cati-brown-19950902.html",
    "https://allfamous.org/people/layla-ong-19960902.html",
    "https://allfamous.org/people/haley-powell-20020902.html",
    "https://allfamous.org/people/linda-purl-19550902.html",
    "https://allfamous.org/people/ronald-torreyes-19920902.html",
    "https://allfamous.org/people/necole-kane-19860902.html",
    "https://allfamous.org/people/jonathan-kite-19790902.html",
    "https://allfamous.org/people/davyd-winter-bates-19850902.html",
    "https://allfamous.org/people/josh-veldhuizen-19860902.html",
    "https://allfamous.org/people/dan-southworth-19740902.html",
    "https://allfamous.org/people/faye-mata-19920902.html",
    "https://allfamous.org/people/lucas-nardella-20020902.html",
    "https://allfamous.org/people/alexander-povetkin-19790902.html",
    "https://allfamous.org/people/justine-wilson-19720902.html",
    "https://allfamous.org/people/lakshmi-mittal-19500902.html",
    "https://allfamous.org/people/ishant-sharma-19880902.html",
    "https://allfamous.org/people/bobbi-dean-19890902.html",
    "https://allfamous.org/people/ryan-oconnell-19860902.html",
    "https://allfamous.org/people/nia-romero-19970902.html",
    "https://allfamous.org/people/brenda-patea-19930902.html",
    "https://allfamous.org/people/tuc-watkins-19660902.html",
    "https://allfamous.org/people/orcino-tan-19940902.html",
    "https://allfamous.org/people/ronela-hajati-19890902.html",
    "https://allfamous.org/people/tyler-smith-19940902.html",
    "https://allfamous.org/people/sebastian-rodriguez-19970902.html",
    "https://allfamous.org/people/shane-oneill-19930902.html",
    "https://allfamous.org/people/will-hernandez-19950902.html",
    "https://allfamous.org/people/gab-loste-19970902.html",
    "https://allfamous.org/people/andres-parcerito-19960902.html",
    "https://allfamous.org/people/kellya-harris-20000902.html",
    "https://allfamous.org/people/ashwini-koul-19930902.html",
    "https://allfamous.org/people/brian-westbrook-19790902.html",
    "https://allfamous.org/people/chazofftopic-19960902.html",
    "https://allfamous.org/people/tim-key-19760902.html",
    "https://allfamous.org/people/safyre-terry-20070902.html",
    "https://allfamous.org/people/ben-towers-19980902.html",
    "https://allfamous.org/people/yuko-calero-19840902.html",
    "https://allfamous.org/people/anthony-hernandez-19860902.html",
    "https://allfamous.org/people/isaiah-martinez-19940902.html",
    "https://allfamous.org/people/gary-hollywood-19790902.html",
    "https://allfamous.org/people/alexandre-braz-20070902.html",
    "https://allfamous.org/people/humberto-zurita-19540902.html",
    "https://allfamous.org/people/joshua-henry-19840902.html",
]
 

const app = express()
const port = 3000;
app.get('/', (req, res) => {
        res.header("Content-Type",'application/json');
        res.type('json').send(JSON.stringify(tables, null, 2) + '\n');
   
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 

requestOne = [];
 
init = 0;  
for(j = 0; j < queue.length; j++) {
 item =   queue[j];
 console.log(item);
 req_url = encodeURI(item);      
 requestOne[init] = axios.get(req_url);  
 init++;

}
 
var tables = [];
 var s = 0;
axios.all(requestOne).then(
axios.spread((...responses) => {
for (let i = 0; i < responses.length; i++) {

const $ = cheerio.load(responses[i].data)
 
table = {};
s = s+i;

 
 celeb_name = $('#name')[0].childNodes[0].data;
 celeb_profession = $('.prof-main').text();
 cleb_date_month_birthday = $('h2.tabs-name a').attr('href').replace('/birthday/','');

cleb_facts = [];
death_year = birth_year = zodaic_sign = birth_place_country_or_state = birth_place_city = death_day_mnth = '';

urlKey = responses[i].request.path.trim();
table['url_key_of_scrapping_page'] = urlKey;
 
name_identifier_by_number = Math.abs(Math.floor(1000 + Math.random() * 9000));
table['name_identifier_by_number'] = name_identifier_by_number;
table['url_slug_people'] = celeb_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') +'-' + name_identifier_by_number;

faq = {};
faq['lable'] = [];
faq['value'] = [];
// $ns = $('h3[data-id^="faq_"]');
// if($ns.length > 0){
//   shuffle($ns).each(function(i, v) {
//        faq['lable'] .push($(this).text());
//        faq['value'].push($(this).next('p').html());
//   });
// }
 
table['faq'] = faq;

 
about = {};
about['heading'] = [];
about['description'] = [];
 
// $('#bio').children('h2').each(function(i, v) {
//      about['heading'].push($(this).text());
//      about['description'].push($(this).next('p').html());
// });

// table['about'] = about;
 
// if($('#about').parent('h2').prev().hasClass('ad-box')) {
// table['wiki_desc'] = '';
 
// }else if($('#about').parent('h2').prev('table').hasClass('wikibox')){

//   htmlTable = '';
//   if($('#about').parent('h2').prev('table').prev('div').not('.ad-box').length) {
//     htmlTable += '<p>' + $('#about').parent('h2').prev('table').prev('div').html() +'</p>';
//   }
 
//  htmlTable += '<table id="extra_desc_wk" class="table table-bordered"><tbody>';
 
//    $c = $('#about').parent('h2').prev('table').find('tr');
//    shuffle($c).each(function(i, v) {
//       htmlTable += '<tr><td class="label-tb">' + $(this).children('td.wk_label').text() + '</td><td class="label-val">' + $(this).children('td.wk_value').text() + '</td></tr>';
// })
//   htmlTable += '</tbody></table>';

//   table['wiki_desc'] = htmlTable;
 
// }else {
//    table['wiki_desc'] = '<p>' +$('#about').parent('h2').prev('div').html() +'</p>';
// }
 
celeb_wiki_img_post_url = $('figure.img-post img').attr('data-src');

table['wikiimage'] = '';
 
if(celeb_wiki_img_post_url) {

   var str = celeb_name;
   str_img_name = table['url_slug_people'];
 
      (async () => {
      var new_img_name_created = 'wiki-' + str_img_name + "-"+ i +'';

      const downloader = new Downloader({
        url: ""+celeb_wiki_img_post_url+"",
        fileName: new_img_name_created+'.jpg',
        cloneFiles: false,
        skipExistingFileName : true,
        timeout: 100000,
        directory: "./wiki-images",  
        onBeforeSave: (deducedName) => {
          console.log(`The file name is: ${deducedName}`);
        },
      });

        table['wikiimage'] =  new_img_name_created+'.jpg';

      try {
        await downloader.download();
      } catch (error) {
        console.log(error);
      }
    })();
}

 
 // $('#facts .fitem').each(function(i, v) {

 //   cleb_facts['label'] = $(this).find('.flab').text().trim() ;
 //   cleb_facts['value'] = $(this).find('.fval').text().trim() ;
   
 //   if(cleb_facts['label'] == 'Birthday') {
 //     birth_year = $(this).find('.fval a.hu').text();
 //     return;
 //   }

 //  if(cleb_facts['label'] == 'Death day') {
 //      death_day_mnth = $(this).find('.fval a').eq(0).text();
 //      death_year = $(this).find('.fval a').eq(1).text();  
 //      return;
 //   }

 //   if(cleb_facts['label'] == 'Birthplace') {

 //     place_type = $(this).find('.fval a').eq(0).attr('href');


 //     if($(this).find('.fval a').length == 1) {
       
 //      if(place_type.indexOf('city') !== -1) {
 //        birth_place_city = $(this).find('.fval a').eq(0).text().trim();
 //      }
 //      if(place_type.indexOf('birthplace') !== -1) {
 //         birth_place_country_or_state = $(this).find('.fval a').eq(0).text().trim();
 //      }
 //     }

 //      if($(this).find('.fval a').length == 2) {
       
 //        if(place_type.indexOf('city') !== -1) {
 //          birth_place_city = $(this).find('.fval a').eq(0).text().trim();
 //        }

 //         if($(this).find('.fval a').eq(1).attr('href').indexOf('birthplace') !== -1) {
 //            birth_place_country_or_state = $(this).find('.fval a').eq(1).text().trim();
 //        }
 //      }
     
 //   }

 //    if(cleb_facts['label'] == 'Zodiac Sign') {
 //      zodaic_sign = $(this).find('.fval').text().trim();
 //      return;
 //   }
   
 // });



  imgs_att_data = [];
  table['imgs_att_data'] = [];
  celeb_images = $('.slidershow').children('div').find('img');

  var str = table['url_slug_people'];
  str_img_name = str;

  celeb_images.each(function(i, v) {
     // if(i > 5) {return;}
      img = $(this).attr('data-src');

    if(img.includes('default.svg')) {
      return;
    }
 
    (async () => {
      var new_img_name_created = str_img_name + "-"+ i +'';

      const downloader = new Downloader({
        url: ""+img+"",
        fileName: new_img_name_created+'.jpg',
        cloneFiles: false,
        skipExistingFileName : true,
        timeout: 100000,
        directory: "./images", //Sub directories will also be automatically created if they do not exist.
        onBeforeSave: (deducedName) => {
          console.log(`The file name is: ${deducedName}`);
          //If you return a string here, it will be used as the name(that includes the extension!).
        },
      });
        imgs_att_data.push(new_img_name_created+'.jpg');

        table['imgs_att_data'] =  imgs_att_data;

      try {
        await downloader.download();
      } catch (error) {
        console.log(error);
      }
    })();

 
  })



 
 table['name'] =  celeb_name;  
 table['profession'] =  celeb_profession;
 table['birthday'] = cleb_date_month_birthday;  
 table['birth_year'] = birth_year;
 table['death_year'] = death_year;
 table['death_day_mnth'] = death_day_mnth;
 table['birth_place_country_or_state'] =  birth_place_country_or_state;
 table['birth_place_city'] =  birth_place_city;
 table['zodaic_sign'] =  zodaic_sign;
  tables.push(table) ;
console.log(tables);  
}
   // console.log(`$quotes['oscar-wilde'] = ${JSON.stringify(table)}`);
})
).catch((errors) => {
    console.error(errors, ': Error');
});



function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
