// JavaScript Document
function outerBuilding(prevState){
			tooltip.hide();
			tooltipshape.hide();
			shapeLayer.clear();
			
			//To Overview
			var overviewLayer = new Kinetic.Layer();

			var over = new Kinetic.Rect({
				x: stage.getWidth()*0.8 -40 ,
				y:410,
				width: 200,
				height: 50,
				fill: '#a15217',
				stroke: 'black',
				strokeWidth: 2,
				opacity: 1,
			  });
			  over.setCornerRadius(10);
			  
			  var overviewText = new Kinetic.Text({
				x: stage.getWidth()*0.8 -40 +50,
				y: 415,
				text: 'See Greater\nAtlanta Area',
				fontSize: 20,
				fontFamily: 'Times New Roman',
				fill: 'black',
				align: 'center'
			  });
			
			over.on('click', function(evt) {
				document.body.style.cursor = 'default';
				shapeLayer.remove(over);
				
				change_state(Overview,1);
			});
			
			over.on('mouseover',function(){
				document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			});
			over.on('mouseout',function(){
				document.body.style.cursor = 'default';
				this.transitionTo({
	     
	  
		          opacity: 1,
		          duration: .35,
		        });
			});
			
			overviewText.on('click', function(evt) {
				document.body.style.cursor = 'default';
				shapeLayer.remove(over);
				
				change_state(Overview,1);
			});
			
		
			overviewLayer.add(over);
			overviewLayer.add(overviewText);
			stage.add(overviewLayer);
			
			
			//////////////////////////////////////////North Tower
			
			//Create new Layer
     		var NorthTowerlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var NorthTowerObj = new Image();
		    NorthTowerObj.src = 'content/js/FrontBuildingImages/Front_OmniHotel.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   NorthTowerObj.onload = function() {
          var NorthTower = new Kinetic.Image({
          x: 0,
          y: 0,
          image: NorthTowerObj,
          width: 792, //image width
          height: 648
        });

		NorthTower.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		NorthTower.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			
			document.body.style.cursor = 'default';
		this.transitionTo({
      
	          opacity: 1,
	          duration: .35,
	        });
		});
			NorthTower.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(NorthTower);
				
				change_state(NFloorScreen,1);
			});
		 NorthTower.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("North Tower");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		NorthTower.createImageHitRegion(function() {
          NorthTowerlayer.drawHit();
        });
		
        // Add
        NorthTowerlayer.add(NorthTower);
        stage.add(NorthTowerlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	  
	  		////////////////////////////////////////////SouthTower

						
			//Create new Layer
     		var SouthTowerlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var SouthTowerObj = new Image();
		    SouthTowerObj.src = 'content/js/FrontBuildingImages/Front_CnnCenter.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   SouthTowerObj.onload = function() {
          var SouthTower = new Kinetic.Image({
          x: 0,
          y: 0,
          image: SouthTowerObj,
          width: 792, //image width
          height: 648
        });

		SouthTower.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		SouthTower.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			document.body.style.cursor = 'default';
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
		});
			SouthTower.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(SouthTower);
				
				change_state(SFloorScreen,1);
			});
		
		SouthTower.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("South Tower");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		SouthTower.createImageHitRegion(function() {
          SouthTowerlayer.drawHit();
        });
		
        // Add
        SouthTowerlayer.add(SouthTower);
        stage.add(SouthTowerlayer);	
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
	

		//stage.add(tooltipLayer);
	
      };
	  

			/*var circle = new Kinetic.Circle({
			x: stage.getWidth() / 3 ,
			y: stage.getHeight() / 3,
			radius: 40,
			fill: 'purple',
			stroke: 'purple',
			strokeWidth: 4,
			opacity: 1
			});
			
			//Create shape layer
			
			circle.on('mouseover', function() {
				document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		
			  });

			  circle.on('mouseout', function() {
				document.body.style.cursor = 'default';
				this.transitionTo({
	     
	  
		          opacity: 1,
		          duration: .35,
		        });
			  });
			  			  
			 circle.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(circle);
				
				change_state(NFloorScreen,1);
			});
			var cir = new Kinetic.Circle({
			x: stage.getWidth()* 2/ 3 ,
			y: stage.getHeight()/ 3,
			radius: 40,
			fill: 'green',
			stroke: 'green',
			strokeWidth: 4,
			opacity: 1
			});
			cir.on('mouseover',function(){
				document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			});
			cir.on('mouseout',function(){
				document.body.style.cursor = 'default';
				this.transitionTo({
	     
	  
		          opacity: 1,
		          duration: .35,
		        });
			});
			cir.on('click', function(evt) {
				document.body.style.cursor = 'default';
				shapeLayer.remove(circle);
				
				change_state(SFloorScreen,1);
			});
			//Add onto layer
			shapeLayer.add(circle);
			shapeLayer.add(cir);

			//Add layer onto stage
			stage.add(shapeLayer);	
		*/
		}