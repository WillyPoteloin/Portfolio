$(document).ready(function($) {

	// API Twitter
	// Oauth Twitter
	var cb = new Codebird;
	cb.setConsumerKey('5uXD9AxsmXFsnmyWTLT1g', 'uU8480z98afJO8GTYeSJTI82bg09lYaV0zR0xKfhQ0');
	cb.setToken('102836905-5JQbZM74Q3RWuzgxYsOWv1vegFV8vFFHjoCYetl8', '7nqoOaO4LYYv4jmvhBELqxrdUc2JzKCUrcMY4iOAKU');
	
	// Traitement des tweets
	var filTwitter = function(tweets){
		
		tweets.map(function(tweet){
			// console.log(tweet);
			// traitement des valeurs spéciales du texte (hastags,urls,mentions,...)
			tweet.entities.hashtags.map(function(hash){
				tweet.text = tweet.text.replace('#'+hash.text,'<a target="_blank" href="https://twitter.com/#'+hash.text+'" class="hashtag">#'+hash.text+'</a>');
			});

			tweet.entities.urls.map(function(url){
				tweet.text = tweet.text.replace(url.url,'<a target="_blank" href="'+url.url+'">'+url.url+'</a>');
			});

			tweet.entities.user_mentions.map(function(user){
				tweet.text = tweet.text.replace('@'+user.screen_name,'<a target="_blank" class="mention" href="https://twitter.com/'+user.screen_name+'">@'+user.screen_name+'</a>');
			});

			// on remplit la liste des tweets
			$('.twitter ul').append('<li><img src="'+tweet.user.profile_image_url+'" alt="'+tweet.user.screen_name+'" /><a target="_blank" class="user" href="https://twitter.com/'+tweet.user.screen_name+'">@'+tweet.user.screen_name+'</a><p>'+tweet.text+'</p><div class="clear"></div></li>');
		});

	};

	// Requête Twitter
	var requestTwitter = function() {
		cb.__call(
		'statuses_homeTimeline',
		{'count':3},
		function (tweets) {
			if(tweets !== undefined) {
				filTwitter(tweets);
			}
		});
	}();

	// Génération des pie charts pour l'avancé des connnaisances
	$('.chart').easyPieChart({
		barColor: '#4e79c0',
		trackColor: false,
		scaleColor: false,
		scaleLength: 0,
		size: 70,
		lineWidth: 3,
		lineCap: 'butt',
    });
});