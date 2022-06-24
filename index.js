 
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
   "https://allfamous.org/people/berth-oh-19910720.html",
    "https://allfamous.org/people/solenn-heussaff-19850720.html",
    "https://allfamous.org/people/corey-bonalewicz-19880720.html",
    "https://allfamous.org/people/colton-glenn-20010720.html",
    "https://allfamous.org/people/audrey-goh-19910720.html",
    "https://allfamous.org/people/osric-chau-19860720.html",
    "https://allfamous.org/people/wicker10-19980720.html",
    "https://allfamous.org/people/john-francis-daley-19850720.html",
    "https://allfamous.org/people/anthony-bertoncin-19990720.html",
    "https://allfamous.org/people/maia-shibutani-19940720.html",
    "https://allfamous.org/people/franny-19960720.html",
    "https://allfamous.org/people/uptown-cosplay-19930720.html",
    "https://allfamous.org/people/simon-rex-19740720.html",
    "https://allfamous.org/people/dwayne-wayans-19560720.html",
    "https://allfamous.org/people/marnie-wall-20020720.html",
    "https://allfamous.org/people/anthonin-19970720.html",
    "https://allfamous.org/people/annie-jaffrey-19890720.html",
    "https://allfamous.org/people/sydney-valarose-20050720.html",
    "https://allfamous.org/people/gamer55561-19930720.html",
    "https://allfamous.org/people/ellie-downie-19990720.html",
    "https://allfamous.org/people/maislie-20060720.html",
    "https://allfamous.org/people/mm-lifemeetsfamily-20060720.html",
    "https://allfamous.org/people/logan-guleff-20020720.html",
    "https://allfamous.org/people/kortni-gilson-19950720.html",
    "https://allfamous.org/people/chance-combs-20060720.html",
    "https://allfamous.org/people/pavel-datsyuk-19780720.html",
    "https://allfamous.org/people/rory-jennings-19830720.html",
    "https://allfamous.org/people/jesse-van-wieren-20020720.html",
    "https://allfamous.org/people/kara-cannella-19980720.html",
    "https://allfamous.org/people/brooke-candy-19890720.html",
    "https://allfamous.org/people/zoenotzoey-19960720.html",
    "https://allfamous.org/people/mr-polska-19890720.html",
    "https://allfamous.org/people/lexi-kaplan-19930720.html",
    "https://allfamous.org/people/ariana-dos-santos-20100720.html",
    "https://allfamous.org/people/dounya-zayer-19990720.html",
    "https://allfamous.org/people/keziah-kaur-20020720.html",
    "https://allfamous.org/people/chris-rudnik-19970720.html",
    "https://allfamous.org/people/joe-hills-19860720.html",
    "https://allfamous.org/people/carlos-alazraqui-19620720.html",
    "https://allfamous.org/people/nina-warink-19960720.html",
    "https://allfamous.org/people/shaquill-griffin-19950720.html",
    "https://allfamous.org/people/malia-white-19900720.html",
    
    "https://allfamous.org/people/ethan-lyke-20030720.html",
    "https://allfamous.org/people/valentin-brunn-19940720.html",
    "https://allfamous.org/people/xiaomanyc-19900720.html",
    "https://allfamous.org/people/ken-todd-19450720.html",
    "https://allfamous.org/people/petermc-20010720.html",
    "https://allfamous.org/people/aimee-mullins-19760720.html",
    "https://allfamous.org/people/james-mackay-19840720.html",
    "https://allfamous.org/people/brian-hector-20010720.html",
    "https://allfamous.org/people/sage-wilson-up5z.html",
    "https://allfamous.org/people/michael-park-19680720.html",
    "https://allfamous.org/people/kim-carnes-19450720.html",
    "https://allfamous.org/people/ray-sipe-19500720.html",
    "https://allfamous.org/people/katelyn-runck-19910720.html",
    "https://allfamous.org/people/allie-kaplan-19930720.html",
    "https://allfamous.org/people/unpopular-edits-20050720.html",
    "https://allfamous.org/people/isaiah-washington-19980720.html",
    "https://allfamous.org/people/amado-vargas-20000720.html",
    "https://allfamous.org/people/annalia-carole-20020720.html",
    "https://allfamous.org/people/dante-sanchez-20050720.html",
    "https://allfamous.org/people/christian-haynes-19970720.html",
    "https://allfamous.org/people/dean-winters-19640720.html",
    "https://allfamous.org/people/jackson-heywood-19880720.html",
    "https://allfamous.org/people/laura-byrne-19880720.html",
    "https://allfamous.org/people/lucas-digne-19930720.html",
    "https://allfamous.org/people/chloe-fineman-19880720.html",
    "https://allfamous.org/people/will-pyun-eyyb.html",
    "https://allfamous.org/people/law-roach-19780720.html",
    "https://allfamous.org/people/andrew-shaw-19910720.html",
    "https://allfamous.org/people/piso4-esports-player.html",
    "https://allfamous.org/people/chirag-rashmikant-patel-19840720.html",
    "https://allfamous.org/people/nick-bingo-20010720.html",
    "https://allfamous.org/people/miranda-ibanez-19940720.html",
    "https://allfamous.org/people/isabella-bruno-20020720.html",
    "https://allfamous.org/people/chanelle-mccleary-19920720.html",
    "https://allfamous.org/people/niedosyt-19950720.html",
    "https://allfamous.org/people/colleen-ann-fitzpatrick-19720720.html",
    "https://allfamous.org/people/jaylin-rolon-20020720.html",
    "https://allfamous.org/people/martin-roberts-19630720.html",
    "https://allfamous.org/people/chasley-smith-20010720.html",
    "https://allfamous.org/people/william-leon-19990720.html",
    "https://allfamous.org/people/misoa-andris-19950720.html",
    "https://allfamous.org/people/marinela-bezer-19970720.html",
    "https://allfamous.org/people/emongg-19900720.html",
    "https://allfamous.org/people/evan-lyke-20030720.html",
    "https://allfamous.org/people/vincent-mottola-19990720.html",
    "https://allfamous.org/people/katie-sky-19890720.html",
    "https://allfamous.org/people/sedona-christina-19940720.html",
    "https://allfamous.org/people/joon-park-19690720.html",
    
    "https://allfamous.org/people/amira-adeeb-7vp3.html",
    "https://allfamous.org/people/muse-watson-19480720.html",
    "https://allfamous.org/people/alyssia-sheikh-19890720.html",
    "https://allfamous.org/people/katalina-oficial-19980720.html",
    "https://allfamous.org/people/john-davis-19540720.html",
    "https://allfamous.org/people/fatma-daghbouj-20020720.html",
    "https://allfamous.org/people/exoticblxss-19990720.html",
    "https://allfamous.org/people/manny-narra-20040720.html",
    "https://allfamous.org/people/adam-godley-19640720.html",
    "https://allfamous.org/people/peter-forsberg-19730720.html",
    "https://allfamous.org/people/zak-steiner-19950720.html",
    "https://allfamous.org/people/jin-goo-19800720.html",
    "https://allfamous.org/people/haakon-crown-prince-of-norway-19730720.html",
    "https://allfamous.org/people/scout-larue-willis-19910720.html",
    "https://allfamous.org/people/camryn-candoo-youtube-star.html",
    "https://allfamous.org/people/ratlin-corleone-19900720.html",
    "https://allfamous.org/people/elijah-connor-19890720.html",
    "https://allfamous.org/people/dylan-davis-19930720.html",
    "https://allfamous.org/people/genna-florence-20120720.html",
    "https://allfamous.org/people/miguel-caban-4ekh.html",
    "https://allfamous.org/people/elliott-yamin-19780720.html",
    "https://allfamous.org/people/dominic-roque-19900720.html",
    "https://allfamous.org/people/chloe-roberts-19990720.html",
    "https://allfamous.org/people/rayver-cruz-19890720.html",
    "https://allfamous.org/people/zara-beth-u96y.html",
    "https://allfamous.org/people/stone-gossard-19660720.html",
    "https://allfamous.org/people/tg-sheppard-19440720.html",
    "https://allfamous.org/people/elle-hahn-kjkt.html",
    "https://allfamous.org/people/kool-g-rap-19680720.html",
    "https://allfamous.org/people/mauricio-abad-19970720.html",
    "https://allfamous.org/people/diys-by-abraham-20000720.html",
    "https://allfamous.org/people/pat-neely-19640720.html",
    "https://allfamous.org/people/courtney-taylor-taylor-19670720.html",
    "https://allfamous.org/people/tawan-vihokratana-19910720.html",
    "https://allfamous.org/people/stephen-strasburg-19880720.html",
    "https://allfamous.org/people/tkshok-19790720.html",
    "https://allfamous.org/people/beccy-stables-19980720.html",
    "https://allfamous.org/people/carl-dean-19420720.html",
    "https://allfamous.org/people/heclez-19990720.html",
    "https://allfamous.org/people/paria-arabzadeh-19930720.html",
    "https://allfamous.org/people/cormac-mccarthy-19330720.html",
    "https://allfamous.org/people/kira-kazantsev-19910720.html",
    "https://allfamous.org/people/gearboialibi-20020720.html",
    "https://allfamous.org/people/tati-neves-19860720.html",
    "https://allfamous.org/people/tatcha-oliveira-20040720.html",
    "https://allfamous.org/people/john-moustis-19920720.html",
    "https://allfamous.org/people/catalin-scarlatescu-19710720.html",
    "https://allfamous.org/people/skyler-maxon-19890720.html",
    
    "https://allfamous.org/people/brittanybearmakeup-19920720.html",
    "https://allfamous.org/people/merrick-white-19870720.html",
    "https://allfamous.org/people/zyra-banez-19950720.html",
    "https://allfamous.org/people/alec-burks-19910720.html",
    "https://allfamous.org/people/ugliahh-20010720.html",
    "https://allfamous.org/people/james-harris-19470720.html",
    "https://allfamous.org/people/kate-ryan-19800720.html",
    "https://allfamous.org/people/nicolas-sheff-19820720.html",
    "https://allfamous.org/people/claudine-barretto-19790720.html",
    "https://allfamous.org/people/hali-ford-19890720.html",
    "https://allfamous.org/people/sophia-wardman-19870720.html",
    "https://allfamous.org/people/tim-ferriss-19770720.html",
    "https://allfamous.org/people/xpromvz-19960720.html",
    "https://allfamous.org/people/leighanne-littrell-19690720.html",
    "https://allfamous.org/people/bobby-douglas-19920720.html",
    "https://allfamous.org/people/keith-scott-19540720.html",
    "https://allfamous.org/people/og-boo-dirty-19860720.html",
    "https://allfamous.org/people/maurg1-19930720.html",
    "https://allfamous.org/people/josh-abbott-19800720.html",
    "https://allfamous.org/people/karthik-nagesan-19830720.html",
    "https://allfamous.org/people/mary-taylor-19850720.html",
    "https://allfamous.org/people/leah-miller-19810720.html",
    "https://allfamous.org/people/harleelynn-19930720.html",
    "https://allfamous.org/people/erica-hill-19760720.html",
    "https://allfamous.org/people/rory-macdonald-19890720.html",
    "https://allfamous.org/people/farm-girl-jen-19660720.html",
    "https://allfamous.org/people/rachael-machado-20100720.html",
    "https://allfamous.org/people/ohdamnsteph-19960720.html",
    "https://allfamous.org/people/niall-mcginn-19870720.html",
    "https://allfamous.org/people/angelica-nwandu-yfsm.html",
    "https://allfamous.org/people/mayapolarbear-20160720.html",
    "https://allfamous.org/people/lauren-suthers-20000720.html",
    "https://allfamous.org/people/troy-smith-19840720.html",
    "https://allfamous.org/people/calvin-grubb-19910720.html",
    "https://allfamous.org/people/avery-trigg-20000720.html",
    "https://allfamous.org/people/joseph-tsosh-19940720.html",
    "https://allfamous.org/people/jana-diab-20010720.html",
    "https://allfamous.org/people/paul-cook-19560720.html",
    "https://allfamous.org/people/alex-rose-wiesel-19880720.html",
    "https://allfamous.org/people/charlie-korsmo-19780720.html",
    "https://allfamous.org/people/doug-the-tae-19910720.html",
    "https://allfamous.org/people/corey-smith-19790720.html",
    "https://allfamous.org/people/cliff-deane-19910720.html",
    "https://allfamous.org/people/jacob-fu-19830720.html",
    "https://allfamous.org/people/jay-jay-french-19520720.html",
    "https://allfamous.org/people/thomas-smagge-19910720.html",
    "https://allfamous.org/people/dj-williams-19820720.html",
    "https://allfamous.org/people/amanda-harvey-19930720.html",
    
    "https://allfamous.org/people/kaylee-halko-20030721.html",
    "https://allfamous.org/people/maggie-lindemann-19980721.html",
    "https://allfamous.org/people/noor-dabash-20030721.html",
    "https://allfamous.org/people/romeo-santos-19810721.html",
    "https://allfamous.org/people/yolanda-gampp-19770721.html",
    "https://allfamous.org/people/king-roscoe-20030721.html",
    "https://allfamous.org/people/jasmine-cephas-jones-19890721.html",
    "https://allfamous.org/people/sara-sampaio-19910721.html",
    "https://allfamous.org/people/erling-braut-haaland-20000721.html",
    "https://allfamous.org/people/scarce-19970721.html",
    "https://allfamous.org/people/jessica-barden-19920721.html",
    "https://allfamous.org/people/paloma-faith-19810721.html",
    "https://allfamous.org/people/wisp-19990721.html",
    "https://allfamous.org/people/alexis-rose-20060721.html",
    "https://allfamous.org/people/edwin-castro-19910721.html",
    "https://allfamous.org/people/kyle-hanagami-19860721.html",
    "https://allfamous.org/people/pearl-grace-dela-paz-20020721.html",
    "https://allfamous.org/people/alexis-carrasco-20010721.html",
    "https://allfamous.org/people/twiistedpandora-19950721.html",
    "https://allfamous.org/people/abigail-aguilar-19940721.html",
    "https://allfamous.org/people/jentezen-franklin-19620721.html",
    "https://allfamous.org/people/sammie-lewis-20000721.html",
    "https://allfamous.org/people/rebecca-ferguson-19860721.html",
    "https://allfamous.org/people/diane-guerrero-19860721.html",
    "https://allfamous.org/people/tutweezy-19940721.html",
    "https://allfamous.org/people/kevin-burgess-19880721.html",
    "https://allfamous.org/people/choi-jisu-20000721.html",
    "https://allfamous.org/people/chrishell-stause-19810721.html",
    "https://allfamous.org/people/deandre-jordan-19880721.html",
    "https://allfamous.org/people/filip-dejanovic-19990721.html",
    "https://allfamous.org/people/josh-hartnett-19780721.html",
    "https://allfamous.org/people/tewtiy-19980721.html",
    "https://allfamous.org/people/holly-tandy-20010721.html",
    "https://allfamous.org/people/kayleigh-mehrtens-20030721.html",
    "https://allfamous.org/people/sofia-franklyn-19920721.html",
    "https://allfamous.org/people/paulina-char-19950721.html",
    "https://allfamous.org/people/yasmin-kavari-19920721.html",
    "https://allfamous.org/people/cat-stevens-19480721.html",
    "https://allfamous.org/people/peter-knetter-19960721.html",
    "https://allfamous.org/people/bobby-briskey-19930721.html",
    "https://allfamous.org/people/harrison-schwartz-20080721.html",
    "https://allfamous.org/people/zawe-ashton-19840721.html",
    "https://allfamous.org/people/channing-smith-19970721.html",
    "https://allfamous.org/people/savannah-brown-19960721.html",
    "https://allfamous.org/people/amahree-tiktok-star.html",
    "https://allfamous.org/people/ross-kemp-19640721.html",
    "https://allfamous.org/people/jamie-waylett-19890721.html",
    "https://allfamous.org/people/jeff-fatt-19530721.html",
    
    "https://allfamous.org/people/lucy-spraggan-19910721.html",
    "https://allfamous.org/people/stefan-lofven-19570721.html",
    "https://allfamous.org/people/river-perkins-20010721.html",
    "https://allfamous.org/people/juno-temple-19890721.html",
    "https://allfamous.org/people/damian-marley-19780721.html",
    "https://allfamous.org/people/georgia-catlett-20030721.html",
    "https://allfamous.org/people/cc-sabathia-19800721.html",
    "https://allfamous.org/people/cydney-christine-19970721.html",
    "https://allfamous.org/people/olof-kajbjer-19920721.html",
    "https://allfamous.org/people/vanessa-lengies-19850721.html",
    "https://allfamous.org/people/livia-brito-19860721.html",
    "https://allfamous.org/people/katie-tyson-19940721.html",
    "https://allfamous.org/people/jon-dorenbos-19800721.html",
    "https://allfamous.org/people/kalia-19940721.html",
    "https://allfamous.org/people/leon-martins-19830721.html",
    "https://allfamous.org/people/rory-culkin-19890721.html",
    "https://allfamous.org/people/zealand-yancy-20010721.html",
    "https://allfamous.org/people/hatty-jones-19880721.html",
    "https://allfamous.org/people/jordan-clarke-19500721.html",
    "https://allfamous.org/people/milyn-jensen-19890721.html",
    "https://allfamous.org/people/anya-chalotra-19960721.html",
    "https://allfamous.org/people/jordan-craig-19910721.html",
    "https://allfamous.org/people/kellen-michael-20040721.html",
    "https://allfamous.org/people/bizzle-19830721.html",
    "https://allfamous.org/people/toby-segar-19940721.html",
    "https://allfamous.org/people/azul-guaita-20010721.html",
    "https://allfamous.org/people/korey-cooper-19720721.html",
    "https://allfamous.org/people/mathilde-goehler-19930721.html",
    "https://allfamous.org/people/biannca-rose-19940721.html",
    "https://allfamous.org/people/emily-rollins-20030721.html",
    "https://allfamous.org/people/justin-bartha-19780721.html",
    "https://allfamous.org/people/finley-smallwood-20130721.html",
    "https://allfamous.org/people/robert-roldan-19900721.html",
    "https://allfamous.org/people/barrett-willingham-tiktok-star.html",
    "https://allfamous.org/people/alana-duval-19920721.html",
    "https://allfamous.org/people/ali-landry-19730721.html",
    "https://allfamous.org/people/jon-lovitz-19570721.html",
    "https://allfamous.org/people/dvontay-friga-19980721.html",
    "https://allfamous.org/people/yanna-beard-20010721.html",
    "https://allfamous.org/people/the-mysterious-mr-enter-19920721.html",
    "https://allfamous.org/people/alex-reid-19750721.html",
    "https://allfamous.org/people/sadaf-taherian-19880721.html",
    "https://allfamous.org/people/penelope-robin-20070721.html",
    "https://allfamous.org/people/david-dastmalchian-19840721.html",
    "https://allfamous.org/people/jimmy-humilde-6qzx.html",
    "https://allfamous.org/people/heo-yoorim-20000721.html",
    "https://allfamous.org/people/giant-silva-19630721.html",
    "https://allfamous.org/people/jazlyn-gabriel-19910721.html",
    
    "https://allfamous.org/people/jaime-murray-19770721.html",
    "https://allfamous.org/people/godfrey-19690721.html",
    "https://allfamous.org/people/chris-stokes-19690721.html",
    "https://allfamous.org/people/rich-froning-jr-19870721.html",
    "https://allfamous.org/people/bryiana-noelle-19900721.html",
    "https://allfamous.org/people/babyphaa-20050721.html",
    "https://allfamous.org/people/top-extract-20000721.html",
    "https://allfamous.org/people/mateo-sun-19950721.html",
    "https://allfamous.org/people/grace-osborne-20020721.html",
    "https://allfamous.org/people/qasim-rashid-19820721.html",
    "https://allfamous.org/people/jaslyn-ome-19910721.html",
    "https://allfamous.org/people/looloopaul-19980721.html",
    "https://allfamous.org/people/nathan-pearson-19970721.html",
    "https://allfamous.org/people/tamika-catchings-19790721.html",
    "https://allfamous.org/people/austin-burke-19950721.html",
    "https://allfamous.org/people/brandi-chastain-19680721.html",
    "https://allfamous.org/people/chloe-fieldman-20000721.html",
    "https://allfamous.org/people/tom-hawkins-19880721.html",
    "https://allfamous.org/people/nicole-hocking-19920721.html",
    "https://allfamous.org/people/marco-fabian-19890721.html",
    "https://allfamous.org/people/john-lowe-19450721.html",
    "https://allfamous.org/people/brandon-heath-19780721.html",
    "https://allfamous.org/people/moriah-lee-19930721.html",
    "https://allfamous.org/people/burak-celik-19920721.html",
    "https://allfamous.org/people/david-carr-19790721.html",
    "https://allfamous.org/people/narcissa-wright-19890721.html",
    "https://allfamous.org/people/hanimegod-20020721.html",
    "https://allfamous.org/people/dalton-cyr-20000721.html",
    "https://allfamous.org/people/charlotte-gainsbourg-19710721.html",
    "https://allfamous.org/people/chelsie-hightower-19890721.html",
    "https://allfamous.org/people/koolysmiley-19950721.html",
    "https://allfamous.org/people/lia-hatzakis-19930721.html",
    "https://allfamous.org/people/peewee-5tjc.html",
    "https://allfamous.org/people/dawson-fletcher-19990721.html",
    "https://allfamous.org/people/antonio-griggs-19980721.html",
    "https://allfamous.org/people/brooklyn-towe-19980721.html",
    "https://allfamous.org/people/carmen-grebenisan-19920721.html",
    "https://allfamous.org/people/ilayda-akdogan-19980721.html",
    "https://allfamous.org/people/jason-roy-19900721.html",
    "https://allfamous.org/people/harry-hudson-taylor-19920721.html",
    "https://allfamous.org/people/alysia-reiner-19700721.html",
    "https://allfamous.org/people/tyler-pratt-19900721.html",
    "https://allfamous.org/people/blake-lewis-19810721.html",
    "https://allfamous.org/people/emma-hodges-20030721.html",
    "https://allfamous.org/people/steven-park-19960721.html",
    "https://allfamous.org/people/charlotte-de-witte-19920721.html",
    "https://allfamous.org/people/betty-gilpin-19860721.html",
    "https://allfamous.org/people/nadia-mcbain-tiktok-star.html",
    
    "https://allfamous.org/people/fiona-nova-19960721.html",
    "https://allfamous.org/people/vinixete-xnbn.html",
    "https://allfamous.org/people/mia-gillespie-20010721.html",
    "https://allfamous.org/people/otis-dhanji-20030721.html",
    "https://allfamous.org/people/claudette-ortiz-19810721.html",
    "https://allfamous.org/people/jing-tian-19880721.html",
    "https://allfamous.org/people/fey-19730721.html",
    "https://allfamous.org/people/remy-allure-19910721.html",
    "https://allfamous.org/people/b-magic-19860721.html",
    "https://allfamous.org/people/michael-fitzpatrick-19700721.html",
    "https://allfamous.org/people/chris-duarte-19940721.html",
    "https://allfamous.org/people/sara-kate-19930721.html",
    "https://allfamous.org/people/pita-19910721.html",
    "https://allfamous.org/people/bit-20040721.html",
    "https://allfamous.org/people/valeria-amaranta-jimenez-zaragoza-19990721.html",
    "https://allfamous.org/people/cherly-juno-19910721.html",
    "https://allfamous.org/people/will-compere-19990721.html",
    "https://allfamous.org/people/harper-smith-19820721.html",
    "https://allfamous.org/people/jessica-olie-19930721.html",
    "https://allfamous.org/people/riley-ridley-19960721.html",
    "https://allfamous.org/people/darien-dash-19920721.html",
    "https://allfamous.org/people/bethany-shotton-19980721.html",
    "https://allfamous.org/people/james-lowe-19890721.html",
    "https://allfamous.org/people/joseph-cannata-19830721.html",
    "https://allfamous.org/people/kass-morgan-19840721.html",
    "https://allfamous.org/people/sam-hill-19850721.html",
    "https://allfamous.org/people/mychael-michelle-19880721.html",
    "https://allfamous.org/people/vanessa-born-19920721.html",
    "https://allfamous.org/people/paloma-guzman-19910721.html",
    "https://allfamous.org/people/kim-wallace-19670721.html",
    "https://allfamous.org/people/joaquin-sanchez-19810721.html",
    "https://allfamous.org/people/james-stauffer-19850721.html",
    "https://allfamous.org/people/talitha-minnis-19920721.html",
    "https://allfamous.org/people/paul-brandt-19720721.html",
    "https://allfamous.org/people/omar-rasheed-20020721.html",
    "https://allfamous.org/people/ms-d-19920721.html",
    "https://allfamous.org/people/chontel-duncan-19890721.html",
    "https://allfamous.org/people/jalin-marshall-19950721.html",
    "https://allfamous.org/people/ben-kissel-19810721.html",
    "https://allfamous.org/people/apexay-20000721.html",
    "https://allfamous.org/people/ariel-meredith-19860721.html",
    "https://allfamous.org/people/mccrae-olson-19890721.html",
    "https://allfamous.org/people/paola-guanche-20010721.html",
    "https://allfamous.org/people/sprague-grayden-19800721.html",
    "https://allfamous.org/people/jason-thompson-19860721.html",
    "https://allfamous.org/people/niven-glover-20000721.html",
    "https://allfamous.org/people/emily-robinson-20020721.html",
    "https://allfamous.org/people/ray-galletti-19740721.html",
    
    "https://allfamous.org/people/aljamain-sterling-19890721.html",
    "https://allfamous.org/people/ali-cobrin-19890721.html",
    "https://allfamous.org/people/baylor-cryder-20040721.html",
    "https://allfamous.org/people/sofiane-zermani-19860721.html",
    "https://allfamous.org/people/chris-bisson-19750721.html",
    "https://allfamous.org/people/dannel-malloy-19550721.html",
    "https://allfamous.org/people/george-wallace-19520721.html",
    "https://allfamous.org/people/anthony-tripke-19970721.html",
    "https://allfamous.org/people/shane-crump-19870721.html",
    "https://allfamous.org/people/fzst-20000721.html",
    "https://allfamous.org/people/kc-navarro-19990721.html",
    "https://allfamous.org/people/paul-davis-19840721.html",
    "https://allfamous.org/people/alejandro-del-carpio-19960721.html",
    "https://allfamous.org/people/casino-chino-19920721.html",
    "https://allfamous.org/people/sivan-alyra-rose-19990721.html",
    "https://allfamous.org/people/tye-trujillo-20040721.html",
    "https://allfamous.org/people/darren-le-gallo-19740721.html",
    "https://allfamous.org/people/joya-g-19950721.html",
    "https://allfamous.org/people/marcelo-bielsa-19550721.html",
    "https://allfamous.org/people/bharath-19840721.html",
    "https://allfamous.org/people/ryley-walker-19890721.html",
    "https://allfamous.org/people/samuli-edelmann-19680721.html",
    "https://allfamous.org/people/michael-rangamiz-20120721.html",
    "https://allfamous.org/people/rachel-petladwala-19930721.html",
    "https://allfamous.org/people/jessica-king-19750721.html",
    "https://allfamous.org/people/abrar-ul-haq-19680721.html",
    "https://allfamous.org/people/therealstorm-20000721.html",
    "https://allfamous.org/people/aditya-shrivastava-19680721.html",
    "https://allfamous.org/people/jaylene-cook-19910721.html",
    "https://allfamous.org/people/emily-clarkson-19940721.html",
    "https://allfamous.org/people/alexander-diaz-19950721.html",
    "https://allfamous.org/people/nathan-brown-19950721.html",
    "https://allfamous.org/people/landon-benton-20150721.html",
    "https://allfamous.org/people/teflon-mula-19920721.html",
    "https://allfamous.org/people/adair-curtis-19800721.html",
    "https://allfamous.org/people/mike-deleasa-19880721.html",
    "https://allfamous.org/people/kellen-winslow-ii-19830721.html",
    "https://allfamous.org/people/nimai-delgado-19890721.html",
    "https://allfamous.org/people/akameru-kawaii-19890721.html",
    "https://allfamous.org/people/zack-mccraw-19990721.html",
    "https://allfamous.org/people/kragie-19990721.html",
    "https://allfamous.org/people/moneeb-kassimi-th1b.html",
    "https://allfamous.org/people/kstar-choi-19930721.html",
    "https://allfamous.org/people/daphnee-renae-19940721.html",
    "https://allfamous.org/people/sasha-gloria-20000721.html",
    "https://allfamous.org/people/madhu-shalini-19890721.html",
    "https://allfamous.org/people/kierstin-koppel-19890721.html",
    "https://allfamous.org/people/yofonzz-19910721.html",
    
    "https://allfamous.org/people/selena-gomez-19920722.html",
    "https://allfamous.org/people/larray-19980722.html",
    "https://allfamous.org/people/lizzy-wurst-19980722.html",
    "https://allfamous.org/people/madison-pettis-19980722.html",
    "https://allfamous.org/people/hannah-mae-dugmore-20020722.html",
    "https://allfamous.org/people/keegan-allen-19890722.html",
    "https://allfamous.org/people/prince-george-20130722.html",
    "https://allfamous.org/people/nikki-lilly-20040722.html",
    "https://allfamous.org/people/pedro-tovar-20020722.html",
    "https://allfamous.org/people/shawn-michaels-19650722.html",
    "https://allfamous.org/people/aj-cook-19780722.html",
    "https://allfamous.org/people/littyb-20060722.html",
    "https://allfamous.org/people/laura-clery-19860722.html",
    "https://allfamous.org/people/jordan-boulet-viau-19970722.html",
    "https://allfamous.org/people/ezekiel-elliott-19950722.html",
    "https://allfamous.org/people/shannon-taylor-19970722.html",
    "https://allfamous.org/people/emanuella-samuel-20100722.html",
    "https://allfamous.org/people/david-spade-19640722.html",
    "https://allfamous.org/people/jake-angeles-19990722.html",
    "https://allfamous.org/people/jaz-sinclair-19940722.html",
    "https://allfamous.org/people/dan-woolley-20030722.html",
    "https://allfamous.org/people/krew-bingham-20100722.html",
    "https://allfamous.org/people/emma-macdonald-20010722.html",
    "https://allfamous.org/people/prince-felix-of-denmark-20020722.html",
    "https://allfamous.org/people/bre-z-19870722.html",
    "https://allfamous.org/people/skyler-gisondo-19960722.html",
    "https://allfamous.org/people/alisha-newton-20010722.html",
    "https://allfamous.org/people/leah-smith-20010722.html",
    "https://allfamous.org/people/thistrippyhippie-20000722.html",
    "https://allfamous.org/people/nia-riley-19890722.html",
    "https://allfamous.org/people/kaiisyourhomie-20000722.html",
    "https://allfamous.org/people/maria-gentlewhispering-19860722.html",
    "https://allfamous.org/people/israel-johnson-20050722.html",
    "https://allfamous.org/people/willem-dafoe-19550722.html",
    "https://allfamous.org/people/jaime-camil-19730722.html",
    "https://allfamous.org/people/danny-glover-19460722.html",
    "https://allfamous.org/people/hazel-goddesss-19950722.html",
    "https://allfamous.org/people/se-hinton-19480722.html",
    "https://allfamous.org/people/vandy-jaidenn-20040722.html",
    "https://allfamous.org/people/fandango-19810722.html",
    "https://allfamous.org/people/israel-adesanya-19890722.html",
    "https://allfamous.org/people/ben-barlow-19940722.html",
    "https://allfamous.org/people/keith-sweat-19610722.html",
    "https://allfamous.org/people/ryen-lung-19880722.html",
    "https://allfamous.org/people/voiceoverpete-19590722.html",
    "https://allfamous.org/people/alicia-moffet-19980722.html",
    "https://allfamous.org/people/john-leguizamo-19640722.html",
    "https://allfamous.org/people/ric-alston-20010722.html",
    
    "https://allfamous.org/people/this-trippy-hippie-20000722.html",
    "https://allfamous.org/people/sean-lee-19860722.html",
    "https://allfamous.org/people/willa-jonas-20200722.html",
    "https://allfamous.org/people/joanna-going-19630722.html",
    "https://allfamous.org/people/armaan-malik-19950722.html",
    "https://allfamous.org/people/andrew-jay-datu-tiktok-star.html",
    "https://allfamous.org/people/blake-harrison-19850722.html",
    "https://allfamous.org/people/audrey-hope-20030722.html",
    "https://allfamous.org/people/jayme-jo-massoud-20000722.html",
    "https://allfamous.org/people/iammadix-swsp.html",
    "https://allfamous.org/people/michelle-georgiana-19790722.html",
    "https://allfamous.org/people/sabrina-chan-20060722.html",
    "https://allfamous.org/people/maria-jose-vargas-20010722.html",
    "https://allfamous.org/people/tommykok-20020722.html",
    "https://allfamous.org/people/nilaroshini-maran-19930722.html",
    "https://allfamous.org/people/keenan-tracey-19910722.html",
    "https://allfamous.org/people/george-clinton-19410722.html",
    "https://allfamous.org/people/don-henley-19470722.html",
    "https://allfamous.org/people/james-arnold-taylor-19690722.html",
    "https://allfamous.org/people/toni-fowler-qlyn.html",
    "https://allfamous.org/people/tablo-19800722.html",
    "https://allfamous.org/people/rab-williams-19980722.html",
    "https://allfamous.org/people/na-kel-smith-19940722.html",
    "https://allfamous.org/people/jordan-cook-19830722.html",
    "https://allfamous.org/people/soar-makz-19950722.html",
    "https://allfamous.org/people/alex-fernandez-19670722.html",
    "https://allfamous.org/people/alan-menken-19490722.html",
    "https://allfamous.org/people/tyler-white-19980722.html",
    "https://allfamous.org/people/parker-schnabel-19940722.html",
    "https://allfamous.org/people/nolan-santana-19970722.html",
    "https://allfamous.org/people/keyshawn-johnson-19720722.html",
    "https://allfamous.org/people/andrew-holness-19720722.html",
    "https://allfamous.org/people/cayman-vanderbur-19980722.html",
    "https://allfamous.org/people/abigale-mandler-19950722.html",
    "https://allfamous.org/people/nova-rockafeller-19880722.html",
    "https://allfamous.org/people/lucas-andrade-19990722.html",
    "https://allfamous.org/people/luis-morrison-19940722.html",
    "https://allfamous.org/people/sarina-jassy-20000722.html",
    "https://allfamous.org/people/yazmin-cantu-19950722.html",
    "https://allfamous.org/people/kiara-johnson-19930722.html",
    "https://allfamous.org/people/ashley-cain-19950722.html",
    "https://allfamous.org/people/makeupartistgorda66-19940722.html",
    "https://allfamous.org/people/rell-19760722.html",
    "https://allfamous.org/people/rhys-ifans-19670722.html",
    "https://allfamous.org/people/sam-bowden-19930722.html",
    "https://allfamous.org/people/kaori-oinuma-20000722.html",
    "https://allfamous.org/people/liam-pitts-20030722.html",
    "https://allfamous.org/people/jeremiah-collins-19940722.html",
    
    "https://allfamous.org/people/ricard-perez-20060722.html",
    "https://allfamous.org/people/petey-pablo-19730722.html",
    "https://allfamous.org/people/albert-brooks-19470722.html",
    "https://allfamous.org/people/daniel-jones-19730722.html",
    "https://allfamous.org/people/dave-coulter-19830722.html",
    "https://allfamous.org/people/despina-vandi-19690722.html",
    "https://allfamous.org/people/daniel-fox-19870722.html",
    "https://allfamous.org/people/maria-perez-19960722.html",
    "https://allfamous.org/people/lagxpeanutpwner-19930722.html",
    "https://allfamous.org/people/parker-reese-20030722.html",
    "https://allfamous.org/people/tiger-lily-hutchence-19960722.html",
    "https://allfamous.org/people/irene-bedard-19670722.html",
    "https://allfamous.org/people/marley-forde-zzpf.html",
    "https://allfamous.org/people/lucas-rodgers-20040722.html",
    "https://allfamous.org/people/sharni-vinson-19830722.html",
    "https://allfamous.org/people/akira-tozawa-19850722.html",
    "https://allfamous.org/people/trent-boult-19890722.html",
    "https://allfamous.org/people/jane-oineza-19960722.html",
    "https://allfamous.org/people/abby-edwards-20010722.html",
    "https://allfamous.org/people/deon-hinton-19980722.html",
    "https://allfamous.org/people/arsenie-todiras-19830722.html",
    "https://allfamous.org/people/louise-fletcher-19340722.html",
    "https://allfamous.org/people/jenna-lynn-meowri-19970722.html",
    "https://allfamous.org/people/hannah-anderson-19970722.html",
    "https://allfamous.org/people/manes-by-mell-19970722.html",
    "https://allfamous.org/people/aa-millers-19990722.html",
    "https://allfamous.org/people/rufus-wainwright-19730722.html",
    "https://allfamous.org/people/james-harris-19840722.html",
    "https://allfamous.org/people/tyler-latham-19930722.html",
    "https://allfamous.org/people/genecia-stinson-19910722.html",
    "https://allfamous.org/people/genuisme-19990722.html",
    "https://allfamous.org/people/bobby-sherman-19430722.html",
    "https://allfamous.org/people/pl-cloutier-19900722.html",
    "https://allfamous.org/people/monica-geldart-19980722.html",
    "https://allfamous.org/people/jerry-brown-jr-19890722.html",
    "https://allfamous.org/people/hayden-williams-19910722.html",
    "https://allfamous.org/people/karlton-humes-19930722.html",
    "https://allfamous.org/people/marisa-inda-19760722.html",
    "https://allfamous.org/people/clive-standen-19810722.html",
    "https://allfamous.org/people/stevie-johnson-19860722.html",
    "https://allfamous.org/people/camila-banus-19900722.html",
    "https://allfamous.org/people/amy-paffrath-19830722.html",
    "https://allfamous.org/people/terence-stamp-19380722.html",
    "https://allfamous.org/people/alex-vancleave-19960722.html",
    "https://allfamous.org/people/ryan-glass-19900722.html",
    "https://allfamous.org/people/dirk-kuyt-19800722.html",
    "https://allfamous.org/people/lauren-morelli-19820722.html",
    "https://allfamous.org/people/sione-kelepi-19920722.html",
    
    "https://allfamous.org/people/bonnie-langford-19640722.html",
    "https://allfamous.org/people/eva-jenner-20150722.html",
    "https://allfamous.org/people/aforautumn-instagram-star.html",
    "https://allfamous.org/people/kylah-saree-20010722.html",
    "https://allfamous.org/people/tefi-pessoa-slds.html",
    "https://allfamous.org/people/jonas-terleckas-20020722.html",
    "https://allfamous.org/people/olivia-herdt-20000722.html",
    "https://allfamous.org/people/kenny-king-19810722.html",
    "https://allfamous.org/people/tiinaiya-eyg7.html",
    "https://allfamous.org/people/ezrah-dormon-rosen-20050722.html",
    "https://allfamous.org/people/franka-potente-19740722.html",
    "https://allfamous.org/people/smoothgelo17-20020722.html",
    "https://allfamous.org/people/rob-estes-19630722.html",
    "https://allfamous.org/people/scott-dixon-19800722.html",
    "https://allfamous.org/people/kristine-lilly-19710722.html",
    "https://allfamous.org/people/bgnickel-tiktok-star.html",
    "https://allfamous.org/people/tim-brown-19660722.html",
    "https://allfamous.org/people/tia-clair-toomey-19930722.html",
    "https://allfamous.org/people/amber-beattie-19930722.html",
    "https://allfamous.org/people/stephen-mangan-19720722.html",
    "https://allfamous.org/people/summer-dunmyer-20000722.html",
    "https://allfamous.org/people/nicolette-camille-19780722.html",
    "https://allfamous.org/people/steven-jackson-19830722.html",
    "https://allfamous.org/people/fergus-riordan-19970722.html",
    "https://allfamous.org/people/erica-fontaine-19980722.html",
    "https://allfamous.org/people/colin-ferguson-19720722.html",
    "https://allfamous.org/people/benny-boom-19710722.html",
    "https://allfamous.org/people/candace-kroslak-19780722.html",
    "https://allfamous.org/people/jimmy-oakes-19940722.html",
    "https://allfamous.org/people/nathalia-valente-xdtp.html",
    "https://allfamous.org/people/ethan-kempner-19980722.html",
    "https://allfamous.org/people/ben-foden-19850722.html",
    "https://allfamous.org/people/martin-solhaugen-19940722.html",
    "https://allfamous.org/people/jason-becker-19690722.html",
    "https://allfamous.org/people/jenni-barber-19830722.html",
    "https://allfamous.org/people/helen-lasichanh-19800722.html",
    "https://allfamous.org/people/chandler-goodwin-19940722.html",
    "https://allfamous.org/people/sarahi-rojas-19960722.html",
    "https://allfamous.org/people/nick-briz-fd2e.html",
    "https://allfamous.org/people/skyim-20000722.html",
    "https://allfamous.org/people/don-van-natta-jr-19640722.html",
    "https://allfamous.org/people/lara-alana-20140722.html",
    "https://allfamous.org/people/jennet-liaw-19900722.html",
    "https://allfamous.org/people/cameron-glasgow-19990722.html",
    "https://allfamous.org/people/angeiicuh-twitch-star.html",
    "https://allfamous.org/people/elizabeth-sweet-19930722.html",
    "https://allfamous.org/people/jonathan-owens-19950722.html",
    "https://allfamous.org/people/evan-brinkman-20020722.html",
    
    "https://allfamous.org/people/pol-monen-19940722.html",
    "https://allfamous.org/people/josh-lawson-19810722.html",
    "https://allfamous.org/people/manyata-dutt-19770722.html",
    "https://allfamous.org/people/stewart-downing-19840722.html",
    "https://allfamous.org/people/lerato-kganyago-19820722.html",
    "https://allfamous.org/people/sofia-delfino-20000722.html",
    "https://allfamous.org/people/janise-mayo-19890722.html",
    "https://allfamous.org/people/otto-waalkes-19480722.html",
    "https://allfamous.org/people/yiordano-ignacio-20040722.html",
    "https://allfamous.org/people/dwaine-woolley-19900722.html",
    "https://allfamous.org/people/burcin-abdullah-19870722.html",
    "https://allfamous.org/people/fede-valverde-19980722.html",
    "https://allfamous.org/people/leonor-borges-20020722.html",
    "https://allfamous.org/people/zaye-bank-19990722.html",
    "https://allfamous.org/people/frank-edwards-19900722.html",
    "https://allfamous.org/people/alehcksa-tiktok-star.html",
    "https://allfamous.org/people/eli-rallo-19980722.html",
    "https://allfamous.org/people/james-jebbia-19630722.html",
    "https://allfamous.org/people/hannah-waterman-19750722.html",
    "https://allfamous.org/people/willow-hammond-20030722.html",
    "https://allfamous.org/people/alvin-gomes-tiktok-star.html",
    "https://allfamous.org/people/taylor-lewan-19910722.html",
    "https://allfamous.org/people/komi-19920722.html",
    "https://allfamous.org/people/erica-gluck-19980722.html",
    "https://allfamous.org/people/michaela-okland-19960722.html",
    "https://allfamous.org/people/sevadus-19870722.html",
    "https://allfamous.org/people/mireille-mathieu-19460722.html",
    "https://allfamous.org/people/tom-wallisch-19870722.html",
    "https://allfamous.org/people/ariesya-farha-19990722.html",
    "https://allfamous.org/people/joakim-gomez-19880722.html",
    "https://allfamous.org/people/miki-sudo-19850722.html",
    "https://allfamous.org/people/ramsey-aguilera-19960722.html",
    "https://allfamous.org/people/patricia-marie-duncan-19750722.html",
    "https://allfamous.org/people/dania-alsaleh-k9mp.html",
    "https://allfamous.org/people/connor-shugart-19990722.html",
    "https://allfamous.org/people/lil-opioid-20020722.html",
    "https://allfamous.org/people/patrick-labyorteaux-19650722.html",
    "https://allfamous.org/people/eric-del-castillo-19340722.html",
    "https://allfamous.org/people/pierce-whitney-20030722.html",
    "https://allfamous.org/people/raja-syahiran-19930722.html",
    "https://allfamous.org/people/andra-ghinea-19970722.html",
    "https://allfamous.org/people/jack-metcalfe-19880722.html",
    "https://allfamous.org/people/jemima-bennett-20030722.html",
    "https://allfamous.org/people/charlotte-kalla-19870722.html",
    "https://allfamous.org/people/drew-jarding-20040722.html",
    "https://allfamous.org/people/amy-mccarthy-19760722.html",
    "https://allfamous.org/people/greg-west-19940722.html",
    "https://allfamous.org/people/kid-red-19910722.html",
    
    "https://allfamous.org/people/david-dobrik-19960723.html",
    "https://allfamous.org/people/daniel-radcliffe-19890723.html",
    "https://allfamous.org/people/paul-wesley-19820723.html",
    "https://allfamous.org/people/katie-leblanc-19800723.html",
    "https://allfamous.org/people/jess-conte-19960723.html",
    "https://allfamous.org/people/spencewuah-20010723.html",
    "https://allfamous.org/people/kaelyn-wilkins-20000723.html",
    "https://allfamous.org/people/suigeneris-20030723.html",
    "https://allfamous.org/people/santo-august-19970723.html",
    "https://allfamous.org/people/marlon-wayans-19720723.html",
    "https://allfamous.org/people/dan-markham-19800723.html",
    "https://allfamous.org/people/slash-19650723.html",
    "https://allfamous.org/people/hwasa-19950723.html",
    "https://allfamous.org/people/daxton-mcknight-20080723.html",
    "https://allfamous.org/people/sanna-gurung-19950723.html",
    "https://allfamous.org/people/abby-donnelly-20020723.html",
    "https://allfamous.org/people/mena-19980723.html",
    "https://allfamous.org/people/rhegan-coursey-20020723.html",
    "https://allfamous.org/people/woody-harrelson-19610723.html",
    "https://allfamous.org/people/keisyo-19940723.html",
    "https://allfamous.org/people/symphony-rader-20100723.html",
    "https://allfamous.org/people/kathryn-hahn-19730723.html",
    "https://allfamous.org/people/superraedizzle-19930723.html",
    "https://allfamous.org/people/cierra-birdsong-tiktok-star.html",
    "https://allfamous.org/people/isaac-coffee-19990723.html",
    "https://allfamous.org/people/kendall-gray-20000723.html",
    "https://allfamous.org/people/jazmine-garcia-19940723.html",
    "https://allfamous.org/people/natalie-bebko-20010723.html",
    "https://allfamous.org/people/waliyha-malik-19980723.html",
    "https://allfamous.org/people/alex-bowen-19910723.html",
    "https://allfamous.org/people/aliyah-ortega-20040723.html",
    "https://allfamous.org/people/michelle-williams-19790723.html",
    "https://allfamous.org/people/alexis-ashley-19980723.html",
    "https://allfamous.org/people/danielle-bradbery-19960723.html",
    "https://allfamous.org/people/monica-lewinsky-19730723.html",
    "https://allfamous.org/people/theofficialjale-20030723.html",
    "https://allfamous.org/people/daniel-vargas-19960723.html",
    "https://allfamous.org/people/malibuthegirl-20050723.html",
    "https://allfamous.org/people/suriya-19750723.html",
    "https://allfamous.org/people/javon-walton-20060723.html",
    "https://allfamous.org/people/maejor-ali-19870723.html",
    "https://allfamous.org/people/jaylein-auther-henry-cantrell-bvfh.html",
    "https://allfamous.org/people/viy-cortez-19960723.html",
    "https://allfamous.org/people/raven-gates-19910723.html",
    "https://allfamous.org/people/najib-razak-19530723.html",
    "https://allfamous.org/people/eden-estrada-19950723.html",
    "https://allfamous.org/people/alex-consani-20010723.html",
    "https://allfamous.org/people/kameron-michaels-19860723.html",
    
    "https://allfamous.org/people/hunter-paige-20030723.html",
    "https://allfamous.org/people/markus-ortega-20040723.html",
    "https://allfamous.org/people/gator-de-st-jeor-20060723.html",
    "https://allfamous.org/people/penelope-mitchell-19910723.html",
    "https://allfamous.org/people/bobby-maze-19860723.html",
    "https://allfamous.org/people/mitch-jones-19920723.html",
    "https://allfamous.org/people/charisma-carpenter-19700723.html",
    "https://allfamous.org/people/maria-casals-19940723.html",
    "https://allfamous.org/people/mitchell-orval-19960723.html",
    "https://allfamous.org/people/vizeh-19980723.html",
    "https://allfamous.org/people/diya-eddine-19970723.html",
    "https://allfamous.org/people/chelsea-kreiner-19910723.html",
    "https://allfamous.org/people/bengal-19980723.html",
    "https://allfamous.org/people/jacob-oman-20010723.html",
    "https://allfamous.org/people/madi-humphrey-20020723.html",
    "https://allfamous.org/people/mia-clark-20010723.html",
    "https://allfamous.org/people/brandon-larned-19920723.html",
    "https://allfamous.org/people/emily-munyak-20020723.html",
    "https://allfamous.org/people/shawn-levy-19680723.html",
    "https://allfamous.org/people/jaykae-19910723.html",
    "https://allfamous.org/people/thunayyan-khalid-19920723.html",
    "https://allfamous.org/people/angel-mamii-19870723.html",
    "https://allfamous.org/people/selena-michelle-19970723.html",
    "https://allfamous.org/people/kevin-bull-19850723.html",
    "https://allfamous.org/people/claudia-salas-19940723.html",
    "https://allfamous.org/people/emmanoodle-19990723.html",
    "https://allfamous.org/people/blair-redford-19830723.html",
    "https://allfamous.org/people/emily-cannon-19910723.html",
    "https://allfamous.org/people/maya-henry-19950723.html",
    "https://allfamous.org/people/gary-payton-19680723.html",
    "https://allfamous.org/people/danny-ings-19920723.html",
    "https://allfamous.org/people/jo-brand-19570723.html",
    "https://allfamous.org/people/stephanie-seymour-19680723.html",
    "https://allfamous.org/people/neil-perry-19900723.html",
    "https://allfamous.org/people/the-real-wings-19980723.html",
    "https://allfamous.org/people/deandre-ayton-19980723.html",
    "https://allfamous.org/people/stacy-liu-19830723.html",
    "https://allfamous.org/people/alison-krauss-19710723.html",
    "https://allfamous.org/people/kem-19690723.html",
    "https://allfamous.org/people/joivan-wade-19930723.html",
    "https://allfamous.org/people/boo-weekley-19730723.html",
    "https://allfamous.org/people/ashley-king-19890723.html",
    "https://allfamous.org/people/lora-19820723.html",
    "https://allfamous.org/people/regard-19930723.html",
    "https://allfamous.org/people/olivia-mecca-19960723.html",
    "https://allfamous.org/people/cade-duncan-instagram-star.html",
    "https://allfamous.org/people/new-horizon-alex-19980723.html",
    "https://allfamous.org/people/new-horizon-alex-19980723.html",
    
    "https://allfamous.org/people/chloe-nguyen-20010723.html",
    "https://allfamous.org/people/park-jun-won-19890723.html",
    "https://allfamous.org/people/ben-hall-19920723.html",
    "https://allfamous.org/people/lili-simmons-19930723.html",
    "https://allfamous.org/people/john-torode-19650723.html",
    "https://allfamous.org/people/rachel-g-fox-19960723.html",
    "https://allfamous.org/people/tamara-wall-19770723.html",
    "https://allfamous.org/people/andrew-fletcher-instagram-star.html",
    "https://allfamous.org/people/cara-loren-19900723.html",
    "https://allfamous.org/people/jenny-huynh-upjc.html",
    "https://allfamous.org/people/helena-howard-19980723.html",
    "https://allfamous.org/people/kasperi-kapanen-19960723.html",
    "https://allfamous.org/people/ron-pope-19830723.html",
    "https://allfamous.org/people/raphael-warnock-19690723.html",
    "https://allfamous.org/people/martin-gore-19610723.html",
    "https://allfamous.org/people/stephanie-march-19740723.html",
    "https://allfamous.org/people/jj-williams-19730723.html",
    "https://allfamous.org/people/ana-paula-de-leon-20040723.html",
    "https://allfamous.org/people/winnie-fallon-20130723.html",
    "https://allfamous.org/people/silken-chu-njhe.html",
    "https://allfamous.org/people/ampika-pickston-19810723.html",
    "https://allfamous.org/people/tus-19860723.html",
    "https://allfamous.org/people/leslie-guzman-20030723.html",
    "https://allfamous.org/people/dagny-19900723.html",
    "https://allfamous.org/people/aynslee-19690723.html",
    "https://allfamous.org/people/eva-zapico-19980723.html",
    "https://allfamous.org/people/blessing-xaba-19930723.html",
    "https://allfamous.org/people/nathan-adams-19910723.html",
    "https://allfamous.org/people/presley-hernandez-19900723.html",
    "https://allfamous.org/people/evangelina-anderson-19830723.html",
    "https://allfamous.org/people/ellie-reese-barnett-20030723.html",
    "https://allfamous.org/people/matthew-murphy-19840723.html",
    "https://allfamous.org/people/kevin-leiser-19920723.html",
    "https://allfamous.org/people/brandon-roy-19840723.html",
    "https://allfamous.org/people/anna-williamson-19810723.html",
    "https://allfamous.org/people/new-horizon-gregg-19980723.html",
    "https://allfamous.org/people/new-horizon-gregg-19980723.html",
    "https://allfamous.org/people/kathryn-gallagher-19930723.html",
    "https://allfamous.org/people/arielplays-19970723.html",
    "https://allfamous.org/people/gerard-canonico-19890723.html",
    "https://allfamous.org/people/tosin-cole-19920723.html",
    "https://allfamous.org/people/payton-justice-19980723.html",
    "https://allfamous.org/people/ahmed-ezz-19710723.html",
    "https://allfamous.org/people/rod-kerr-19670723.html",
    "https://allfamous.org/people/citygirltyler-20010723.html",
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
