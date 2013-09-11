// Overview State
function overview(prevState) {
			tooltip.hide();
			tooltipshape.hide();
			shapeLayer.clear();
			//////////////////////////////////////////FLOOR
		  //Create new Layer
		  var overview_floorlayer = new Kinetic.Layer();
	
		  //Create ground floor
		  var overview_floorObj = new Image();
		  overview_floorObj.src = 'content/js/OverviewImages/overview_floor.png';
		  stage.setOpacity(0);
		  stage.transitionTo({
		 
	  
				  opacity: 1,
				  duration: .7,
				});
	
		  overview_floorObj.onload = function() {
			var overview_floor = new Kinetic.Image({
			  x: 0,
			  y: 0,
			  image: overview_floorObj,
			  width: 792, //image width
			  height: 648
			});
			
			overview_floor.setSize(overview_floor.getWidth()-30,overview_floor.getHeight());
	
			// Add
			overview_floorlayer.add(overview_floor);
			stage.add(overview_floorlayer);
		  };
				
			
			//////////////////////////////////////////AtlantaBotanicalGarden
			
			//Create new Layer
     		var AtlantaBotanicalGardenlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var AtlantaBotanicalGardenObj = new Image();
		    AtlantaBotanicalGardenObj.src = 'content/js/OverviewImages/overview_AtlantaBotanicalGarden.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   AtlantaBotanicalGardenObj.onload = function() {
          var AtlantaBotanicalGarden = new Kinetic.Image({
          x: 0,
          y: 0,
          image: AtlantaBotanicalGardenObj,
          width: 792, //image width
          height: 648
        });
		

		AtlantaBotanicalGarden.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		AtlantaBotanicalGarden.on('mouseout', function() {
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
			AtlantaBotanicalGarden.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(AtlantaBotanicalGarden);
				
				change_state(NFloorScreen,1);
			});
		 AtlantaBotanicalGarden.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Atlanta Botanical Garden\n(2.5 miles)");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		AtlantaBotanicalGarden.createImageHitRegion(function() {
          AtlantaBotanicalGardenlayer.drawHit();
        });
		
		AtlantaBotanicalGarden.setSize(AtlantaBotanicalGarden.getWidth()-30,AtlantaBotanicalGarden.getHeight());
		
        // Add
        AtlantaBotanicalGardenlayer.add(AtlantaBotanicalGarden);
        stage.add(AtlantaBotanicalGardenlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////CentennialOlympicPark
			
			//Create new Layer
     		var CentennialOlympicParklayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var CentennialOlympicParkObj = new Image();
		    CentennialOlympicParkObj.src = 'content/js/OverviewImages/overview_CentennialOlympicPark.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   CentennialOlympicParkObj.onload = function() {
          var CentennialOlympicPark = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CentennialOlympicParkObj,
          width: 792, //image width
          height: 648
        });
		

		CentennialOlympicPark.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		CentennialOlympicPark.on('mouseout', function() {
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
			CentennialOlympicPark.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(CentennialOlympicPark);
				
				change_state(NFloorScreen,1);
			});
		 CentennialOlympicPark.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Centennial Olympic Park");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CentennialOlympicPark.createImageHitRegion(function() {
          CentennialOlympicParklayer.drawHit();
        });
		
				CentennialOlympicPark.setSize(CentennialOlympicPark.getWidth()-30,CentennialOlympicPark.getHeight());

		
        // Add
        CentennialOlympicParklayer.add(CentennialOlympicPark);
        stage.add(CentennialOlympicParklayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////CNNCenter
			
			//Create new Layer
     		var CNNCenterlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var CNNCenterObj = new Image();
		    CNNCenterObj.src = 'content/js/OverviewImages/overview_CNNCenter.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   CNNCenterObj.onload = function() {
          var CNNCenter = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNCenterObj,
          width: 792, //image width
          height: 648
        });
		

		CNNCenter.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		CNNCenter.on('mouseout', function() {
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
			CNNCenter.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(CNNCenter);
				
				change_state(NFloorScreen,1);
			});
		 CNNCenter.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Omni Hotel\nSouth Tower &\nCNN Center");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNCenter.createImageHitRegion(function() {
          CNNCenterlayer.drawHit();
        });
		
				CNNCenter.setSize(CNNCenter.getWidth()-30,CNNCenter.getHeight());

		
        // Add
        CNNCenterlayer.add(CNNCenter);
        stage.add(CNNCenterlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  
	  	//////////////////////////////////////////CNNCenterMarta
			
			//Create new Layer
     		var CNNCenterMartalayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var CNNCenterMartaObj = new Image();
		    CNNCenterMartaObj.src = 'content/js/OverviewImages/overview_CNNCenterMarta.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   CNNCenterMartaObj.onload = function() {
          var CNNCenterMarta = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNCenterMartaObj,
          width: 792, //image width
          height: 648
        });
		

		CNNCenterMarta.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		CNNCenterMarta.on('mouseout', function() {
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
			CNNCenterMarta.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(CNNCenterMarta);
				
				change_state(NFloorScreen,1);
			});
		 CNNCenterMarta.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Center &\n Philips Arena\nMarta Station");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNCenterMarta.createImageHitRegion(function() {
          CNNCenterMartalayer.drawHit();
        });
		
				CNNCenterMarta.setSize(CNNCenterMarta.getWidth()-30,CNNCenterMarta.getHeight());

		
        // Add
        CNNCenterMartalayer.add(CNNCenterMarta);
        stage.add(CNNCenterMartalayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////FivePointsMarta
			
			//Create new Layer
     		var FivePointsMartalayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var FivePointsMartaObj = new Image();
		    FivePointsMartaObj.src = 'content/js/OverviewImages/overview_FivePointsMarta.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   FivePointsMartaObj.onload = function() {
          var FivePointsMarta = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FivePointsMartaObj,
          width: 792, //image width
          height: 648
        });
		

		FivePointsMarta.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		FivePointsMarta.on('mouseout', function() {
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
			FivePointsMarta.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(FivePointsMarta);
				
				change_state(NFloorScreen,1);
			});
		 FivePointsMarta.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Five Points Marta\nStation");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		FivePointsMarta.createImageHitRegion(function() {
          FivePointsMartalayer.drawHit();
        });
		
				FivePointsMarta.setSize(FivePointsMarta.getWidth()-30,FivePointsMarta.getHeight());

		
        // Add
        FivePointsMartalayer.add(FivePointsMarta);
        stage.add(FivePointsMartalayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  
	  	//////////////////////////////////////////FoxTheater
			
			//Create new Layer
     		var FoxTheaterlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var FoxTheaterObj = new Image();
		    FoxTheaterObj.src = 'content/js/OverviewImages/overview_FoxTheater.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   FoxTheaterObj.onload = function() {
          var FoxTheater = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FoxTheaterObj,
          width: 792, //image width
          height: 648
        });
		

		FoxTheater.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		FoxTheater.on('mouseout', function() {
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
			FoxTheater.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(FoxTheater);
				
				change_state(NFloorScreen,1);
			});
		 FoxTheater.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Fox Theater\n(1.5 miles)");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		FoxTheater.createImageHitRegion(function() {
          FoxTheaterlayer.drawHit();
        });
		
				FoxTheater.setSize(FoxTheater.getWidth()-30,FoxTheater.getHeight());

		
        // Add
        FoxTheaterlayer.add(FoxTheater);
        stage.add(FoxTheaterlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////GeorgiaAquarium
			
			//Create new Layer
     		var GeorgiaAquariumlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var GeorgiaAquariumObj = new Image();
		    GeorgiaAquariumObj.src = 'content/js/OverviewImages/overview_GeorgiaAquarium.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   GeorgiaAquariumObj.onload = function() {
          var GeorgiaAquarium = new Kinetic.Image({
          x: 0,
          y: 0,
          image: GeorgiaAquariumObj,
          width: 792, //image width
          height: 648
        });
		

		GeorgiaAquarium.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		GeorgiaAquarium.on('mouseout', function() {
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
			GeorgiaAquarium.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(GeorgiaAquarium);
				
				change_state(NFloorScreen,1);
			});
		 GeorgiaAquarium.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Georgia Aquarium");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		GeorgiaAquarium.createImageHitRegion(function() {
          GeorgiaAquariumlayer.drawHit();
        });
		
				GeorgiaAquarium.setSize(GeorgiaAquarium.getWidth()-30,GeorgiaAquarium.getHeight());

		
        // Add
        GeorgiaAquariumlayer.add(GeorgiaAquarium);
        stage.add(GeorgiaAquariumlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  
	  	//////////////////////////////////////////GeorgiaDome
			
			//Create new Layer
     		var GeorgiaDomelayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var GeorgiaDomeObj = new Image();
		    GeorgiaDomeObj.src = 'content/js/OverviewImages/overview_GeorgiaDome.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   GeorgiaDomeObj.onload = function() {
          var GeorgiaDome = new Kinetic.Image({
          x: 0,
          y: 0,
          image: GeorgiaDomeObj,
          width: 792, //image width
          height: 648
        });
		

		GeorgiaDome.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		GeorgiaDome.on('mouseout', function() {
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
			GeorgiaDome.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(GeorgiaDome);
				
				change_state(NFloorScreen,1);
			});
		 GeorgiaDome.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Georgia Dome");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		GeorgiaDome.createImageHitRegion(function() {
          GeorgiaDomelayer.drawHit();
        });
		
				GeorgiaDome.setSize(GeorgiaDome.getWidth()-30,GeorgiaDome.getHeight());

		
        // Add
        GeorgiaDomelayer.add(GeorgiaDome);
        stage.add(GeorgiaDomelayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////GeorgiaWorldCongressCenter
			
			//Create new Layer
     		var GeorgiaWorldCongressCenterlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var GeorgiaWorldCongressCenterObj = new Image();
		    GeorgiaWorldCongressCenterObj.src = 'content/js/OverviewImages/overview_GeorgiaWorldCongressCenter.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   GeorgiaWorldCongressCenterObj.onload = function() {
          var GeorgiaWorldCongressCenter = new Kinetic.Image({
          x: 0,
          y: 0,
          image: GeorgiaWorldCongressCenterObj,
          width: 792, //image width
          height: 648
        });
		

		GeorgiaWorldCongressCenter.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		GeorgiaWorldCongressCenter.on('mouseout', function() {
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
			GeorgiaWorldCongressCenter.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(GeorgiaWorldCongressCenter);
				
				change_state(NFloorScreen,1);
			});
		 GeorgiaWorldCongressCenter.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Georgia World\nCongress Center");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		GeorgiaWorldCongressCenter.createImageHitRegion(function() {
          GeorgiaWorldCongressCenterlayer.drawHit();
        });
		
				GeorgiaWorldCongressCenter.setSize(GeorgiaWorldCongressCenter.getWidth()-30,GeorgiaWorldCongressCenter.getHeight());

		
        // Add
        GeorgiaWorldCongressCenterlayer.add(GeorgiaWorldCongressCenter);
        stage.add(GeorgiaWorldCongressCenterlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////HighMuseumOfArt
			
			//Create new Layer
     		var HighMuseumOfArtlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var HighMuseumOfArtObj = new Image();
		    HighMuseumOfArtObj.src = 'content/js/OverviewImages/overview_HighMuseumOfArt.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   HighMuseumOfArtObj.onload = function() {
          var HighMuseumOfArt = new Kinetic.Image({
          x: 0,
          y: 0,
          image: HighMuseumOfArtObj,
          width: 792, //image width
          height: 648
        });
		

		HighMuseumOfArt.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		HighMuseumOfArt.on('mouseout', function() {
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
			HighMuseumOfArt.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(HighMuseumOfArt);
				
				change_state(NFloorScreen,1);
			});
		 HighMuseumOfArt.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("High Museum of Art\n(2 miles)");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		HighMuseumOfArt.createImageHitRegion(function() {
          HighMuseumOfArtlayer.drawHit();
        });
		
				HighMuseumOfArt.setSize(HighMuseumOfArt.getWidth()-30,HighMuseumOfArt.getHeight());

		
        // Add
        HighMuseumOfArtlayer.add(HighMuseumOfArt);
        stage.add(HighMuseumOfArtlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////ImagineIt
			
			//Create new Layer
     		var ImagineItlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var ImagineItObj = new Image();
		    ImagineItObj.src = 'content/js/OverviewImages/overview_ImagineIt.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   ImagineItObj.onload = function() {
          var ImagineIt = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ImagineItObj,
          width: 792, //image width
          height: 648
        });
		

		ImagineIt.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		ImagineIt.on('mouseout', function() {
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
			ImagineIt.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(ImagineIt);
				
				change_state(NFloorScreen,1);
			});
		 ImagineIt.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Imagine It!\nChildrens Museum\nof Atlanta");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		ImagineIt.createImageHitRegion(function() {
          ImagineItlayer.drawHit();
        });
		
				ImagineIt.setSize(ImagineIt.getWidth()-30,ImagineIt.getHeight());

		
        // Add
        ImagineItlayer.add(ImagineIt);
        stage.add(ImagineItlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////NT
			
			//Create new Layer
     		var NTlayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var NTObj = new Image();
		    NTObj.src = 'content/js/OverviewImages/overview_NT.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   NTObj.onload = function() {
          var NT = new Kinetic.Image({
          x: 0,
          y: 0,
          image: NTObj,
          width: 792, //image width
          height: 648
        });
		

		NT.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		NT.on('mouseout', function() {
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
			NT.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(NT);
				
				change_state(NFloorScreen,1);
			});
		 NT.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Omni Hotel\nNorth Tower");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		NT.createImageHitRegion(function() {
          NTlayer.drawHit();
        });
		
				NT.setSize(NT.getWidth()-30,NT.getHeight());

		
        // Add
        NTlayer.add(NT);
        stage.add(NTlayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////PhilipsArena
			
			//Create new Layer
     		var PhilipsArenalayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var PhilipsArenaObj = new Image();
		    PhilipsArenaObj.src = 'content/js/OverviewImages/overview_PhilipsArena.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   PhilipsArenaObj.onload = function() {
          var PhilipsArena = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PhilipsArenaObj,
          width: 792, //image width
          height: 648
        });
		
		PhilipsArena.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		PhilipsArena.on('mouseout', function() {
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
			PhilipsArena.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(PhilipsArena);
				
				change_state(NFloorScreen,1);
			});
		 PhilipsArena.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Philips Arena");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		PhilipsArena.createImageHitRegion(function() {
          PhilipsArenalayer.drawHit();
        });
		
				PhilipsArena.setSize(PhilipsArena.getWidth()-30,PhilipsArena.getHeight());

		
        // Add
        PhilipsArenalayer.add(PhilipsArena);
        stage.add(PhilipsArenalayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////WorldOfCocaCola
			
			//Create new Layer
     		var WorldOfCocaColalayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var WorldOfCocaColaObj = new Image();
		    WorldOfCocaColaObj.src = 'content/js/OverviewImages/overview_WorldOfCocaCola.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   WorldOfCocaColaObj.onload = function() {
          var WorldOfCocaCola = new Kinetic.Image({
          x: 0,
          y: 0,
          image: WorldOfCocaColaObj,
          width: 792, //image width
          height: 648
        });
		
		WorldOfCocaCola.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		WorldOfCocaCola.on('mouseout', function() {
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
			WorldOfCocaCola.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(WorldOfCocaCola);
				
				change_state(NFloorScreen,1);
			});
		 WorldOfCocaCola.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("World Of Coca-Cola");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		WorldOfCocaCola.createImageHitRegion(function() {
          WorldOfCocaColalayer.drawHit();
        });
		
				WorldOfCocaCola.setSize(WorldOfCocaCola.getWidth()-30,WorldOfCocaCola.getHeight());

		
        // Add
        WorldOfCocaColalayer.add(WorldOfCocaCola);
        stage.add(WorldOfCocaColalayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  	//////////////////////////////////////////ZooAtlanta
			
			//Create new Layer
     		var ZooAtlantalayer = new Kinetic.Layer();

		 	 //Create ground floor
		    var ZooAtlantaObj = new Image();
		    ZooAtlantaObj.src = 'content/js/OverviewImages/overview_ZooAtlanta.png';
		    stage.setOpacity(0);
		    stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	 	   ZooAtlantaObj.onload = function() {
          var ZooAtlanta = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ZooAtlantaObj,
          width: 792, //image width
          height: 648
        });
		

		ZooAtlanta.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
		});

		ZooAtlanta.on('mouseout', function() {
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
			ZooAtlanta.on('click', function(evt) {
			 	document.body.style.cursor = 'default';
				shapeLayer.remove(ZooAtlanta);
				
				change_state(NFloorScreen,1);
			});
		 ZooAtlanta.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Zoo Atlanta\n(2 miles)");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		ZooAtlanta.createImageHitRegion(function() {
          ZooAtlantalayer.drawHit();
        });
		
				ZooAtlanta.setSize(ZooAtlanta.getWidth()-30,ZooAtlanta.getHeight());

		
        // Add
        ZooAtlantalayer.add(ZooAtlanta);
        stage.add(ZooAtlantalayer);
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	
}