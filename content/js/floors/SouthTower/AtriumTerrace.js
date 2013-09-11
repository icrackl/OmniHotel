//South Tower - AtriumTerraceLevel - Floor 5

function ST_AtriumTerraceLevel(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_Floor.png';

	  FloorObj.onload = function() {
        var Floor = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FloorObj,
          width: 792, //image width
          height: 648
        });
		
		Floor.setSize(Floor.getWidth()-30,Floor.getHeight());

        // Add
        Floorlayer.add(Floor);
        stage.add(Floorlayer);
      };
	  
	  	  ///////////////////////////////////////////////AtriumFoyer
	  //Create new Layer
      var AtriumFoyerlayer = new Kinetic.Layer();
	  //AtriumFoyer
      var AtriumFoyerObj = new Image();
	  AtriumFoyerObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_AtriumFoyer.png';

	  AtriumFoyerObj.onload = function() {
        var AtriumFoyer = new Kinetic.Image({
          x: 0,
          y: 0,
          image: AtriumFoyerObj,
          width: 792, //image width
          height: 648
        });
		
		
		
		AtriumFoyer.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Atrium Foyer");
			roomSize.setText("3,305 sq ft");
			roomReception.setText("200");
			roomDimension.setText("-");
			roomCeilingHeight.setText("15 Stories");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		AtriumFoyer.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		AtriumFoyer.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Atrium Foyer");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		AtriumFoyer.createImageHitRegion(function() {
          AtriumFoyerlayer.drawHit();
        });
		
				AtriumFoyer.setSize(AtriumFoyer.getWidth()-30,AtriumFoyer.getHeight());

        // Add
        AtriumFoyerlayer.add(AtriumFoyer);
        stage.add(AtriumFoyerlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////AtriumTerrace
	  //Create new Layer
      var AtriumTerracelayer = new Kinetic.Layer();
	  //AtriumTerrace
      var AtriumTerraceObj = new Image();
	  AtriumTerraceObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_AtriumTerrace.png';

	  AtriumTerraceObj.onload = function() {
        var AtriumTerrace = new Kinetic.Image({
          x: 0,
          y: 0,
          image: AtriumTerraceObj,
          width: 792, //image width
          height: 648
        });
				
		
		AtriumTerrace.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Atrium Terrace");
			roomSize.setText("12,000 sq ft");
			roomReception.setText("1,262");
			roomDimension.setText("105' x 96'");
			roomCeilingHeight.setText("15 Stories");
			roomTheater.setText("1,150");
			tableLayer.draw();
		});

		AtriumTerrace.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		AtriumTerrace.on('click', function(evt) {
				document.body.style.cursor = 'default';
				shapeLayer.remove(AtriumTerrace);
				
				change_state(STInd2,1);
			});
		
		AtriumTerrace.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Atrium Terrace\n[Click for more detail]");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		AtriumTerrace.createImageHitRegion(function() {
          AtriumTerracelayer.drawHit();
        });
		
				AtriumTerrace.setSize(AtriumTerrace.getWidth()-30,AtriumTerrace.getHeight());

        // Add
        AtriumTerracelayer.add(AtriumTerrace);
        stage.add(AtriumTerracelayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////BirchRoom
	  //Create new Layer
      var BirchRoomlayer = new Kinetic.Layer();
	  //BirchRoom
      var BirchRoomObj = new Image();
	  BirchRoomObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_BirchRoom.png';

	  BirchRoomObj.onload = function() {
        var BirchRoom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: BirchRoomObj,
          width: 792, //image width
          height: 648
        });
				
		
		BirchRoom.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Birch Room");
			roomSize.setText("1,080 sq ft");
			roomReception.setText("116");
			roomDimension.setText("27' x 40'");
			roomCeilingHeight.setText("8'9\"");
			roomTheater.setText("122");
			tableLayer.draw();
		});

		BirchRoom.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		BirchRoom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Birch Room");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		BirchRoom.createImageHitRegion(function() {
          BirchRoomlayer.drawHit();
        });
		
				BirchRoom.setSize(BirchRoom.getWidth()-30,BirchRoom.getHeight());

        // Add
        BirchRoomlayer.add(BirchRoom);
        stage.add(BirchRoomlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////ElevatorLobby
	  //Create new Layer
      var ElevatorLobbylayer = new Kinetic.Layer();
	  //ElevatorLobby
      var ElevatorLobbyObj = new Image();
	  ElevatorLobbyObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_ElevatorLobby.png';

	  ElevatorLobbyObj.onload = function() {
        var ElevatorLobby = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ElevatorLobbyObj,
          width: 792, //image width
          height: 648
        });
				
		
		ElevatorLobby.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
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

		ElevatorLobby.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		ElevatorLobby.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Elevator Lobby");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		ElevatorLobby.createImageHitRegion(function() {
          ElevatorLobbylayer.drawHit();
        });
		
				ElevatorLobby.setSize(ElevatorLobby.getWidth()-30,ElevatorLobby.getHeight());

        // Add
        ElevatorLobbylayer.add(ElevatorLobby);
        stage.add(ElevatorLobbylayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////MapleFoyer
	  //Create new Layer
      var MapleFoyerLayer = new Kinetic.Layer();
	  //MapleFoyer
      var MapleFoyerObj = new Image();
	  MapleFoyerObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_MapleFoyer.png';

	  MapleFoyerObj.onload = function() {
        var MapleFoyer = new Kinetic.Image({
          x: 0,
          y: 0,
          image: MapleFoyerObj,
          width: 792, //image width
          height: 648
        });
				
		
		MapleFoyer.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
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

		MapleFoyer.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		MapleFoyer.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Maple Foyer");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		MapleFoyer.createImageHitRegion(function() {
          MapleFoyerLayer.drawHit();
        });
		
				MapleFoyer.setSize(MapleFoyer.getWidth()-30,MapleFoyer.getHeight());

        // Add
        MapleFoyerLayer.add(MapleFoyer);
        stage.add(MapleFoyerLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   	  ///////////////////////////////////////////////MapleRoom
	  //Create new Layer
      var MapleRoomlayer = new Kinetic.Layer();
	  //MapleRoom
      var MapleRoomObj = new Image();
	  MapleRoomObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_MapleRoom.png';

	  MapleRoomObj.onload = function() {
        var MapleRoom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: MapleRoomObj,
          width: 792, //image width
          height: 648
        });
				
		
		MapleRoom.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Maple Room");
			roomSize.setText("2,200 sq ft");
			roomReception.setText("210");
			roomDimension.setText("88' x 25'");
			roomCeilingHeight.setText("10'");
			roomTheater.setText("210");
			tableLayer.draw();
		});

		MapleRoom.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		MapleRoom.on('click', function(evt) {
				document.body.style.cursor = 'default';
				shapeLayer.remove(MapleRoom);
				
				change_state(STInd1,1);
			});
		
		MapleRoom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Maple Room\n[Click for more detail]");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		MapleRoom.createImageHitRegion(function() {
          MapleRoomlayer.drawHit();
        });
		
				MapleRoom.setSize(MapleRoom.getWidth()-30,MapleRoom.getHeight());

        // Add
        MapleRoomlayer.add(MapleRoom);
        stage.add(MapleRoomlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////MapleTerrace
	  //Create new Layer
      var MapleTerracelayer = new Kinetic.Layer();
	  //MapleTerrace
      var MapleTerraceObj = new Image();
	  MapleTerraceObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_MapleTerrace.png';

	  MapleTerraceObj.onload = function() {
        var MapleTerrace = new Kinetic.Image({
          x: 0,
          y: 0,
          image: MapleTerraceObj,
          width: 792, //image width
          height: 648
        });
		
		
		
		MapleTerrace.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Maple Terrace");
			roomSize.setText("1,200 sq ft");
			roomReception.setText("120");
			roomDimension.setText("-");
			roomCeilingHeight.setText("10'");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		MapleTerrace.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
	document.body.style.cursor = 'default';
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
		
		MapleTerrace.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Maple Terrace");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		MapleTerrace.createImageHitRegion(function() {
          MapleTerracelayer.drawHit();
        });
		
				MapleTerrace.setSize(MapleTerrace.getWidth()-30,MapleTerrace.getHeight());

        // Add
        MapleTerracelayer.add(MapleTerrace);
        stage.add(MapleTerracelayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////PineFoyer
	  //Create new Layer
      var PineFoyerlayer = new Kinetic.Layer();
	  //PineFoyer
      var PineFoyerObj = new Image();
	  PineFoyerObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_PineFoyer.png';

	  PineFoyerObj.onload = function() {
        var PineFoyer = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PineFoyerObj,
          width: 792, //image width
          height: 648
        });
				
		
		PineFoyer.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Pine Foyer");
			roomSize.setText("1,300 sq ft");
			roomReception.setText("120");
			roomDimension.setText("");
			roomCeilingHeight.setText("15 Stories");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		PineFoyer.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		PineFoyer.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Pine Foyer");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		PineFoyer.createImageHitRegion(function() {
          PineFoyerlayer.drawHit();
        });
		
				PineFoyer.setSize(PineFoyer.getWidth()-30,PineFoyer.getHeight());

        // Add
        PineFoyerlayer.add(PineFoyer);
        stage.add(PineFoyerlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////PineRoom
	  //Create new Layer
      var PineRoomlayer = new Kinetic.Layer();
	  //PineRoom
      var PineRoomObj = new Image();
	  PineRoomObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_PineRoom.png';

	  PineRoomObj.onload = function() {
        var PineRoom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PineRoomObj,
          width: 792, //image width
          height: 648
        });
				
		
		PineRoom.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Pine Room");
			roomSize.setText("1,596 sq ft");
			roomReception.setText("160");
			roomDimension.setText("57' x 28'");
			roomCeilingHeight.setText("8'9\"");
			roomTheater.setText("160");
			tableLayer.draw();
		});

		PineRoom.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		PineRoom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Pine Room");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		PineRoom.createImageHitRegion(function() {
          PineRoomlayer.drawHit();
        });
		
				PineRoom.setSize(PineRoom.getWidth()-30,PineRoom.getHeight());

        // Add
        PineRoomlayer.add(PineRoom);
        stage.add(PineRoomlayer);
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
	  RestroomsObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_Restrooms.png';

	  RestroomsObj.onload = function() {
        var Restrooms = new Kinetic.Image({
          x: 0,
          y: 0,
          image: RestroomsObj,
          width: 792, //image width
          height: 648
        });
				
		
		Restrooms.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
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
		document.body.style.cursor = 'default';
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
		
				Restrooms.setSize(Restrooms.getWidth()-30,Restrooms.getHeight());

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
	  
	  	  ///////////////////////////////////////////////SpruceFoyer
	  //Create new Layer
      var SpruceFoyerLayer = new Kinetic.Layer();
	  //SpruceFoyer
      var SpruceFoyerObj = new Image();
	  SpruceFoyerObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_SpruceFoyer.png';

	  SpruceFoyerObj.onload = function() {
        var SpruceFoyer = new Kinetic.Image({
          x: 0,
          y: 0,
          image: SpruceFoyerObj,
          width: 792, //image width
          height: 648
        });
				
		
		SpruceFoyer.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Sprucer Foyer");
			roomSize.setText("560 sq ft");
			roomReception.setText("50");
			roomDimension.setText("28' x 20'");
			roomCeilingHeight.setText("10'");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		SpruceFoyer.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		SpruceFoyer.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Spruce Foyer");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		SpruceFoyer.createImageHitRegion(function() {
          SpruceFoyerLayer.drawHit();
        });
		
				SpruceFoyer.setSize(SpruceFoyer.getWidth()-30,SpruceFoyer.getHeight());

        // Add
        SpruceFoyerLayer.add(SpruceFoyer);
        stage.add(SpruceFoyerLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	  	  ///////////////////////////////////////////////SpruceRoom
	  //Create new Layer
      var SpruceRoomLayer = new Kinetic.Layer();
	  //SpruceRoom
      var SpruceRoomObj = new Image();
	  SpruceRoomObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_SpruceRoom.png';

	  SpruceRoomObj.onload = function() {
        var SpruceRoom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: SpruceRoomObj,
          width: 792, //image width
          height: 648
        });
				
		
		SpruceRoom.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Spruce Room");
			roomSize.setText("1,036 sq ft");
			roomReception.setText("110");
			roomDimension.setText("37' x 28'");
			roomCeilingHeight.setText("8'9\"");
			roomTheater.setText("110");
			tableLayer.draw();
		});

		SpruceRoom.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		SpruceRoom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Spruce Room");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		SpruceRoom.createImageHitRegion(function() {
          SpruceRoomLayer.drawHit();
        });
		
				SpruceRoom.setSize(SpruceRoom.getWidth()-30,SpruceRoom.getHeight());

        // Add
        SpruceRoomLayer.add(SpruceRoom);
        stage.add(SpruceRoomLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Walkway
	  //Create new Layer
      var WalkwayLayer = new Kinetic.Layer();
	  //Walkway
      var WalkwayObj = new Image();
	  WalkwayObj.src = 'content/js/floors/SouthTower/Images/ST_AtriumTerraceLevel/ST_AtriumTerraceLevel_Walkway.png';

	  WalkwayObj.onload = function() {
        var Walkway = new Kinetic.Image({
          x: 0,
          y: 0,
          image: WalkwayObj,
          width: 792, //image width
          height: 648
        });
				
		
		Walkway.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
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

		Walkway.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
		document.body.style.cursor = 'default';
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
		
		Walkway.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Walkway");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Walkway.createImageHitRegion(function() {
          WalkwayLayer.drawHit();
        });
		
				Walkway.setSize(Walkway.getWidth()-30,Walkway.getHeight());

        // Add
        WalkwayLayer.add(Walkway);
        stage.add(WalkwayLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	    	  
}