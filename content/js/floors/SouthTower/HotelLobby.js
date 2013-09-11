//South Tower - HotelLobby - Floor 4

function ST_HotelLobbyLevel(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_Floor.png';

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
	  
	  	  ///////////////////////////////////////////////CedarRoom
	  //Create new Layer
      var CedarRoomlayer = new Kinetic.Layer();
	  //CedarRoom
      var CedarRoomObj = new Image();
	  CedarRoomObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_CedarRoom.png';

	  CedarRoomObj.onload = function() {
        var CedarRoom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CedarRoomObj,
          width: 792, //image width
          height: 648
        });
				
		
		CedarRoom.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Cedar Room");
			roomSize.setText("576 sq ft");
			roomReception.setText("55");
			roomDimension.setText("32' x 18'");
			roomCeilingHeight.setText("8'");
			roomTheater.setText("60");
			tableLayer.draw();
		});

		CedarRoom.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		CedarRoom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Cedar Room");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CedarRoom.createImageHitRegion(function() {
          CedarRoomlayer.drawHit();
        });
		
				CedarRoom.setSize(CedarRoom.getWidth()-30,CedarRoom.getHeight());

        // Add
        CedarRoomlayer.add(CedarRoom);
        stage.add(CedarRoomlayer);
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
	  ElevatorLobbyObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_ElevatorLobby.png';

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
			document.body.style.cursor = 'default';
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
	  
	  ///////////////////////////////////////////////Escalator
	  //Create new Layer
      var Escalatorlayer = new Kinetic.Layer();
	  //Escalator
      var EscalatorObj = new Image();
	  EscalatorObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_Escalator.png';

	  EscalatorObj.onload = function() {
        var Escalator = new Kinetic.Image({
          x: 0,
          y: 0,
          image: EscalatorObj,
          width: 792, //image width
          height: 648
        });
				
		
		Escalator.on('mouseover', function() {
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

		Escalator.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
				Escalator.setSize(Escalator.getWidth()-30,Escalator.getHeight());

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
	  
	   ///////////////////////////////////////////////FloorToCellingWindows
	  //Create new Layer
      var FloorToCellingWindowslayer = new Kinetic.Layer();
	  //FloorToCellingWindows
      var FloorToCellingWindowsObj = new Image();
	  FloorToCellingWindowsObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_FloorToCellingWindows.png';

	  FloorToCellingWindowsObj.onload = function() {
        var FloorToCellingWindows = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FloorToCellingWindowsObj,
          width: 792, //image width
          height: 648
        });
				
		
		FloorToCellingWindows.on('mouseover', function() {
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

		FloorToCellingWindows.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		FloorToCellingWindows.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Floor-to-Ceiling\nWindows");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		FloorToCellingWindows.createImageHitRegion(function() {
          FloorToCellingWindowslayer.drawHit();
        });
		
				FloorToCellingWindows.setSize(FloorToCellingWindows.getWidth()-30,FloorToCellingWindows.getHeight());

        // Add
        FloorToCellingWindowslayer.add(FloorToCellingWindows);
        stage.add(FloorToCellingWindowslayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////FrontDesk
	  //Create new Layer
      var FrontDeskLayer = new Kinetic.Layer();
	  //FrontDesk
      var FrontDeskObj = new Image();
	  FrontDeskObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_FrontDesk.png';

	  FrontDeskObj.onload = function() {
        var FrontDesk = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FrontDeskObj,
          width: 792, //image width
          height: 648
        });
		
		
		
		FrontDesk.on('mouseover', function() {
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

		FrontDesk.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		FrontDesk.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Front Desk");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		FrontDesk.createImageHitRegion(function() {
          FrontDeskLayer.drawHit();
        });
		
				FrontDesk.setSize(FrontDesk.getWidth()-30,FrontDesk.getHeight());

        // Add
        FrontDeskLayer.add(FrontDesk);
        stage.add(FrontDeskLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	 
	  ///////////////////////////////////////////////HotelLobby
	  //Create new Layer
      var HotelLobbylayer = new Kinetic.Layer();
	  //HotelLobby
      var HotelLobbyObj = new Image();
	  HotelLobbyObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_HotelLobby.png';

	  HotelLobbyObj.onload = function() {
        var HotelLobby = new Kinetic.Image({
          x: 0,
          y: 0,
          image: HotelLobbyObj,
          width: 792, //image width
          height: 648
        });
		
		
		
		HotelLobby.on('mouseover', function() {
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

		HotelLobby.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		HotelLobby.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Hotel Lobby");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		HotelLobby.createImageHitRegion(function() {
          HotelLobbylayer.drawHit();
        });
		
				HotelLobby.setSize(HotelLobby.getWidth()-30,HotelLobby.getHeight());

        // Add
        HotelLobbylayer.add(HotelLobby);
        stage.add(HotelLobbylayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////LobbyAlcove
	  //Create new Layer
      var LobbyAlcovelayer = new Kinetic.Layer();
	  //LobbyAlcove
      var LobbyAlcoveObj = new Image();
	  LobbyAlcoveObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_LobbyAlcove.png';

	  LobbyAlcoveObj.onload = function() {
        var LobbyAlcove = new Kinetic.Image({
          x: 0,
          y: 0,
          image: LobbyAlcoveObj,
          width: 792, //image width
          height: 648
        });
		
		
		
		LobbyAlcove.on('mouseover', function() {
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

		LobbyAlcove.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		LobbyAlcove.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Lobby Alcove");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		LobbyAlcove.createImageHitRegion(function() {
          LobbyAlcovelayer.drawHit();
        });
		
				LobbyAlcove.setSize(LobbyAlcove.getWidth()-30,LobbyAlcove.getHeight());

        // Add
        LobbyAlcovelayer.add(LobbyAlcove);
        stage.add(LobbyAlcovelayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////LobbyOverlook
	  //Create new Layer
      var LobbyOverlooklayer = new Kinetic.Layer();
	  //LobbyOverlook
      var LobbyOverlookObj = new Image();
	  LobbyOverlookObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_LobbyOverlook.png';

	  LobbyOverlookObj.onload = function() {
        var LobbyOverlook = new Kinetic.Image({
          x: 0,
          y: 0,
          image: LobbyOverlookObj,
          width: 792, //image width
          height: 648
        });
				
		
		LobbyOverlook.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Lobby Overlook");
			roomSize.setText("-");
			roomReception.setText("200");
			roomDimension.setText("43' x 55'");
			roomCeilingHeight.setText("15'");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		LobbyOverlook.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		LobbyOverlook.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Lobby Overlook");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		LobbyOverlook.createImageHitRegion(function() {
          LobbyOverlooklayer.drawHit();
        });
		
				LobbyOverlook.setSize(LobbyOverlook.getWidth()-30,LobbyOverlook.getHeight());

        // Add
        LobbyOverlooklayer.add(LobbyOverlook);
        stage.add(LobbyOverlooklayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////OakRoom
	  //Create new Layer
      var OakRoomLayer = new Kinetic.Layer();
	  //OakRoom
      var OakRoomObj = new Image();
	  OakRoomObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_OakRoom.png';

	  OakRoomObj.onload = function() {
        var OakRoom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: OakRoomObj,
          width: 792, //image width
          height: 648
        });
		
		
		
		OakRoom.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Oak Room");
			roomSize.setText("1,200 sq ft");
			roomReception.setText("120");
			roomDimension.setText("30' x 40'");
			roomCeilingHeight.setText("14'");
			roomTheater.setText("125");
			tableLayer.draw();
		});

		OakRoom.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		OakRoom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Oak Room");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		OakRoom.createImageHitRegion(function() {
          OakRoomLayer.drawHit();
        });
		
				OakRoom.setSize(OakRoom.getWidth()-30,OakRoom.getHeight());

        // Add
        OakRoomLayer.add(OakRoom);
        stage.add(OakRoomLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	  ///////////////////////////////////////////////RestroomEntrance
	  //Create new Layer
      var RestroomEntranceLayer = new Kinetic.Layer();
	  //RestroomEntrance
      var RestroomEntranceObj = new Image();
	  RestroomEntranceObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_RestroomEntrance.png';

	  RestroomEntranceObj.onload = function() {
        var RestroomEntrance = new Kinetic.Image({
          x: 0,
          y: 0,
          image: RestroomEntranceObj,
          width: 792, //image width
          height: 648
        });
		
		
		
		RestroomEntrance.on('mouseover', function() {
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

		RestroomEntrance.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		RestroomEntrance.on("mousemove", function(){
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
		
		RestroomEntrance.createImageHitRegion(function() {
          RestroomEntranceLayer.drawHit();
        });
		
				RestroomEntrance.setSize(RestroomEntrance.getWidth()-30,RestroomEntrance.getHeight());

        // Add
        RestroomEntranceLayer.add(RestroomEntrance);
        stage.add(RestroomEntranceLayer);
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
	  WalkwayObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_Walkway.png';

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
			document.body.style.cursor = 'default';
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
		
		Walkway.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Walkway to\nNorth Tower");
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
	  
	   ///////////////////////////////////////////////GrandPiano
  ///////////////////////////////////////////////GrandPiano
	  //Create new Layer
      var GrandPianolayer = new Kinetic.Layer();
	  //GrandPiano
      var GrandPianoObj = new Image();
	  GrandPianoObj.src = 'content/js/floors/SouthTower/Images/ST_HotelLobbyLevel/ST_HotelLobbyLevel_GrandPiano.png';

	  GrandPianoObj.onload = function() {
        var GrandPiano = new Kinetic.Image({
          x: 0,
          y: 0,
          image: GrandPianoObj,
          width: 792, //image width
          height: 648
        });
		GrandPiano.on('mouseover', function() {
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

		GrandPiano.on('mouseout', function() {
			document.body.style.cursor = 'default';
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
		
		GrandPiano.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Grand Piano");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		GrandPiano.createImageHitRegion(function() {
          GrandPianolayer.drawHit();
        });
		
		GrandPiano.setSize(GrandPiano.getWidth()-30,GrandPiano.getHeight());

        // Add
        GrandPianolayer.add(GrandPiano);
        stage.add(GrandPianolayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	    	  
}