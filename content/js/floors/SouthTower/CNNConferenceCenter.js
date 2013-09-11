//South Tower - GroundFloor_CNNConferenceCenter - Floor 3

function ST_CNNConferenceCenter(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_Floor.png';

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
	  
	  	  ///////////////////////////////////////////////CNNCenterFloor
	  //Create new Layer
      var CNNCenterFloorlayer = new Kinetic.Layer();
	  //CNNCenterFloor
      var CNNCenterFloorObj = new Image();
	  CNNCenterFloorObj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNCenterFloor.png';

	  CNNCenterFloorObj.onload = function() {
        var CNNCenterFloor = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNCenterFloorObj,
          width: 792, //image width
          height: 648
        });
		CNNCenterFloor.on('mouseover', function() {
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

		CNNCenterFloor.on('mouseout', function() {
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
		
		CNNCenterFloor.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Center Floor");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNCenterFloor.createImageHitRegion(function() {
          CNNCenterFloorlayer.drawHit();
        });
        // Add
        CNNCenterFloorlayer.add(CNNCenterFloor);
        stage.add(CNNCenterFloorlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////CNNMeetingRoom1
	  //Create new Layer
      var CNNMeetingRoom1layer = new Kinetic.Layer();
	  //CNNMeetingRoom1
      var CNNMeetingRoom1Obj = new Image();
	  CNNMeetingRoom1Obj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNMeetingRoom1.png';

	  CNNMeetingRoom1Obj.onload = function() {
        var CNNMeetingRoom1 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNMeetingRoom1Obj,
          width: 792, //image width
          height: 648
        });
		CNNMeetingRoom1.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("CNN Meeting Room 1");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		CNNMeetingRoom1.on('mouseout', function() {
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
		
		CNNMeetingRoom1.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Meeting\nRoom 1");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNMeetingRoom1.createImageHitRegion(function() {
          CNNMeetingRoom1layer.drawHit();
        });
        // Add
        CNNMeetingRoom1layer.add(CNNMeetingRoom1);
        stage.add(CNNMeetingRoom1layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////CNNMeetingRoom2
	  //Create new Layer
      var CNNMeetingRoom2layer = new Kinetic.Layer();
	  //CNNMeetingRoom2
      var CNNMeetingRoom2Obj = new Image();
	  CNNMeetingRoom2Obj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNMeetingRoom2.png';

	  CNNMeetingRoom2Obj.onload = function() {
        var CNNMeetingRoom2 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNMeetingRoom2Obj,
          width: 792, //image width
          height: 648
        });
		CNNMeetingRoom2.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("CNN Meeting Room 2");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		CNNMeetingRoom2.on('mouseout', function() {
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
		
		CNNMeetingRoom2.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Meeting\nRoom 2");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNMeetingRoom2.createImageHitRegion(function() {
          CNNMeetingRoom2layer.drawHit();
        });
        // Add
        CNNMeetingRoom2layer.add(CNNMeetingRoom2);
        stage.add(CNNMeetingRoom2layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////CNNMeetingRoom3
	  //Create new Layer
      var CNNMeetingRoom3layer = new Kinetic.Layer();
	  //CNNMeetingRoom3
      var CNNMeetingRoom3Obj = new Image();
	  CNNMeetingRoom3Obj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNMeetingRoom3.png';

	  CNNMeetingRoom3Obj.onload = function() {
        var CNNMeetingRoom3 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNMeetingRoom3Obj,
          width: 792, //image width
          height: 648
        });
		CNNMeetingRoom3.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("CNN Meeting Room 3");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		CNNMeetingRoom3.on('mouseout', function() {
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
		
		CNNMeetingRoom3.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Meeting\nRoom 3");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNMeetingRoom3.createImageHitRegion(function() {
          CNNMeetingRoom3layer.drawHit();
        });
        // Add
        CNNMeetingRoom3layer.add(CNNMeetingRoom3);
        stage.add(CNNMeetingRoom3layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////CNNMeetingRoom4
	  //Create new Layer
      var CNNMeetingRoom4Layer = new Kinetic.Layer();
	  //CNNMeetingRoom4
      var CNNMeetingRoom4Obj = new Image();
	  CNNMeetingRoom4Obj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNMeetingRoom4.png';

	  CNNMeetingRoom4Obj.onload = function() {
        var CNNMeetingRoom4 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNMeetingRoom4Obj,
          width: 792, //image width
          height: 648
        });
		CNNMeetingRoom4.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("CNN Meeting Room 4");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		CNNMeetingRoom4.on('mouseout', function() {
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
		
		CNNMeetingRoom4.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Meeting\nRoom 4");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNMeetingRoom4.createImageHitRegion(function() {
          CNNMeetingRoom4Layer.drawHit();
        });
        // Add
        CNNMeetingRoom4Layer.add(CNNMeetingRoom4);
        stage.add(CNNMeetingRoom4Layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   	  ///////////////////////////////////////////////CNNMeetingRoom5
	  //Create new Layer
      var CNNMeetingRoom5layer = new Kinetic.Layer();
	  //CNNMeetingRoom5
      var CNNMeetingRoom5Obj = new Image();
	  CNNMeetingRoom5Obj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNMeetingRoom5.png';

	  CNNMeetingRoom5Obj.onload = function() {
        var CNNMeetingRoom5 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNMeetingRoom5Obj,
          width: 792, //image width
          height: 648
        });
		CNNMeetingRoom5.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("CNN Meeting Room 5");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		CNNMeetingRoom5.on('mouseout', function() {
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
		
		CNNMeetingRoom5.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Meeting\nRoom 5");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNMeetingRoom5.createImageHitRegion(function() {
          CNNMeetingRoom5layer.drawHit();
        });
        // Add
        CNNMeetingRoom5layer.add(CNNMeetingRoom5);
        stage.add(CNNMeetingRoom5layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////CNNMeetingRoom6
	  //Create new Layer
      var CNNMeetingRoom6layer = new Kinetic.Layer();
	  //CNNMeetingRoom6
      var CNNMeetingRoom6Obj = new Image();
	  CNNMeetingRoom6Obj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNMeetingRoom6.png';

	  CNNMeetingRoom6Obj.onload = function() {
        var CNNMeetingRoom6 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNMeetingRoom6Obj,
          width: 792, //image width
          height: 648
        });
		CNNMeetingRoom6.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("CNN Meeting Room 6");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		CNNMeetingRoom6.on('mouseout', function() {
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
		
		CNNMeetingRoom6.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Meeting\nRoom 6");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNMeetingRoom6.createImageHitRegion(function() {
          CNNMeetingRoom6layer.drawHit();
        });
        // Add
        CNNMeetingRoom6layer.add(CNNMeetingRoom6);
        stage.add(CNNMeetingRoom6layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////CNNMeetingRoom7
	  //Create new Layer
      var CNNMeetingRoom7layer = new Kinetic.Layer();
	  //CNNMeetingRoom7
      var CNNMeetingRoom7Obj = new Image();
	  CNNMeetingRoom7Obj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_CNNMeetingRoom7.png';

	  CNNMeetingRoom7Obj.onload = function() {
        var CNNMeetingRoom7 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CNNMeetingRoom7Obj,
          width: 792, //image width
          height: 648
        });
		CNNMeetingRoom7.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("CNN Meeting Room 7");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		CNNMeetingRoom7.on('mouseout', function() {
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
		
		CNNMeetingRoom7.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("CNN Meeting\nRoom 7");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		CNNMeetingRoom7.createImageHitRegion(function() {
          CNNMeetingRoom7layer.drawHit();
        });
        // Add
        CNNMeetingRoom7layer.add(CNNMeetingRoom7);
        stage.add(CNNMeetingRoom7layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////Elevators
	  //Create new Layer
      var Elevatorslayer = new Kinetic.Layer();
	  //Elevators
      var ElevatorsObj = new Image();
	  ElevatorsObj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_Elevators.png';

	  ElevatorsObj.onload = function() {
        var Elevators = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ElevatorsObj,
          width: 792, //image width
          height: 648
        });
		Elevators.on('mouseover', function() {
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

		Elevators.on('mouseout', function() {
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
		
		Elevators.on("mousemove", function(){
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
		
		Elevators.createImageHitRegion(function() {
          Elevatorslayer.drawHit();
        });
        // Add
        Elevatorslayer.add(Elevators);
        stage.add(Elevatorslayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////TalkBackLiveSet
	  //Create new Layer
      var TalkBackLiveSetLayer = new Kinetic.Layer();
	  //TalkBackLiveSet
      var TalkBackLiveSetObj = new Image();
	  TalkBackLiveSetObj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_TalkBackLiveSet.png';

	  TalkBackLiveSetObj.onload = function() {
        var TalkBackLiveSet = new Kinetic.Image({
          x: 0,
          y: 0,
          image: TalkBackLiveSetObj,
          width: 792, //image width
          height: 648
        });
		TalkBackLiveSet.on('mouseover', function() {
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

		TalkBackLiveSet.on('mouseout', function() {
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
		
		TalkBackLiveSet.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Talk Back Live\nSet");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		TalkBackLiveSet.createImageHitRegion(function() {
          TalkBackLiveSetLayer.drawHit();
        });
        // Add
        TalkBackLiveSetLayer.add(TalkBackLiveSet);
        stage.add(TalkBackLiveSetLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	  ///////////////////////////////////////////////TurnerStore
	  //Create new Layer
      var TurnerStoreLayer = new Kinetic.Layer();
	  //TurnerStore
      var TurnerStoreObj = new Image();
	  TurnerStoreObj.src = 'content/js/floors/SouthTower/Images/ST_GroundFloor_CNNConferenceCenter/ST_GroundFloor_CNNConferenceCenter_TurnerStore.png';

	  TurnerStoreObj.onload = function() {
        var TurnerStore = new Kinetic.Image({
          x: 0,
          y: 0,
          image: TurnerStoreObj,
          width: 792, //image width
          height: 648
        });
		TurnerStore.on('mouseover', function() {
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

		TurnerStore.on('mouseout', function() {
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
		
		TurnerStore.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Turner Store");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		TurnerStore.createImageHitRegion(function() {
          TurnerStoreLayer.drawHit();
        });
        // Add
        TurnerStoreLayer.add(TurnerStore);
        stage.add(TurnerStoreLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	    	  
}