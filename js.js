function startUp(){
	document.getElementById('textarea').readOnly=true;
	
	levelInit();
	playerAnimation();
	fpsTimer();
	createHistory();
	
	c = document.getElementById('canvas');
	canvas = c.getContext('2d');
	
	styInverval=setInterval(function(){
		if (stopped_typing<12){
			stopped_typing++;
		}
		if (stopped_typing>=12){
			stopped_typing=0;
			if (player.speed!=0){
				player.speed-=0.25;
				player.image_speed-=0.0125;
				if (player.speed==0){
					level_10bonus=0;
					background.moving=0;
				}
				
				//Enemy code here
				if (level==1){
					if (enemy_bike_amount>0){
						for (var e=1;e<=enemy_bike_amount;e++){
							enemy_bike[e].speed+=0.0125;
						}
					}
				}
				if (level==2){
					if (enemy_horse_amount>0){
						for (var e=1;e<=enemy_horse_amount;e++){
							enemy_horse[e].speed+=0.0125;
						}
					}
				}
				if (level==3){
					if (enemy_cheetah_amount>0){
						for (var e=1;e<=enemy_cheetah_amount;e++){
							enemy_cheetah[e].speed+=0.0125;
						}
					}
				}
				if (level==4){
					if (enemy_snowmonster_amount>0){
						for (var e=1;e<=enemy_snowmonster_amount;e++){
							enemy_snowmonster[e].speed+=0.0125;
						}
					}
				}
				if (level==5){
					if (enemy_fantasymonster_amount>0){
						for (var e=1;e<=enemy_fantasymonster_amount;e++){
							enemy_fantasymonster[e].speed+=0.0125;
						}
					}
				}
				if (level==6){
					if (enemy_skeleton_amount>0){
						for (var e=1;e<=enemy_skeleton_amount;e++){
							enemy_skeleton[e].speed+=0.0125;
						}
					}
				}
				if (level==7){
					if (enemy_angel_amount>0){
						for (var e=1;e<=enemy_angel_amount;e++){
							enemy_angel[e].speed+=0.0125;
						}
					}
				}
			}
		}
	},100);
	
	$('#console').fadeIn(500);
}

function drawCanvasContent(){
	if (background.loaded==1 && player.image_loaded==1 && playButton.loaded==1){
		
		canvas.clearRect(0,0,800,400);

		if (background.xpos<=-2400){
			canvas.drawImage(background.image[level],background.xpos+3200,0,3200,400);
		}
		if (background.xpos<=-3200){
			background.xpos=0;
		}
		canvas.drawImage(background.image[level],background.xpos,0,3200,400);
		
		if (player.speed>0){
			canvas.drawImage(player.frameRun[player.image_frame],288,128,192,256);
		}
		else{
			canvas.drawImage(player.frameStand[player.image_frame],288,128,192,256);
		}
		
		if (enemy_bike_amount>0){
			for (var e=1;e<=enemy_bike_amount;e++){
				if (Math.round(enemy_bike[e].xpos) <= 800){
					canvas.drawImage(enemy_bike[e].frame[enemy_bike[e].image_frame],Math.round(enemy_bike[e].xpos),150,288,256);
				}
			}
		}
		
		if (enemy_horse_amount>0){
			for (var e=1;e<=enemy_horse_amount;e++){
				if (Math.round(enemy_horse[e].xpos) <= 800){
					canvas.drawImage(enemy_horse[e].frame[enemy_horse[e].image_frame],Math.round(enemy_horse[e].xpos),75,475,316);
				}
			}
		}
		
		if (enemy_cheetah_amount>0){
			for (var e=1;e<=enemy_cheetah_amount;e++){
				if (Math.round(enemy_cheetah[e].xpos) <= 800){
					canvas.drawImage(enemy_cheetah[e].frame[enemy_cheetah[e].image_frame],Math.round(enemy_cheetah[e].xpos),128,384,256);
				}
			}
		}
		
		if (enemy_snowmonster_amount>0){
			for (var e=1;e<=enemy_snowmonster_amount;e++){
				if (Math.round(enemy_snowmonster[e].xpos) <= 800){
					canvas.drawImage(enemy_snowmonster[e].frame[enemy_snowmonster[e].image_frame],Math.round(enemy_snowmonster[e].xpos),0,400,400);
				}
			}
		}
		
		if (enemy_fantasymonster_amount>0){
			for (var e=1;e<=enemy_fantasymonster_amount;e++){
				if (Math.round(enemy_fantasymonster[e].xpos) <= 800){
					canvas.drawImage(enemy_fantasymonster[e].frame[enemy_fantasymonster[e].image_frame],Math.round(enemy_fantasymonster[e].xpos),150,384,256);
				}
			}
		}
		
		if (enemy_skeleton_amount>0){
			for (var e=1;e<=enemy_skeleton_amount;e++){
				if (Math.round(enemy_skeleton[e].xpos) <= 800){
					canvas.drawImage(enemy_skeleton[e].frame[enemy_skeleton[e].image_frame],Math.round(enemy_skeleton[e].xpos),96,240,320);
				}
			}
		}
		
		if (enemy_angel_amount>0){
			for (var e=1;e<=enemy_angel_amount;e++){
				if (Math.round(enemy_angel[e].xpos) <= 800){
					canvas.drawImage(enemy_angel[e].frame[enemy_angel[e].image_frame],Math.round(enemy_angel[e].xpos),64,240,320);
				}
			}
		}
		
		if (bonus25_amount>0){
			for (var b=1;b<=bonus25_amount;b++){
				if (bonus25[b].taken==0){
					canvas.drawImage(bonus25[b].frame[bonus25[b].image_frame],Math.round(bonus25[b].xpos),200,128,128);
				}
			}
		}
		
		if (bonus100_amount>0){
			for (var b=1;b<=bonus100_amount;b++){
				if (bonus100[b].taken==0){
					canvas.drawImage(bonus100[b].frame[bonus100[b].image_frame],Math.round(bonus100[b].xpos),200,128,128);
				}
			}
		}
		
		if (bonus250_amount>0){
			for (var b=1;b<=bonus250_amount;b++){
				if (bonus250[b].taken==0){
					canvas.drawImage(bonus250[b].frame[bonus250[b].image_frame],Math.round(bonus250[b].xpos),200,128,128);
				}
			}
		}
		
		if (bonus500_amount>0){
			for (var b=1;b<=bonus500_amount;b++){
				if (bonus500[b].taken==0){
					canvas.drawImage(bonus500[b].frame[bonus500[b].image_frame],Math.round(bonus500[b].xpos),200,128,128);
				}
			}
		}
		
		if (playButton.playing==0){
			canvas.drawImage(playButton.playImage,0,0,800,400);
		}
		else if (playButton.hovered==1){
			canvas.drawImage(playButton.pauseImage,0,0,800,400);
		}
	
	
		var gradient;
		
		//Alert Messages
		if (msg.text != ''){
			canvas.font='24px Arial';
			gradient=canvas.createLinearGradient(0,48,0,64);
			gradient.addColorStop('0',msg.color1);
			gradient.addColorStop('1',msg.color2);
			canvas.fillStyle=gradient;
			canvas.fillText(msg.text,400-(msg.text.length*6),64);
		}
		
		
		//Stats
		canvas.font='32px Arial Bold';
		
		gradient=canvas.createLinearGradient(0,8,0,40);
		gradient.addColorStop('0','red');
		gradient.addColorStop('1','darkred');
		canvas.fillStyle=gradient;
		canvas.fillText('Score:  '+score,8,32);

		gradient=canvas.createLinearGradient(0,48,0,80);
		gradient.addColorStop('0','blue');
		gradient.addColorStop('1','darkblue');
		canvas.fillStyle=gradient;
		canvas.fillText('Words:  '+totalWords,8,72);
		
		canvas.globalAlpha=0.5;
		
		canvas.fillStyle='black';
		canvas.fillRect(536,8,256,40);
		
		gradient=canvas.createLinearGradient(0,8,0,40);
		gradient.addColorStop('0','yellow');
		gradient.addColorStop('1','olive');
		canvas.fillStyle=gradient;
		if (level_words-level_start_words > 0){
			canvas.fillRect(536,8,Math.round(((level_words - level_start_words)/(level_word_goal - level_start_words))*256),40);
		}
		
		canvas.globalAlpha=1;
		
		canvas.strokeStyle='black';
		canvas.strokeRect(536,8,256,40);
		canvas.strokeRect(536,8,256,40);
		canvas.strokeRect(536,8,256,40);
		canvas.strokeRect(536,8,256,40);
		canvas.strokeRect(536,8,256,40);
	}
	if (big_message!=''){
		canvas.globalAlpha=0.75;
		canvas.fillStyle='black';
		canvas.fillRect(0,0,800,400);
		canvas.globalAlpha=1;
		canvas.font='18px Arial';
		canvas.fillStyle='white';
		canvas.fillText(big_message,8,390);
	}
}

function fpsTimer(){
	var timeout=setTimeout(function(){drawCanvasContent(); fpsTimer(); clearTimeout(timeout);},1);
}

function updateText(){
	if (localStorage.getItem('nanogameText_'+localStorage.getItem('nanogameCount')) != $('#textarea').val()){
		localStorage.setItem('nanogameText_'+localStorage.getItem('nanogameCount'),$('#textarea').val());
	}
	
	if ($('#textarea').val()==''){
		totalWords=0;
		level_words=0;
	}
	
	totalWords=$('#textarea').val().match(/\s/g).length;
	level_words=totalWords;
	
	if (level_words>=level_word_goal)
	{
		document.getElementById('snd_winlevel').play();
		gamePause();
		
		if (level==5){
			document.getElementById('textarea').readOnly=true;
			big_message='You wrote 1,666 words and reached the NaNoWriMo daily word goal! Way to go!';
			click_to_continue=true;
		}
		
		if (level==7){
			document.getElementById('textarea').readOnly=true;
			big_message='You wrote 3,333 words and reached double the NaNoWriMo daily word goal! Way to go!!!';
			click_to_exit=true;
		}
		
		if (level!=7){
			next_level();
		}
	}
	
	if (level_last_words<level_words){
		level_last_words=level_words;
		level_10bonus++;
		level_25bonus++;
		level_100bonus++;
		level_250bonus++;
		level_500bonus++;
	}

	if (level_10bonus==10){
		level_10bonus=0;
		player.speed+=0.25;
		player.image_speed+=0.0125;
		score+=5;

		if (background.moving==0){
			background.moving=1;
			backgroundAnimation();
		}
		
		//Enemy code here
		if (level==1){
			if (enemy_bike_amount>0){
				for (var e=1;e<=enemy_bike_amount;e++){
					if(enemy_bike[e].speed!=0){
						enemy_bike[e].speed-=0.0125;
					}
				}
			}
		}
		if (level==2){
			if (enemy_horse_amount>0){
				for (var e=1;e<=enemy_horse_amount;e++){
					if(enemy_horse[e].speed!=0){
						enemy_horse[e].speed-=0.0125;
					}
				}
			}
		}
		if (level==3){
			if (enemy_cheetah_amount>0){
				for (var e=1;e<=enemy_cheetah_amount;e++){
					if(enemy_cheetah[e].speed!=0){
						enemy_cheetah[e].speed-=0.0125;
					}
				}
			}
		}
		if (level==4){
			if (enemy_snowmonster_amount>0){
				for (var e=1;e<=enemy_snowmonster_amount;e++){
					if(enemy_snowmonster[e].speed!=0){
						enemy_snowmonster[e].speed-=0.0125;
					}
				}
			}
		}
		if (level==5){
			if (enemy_fantasymonster_amount>0){
				for (var e=1;e<=enemy_fantasymonster_amount;e++){
					if(enemy_fantasymonster[e].speed!=0){
						enemy_fantasymonster[e].speed-=0.0125;
					}
				}
			}
		}
		if (level==6){
			if (enemy_skeleton_amount>0){
				for (var e=1;e<=enemy_skeleton_amount;e++){
					if(enemy_skeleton[e].speed!=0){
						enemy_skeleton[e].speed-=0.0125;
					}
				}
			}
		}
		if (level==7){
			if (enemy_angel_amount>0){
				for (var e=1;e<=enemy_angel_amount;e++){
					if(enemy_angel[e].speed!=0){
						enemy_angel[e].speed-=0.0125;
					}
				}
			}
		}
	}
	
	if (level_25bonus==25){
		level_25bonus=0;
		bonus25_amount++;
		bonus25[bonus25_amount]=new Object();
		bonus25[bonus25_amount].taken=0;
		bonus25[bonus25_amount].xpos=800;
		bonus25[bonus25_amount].image_loaded=0;
		bonus25[bonus25_amount].image_frame=0;
		
		bonus25[bonus25_amount].frame = new Array();
		bonus25[bonus25_amount].frame[0] = new Image();
		bonus25[bonus25_amount].frame[1] = new Image();
		bonus25[bonus25_amount].frame[2] = new Image();
		bonus25[bonus25_amount].frame[3] = new Image();
		bonus25[bonus25_amount].frame[4] = new Image();
		bonus25[bonus25_amount].frame[5] = new Image();
		bonus25[bonus25_amount].frame[6] = new Image();
		bonus25[bonus25_amount].frame[7] = new Image();
		bonus25[bonus25_amount].frame[8] = new Image();
		bonus25[bonus25_amount].frame[9] = new Image();
		bonus25[bonus25_amount].frame[10] = new Image();
		bonus25[bonus25_amount].frame[11] = new Image();
		bonus25[bonus25_amount].frame[0].src='gfx/bonus25/0.png';
		bonus25[bonus25_amount].frame[1].src='gfx/bonus25/1.png';
		bonus25[bonus25_amount].frame[2].src='gfx/bonus25/2.png';
		bonus25[bonus25_amount].frame[3].src='gfx/bonus25/3.png';
		bonus25[bonus25_amount].frame[4].src='gfx/bonus25/4.png';
		bonus25[bonus25_amount].frame[5].src='gfx/bonus25/5.png';
		bonus25[bonus25_amount].frame[6].src='gfx/bonus25/6.png';
		bonus25[bonus25_amount].frame[7].src='gfx/bonus25/7.png';
		bonus25[bonus25_amount].frame[8].src='gfx/bonus25/8.png';
		bonus25[bonus25_amount].frame[9].src='gfx/bonus25/9.png';
		bonus25[bonus25_amount].frame[10].src='gfx/bonus25/10.png';
		bonus25[bonus25_amount].frame[11].src='gfx/bonus25/11.png';
		
		bonus25Animation(bonus25_amount);
	}
	
	if (level_100bonus==100){
		level_100bonus=0;
		bonus100_amount++;
		bonus100[bonus100_amount]=new Object();
		bonus100[bonus100_amount].taken=0;
		bonus100[bonus100_amount].xpos=928;
		bonus100[bonus100_amount].image_loaded=0;
		bonus100[bonus100_amount].image_frame=0;
		
		bonus100[bonus100_amount].frame = new Array();
		bonus100[bonus100_amount].frame[0] = new Image();
		bonus100[bonus100_amount].frame[1] = new Image();
		bonus100[bonus100_amount].frame[2] = new Image();
		bonus100[bonus100_amount].frame[3] = new Image();
		bonus100[bonus100_amount].frame[4] = new Image();
		bonus100[bonus100_amount].frame[5] = new Image();
		bonus100[bonus100_amount].frame[6] = new Image();
		bonus100[bonus100_amount].frame[7] = new Image();
		bonus100[bonus100_amount].frame[8] = new Image();
		bonus100[bonus100_amount].frame[9] = new Image();
		bonus100[bonus100_amount].frame[10] = new Image();
		bonus100[bonus100_amount].frame[11] = new Image();
		bonus100[bonus100_amount].frame[0].src='gfx/bonus100/0.png';
		bonus100[bonus100_amount].frame[1].src='gfx/bonus100/1.png';
		bonus100[bonus100_amount].frame[2].src='gfx/bonus100/2.png';
		bonus100[bonus100_amount].frame[3].src='gfx/bonus100/3.png';
		bonus100[bonus100_amount].frame[4].src='gfx/bonus100/4.png';
		bonus100[bonus100_amount].frame[5].src='gfx/bonus100/5.png';
		bonus100[bonus100_amount].frame[6].src='gfx/bonus100/6.png';
		bonus100[bonus100_amount].frame[7].src='gfx/bonus100/7.png';
		bonus100[bonus100_amount].frame[8].src='gfx/bonus100/8.png';
		bonus100[bonus100_amount].frame[9].src='gfx/bonus100/9.png';
		bonus100[bonus100_amount].frame[10].src='gfx/bonus100/10.png';
		bonus100[bonus100_amount].frame[11].src='gfx/bonus100/11.png';
		
		bonus100Animation(bonus100_amount);
		
		
		//Enemy stuff
		document.getElementById('snd_enemy').play();
		
		if(level==1){
			enemy_bike_amount++;
			enemy_bike[enemy_bike_amount]=new Object();
			enemy_bike[enemy_bike_amount].xpos=-287;
			enemy_bike[enemy_bike_amount].speed=0.25;
			enemy_bike[enemy_bike_amount].last_speed=0.25;
			enemy_bike[enemy_bike_amount].image_loaded=0;
			enemy_bike[enemy_bike_amount].image_frame=0;
				
			enemy_bike[enemy_bike_amount].frame = new Array();
			enemy_bike[enemy_bike_amount].frame[0] = new Image();
			enemy_bike[enemy_bike_amount].frame[1] = new Image();
			enemy_bike[enemy_bike_amount].frame[2] = new Image();
			enemy_bike[enemy_bike_amount].frame[3] = new Image();
			enemy_bike[enemy_bike_amount].frame[4] = new Image();
			enemy_bike[enemy_bike_amount].frame[5] = new Image();
			enemy_bike[enemy_bike_amount].frame[6] = new Image();
			enemy_bike[enemy_bike_amount].frame[7] = new Image();
			enemy_bike[enemy_bike_amount].frame[0].src='gfx/bike/0.png';
			enemy_bike[enemy_bike_amount].frame[1].src='gfx/bike/1.png';
			enemy_bike[enemy_bike_amount].frame[2].src='gfx/bike/2.png';
			enemy_bike[enemy_bike_amount].frame[3].src='gfx/bike/3.png';
			enemy_bike[enemy_bike_amount].frame[4].src='gfx/bike/4.png';
			enemy_bike[enemy_bike_amount].frame[5].src='gfx/bike/5.png';
			enemy_bike[enemy_bike_amount].frame[6].src='gfx/bike/6.png';
			enemy_bike[enemy_bike_amount].frame[7].src='gfx/bike/7.png';
				
			enemy_bikeAnimation(enemy_bike_amount);
		}
		if(level==2){
			enemy_horse_amount++;
			enemy_horse[enemy_horse_amount]=new Object();
			enemy_horse[enemy_horse_amount].xpos=-474;
			enemy_horse[enemy_horse_amount].speed=0.3125;
			enemy_horse[enemy_horse_amount].last_speed=0.3125;
			enemy_horse[enemy_horse_amount].image_loaded=0;
			enemy_horse[enemy_horse_amount].image_frame=0;
				
			enemy_horse[enemy_horse_amount].frame = new Array();
			enemy_horse[enemy_horse_amount].frame[0] = new Image();
			enemy_horse[enemy_horse_amount].frame[1] = new Image();
			enemy_horse[enemy_horse_amount].frame[2] = new Image();
			enemy_horse[enemy_horse_amount].frame[3] = new Image();
			enemy_horse[enemy_horse_amount].frame[4] = new Image();
			enemy_horse[enemy_horse_amount].frame[5] = new Image();
			enemy_horse[enemy_horse_amount].frame[6] = new Image();
			enemy_horse[enemy_horse_amount].frame[7] = new Image();
			enemy_horse[enemy_horse_amount].frame[0].src='gfx/horse/0.png';
			enemy_horse[enemy_horse_amount].frame[1].src='gfx/horse/1.png';
			enemy_horse[enemy_horse_amount].frame[2].src='gfx/horse/2.png';
			enemy_horse[enemy_horse_amount].frame[3].src='gfx/horse/3.png';
			enemy_horse[enemy_horse_amount].frame[4].src='gfx/horse/4.png';
			enemy_horse[enemy_horse_amount].frame[5].src='gfx/horse/5.png';
			enemy_horse[enemy_horse_amount].frame[6].src='gfx/horse/6.png';
			enemy_horse[enemy_horse_amount].frame[7].src='gfx/horse/7.png';
				
			enemy_horseAnimation(enemy_horse_amount);
		}
		if(level==3){
			enemy_cheetah_amount++;
			enemy_cheetah[enemy_cheetah_amount]=new Object();
			enemy_cheetah[enemy_cheetah_amount].xpos=-383;
			enemy_cheetah[enemy_cheetah_amount].speed=0.375;
			enemy_cheetah[enemy_cheetah_amount].last_speed=0.375;
			enemy_cheetah[enemy_cheetah_amount].image_loaded=0;
			enemy_cheetah[enemy_cheetah_amount].image_frame=0;
				
			enemy_cheetah[enemy_cheetah_amount].frame = new Array();
			enemy_cheetah[enemy_cheetah_amount].frame[0] = new Image();
			enemy_cheetah[enemy_cheetah_amount].frame[1] = new Image();
			enemy_cheetah[enemy_cheetah_amount].frame[2] = new Image();
			enemy_cheetah[enemy_cheetah_amount].frame[3] = new Image();
			enemy_cheetah[enemy_cheetah_amount].frame[4] = new Image();
			enemy_cheetah[enemy_cheetah_amount].frame[5] = new Image();
			enemy_cheetah[enemy_cheetah_amount].frame[0].src='gfx/cheetah/0.png';
			enemy_cheetah[enemy_cheetah_amount].frame[1].src='gfx/cheetah/1.png';
			enemy_cheetah[enemy_cheetah_amount].frame[2].src='gfx/cheetah/2.png';
			enemy_cheetah[enemy_cheetah_amount].frame[3].src='gfx/cheetah/3.png';
			enemy_cheetah[enemy_cheetah_amount].frame[4].src='gfx/cheetah/4.png';
			enemy_cheetah[enemy_cheetah_amount].frame[5].src='gfx/cheetah/5.png';
				
			enemy_cheetahAnimation(enemy_cheetah_amount);
		}
		if(level==4){
			enemy_snowmonster_amount++;
			enemy_snowmonster[enemy_snowmonster_amount]=new Object();
			enemy_snowmonster[enemy_snowmonster_amount].xpos=-399;
			enemy_snowmonster[enemy_snowmonster_amount].speed=0.4375;
			enemy_snowmonster[enemy_snowmonster_amount].last_speed=0.4375;
			enemy_snowmonster[enemy_snowmonster_amount].image_loaded=0;
			enemy_snowmonster[enemy_snowmonster_amount].image_frame=0;
				
			enemy_snowmonster[enemy_snowmonster_amount].frame = new Array();
			enemy_snowmonster[enemy_snowmonster_amount].frame[0] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[1] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[2] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[3] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[4] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[5] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[6] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[7] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[8] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[9] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[10] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[11] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[12] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[13] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[14] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[15] = new Image();
			enemy_snowmonster[enemy_snowmonster_amount].frame[0].src='gfx/snowmonster/0.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[1].src='gfx/snowmonster/0.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[2].src='gfx/snowmonster/1.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[3].src='gfx/snowmonster/1.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[4].src='gfx/snowmonster/2.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[5].src='gfx/snowmonster/2.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[6].src='gfx/snowmonster/3.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[7].src='gfx/snowmonster/3.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[8].src='gfx/snowmonster/4.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[9].src='gfx/snowmonster/4.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[10].src='gfx/snowmonster/5.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[11].src='gfx/snowmonster/5.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[12].src='gfx/snowmonster/6.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[13].src='gfx/snowmonster/6.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[14].src='gfx/snowmonster/7.png';
			enemy_snowmonster[enemy_snowmonster_amount].frame[15].src='gfx/snowmonster/7.png';
				
			enemy_snowmonsterAnimation(enemy_snowmonster_amount);
		}
		if(level==5){
			enemy_fantasymonster_amount++;
			enemy_fantasymonster[enemy_fantasymonster_amount]=new Object();
			enemy_fantasymonster[enemy_fantasymonster_amount].xpos=-383;
			enemy_fantasymonster[enemy_fantasymonster_amount].speed=0.5;
			enemy_fantasymonster[enemy_fantasymonster_amount].last_speed=0.5;
			enemy_fantasymonster[enemy_fantasymonster_amount].image_loaded=0;
			enemy_fantasymonster[enemy_fantasymonster_amount].image_frame=0;
				
			enemy_fantasymonster[enemy_fantasymonster_amount].frame = new Array();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[0] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[1] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[2] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[3] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[4] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[5] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[6] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[7] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[8] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[9] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[10] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[11] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[12] = new Image();
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[0].src='gfx/fantasymonster/0.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[1].src='gfx/fantasymonster/1.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[2].src='gfx/fantasymonster/2.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[3].src='gfx/fantasymonster/3.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[4].src='gfx/fantasymonster/4.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[5].src='gfx/fantasymonster/5.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[6].src='gfx/fantasymonster/6.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[7].src='gfx/fantasymonster/7.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[8].src='gfx/fantasymonster/8.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[9].src='gfx/fantasymonster/9.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[10].src='gfx/fantasymonster/10.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[11].src='gfx/fantasymonster/11.png';
			enemy_fantasymonster[enemy_fantasymonster_amount].frame[12].src='gfx/fantasymonster/12.png';
				
			enemy_fantasymonsterAnimation(enemy_fantasymonster_amount);
		}
		if(level==6){
			enemy_skeleton_amount++;
			enemy_skeleton[enemy_skeleton_amount]=new Object();
			enemy_skeleton[enemy_skeleton_amount].xpos=-239;
			enemy_skeleton[enemy_skeleton_amount].speed=0.5625;
			enemy_skeleton[enemy_skeleton_amount].last_speed=0.5625;
			enemy_skeleton[enemy_skeleton_amount].image_loaded=0;
			enemy_skeleton[enemy_skeleton_amount].image_frame=0;
				
			enemy_skeleton[enemy_skeleton_amount].frame = new Array();
			enemy_skeleton[enemy_skeleton_amount].frame[0] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[1] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[2] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[3] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[4] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[5] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[6] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[7] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[8] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[9] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[10] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[11] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[12] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[13] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[14] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[15] = new Image();
			enemy_skeleton[enemy_skeleton_amount].frame[0].src='gfx/skeleton/0.png';
			enemy_skeleton[enemy_skeleton_amount].frame[1].src='gfx/skeleton/0.png';
			enemy_skeleton[enemy_skeleton_amount].frame[2].src='gfx/skeleton/1.png';
			enemy_skeleton[enemy_skeleton_amount].frame[3].src='gfx/skeleton/1.png';
			enemy_skeleton[enemy_skeleton_amount].frame[4].src='gfx/skeleton/2.png';
			enemy_skeleton[enemy_skeleton_amount].frame[5].src='gfx/skeleton/2.png';
			enemy_skeleton[enemy_skeleton_amount].frame[6].src='gfx/skeleton/3.png';
			enemy_skeleton[enemy_skeleton_amount].frame[7].src='gfx/skeleton/3.png';
			enemy_skeleton[enemy_skeleton_amount].frame[8].src='gfx/skeleton/4.png';
			enemy_skeleton[enemy_skeleton_amount].frame[9].src='gfx/skeleton/4.png';
			enemy_skeleton[enemy_skeleton_amount].frame[10].src='gfx/skeleton/5.png';
			enemy_skeleton[enemy_skeleton_amount].frame[11].src='gfx/skeleton/5.png';
			enemy_skeleton[enemy_skeleton_amount].frame[12].src='gfx/skeleton/6.png';
			enemy_skeleton[enemy_skeleton_amount].frame[13].src='gfx/skeleton/6.png';
			enemy_skeleton[enemy_skeleton_amount].frame[14].src='gfx/skeleton/7.png';
			enemy_skeleton[enemy_skeleton_amount].frame[15].src='gfx/skeleton/7.png';
				
			enemy_skeletonAnimation(enemy_skeleton_amount);
		}
		if(level==7){
			enemy_angel_amount++;
			enemy_angel[enemy_angel_amount]=new Object();
			enemy_angel[enemy_angel_amount].xpos=-239;
			enemy_angel[enemy_angel_amount].speed=0.625;
			enemy_angel[enemy_angel_amount].last_speed=0.625;
			enemy_angel[enemy_angel_amount].image_loaded=0;
			enemy_angel[enemy_angel_amount].image_frame=0;
				
			enemy_angel[enemy_angel_amount].frame = new Array();
			enemy_angel[enemy_angel_amount].frame[0] = new Image();
			enemy_angel[enemy_angel_amount].frame[1] = new Image();
			enemy_angel[enemy_angel_amount].frame[2] = new Image();
			enemy_angel[enemy_angel_amount].frame[3] = new Image();
			enemy_angel[enemy_angel_amount].frame[4] = new Image();
			enemy_angel[enemy_angel_amount].frame[5] = new Image();
			enemy_angel[enemy_angel_amount].frame[6] = new Image();
			enemy_angel[enemy_angel_amount].frame[7] = new Image();
			enemy_angel[enemy_angel_amount].frame[8] = new Image();
			enemy_angel[enemy_angel_amount].frame[9] = new Image();
			enemy_angel[enemy_angel_amount].frame[10] = new Image();
			enemy_angel[enemy_angel_amount].frame[11] = new Image();
			enemy_angel[enemy_angel_amount].frame[12] = new Image();
			enemy_angel[enemy_angel_amount].frame[13] = new Image();
			enemy_angel[enemy_angel_amount].frame[14] = new Image();
			enemy_angel[enemy_angel_amount].frame[15] = new Image();
			enemy_angel[enemy_angel_amount].frame[0].src='gfx/angel/0.png';
			enemy_angel[enemy_angel_amount].frame[1].src='gfx/angel/0.png';
			enemy_angel[enemy_angel_amount].frame[2].src='gfx/angel/1.png';
			enemy_angel[enemy_angel_amount].frame[3].src='gfx/angel/1.png';
			enemy_angel[enemy_angel_amount].frame[4].src='gfx/angel/2.png';
			enemy_angel[enemy_angel_amount].frame[5].src='gfx/angel/2.png';
			enemy_angel[enemy_angel_amount].frame[6].src='gfx/angel/3.png';
			enemy_angel[enemy_angel_amount].frame[7].src='gfx/angel/3.png';
			enemy_angel[enemy_angel_amount].frame[8].src='gfx/angel/4.png';
			enemy_angel[enemy_angel_amount].frame[9].src='gfx/angel/4.png';
			enemy_angel[enemy_angel_amount].frame[10].src='gfx/angel/5.png';
			enemy_angel[enemy_angel_amount].frame[11].src='gfx/angel/5.png';
			enemy_angel[enemy_angel_amount].frame[12].src='gfx/angel/6.png';
			enemy_angel[enemy_angel_amount].frame[13].src='gfx/angel/6.png';
			enemy_angel[enemy_angel_amount].frame[14].src='gfx/angel/7.png';
			enemy_angel[enemy_angel_amount].frame[15].src='gfx/angel/7.png';
				
			enemy_angelAnimation(enemy_angel_amount);
		}
	}
	
	if (level_250bonus==250){
		level_250bonus=0;
		bonus250_amount++;
		bonus250[bonus250_amount]=new Object();
		bonus250[bonus250_amount].taken=0;
		bonus250[bonus250_amount].xpos=1056;
		bonus250[bonus250_amount].image_loaded=0;
		bonus250[bonus250_amount].image_frame=0;
		
		bonus250[bonus250_amount].frame = new Array();
		bonus250[bonus250_amount].frame[0] = new Image();
		bonus250[bonus250_amount].frame[1] = new Image();
		bonus250[bonus250_amount].frame[2] = new Image();
		bonus250[bonus250_amount].frame[3] = new Image();
		bonus250[bonus250_amount].frame[4] = new Image();
		bonus250[bonus250_amount].frame[5] = new Image();
		bonus250[bonus250_amount].frame[6] = new Image();
		bonus250[bonus250_amount].frame[7] = new Image();
		bonus250[bonus250_amount].frame[8] = new Image();
		bonus250[bonus250_amount].frame[9] = new Image();
		bonus250[bonus250_amount].frame[10] = new Image();
		bonus250[bonus250_amount].frame[11] = new Image();
		bonus250[bonus250_amount].frame[0].src='gfx/bonus250/0.png';
		bonus250[bonus250_amount].frame[1].src='gfx/bonus250/1.png';
		bonus250[bonus250_amount].frame[2].src='gfx/bonus250/2.png';
		bonus250[bonus250_amount].frame[3].src='gfx/bonus250/3.png';
		bonus250[bonus250_amount].frame[4].src='gfx/bonus250/4.png';
		bonus250[bonus250_amount].frame[5].src='gfx/bonus250/5.png';
		bonus250[bonus250_amount].frame[6].src='gfx/bonus250/6.png';
		bonus250[bonus250_amount].frame[7].src='gfx/bonus250/7.png';
		bonus250[bonus250_amount].frame[8].src='gfx/bonus250/8.png';
		bonus250[bonus250_amount].frame[9].src='gfx/bonus250/9.png';
		bonus250[bonus250_amount].frame[10].src='gfx/bonus250/10.png';
		bonus250[bonus250_amount].frame[11].src='gfx/bonus250/11.png';
		
		bonus250Animation(bonus250_amount);
	}
	
	if (level_500bonus==500){
		level_500bonus=0;
		bonus500_amount++;
		bonus500[bonus500_amount]=new Object();
		bonus500[bonus500_amount].taken=0;
		bonus500[bonus500_amount].xpos=1184;
		bonus500[bonus500_amount].image_loaded=0;
		bonus500[bonus500_amount].image_frame=0;
		
		bonus500[bonus500_amount].frame = new Array();
		bonus500[bonus500_amount].frame[0] = new Image();
		bonus500[bonus500_amount].frame[1] = new Image();
		bonus500[bonus500_amount].frame[2] = new Image();
		bonus500[bonus500_amount].frame[3] = new Image();
		bonus500[bonus500_amount].frame[4] = new Image();
		bonus500[bonus500_amount].frame[5] = new Image();
		bonus500[bonus500_amount].frame[6] = new Image();
		bonus500[bonus500_amount].frame[7] = new Image();
		bonus500[bonus500_amount].frame[8] = new Image();
		bonus500[bonus500_amount].frame[9] = new Image();
		bonus500[bonus500_amount].frame[10] = new Image();
		bonus500[bonus500_amount].frame[11] = new Image();
		bonus500[bonus500_amount].frame[0].src='gfx/bonus500/0.png';
		bonus500[bonus500_amount].frame[1].src='gfx/bonus500/1.png';
		bonus500[bonus500_amount].frame[2].src='gfx/bonus500/2.png';
		bonus500[bonus500_amount].frame[3].src='gfx/bonus500/3.png';
		bonus500[bonus500_amount].frame[4].src='gfx/bonus500/4.png';
		bonus500[bonus500_amount].frame[5].src='gfx/bonus500/5.png';
		bonus500[bonus500_amount].frame[6].src='gfx/bonus500/6.png';
		bonus500[bonus500_amount].frame[7].src='gfx/bonus500/7.png';
		bonus500[bonus500_amount].frame[8].src='gfx/bonus500/8.png';
		bonus500[bonus500_amount].frame[9].src='gfx/bonus500/9.png';
		bonus500[bonus500_amount].frame[10].src='gfx/bonus500/10.png';
		bonus500[bonus500_amount].frame[11].src='gfx/bonus500/11.png';
		
		bonus500Animation(bonus500_amount);
	}
	
	fpsTimer();
}

function levelInit(){
	if (level==1){
		level_words=0;
		level_start_words=0;
		level_word_goal=111;
	}
	if (level==2){
		level_words=0;
		level_start_words=111;
		level_word_goal=333;
	}
	if (level==3){
		level_words=0;
		level_start_words=333;
		level_word_goal=666;
	}
	if (level==4){
		level_words=0;
		level_start_words=666;
		level_word_goal=1100;
	}
	if (level==5){
		level_words=0;
		level_start_words=1100;
		level_word_goal=1666;
	}
	if (level==6){
		level_words=0;
		level_start_words=1666;
		level_word_goal=2332;
	}
	if (level==7){
		level_words=0;
		level_start_words=2332;
		level_word_goal=3333;
	}
}

function next_level(){
	if (level==1){
		if (enemy_bike_amount>0){
			for (var e=1;e<=enemy_bike_amount;e++){
				enemy_bike[e]=null;
			}
		}
		enemy_bike_amount=0;
	}
	if (level==2){
		if (enemy_horse_amount>0){
			for (var e=1;e<=enemy_horse_amount;e++){
				enemy_horse[e]=null;
			}
		}
		enemy_horse_amount=0;
	}
	if (level==3){
		if (enemy_cheetah_amount>0){
			for (var e=1;e<=enemy_cheetah_amount;e++){
				enemy_cheetah[e]=null;
			}
		}
		enemy_cheetah_amount=0;
	}
	if (level==4){
		if (enemy_snowmonster_amount>0){
			for (var e=1;e<=enemy_snowmonster_amount;e++){
				enemy_snowmonster[e]=null;
			}
		}
		enemy_snowmonster_amount=0;
	}
	if (level==5){
		if (enemy_fantasymonster_amount>0){
			for (var e=1;e<=enemy_fantasymonster_amount;e++){
				enemy_fantasymonster[e]=null;
			}
		}
		enemy_fantasymonster_amount=0;
	}
	if (level==6){
		if (enemy_skeleton_amount>0){
			for (var e=1;e<=enemy_skeleton_amount;e++){
				enemy_skeleton[e]=null;
			}
		}
		enemy_skeleton_amount=0;
	}
	if (level==7){
		if (enemy_angel_amount>0){
			for (var e=1;e<=enemy_angel_amount;e++){
				enemy_angel[e]=null;
			}
		}
		enemy_angel_amount=0;
	}

	enemy_lead=0;
	stopped_typing=0;
	started_typing=0;
	level++;
	levelInit();
}

function backgroundAnimation(){
	if (player.speed>0){
		var timeout=setTimeout(function(){background.xpos-=player.speed; backgroundAnimation(); clearTimeout(timeout);},30);
	}
}

function playerAnimation(){
	if (player.speed==0){
		player.image_frame_amount=11;
		if (player.image_frame>=player.image_frame_amount){
			player.image_frame=0;
		}
		var timeout=setTimeout(function(){player.image_frame++; playerAnimation(); clearTimeout(timeout);},60);
	}
	if (player.speed>0){
		player.image_frame_amount=7;
		if (player.image_frame>=player.image_frame_amount){
			player.image_frame=0;
		}
		var timeout2=setTimeout(function(){player.image_frame++; playerAnimation(); clearTimeout(timeout2);},Math.round(30/player.image_speed));
	}
}

function enemy_bikeAnimation(id){
	enemy_bike[id].image_frame_amount=7;
	if (enemy_bike[id].image_frame>=enemy_bike[id].image_frame_amount){
		enemy_bike[id].image_frame=0;
	}
	var timeout=setTimeout(function(){if(playButton.playing==1){if(enemy_bike[id].speed==0){enemy_bike[id].speed=enemy_bike[id].last_speed;} enemy_bike[id].image_frame++; enemy_bike[id].xpos+=enemy_bike[id].speed; enemy_lead=Math.round(enemy_bike[id].xpos) + 232; if(enemy_bike[id].speed==0){enemy_bike[id].speed=enemy_bike[id].last_speed;}}else{if(enemy_bike[id].speed!=0){enemy_bike[id].last_speed=enemy_bike[id].speed;} enemy_bike[id].speed=0;} enemy_bikeAnimation(id); clearTimeout(timeout);},30);
}

function enemy_horseAnimation(id){
	enemy_horse[id].image_frame_amount=7;
	if (enemy_horse[id].image_frame>=enemy_horse[id].image_frame_amount){
		enemy_horse[id].image_frame=0;
	}
	var timeout=setTimeout(function(){if(playButton.playing==1){if(enemy_horse[id].speed==0){enemy_horse[id].speed=enemy_horse[id].last_speed;} enemy_horse[id].image_frame++; enemy_horse[id].xpos+=enemy_horse[id].speed; enemy_lead=Math.round(enemy_horse[id].xpos) + 315; if(enemy_horse[id].speed==0){enemy_horse[id].speed=enemy_horse[id].last_speed;}}else{if(enemy_horse[id].speed!=0){enemy_horse[id].last_speed=enemy_horse[id].speed;} enemy_horse[id].speed=0;} enemy_horseAnimation(id); clearTimeout(timeout);},30);
}

function enemy_cheetahAnimation(id){
	enemy_cheetah[id].image_frame_amount=5;
	if (enemy_cheetah[id].image_frame>=enemy_cheetah[id].image_frame_amount){
		enemy_cheetah[id].image_frame=0;
	}
	var timeout=setTimeout(function(){if(playButton.playing==1){if(enemy_cheetah[id].speed==0){enemy_cheetah[id].speed=enemy_cheetah[id].last_speed;} enemy_cheetah[id].image_frame++; enemy_cheetah[id].xpos+=enemy_cheetah[id].speed; enemy_lead=Math.round(enemy_cheetah[id].xpos) + 272; if(enemy_cheetah[id].speed==0){enemy_cheetah[id].speed=enemy_cheetah[id].last_speed;}}else{if(enemy_cheetah[id].speed!=0){enemy_cheetah[id].last_speed=enemy_cheetah[id].speed;} enemy_cheetah[id].speed=0;} enemy_cheetahAnimation(id); clearTimeout(timeout);},30);
}

function enemy_snowmonsterAnimation(id){
	enemy_snowmonster[id].image_frame_amount=15;
	if (enemy_snowmonster[id].image_frame>=enemy_snowmonster[id].image_frame_amount){
		enemy_snowmonster[id].image_frame=0;
	}
	var timeout=setTimeout(function(){if(playButton.playing==1){if(enemy_snowmonster[id].speed==0){enemy_snowmonster[id].speed=enemy_snowmonster[id].last_speed;} enemy_snowmonster[id].image_frame++; enemy_snowmonster[id].xpos+=enemy_snowmonster[id].speed; enemy_lead=Math.round(enemy_snowmonster[id].xpos) + 200; if(enemy_snowmonster[id].speed==0){enemy_snowmonster[id].speed=enemy_snowmonster[id].last_speed;}}else{if(enemy_snowmonster[id].speed!=0){enemy_snowmonster[id].last_speed=enemy_snowmonster[id].speed;} enemy_snowmonster[id].speed=0;} enemy_snowmonsterAnimation(id); clearTimeout(timeout);},30);
}

function enemy_fantasymonsterAnimation(id){
	enemy_fantasymonster[id].image_frame_amount=12;
	if (enemy_fantasymonster[id].image_frame>=enemy_fantasymonster[id].image_frame_amount){
		enemy_fantasymonster[id].image_frame=0;
	}
	var timeout=setTimeout(function(){if(playButton.playing==1){if(enemy_fantasymonster[id].speed==0){enemy_fantasymonster[id].speed=enemy_fantasymonster[id].last_speed;} enemy_fantasymonster[id].image_frame++; enemy_fantasymonster[id].xpos+=enemy_fantasymonster[id].speed; enemy_lead=Math.round(enemy_fantasymonster[id].xpos) + 372; if(enemy_fantasymonster[id].speed==0){enemy_fantasymonster[id].speed=enemy_fantasymonster[id].last_speed;}}else{if(enemy_fantasymonster[id].speed!=0){enemy_fantasymonster[id].last_speed=enemy_fantasymonster[id].speed;} enemy_fantasymonster[id].speed=0;} enemy_fantasymonsterAnimation(id); clearTimeout(timeout);},30);
}

function enemy_skeletonAnimation(id){
	enemy_skeleton[id].image_frame_amount=15;
	if (enemy_skeleton[id].image_frame>=enemy_skeleton[id].image_frame_amount){
		enemy_skeleton[id].image_frame=0;
	}
	var timeout=setTimeout(function(){if(playButton.playing==1){if(enemy_skeleton[id].speed==0){enemy_skeleton[id].speed=enemy_skeleton[id].last_speed;} enemy_skeleton[id].image_frame++; enemy_skeleton[id].xpos+=enemy_skeleton[id].speed; enemy_lead=Math.round(enemy_skeleton[id].xpos) + 128; if(enemy_skeleton[id].speed==0){enemy_skeleton[id].speed=enemy_skeleton[id].last_speed;}}else{if(enemy_skeleton[id].speed!=0){enemy_skeleton[id].last_speed=enemy_skeleton[id].speed;} enemy_skeleton[id].speed=0;} enemy_skeletonAnimation(id); clearTimeout(timeout);},30);
}

function enemy_angelAnimation(id){
	enemy_angel[id].image_frame_amount=15;
	if (enemy_angel[id].image_frame>=enemy_angel[id].image_frame_amount){
		enemy_angel[id].image_frame=0;
	}
	var timeout=setTimeout(function(){if(playButton.playing==1){if(enemy_angel[id].speed==0){enemy_angel[id].speed=enemy_angel[id].last_speed;} enemy_angel[id].image_frame++; enemy_angel[id].xpos+=enemy_angel[id].speed; enemy_lead=Math.round(enemy_angel[id].xpos) + 200; if(enemy_angel[id].speed==0){enemy_angel[id].speed=enemy_angel[id].last_speed;}}else{if(enemy_angel[id].speed!=0){enemy_angel[id].last_speed=enemy_angel[id].speed;} enemy_angel[id].speed=0;} enemy_angelAnimation(id); clearTimeout(timeout);},30);
}

function bonus25Animation(id){
	if (bonus25[id].image_frame>=11){
		bonus25[id].image_frame=0;
	}
	
	if(bonus25[id].taken==0){
		if(bonus25[id].xpos<=enemy_lead){
			bonus25[id].taken=1;
			document.getElementById('snd_lostbonus').play();
			msg.text='missed!';
			msg.color1='red';
			msg.color2='maroon';
			var alertTimeout2=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout2);},2000);
		}
		if (bonus25[id].xpos<=400){
			bonus25[id].taken=1;
			score+=25;
			document.getElementById('snd_bonus').play();
			msg.text='score +25';
			msg.color1='lime';
			msg.color2='green';
			var alertTimeout=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout);},2000);
		}
		else{
			var timeout=setTimeout(function(){bonus25[id].image_frame++; bonus25[id].xpos-=player.speed; bonus25Animation(id); clearTimeout(timeout);},30);
		}
	}
}

function bonus100Animation(id){
	if (bonus100[id].image_frame>=11){
		bonus100[id].image_frame=0;
	}
	if(bonus100[id].taken==0){
		if(bonus100[id].xpos<=enemy_lead){
			bonus100[id].taken=1;
			document.getElementById('snd_lostbonus').play();
			msg.text='missed!';
			msg.color1='red';
			msg.color2='maroon';
			var alertTimeout2=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout2);},2000);
		}
		if (bonus100[id].xpos<=400){
			bonus100[id].taken=1;
			score+=100;
			document.getElementById('snd_bonus').play();
			msg.text='score +100';
			msg.color1='lime';
			msg.color2='green';
			var alertTimeout=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout);},2000);
		}
		else{
			var timeout=setTimeout(function(){bonus100[id].image_frame++; bonus100[id].xpos-=player.speed; bonus100Animation(id); clearTimeout(timeout);},30);
		}
	}
}

function bonus250Animation(id){
	if (bonus250[id].image_frame>=11){
		bonus250[id].image_frame=0;
	}
	if(bonus250[id].taken==0){
		if(bonus250[id].xpos<=enemy_lead){
			bonus250[id].taken=1;
			document.getElementById('snd_lostbonus').play();
			msg.text='missed!';
			msg.color1='red';
			msg.color2='maroon';
			var alertTimeout2=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout2);},2000);
		}
		if (bonus250[id].xpos<=400){
			bonus250[id].taken=1;
			score+=250;
			document.getElementById('snd_bonus').play();
			msg.text='score +250';
			msg.color1='lime';
			msg.color2='green';
			var alertTimeout=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout);},2000);
		}
		else{
			var timeout=setTimeout(function(){bonus250[id].image_frame++; bonus250[id].xpos-=player.speed; bonus250Animation(id); clearTimeout(timeout);},30);
		}
	}
}

function bonus500Animation(id){
	if (bonus500[id].image_frame>=11){
		bonus500[id].image_frame=0;
	}
	if(bonus500[id].taken==0){
		if(bonus500[id].xpos<=enemy_lead){
			bonus500[id].taken=1;
			document.getElementById('snd_lostbonus').play();
			msg.text='missed!';
			msg.color1='red';
			msg.color2='maroon';
			var alertTimeout2=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout2);},2000);
		}
		if (bonus500[id].xpos<=400){
			bonus500[id].taken=1;
			score+=500;
			document.getElementById('snd_bonus').play();
			msg.text='score +500';
			msg.color1='lime';
			msg.color2='green';
			var alertTimeout=setTimeout(function(){msg.text=''; msg.color1=''; msg.color2=''; clearTimeout(alertTimeout);},2000);
		}
		else{
			var timeout=setTimeout(function(){bonus500[id].image_frame++; bonus500[id].xpos-=player.speed; bonus500Animation(id); clearTimeout(timeout);},30);
		}
	}
}

function gamePlay(){
	playButton.playing=1;
	document.getElementById('textarea').readOnly=false;
}

function gamePause(){
	background.moving=0;
	playButton.playing=0;
	player.speed=0;
	player.image_frame=0;
	document.getElementById('textarea').readOnly=true;
}

function createHistory(){
	var hCount=0;
	var text='';
	
	for (x=1;x<JSON.parse(localStorage.getItem('nanogameCount'));x++){
		if (localStorage.getItem('nanogameText_'+JSON.parse(localStorage.getItem('nanogameCount')-x)) != '' && localStorage.getItem('nanogameText_'+JSON.parse(localStorage.getItem('nanogameCount')-x)) != null){
			hCount++;
			text+='<div id="historyPreview'+JSON.parse(localStorage.getItem('nanogameCount')-x)+'" class="history" style="text-align:justify;"><p>'+localStorage.getItem('nanogameText_'+JSON.parse(localStorage.getItem('nanogameCount')-x)).substring(0,200)+'</p><p onclick="$(\'#historyPreview'+JSON.parse(localStorage.getItem('nanogameCount')-x)+'\').hide(); $(\'#historyFull'+JSON.parse(localStorage.getItem('nanogameCount')-x)+'\').show();" style="text-align:right;cursor:pointer;"><b><u>More</u></b></p></div>';
			text+='<div id="historyFull'+JSON.parse(localStorage.getItem('nanogameCount')-x)+'" class="history" style="display:none;text-align:justify;"><p>'+localStorage.getItem('nanogameText_'+JSON.parse(localStorage.getItem('nanogameCount')-x))+'</p><p onclick="$(\'#historyFull'+JSON.parse(localStorage.getItem('nanogameCount')-x)+'\').hide(); $(\'#historyPreview'+JSON.parse(localStorage.getItem('nanogameCount')-x)+'\').show();" style="text-align:right;cursor:pointer;"><b><u>Less</u></b></p></div> <br />';
		}
	}
	
	if (hCount==0){
		text="<p>You have no game history on this browser. Note: History is saved locally on your computer's web browser. Also, your history will be different on Firefox, for example, than it will be on Google Chrome, etc.</p>";
	}
	
	$('#historyDiv').html(text);
}

//player data
player = new Object();
player.image_frame=0;
player.image_frame_amount=11;
player.image_speed=0;
player.image_loaded=0;
player.speed=0;
player.frameStand = new Array();
player.frameStand[0] = new Image();
player.frameStand[1] = new Image();
player.frameStand[2] = new Image();
player.frameStand[3] = new Image();
player.frameStand[4] = new Image();
player.frameStand[5] = new Image();
player.frameStand[6] = new Image();
player.frameStand[7] = new Image();
player.frameStand[8] = new Image();
player.frameStand[9] = new Image();
player.frameStand[10] = new Image();
player.frameStand[11] = new Image();
player.frameStand[0].src='gfx/playerstand/0.png';
player.frameStand[1].src='gfx/playerstand/1.png';
player.frameStand[2].src='gfx/playerstand/2.png';
player.frameStand[3].src='gfx/playerstand/3.png';
player.frameStand[4].src='gfx/playerstand/4.png';
player.frameStand[5].src='gfx/playerstand/5.png';
player.frameStand[6].src='gfx/playerstand/6.png';
player.frameStand[7].src='gfx/playerstand/7.png';
player.frameStand[8].src='gfx/playerstand/8.png';
player.frameStand[9].src='gfx/playerstand/9.png';
player.frameStand[10].src='gfx/playerstand/10.png';
player.frameStand[11].src='gfx/playerstand/11.png';
player.frameRun = new Array();
player.frameRun[0] = new Image();
player.frameRun[1] = new Image();
player.frameRun[2] = new Image();
player.frameRun[3] = new Image();
player.frameRun[4] = new Image();
player.frameRun[5] = new Image();
player.frameRun[6] = new Image();
player.frameRun[7] = new Image();
player.frameRun[0].src='gfx/playerrun/0.png';
player.frameRun[1].src='gfx/playerrun/1.png';
player.frameRun[2].src='gfx/playerrun/2.png';
player.frameRun[3].src='gfx/playerrun/3.png';
player.frameRun[4].src='gfx/playerrun/4.png';
player.frameRun[5].src='gfx/playerrun/5.png';
player.frameRun[6].src='gfx/playerrun/6.png';
player.frameRun[7].src='gfx/playerrun/7.png';
player.frameStand[0].addEventListener('load',function(){player.image_loaded=1;},false);

//enemy data
enemy_lead=0;
enemy_bike = new Array();
enemy_horse = new Array();
enemy_cheetah = new Array();
enemy_snowmonster = new Array();
enemy_fantasymonster = new Array();
enemy_skeleton = new Array();
enemy_angel = new Array();
enemy_bike_amount=0;
enemy_horse_amount=0;
enemy_cheetah_amount=0;
enemy_snowmonster_amount=0;
enemy_fantasymonster_amount=0;
enemy_skeleton_amount=0;
enemy_angel_amount=0;

//background data
background = new Object;
background.loaded=0;
background.xpos=0;
background.moving=0;
background.image = new Array();
background.image[1] = new Image();
background.image[1].src='gfx/bg_level1.png';
background.image[1].addEventListener('load',function(){background.loaded=1;},false);
background.image[2] = new Image();
background.image[2].src='gfx/bg_level2.png';
background.image[2].addEventListener('load',function(){background.loaded=1;},false);
background.image[3] = new Image();
background.image[3].src='gfx/bg_level3.png';
background.image[3].addEventListener('load',function(){background.loaded=1;},false);
background.image[4] = new Image();
background.image[4].src='gfx/bg_level4.png';
background.image[4].addEventListener('load',function(){background.loaded=1;},false);
background.image[5] = new Image();
background.image[5].src='gfx/bg_level5.png';
background.image[5].addEventListener('load',function(){background.loaded=1;},false);
background.image[6] = new Image();
background.image[6].src='gfx/bg_level6.png';
background.image[6].addEventListener('load',function(){background.loaded=1;},false);
background.image[7] = new Image();
background.image[7].src='gfx/bg_level7.png';
background.image[7].addEventListener('load',function(){background.loaded=1;},false);

//play button data
playButton = new Object;
playButton.playing=0;
playButton.hovered=0;
playButton.loaded=0;
playButton.playImage = new Image();
playButton.pauseImage = new Image();
playButton.playImage.src='gfx/playbutton.png';
playButton.pauseImage.src='gfx/pausebutton.png';
playButton.playImage.addEventListener('load',function(){playButton.loaded=1;},false);

//bonus data
bonus25 = new Array();
bonus100 = new Array();
bonus250 = new Array();
bonus500 = new Array();
bonus25_amount=0;
bonus100_amount=0;
bonus250_amount=0;
bonus500_amount=0;

//alert message data
msg = new Object;
msg.text='';
msg.color1='';
msg.color2='';
big_message='';

//stat data
level_words=0;
level_word_goal=0;
level_start_words=0;
level_last_words=0;
level_10bonus=0;
level_25bonus=0;
level_100bonus=0;
level_250bonus=0;
level_500bonus=0;
level=1;
score=0;
totalWords=0;
stopped_typing=0;
click_to_continue=false;
click_to_exit=false;

localStorage.setItem('nanogameCount',JSON.parse(localStorage.getItem('nanogameCount'))+1);

window.addEventListener('load',startUp,false);
window.addEventListener('unload',updateText,false);