 
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
  "https://allfamous.org/people/somaline-ang-19940816.html",
    "https://allfamous.org/people/ryan-kerrigan-19880816.html",
    "https://allfamous.org/people/arvind-kejriwal-19680816.html",
    "https://allfamous.org/people/paige-eli-20040816.html",
    "https://allfamous.org/people/jennifer-donnelly-19630816.html",
    "https://allfamous.org/people/camille-charriere-19870816.html",
    "https://allfamous.org/people/christine-gambito-19760816.html",
    "https://allfamous.org/people/micah-our-tribe-of-many-20080816.html",
    "https://allfamous.org/people/yukwon-toney-20020816.html",
    "https://allfamous.org/people/kayla-erin-19960816.html",
    "https://allfamous.org/people/heidi-hamoud-19940816.html",
    "https://allfamous.org/people/ulrika-jonsson-19670816.html",
    "https://allfamous.org/people/trey-flowers-19930816.html",
    "https://allfamous.org/people/john-aron-19960816.html",
    "https://allfamous.org/people/kevin-williams-19800816.html",
    "https://allfamous.org/people/zack-villere-19960816.html",
    "https://allfamous.org/people/esmeralda-gudino-19970816.html",
    "https://allfamous.org/people/mlp-lights-20010816.html",
    "https://allfamous.org/people/ryan-adrian-muniz-20030816.html",
    "https://allfamous.org/people/ofosu-jones-quartey-2tby.html",
    "https://allfamous.org/people/billy-sanchez-20010816.html",
    "https://allfamous.org/people/zach-cowman-duju.html",
    "https://allfamous.org/people/jack-devlin-19920816.html",
    "https://allfamous.org/people/paul-sun-hyung-lee-19720816.html",
    "https://allfamous.org/people/hanan-baker-younis-19770816.html",
    "https://allfamous.org/people/miss-charli-uizy.html",
    "https://allfamous.org/people/sarah-jeanne-labrosse-19910816.html",
    "https://allfamous.org/people/charley-jenni-tiktok-star.html",
    "https://allfamous.org/people/jasmine-hiltl-20000816.html",
    "https://allfamous.org/people/fatiha-rouf-19840816.html",
    "https://allfamous.org/people/yua-mikami-19930816.html",
    "https://allfamous.org/people/victoria-swarovski-19930816.html",
    "https://allfamous.org/people/saskia-reeves-19610816.html",
    "https://allfamous.org/people/tommicus-walker-19800816.html",
    "https://allfamous.org/people/niran-yalaz-19960816.html",
    "https://allfamous.org/people/chime-edwards-19850816.html",
    "https://allfamous.org/people/anmol-bhatia-19950816.html",
    "https://allfamous.org/people/corry-weller-19710816.html",
    "https://allfamous.org/people/rarmian-newton-19930816.html",
    "https://allfamous.org/people/tami-williams-19980816.html",
    "https://allfamous.org/people/herson-cortez-20040816.html",
    "https://allfamous.org/people/emily-robison-19720816.html",
    "https://allfamous.org/people/ronald-fenty-19540816.html",
    
    "https://allfamous.org/people/the-kid-laroi-20030817.html",
    "https://allfamous.org/people/lil-pump-20000817.html",
    "https://allfamous.org/people/cody-orlove-20010817.html",
    "https://allfamous.org/people/leilani-20010817.html",
    "https://allfamous.org/people/kayla-davis-20040817.html",
    "https://allfamous.org/people/brooklyn-frost-20040817.html",
    "https://allfamous.org/people/andrea-espada-19860817.html",
    "https://allfamous.org/people/justin-roberts-20020817.html",
    "https://allfamous.org/people/clara-lukasiak-20090817.html",
    "https://allfamous.org/people/jude-flores-20050817.html",
    "https://allfamous.org/people/sydney-vezina-20030817.html",
    "https://allfamous.org/people/lexy-kolker-20090817.html",
    "https://allfamous.org/people/austin-butler-19910817.html",
    "https://allfamous.org/people/taissa-farmiga-19940817.html",
    "https://allfamous.org/people/paige-19920817.html",
    "https://allfamous.org/people/robert-de-niro-19430817.html",
    "https://allfamous.org/people/yazan-diab-20030817.html",
    "https://allfamous.org/people/yourrage-19970817.html",
    "https://allfamous.org/people/jessismiles-19930817.html",
    "https://allfamous.org/people/joyner-lucas-19880817.html",
    "https://allfamous.org/people/phoebe-bridgers-19940817.html",
    "https://allfamous.org/people/kylie-muse-20050817.html",
    "https://allfamous.org/people/jelena-karleusa-19780817.html",
    "https://allfamous.org/people/donnie-wahlberg-19690817.html",
    "https://allfamous.org/people/qwerticorn-20010817.html",
    "https://allfamous.org/people/lil-b-19890817.html",
    "https://allfamous.org/people/lincoln-hoellein-20150817.html",
    "https://allfamous.org/people/jayy-von-monroe-19910817.html",
    "https://allfamous.org/people/tammy-townsend-19700817.html",
    "https://allfamous.org/people/jawsh-20000817.html",
    "https://allfamous.org/people/zashia-santiago-19890817.html",
    "https://allfamous.org/people/sean-penn-19600817.html",
    "https://allfamous.org/people/thierry-henry-19770817.html",
    "https://allfamous.org/people/timothy-heller-19920817.html",
    "https://allfamous.org/people/didi-costine-20050817.html",
    "https://allfamous.org/people/madison-axford-19960817.html",
    "https://allfamous.org/people/sammy-briese-20040817.html",
    "https://allfamous.org/people/thomas-headon-20000817.html",
    "https://allfamous.org/people/gracie-gold-19950817.html",
    "https://allfamous.org/people/jon-olsson-19820817.html",
    "https://allfamous.org/people/along-came-abby-v9n7.html",
    "https://allfamous.org/people/austin-waller-tiktok-star.html",
    "https://allfamous.org/people/cove-ferris-20190817.html",
    "https://allfamous.org/people/failboat-19950817.html",
    "https://allfamous.org/people/lady-c-19490817.html",
    "https://allfamous.org/people/james-tindale-19900817.html",
    "https://allfamous.org/people/estee-lalonde-19900817.html",
    "https://allfamous.org/people/elijah-hewson-19990817.html",
    
    "https://allfamous.org/people/lorelei-carlson-19890817.html",
    "https://allfamous.org/people/kyo-quijano-19960817.html",
    "https://allfamous.org/people/brandon-woelfel-19940817.html",
    "https://allfamous.org/people/rudy-gay-19860817.html",
    "https://allfamous.org/people/malvina-polikarpova-20040817.html",
    "https://allfamous.org/people/rachel-hurd-wood-19900817.html",
    "https://allfamous.org/people/alivia-pickl-20060817.html",
    "https://allfamous.org/people/ella-cruz-19960817.html",
    "https://allfamous.org/people/belinda-carlisle-19580817.html",
    "https://allfamous.org/people/dustin-pedroia-19830817.html",
    "https://allfamous.org/people/aaliyah-hudson-20010817.html",
    "https://allfamous.org/people/terrance-jones-19940817.html",
    "https://allfamous.org/people/simon-wilson-19910817.html",
    "https://allfamous.org/people/damis-squad-ninz-19890817.html",
    "https://allfamous.org/people/mystakinfolk-19750817.html",
    "https://allfamous.org/people/stephen-harrison-20000817.html",
    "https://allfamous.org/people/drew-justice-20010817.html",
    "https://allfamous.org/people/amaya-saulsby-20070817.html",
    "https://allfamous.org/people/ederson-moraes-19930817.html",
    "https://allfamous.org/people/giuliana-rancic-19740817.html",
    "https://allfamous.org/people/cinta-laura-19930817.html",
    "https://allfamous.org/people/jonathan-matthews-19990817.html",
    "https://allfamous.org/people/peewee-longway-19840817.html",
    "https://allfamous.org/people/david-bromstad-19730817.html",
    "https://allfamous.org/people/israel-navalua-19760817.html",
    "https://allfamous.org/people/gage-pond-20020817.html",
    "https://allfamous.org/people/jake-buckley-19930817.html",
    "https://allfamous.org/people/kathryn-morgan-19890817.html",
    "https://allfamous.org/people/daniel-fraga-19970817.html",
    "https://allfamous.org/people/cole-ewoldsen-20040817.html",
    "https://allfamous.org/people/erica-marie-20010817.html",
    "https://allfamous.org/people/rodney-mullen-19660817.html",
    "https://allfamous.org/people/kendall-long-19910817.html",
    "https://allfamous.org/people/daniel-fernandez-19990817.html",
    "https://allfamous.org/people/amelia-gray-19820817.html",
    "https://allfamous.org/people/joe-ashman-19940817.html",
    "https://allfamous.org/people/tarja-turunen-19770817.html",
    "https://allfamous.org/people/mylie-stone-20070817.html",
    "https://allfamous.org/people/sk8thegr8-19830817.html",
    "https://allfamous.org/people/alex-honnold-19850817.html",
    "https://allfamous.org/people/lynix-20010817.html",
    "https://allfamous.org/people/tessa-espinola-20060817.html",
    "https://allfamous.org/people/mau-montaner-19930817.html",
    "https://allfamous.org/people/kamari-copeland-19810817.html",
    "https://allfamous.org/people/makena-cain-20020817.html",
    "https://allfamous.org/people/mikayla-lucky-20040817.html",
    "https://allfamous.org/people/chloe-hawthorn-20020817.html",
    "https://allfamous.org/people/larry-ellison-19440817.html",
    
    "https://allfamous.org/people/fendijoshy-20010817.html",
    "https://allfamous.org/people/g-lloyd-19910817.html",
    "https://allfamous.org/people/zeze-di-camargo-19620817.html",
    "https://allfamous.org/people/ariadne-diaz-19860817.html",
    "https://allfamous.org/people/bryton-james-19860817.html",
    "https://allfamous.org/people/kayleigh-berman-20040817.html",
    "https://allfamous.org/people/damnitslunaa-20020817.html",
    "https://allfamous.org/people/madeline-pendleton-19860817.html",
    "https://allfamous.org/people/darcii-moore-19980817.html",
    "https://allfamous.org/people/lisa-coleman-19600817.html",
    "https://allfamous.org/people/pocari-roo-19940817.html",
    "https://allfamous.org/people/safia-vendome-19900817.html",
    "https://allfamous.org/people/darylhb-19990817.html",
    "https://allfamous.org/people/brannon-king-19990817.html",
    "https://allfamous.org/people/mikayla-beauregard-19980817.html",
    "https://allfamous.org/people/fayth-ifil-20070817.html",
    "https://allfamous.org/people/alone-pierre-20040817.html",
    "https://allfamous.org/people/olivia-lane-19940817.html",
    "https://allfamous.org/people/john-aprigliano-19910817.html",
    "https://allfamous.org/people/jellina-hauser-20020817.html",
    "https://allfamous.org/people/yoo-seung-ho-19930817.html",
    "https://allfamous.org/people/moris-goldstein-20010817.html",
    "https://allfamous.org/people/chiquinquira-delgado-19720817.html",
    "https://allfamous.org/people/claire-richards-19770817.html",
    "https://allfamous.org/people/mitchell-tenpenny-19890817.html",
    "https://allfamous.org/people/nick-imms-19890817.html",
    "https://allfamous.org/people/shraddha-arya-19870817.html",
    "https://allfamous.org/people/kiwisi-19950817.html",
    "https://allfamous.org/people/morgan-fletcher-19960817.html",
    "https://allfamous.org/people/michael-boateng-19910817.html",
    "https://allfamous.org/people/stephanie-katherine-grant-20000817.html",
    "https://allfamous.org/people/mike-misetich-19940817.html",
    "https://allfamous.org/people/taylah-19940817.html",
    "https://allfamous.org/people/tania-safi-19880817.html",
    "https://allfamous.org/people/satine-scarlett-montaz-20060817.html",
    "https://allfamous.org/people/mike-chabot-19910817.html",
    "https://allfamous.org/people/emily-emmens-19950817.html",
    "https://allfamous.org/people/kaitlyn-rose-kennedy-19960817.html",
    "https://allfamous.org/people/tyrus-thomas-19860817.html",
    "https://allfamous.org/people/no-plug-19890817.html",
    "https://allfamous.org/people/chris-watt-19900817.html",
    "https://allfamous.org/people/sarah-vivan-19870817.html",
    "https://allfamous.org/people/jon-gruden-19630817.html",
    "https://allfamous.org/people/christian-laettner-19690817.html",
    "https://allfamous.org/people/gahhhbi-19990817.html",
    "https://allfamous.org/people/tre-armstrong-19780817.html",
    "https://allfamous.org/people/carmina-villaroel-19750817.html",
    "https://allfamous.org/people/jake-virtanen-19960817.html",
    
    "https://allfamous.org/people/daniela-castro-19690817.html",
    "https://allfamous.org/people/krism-19910817.html",
    "https://allfamous.org/people/krtzyy-19990817.html",
    "https://allfamous.org/people/bat-reacts-20040817.html",
    "https://allfamous.org/people/caiden-mills-20110817.html",
    "https://allfamous.org/people/connor-morris-19950817.html",
    "https://allfamous.org/people/colten-moore-19890817.html",
    "https://allfamous.org/people/david-conrad-19670817.html",
    "https://allfamous.org/people/lauren-veronica-20020817.html",
    "https://allfamous.org/people/amanda-bober-20000817.html",
    "https://allfamous.org/people/dellecia-ethier-20010817.html",
    "https://allfamous.org/people/winston-sterzel-19800817.html",
    "https://allfamous.org/people/curlyheaddmayaaa-20060817.html",
    "https://allfamous.org/people/jagger-spacy-19960817.html",
    "https://allfamous.org/people/phantomace-19920817.html",
    "https://allfamous.org/people/christian-miller-19960817.html",
    "https://allfamous.org/people/tamra-dae-19900817.html",
    "https://allfamous.org/people/farah-zeynep-abdullah-19890817.html",
    "https://allfamous.org/people/calvin-mijnsbergen-19980817.html",
    "https://allfamous.org/people/gian-marco-19700817.html",
    "https://allfamous.org/people/eddie-davis-u5t1.html",
    "https://allfamous.org/people/melina-goransson-epgk.html",
    "https://allfamous.org/people/lex-p-19890817.html",
    "https://allfamous.org/people/patrizia-palme-19940817.html",
    "https://allfamous.org/people/ele-a-el-dominio-19880817.html",
    "https://allfamous.org/people/isobelle-carmichael-19980817.html",
    "https://allfamous.org/people/avion-20010817.html",
    "https://allfamous.org/people/brock-kelly-19850817.html",
    "https://allfamous.org/people/jeyke-19950817.html",
    "https://allfamous.org/people/kim-kang-min-19950817.html",
    "https://allfamous.org/people/connor-johnson-19910817.html",
    "https://allfamous.org/people/giselle-guerra-19990817.html",
    "https://allfamous.org/people/babisshh-tiktok-star.html",
    "https://allfamous.org/people/sarah-sjostrom-19930817.html",
    "https://allfamous.org/people/monark-19900817.html",
    "https://allfamous.org/people/phil-jagielka-19820817.html",
    "https://allfamous.org/people/uhm-jung-hwa-19690817.html",
    "https://allfamous.org/people/dominic-brownlee-19810817.html",
    "https://allfamous.org/people/ashlyn-casalegno-20070817.html",
    "https://allfamous.org/people/carrie-grant-19650817.html",
    "https://allfamous.org/people/rajiv-surendra-19890817.html",
    "https://allfamous.org/people/semone-skosan-19900817.html",
    "https://allfamous.org/people/thekairi78-19870817.html",
    "https://allfamous.org/people/derrick-kosinski-19830817.html",
    "https://allfamous.org/people/lliana-bird-19810817.html",
    "https://allfamous.org/people/emmy-bre-19960817.html",
    "https://allfamous.org/people/malikai-amir-19910817.html",
    "https://allfamous.org/people/amy-sinostage-20080817.html",
    
    "https://allfamous.org/people/eric-suerez-20010817.html",
    "https://allfamous.org/people/chrysten-zenoni-19960817.html",
    "https://allfamous.org/people/ivy-rhodes-19940817.html",
    "https://allfamous.org/people/iban-garcia-19990817.html",
    "https://allfamous.org/people/taylor-goldsmith-19850817.html",
    "https://allfamous.org/people/wendy-gonzalez-19850817.html",
    "https://allfamous.org/people/sou-el-flotador-19860817.html",
    "https://allfamous.org/people/akana-19960817.html",
    "https://allfamous.org/people/jorge-posada-19710817.html",
    "https://allfamous.org/people/itsronniev-20040817.html",
    "https://allfamous.org/people/elida-reyna-19720817.html",
    "https://allfamous.org/people/noah-payne-20000817.html",
    "https://allfamous.org/people/raquel-natasha-19870817.html",
    "https://allfamous.org/people/archie-goodwin-19940817.html",
    "https://allfamous.org/people/cordelia-gartside-19930817.html",
    "https://allfamous.org/people/charlotte-kemp-muhl-19870817.html",
    "https://allfamous.org/people/ed-mccaffrey-19680817.html",
    "https://allfamous.org/people/charlotte-pirroni-19930817.html",
    "https://allfamous.org/people/lola-jolie-20100817.html",
    "https://allfamous.org/people/kyla-carter-qmm2.html",
    "https://allfamous.org/people/scott-halberstadt-19760817.html",
    "https://allfamous.org/people/nichole-cordova-19880817.html",
    "https://allfamous.org/people/gilby-clarke-19620817.html",
    "https://allfamous.org/people/shabnam-19420817.html",
    "https://allfamous.org/people/rae-lil-black-ekh5.html",
    "https://allfamous.org/people/destiney-rezaei-19800817.html",
    "https://allfamous.org/people/harry-partridge-19870817.html",
    "https://allfamous.org/people/valeriya-lapidus-19940817.html",
    "https://allfamous.org/people/natalie-gold-dc1o.html",
    "https://allfamous.org/people/ilinca-bacila-19980817.html",
    "https://allfamous.org/people/corey-williams-19800817.html",
    "https://allfamous.org/people/marc-merrill-19800817.html",
    "https://allfamous.org/people/jacob-kalashnikoff-19980817.html",
    "https://allfamous.org/people/stone-wilson-19960817.html",
    "https://allfamous.org/people/mustard-plays-t7ss.html",
    "https://allfamous.org/people/fujiko-kashimada-20010817.html",
    "https://allfamous.org/people/nidhhi-agerwal-19930817.html",
    "https://allfamous.org/people/merna-hermez-19930817.html",
    "https://allfamous.org/people/kevin-max-19670817.html",
    "https://allfamous.org/people/eric-zink-19800817.html",
    "https://allfamous.org/people/brady-corbet-19880817.html",
    "https://allfamous.org/people/maysa-leak-19660817.html",
    "https://allfamous.org/people/marcus-berg-19860817.html",
    "https://allfamous.org/people/lene-marlin-19800817.html",
    "https://allfamous.org/people/austin-wilmot-19980817.html",
    "https://allfamous.org/people/jessi-klein-19750817.html",
    "https://allfamous.org/people/taylor-lumley-19890817.html",
    "https://allfamous.org/people/anna-collins-19950817.html",
    
    "https://allfamous.org/people/madelaine-petsch-19940818.html",
    "https://allfamous.org/people/infinite-19970818.html",
    "https://allfamous.org/people/maia-mitchell-19930818.html",
    "https://allfamous.org/people/leafyishere-19950818.html",
    "https://allfamous.org/people/louie-castro-19990818.html",
    "https://allfamous.org/people/clairo-19980818.html",
    "https://allfamous.org/people/josephine-langford-19970818.html",
    "https://allfamous.org/people/andy-samberg-19780818.html",
    "https://allfamous.org/people/g-dragon-19880818.html",
    "https://allfamous.org/people/chad-alan-19840818.html",
    "https://allfamous.org/people/noah-finnce-19990818.html",
    "https://allfamous.org/people/matthew-taylor-20010818.html",
    "https://allfamous.org/people/jackie-figueroa-19960818.html",
    "https://allfamous.org/people/emma-langevin-19990818.html",
    "https://allfamous.org/people/samantha-grecchi-19940818.html",
    "https://allfamous.org/people/parker-mckenna-posey-19950818.html",
    "https://allfamous.org/people/richard-harmon-19910818.html",
    "https://allfamous.org/people/steph0sims-19990818.html",
    "https://allfamous.org/people/christian-slater-19690818.html",
    "https://allfamous.org/people/max-charles-20030818.html",
    "https://allfamous.org/people/nate-hill-19940818.html",
    "https://allfamous.org/people/anna-akana-19890818.html",
    "https://allfamous.org/people/edward-norton-19690818.html",
    "https://allfamous.org/people/essence-nicole-smith-19970818.html",
    "https://allfamous.org/people/frances-bean-cobain-19920818.html",
    "https://allfamous.org/people/clementine-sleebos-19990818.html",
    "https://allfamous.org/people/louis-dunn-20030818.html",
    "https://allfamous.org/people/mitchell-crawford-20000818.html",
    "https://allfamous.org/people/mika-19830818.html",
    "https://allfamous.org/people/robert-redford-19360818.html",
    "https://allfamous.org/people/caleigh-hayes-20010818.html",
    "https://allfamous.org/people/nick28t-19850818.html",
    "https://allfamous.org/people/znuie-19990818.html",
    "https://allfamous.org/people/dylan-evans-19950818.html",
    "https://allfamous.org/people/jaykindafunny-20010818.html",
    "https://allfamous.org/people/piinksparkles0818-20010818.html",
    "https://allfamous.org/people/asian-andy-19940818.html",
    "https://allfamous.org/people/sin-boy-19940818.html",
    "https://allfamous.org/people/annette-ruiz-19980818.html",
    "https://allfamous.org/people/uhidkuh-20030818.html",
    "https://allfamous.org/people/stanley-johnson-19400818.html",
    "https://allfamous.org/people/alan-poulos-19980818.html",
    "https://allfamous.org/people/jenna-pry-19990818.html",
    "https://allfamous.org/people/kara-del-toro-19930818.html",
    "https://allfamous.org/people/eniko-hart-19840818.html",
    "https://allfamous.org/people/cherina-wilson-tpav.html",
    "https://allfamous.org/people/ikue-otani-19650818.html",
    "https://allfamous.org/people/luke-labrant-19940818.html",
    
    "https://allfamous.org/people/roman-polanski-19330818.html",
    "https://allfamous.org/people/murray-rundus-20020818.html",
    "https://allfamous.org/people/elaine-haro-20030818.html",
    "https://allfamous.org/people/vitoria-moraes-20000818.html",
    "https://allfamous.org/people/cassie-sharp-19990818.html",
    "https://allfamous.org/people/cassius-stanley-19990818.html",
    "https://allfamous.org/people/heather-alexia-santos-6ppl.html",
    "https://allfamous.org/people/kaitlin-olson-19750818.html",
    "https://allfamous.org/people/lee-joo-won-19990818.html",
    "https://allfamous.org/people/becca-webster-19950818.html",
    "https://allfamous.org/people/jung-eun-ji-19930818.html",
    "https://allfamous.org/people/denis-leary-19570818.html",
    "https://allfamous.org/people/veronica-rene-charles-19980818.html",
    "https://allfamous.org/people/xand-van-tulleken-19780818.html",
    "https://allfamous.org/people/emilio-bernot-20020818.html",
    "https://allfamous.org/people/surfaceldn-19970818.html",
    "https://allfamous.org/people/miesha-tate-19860818.html",
    "https://allfamous.org/people/amy-willerton-19920818.html",
    "https://allfamous.org/people/project-youngin-19940818.html",
    "https://allfamous.org/people/tylarzz-19980818.html",
    "https://allfamous.org/people/steve-chen-19780818.html",
    "https://allfamous.org/people/eniko-parrish-19840818.html",
    "https://allfamous.org/people/sellamonte-20030818.html",
    "https://allfamous.org/people/emily-mei-19940818.html",
    "https://allfamous.org/people/anya-ischuk-20000818.html",
    "https://allfamous.org/people/sheridan-pierce-19940818.html",
    "https://allfamous.org/people/chris-van-tulleken-19780818.html",
    "https://allfamous.org/people/choi-hyo-jin-19830818.html",
    "https://allfamous.org/people/bob-harper-19650818.html",
    "https://allfamous.org/people/jordy-baan-19950818.html",
    "https://allfamous.org/people/crea-tyler-19970818.html",
    "https://allfamous.org/people/staxx-19920818.html",
    "https://allfamous.org/people/sanne-vander-19960818.html",
    "https://allfamous.org/people/lydia-scott-19990818.html",
    "https://allfamous.org/people/renato-sanches-19970818.html",
    "https://allfamous.org/people/thomas-messina-19960818.html",
    "https://allfamous.org/people/steve-ronin-19920818.html",
    "https://allfamous.org/people/eleven-61-19890818.html",
    "https://allfamous.org/people/poppin-john-19840818.html",
    "https://allfamous.org/people/anella-miller-19910818.html",
    "https://allfamous.org/people/leif-lunburg-20010818.html",
    "https://allfamous.org/people/suchspeed-19980818.html",
    "https://allfamous.org/people/kaylen-daniels-19980818.html",
    "https://allfamous.org/people/malik-jibawi-19990818.html",
    "https://allfamous.org/people/daler-mehndi-19670818.html",
    "https://allfamous.org/people/daria-young-20030818.html",
    "https://allfamous.org/people/kirrilee-berger-19990818.html",
    "https://allfamous.org/people/aphex-twin-19710818.html",
    
    "https://allfamous.org/people/jason-malenda-19940818.html",
    "https://allfamous.org/people/vanessa-adriana-nadal-19820818.html",
    "https://allfamous.org/people/danny-suede-19960818.html",
    "https://allfamous.org/people/mason-mitchell-20040818.html",
    "https://allfamous.org/people/madeleine-stowe-19580818.html",
    "https://allfamous.org/people/jessie-flower-19940818.html",
    "https://allfamous.org/people/the-find-guru-19930818.html",
    "https://allfamous.org/people/malcolm-jamal-warner-19700818.html",
    "https://allfamous.org/people/rosalynn-carter-19270818.html",
    "https://allfamous.org/people/liz-cambage-19910818.html",
    "https://allfamous.org/people/elizabeth-chambers-19820818.html",
    "https://allfamous.org/people/john-lee-19980818.html",
    "https://allfamous.org/people/joseph-marcell-19480818.html",
    "https://allfamous.org/people/joanna-jedrzejczyk-19870818.html",
    "https://allfamous.org/people/chizeled-tnnu.html",
    "https://allfamous.org/people/willie-cauley-stein-19930818.html",
    "https://allfamous.org/people/mika-boorem-19870818.html",
    "https://allfamous.org/people/jo-ha-seul-19970818.html",
    "https://allfamous.org/people/lauren-pisciotta-19880818.html",
    "https://allfamous.org/people/alexa-davies-19950818.html",
    "https://allfamous.org/people/jon-lucas-19950818.html",
    "https://allfamous.org/people/kylin-hill-19980818.html",
    "https://allfamous.org/people/cameron-white-19830818.html",
    "https://allfamous.org/people/cody-jinks-19800818.html",
    "https://allfamous.org/people/dario-de-vries-20020818.html",
    "https://allfamous.org/people/madison-friar-20000818.html",
    "https://allfamous.org/people/chris-kelly-19700818.html",
    "https://allfamous.org/people/lang-windham-20030818.html",
    "https://allfamous.org/people/dinglederper-19940818.html",
    "https://allfamous.org/people/cam-shorey-instagram-star.html",
    "https://allfamous.org/people/alex-evans-19890818.html",
    "https://allfamous.org/people/miguel-pablo-19980818.html",
    "https://allfamous.org/people/sydney-michelle-19960818.html",
    "https://allfamous.org/people/harley-chapman-instagram-star.html",
    "https://allfamous.org/people/carlos-carrera-gonzalez-19620818.html",
    "https://allfamous.org/people/mrsuicidesheep-19930818.html",
    "https://allfamous.org/people/gabriela-francesca-carrillo-19950818.html",
    "https://allfamous.org/people/martin-mull-19430818.html",
    "https://allfamous.org/people/everlast-19690818.html",
    "https://allfamous.org/people/mariam-rod-19850818.html",
    "https://allfamous.org/people/jacob-vargas-19710818.html",
    "https://allfamous.org/people/stefon-alexander-19810818.html",
    "https://allfamous.org/people/hp-parviainen-19810818.html",
    "https://allfamous.org/people/ines-rivero-19750818.html",
    "https://allfamous.org/people/che-chesterman-19960818.html",
    "https://allfamous.org/people/mauro-castano-19630818.html",
    "https://allfamous.org/people/inkmonstarr-19930818.html",
    "https://allfamous.org/people/thebomb602-19980818.html",
    
    "https://allfamous.org/people/derleen-cadua-20000818.html",
    "https://allfamous.org/people/gabriele-gaiba-19920818.html",
    "https://allfamous.org/people/jorge-castro-19670818.html",
    "https://allfamous.org/people/brooke-harman-19850818.html",
    "https://allfamous.org/people/eddy-baker-19910818.html",
    "https://allfamous.org/people/luis-rosado-19860818.html",
    "https://allfamous.org/people/fat-lever-19600818.html",
    "https://allfamous.org/people/ben-hamilton-19770818.html",
    "https://allfamous.org/people/erika-persson-20020818.html",
    "https://allfamous.org/people/will-b-20020818.html",
    "https://allfamous.org/people/oussifooty-20000818.html",
    "https://allfamous.org/people/kris-boyd-19830818.html",
    "https://allfamous.org/people/jon-denton-19820818.html",
    "https://allfamous.org/people/ross-mccormack-19860818.html",
    "https://allfamous.org/people/priya-krishna-19910818.html",
    "https://allfamous.org/people/heyimnatalia-19940818.html",
    "https://allfamous.org/people/elizabeth-beisel-19920818.html",
    "https://allfamous.org/people/taylor-miller-19530818.html",
    "https://allfamous.org/people/filipa-santos-19980818.html",
    "https://allfamous.org/people/pandora-blue-19870818.html",
    "https://allfamous.org/people/sierra-swartz-19950818.html",
    "https://allfamous.org/people/jennifer-lynx-19880818.html",
    "https://allfamous.org/people/kevin-hunter-jr-20000818.html",
    "https://allfamous.org/people/aidan-moyer-20010818.html",
    "https://allfamous.org/people/dana-evans-19960818.html",
    "https://allfamous.org/people/desiree-casado-19850818.html",
    "https://allfamous.org/people/masta-killa-19690818.html",
    "https://allfamous.org/people/katarina-ivanovska-19880818.html",
    "https://allfamous.org/people/neybronjames-19880818.html",
    "https://allfamous.org/people/m3ssym0nday-20000818.html",
    "https://allfamous.org/people/setareh-khatibi-19860818.html",
    "https://allfamous.org/people/edith-rivera-19970818.html",
    "https://allfamous.org/people/david-benoit-19530818.html",
    "https://allfamous.org/people/victoria-elizabeth-coren-19720818.html",
    "https://allfamous.org/people/feodor-chin-19740818.html",
    "https://allfamous.org/people/fahima-karmostaji-19860818.html",
    "https://allfamous.org/people/evan-gattis-19860818.html",
    "https://allfamous.org/people/faraon-love-shady-tsyy.html",
    "https://allfamous.org/people/bryan-ruiz-19850818.html",
    "https://allfamous.org/people/davey-suicide-19820818.html",
    "https://allfamous.org/people/justyna-gradek-19930818.html",
    "https://allfamous.org/people/joel-hansen-19950818.html",
    "https://allfamous.org/people/graham-zusi-19860818.html",
    "https://allfamous.org/people/taher-shah-19800818.html",
    "https://allfamous.org/people/kyron-dryden-19930818.html",
    "https://allfamous.org/people/greyson-gasaway-19980818.html",
    "https://allfamous.org/people/thalita-ferraz-19930818.html",
    "https://allfamous.org/people/no-malice-19720818.html",
    
    "https://allfamous.org/people/arnold-poernomo-19880818.html",
    "https://allfamous.org/people/kamaren-cole-19930818.html",
    "https://allfamous.org/people/lil-ominous-19970818.html",
    "https://allfamous.org/people/sean-poole-19860818.html",
    "https://allfamous.org/people/huw-edwards-19610818.html",
    "https://allfamous.org/people/brianna-rollins-19910818.html",
    "https://allfamous.org/people/scribblenetty-19930818.html",
    "https://allfamous.org/people/insanity818-20010818.html",
    "https://allfamous.org/people/urfatherfigure-19980818.html",
    "https://allfamous.org/people/toby-price-19870818.html",
    "https://allfamous.org/people/carter-wilkerson-20000818.html",
    "https://allfamous.org/people/brad-wolf-tiktok-star.html",
    "https://allfamous.org/people/imransavage-iav2.html",
    "https://allfamous.org/people/rivkah-reyes-c71f.html",
    "https://allfamous.org/people/romy-madley-croft-19890818.html",
    "https://allfamous.org/people/nike-kornecki-19820818.html",
    "https://allfamous.org/people/bart-scott-19800818.html",
    "https://allfamous.org/people/calle-hellevang-larsen-19770818.html",
    "https://allfamous.org/people/wendell-ramos-19780818.html",
    "https://allfamous.org/people/wavydobbs-20020818.html",
    "https://allfamous.org/people/henrik-sandelin-19870818.html",
    "https://allfamous.org/people/ranvir-shorey-19720818.html",
    "https://allfamous.org/people/gigi-radics-19960818.html",
    "https://allfamous.org/people/brian-too-7bux.html",
    "https://allfamous.org/people/sofie-thomas-20050818.html",
    "https://allfamous.org/people/doctor-emma-b4bz.html",
    "https://allfamous.org/people/naima-vega-20000818.html",
    "https://allfamous.org/people/ronald-everline-19840818.html",
    "https://allfamous.org/people/vitao-19990818.html",
    "https://allfamous.org/people/emily-britton-20010818.html",
    "https://allfamous.org/people/fiza-halim-19800818.html",
    "https://allfamous.org/people/helena-rojo-19440818.html",
    "https://allfamous.org/people/percy-fawcett-18670818.html",
    "https://allfamous.org/people/fleeur-19930818.html",
    "https://allfamous.org/people/robert-huth-19840818.html",
    "https://allfamous.org/people/jeremy-shockey-19800818.html",
    "https://allfamous.org/people/mizuo-peck-19770818.html",
    "https://allfamous.org/people/dontari-poe-19900818.html",
    "https://allfamous.org/people/cesar-sampson-19830818.html",
    "https://allfamous.org/people/cassandra-wood-19940818.html",
    "https://allfamous.org/people/shelby-johns-19940818.html",
    "https://allfamous.org/people/king-gordy-19770818.html",
    "https://allfamous.org/people/alden-shreffler-19990818.html",
    "https://allfamous.org/people/corrina-gideon-19920818.html",
    "https://allfamous.org/people/og-magnum-19580818.html",
    "https://allfamous.org/people/gereksiz-oda-19980818.html",
    "https://allfamous.org/people/allicia-shearer-19800818.html",
    "https://allfamous.org/people/ramy-ayach-19800818.html",
    
    "https://allfamous.org/people/tony-lopez-19990819.html",
    "https://allfamous.org/people/tayler-holder-19970819.html",
    "https://allfamous.org/people/john-stamos-19630819.html",
    "https://allfamous.org/people/ethan-cutkosky-19990819.html",
    "https://allfamous.org/people/lexi-jayde-20020819.html",
    "https://allfamous.org/people/matthew-perry-19690819.html",
    "https://allfamous.org/people/brighton-sharbino-20020819.html",
    "https://allfamous.org/people/noel-miller-19890819.html",
    "https://allfamous.org/people/faze-blaze-19960819.html",
    "https://allfamous.org/people/emmi-butler-20070819.html",
    "https://allfamous.org/people/bill-clinton-19460819.html",
    "https://allfamous.org/people/siena-agudong-20040819.html",
    "https://allfamous.org/people/dominic-deangelis-19930819.html",
    "https://allfamous.org/people/christina-perri-19860819.html",
    "https://allfamous.org/people/sophie-aspin-20020819.html",
    "https://allfamous.org/people/trinity-keller-20040819.html",
    "https://allfamous.org/people/salem-ilese-19990819.html",
    "https://allfamous.org/people/fat-joe-19700819.html",
    "https://allfamous.org/people/hailey-williams-20030819.html",
    "https://allfamous.org/people/leah-from-magic-box-20110819.html",
    "https://allfamous.org/people/john-deacon-19510819.html",
    "https://allfamous.org/people/katja-glieson-19960819.html",
    "https://allfamous.org/people/melissa-fumero-19820819.html",
    "https://allfamous.org/people/romeo-miller-19890819.html",
    "https://allfamous.org/people/nathan-schwandt-19930819.html",
    "https://allfamous.org/people/bbg-babyjoe-19990819.html",
    "https://allfamous.org/people/gee-nelly-19950819.html",
    "https://allfamous.org/people/kavos-19970819.html",
    "https://allfamous.org/people/tammin-sursok-19830819.html",
    "https://allfamous.org/people/emma-murphy-20020819.html",
    "https://allfamous.org/people/hoodie-allen-19880819.html",
    "https://allfamous.org/people/dxrr1ckk-20030819.html",
    "https://allfamous.org/people/simon-bird-19840819.html",
    "https://allfamous.org/people/gavin-sturm-20030819.html",
    "https://allfamous.org/people/lucas-stadvec-20020819.html",
    "https://allfamous.org/people/chubbs-19980819.html",
    "https://allfamous.org/people/goodtimeswithscar-19820819.html",
    "https://allfamous.org/people/olivia-richards-20030819.html",
    "https://allfamous.org/people/kenneth-walker-19940819.html",
    "https://allfamous.org/people/mik-19960819.html",
    "https://allfamous.org/people/tara-henderson-19910819.html",
    "https://allfamous.org/people/dejha-lei-19970819.html",
    "https://allfamous.org/people/mona-alawi-20040819.html",
    "https://allfamous.org/people/brock-ohurn-19910819.html",
    "https://allfamous.org/people/eva-hauge-20060819.html",
    "https://allfamous.org/people/veronica-roth-19880819.html",
    "https://allfamous.org/people/a3kbabyy-tiktok-star.html",
    "https://allfamous.org/people/christy-mcginity-19770819.html",
    
    "https://allfamous.org/people/chalita-natakuatong-tiktok-star.html",
    "https://allfamous.org/people/kirk-cousins-19880819.html",
    "https://allfamous.org/people/allison-day-19870819.html",
    "https://allfamous.org/people/steele-stebbins-20030819.html",
    "https://allfamous.org/people/kynna-cole-20080819.html",
    "https://allfamous.org/people/briggitte-bozzo-20010819.html",
    "https://allfamous.org/people/jesse-sullivan-19890819.html",
    "https://allfamous.org/people/laura-tesoro-19960819.html",
    "https://allfamous.org/people/daniel-hernandez-19720819.html",
    "https://allfamous.org/people/glenn-travis-19940819.html",
    "https://allfamous.org/people/gunner-burkhardt-19980819.html",
    "https://allfamous.org/people/joey-russo-20020819.html",
    "https://allfamous.org/people/dj-monopoli-19890819.html",
    "https://allfamous.org/people/chrissy-rasmussen-19760819.html",
    "https://allfamous.org/people/jeezy-mula-19950819.html",
    "https://allfamous.org/people/lexi-smith-20060819.html",
    "https://allfamous.org/people/manny-jacinto-19870819.html",
    "https://allfamous.org/people/natasha-slayton-19880819.html",
    "https://allfamous.org/people/stacey-harkey-19810819.html",
    "https://allfamous.org/people/kyra-sedgwick-19650819.html",
    "https://allfamous.org/people/froggycrossing-19990819.html",
    "https://allfamous.org/people/yerin-19960819.html",
    "https://allfamous.org/people/umji-19980819.html",
    "https://allfamous.org/people/tiktokhuss-19990819.html",
    "https://allfamous.org/people/elena-davies-19900819.html",
    "https://allfamous.org/people/samantha-strange-19960819.html",
    "https://allfamous.org/people/aj-pinkerton-19870819.html",
    "https://allfamous.org/people/ava-august-20050819.html",
    "https://allfamous.org/people/loolitsalex-19970819.html",
    "https://allfamous.org/people/stipe-miocic-19820819.html",
    "https://allfamous.org/people/emma-shannon-20060819.html",
    "https://allfamous.org/people/lilian-garcia-19660819.html",
    "https://allfamous.org/people/cdusk-youtube-star.html",
    "https://allfamous.org/people/tracie-thoms-19750819.html",
    "https://allfamous.org/people/giorgia-whigham-19970819.html",
    "https://allfamous.org/people/joey-tempest-19630819.html",
    "https://allfamous.org/people/mya-kestle-20010819.html",
    "https://allfamous.org/people/cam-anthony-20010819.html",
    "https://allfamous.org/people/caitlin-doughty-19840819.html",
    "https://allfamous.org/people/patrckstatic-19900819.html",
    "https://allfamous.org/people/themythicalsausage-itwe.html",
    "https://allfamous.org/people/lilbootycall-19960819.html",
    "https://allfamous.org/people/jake-ceballos-20030819.html",
    "https://allfamous.org/people/trymacs-19940819.html",
    "https://allfamous.org/people/kendyle-paige-19970819.html",
    "https://allfamous.org/people/wyatt-sturm-20030819.html",
    "https://allfamous.org/people/travis-tedford-19880819.html",
    "https://allfamous.org/people/dallas-caroline-20000819.html",
    
    "https://allfamous.org/people/harvey-bautista-20030819.html",
    "https://allfamous.org/people/dandan-20000819.html",
    "https://allfamous.org/people/kaiden-khal-20030819.html",
    "https://allfamous.org/people/liat-zino-20060819.html",
    "https://allfamous.org/people/abel-cantika-19950819.html",
    "https://allfamous.org/people/el-rincon-de-ani-20060819.html",
    "https://allfamous.org/people/erika-christensen-19820819.html",
    "https://allfamous.org/people/lee-ann-womack-19660819.html",
    "https://allfamous.org/people/peter-gallagher-19550819.html",
    "https://allfamous.org/people/deimante-vaiciute-19990819.html",
    "https://allfamous.org/people/michelle-borth-19780819.html",
    "https://allfamous.org/people/velveteen-dream-19950819.html",
    "https://allfamous.org/people/eric-ayala-20030819.html",
    "https://allfamous.org/people/feid-19920819.html",
    "https://allfamous.org/people/niels-destadsbader-19880819.html",
    "https://allfamous.org/people/reset-19970819.html",
    "https://allfamous.org/people/nico-hulkenberg-19870819.html",
    "https://allfamous.org/people/payton-rose-wilson-20050819.html",
    "https://allfamous.org/people/laura-bozzo-19510819.html",
    "https://allfamous.org/people/paula-jai-parker-19690819.html",
    "https://allfamous.org/people/brian-ambs-19840819.html",
    "https://allfamous.org/people/ayush-mehta-19920819.html",
    "https://allfamous.org/people/sissi-ne-lets-eat-19840819.html",
    "https://allfamous.org/people/mike-hill-19700819.html",
    "https://allfamous.org/people/ahmed-best-19730819.html",
    "https://allfamous.org/people/gabin-gabin-et-lili-20050819.html",
    "https://allfamous.org/people/sammy-paul-19930819.html",
    "https://allfamous.org/people/mary-frey-19880819.html",
    "https://allfamous.org/people/big-zuu-19950819.html",
    "https://allfamous.org/people/clay-walker-19690819.html",
    "https://allfamous.org/people/leah-sorrell-20020819.html",
    "https://allfamous.org/people/jacob-dalton-19910819.html",
    "https://allfamous.org/people/stephen-parker-19900819.html",
    "https://allfamous.org/people/cortney-erin-19970819.html",
    "https://allfamous.org/people/laddi-19980819.html",
    "https://allfamous.org/people/crayistaken-19970819.html",
    "https://allfamous.org/people/david-romanowski-20050819.html",
    "https://allfamous.org/people/b-free-19850819.html",
    "https://allfamous.org/people/ellie-addis-20000819.html",
    "https://allfamous.org/people/ian-gillan-19450819.html",
    "https://allfamous.org/people/alex-fox-19740819.html",
    "https://allfamous.org/people/jim-carter-19480819.html",
    "https://allfamous.org/people/rafael-henriques-19940819.html",
    "https://allfamous.org/people/madison-trinity-and-beyond-20140819.html",
    "https://allfamous.org/people/ashley-valdez-19980819.html",
    "https://allfamous.org/people/paola-barro-fjwy.html",
    "https://allfamous.org/people/lesley-anne-murphy-19870819.html",
    "https://allfamous.org/people/joshua-tan-19900819.html",
    
    "https://allfamous.org/people/tina-mondelia-19970819.html",
    "https://allfamous.org/people/kevin-dillon-19650819.html",
    "https://allfamous.org/people/friskyhyena-19950819.html",
    "https://allfamous.org/people/jubi2fye-znzu.html",
    "https://allfamous.org/people/missy-higgins-19830819.html",
    "https://allfamous.org/people/bam-savage-20000819.html",
    "https://allfamous.org/people/aarti-sequeira-19780819.html",
    "https://allfamous.org/people/ricco-rodriguez-19770819.html",
    "https://allfamous.org/people/chantelle-castillo-19940819.html",
    "https://allfamous.org/people/tara-milk-tea-19940819.html",
    "https://allfamous.org/people/natalie-danish-19900819.html",
    "https://allfamous.org/people/bona-19950819.html",
    "https://allfamous.org/people/luisa-crashion-19950819.html",
    "https://allfamous.org/people/corinne-isherwood-20010819.html",
    "https://allfamous.org/people/runtown-19890819.html",
    "https://allfamous.org/people/amelie-wingrove-20090819.html",
    "https://allfamous.org/people/lindcey-beauty-20040819.html",
    "https://allfamous.org/people/jonathan-frakes-19520819.html",
    "https://allfamous.org/people/terrie-mcevoy-19890819.html",
    "https://allfamous.org/people/chris-fischer-19800819.html",
    "https://allfamous.org/people/mj-xoxo-19920819.html",
    "https://allfamous.org/people/asia-nicole-19990819.html",
    "https://allfamous.org/people/lis-wiehl-19610819.html",
    "https://allfamous.org/people/nicolleegongora-20020819.html",
    "https://allfamous.org/people/bloxy-panda-3ymu.html",
    "https://allfamous.org/people/sara-martins-19770819.html",
    "https://allfamous.org/people/anna-renderer-19800819.html",
    "https://allfamous.org/people/callum-blue-19770819.html",
    "https://allfamous.org/people/adam-rom-20010819.html",
    "https://allfamous.org/people/jj-hardy-19820819.html",
    "https://allfamous.org/people/jared-lee-19430819.html",
    "https://allfamous.org/people/patrick-chung-19870819.html",
    "https://allfamous.org/people/jesper-jenset-19970819.html",
    "https://allfamous.org/people/aliza-halm-20080819.html",
    "https://allfamous.org/people/anthony-munoz-19580819.html",
    "https://allfamous.org/people/desmond-tan-19860819.html",
    "https://allfamous.org/people/jordan-edwards-19920819.html",
    "https://allfamous.org/people/guido-pennelli-19940819.html",
    "https://allfamous.org/people/russell-kane-19800819.html",
    "https://allfamous.org/people/kendo-kaponi-19840819.html",
    "https://allfamous.org/people/austin-spomer-19870819.html",
    "https://allfamous.org/people/caleb-arsement-cw8v.html",
    "https://allfamous.org/people/zoneoftech-19930819.html",
    "https://allfamous.org/people/vikram-singh-chauhan-19890819.html",
    "https://allfamous.org/people/my-linh-19750819.html",
    "https://allfamous.org/people/carl-martin-eggesbo-19950819.html",
    "https://allfamous.org/people/katharina-mazepa-19950819.html",
    "https://allfamous.org/people/greg-bryk-19720819.html",
    
    "https://allfamous.org/people/tommy-finton-19900819.html",
    "https://allfamous.org/people/zainab-al-eqabi-19900819.html",
    "https://allfamous.org/people/eliezer-jacobson-19790819.html",
    "https://allfamous.org/people/mason-farris-cdca.html",
    "https://allfamous.org/people/yootha-wong-loi-sing-19870819.html",
    "https://allfamous.org/people/mette-marit-crown-princess-of-norway-19730819.html",
    "https://allfamous.org/people/kylie-thompson-20020819.html",
    "https://allfamous.org/people/maquel-cooper-19940819.html",
    "https://allfamous.org/people/shaila-sabt-19930819.html",
    "https://allfamous.org/people/nate-burleson-19810819.html",
    "https://allfamous.org/people/karan-19690819.html",
    "https://allfamous.org/people/chris-harper-19770819.html",
    "https://allfamous.org/people/jen-hamilton-19900819.html",
    "https://allfamous.org/people/james-the-mormon-19860819.html",
    "https://allfamous.org/people/kathleen-opena-19980819.html",
    "https://allfamous.org/people/prateek-rana-19960819.html",
    "https://allfamous.org/people/erin-siena-jobs-19950819.html",
    "https://allfamous.org/people/tipper-gore-19480819.html",
    "https://allfamous.org/people/jill-st-john-19400819.html",
    "https://allfamous.org/people/sascha-huber-19920819.html",
    "https://allfamous.org/people/sarah-martins-19770819.html",
    "https://allfamous.org/people/jazmin-pinedo-19900819.html",
    "https://allfamous.org/people/kirk-herbstreit-19690819.html",
    "https://allfamous.org/people/lewis-lovhaug-19870819.html",
    "https://allfamous.org/people/clark-baxtresser-19880819.html",
    "https://allfamous.org/people/tommy-mascotti-19980819.html",
    "https://allfamous.org/people/tri-line-19870819.html",
    "https://allfamous.org/people/sarah-burton-19740819.html",
    "https://allfamous.org/people/tom-sykes-19850819.html",
    "https://allfamous.org/people/ned-yost-19550819.html",
    "https://allfamous.org/people/darian-durant-19820819.html",
    "https://allfamous.org/people/dean-fujioka-19800819.html",
    "https://allfamous.org/people/adam-arkin-19560819.html",
    "https://allfamous.org/people/adipati-dolken-19910819.html",
    "https://allfamous.org/people/arthur-fry-19310819.html",
    "https://allfamous.org/people/peter-mooney-19830819.html",
    "https://allfamous.org/people/mercedeh-allen-19870819.html",
    "https://allfamous.org/people/katie-belle-akin-19990819.html",
    "https://allfamous.org/people/nicole-zaira-miller-19930819.html",
    "https://allfamous.org/people/gerald-mcraney-19470819.html",
    "https://allfamous.org/people/brooke-mueller-19770819.html",
    "https://allfamous.org/people/thomas-jones-19780819.html",
    "https://allfamous.org/people/tamzin-marshall-20020819.html",
    "https://allfamous.org/people/debra-paget-19330819.html",
    "https://allfamous.org/people/will-swinney-19980819.html",
    "https://allfamous.org/people/ian-lightfoot-20000819.html",
    "https://allfamous.org/people/olivia-austin-19880819.html",
    "https://allfamous.org/people/ryan-taylor-19840819.html",
    
    "https://allfamous.org/people/joanna-teplin-wmv5.html",
    "https://allfamous.org/people/demi-lovato-19920820.html",
    "https://allfamous.org/people/prettyboyfredo-19930820.html",
    "https://allfamous.org/people/andrew-garfield-19830820.html",
    "https://allfamous.org/people/david-walliams-19710820.html",
    "https://allfamous.org/people/tatum-dahl-19970820.html",
    "https://allfamous.org/people/misha-collins-19740820.html",
    "https://allfamous.org/people/ben-barnes-19810820.html",
    "https://allfamous.org/people/shubble-19930820.html",
    "https://allfamous.org/people/maddie-orlando-19960820.html",
    "https://allfamous.org/people/amy-adams-19740820.html",
    "https://allfamous.org/people/linus-sebastian-19860820.html",
    "https://allfamous.org/people/lovely-mimi-19900820.html",
    "https://allfamous.org/people/kyrah-edwards-19970820.html",
    "https://allfamous.org/people/pio-dantini-19830820.html",
    "https://allfamous.org/people/gemma-huck-20040820.html",
    "https://allfamous.org/people/nocap-19980820.html",
    "https://allfamous.org/people/robert-plant-19480820.html",
    "https://allfamous.org/people/david-vlas-19990820.html",
    "https://allfamous.org/people/haha-19790820.html",
    "https://allfamous.org/people/neslihan-atagul-19920820.html",
    "https://allfamous.org/people/stefanie-eadie-19910820.html",
    "https://allfamous.org/people/fatima-ptacek-20000820.html",
    "https://allfamous.org/people/carolina-diaz-19940820.html",
    "https://allfamous.org/people/brant-daugherty-19850820.html",
    "https://allfamous.org/people/ethoslab-19860820.html",
    "https://allfamous.org/people/cxltures-20050820.html",
    "https://allfamous.org/people/dulce-candy-19870820.html",
    "https://allfamous.org/people/piercexthexholly-20030820.html",
    "https://allfamous.org/people/liana-liberato-19950820.html",
    "https://allfamous.org/people/kirko-bangz-19890820.html",
    "https://allfamous.org/people/olivia-pierson-19890820.html",
    "https://allfamous.org/people/alex-newell-19920820.html",
    "https://allfamous.org/people/tristyn-lee-20020820.html",
    "https://allfamous.org/people/al-roker-19540820.html",
    "https://allfamous.org/people/mitch-trubisky-19940820.html",
    "https://allfamous.org/people/andiesjourney-19920820.html",
    "https://allfamous.org/people/emily-kea-20020820.html",
    "https://allfamous.org/people/fred-durst-19700820.html",
    "https://allfamous.org/people/meghan-ory-19820820.html",
    "https://allfamous.org/people/christopher-paul-richards-20030820.html",
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
