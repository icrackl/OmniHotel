//North Tower M6 - Floor 5

function NT_Floor5(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_Floor.png';

	  FloorObj.onload = function() {
        var Floor = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FloorObj,
          width: 792, //image width
          height: 648
        });

        // Add
        Floorlayer.add(Floor);
        stage.add(Floorlayer);
      };
	  
	  	  ///////////////////////////////////////////////AzaleaSuite
	  //Create new Layer
      var AzaleaSuitelayer = new Kinetic.Layer();
	  //AzaleaSuite
      var AzaleaSuiteObj = new Image();
	  AzaleaSuiteObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_AzaleaSuite.png';

	  AzaleaSuiteObj.onload = function() {
        var AzaleaSuite = new Kinetic.Image({
          x: 0,
          y: 0,
          image: AzaleaSuiteObj,
          width: 792, //image width
          height: 648
        });
		AzaleaSuite.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Azalea Suite");
			roomSize.setText("768 sq ft");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		AzaleaSuite.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});
		
		AzaleaSuite.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Azalea Suite");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		AzaleaSuite.createImageHitRegion(function() {
          AzaleaSuitelayer.drawHit();
        });
        // Add
        AzaleaSuitelayer.add(AzaleaSuite);
        stage.add(AzaleaSuitelayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////DeckAndPool
	  //Create new Layer
      var DeckAndPoollayer = new Kinetic.Layer();
	  //DeckAndPool
      var DeckAndPoolObj = new Image();
	  DeckAndPoolObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_DeckAndPool.png';

	  DeckAndPoolObj.onload = function() {
        var DeckAndPool = new Kinetic.Image({
          x: 0,
          y: 0,
          image: DeckAndPoolObj,
          width: 792, //image width
          height: 648
        });
		DeckAndPool.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Pool & Deck");
			roomSize.setText("3,724 sq ft");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		DeckAndPool.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});
		
		DeckAndPool.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Deck and Pool");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		DeckAndPool.createImageHitRegion(function() {
          DeckAndPoollayer.drawHit();
        });
        // Add
        DeckAndPoollayer.add(DeckAndPool);
        stage.add(DeckAndPoollayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////FitnessCenterAndNaturalBodySpa
	  //Create new Layer
      var FitnessCenterAndNaturalBodySpalayer = new Kinetic.Layer();
	  //FitnessCenterAndNaturalBodySpa
      var FitnessCenterAndNaturalBodySpaObj = new Image();
	  FitnessCenterAndNaturalBodySpaObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_FitnessCenterAndNaturalBodySpa.png';

	  FitnessCenterAndNaturalBodySpaObj.onload = function() {
        var FitnessCenterAndNaturalBodySpa = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FitnessCenterAndNaturalBodySpaObj,
          width: 792, //image width
          height: 648
        });
		FitnessCenterAndNaturalBodySpa.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Fitness Center & Spa");
			roomSize.setText("4,670 sq ft");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		FitnessCenterAndNaturalBodySpa.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});
		
		FitnessCenterAndNaturalBodySpa.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Fitness Center\n& Natural Body Spa");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		FitnessCenterAndNaturalBodySpa.createImageHitRegion(function() {
          FitnessCenterAndNaturalBodySpalayer.drawHit();
        });
        // Add
        FitnessCenterAndNaturalBodySpalayer.add(FitnessCenterAndNaturalBodySpa);
        stage.add(FitnessCenterAndNaturalBodySpalayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////ForsythiaSuite
	  //Create new Layer
      var ForsythiaSuitelayer = new Kinetic.Layer();
	  //ForsythiaSuite
      var ForsythiaSuiteObj = new Image();
	  ForsythiaSuiteObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_ForsythiaSuite.png';

	  ForsythiaSuiteObj.onload = function() {
        var ForsythiaSuite = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ForsythiaSuiteObj,
          width: 792, //image width
          height: 648
        });
		ForsythiaSuite.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Forsythia Suite");
			roomSize.setText("856 sq ft");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		ForsythiaSuite.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});
		
		ForsythiaSuite.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Forsythia Suite");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		ForsythiaSuite.createImageHitRegion(function() {
          ForsythiaSuitelayer.drawHit();
        });
        // Add
        ForsythiaSuitelayer.add(ForsythiaSuite);
        stage.add(ForsythiaSuitelayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////LilacSuite
	  //Create new Layer
      var LilacSuiteLayer = new Kinetic.Layer();
	  //LilacSuite
      var LilacSuiteObj = new Image();
	  LilacSuiteObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_LilacSuite.png';

	  LilacSuiteObj.onload = function() {
        var LilacSuite = new Kinetic.Image({
          x: 0,
          y: 0,
          image: LilacSuiteObj,
          width: 792, //image width
          height: 648
        });
		LilacSuite.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Lilac Suite");
			roomSize.setText("768 sq ft");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		LilacSuite.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});
		
		LilacSuite.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Lilac Suite");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		LilacSuite.createImageHitRegion(function() {
          LilacSuiteLayer.drawHit();
        });
        // Add
        LilacSuiteLayer.add(LilacSuite);
        stage.add(LilacSuiteLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Pool
	  //Create new Layer
      var PoolLayer = new Kinetic.Layer();
	  //Pool
      var PoolObj = new Image();
	  PoolObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_Pool.png';

	  PoolObj.onload = function() {
        var Pool = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PoolObj,
          width: 792, //image width
          height: 648
        });
		Pool.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		Pool.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});
		
		Pool.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Pool");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Pool.createImageHitRegion(function() {
          PoolLayer.drawHit();
        });
        // Add
        PoolLayer.add(Pool);
        stage.add(PoolLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Spa
	  //Create new Layer
      var SpaLayer = new Kinetic.Layer();
	  //Spa
      var SpaObj = new Image();
	  SpaObj.src = 'content/js/floors/NorthTower/Images/NT_M6/NT_M6_Spa.png';

	  SpaObj.onload = function() {
        var Spa = new Kinetic.Image({
          x: 0,
          y: 0,
          image: SpaObj,
          width: 792, //image width
          height: 648
        });
		Spa.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		Spa.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});
		
		Spa.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Spa");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Spa.createImageHitRegion(function() {
          SpaLayer.drawHit();
        });
        // Add
        SpaLayer.add(Spa);
        stage.add(SpaLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	    	  
}