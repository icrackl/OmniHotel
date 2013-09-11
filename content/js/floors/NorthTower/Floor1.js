//North Tower M1 - Floor 1

function NT_Floor1(prevState){
	 	tooltip.hide();
		tooltipshape.hide();		
		//////////////////////////////////////////GROUND FLOOR
	  //Create new Layer
      var GroundFloorlayer = new Kinetic.Layer();

	  //Create ground floor
      var GroundFloorObj = new Image();
	  GroundFloorObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_GroundFloor.png';
	  stage.setOpacity(0);
	  stage.transitionTo({
     
  
	          opacity: 1,
	          duration: .7,
	        });

	  GroundFloorObj.onload = function() {
        var groundFloor = new Kinetic.Image({
          x: 0,
          y: 0,
          image: GroundFloorObj,
          width: 792, //image width
          height: 648
        });

        // Add
        GroundFloorlayer.add(groundFloor);
        stage.add(GroundFloorlayer);
      };
	  
	  	  ///////////////////////////////////////////////DOGWOOD
	  //Create new Layer
      var Dogwoodlayer = new Kinetic.Layer();
	  //Dogwood
      var DogwoodObj = new Image();
	  DogwoodObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_Dogwood.png';

	  DogwoodObj.onload = function() {
        var Dogwood = new Kinetic.Image({
          x: 0,
          y: 0,
          image: DogwoodObj,
          width: 792, //image width
          height: 648
        });
		Dogwood.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Dogwood");
			roomSize.setText("3,547 sq ft");
			roomReception.setText("375");
			roomDimension.setText("49'9\" x 69'6\"");
			roomCeilingHeight.setText("11'6\"");
			roomTheater.setText("400");
			tableLayer.draw();
		});

		Dogwood.on('mouseout', function() {
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
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
		Dogwood.on('click', function(evt) {
			document.body.style.cursor = 'default';
			change_state(NTInd1,NTFloor1);
		});
		
		Dogwood.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Dogwood \n[Click for more detail]");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Dogwood.createImageHitRegion(function() {
          Dogwoodlayer.drawHit();
        });
        // Add
        Dogwoodlayer.add(Dogwood);
        stage.add(Dogwoodlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  ///////////////////////////////////////////////COTTONWOOD
	  //Create new Layer
      var CottonWoodlayer = new Kinetic.Layer();
	  //CottonWood
      var CottonWoodObj = new Image();
	  CottonWoodObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_Cottonwood.png';

	  CottonWoodObj.onload = function() {
        var CottonWood = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CottonWoodObj,
          width: 792, //image width
          height: 648
        });
		CottonWood.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
			this.transitionTo({
     
  
	          opacity: .5,
	          duration: .5,
	        });
			
			//update table info
			roomType.setText("Cottonwood");
			roomSize.setText("1,243 sq ft");
			roomReception.setText("130");
			roomDimension.setText("24'5\" x 50'7\"");
			roomCeilingHeight.setText("11'");
			roomTheater.setText("138");
			tableLayer.draw();
		});

		CottonWood.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
			document.body.style.cursor = 'default';
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
		});
		CottonWood.on('click', function(evt) {
			document.body.style.cursor = 'default';
			change_state(NTInd2,NTFloor1);
		});
		
		CottonWood.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Cottonwood\n[Click for more detail]");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CottonWood.createImageHitRegion(function() {
          CottonWoodlayer.drawHit();
        });
        // Add
        CottonWoodlayer.add(CottonWood);
        stage.add(CottonWoodlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////REDWOOD
	  //Create new Layer
      var RedWoodlayer = new Kinetic.Layer();
	  //Redwood
      var RedWoodObj = new Image();
	  RedWoodObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_Redwood.png';

	  RedWoodObj.onload = function() {
        var RedWood = new Kinetic.Image({
          x: 0,
          y: 0,
          image: RedWoodObj,
          width: 792, //image width
          height: 648
        });
		RedWood.on('mouseover', function() {
				this.transitionTo({
     		 
  
	          opacity: .5,
	          duration: .5,
	        });
			
			//update table info
			roomType.setText("Redwood");
			roomSize.setText("997 sq ft");
			roomReception.setText("105");
			roomDimension.setText("24'9\" x 39'6\"");
			roomCeilingHeight.setText("11'");
			roomTheater.setText("111");
			tableLayer.draw();
		});

		RedWood.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
		});
		
		RedWood.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Redwood");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		RedWood.createImageHitRegion(function() {
          RedWoodlayer.drawHit();
        });
        // Add
        RedWoodlayer.add(RedWood);
        stage.add(RedWoodlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////PREFUNCTION
	  //Create new Layer
      var Prefunctionlayer = new Kinetic.Layer();
	  //Prefunction
      var PrefunctionObj = new Image();
	  PrefunctionObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_PrefunctionLobby.png';

	  PrefunctionObj.onload = function() {
        var Prefunction = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PrefunctionObj,
          width: 792, //image width
          height: 648
        });
		Prefunction.on('mouseover', function() {
			
		this.transitionTo({
     
  
	          opacity: .5,
	          duration: .5,
	        });
			
			//update table info
			roomType.setText("Prefunction");
			roomSize.setText("2,850 sq ft");
			roomReception.setText("300");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		Prefunction.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
		});
		
		Prefunction.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Prefunction");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Prefunction.createImageHitRegion(function() {
          Prefunctionlayer.drawHit();
        });
        // Add
        Prefunctionlayer.add(Prefunction);
        stage.add(Prefunctionlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////ELEVATORS
	  //Create new Layer
      var ElevatorLayer = new Kinetic.Layer();
	  //Elevator
      var ElevatorObj = new Image();
	  ElevatorObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_elavators.png';

	  ElevatorObj.onload = function() {
        var Elevator = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ElevatorObj,
          width: 792, //image width
          height: 648
        });
		Elevator.on('mouseover', function() {
		
		this.transitionTo({
     
  
	          opacity: .5,
	          duration: .5,
	        });
			
		});

		Elevator.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
	
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
		});
		
		Elevator.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Elevators");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Elevator.createImageHitRegion(function() {
          ElevatorLayer.drawHit();
        });
        // Add
        ElevatorLayer.add(Elevator);
        stage.add(ElevatorLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////ESCALATORS
	  //Create new Layer
      var EscalatorLayer = new Kinetic.Layer();
	  //Escalator
      var EscalatorObj = new Image();
	  EscalatorObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_Escalators.png';

	  EscalatorObj.onload = function() {
        var Escalator = new Kinetic.Image({
          x: 0,
          y: 0,
          image: EscalatorObj,
          width: 792, //image width
          height: 648
        });
		Escalator.on('mouseover', function() {
			
		this.transitionTo({
     
  
	          opacity: .5,
	          duration: .5,
	        });
			
			
		});

		Escalator.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
		});
		
		Escalator.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Escalators");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Escalator.createImageHitRegion(function() {
          EscalatorLayer.drawHit();
        });
        // Add
        EscalatorLayer.add(Escalator);
        stage.add(EscalatorLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////RESTROOM
	  //Create new Layer
      var RestroomLayer = new Kinetic.Layer();
	  //Restroom
      var RestroomObj = new Image();
	  RestroomObj.src = 'content/js/floors/NorthTower/Images/NT_M1/NT_M1_Restrooms.png';

	  RestroomObj.onload = function() {
        var Restroom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: RestroomObj,
          width: 792, //image width
          height: 648
        });
		Restroom.on('mouseover', function() {
			
		this.transitionTo({
     
  
	          opacity: .5,
	          duration: .5,
	        });
			
			
		});

		Restroom.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			
		this.transitionTo({
     
  
	          opacity: 1,
	          duration: .35,
	        });
		});
		
		Restroom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Restrooms");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Restroom.createImageHitRegion(function() {
          RestroomLayer.drawHit();
        });
        // Add
        RestroomLayer.add(Restroom);
        stage.add(RestroomLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  

}