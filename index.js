 
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
  "https://allfamous.org/people/ginevra-mavilla-20020706.html",
    "https://allfamous.org/people/jt-tollas-19920706.html",
    "https://allfamous.org/people/eryn-nicole-pablico-20000706.html",
    "https://allfamous.org/people/randy-rainbow-19820706.html",
    "https://allfamous.org/people/bella-michelle-2p2g.html",
    "https://allfamous.org/people/jerry-pascucci-19960706.html",
    "https://allfamous.org/people/sarah-barrable-tishauer-19880706.html",
    "https://allfamous.org/people/alexis-jones-19830706.html",
    "https://allfamous.org/people/steve-booker-19880706.html",
    "https://allfamous.org/people/elliott-trent-19920706.html",
    "https://allfamous.org/people/brandon-jacobs-19820706.html",
    "https://allfamous.org/people/loyaltybluee-d9om.html",
    
    "https://allfamous.org/people/rolly-ranchers-20050706.html",
    "https://allfamous.org/people/melissa-steel-19930706.html",
    "https://allfamous.org/people/alex-diaz-19900706.html",
    "https://allfamous.org/people/inspectah-deck-19700706.html",
    "https://allfamous.org/people/laith-de-la-cruz-19890706.html",
    "https://allfamous.org/people/bethany-struble-19920706.html",
    "https://allfamous.org/people/iamg0ldiecurls-20010706.html",
    "https://allfamous.org/people/grant-goodeve-19520706.html",
    "https://allfamous.org/people/ales-knezinek-19940706.html",
    "https://allfamous.org/people/subroza-ymz2.html",
    "https://allfamous.org/people/lee-soo-jung-19920706.html",
    "https://allfamous.org/people/william-loftis-19900706.html",
    "https://allfamous.org/people/chaos-kissinger-19970706.html",
    "https://allfamous.org/people/miss-li-19820706.html",
    "https://allfamous.org/people/6obby-19990706.html",
    "https://allfamous.org/people/robin-james-19870706.html",
    "https://allfamous.org/people/ben-bissington-19910706.html",
    "https://allfamous.org/people/adam-mach-19990706.html",
    "https://allfamous.org/people/dantay-tay-official-20090706.html",
    "https://allfamous.org/people/danielle-jordan-19980706.html",
    "https://allfamous.org/people/laovaan-19920706.html",
    "https://allfamous.org/people/aura-frost-youtube-star.html",
    "https://allfamous.org/people/cj-fly-19930706.html",
    "https://allfamous.org/people/andrew-bereza-19990706.html",
    "https://allfamous.org/people/andrea-torre-19790706.html",
    "https://allfamous.org/people/alessandro-juliani-19750706.html",
    "https://allfamous.org/people/morgan-ann-19950706.html",
    "https://allfamous.org/people/joshua-burner-19920706.html",
    "https://allfamous.org/people/nursultan-nazarbayev-19400706.html",
    "https://allfamous.org/people/ashley-renee-19990706.html",
    "https://allfamous.org/people/lilllybelle561-19870706.html",
    "https://allfamous.org/people/eleanna-palaiologou-19940706.html",
    "https://allfamous.org/people/lance-johnson-19630706.html",
    "https://allfamous.org/people/joell-ortiz-19800706.html",
    "https://allfamous.org/people/robert-eibach-19810706.html",
    "https://allfamous.org/people/milana-stanojevic-19960706.html",
    "https://allfamous.org/people/olibazz123-19940706.html",
    "https://allfamous.org/people/shruti-sharma-19810706.html",
    "https://allfamous.org/people/nails-by-jema-19860706.html",
    "https://allfamous.org/people/robert-naylor-19960706.html",
    "https://allfamous.org/people/courtney-helm-19890706.html",
    "https://allfamous.org/people/ylenia-padilla-19880706.html",
    "https://allfamous.org/people/leah-mccarthy-19940706.html",
    "https://allfamous.org/people/tony-lewis-19380706.html",
    "https://allfamous.org/people/timothy-james-allen-morrison-20170706.html",
    "https://allfamous.org/people/jada-bush-20020706.html",
    "https://allfamous.org/people/aj-wolfy-19950706.html",
    "https://allfamous.org/people/caroline-trentini-19870706.html",
    
    "https://allfamous.org/people/kim-sook-19750706.html",
    "https://allfamous.org/people/lauren-harris-19840706.html",
    "https://allfamous.org/people/amber-liu-19840706.html",
    "https://allfamous.org/people/limeryslimery-20030706.html",
    "https://allfamous.org/people/vishal-jethwa-19940706.html",
    "https://allfamous.org/people/william-lee-scott-19730706.html",
    "https://allfamous.org/people/d-woods-19850706.html",
    "https://allfamous.org/people/sourpqtch-20040706.html",
    "https://allfamous.org/people/svea-engel-19980706.html",
    "https://allfamous.org/people/scott-van-pelt-19660706.html",
    "https://allfamous.org/people/raelynn-cantrall-19970706.html",
    "https://allfamous.org/people/luke-pretty-19960706.html",
    "https://allfamous.org/people/rhymefest-19770706.html",
    "https://allfamous.org/people/mitchell-wick-19860706.html",
    "https://allfamous.org/people/brianna-wu-19800706.html",
    "https://allfamous.org/people/jerry-smith-19940706.html",
    "https://allfamous.org/people/jay-buchanan-19750706.html",
    "https://allfamous.org/people/andrew-bisnaught-19800706.html",
    "https://allfamous.org/people/ginger-goldbaum-19900706.html",
    "https://allfamous.org/people/zin-alexus-20030706.html",
    "https://allfamous.org/people/z-lala-19920706.html",
    "https://allfamous.org/people/veysel-19840706.html",
    "https://allfamous.org/people/clarisse-lafleur-19970706.html",
    "https://allfamous.org/people/nathan-storey-20010706.html",
    "https://allfamous.org/people/manpreet-kaur-19900706.html",
    "https://allfamous.org/people/caroline-robianto-19890706.html",
    "https://allfamous.org/people/hadeel-marei-hjwx.html",
    "https://allfamous.org/people/tommyt999-19760706.html",
    "https://allfamous.org/people/sami-khan-19800706.html",
    "https://allfamous.org/people/brandon-talbott-19990706.html",
    "https://allfamous.org/people/jenna-devalen-20000706.html",
    "https://allfamous.org/people/corey-coleman-19940706.html",
    "https://allfamous.org/people/sultan-al-qasimi-19390706.html",
    "https://allfamous.org/people/dave-cad-19880706.html",
    "https://allfamous.org/people/datev-gallagher-19890706.html",
    "https://allfamous.org/people/josh-elliott-19710706.html",
    "https://allfamous.org/people/tyler-knott-gregson-19810706.html",
    "https://allfamous.org/people/fred-dryer-19460706.html",
    "https://allfamous.org/people/ricardo-medina-jr-19770706.html",
    "https://allfamous.org/people/serlina-jana-hohmann-19940706.html",
    "https://allfamous.org/people/shelley-hack-19470706.html",
    "https://allfamous.org/people/kai-ture-20070706.html",
    "https://allfamous.org/people/savi-sala-19920706.html",
    "https://allfamous.org/people/valeria-basurco-19930706.html",
    "https://allfamous.org/people/noli-de-castro-19490706.html",
    "https://allfamous.org/people/agnes-lovise-haugen-19960706.html",
    "https://allfamous.org/people/dante-gebel-19680706.html",
    "https://allfamous.org/people/jak-mccourt-19950706.html",
    
    "https://allfamous.org/people/matthew-espinosa-19970707.html",
    "https://allfamous.org/people/laurenzside-19890707.html",
    "https://allfamous.org/people/ashton-irwin-19940707.html",
    "https://allfamous.org/people/sky-brown-20080707.html",
    "https://allfamous.org/people/mariamstar1-20060707.html",
    "https://allfamous.org/people/dylan-sprayberry-19980707.html",
    "https://allfamous.org/people/gilmher-croes-19930707.html",
    "https://allfamous.org/people/james-marriott-19970707.html",
    "https://allfamous.org/people/ally-brooke-19930707.html",
    "https://allfamous.org/people/guttakay-20000707.html",
    "https://allfamous.org/people/ringo-starr-19400707.html",
    "https://allfamous.org/people/jiedel-19950707.html",
    "https://allfamous.org/people/ricancubana-19920707.html",
    "https://allfamous.org/people/princess-jay-20030707.html",
    "https://allfamous.org/people/jack-whitehall-19880707.html",
    "https://allfamous.org/people/tiffany-lee-20010707.html",
    "https://allfamous.org/people/adexe-20050707.html",
    "https://allfamous.org/people/fernanfloo-19930707.html",
    "https://allfamous.org/people/curlyheaddondon-20060707.html",
    "https://allfamous.org/people/holly-hagan-19920707.html",
    "https://allfamous.org/people/sara-carstens-20010707.html",
    "https://allfamous.org/people/ava-marie-clements-20100707.html",
    "https://allfamous.org/people/jeremy-kyle-19650707.html",
    "https://allfamous.org/people/ms-dhoni-19810707.html",
    "https://allfamous.org/people/anna-vakili-19900707.html",
    "https://allfamous.org/people/trin-lovell-20020707.html",
    "https://allfamous.org/people/lionmakerstudios-19880707.html",
    "https://allfamous.org/people/shaun-mcbride-19870707.html",
    "https://allfamous.org/people/kodi-lee-19960707.html",
    "https://allfamous.org/people/cree-summer-19690707.html",
    "https://allfamous.org/people/kirsten-vangsness-19720707.html",
    "https://allfamous.org/people/sevyn-streeter-19860707.html",
    "https://allfamous.org/people/elyssa-joy-19980707.html",
    "https://allfamous.org/people/leah-rose-clements-20100707.html",
    "https://allfamous.org/people/bruce-herbelin-earle-19980707.html",
    "https://allfamous.org/people/brittanya-razavi-19850707.html",
    "https://allfamous.org/people/patrick-oconnell-19570707.html",
    "https://allfamous.org/people/alyssa-lynch-19950707.html",
    "https://allfamous.org/people/alesso-19910707.html",
    "https://allfamous.org/people/synyster-gates-19810707.html",
    "https://allfamous.org/people/julia-zelg-19940707.html",
    "https://allfamous.org/people/tasha-cobbs-19810707.html",
    "https://allfamous.org/people/maddie-marlow-19950707.html",
    "https://allfamous.org/people/steven-crowder-19870707.html",
    "https://allfamous.org/people/jim-gaffigan-19660707.html",
    "https://allfamous.org/people/andrie-carigo-20010707.html",
    "https://allfamous.org/people/lpsskittles-19980707.html",
    "https://allfamous.org/people/fainted-19990707.html",
    
    "https://allfamous.org/people/viddal-riley-19970707.html",
    "https://allfamous.org/people/ziv-zaifman-20040707.html",
    "https://allfamous.org/people/chase-claypool-19980707.html",
    "https://allfamous.org/people/paige-secosky-19980707.html",
    "https://allfamous.org/people/adonis-martinez-20060707.html",
    "https://allfamous.org/people/anna-heid-19990707.html",
    "https://allfamous.org/people/mathew-nooch-19940707.html",
    "https://allfamous.org/people/jamie-flatters-20000707.html",
    "https://allfamous.org/people/shelly-wallace-19770707.html",
    "https://allfamous.org/people/ajmg-20000707.html",
    "https://allfamous.org/people/matija-lazarevic-19970707.html",
    "https://allfamous.org/people/michael-chamberlain-19650707.html",
    "https://allfamous.org/people/shelley-duvall-19490707.html",
    "https://allfamous.org/people/tom-sandoval-19830707.html",
    "https://allfamous.org/people/chase-money-19870707.html",
    "https://allfamous.org/people/juliette-porter-19970707.html",
    "https://allfamous.org/people/cassidy-19820707.html",
    "https://allfamous.org/people/elias-irias-20010707.html",
    "https://allfamous.org/people/tyler-cole-19980707.html",
    "https://allfamous.org/people/prohenis-19980707.html",
    "https://allfamous.org/people/chris-andersen-19780707.html",
    "https://allfamous.org/people/james-duggar-20010707.html",
    "https://allfamous.org/people/lisa-leslie-19720707.html",
    "https://allfamous.org/people/kim-bum-19890707.html",
    "https://allfamous.org/people/jake-bateman-19970707.html",
    "https://allfamous.org/people/toni-garrn-19920707.html",
    "https://allfamous.org/people/lorna-bliss-19780707.html",
    "https://allfamous.org/people/juultje-tieleman-19990707.html",
    "https://allfamous.org/people/elma-pazar-19930707.html",
    "https://allfamous.org/people/michelle-kwan-19800707.html",
    "https://allfamous.org/people/kathryn-mccormick-19900707.html",
    "https://allfamous.org/people/amadeus-serafini-19900707.html",
    "https://allfamous.org/people/allen-payne-19680707.html",
    "https://allfamous.org/people/marie-mai-19840707.html",
    "https://allfamous.org/people/luke-suliman-19940707.html",
    "https://allfamous.org/people/jamie-cook-19850707.html",
    "https://allfamous.org/people/asia-ohara-19820707.html",
    "https://allfamous.org/people/drugrixh-peso-19950707.html",
    "https://allfamous.org/people/jamie-johnston-19890707.html",
    "https://allfamous.org/people/mally-mall-19770707.html",
    "https://allfamous.org/people/jordan-taylor-wright-19880707.html",
    "https://allfamous.org/people/riggy-19990707.html",
    "https://allfamous.org/people/sophie-simmons-19920707.html",
    "https://allfamous.org/people/alic-walls-19960707.html",
    "https://allfamous.org/people/gigi-papasavvas-20010707.html",
    "https://allfamous.org/people/reymound-fabito-19940707.html",
    "https://allfamous.org/people/cody-garbrandt-19910707.html",
    "https://allfamous.org/people/zoe-collins-20060707.html",
    
    "https://allfamous.org/people/gracie-tarver-19990707.html",
    "https://allfamous.org/people/jorja-fox-19680707.html",
    "https://allfamous.org/people/eve-hewson-19910707.html",
    "https://allfamous.org/people/jaida-chanel-19990707.html",
    "https://allfamous.org/people/katie-rost-19800707.html",
    "https://allfamous.org/people/nba-insider-19960707.html",
    "https://allfamous.org/people/ned-porteous-19940707.html",
    "https://allfamous.org/people/mason-turner-20010707.html",
    "https://allfamous.org/people/brian-rosenthal-19890707.html",
    "https://allfamous.org/people/trill-saucey-19990707.html",
    "https://allfamous.org/people/preston-howell-20040707.html",
    "https://allfamous.org/people/zach-garcia-19940707.html",
    "https://allfamous.org/people/minnie-dlamini-19900707.html",
    "https://allfamous.org/people/stephanie-tejada-19880707.html",
    "https://allfamous.org/people/jacob-karram-20000707.html",
    "https://allfamous.org/people/sarah-pidgeon-19960707.html",
    "https://allfamous.org/people/danny-jacobs-19680707.html",
    "https://allfamous.org/people/quebonafide-19910707.html",
    "https://allfamous.org/people/sami-clarke-19940707.html",
    "https://allfamous.org/people/justin-de-dios-19970707.html",
    "https://allfamous.org/people/lauren-halil-20010707.html",
    "https://allfamous.org/people/cicily-boone-19970707.html",
    "https://allfamous.org/people/lilah-burger-19990707.html",
    "https://allfamous.org/people/jetsun-pema-19400707.html",
    "https://allfamous.org/people/nate-brown-19910707.html",
    "https://allfamous.org/people/julian-fernandez-20020707.html",
    "https://allfamous.org/people/ana-kasparian-19860707.html",
    "https://allfamous.org/people/faik-mirzaev-19990707.html",
    "https://allfamous.org/people/charm-killings-19890707.html",
    "https://allfamous.org/people/helen-hong-19850707.html",
    "https://allfamous.org/people/huw-samuel-19900707.html",
    "https://allfamous.org/people/halo-ray-20140707.html",
    "https://allfamous.org/people/camylio-20010707.html",
    "https://allfamous.org/people/lilbabytorie-20000707.html",
    "https://allfamous.org/people/james-forrest-19910707.html",
    "https://allfamous.org/people/jc-dombrowski-20000707.html",
    "https://allfamous.org/people/laila-lovaticfab-19950707.html",
    "https://allfamous.org/people/melody-joy-williams-19990707.html",
    "https://allfamous.org/people/marika-dominczyk-19800707.html",
    "https://allfamous.org/people/gatlin-green-19970707.html",
    "https://allfamous.org/people/ernesto-powe-19960707.html",
    "https://allfamous.org/people/jake-hoot-19880707.html",
    "https://allfamous.org/people/amy-carlson-19680707.html",
    "https://allfamous.org/people/sam-aston-19930707.html",
    "https://allfamous.org/people/anima-gaming-19920707.html",
    "https://allfamous.org/people/roz-ryan-19510707.html",
    "https://allfamous.org/people/olivia-oshry-19910707.html",
    "https://allfamous.org/people/bii-19890707.html",
    
    "https://allfamous.org/people/emilia-merkell-20010707.html",
    "https://allfamous.org/people/ashley-rivera-20000707.html",
    "https://allfamous.org/people/chevy-octa-20020707.html",
    "https://allfamous.org/people/mal-blum-19880707.html",
    "https://allfamous.org/people/c4-pedro-19830707.html",
    "https://allfamous.org/people/rauf-mirzaev-19990707.html",
    "https://allfamous.org/people/gaku-space-19790707.html",
    "https://allfamous.org/people/ryan-carter-19880707.html",
    "https://allfamous.org/people/jennifer-gibney-19640707.html",
    "https://allfamous.org/people/joyce-bonelli-19810707.html",
    "https://allfamous.org/people/blass-luciano-tiktok-star.html",
    "https://allfamous.org/people/zae-hicks-19990707.html",
    "https://allfamous.org/people/toto-cutugno-19430707.html",
    "https://allfamous.org/people/anonimus-19820707.html",
    "https://allfamous.org/people/mary-sarah-19950707.html",
    "https://allfamous.org/people/nobu-lingbao-20020707.html",
    "https://allfamous.org/people/ichika-nito-19940707.html",
    "https://allfamous.org/people/billy-campbell-19590707.html",
    "https://allfamous.org/people/karen-malina-white-19650707.html",
    "https://allfamous.org/people/austin-kerr-19890707.html",
    "https://allfamous.org/people/aino-jawo-19860707.html",
    "https://allfamous.org/people/donovan-vinson-20060707.html",
    "https://allfamous.org/people/intothebarrier-19950707.html",
    "https://allfamous.org/people/maripier-morin-19860707.html",
    "https://allfamous.org/people/gramps-morgan-19760707.html",
    "https://allfamous.org/people/jessica-chobot-19770707.html",
    "https://allfamous.org/people/michael-kieran-harvey-19610707.html",
    "https://allfamous.org/people/ralph-sampson-19600707.html",
    "https://allfamous.org/people/andres-flores-njxp.html",
    "https://allfamous.org/people/andres-cepeda-19730707.html",
    "https://allfamous.org/people/karina-seabrook-19990707.html",
    "https://allfamous.org/people/berenice-bejo-19760707.html",
    "https://allfamous.org/people/mike-cimorelli-sr-19610707.html",
    "https://allfamous.org/people/julien-dore-19820707.html",
    "https://allfamous.org/people/julian-perez-19920707.html",
    "https://allfamous.org/people/martin-wallstrom-19830707.html",
    "https://allfamous.org/people/brandon-rush-19850707.html",
    "https://allfamous.org/people/diarmuid-connolly-19870707.html",
    "https://allfamous.org/people/julianna-guill-19870707.html",
    "https://allfamous.org/people/samantha-eklund-20000707.html",
    "https://allfamous.org/people/byou-19970707.html",
    "https://allfamous.org/people/casey-rosenberg-19940707.html",
    "https://allfamous.org/people/spencer-park-20040707.html",
    "https://allfamous.org/people/romina-malaspina-19940707.html",
    "https://allfamous.org/people/shona-vertue-19840707.html",
    "https://allfamous.org/people/kasi-bennett-19900707.html",
    "https://allfamous.org/people/chloe-csengery-20000707.html",
    "https://allfamous.org/people/leah-candoo-20090707.html",
    
    "https://allfamous.org/people/ander-ortega-garcia-20000707.html",
    "https://allfamous.org/people/stash-fiordispino-19890707.html",
    "https://allfamous.org/people/alivia-latimer-19960707.html",
    "https://allfamous.org/people/jens-knossalla-19860707.html",
    "https://allfamous.org/people/joe-sakic-19690707.html",
    "https://allfamous.org/people/lynn-spoor-19970707.html",
    "https://allfamous.org/people/victoria-schwab-19870707.html",
    "https://allfamous.org/people/jamie-fine-19930707.html",
    "https://allfamous.org/people/brad-james-19810707.html",
    "https://allfamous.org/people/emma-winder-vsld.html",
    "https://allfamous.org/people/harvey-torres-20040707.html",
    "https://allfamous.org/people/c2saucy-19930707.html",
    "https://allfamous.org/people/bankroll-marky-19930707.html",
    "https://allfamous.org/people/choi-tae-joon-19910707.html",
    "https://allfamous.org/people/lovely-anna-19990707.html",
    "https://allfamous.org/people/mo-collins-19650707.html",
    "https://allfamous.org/people/mohamed-alraja-20010707.html",
    "https://allfamous.org/people/malik-henry-19980707.html",
    "https://allfamous.org/people/joe-spano-19460707.html",
    "https://allfamous.org/people/venus-raj-19880707.html",
    "https://allfamous.org/people/cort-carpenter-19860707.html",
    "https://allfamous.org/people/olivia-zapo-19900707.html",
    "https://allfamous.org/people/chris-vale-19990707.html",
    "https://allfamous.org/people/tiffany-chang-19940707.html",
    "https://allfamous.org/people/michaela-hallmark-19940707.html",
    "https://allfamous.org/people/kyle-adams-19830707.html",
    "https://allfamous.org/people/jeffrey-marsh-19770707.html",
    "https://allfamous.org/people/chad-johnson-19770707.html",
    "https://allfamous.org/people/lil-china-19980707.html",
    "https://allfamous.org/people/vilde-zeiner-19990707.html",
    "https://allfamous.org/people/emyri-crutchfield-20000707.html",
    "https://allfamous.org/people/phoenix-kaysen-yates-tvnm.html",
    "https://allfamous.org/people/famousangel7-20030707.html",
    "https://allfamous.org/people/georgia-nott-19940707.html",
    "https://allfamous.org/people/jesse-cheist-20010707.html",
    "https://allfamous.org/people/hamish-linklater-19760707.html",
    "https://allfamous.org/people/gabriel-prince-kgdq.html",
    "https://allfamous.org/people/james-caldwell-20050707.html",
    "https://allfamous.org/people/sarah-poncio-19970707.html",
    "https://allfamous.org/people/troy-garity-19730707.html",
    "https://allfamous.org/people/misia-19780707.html",
    "https://allfamous.org/people/doc-severinsen-19270707.html",
    "https://allfamous.org/people/chaoko-19970707.html",
    "https://allfamous.org/people/tmatt-20020707.html",
    "https://allfamous.org/people/kevin-a-ford-19600707.html",
    "https://allfamous.org/people/tia-wood-fyzc.html",
    "https://allfamous.org/people/jedet-sanchez-19920707.html",
    "https://allfamous.org/people/bo-develius-19940707.html",
    
    "https://allfamous.org/people/jaden-smith-19980708.html",
    "https://allfamous.org/people/penelope-disick-20120708.html",
    "https://allfamous.org/people/riele-downs-20010708.html",
    "https://allfamous.org/people/sienna-casas-20150708.html",
    "https://allfamous.org/people/maya-hawke-19980708.html",
    "https://allfamous.org/people/lucas-coly-19970708.html",
    "https://allfamous.org/people/foxkirsten-19980708.html",
    "https://allfamous.org/people/sophia-bush-19820708.html",
    "https://allfamous.org/people/howtobasic-19790708.html",
    "https://allfamous.org/people/milo-ventimiglia-19770708.html",
    "https://allfamous.org/people/nick-antonyan-19940708.html",
    "https://allfamous.org/people/kevin-bacon-19580708.html",
    "https://allfamous.org/people/angelina-eslora-20000708.html",
    "https://allfamous.org/people/caden-ketchman-20050708.html",
    "https://allfamous.org/people/virgil-van-dijk-19910708.html",
    "https://allfamous.org/people/isaac-nakash-19960708.html",
    "https://allfamous.org/people/ashly-perez-19890708.html",
    "https://allfamous.org/people/olivia-grace-20010708.html",
    "https://allfamous.org/people/son-heung-min-19920708.html",
    "https://allfamous.org/people/tre-carter-19930708.html",
    "https://allfamous.org/people/bethany-janson-lgfq.html",
    "https://allfamous.org/people/aimee-kelly-19930708.html",
    "https://allfamous.org/people/toby-keith-19610708.html",
    "https://allfamous.org/people/makayla-phillips-20020708.html",
    "https://allfamous.org/people/isabella-sermon-20060708.html",
    "https://allfamous.org/people/lexy-chaplin-19990708.html",
    "https://allfamous.org/people/jill-donnelly-19700708.html",
    "https://allfamous.org/people/julia-epstein-20040708.html",
    "https://allfamous.org/people/michael-weatherly-19680708.html",
    "https://allfamous.org/people/anjelica-huston-19510708.html",
    "https://allfamous.org/people/tish-simmonds-19960708.html",
    "https://allfamous.org/people/the0nlynevaeh-20030708.html",
    "https://allfamous.org/people/lance-gross-19810708.html",
    "https://allfamous.org/people/derek-chadwick-19950708.html",
    "https://allfamous.org/people/beck-19700708.html",
    "https://allfamous.org/people/gabrielle-green-19940708.html",
    "https://allfamous.org/people/lucci-vee-19880708.html",
    "https://allfamous.org/people/sky-ferreira-19920708.html",
    "https://allfamous.org/people/t-steezy-20000708.html",
    "https://allfamous.org/people/liz-katz-19880708.html",
    "https://allfamous.org/people/dara-20020708.html",
    "https://allfamous.org/people/lillian-samms-19980708.html",
    "https://allfamous.org/people/aisha-rae-ordonia-20020708.html",
    "https://allfamous.org/people/sebastian-maniscalco-19730708.html",
    "https://allfamous.org/people/rahaf-al-enzi-20040708.html",
    "https://allfamous.org/people/caitlyn-isabella-todd-20020708.html",
    "https://allfamous.org/people/wolfgang-puck-19490708.html",
    "https://allfamous.org/people/stimpypvp-19960708.html",
    
    "https://allfamous.org/people/fero-19990708.html",
    "https://allfamous.org/people/robert-knepper-19590708.html",
    "https://allfamous.org/people/jordan-burroughs-19880708.html",
    "https://allfamous.org/people/thehollycopter-19880708.html",
    "https://allfamous.org/people/zombie-juice-19900708.html",
    "https://allfamous.org/people/primetimepokemon-19880708.html",
    "https://allfamous.org/people/carl-riemer-19970708.html",
    "https://allfamous.org/people/annika-boron-19980708.html",
    "https://allfamous.org/people/mitchell-conran-19970708.html",
    "https://allfamous.org/people/jamie-blackley-19910708.html",
    "https://allfamous.org/people/clever-19840708.html",
    "https://allfamous.org/people/iampopcorn-19940708.html",
    "https://allfamous.org/people/loresa-hamitaj-20050708.html",
    "https://allfamous.org/people/robbie-keane-19800708.html",
    "https://allfamous.org/people/riverevanz-20060708.html",
    "https://allfamous.org/people/taylor-rochelle-19930708.html",
    "https://allfamous.org/people/mark-ellis-19800708.html",
    "https://allfamous.org/people/klayton-griffin-20010708.html",
    "https://allfamous.org/people/jamal-woolard-19750708.html",
    "https://allfamous.org/people/gosu-19940708.html",
    "https://allfamous.org/people/hadil-amleh-20050708.html",
    "https://allfamous.org/people/jake-mcdorman-19860708.html",
    "https://allfamous.org/people/paymoneywubby-19950708.html",
    "https://allfamous.org/people/david-corenswet-19930708.html",
    "https://allfamous.org/people/evangeline-fisk-20040708.html",
    "https://allfamous.org/people/breanne-ezarik-19870708.html",
    "https://allfamous.org/people/george-fisher-19690708.html",
    "https://allfamous.org/people/maya-berovic-19870708.html",
    "https://allfamous.org/people/piko-19850708.html",
    "https://allfamous.org/people/alexus-armijo-20020708.html",
    "https://allfamous.org/people/gordana-trzan-19740708.html",
    "https://allfamous.org/people/pendleton-ward-19820708.html",
    "https://allfamous.org/people/emily-nelson-19980708.html",
    "https://allfamous.org/people/maddie-rae-20050708.html",
    "https://allfamous.org/people/lil-knock-19970708.html",
    "https://allfamous.org/people/joanna-franco-19920708.html",
    "https://allfamous.org/people/david-crowder-19740708.html",
    "https://allfamous.org/people/jase-prater-20030708.html",
    "https://allfamous.org/people/soleil-ignacio-19840708.html",
    "https://allfamous.org/people/jeffrey-tambor-19440708.html",
    "https://allfamous.org/people/kaitlin-kal-lee-19930708.html",
    "https://allfamous.org/people/billy-crudup-19680708.html",
    "https://allfamous.org/people/josh-harrison-19870708.html",
    "https://allfamous.org/people/caitlin-covington-19900708.html",
    "https://allfamous.org/people/adam-moran-19850708.html",
    "https://allfamous.org/people/martyna-balsam-20000708.html",
    "https://allfamous.org/people/belinda-selene-19890708.html",
    "https://allfamous.org/people/jamia-nestor-19820708.html",
    
    "https://allfamous.org/people/rocky-carroll-19630708.html",
    "https://allfamous.org/people/raimi-reyes-20000708.html",
    "https://allfamous.org/people/regan-perusse-19940708.html",
    "https://allfamous.org/people/major-dodson-20030708.html",
    "https://allfamous.org/people/aujah-monae-jennings-20010708.html",
    "https://allfamous.org/people/kevin-trapp-19900708.html",
    "https://allfamous.org/people/kathleen-robertson-19730708.html",
    "https://allfamous.org/people/benjamin-stockham-20000708.html",
    "https://allfamous.org/people/grettell-valdez-19760708.html",
    "https://allfamous.org/people/jonathan-smith-19980708.html",
    "https://allfamous.org/people/vic-beasley-19920708.html",
    "https://allfamous.org/people/sourav-ganguly-19720708.html",
    "https://allfamous.org/people/monty-don-19550708.html",
    "https://allfamous.org/people/euc-benitez-20010708.html",
    "https://allfamous.org/people/alex-fletcher-19760708.html",
    "https://allfamous.org/people/xander-mobus-19920708.html",
    "https://allfamous.org/people/pauline-quirke-19590708.html",
    "https://allfamous.org/people/alice-levine-19860708.html",
    "https://allfamous.org/people/todd-martin-19700708.html",
    "https://allfamous.org/people/desmond-mabry-s4ty.html",
    "https://allfamous.org/people/brooks-resnikoff-20110708.html",
    "https://allfamous.org/people/ariel-helwani-19820708.html",
    "https://allfamous.org/people/marlon-humphrey-19960708.html",
    "https://allfamous.org/people/yayo-gutierrez-19880708.html",
    "https://allfamous.org/people/jack-lambert-19520708.html",
    "https://allfamous.org/people/neetu-singh-19580708.html",
    "https://allfamous.org/people/valarie-pettiford-19600708.html",
    "https://allfamous.org/people/brynn-cameron-19860708.html",
    "https://allfamous.org/people/mohena-singh-19880708.html",
    "https://allfamous.org/people/butt-head-obzor-19900708.html",
    "https://allfamous.org/people/sheangel-20000708.html",
    "https://allfamous.org/people/clementine-desseaux-19880708.html",
    "https://allfamous.org/people/anders-gran-19920708.html",
    "https://allfamous.org/people/ibemaine-19940708.html",
    "https://allfamous.org/people/amara-19750708.html",
    "https://allfamous.org/people/dominik-sadoch-19970708.html",
    "https://allfamous.org/people/everlyn-liu-19910708.html",
    "https://allfamous.org/people/tasha-brooke-malek-19870708.html",
    "https://allfamous.org/people/faze-pryzee-19920708.html",
    "https://allfamous.org/people/zoe-klopfer-19940708.html",
    "https://allfamous.org/people/vlada-roslyakova-19870708.html",
    "https://allfamous.org/people/shorena-begashvili-19820708.html",
    "https://allfamous.org/people/sierra-austin-19960708.html",
    "https://allfamous.org/people/josette-boomsma-20010708.html",
    "https://allfamous.org/people/connor-degruise-20020708.html",
    "https://allfamous.org/people/linda-de-mol-19640708.html",
    "https://allfamous.org/people/soyeddieschobert6-19940708.html",
    "https://allfamous.org/people/spyder-harrison-cgmh.html",
    
    "https://allfamous.org/people/gordon-ryan-19950708.html",
    "https://allfamous.org/people/tami-erin-19740708.html",
    "https://allfamous.org/people/neta-avianty-putri-19960708.html",
    "https://allfamous.org/people/mimella-20010708.html",
    "https://allfamous.org/people/andrea-cuadros-salek-19940708.html",
    "https://allfamous.org/people/amy-oneill-19710708.html",
    "https://allfamous.org/people/matthew-wright-19650708.html",
    "https://allfamous.org/people/david-kennedy-19760708.html",
    "https://allfamous.org/people/callum-harrison-19980708.html",
    "https://allfamous.org/people/marianne-williamson-19520708.html",
    "https://allfamous.org/people/cannon-bosarge-20040708.html",
    "https://allfamous.org/people/maralyn-snow-19930708.html",
    "https://allfamous.org/people/alexis-dziena-19840708.html",
    "https://allfamous.org/people/mica-burton-19940708.html",
    "https://allfamous.org/people/josh-robinson-20010708.html",
    "https://allfamous.org/people/devon-bagby-19880708.html",
    "https://allfamous.org/people/angela-lee-19960708.html",
    "https://allfamous.org/people/lineysha-sparx-19880708.html",
    "https://allfamous.org/people/zeynep-bastik-19930708.html",
    "https://allfamous.org/people/joey-moe-19850708.html",
    "https://allfamous.org/people/ilonka-obilinovic-19920708.html",
    "https://allfamous.org/people/corey-parker-19650708.html",
    "https://allfamous.org/people/lubna-gurion-19920708.html",
    "https://allfamous.org/people/joanna-snedden-19970708.html",
    "https://allfamous.org/people/cullen-moss-19750708.html",
    "https://allfamous.org/people/sude-alkis-19970708.html",
    "https://allfamous.org/people/nuria-goma-19790708.html",
    "https://allfamous.org/people/tabatha-bundesen-19850708.html",
    "https://allfamous.org/people/edson-gonzalez-19980708.html",
    "https://allfamous.org/people/regan-aliyah-19990708.html",
    "https://allfamous.org/people/samuel-dillard-20170708.html",
    "https://allfamous.org/people/park-kyung-19920708.html",
    "https://allfamous.org/people/noora-noor-19790708.html",
    "https://allfamous.org/people/darcy-lapier-19650708.html",
    "https://allfamous.org/people/brittany-force-19870708.html",
    "https://allfamous.org/people/kenny-allen-19940708.html",
    "https://allfamous.org/people/ronnie-ficarro-19840708.html",
    "https://allfamous.org/people/raffi-19480708.html",
    "https://allfamous.org/people/delanie-dischert-19930708.html",
    "https://allfamous.org/people/gemma-tsakonas-19930708.html",
    "https://allfamous.org/people/kenza-farah-19860708.html",
    "https://allfamous.org/people/hermann-nicoli-19820708.html",
    "https://allfamous.org/people/cody-roeder-19900708.html",
    "https://allfamous.org/people/kazutaka-kodaka-19780708.html",
    "https://allfamous.org/people/schuyler-fisk-19820708.html",
    "https://allfamous.org/people/christopher-g-moore-19520708.html",
    "https://allfamous.org/people/gabriella-moretti-19970708.html",
    "https://allfamous.org/people/tamy-nsue-19930708.html",
    
    "https://allfamous.org/people/miguel-cristovinho-19880708.html",
    "https://allfamous.org/people/daniella-sarahyba-19840708.html",
    "https://allfamous.org/people/tim-belusko-19880708.html",
    "https://allfamous.org/people/joan-osborne-19620708.html",
    "https://allfamous.org/people/eve-knorpp-20090708.html",
    "https://allfamous.org/people/amer-kamra-19880708.html",
    "https://allfamous.org/people/matthew-fraser-19910708.html",
    "https://allfamous.org/people/isabelle-brown-20030708.html",
    "https://allfamous.org/people/sarah-moore-19690708.html",
    "https://allfamous.org/people/httpalexisrae-19980708.html",
    "https://allfamous.org/people/adelina-fominykh-19970708.html",
    "https://allfamous.org/people/steve-lawrence-19350708.html",
    "https://allfamous.org/people/jordan-adams-19940708.html",
    "https://allfamous.org/people/haraca-kiko-7b2o.html",
    "https://allfamous.org/people/ericjxhnsxn-20000708.html",
    "https://allfamous.org/people/shalane-flanagan-19810708.html",
    "https://allfamous.org/people/zach-johnson-19870708.html",
    "https://allfamous.org/people/devaughn-nixon-19830708.html",
    "https://allfamous.org/people/james-liu-19940708.html",
    "https://allfamous.org/people/subaruwrxfan-19900708.html",
    "https://allfamous.org/people/ashlyn-pearce-19940708.html",
    "https://allfamous.org/people/andrew-copp-19940708.html",
    "https://allfamous.org/people/sally-lindsay-19730708.html",
    "https://allfamous.org/people/sarah-kennedy-19500708.html",
    "https://allfamous.org/people/madison-faith-19980708.html",
    "https://allfamous.org/people/gil-le-19910708.html",
    "https://allfamous.org/people/jasleen-royal-19910708.html",
    "https://allfamous.org/people/jesssoweird-19970708.html",
    "https://allfamous.org/people/deyonte-hunter-19940708.html",
    "https://allfamous.org/people/acidglow-19810708.html",
    "https://allfamous.org/people/rachael-finch-19880708.html",
    "https://allfamous.org/people/jaime-garcia-19860708.html",
    "https://allfamous.org/people/alexandra-villanueva-instagram-star.html",
    "https://allfamous.org/people/josh-shada-19910708.html",
    "https://allfamous.org/people/ryan-buell-19820708.html",
    "https://allfamous.org/people/noor-kartini-19690708.html",
    "https://allfamous.org/people/glenn-hetrick-19720708.html",
    "https://allfamous.org/people/manizha-19910708.html",
    "https://allfamous.org/people/john-dleo-19950708.html",
    "https://allfamous.org/people/nicholas-hanna-20020708.html",
    "https://allfamous.org/people/brandon-sheeley-19960708.html",
    "https://allfamous.org/people/michael-harris-19880708.html",
    "https://allfamous.org/people/mike-nawrocki-19660708.html",
    "https://allfamous.org/people/camila-moreno-19850708.html",
    "https://allfamous.org/people/vadim-tkachenko-19980708.html",
    "https://allfamous.org/people/katherine-bond-19980708.html",
    "https://allfamous.org/people/remy-tidy-20010708.html",
    "https://allfamous.org/people/sandi-morris-19920708.html",
    
    "https://allfamous.org/people/tom-hanks-19560709.html",
    "https://allfamous.org/people/jenn-mcallister-19960709.html",
    "https://allfamous.org/people/marcel-ruiz-20030709.html",
    "https://allfamous.org/people/ethangamertv-20060709.html",
    "https://allfamous.org/people/who-nia-20030709.html",
    "https://allfamous.org/people/matt-king-19920709.html",
    "https://allfamous.org/people/mxmtoon-20000709.html",
    "https://allfamous.org/people/stephen-tries-19950709.html",
    "https://allfamous.org/people/lee-hinchcliffe-19990709.html",
    "https://allfamous.org/people/russell-franke-20110709.html",
    "https://allfamous.org/people/derek-kildall-19980709.html",
    "https://allfamous.org/people/mitchel-musso-19910709.html",
    "https://allfamous.org/people/pamela-reif-19960709.html",
    "https://allfamous.org/people/kandee-johnson-19780709.html",
    "https://allfamous.org/people/traves-20000709.html",
    "https://allfamous.org/people/merrick-beaumont-19990709.html",
    "https://allfamous.org/people/maisie-smith-20010709.html",
    "https://allfamous.org/people/jojo-gomez-19930709.html",
    "https://allfamous.org/people/courtney-love-19640709.html",
    "https://allfamous.org/people/gigi-borgese-20040709.html",
    "https://allfamous.org/people/rebecca-sugar-19870709.html",
    "https://allfamous.org/people/robert-capron-19980709.html",
    "https://allfamous.org/people/douglas-booth-19920709.html",
    "https://allfamous.org/people/nicki-gruttadauria-19960709.html",
    "https://allfamous.org/people/aryia-19960709.html",
    "https://allfamous.org/people/georgie-henley-19950709.html",
    "https://allfamous.org/people/camilla-thurlow-19890709.html",
    "https://allfamous.org/people/oj-simpson-19470709.html",
    "https://allfamous.org/people/fred-savage-19760709.html",
    "https://allfamous.org/people/jack-white-19750709.html",
    "https://allfamous.org/people/keanni-marques-mendez-20040709.html",
    "https://allfamous.org/people/chris-wilson-20010709.html",
    "https://allfamous.org/people/cherry-crush-19900709.html",
    "https://allfamous.org/people/alex-costa-19880709.html",
    "https://allfamous.org/people/lola-lourdes-20020709.html",
    "https://allfamous.org/people/nicholas-colletti-19940709.html",
    "https://allfamous.org/people/donnalyn-bartolome-19940709.html",
    "https://allfamous.org/people/christina-moussa-19830709.html",
    "https://allfamous.org/people/thomas-brag-19930709.html",
    "https://allfamous.org/people/josh-devine-19910709.html",
    "https://allfamous.org/people/kevin-nash-19590709.html",
    "https://allfamous.org/people/luqman-ahmed-csyp.html",
    "https://allfamous.org/people/jordan-belfort-19620709.html",
    "https://allfamous.org/people/ashlyn-gross-20060709.html",
    "https://allfamous.org/people/seth-fedelin-20020709.html",
    "https://allfamous.org/people/savannah-clarke-20030709.html",
    "https://allfamous.org/people/alex-mapeli-19980709.html",
    "https://allfamous.org/people/kevin-oleary-19540709.html",
    
    "https://allfamous.org/people/charlie-pimentel-20020709.html",
    "https://allfamous.org/people/kiely-williams-19860709.html",
    "https://allfamous.org/people/megan-irwin-19940709.html",
    "https://allfamous.org/people/shanice-williams-19960709.html",
    "https://allfamous.org/people/mo-mustafa-20040709.html",
    "https://allfamous.org/people/miriam-isa-19830709.html",
    "https://allfamous.org/people/john-stephen-grice-19950709.html",
    "https://allfamous.org/people/yusuf-panseri-20020709.html",
    "https://allfamous.org/people/darian-barnes-19890709.html",
    "https://allfamous.org/people/hannah-shaw-19870709.html",
    "https://allfamous.org/people/ashton-pavlow-20020709.html",
    "https://allfamous.org/people/meg-delacy-19960709.html",
    "https://allfamous.org/people/arbacn-20020709.html",
    "https://allfamous.org/people/jessetc-19990709.html",
    "https://allfamous.org/people/shelton-benjamin-19750709.html",
    "https://allfamous.org/people/jason-pagaduan-19940709.html",
    "https://allfamous.org/people/amy-macedo-19940709.html",
    "https://allfamous.org/people/angelicat-youtube-star.html",
    "https://allfamous.org/people/ashley-young-19850709.html",
    "https://allfamous.org/people/hungry-lips-19940709.html",
    "https://allfamous.org/people/jamie-thomas-king-19810709.html",
    "https://allfamous.org/people/rebecca-wilhoit-20020709.html",
    "https://allfamous.org/people/nelly-shepherd-20140709.html",
    "https://allfamous.org/people/patrick-graziosi-19920709.html",
    "https://allfamous.org/people/jacob-hoggard-19840709.html",
    "https://allfamous.org/people/asmrrequests-19900709.html",
    "https://allfamous.org/people/militza-yovanka-19910709.html",
    "https://allfamous.org/people/riley-mae-lewis-tiktok-star.html",
    "https://allfamous.org/people/abby-berner-20010709.html",
    "https://allfamous.org/people/suggi-19980709.html",
    "https://allfamous.org/people/riley-mccusker-20010709.html",
    "https://allfamous.org/people/claire-corlett-19990709.html",
    "https://allfamous.org/people/pamela-adlon-19660709.html",
    "https://allfamous.org/people/yvette-monreal-19920709.html",
    "https://allfamous.org/people/amanda-knox-19870709.html",
    "https://allfamous.org/people/andrea-lunsford-19770709.html",
    "https://allfamous.org/people/richard-roundtree-19420709.html",
    "https://allfamous.org/people/juniortv-19930709.html",
    "https://allfamous.org/people/marc-mero-19630709.html",
    "https://allfamous.org/people/alper-erozer-20040709.html",
    "https://allfamous.org/people/cristiane-santos-19850709.html",
    "https://allfamous.org/people/gaurav-taneja-19860709.html",
    "https://allfamous.org/people/hedishel-19960709.html",
    "https://allfamous.org/people/bria-alana-20020709.html",
    "https://allfamous.org/people/neno-calvin-19950709.html",
    "https://allfamous.org/people/brandon-uranowitz-19860709.html",
    "https://allfamous.org/people/perxitaa-19910709.html",
    "https://allfamous.org/people/tayber-20040709.html",
    
    "https://allfamous.org/people/bobbie-marche-youtube-star.html",
    "https://allfamous.org/people/marvin-jones-iii-19780709.html",
    "https://allfamous.org/people/alexs-corner-19980709.html",
    "https://allfamous.org/people/jada-stephens-20070709.html",
    "https://allfamous.org/people/mandy-lee-19920709.html",
    "https://allfamous.org/people/rafael-da-silva-19900709.html",
    "https://allfamous.org/people/ladislav-kovacs-19910709.html",
    "https://allfamous.org/people/david-hockney-19370709.html",
    "https://allfamous.org/people/trevm-20020709.html",
    "https://allfamous.org/people/xavier-ivan-19940709.html",
    "https://allfamous.org/people/lindsey-graham-19550709.html",
    "https://allfamous.org/people/nigel-lythgoe-19490709.html",
    "https://allfamous.org/people/richard-wilson-19360709.html",
    "https://allfamous.org/people/kelly-mcgillis-19570709.html",
    "https://allfamous.org/people/toby-kebbell-19820709.html",
    "https://allfamous.org/people/nav-bhatia-19510709.html",
    "https://allfamous.org/people/sundance-head-19790709.html",
    "https://allfamous.org/people/jesse-watters-19780709.html",
    "https://allfamous.org/people/bailey-nelsen-19990709.html",
    "https://allfamous.org/people/akiane-kramarik-19940709.html",
    "https://allfamous.org/people/feng-xiaoxiao-20070709.html",
    "https://allfamous.org/people/jesus-navarro-19860709.html",
    "https://allfamous.org/people/dyl-jordan-19960709.html",
    "https://allfamous.org/people/courtney-parker-19850709.html",
    "https://allfamous.org/people/alexandra-walton-19990709.html",
    "https://allfamous.org/people/celine-chia-20020709.html",
    "https://allfamous.org/people/jimmy-smits-19550709.html",
    "https://allfamous.org/people/chris-cooper-19510709.html",
    "https://allfamous.org/people/jessica-moore-19820709.html",
    "https://allfamous.org/people/genevieve-morton-19860709.html",
    "https://allfamous.org/people/bingham-bellamy-20110709.html",
    "https://allfamous.org/people/k-todd-freeman-19650709.html",
    "https://allfamous.org/people/debrina-francis-19910709.html",
    "https://allfamous.org/people/michael-talamentez-19930709.html",
    "https://allfamous.org/people/angelica-celaya-19820709.html",
    "https://allfamous.org/people/kimberly-reyes-19880709.html",
    "https://allfamous.org/people/sg-lewis-19940709.html",
    "https://allfamous.org/people/boffe-gp-19950709.html",
    "https://allfamous.org/people/deandre-yedlin-19930709.html",
    "https://allfamous.org/people/griffin-fudge-20160709.html",
    "https://allfamous.org/people/paul-mcbeth-19900709.html",
    "https://allfamous.org/people/jeremy-pope-19920709.html",
    "https://allfamous.org/people/honeygoldxx-19930709.html",
    "https://allfamous.org/people/allj-19930709.html",
    "https://allfamous.org/people/carleigh-bettiol-19860709.html",
    "https://allfamous.org/people/scott-yancey-19690709.html",
    "https://allfamous.org/people/speedsilver-20020709.html",
    "https://allfamous.org/people/skitz-kraven-19940709.html",
    
    "https://allfamous.org/people/scarlet-santiago-20010709.html",
    "https://allfamous.org/people/emily-west-19810709.html",
    "https://allfamous.org/people/kelly-mantle-19760709.html",
    "https://allfamous.org/people/dama-g-19910709.html",
    "https://allfamous.org/people/kelly-svirakova-19930709.html",
    "https://allfamous.org/people/jake-vargas-19920709.html",
    "https://allfamous.org/people/ryan-secret-20110709.html",
    "https://allfamous.org/people/gracie-friel-p8jz.html",
    "https://allfamous.org/people/anca-broasca-19970709.html",
    "https://allfamous.org/people/tbot-19980709.html",
    "https://allfamous.org/people/scott-grimes-19710709.html",
    "https://allfamous.org/people/tennelle-flowers-19940709.html",
    "https://allfamous.org/people/ruairi-oconnor-19910709.html",
    "https://allfamous.org/people/amulya-rattan-youtube-star.html",
    "https://allfamous.org/people/ronni-espinosa-19980709.html",
    "https://allfamous.org/people/emma-studtmann-20040709.html",
    "https://allfamous.org/people/jane-kim-19770709.html",
    "https://allfamous.org/people/riley-taylor-19990709.html",
    "https://allfamous.org/people/dominic-gibbons-20030709.html",
    "https://allfamous.org/people/luh-half-19960709.html",
    "https://allfamous.org/people/marc-almond-19570709.html",
    "https://allfamous.org/people/tim-hofman-19880709.html",
    "https://allfamous.org/people/ashley-hesseltine-19830709.html",
    "https://allfamous.org/people/flatsound-19900709.html",
    "https://allfamous.org/people/nicole-paige-brooks-19830709.html",
    "https://allfamous.org/people/jenifer-rosas-19980709.html",
    "https://allfamous.org/people/victor-pool-19920709.html",
    "https://allfamous.org/people/giuliana-mafra-20000709.html",
    "https://allfamous.org/people/julius-salcedo-20010709.html",
    "https://allfamous.org/people/mike-mozart-19640709.html",
    "https://allfamous.org/people/natascha-aisawan-20050709.html",
    "https://allfamous.org/people/mildred-estrada-20040709.html",
    "https://allfamous.org/people/reed-kessler-19940709.html",
    "https://allfamous.org/people/landyn-hutchinson-19770709.html",
    "https://allfamous.org/people/paige-sangster-19970709.html",
    "https://allfamous.org/people/blake-samson-19850709.html",
    "https://allfamous.org/people/liam-carroll-20020709.html",
    "https://allfamous.org/people/isaac-brock-19750709.html",
    "https://allfamous.org/people/mick-gordon-19850709.html",
    "https://allfamous.org/people/hanna-r-hall-19840709.html",
    "https://allfamous.org/people/scott-kress-19990709.html",
    "https://allfamous.org/people/adriano-panatta-19500709.html",
    "https://allfamous.org/people/dean-koontz-19450709.html",
    "https://allfamous.org/people/gage-griffin-19970709.html",
    "https://allfamous.org/people/carina-battrick-20120709.html",
    "https://allfamous.org/people/raymond-cruz-19610709.html",
    "https://allfamous.org/people/lydia-lucy-19930709.html",
    "https://allfamous.org/people/aly-taylor-19870709.html",
    
    "https://allfamous.org/people/dylan-taylor-19810709.html",
    "https://allfamous.org/people/anjelika-lara-19980709.html",
    "https://allfamous.org/people/funhouse-jai-jai-19860709.html",
    "https://allfamous.org/people/jack-zuckowsky-19980709.html",
    "https://allfamous.org/people/jon-schmidt-19660709.html",
    "https://allfamous.org/people/james-kerr-19590709.html",
    "https://allfamous.org/people/sarah-quinn-19960709.html",
    "https://allfamous.org/people/annuhbananuh-19990709.html",
    "https://allfamous.org/people/john-tesh-19520709.html",
    "https://allfamous.org/people/haydn-schneider-19870709.html",
    "https://allfamous.org/people/katrine-lee-19980709.html",
    "https://allfamous.org/people/eduardo-santamarina-19680709.html",
    "https://allfamous.org/people/enrique-murciano-19730709.html",
    "https://allfamous.org/people/basetrade-sa13.html",
    "https://allfamous.org/people/fynest-china-19980709.html",
    "https://allfamous.org/people/melly-bradley-19910709.html",
    "https://allfamous.org/people/philip-martin-brown-19560709.html",
    "https://allfamous.org/people/slippyjtoad69-20000709.html",
    "https://allfamous.org/people/mirka-daniela-gallegos-20040709.html",
    "https://allfamous.org/people/riverknight-everett-19970709.html",
    "https://allfamous.org/people/jason-schiffer-3hny.html",
    "https://allfamous.org/people/tiny-satan-19990709.html",
    "https://allfamous.org/people/gianluca-vialli-19640709.html",
    "https://allfamous.org/people/martin-tungevaag-19930709.html",
    "https://allfamous.org/people/nasir-kharma-9rbg.html",
    "https://allfamous.org/people/linda-park-19780709.html",
    "https://allfamous.org/people/jordan-mickey-19940709.html",
    "https://allfamous.org/people/xiomara-herrera-19980709.html",
    "https://allfamous.org/people/ashlee-evans-smith-19870709.html",
];

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
