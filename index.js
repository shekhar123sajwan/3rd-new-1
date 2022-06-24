 
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
  "https://allfamous.org/people/john-gabbana-19960803.html",
    "https://allfamous.org/people/dram-19880803.html",
    "https://allfamous.org/people/michael-ealy-19730803.html",
    "https://allfamous.org/people/averyb-19990803.html",
    "https://allfamous.org/people/ron-suno-20000803.html",
    "https://allfamous.org/people/sean-fujiyoshi-19910803.html",
    "https://allfamous.org/people/jagrit-pratap-singh-yghv.html",
    "https://allfamous.org/people/kristie-ray-19710803.html",
    "https://allfamous.org/people/ryan-lochte-19840803.html",
    "https://allfamous.org/people/jukka-hilden-19800803.html",
    "https://allfamous.org/people/todd-gurley-19940803.html",
    "https://allfamous.org/people/taylor-machat-20030803.html",
    "https://allfamous.org/people/isaiah-washington-19630803.html",
    "https://allfamous.org/people/masahiro-sakurai-19700803.html",
    "https://allfamous.org/people/bexey-swan-19960803.html",
    "https://allfamous.org/people/luzu-19850803.html",
    "https://allfamous.org/people/ramon-reed-20050803.html",
    "https://allfamous.org/people/ashley-kelsey-19860803.html",
    "https://allfamous.org/people/victor-pope-jr-19930803.html",
    "https://allfamous.org/people/furiousfade-20000803.html",
    "https://allfamous.org/people/lucie-fink-19920803.html",
    "https://allfamous.org/people/tony-bennett-19260803.html",
    "https://allfamous.org/people/julia-tomasone-19980803.html",
    "https://allfamous.org/people/lisa-ann-walter-19630803.html",
    "https://allfamous.org/people/jourdan-dunn-19900803.html",
    "https://allfamous.org/people/melissa-ponzio-19720803.html",
    "https://allfamous.org/people/skin-19670803.html",
    "https://allfamous.org/people/zach-pincince-19950803.html",
    "https://allfamous.org/people/skye-raae-19970803.html",
    "https://allfamous.org/people/seannooo-20030803.html",
    
    "https://allfamous.org/people/martin-sheen-19400803.html",
    "https://allfamous.org/people/chris-ramsey-19860803.html",
    "https://allfamous.org/people/hannah-simone-19800803.html",
    "https://allfamous.org/people/zane-austin-20040803.html",
    "https://allfamous.org/people/sai-datinguinoo-19990803.html",
    "https://allfamous.org/people/s1-19760803.html",
    "https://allfamous.org/people/isaac-gordon-20020803.html",
    "https://allfamous.org/people/kira-balinger-20000803.html",
    "https://allfamous.org/people/dominic-kline-20020803.html",
    "https://allfamous.org/people/tiona-fernan-19980803.html",
    "https://allfamous.org/people/sonny-bill-williams-19850803.html",
    "https://allfamous.org/people/adrian-gee-19930803.html",
    "https://allfamous.org/people/taylor-naomi-20040803.html",
    "https://allfamous.org/people/void-noir-19980803.html",
    "https://allfamous.org/people/emily-baldoni-19840803.html",
    "https://allfamous.org/people/juliesreborns-20000803.html",
    "https://allfamous.org/people/tyrod-taylor-19890803.html",
    "https://allfamous.org/people/paxton-berry-20000803.html",
    "https://allfamous.org/people/adammcg-tiktok-star.html",
    "https://allfamous.org/people/steve-hawkins-19620803.html",
    "https://allfamous.org/people/sianna22-20060803.html",
    "https://allfamous.org/people/nuenueeee-19950803.html",
    "https://allfamous.org/people/krymena-20010803.html",
    "https://allfamous.org/people/cold-hart-19940803.html",
    "https://allfamous.org/people/aidini-tortellini-youtube-star.html",
    "https://allfamous.org/people/shy-smith-20000803.html",
    "https://allfamous.org/people/travis-willingham-19810803.html",
    "https://allfamous.org/people/jaden-henline-20020803.html",
    "https://allfamous.org/people/bella-devyatkina-20120803.html",
    "https://allfamous.org/people/alexa-sunshine83-19940803.html",
    "https://allfamous.org/people/dana-steingold-19840803.html",
    "https://allfamous.org/people/briana-latrise-19860803.html",
    "https://allfamous.org/people/edrianna-terrae-20020803.html",
    "https://allfamous.org/people/anne-marie-deluise-19690803.html",
    "https://allfamous.org/people/zach-wilson-19990803.html",
    "https://allfamous.org/people/georgina-haig-19850803.html",
    "https://allfamous.org/people/jay-cutler-19730803.html",
    "https://allfamous.org/people/martavius-tucker-19940803.html",
    "https://allfamous.org/people/amanda-kimmel-19840803.html",
    "https://allfamous.org/people/nadia-ali-19800803.html",
    "https://allfamous.org/people/epik-whale-20020803.html",
    "https://allfamous.org/people/noah-riley-20000803.html",
    "https://allfamous.org/people/emgracedawg-19980803.html",
    "https://allfamous.org/people/sarah-ingle-19900803.html",
    "https://allfamous.org/people/moe-bradberry-19940803.html",
    "https://allfamous.org/people/margeaux-simms-19810803.html",
    "https://allfamous.org/people/kollegah-19840803.html",
    "https://allfamous.org/people/trevon-duval-19980803.html",
    
    "https://allfamous.org/people/francesca-jacovino-19940803.html",
    "https://allfamous.org/people/lil-sheik-20000803.html",
    "https://allfamous.org/people/ben-reid-20010803.html",
    "https://allfamous.org/people/molly-hagan-19610803.html",
    "https://allfamous.org/people/kimmy-dufresne-19930803.html",
    "https://allfamous.org/people/matt-lange-19860803.html",
    "https://allfamous.org/people/adria-killen-19930803.html",
    "https://allfamous.org/people/grace-kinstler-lyru.html",
    "https://allfamous.org/people/stephen-graham-19730803.html",
    "https://allfamous.org/people/joey-jaye-vbgx.html",
    "https://allfamous.org/people/courtney-randall-19920803.html",
    "https://allfamous.org/people/el-grande-toto-19950803.html",
    "https://allfamous.org/people/john-c-mcginley-19590803.html",
    "https://allfamous.org/people/julie-kirby-20000803.html",
    "https://allfamous.org/people/mike-holmes-19630803.html",
    "https://allfamous.org/people/eric-esch-19660803.html",
    "https://allfamous.org/people/brent-butt-19660803.html",
    "https://allfamous.org/people/angela-benitez-youtube-star.html",
    "https://allfamous.org/people/ryan-steele-19900803.html",
    "https://allfamous.org/people/mamie-gummer-19830803.html",
    "https://allfamous.org/people/noa-cohen-20020803.html",
    "https://allfamous.org/people/astrid-olsen-19980803.html",
    "https://allfamous.org/people/corey-burton-19550803.html",
    "https://allfamous.org/people/teethforkeith-19990803.html",
    "https://allfamous.org/people/jay-north-19510803.html",
    "https://allfamous.org/people/jack-burke-20020803.html",
    "https://allfamous.org/people/kyle-labiano-20000803.html",
    "https://allfamous.org/people/kwon-alexander-19940803.html",
    "https://allfamous.org/people/sunil-chhetri-19840803.html",
    "https://allfamous.org/people/amber-nicole-19960803.html",
    "https://allfamous.org/people/prince-louis-of-luxembourg-19860803.html",
    "https://allfamous.org/people/dj-spinderella-19710803.html",
    "https://allfamous.org/people/india-funimate-20050803.html",
    "https://allfamous.org/people/barkha-singh-19920803.html",
    "https://allfamous.org/people/kathryn-miranda-yates-19910803.html",
    "https://allfamous.org/people/ericko-lim-19950803.html",
    "https://allfamous.org/people/jack-fowler-19930803.html",
    "https://allfamous.org/people/macey-greer-20060803.html",
    "https://allfamous.org/people/maggie-grant-20020803.html",
    "https://allfamous.org/people/derwin-james-19960803.html",
    "https://allfamous.org/people/jo-marie-payton-19500803.html",
    "https://allfamous.org/people/noriandro-20010803.html",
    "https://allfamous.org/people/jodie-wood-19890803.html",
    "https://allfamous.org/people/will-cashion-19960803.html",
    "https://allfamous.org/people/shanelle-workman-19780803.html",
    "https://allfamous.org/people/jettballout-20020803.html",
    "https://allfamous.org/people/katja-vrcek-20030803.html",
    "https://allfamous.org/people/brigid-brannagh-19720803.html",
    
    "https://allfamous.org/people/belos-jupe.html",
    "https://allfamous.org/people/kyle-schmid-19840803.html",
    "https://allfamous.org/people/grace-jeanette-20000803.html",
    "https://allfamous.org/people/manish-paul-19810803.html",
    "https://allfamous.org/people/kendrick-nunn-19950803.html",
    "https://allfamous.org/people/ali-brown-19710803.html",
    "https://allfamous.org/people/anas-bukhash-19810803.html",
    "https://allfamous.org/people/brahim-diaz-19990803.html",
    "https://allfamous.org/people/alice-del-monte-youtube-star.html",
    "https://allfamous.org/people/john-landis-19500803.html",
    "https://allfamous.org/people/aalvx-20010803.html",
    "https://allfamous.org/people/theresa-gonzalez-19850803.html",
    "https://allfamous.org/people/dutchfifahd-19990803.html",
    "https://allfamous.org/people/sofia-jellen-20060803.html",
    "https://allfamous.org/people/alejandro-garcia-padilla-19710803.html",
    "https://allfamous.org/people/sadie-simm-20050803.html",
    "https://allfamous.org/people/jordan-jeanna-20110803.html",
    "https://allfamous.org/people/izumi-19870803.html",
    "https://allfamous.org/people/ashley-gonzales-19910803.html",
    "https://allfamous.org/people/mae-flowers-19860803.html",
    "https://allfamous.org/people/ronanmc-prsv.html",
    "https://allfamous.org/people/shunya-shiraishi-19900803.html",
    "https://allfamous.org/people/sarah-suhairi-20000803.html",
    "https://allfamous.org/people/anna-maria-ravnopolska-dean-19600803.html",
    "https://allfamous.org/people/whitney-duncan-19840803.html",
    "https://allfamous.org/people/christine-ko-19920803.html",
    "https://allfamous.org/people/jessica-mila-agnesia-19920803.html",
    "https://allfamous.org/people/realkraftyy-19910803.html",
    "https://allfamous.org/people/arantxa-canadas-19930803.html",
    "https://allfamous.org/people/kammi-rosenskjold-19950803.html",
    "https://allfamous.org/people/pretty-bands-19950803.html",
    "https://allfamous.org/people/jake-garland-19890803.html",
    "https://allfamous.org/people/daniella-baltodano-20030803.html",
    "https://allfamous.org/people/joey-purp-19930803.html",
    "https://allfamous.org/people/william-ainscough-20030803.html",
    "https://allfamous.org/people/yeon-jung-yu-19990803.html",
    "https://allfamous.org/people/sunil-grover-19770803.html",
    "https://allfamous.org/people/mari-koda-19860803.html",
    "https://allfamous.org/people/queenmarysaa-20040803.html",
    "https://allfamous.org/people/rini-chandra-19860803.html",
    "https://allfamous.org/people/younghoe-koo-19940803.html",
    "https://allfamous.org/people/asma-fares-19790803.html",
    "https://allfamous.org/people/karen-alloy-19770803.html",
    "https://allfamous.org/people/brent-kutzle-19850803.html",
    "https://allfamous.org/people/joe-depace-19890803.html",
    "https://allfamous.org/people/sasha-zotova-19950803.html",
    "https://allfamous.org/people/laura-nicole-20010803.html",
    "https://allfamous.org/people/neo-hou-19970803.html",
    
    "https://allfamous.org/people/gusgri-19890803.html",
    "https://allfamous.org/people/4hod-20010803.html",
    "https://allfamous.org/people/tyler-nicholson-19950803.html",
    "https://allfamous.org/people/landon-michael-scott-20100803.html",
    "https://allfamous.org/people/david-solans-19960803.html",
    "https://allfamous.org/people/alex-escalin-20000803.html",
    "https://allfamous.org/people/johan-fernandez-20030803.html",
    "https://allfamous.org/people/miles-williams-19920803.html",
    "https://allfamous.org/people/jorge-luis-pila-19720803.html",
    "https://allfamous.org/people/sc00bied00bie-8evz.html",
    "https://allfamous.org/people/kim-hyung-jun-19870803.html",
    "https://allfamous.org/people/sarah-carlos-19940803.html",
    "https://allfamous.org/people/yanira-domingo-19900803.html",
    "https://allfamous.org/people/lauren-diaz-19910803.html",
    "https://allfamous.org/people/brandon-peniche-19860803.html",
    "https://allfamous.org/people/eddie-maza-20030803.html",
    "https://allfamous.org/people/charlotte-casiraghi-19860803.html",
    "https://allfamous.org/people/corentin-tolisso-19940803.html",
    "https://allfamous.org/people/chris-murphy-19730803.html",
    "https://allfamous.org/people/mark-reynolds-19830803.html",
    "https://allfamous.org/people/britney-tankard-19900803.html",
    "https://allfamous.org/people/lucy-james-19910803.html",
    "https://allfamous.org/people/joey-fatts-19910803.html",
    "https://allfamous.org/people/kari-calhoun-19900803.html",
    "https://allfamous.org/people/brissia-mayagoitia-19910803.html",
    "https://allfamous.org/people/lisa-papz-20010803.html",
    "https://allfamous.org/people/emily-chang-19800803.html",
    "https://allfamous.org/people/thoren-bradley-19920803.html",
    "https://allfamous.org/people/ian-spear-19940803.html",
    "https://allfamous.org/people/max-landis-19850803.html",
    "https://allfamous.org/people/fun-with-the-bugs-20100803.html",
    "https://allfamous.org/people/gary-medel-19870803.html",
    "https://allfamous.org/people/nurulain-edruce-19910803.html",
    "https://allfamous.org/people/crystal-the-doll-19900803.html",
    "https://allfamous.org/people/mile-jedinak-19840803.html",
    "https://allfamous.org/people/lani-misalucha-19690803.html",
    "https://allfamous.org/people/crashylion-19990803.html",
    "https://allfamous.org/people/chloe-chong-20010803.html",
    "https://allfamous.org/people/erfan-paydar-19830803.html",
    "https://allfamous.org/people/softlysweet-asmr-xg1z.html",
    "https://allfamous.org/people/daniela-golubeva-20070803.html",
    "https://allfamous.org/people/peter-brown-19860803.html",
    "https://allfamous.org/people/caitlin-oconnor-19900803.html",
    "https://allfamous.org/people/ed-roland-19630803.html",
    "https://allfamous.org/people/chris-colditz-19920803.html",
    "https://allfamous.org/people/jaizellyndeleon-20020803.html",
    "https://allfamous.org/people/joan-higginbotham-19640803.html",
    "https://allfamous.org/people/luis-padron-19910803.html",
    
    "https://allfamous.org/people/cole-sprouse-19920804.html",
    "https://allfamous.org/people/barack-obama-19610804.html",
    "https://allfamous.org/people/meghan-markle-19810804.html",
    "https://allfamous.org/people/dylan-sprouse-19920804.html",
    "https://allfamous.org/people/lil-skies-19980804.html",
    "https://allfamous.org/people/jessika-the-prankster-20030804.html",
    "https://allfamous.org/people/tessa-bear-20000804.html",
    "https://allfamous.org/people/bobby-shmurda-19940804.html",
    "https://allfamous.org/people/natalie-biden-20040804.html",
    "https://allfamous.org/people/lottie-tomlinson-19980804.html",
    "https://allfamous.org/people/kira-girard-19810804.html",
    "https://allfamous.org/people/nathaniel-buzolic-19830804.html",
    "https://allfamous.org/people/amber-rose-gill-19970804.html",
    "https://allfamous.org/people/nabela-noor-19910804.html",
    "https://allfamous.org/people/meghan-rienks-19930804.html",
    "https://allfamous.org/people/jackie-aina-19870804.html",
    "https://allfamous.org/people/olivia-deeble-20020804.html",
    "https://allfamous.org/people/rich-dollaz-19750804.html",
    "https://allfamous.org/people/britneyandbaby-19930804.html",
    "https://allfamous.org/people/juwan-gutierrez-19990804.html",
    "https://allfamous.org/people/dasgasdom3-20020804.html",
    "https://allfamous.org/people/peter-weber-19910804.html",
    "https://allfamous.org/people/christine-riccio-19900804.html",
    "https://allfamous.org/people/jessica-mauboy-19890804.html",
    "https://allfamous.org/people/bruna-marquezine-19950804.html",
    "https://allfamous.org/people/anushka-sen-20020804.html",
    "https://allfamous.org/people/marques-houston-19810804.html",
    "https://allfamous.org/people/caroline-konstnar-youtube-star.html",
    "https://allfamous.org/people/resanu-20030804.html",
    "https://allfamous.org/people/shotgunplays-20010804.html",
    "https://allfamous.org/people/fiddy-rhett-20000804.html",
    "https://allfamous.org/people/lauren-tom-19610804.html",
    "https://allfamous.org/people/jeff-gordon-19710804.html",
    "https://allfamous.org/people/jayzam-manabat-19980804.html",
    "https://allfamous.org/people/chester-hanks-19900804.html",
    "https://allfamous.org/people/daniel-dae-kim-19680804.html",
    "https://allfamous.org/people/billy-bob-thornton-19550804.html",
    "https://allfamous.org/people/noah-pugliano-19990804.html",
    "https://allfamous.org/people/krischelle-delgado-20040804.html",
    "https://allfamous.org/people/lee-mack-19680804.html",
    "https://allfamous.org/people/steph-thomas-19980804.html",
    "https://allfamous.org/people/emilija-baranac-19940804.html",
    "https://allfamous.org/people/jessica-sanchez-19950804.html",
    "https://allfamous.org/people/kina-grannis-19850804.html",
    "https://allfamous.org/people/greta-gerwig-19830804.html",
    "https://allfamous.org/people/pastel-cookie-20080804.html",
    "https://allfamous.org/people/kelley-ohara-19880804.html",
    "https://allfamous.org/people/nathan-narra-20010804.html",
    
    "https://allfamous.org/people/rosethr-20020804.html",
    "https://allfamous.org/people/payden-evans-sottile-19990804.html",
    "https://allfamous.org/people/caitlin-beadles-19940804.html",
    "https://allfamous.org/people/gabbie-carter-20000804.html",
    "https://allfamous.org/people/todd-tucker-19730804.html",
    "https://allfamous.org/people/abigail-spencer-19810804.html",
    "https://allfamous.org/people/goddess-ariel-20060804.html",
    "https://allfamous.org/people/tinsley-price-20120804.html",
    "https://allfamous.org/people/s-x-19920804.html",
    "https://allfamous.org/people/river-viiperi-19910804.html",
    "https://allfamous.org/people/anniston-price-20120804.html",
    "https://allfamous.org/people/john-ocallaghan-19880804.html",
    "https://allfamous.org/people/mariyah-may-19960804.html",
    "https://allfamous.org/people/maria-kutie-19990804.html",
    "https://allfamous.org/people/kelly-gould-19990804.html",
    "https://allfamous.org/people/sebastian-roche-19640804.html",
    "https://allfamous.org/people/tiffany-evans-19920804.html",
    "https://allfamous.org/people/skyla-lynne-20010804.html",
    "https://allfamous.org/people/coscu-19910804.html",
    "https://allfamous.org/people/vivoree-esclito-20000804.html",
    "https://allfamous.org/people/denise-horan-19770804.html",
    "https://allfamous.org/people/eris-baker-20050804.html",
    "https://allfamous.org/people/jacob-stephens-20020804.html",
    "https://allfamous.org/people/studytee-19970804.html",
    "https://allfamous.org/people/dan-payne-19720804.html",
    "https://allfamous.org/people/kym-johnson-19760804.html",
    "https://allfamous.org/people/mason-noise-19930804.html",
    "https://allfamous.org/people/kurt-busch-19780804.html",
    "https://allfamous.org/people/josie-bates-19990804.html",
    "https://allfamous.org/people/yo-yo-19710804.html",
    "https://allfamous.org/people/kate-rockwell-19840804.html",
    "https://allfamous.org/people/toochi-kash-19880804.html",
    "https://allfamous.org/people/asya-siam-20050804.html",
    "https://allfamous.org/people/brent-triplett-19750804.html",
    "https://allfamous.org/people/josh-golden-19940804.html",
    "https://allfamous.org/people/taj-jackson-19730804.html",
    "https://allfamous.org/people/hattie-bourn-19940804.html",
    "https://allfamous.org/people/zach-nichols-19870804.html",
    "https://allfamous.org/people/jay-walker-19940804.html",
    "https://allfamous.org/people/aaron-pauley-19880804.html",
    "https://allfamous.org/people/john-paul-white-19730804.html",
    "https://allfamous.org/people/ricanbarbielia-wuzj.html",
    "https://allfamous.org/people/raphael-le-friant-20000804.html",
    "https://allfamous.org/people/jeff-pfeiffer-oqqv.html",
    "https://allfamous.org/people/alex-williamson-19880804.html",
    "https://allfamous.org/people/sam-underwood-19870804.html",
    "https://allfamous.org/people/ariel-gray-20060804.html",
    "https://allfamous.org/people/abbey-nolet-20000804.html",
    
    "https://allfamous.org/people/gala-montes-19990804.html",
    "https://allfamous.org/people/anastasia-lopicic-20050804.html",
    "https://allfamous.org/people/henry-lopez-20030804.html",
    "https://allfamous.org/people/ellie-kelly-19950804.html",
    "https://allfamous.org/people/robin-robinson-19570804.html",
    "https://allfamous.org/people/richard-belzer-19440804.html",
    "https://allfamous.org/people/amenazzy-19950804.html",
    "https://allfamous.org/people/antonio-valencia-19850804.html",
    "https://allfamous.org/people/jadenthegod-20010804.html",
    "https://allfamous.org/people/cande-copello-20000804.html",
    "https://allfamous.org/people/brooke-nichole-lee-19920804.html",
    "https://allfamous.org/people/paddy-wilde-20030804.html",
    "https://allfamous.org/people/irene-walton-19940804.html",
    "https://allfamous.org/people/aashna-shroff-19930804.html",
    "https://allfamous.org/people/lori-lightfoot-19620804.html",
    "https://allfamous.org/people/sarah-ayu-19950804.html",
    "https://allfamous.org/people/jen-lilley-19880804.html",
    "https://allfamous.org/people/naomie-olindo-19920804.html",
    "https://allfamous.org/people/prince-dre-19960804.html",
    "https://allfamous.org/people/kym-karath-19580804.html",
    "https://allfamous.org/people/ayanna-alexis-19960804.html",
    "https://allfamous.org/people/khaled-albaher-19950804.html",
    "https://allfamous.org/people/bobo-stenson-19440804.html",
    "https://allfamous.org/people/kyle-cooke-19820804.html",
    "https://allfamous.org/people/shaneice-crystal-19940804.html",
    "https://allfamous.org/people/roy-hodgson-19470804.html",
    "https://allfamous.org/people/yoli-mayor-19950804.html",
    "https://allfamous.org/people/danny-kim-19920804.html",
    "https://allfamous.org/people/kaden-stone-20020804.html",
    "https://allfamous.org/people/andre-lamoglia-19970804.html",
    "https://allfamous.org/people/killing-hunter-yt-20030804.html",
    "https://allfamous.org/people/karim-musa-19880804.html",
    "https://allfamous.org/people/josh-bagnall-20040804.html",
    "https://allfamous.org/people/savanna-shaw-20040804.html",
    "https://allfamous.org/people/cloie-rayne-qo1j.html",
    "https://allfamous.org/people/ozell-simon-20160804.html",
    "https://allfamous.org/people/mo-syed-19920804.html",
    "https://allfamous.org/people/ryan-libbey-19900804.html",
    "https://allfamous.org/people/annie-rose-buckley-20010804.html",
    "https://allfamous.org/people/tori-frazee-ktvq.html",
    "https://allfamous.org/people/sonika-vaid-19950804.html",
    "https://allfamous.org/people/fedelobo-19870804.html",
    "https://allfamous.org/people/binoftrash-19920804.html",
    "https://allfamous.org/people/kate-silverton-19700804.html",
    "https://allfamous.org/people/matt-thomas-19940804.html",
    "https://allfamous.org/people/cool-chrizz-19930804.html",
    "https://allfamous.org/people/roger-clemens-19620804.html",
    "https://allfamous.org/people/sirkittensjr-19950804.html",
    
    "https://allfamous.org/people/karchez-20000804.html",
    "https://allfamous.org/people/ciana-pelekai-20000804.html",
    "https://allfamous.org/people/arie-josephine-19950804.html",
    "https://allfamous.org/people/clarissa-putri-19940804.html",
    "https://allfamous.org/people/cherry-iero-20100804.html",
    "https://allfamous.org/people/heyitslindsey-20000804.html",
    "https://allfamous.org/people/size-8-19870804.html",
    "https://allfamous.org/people/priscilla-robertson-20060804.html",
    "https://allfamous.org/people/romana-bright-20030804.html",
    "https://allfamous.org/people/kendrick-bourne-19950804.html",
    "https://allfamous.org/people/lily-iero-20100804.html",
    "https://allfamous.org/people/laura-elizabeth-hall-2ggq.html",
    "https://allfamous.org/people/kalista-haire-20040804.html",
    "https://allfamous.org/people/bunny-hayler-20140804.html",
    "https://allfamous.org/people/aytac-sasmaz-19940804.html",
    "https://allfamous.org/people/gabenies-20040804.html",
    "https://allfamous.org/people/jenna-vulcano-19860804.html",
    "https://allfamous.org/people/nick-lazzarini-19840804.html",
    "https://allfamous.org/people/amanda-hackey-19900804.html",
    "https://allfamous.org/people/maycie-thornton-19880804.html",
    "https://allfamous.org/people/lidija-bacic-lille-19860804.html",
    "https://allfamous.org/people/alexis-stone-lopez-19840804.html",
    "https://allfamous.org/people/arbaaz-khan-19670804.html",
    "https://allfamous.org/people/romelo-thomas-19960804.html",
    "https://allfamous.org/people/cory-mathews-19760804.html",
    "https://allfamous.org/people/arlo-day-brody-20150804.html",
    "https://allfamous.org/people/paul-mccarthy-19450804.html",
    "https://allfamous.org/people/saido-berahino-19930804.html",
    "https://allfamous.org/people/orlando-arcia-19940804.html",
    "https://allfamous.org/people/haley-rowe-19910804.html",
    "https://allfamous.org/people/ashlan-grey-19950804.html",
    "https://allfamous.org/people/makayla-19990804.html",
    "https://allfamous.org/people/cathy-pedrayes-zodm.html",
    "https://allfamous.org/people/chanell-heeter-19940804.html",
    "https://allfamous.org/people/yashika-aannand-19990804.html",
    "https://allfamous.org/people/daniel-pichardo-20030804.html",
    "https://allfamous.org/people/johanna-herrstedt-19940804.html",
    "https://allfamous.org/people/khunnapat-pichetworawut-20000804.html",
    "https://allfamous.org/people/fredrik-reinfeldt-19650804.html",
    "https://allfamous.org/people/joes-brauers-19990804.html",
    "https://allfamous.org/people/mia-sabathy-19930804.html",
    "https://allfamous.org/people/marreese-speights-19870804.html",
    "https://allfamous.org/people/jenny-martinez-19940804.html",
    "https://allfamous.org/people/chuck-mowery-19890804.html",
    "https://allfamous.org/people/dylan-brislen-20040804.html",
    "https://allfamous.org/people/dajana-cahill-19890804.html",
    "https://allfamous.org/people/max-cavalera-19690804.html",
    "https://allfamous.org/people/richard-white-19530804.html",
    
    "https://allfamous.org/people/katie-carney-19860804.html",
    "https://allfamous.org/people/jojo-moyes-19690804.html",
    "https://allfamous.org/people/bret-baier-19700804.html",
    "https://allfamous.org/people/d-rose-19920804.html",
    "https://allfamous.org/people/oyku-gurman-19820804.html",
    "https://allfamous.org/people/kily-gonzalez-19740804.html",
    "https://allfamous.org/people/aitana-derbez-20140804.html",
    "https://allfamous.org/people/cortney-anna-19910804.html",
    "https://allfamous.org/people/kim-reynolds-19590804.html",
    "https://allfamous.org/people/damndrose-19920804.html",
    "https://allfamous.org/people/christopher-goncalo-19810804.html",
    "https://allfamous.org/people/sapphire-19500804.html",
    "https://allfamous.org/people/moya-brennan-19520804.html",
    "https://allfamous.org/people/crystal-bowersox-19850804.html",
    "https://allfamous.org/people/jeyisbaee-20030804.html",
    "https://allfamous.org/people/james-tupper-19650804.html",
    "https://allfamous.org/people/john-riggins-19490804.html",
    "https://allfamous.org/people/mark-jacobson-19890804.html",
    "https://allfamous.org/people/daniela-alexandra-19940804.html",
    "https://allfamous.org/people/anna-sui-19640804.html",
    "https://allfamous.org/people/dean-malenko-19600804.html",
    "https://allfamous.org/people/lucinda-dryzek-19910804.html",
    "https://allfamous.org/people/erich-schuett-20030804.html",
    "https://allfamous.org/people/kezia-eniang-19930804.html",
    "https://allfamous.org/people/lorna-luxe-umdk.html",
    "https://allfamous.org/people/marianiel-reyes-t63n.html",
    "https://allfamous.org/people/hubert-ingraham-19470804.html",
    "https://allfamous.org/people/michael-deluise-19690804.html",
    "https://allfamous.org/people/michael-murphy-19890804.html",
    "https://allfamous.org/people/aidouush-oq6d.html",
    "https://allfamous.org/people/ryan-vizcaino-19990804.html",
    "https://allfamous.org/people/adhir-kalyan-19830804.html",
    "https://allfamous.org/people/noah-faden-20010804.html",
    "https://allfamous.org/people/iqbal-ahmed-19560804.html",
    "https://allfamous.org/people/denver-mcquaid-19960804.html",
    "https://allfamous.org/people/putri-hashim-19940804.html",
    "https://allfamous.org/people/yolanda-whitaker-19710804.html",
    "https://allfamous.org/people/failwhale34-19970804.html",
    "https://allfamous.org/people/brentrambo-19950804.html",
    "https://allfamous.org/people/kazarian-19770804.html",
    "https://allfamous.org/people/luke-vaillancourt-19900804.html",
    "https://allfamous.org/people/kazim-ale-19950804.html",
    "https://allfamous.org/people/lesti-andryani-19990804.html",
    "https://allfamous.org/people/ari-boye-20140804.html",
    "https://allfamous.org/people/caylin-scott-19940804.html",
    "https://allfamous.org/people/cheesa-laureta-19900804.html",
    "https://allfamous.org/people/brayan-soto-19960804.html",
    "https://allfamous.org/people/lauren-makk-19850804.html",
    
    "https://allfamous.org/people/yungblud-19970805.html",
    "https://allfamous.org/people/olivia-holt-19970805.html",
    "https://allfamous.org/people/karli-reese-20040805.html",
    "https://allfamous.org/people/josie-totah-20010805.html",
    "https://allfamous.org/people/jesse-williams-19810805.html",
    "https://allfamous.org/people/jayla-marie-20040805.html",
    "https://allfamous.org/people/james-white-19900805.html",
    "https://allfamous.org/people/louis-walsh-19520805.html",
    "https://allfamous.org/people/sara-dobrik-20060805.html",
    "https://allfamous.org/people/presley-walker-20110805.html",
    "https://allfamous.org/people/ava-louise-19980805.html",
    "https://allfamous.org/people/ashley-strong-19910805.html",
    "https://allfamous.org/people/abbey-bankson-20000805.html",
    "https://allfamous.org/people/roplex-gaming-b3kj.html",
    "https://allfamous.org/people/kajol-19740805.html",
    "https://allfamous.org/people/jaden-delarosa-20000805.html",
    "https://allfamous.org/people/elle-mckinnon-20060805.html",
    "https://allfamous.org/people/cassie-martin-19960805.html",
    "https://allfamous.org/people/brianda-deyanara-19950805.html",
    "https://allfamous.org/people/taras-maksimuk-19930805.html",
    "https://allfamous.org/people/gianluca-vacchi-19670805.html",
    "https://allfamous.org/people/amymarie-gaertner-19940805.html",
    "https://allfamous.org/people/cory-williams-19810805.html",
    "https://allfamous.org/people/jessica-nigri-19890805.html",
    "https://allfamous.org/people/cj-collins-20030805.html",
    "https://allfamous.org/people/rachel-cooper-19880805.html",
    "https://allfamous.org/people/heath-peaslee-19770805.html",
    "https://allfamous.org/people/adam-irigoyen-19970805.html",
    "https://allfamous.org/people/nicole-kelly-20020805.html",
    "https://allfamous.org/people/born-to-be-ellie-youtube-star.html",
    "https://allfamous.org/people/albert-tsai-20040805.html",
    "https://allfamous.org/people/mimi-keene-19980805.html",
    "https://allfamous.org/people/brandon-collymore-19990805.html",
    "https://allfamous.org/people/lolo-jones-19820805.html",
    "https://allfamous.org/people/wang-yibo-19970805.html",
    "https://allfamous.org/people/justin-morales-20020805.html",
    "https://allfamous.org/people/joseph-anthonii-19930805.html",
    "https://allfamous.org/people/joba-19930805.html",
    "https://allfamous.org/people/julia-kostera-20030805.html",
    "https://allfamous.org/people/tancredi-galli-19990805.html",
    "https://allfamous.org/people/vincent-gigante-20030805.html",
    "https://allfamous.org/people/anthony-edwards-20010805.html",
    "https://allfamous.org/people/rory-fitzpatrick-19990805.html",
    "https://allfamous.org/people/michael-fulton-fupr.html",
    "https://allfamous.org/people/vanessa-simmons-19830805.html",
    "https://allfamous.org/people/helene-fischer-19840805.html",
    "https://allfamous.org/people/elvis-duran-19640805.html",
    "https://allfamous.org/people/patrick-ewing-19620805.html",
    
    "https://allfamous.org/people/james-gunn-19660805.html",
    "https://allfamous.org/people/maureen-mccormick-19560805.html",
    "https://allfamous.org/people/isaac-james-20030805.html",
    "https://allfamous.org/people/jocelyn-wildenstein-19450805.html",
    "https://allfamous.org/people/maddox-jolie-pitt-20010805.html",
    "https://allfamous.org/people/gia-canning-20020805.html",
    "https://allfamous.org/people/general-sam-19910805.html",
    "https://allfamous.org/people/daniel-smith-19930805.html",
    "https://allfamous.org/people/ludwig-wahlberg-19970805.html",
    "https://allfamous.org/people/eli-utley-20020805.html",
    "https://allfamous.org/people/augie-isaac-20000805.html",
    "https://allfamous.org/people/kennedy-eurich-20000805.html",
    "https://allfamous.org/people/bailey-spinnenweber-tiktok-star.html",
    "https://allfamous.org/people/xenia-tchoumitcheva-19870805.html",
    "https://allfamous.org/people/cookiee-kawaii-19930805.html",
    "https://allfamous.org/people/p-rico-19930805.html",
    "https://allfamous.org/people/pyper-braun-d3pp.html",
    "https://allfamous.org/people/honor-kneafsey-20040805.html",
    "https://allfamous.org/people/reza-farahan-19730805.html",
    "https://allfamous.org/people/woodz-19960805.html",
    "https://allfamous.org/people/nintendrew-19930805.html",
    "https://allfamous.org/people/juan-pablo-galavis-19810805.html",
    "https://allfamous.org/people/mark-strong-19630805.html",
    "https://allfamous.org/people/wayne-bridge-19800805.html",
    "https://allfamous.org/people/cassandra-cano-tiktok-star.html",
    "https://allfamous.org/people/danny-williams-19970805.html",
    "https://allfamous.org/people/brandi-milloy-19840805.html",
    "https://allfamous.org/people/shehryaar-asif-19920805.html",
    "https://allfamous.org/people/brianna-guerra-19990805.html",
    "https://allfamous.org/people/dyn-19980805.html",
    "https://allfamous.org/people/jarmo-de-rek-19990805.html",
    "https://allfamous.org/people/sophia-kerpsack-20080805.html",
    "https://allfamous.org/people/athena-skye-19990805.html",
    "https://allfamous.org/people/kylian-hazard-19950805.html",
    "https://allfamous.org/people/maitlyn-pezzo-19990805.html",
    "https://allfamous.org/people/marmar-al-hilali-19860805.html",
    "https://allfamous.org/people/j-ax-19720805.html",
    "https://allfamous.org/people/marlene-favela-19760805.html",
    "https://allfamous.org/people/andrea-wendel-19920805.html",
    "https://allfamous.org/people/makenna-miller-20040805.html",
    "https://allfamous.org/people/izzy-g-20080805.html",
    "https://allfamous.org/people/chris-gaskell-19910805.html",
    "https://allfamous.org/people/ripley-sobo-20030805.html",
    "https://allfamous.org/people/alexis-19820805.html",
    "https://allfamous.org/people/fadi-terro-20000805.html",
    "https://allfamous.org/people/anthony-carroll-19760805.html",
    "https://allfamous.org/people/erin-timony-19970805.html",
    "https://allfamous.org/people/vixenesha-20000805.html",
    
    "https://allfamous.org/people/bless-berelc-20040805.html",
    "https://allfamous.org/people/meechie69-19770805.html",
    "https://allfamous.org/people/annalisa-19850805.html",
    "https://allfamous.org/people/loni-anderson-19450805.html",
    "https://allfamous.org/people/marine-le-pen-19680805.html",
    "https://allfamous.org/people/aaron-chewning-19890805.html",
    "https://allfamous.org/people/ahsaas-channa-19990805.html",
    "https://allfamous.org/people/pat-smear-19590805.html",
    "https://allfamous.org/people/jana-vlogs-19940805.html",
    "https://allfamous.org/people/david-chang-19770805.html",
    "https://allfamous.org/people/thatdudemcfly-19880805.html",
    "https://allfamous.org/people/kaylani-19800805.html",
    "https://allfamous.org/people/jemmye-carroll-19880805.html",
    "https://allfamous.org/people/avni-yildirim-19910805.html",
    "https://allfamous.org/people/hunico-19770805.html",
    "https://allfamous.org/people/gianna-ernst-20040805.html",
    "https://allfamous.org/people/terri-clark-19680805.html",
    "https://allfamous.org/people/johnathan-hillstrand-19620805.html",
    "https://allfamous.org/people/paulina-vetrano-19960805.html",
    "https://allfamous.org/people/big-daddy-19910805.html",
    "https://allfamous.org/people/kara-tointon-19830805.html",
    "https://allfamous.org/people/alan-ferguson-19630805.html",
    "https://allfamous.org/people/sihyeon-19990805.html",
    "https://allfamous.org/people/dawn-richard-19830805.html",
    "https://allfamous.org/people/gabrielle-alexis-19970805.html",
    "https://allfamous.org/people/viviana-ochoa-19840805.html",
    "https://allfamous.org/people/lauren-hicks-20030805.html",
    "https://allfamous.org/people/antony-cotton-19750805.html",
    "https://allfamous.org/people/arely-tellez-19890805.html",
    "https://allfamous.org/people/mariaatumbles-20030805.html",
    "https://allfamous.org/people/erynn-monae-19970805.html",
    "https://allfamous.org/people/hun-sen-19520805.html",
    "https://allfamous.org/people/funkmaster-flex-19670805.html",
    "https://allfamous.org/people/taim-alfalasi-19910805.html",
    "https://allfamous.org/people/jorden-cain-20000805.html",
    "https://allfamous.org/people/genelia-dsouza-19870805.html",
    "https://allfamous.org/people/john-whitaker-19550805.html",
    "https://allfamous.org/people/federica-pellegrini-19880805.html",
    "https://allfamous.org/people/gabs-19940805.html",
    "https://allfamous.org/people/danielle-van-de-donk-19910805.html",
    "https://allfamous.org/people/michael-hollick-19730805.html",
    "https://allfamous.org/people/mah-19860805.html",
    "https://allfamous.org/people/julian-haig-19910805.html",
    "https://allfamous.org/people/carlos-ferreira-19950805.html",
    "https://allfamous.org/people/marissa-is-a-mommy-19960805.html",
    "https://allfamous.org/people/chloe-arnold-19800805.html",
    "https://allfamous.org/people/sophia-amber-moore-20040805.html",
    "https://allfamous.org/people/carl-crawford-19810805.html",
    
    "https://allfamous.org/people/alexis-hall-8zpj.html",
    "https://allfamous.org/people/brooklyn-courtney-moore-dnm8.html",
    "https://allfamous.org/people/susujpg-19910805.html",
    "https://allfamous.org/people/montana-yao-19970805.html",
    "https://allfamous.org/people/patrick-van-straaten-19890805.html",
    "https://allfamous.org/people/john-paul-reynolds-19910805.html",
    "https://allfamous.org/people/jake-hurwitz-19850805.html",
    "https://allfamous.org/people/gohan-son-19980805.html",
    "https://allfamous.org/people/michael-corleone-blanco-19750805.html",
    "https://allfamous.org/people/sam-beklat-20040805.html",
    "https://allfamous.org/people/kevin-david-19890805.html",
    "https://allfamous.org/people/chicha-amatayakul-19930805.html",
    "https://allfamous.org/people/imkooley-19930805.html",
    "https://allfamous.org/people/stefanie-joosten-19880805.html",
    "https://allfamous.org/people/beau-black-19830805.html",
    "https://allfamous.org/people/yocobble-hgn6.html",
    "https://allfamous.org/people/oon-shu-an-19860805.html",
    "https://allfamous.org/people/zubair-khan-20000805.html",
    "https://allfamous.org/people/cj-spiller-19870805.html",
    "https://allfamous.org/people/pressure-19810805.html",
    "https://allfamous.org/people/marc-metral-19530805.html",
    "https://allfamous.org/people/mia-milnes-19960805.html",
    "https://allfamous.org/people/bastighg-19970805.html",
    "https://allfamous.org/people/mahima-makwana-19990805.html",
    "https://allfamous.org/people/gabby-depietro-20000805.html",
    "https://allfamous.org/people/kaeson-lucas-19980805.html",
    "https://allfamous.org/people/janet-mcteer-19610805.html",
    "https://allfamous.org/people/feintattacks-19940805.html",
    "https://allfamous.org/people/maram-twosisterstube-20040805.html",
    "https://allfamous.org/people/danny-slavin-19730805.html",
    "https://allfamous.org/people/kit-tanton-19920805.html",
    "https://allfamous.org/people/marissa-hall-19950805.html",
    "https://allfamous.org/people/demew-19920805.html",
    "https://allfamous.org/people/yuona-jeung-20110805.html",
    "https://allfamous.org/people/sophie-winkleman-19800805.html",
    "https://allfamous.org/people/patrick-reed-19900805.html",
    "https://allfamous.org/people/vicky-stark-19850805.html",
    "https://allfamous.org/people/shirley-ann-jackson-19460805.html",
    "https://allfamous.org/people/jose-rivera-payan-19960805.html",
    "https://allfamous.org/people/madeline-ford-eqnp.html",
    "https://allfamous.org/people/shyla-short-20070805.html",
    "https://allfamous.org/people/bhavika-sharma-19980805.html",
    "https://allfamous.org/people/rachell-tan-19900805.html",
    "https://allfamous.org/people/aina-simon-19970805.html",
    "https://allfamous.org/people/brent-rambler-19900805.html",
    "https://allfamous.org/people/natalia-garcia-timofeeva-19940805.html",
    "https://allfamous.org/people/kayla-fitz-19910805.html",
    "https://allfamous.org/people/adrian-petriw-19870805.html",
    
    "https://allfamous.org/people/byronvids-19930805.html",
    "https://allfamous.org/people/kathy-zheng-19910805.html",
    "https://allfamous.org/people/hannah-russell-19960805.html",
    "https://allfamous.org/people/thao-linhh-19990805.html",
    "https://allfamous.org/people/brittany-brooks-19850805.html",
    "https://allfamous.org/people/ryan-bertrand-19890805.html",
    "https://allfamous.org/people/hwi-min-lee-19940805.html",
    "https://allfamous.org/people/matthew-paquette-19960805.html",
    "https://allfamous.org/people/chip-fields-19510805.html",
    "https://allfamous.org/people/kwon-sang-woo-19760805.html",
    "https://allfamous.org/people/johan-foset-20030805.html",
    "https://allfamous.org/people/grace-mitchell-19970805.html",
    "https://allfamous.org/people/reid-hoffman-19670805.html",
    "https://allfamous.org/people/xcalizorz-19880805.html",
    "https://allfamous.org/people/todd-burpo-19680805.html",
    "https://allfamous.org/people/nico-scholly-19930805.html",
    "https://allfamous.org/people/thelma-mdadine-19530805.html",
    "https://allfamous.org/people/jack-hoppus-20020805.html",
    "https://allfamous.org/people/jihoo-19980805.html",
    "https://allfamous.org/people/carina-axelsson-19680805.html",
    "https://allfamous.org/people/jonathan-silverman-19660805.html",
    "https://allfamous.org/people/joth-hunt-19860805.html",
    "https://allfamous.org/people/tochi-alucard-19950805.html",
    "https://allfamous.org/people/vatsal-sheth-19800805.html",
    "https://allfamous.org/people/ami-foster-19750805.html",
    "https://allfamous.org/people/zerrin-tekindor-19640805.html",
    "https://allfamous.org/people/cj-martin-19770805.html",
    "https://allfamous.org/people/valentina-lequeux-19890805.html",
    "https://allfamous.org/people/kelvin-heath-wwgt.html",
    "https://allfamous.org/people/jasmine-bartek-tiktok-star.html",
    "https://allfamous.org/people/delfano-charies-19940805.html",
    "https://allfamous.org/people/malucci-19940805.html",
    "https://allfamous.org/people/lilycreads-19980805.html",
    "https://allfamous.org/people/elizabeth-elam-19910805.html",
    "https://allfamous.org/people/davina-joy-19840805.html",
    "https://allfamous.org/people/leon-anderson-19860805.html",
    "https://allfamous.org/people/adam-greenwood-19980805.html",
    "https://allfamous.org/people/thegamercan-19950805.html",
    "https://allfamous.org/people/penelope-miller-20050805.html",
    "https://allfamous.org/people/sophie-guest-eay6.html",
    "https://allfamous.org/people/jack-jack-and-jane-19880805.html",
    "https://allfamous.org/people/paula-creamer-19860805.html",
    "https://allfamous.org/people/elyse-dehlbom-19870805.html",
    "https://allfamous.org/people/abdulrahman-awad-19960805.html",
    "https://allfamous.org/people/sophia-aguiar-19880805.html",
    "https://allfamous.org/people/conterstine-19950805.html",
    "https://allfamous.org/people/littlejbeauty-19960805.html",
    "https://allfamous.org/people/wanda-ventham-19350805.html",
    
    "https://allfamous.org/people/nessa-barrett-20020806.html",
    "https://allfamous.org/people/morgz-20010806.html",
    "https://allfamous.org/people/veronica-merrell-19960806.html",
    "https://allfamous.org/people/vanessa-merrell-19960806.html",
    "https://allfamous.org/people/clare-siobhan-19890806.html",
    "https://allfamous.org/people/ybn-almighty-jay-19990806.html",
    "https://allfamous.org/people/julia-raleigh-19970806.html",
    "https://allfamous.org/people/wyatt-bennett-20080806.html",
    "https://allfamous.org/people/kheris-rogers-20060806.html",
    "https://allfamous.org/people/leslie-odom-jr-19810806.html",
    "https://allfamous.org/people/yung-filly-19950806.html",
    "https://allfamous.org/people/ty-simpkins-20010806.html",
    "https://allfamous.org/people/tootie-raww-20030806.html",
    "https://allfamous.org/people/adley-mcbride-20150806.html",
    "https://allfamous.org/people/spice-19820806.html",
    "https://allfamous.org/people/oliver-fisher-20200806.html",
    "https://allfamous.org/people/linkmon99-19990806.html",
    "https://allfamous.org/people/bailey-may-20020806.html",
    "https://allfamous.org/people/toby-randall-20010806.html",
    "https://allfamous.org/people/ferne-mccann-19900806.html",
    "https://allfamous.org/people/vera-farmiga-19730806.html",
    "https://allfamous.org/people/itzmanoloo-20030806.html",
    "https://allfamous.org/people/xavier-di-petta-19960806.html",
    "https://allfamous.org/people/zion-sapong-20030806.html",
    "https://allfamous.org/people/robin-van-persie-19830806.html",
    "https://allfamous.org/people/soleil-moon-frye-19760806.html",
    "https://allfamous.org/people/j-nanks-19980806.html",
    "https://allfamous.org/people/bianca-spano-20040806.html",
    "https://allfamous.org/people/charlotte-mckinney-19930806.html",
    "https://allfamous.org/people/spencer-matthews-19890806.html",
    "https://allfamous.org/people/taya-brooks-20030806.html",
    "https://allfamous.org/people/isaiah-peck-19990806.html",
    "https://allfamous.org/people/staysolidrocky-20010806.html",
    "https://allfamous.org/people/logan-g-19950806.html",
    "https://allfamous.org/people/geri-halliwell-19720806.html",
    "https://allfamous.org/people/nathaniel-dass-20020806.html",
    "https://allfamous.org/people/justin-planes-20030806.html",
    "https://allfamous.org/people/travie-mccoy-19810806.html",
    "https://allfamous.org/people/danelle-hallan-19920806.html",
    "https://allfamous.org/people/brooke-lawson-19870806.html",
    "https://allfamous.org/people/frankie-stark-20030806.html",
    "https://allfamous.org/people/shordie-shordie-19960806.html",
    "https://allfamous.org/people/kensington-tallman-l4g8.html",
    "https://allfamous.org/people/alexa-moffett-19930806.html",
    "https://allfamous.org/people/natacha-oceane-19930806.html",
    "https://allfamous.org/people/george-benson-19940806.html",
    "https://allfamous.org/people/cj-dippa-19980806.html",
    "https://allfamous.org/people/leslie-chavez-20000806.html",
    
    "https://allfamous.org/people/usim-mango-qjwk.html",
    "https://allfamous.org/people/chelsee-healey-19880806.html",
    "https://allfamous.org/people/kyle-lindsey-19890806.html",
    "https://allfamous.org/people/david-robinson-19650806.html",
    "https://allfamous.org/people/jack-scanlon-19980806.html",
    "https://allfamous.org/people/hailey-kae-20020806.html",
    "https://allfamous.org/people/cleen-rock-one-19770806.html",
    "https://allfamous.org/people/wilmer-flores-19910806.html",
    "https://allfamous.org/people/kareem-hunt-19950806.html",
    "https://allfamous.org/people/truegreen7-19960806.html",
    "https://allfamous.org/people/m-night-shyamalan-19700806.html",
    "https://allfamous.org/people/kathryn-c-dennis-19910806.html",
    "https://allfamous.org/people/carlota-moon-youtube-star.html",
    "https://allfamous.org/people/sara-khan-19890806.html",
    "https://allfamous.org/people/melissa-george-19760806.html",
    "https://allfamous.org/people/chandler-cooper-19980806.html",
    "https://allfamous.org/people/michelle-yeoh-19630806.html",
    "https://allfamous.org/people/brookelle-mckenzie-19900806.html",
    "https://allfamous.org/people/david-wolfe-19700806.html",
    "https://allfamous.org/people/adrianne-curry-19820806.html",
    "https://allfamous.org/people/marisa-miller-19780806.html",
    "https://allfamous.org/people/jack-brett-anderson-19910806.html",
    "https://allfamous.org/people/leigh-anne-tuohy-19600806.html",
    "https://allfamous.org/people/lando-19970806.html",
    "https://allfamous.org/people/elliandra-19930806.html",
    "https://allfamous.org/people/max-kellerman-19730806.html",
    "https://allfamous.org/people/michael-parr-19860806.html",
    "https://allfamous.org/people/omi-in-a-hellcat-19860806.html",
    "https://allfamous.org/people/tyler-fraser-20030806.html",
    "https://allfamous.org/people/walbi-nyc-20030806.html",
    "https://allfamous.org/people/harley-graham-20010806.html",
    "https://allfamous.org/people/kaitlyn-faith-clayton-ejcc.html",
    "https://allfamous.org/people/daniel-lim-19960806.html",
    "https://allfamous.org/people/elexia-broussard-19970806.html",
    "https://allfamous.org/people/ana-cadence-19970806.html",
    "https://allfamous.org/people/cory-clarko-20030806.html",
    "https://allfamous.org/people/swimsuitsuccubus-19910806.html",
    "https://allfamous.org/people/reby-sky-19860806.html",
    "https://allfamous.org/people/gary-valenciano-19640806.html",
    "https://allfamous.org/people/itowngameplay-19850806.html",
    "https://allfamous.org/people/samara-cadenas-19990806.html",
    "https://allfamous.org/people/devilman-19890806.html",
    "https://allfamous.org/people/vanessa-gerbelli-19730806.html",
    "https://allfamous.org/people/dipika-kakar-19870806.html",
    "https://allfamous.org/people/arlo-sullivan-20080806.html",
    "https://allfamous.org/people/ji-won-kim-19590806.html",
    "https://allfamous.org/people/enzo-pebre-20010806.html",
    "https://allfamous.org/people/gabbpacheco-8ktm.html",
    
    "https://allfamous.org/people/lakiastar-19890806.html",
    "https://allfamous.org/people/destiny-odom-19980806.html",
    "https://allfamous.org/people/mimi-ryder-20050806.html",
    "https://allfamous.org/people/josh-sundquist-19840806.html",
    "https://allfamous.org/people/oscar-dietz-20000806.html",
    "https://allfamous.org/people/lor-chris-19940806.html",
    "https://allfamous.org/people/shannon-wise-19990806.html",
    "https://allfamous.org/people/catherine-hicks-19510806.html",
    "https://allfamous.org/people/aditya-narayan-19870806.html",
    "https://allfamous.org/people/charles-ingram-19630806.html",
    "https://allfamous.org/people/sarah-fraisou-19940806.html",
    "https://allfamous.org/people/sofia-bogdanova-20050806.html",
    "https://allfamous.org/people/regina-carter-19660806.html",
    "https://allfamous.org/people/andre-marhold-19900806.html",
    "https://allfamous.org/people/john-moschitta-jr-19540806.html",
    "https://allfamous.org/people/marika-ferrarelli-20000806.html",
    "https://allfamous.org/people/vinnie-vincent-19520806.html",
    "https://allfamous.org/people/leslie-edward-pridgen-19780806.html",
    "https://allfamous.org/people/dani-ribba-19990806.html",
    "https://allfamous.org/people/ben-stern-20040806.html",
    "https://allfamous.org/people/kawaii-kid-my-kawaii-family-20100806.html",
    "https://allfamous.org/people/kacey-rohl-19910806.html",
    "https://allfamous.org/people/breanne-rodgers-20010806.html",
    "https://allfamous.org/people/debi-nova-19800806.html",
    "https://allfamous.org/people/musa-adnan-19960806.html",
    "https://allfamous.org/people/liam-haygarth-19970806.html",
    "https://allfamous.org/people/yei-love-19820806.html",
    "https://allfamous.org/people/bazanji-19950806.html",
    "https://allfamous.org/people/stella-parnevik-20030806.html",
    "https://allfamous.org/people/frank-walker-19810806.html",
    "https://allfamous.org/people/abbey-pattle-qmmj.html",
    "https://allfamous.org/people/donna-lewis-19730806.html",
    "https://allfamous.org/people/lizzie-bassett-19890806.html",
    "https://allfamous.org/people/rhianatokarz-20000806.html",
    "https://allfamous.org/people/yess-19870806.html",
    "https://allfamous.org/people/romola-garai-19820806.html",
    "https://allfamous.org/people/hopper-jack-penn-19930806.html",
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
