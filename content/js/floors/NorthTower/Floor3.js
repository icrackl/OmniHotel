//North Tower M3 - Floor 3

function NT_Floor3(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Floor.png';

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
	  
	  	  ///////////////////////////////////////////////Beechnut
	  //Create new Layer
      var Beechnutlayer = new Kinetic.Layer();
	  //Beechnut
      var BeechnutObj = new Image();
	  BeechnutObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Beechnut.png';

	  BeechnutObj.onload = function() {
        var Beechnut = new Kinetic.Image({
          x: 0,
          y: 0,
          image: BeechnutObj,
          width: 792, //image width
          height: 648
        });
		Beechnut.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Beechnut");
			roomSize.setText("512 sq ft");
			roomReception.setText("53");
			roomDimension.setText("27'6\" x 21'2\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("55");
			tableLayer.draw();
		});

		Beechnut.on('mouseout', function() {
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
		Beechnut.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Beechnut");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Beechnut.createImageHitRegion(function() {
          Beechnutlayer.drawHit();
        });
        // Add
        Beechnutlayer.add(Beechnut);
        stage.add(Beechnutlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Chestnut
	  //Create new Layer
      var Chestnutlayer = new Kinetic.Layer();
	  //Chestnut
      var ChestnutObj = new Image();
	  ChestnutObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Chestnut.png';

	  ChestnutObj.onload = function() {
        var Chestnut = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ChestnutObj,
          width: 792, //image width
          height: 648
        });
		Chestnut.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Chestnut");
			roomSize.setText("624 sq ft");
			roomReception.setText("63");
			roomDimension.setText("24'8\" x 18'4\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("66");
			tableLayer.draw();
		});

		Chestnut.on('mouseout', function() {
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
		
		Chestnut.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Chestnut");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Chestnut.createImageHitRegion(function() {
          Chestnutlayer.drawHit();
        });
        // Add
        Chestnutlayer.add(Chestnut);
        stage.add(Chestnutlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Escalator
	  //Create new Layer
      var Escalatorlayer = new Kinetic.Layer();
	  //Escalator
      var EscalatorObj = new Image();
	  EscalatorObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Escalator.png';

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
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
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
			
			//update table info
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
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
          Escalatorlayer.drawHit();
        });
        // Add
        Escalatorlayer.add(Escalator);
        stage.add(Escalatorlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////Hazelnut
	  //Create new Layer
      var Hazelnutlayer = new Kinetic.Layer();
	  //Hazelnut
      var HazelnutObj = new Image();
	  HazelnutObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Hazelnut.png';

	  HazelnutObj.onload = function() {
        var Hazelnut = new Kinetic.Image({
          x: 0,
          y: 0,
          image: HazelnutObj,
          width: 792, //image width
          height: 648
        });
		Hazelnut.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Hazelnut");
			roomSize.setText("5624 sq ft");
			roomReception.setText("63");
			roomDimension.setText("27'6\" x 21'2\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("66");
			tableLayer.draw();
		});

		Hazelnut.on('mouseout', function() {
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
		
		Hazelnut.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Hazelnut");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Hazelnut.createImageHitRegion(function() {
          Hazelnutlayer.drawHit();
        });
        // Add
        Hazelnutlayer.add(Hazelnut);
        stage.add(Hazelnutlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Hickory
	  //Create new Layer
      var HickoryLayer = new Kinetic.Layer();
	  //Hickory
      var HickoryObj = new Image();
	  HickoryObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Hickory.png';

	  HickoryObj.onload = function() {
        var Hickory = new Kinetic.Image({
          x: 0,
          y: 0,
          image: HickoryObj,
          width: 792, //image width
          height: 648
        });
		Hickory.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Hickory");
			roomSize.setText("734 sq ft");
			roomReception.setText("79");
			roomDimension.setText("35'10\" x 19'6\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("83");
			tableLayer.draw();
		});

		Hickory.on('mouseout', function() {
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
		
		Hickory.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Hickory");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Hickory.createImageHitRegion(function() {
          HickoryLayer.drawHit();
        });
        // Add
        HickoryLayer.add(Hickory);
        stage.add(HickoryLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Pecan
	  //Create new Layer
      var PecanLayer = new Kinetic.Layer();
	  //Pecan
      var PecanObj = new Image();
	  PecanObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Pecan.png';

	  PecanObj.onload = function() {
        var Pecan = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PecanObj,
          width: 792, //image width
          height: 648
        });
		Pecan.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Pecan");
			roomSize.setText("472 sq ft");
			roomReception.setText("53");
			roomDimension.setText("18'2\" x 23'3\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("33");
			tableLayer.draw();
		});

		Pecan.on('mouseout', function() {
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
		
		Pecan.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Pecan");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Pecan.createImageHitRegion(function() {
          PecanLayer.drawHit();
        });
        // Add
        PecanLayer.add(Pecan);
        stage.add(PecanLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////PrefunctionLobby
	  //Create new Layer
      var PrefunctionLobbyLayer = new Kinetic.Layer();
	  //PrefunctionLobby
      var PrefunctionLobbyObj = new Image();
	  PrefunctionLobbyObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_PrefunctionLobby.png';

	  PrefunctionLobbyObj.onload = function() {
        var PrefunctionLobby = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PrefunctionLobbyObj,
          width: 792, //image width
          height: 648
        });
		PrefunctionLobby.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Prefunction Lobby");
			roomSize.setText("3,840 sq ft");
			roomReception.setText("405");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		PrefunctionLobby.on('mouseout', function() {
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
		
		PrefunctionLobby.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Prefunction Lobby");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		PrefunctionLobby.createImageHitRegion(function() {
          PrefunctionLobbyLayer.drawHit();
        });
        // Add
        PrefunctionLobbyLayer.add(PrefunctionLobby);
        stage.add(PrefunctionLobbyLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	  ///////////////////////////////////////////////Restrooms
	  //Create new Layer
      var RestroomsLayer = new Kinetic.Layer();
	  //Restrooms
      var RestroomsObj = new Image();
	  RestroomsObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Restrooms.png';

	  RestroomsObj.onload = function() {
        var Restrooms = new Kinetic.Image({
          x: 0,
          y: 0,
          image: RestroomsObj,
          width: 792, //image width
          height: 648
        });
		Restrooms.on('mouseover', function() {
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

		Restrooms.on('mouseout', function() {
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
		
		Restrooms.on("mousemove", function(){
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
		
		Restrooms.createImageHitRegion(function() {
          RestroomsLayer.drawHit();
        });
        // Add
        RestroomsLayer.add(Restrooms);
        stage.add(RestroomsLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  	  
	  ///////////////////////////////////////////////Walnut
	  //Create new Layer
      var WalnutLayer = new Kinetic.Layer();
	  //Walnut
      var WalnutObj = new Image();
	  WalnutObj.src = 'content/js/floors/NorthTower/Images/NT_M3/NT_M3_Walnut.png';

	  WalnutObj.onload = function() {
        var Walnut = new Kinetic.Image({
          x: 0,
          y: 0,
          image: WalnutObj,
          width: 792, //image width
          height: 648
        });
		Walnut.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Walnut");
			roomSize.setText("737 sq ft");
			roomReception.setText("79");
			roomDimension.setText("28'5\" x 28'1\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("83");
			tableLayer.draw();
		});

		Walnut.on('mouseout', function() {
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
		
		Walnut.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Walnut");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Walnut.createImageHitRegion(function() {
          WalnutLayer.drawHit();
        });
        // Add
        WalnutLayer.add(Walnut);
        stage.add(WalnutLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
}