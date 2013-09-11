//North Tower M4 - Floor 4

function NT_Floor4(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_Floor.png';

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
	  
	  	  ///////////////////////////////////////////////Escalator
	  //Create new Layer
      var Escalatorlayer = new Kinetic.Layer();
	  //Escalator
      var EscalatorObj = new Image();
	  EscalatorObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_Escalator.png';

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
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////EventPlanner
	  //Create new Layer
      var EventPlannerlayer = new Kinetic.Layer();
	  //EventPlanner
      var EventPlannerObj = new Image();
	  EventPlannerObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_EventPlanner.png';

	  EventPlannerObj.onload = function() {
        var EventPlanner = new Kinetic.Image({
          x: 0,
          y: 0,
          image: EventPlannerObj,
          width: 792, //image width
          height: 648
        });
		EventPlanner.on('mouseover', function() {
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

		EventPlanner.on('mouseout', function() {
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
		
		EventPlanner.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Event Planner");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		EventPlanner.createImageHitRegion(function() {
          EventPlannerlayer.drawHit();
        });
        // Add
        EventPlannerlayer.add(EventPlanner);
        stage.add(EventPlannerlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////FreightElevator
	  //Create new Layer
      var FreightElevatorlayer = new Kinetic.Layer();
	  //FreightElevator
      var FreightElevatorObj = new Image();
	  FreightElevatorObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_FreightElevator.png';

	  FreightElevatorObj.onload = function() {
        var FreightElevator = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FreightElevatorObj,
          width: 792, //image width
          height: 648
        });
		FreightElevator.on('mouseover', function() {
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

		FreightElevator.on('mouseout', function() {
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
		
		FreightElevator.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Freight Elevators");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		FreightElevator.createImageHitRegion(function() {
          FreightElevatorlayer.drawHit();
        });
        // Add
        FreightElevatorlayer.add(FreightElevator);
        stage.add(FreightElevatorlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////GrandBallroom
	  //Create new Layer
      var GrandBallroomlayer = new Kinetic.Layer();
	  //GrandBallroom
      var GrandBallroomObj = new Image();
	  GrandBallroomObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_GrandBallroom.png';

	  GrandBallroomObj.onload = function() {
        var GrandBallroom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: GrandBallroomObj,
          width: 792, //image width
          height: 648
        });
		GrandBallroom.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Grand  Ballroom");
			roomSize.setText("19,864 sq ft");
			roomReception.setText("2,218");
			roomDimension.setText("184' x 108'");
			roomCeilingHeight.setText("21'");
			roomTheater.setText("2,212");
			tableLayer.draw();
		});

		GrandBallroom.on('mouseout', function() {
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
		
		GrandBallroom.on('click',function(evt){
			document.body.style.cursor = 'default';
			change_state(NTInd4,NTFloor4);
		});
		
		GrandBallroom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Grand Ballroom\n[Click for more detail]");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		GrandBallroom.createImageHitRegion(function() {
          GrandBallroomlayer.drawHit();
        });
		
        // Add
        GrandBallroomlayer.add(GrandBallroom);
        stage.add(GrandBallroomlayer);
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
	  PrefunctionLobbyObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_PrefunctionLobby.png';

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
			roomSize.setText("6,444 sq ft");
			roomReception.setText("-");
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
	  
	  ///////////////////////////////////////////////Walkway
	  //Create new Layer
      var WalkwayLayer = new Kinetic.Layer();
	  //Walkway
      var WalkwayObj = new Image();
	  WalkwayObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_Walkway.png';

	  WalkwayObj.onload = function() {
        var Walkway = new Kinetic.Image({
          x: 0,
          y: 0,
          image: WalkwayObj,
          width: 792, //image width
          height: 648
        });
		Walkway.on('mouseover', function() {
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
			tooltip.setText("Walkway to\nSouth Tower");
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
	  
	  ///////////////////////////////////////////////WillowBoardroom
	  //Create new Layer
      var WillowBoardroomLayer = new Kinetic.Layer();
	  //WillowBoardroom
      var WillowBoardroomObj = new Image();
	  WillowBoardroomObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_WillowBoardroom.png';

	  WillowBoardroomObj.onload = function() {
        var WillowBoardroom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: WillowBoardroomObj,
          width: 792, //image width
          height: 648
        });
		WillowBoardroom.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Willow Boardroom");
			roomSize.setText("596 sq ft");
			roomReception.setText("-");
			roomDimension.setText("30'11\" x 16'10\"");
			roomCeilingHeight.setText("15'");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		WillowBoardroom.on('mouseout', function() {
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
		
		WillowBoardroom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Willow Boardroom");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		WillowBoardroom.createImageHitRegion(function() {
          WillowBoardroomLayer.drawHit();
        });
        // Add
        WillowBoardroomLayer.add(WillowBoardroom);
        stage.add(WillowBoardroomLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	  ///////////////////////////////////////////////Windows
	  //Create new Layer
      var WindowsLayer = new Kinetic.Layer();
	  //Windows
      var WindowsObj = new Image();
	  WindowsObj.src = 'content/js/floors/NorthTower/Images/NT_M4/NT_M4_Windows.png';

	  WindowsObj.onload = function() {
        var Windows = new Kinetic.Image({
          x: 0,
          y: 0,
          image: WindowsObj,
          width: 792, //image width
          height: 648
        });
		Windows.on('mouseover', function() {
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

		Windows.on('mouseout', function() {
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
		
		Windows.on("mousemove", function(){
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
		
		Windows.createImageHitRegion(function() {
          WindowsLayer.drawHit();
        });
        // Add
        WindowsLayer.add(Windows);
        stage.add(WindowsLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  	  
}