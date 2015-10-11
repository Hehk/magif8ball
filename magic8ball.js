if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('message', 'Hello World');
  var prevImage = '';

  var createResultObj = function (message, content) {
    content = content || ['http://i.imgur.com/rfFWukr.gif', 'http://media.giphy.com/media/75ZaxapnyMp2w/giphy.gif'];
    return {
      message : message,
      content : content
    };
  }, roll = function () {
    var outcome = results[Math.floor(Math.random() * 20)],
        curImage = '';
    Session.set('message', outcome.message);

    do {
      curImage = outcome.content[Math.floor(Math.random() * outcome.content.length)];
      $('.background').css(
        'background-image',
        'url(' + curImage + ')'
      );
    } while (curImage === prevImage);
    prevImage = curImage;
  };

  var positive = [
    'http://media.giphy.com/media/W9WSk4tEU1aJW/giphy.gif',
    'https://media.giphy.com/media/vgUFOWBwBkziE/giphy.gif',
    'http://www.sharegif.com/wp-content/uploads/2013/10/yes-gif-3.gif',
    'http://www.reactiongifs.us/wp-content/uploads/2013/10/oh_yeah_obama.gif',
    'http://media.giphy.com/media/yltGOJQBMBn7W/giphy.gif',
    'http://media.giphy.com/media/t5cTE9ZfHth4s/giphy.gif',
    'https://s-media-cache-ak0.pinimg.com/originals/09/8b/b9/098bb9b3ddcceba5e7a8dfc8890ef684.gif',
    'https://media.giphy.com/media/l41lKjeNwxWFmE4AU/giphy.gif',
    'https://media.giphy.com/media/bl9eEWvVN3GUM/giphy.gif',
    'https://media.giphy.com/media/bA4RSRKwaSMlW/giphy.gif',
    'https://media.giphy.com/media/lGmKzynHWftFm/giphy.gif',
    'https://media.giphy.com/media/XuBJvrKHutnkQ/giphy.gif',
    'https://media.giphy.com/media/6oMKugqovQnjW/giphy.gif',
    'https://media.giphy.com/media/vzAEJjL6CfT32/giphy.gif',
    'https://media.giphy.com/media/qQI16x8tgp7nW/giphy.gif',
    'https://media.giphy.com/media/7ju6mxgTagFna/giphy.gif'
  ], negative = [
    'https://media.giphy.com/media/JYZ397GsFrFtu/giphy.gif',
    'https://media.giphy.com/media/9V0fLlhmqzhtK/giphy.gif',
    'https://media.giphy.com/media/S25yCLKmbZOhi/giphy.gif',
    'https://media.giphy.com/media/3X4BW3LMHiMIU/giphy.gif',
    'https://media.giphy.com/media/YlXwo1Q3OCbrW/giphy.gif',
    'https://media.giphy.com/media/uWPGqy4rkgllS/giphy.gif',
    'https://media.giphy.com/media/u0UbkVBKbzFIs/giphy.gif',
    'https://media.giphy.com/media/Rt0vHXcmEbnMs/giphy.gif',
    ''
  ], maybe = [
    'http://media.giphy.com/media/gZGlQX3wWAV1u/giphy.gif',
    'http://www.pixelsham.com/wp-content/uploads/2013/07/maybe.gif',
    'http://www.meinwirt.com/webserver/vwvortex/maybe.gif',
    'https://38.media.tumblr.com/02bbfb605fbd12a34c24ca3df9715afd/tumblr_nhmhs9P1WO1tp1ghko2_400.gif',
    'http://www.reactiongifs.com/wp-content/uploads/2013/11/ds.gif',
    'https://media.giphy.com/media/Dh78tzv7OUKDm/giphy.gif',
    'http://i.imgur.com/5PWR2.gif',
    'https://supernaturalsnark.files.wordpress.com/2013/02/call-me-maybe.gif',
    'http://core0.staticworld.net/images/article/2014/11/2-oops-100529008-large.idge.gif',
    'https://33.media.tumblr.com/fabffa395b103770ef3c61369c947629/tumblr_nsxwerKth31udqk24o1_500.gif'
  ];

  var results = [
    createResultObj('It is certain!', positive),
    createResultObj('It is decidedly so.', positive),
    createResultObj('Without a doubt!', positive),
    createResultObj('Yes, definitely!', positive),
    createResultObj('You may rely on it.', positive),
    createResultObj('As I see it, yes.', positive),
    createResultObj('Most likely.', positive),
    createResultObj('Outlook good.', positive),
    createResultObj('Yes!!', positive),
    createResultObj('Signs point to yes.', positive),
    createResultObj('Reply hazy try again.', maybe),
    createResultObj('Ask again later.', maybe),
    createResultObj('Better not tell you now.', maybe),
    createResultObj('Cannot predict now.', maybe),
    createResultObj('Concentrate and ask again.', maybe),
    createResultObj('Don\'t count on it.', negative),
    createResultObj('My reply is no.', negative),
    createResultObj('My sources say no.', negative),
    createResultObj('Outlook not so good.', negative),
    createResultObj('Very doubtful.', negative)
  ];


  Template.display.helpers({
    message: function () {
      return Session.get('message');
    }
  });

  Template.display.events({
    'click .button': function () {
      roll();
    }
  });

  Template.display.rendered = roll;
}
