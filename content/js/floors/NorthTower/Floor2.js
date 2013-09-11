//North Tower M2 - Floor 2

function NT_Floor2(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_Floor.png';

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
	  
	  	  ///////////////////////////////////////////////CYPRESS
	  //Create new Layer
      var Cypresslayer = new Kinetic.Layer();
	  //cypress
      var CypressObj = new Image();
	  CypressObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_Cypress.png';

	  CypressObj.onload = function() {
        var Cypress = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CypressObj,
          width: 792, //image width
          height: 648
        });
		Cypress.on('mouseover', function() {
		
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Cypress");
			roomSize.setText("623 sq ft");
			roomReception.setText("63");
			roomDimension.setText("27'6\" x 26'8\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("66");
			tableLayer.draw();
		});

		Cypress.on('mouseout', function() {
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
		
		Cypress.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Cypress");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Cypress.createImageHitRegion(function() {
          Cypresslayer.drawHit();
        });
        // Add
        Cypresslayer.add(Cypress);
        stage.add(Cypresslayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Escalator
	  //Create new Layer
      var Escalatorslayer = new Kinetic.Layer();
	  //Escalator
      var EscalatorsObj = new Image();
	  EscalatorsObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_Escalators.png';

	  EscalatorsObj.onload = function() {
        var Escalators = new Kinetic.Image({
          x: 0,
          y: 0,
          image: EscalatorsObj,
          width: 792, //image width
          height: 648
        });
		Escalators.on('mouseover', function() {
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

		Escalators.on('mouseout', function() {
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
		
		Escalators.on("mousemove", function(){
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
		
		Escalators.createImageHitRegion(function() {
          Escalatorslayer.drawHit();
        });
        // Add
        Escalatorslayer.add(Escalators);
        stage.add(Escalatorslayer);
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
	  FreightElevatorObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_FreightElevator.png';

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
	  
	   ///////////////////////////////////////////////InternationalBallroom
	  //Create new Layer
      var InternationalBallroomlayer = new Kinetic.Layer();
	  //InternationalBallroom
      var InternationalBallroomObj = new Image();
	  InternationalBallroomObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_InternationalBallroom.png';

	  InternationalBallroomObj.onload = function() {
        var InternationalBallroom = new Kinetic.Image({
          x: 0,
          y: 0,
          image: InternationalBallroomObj,
          width: 792, //image width
          height: 648
        });
		InternationalBallroom.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("International Ballroom");
			roomSize.setText("14,196 sq ft");
			roomReception.setText("1,500");
			roomDimension.setText("163' x 87'");
			roomCeilingHeight.setText("18'");
			roomTheater.setText("1,580");
			tableLayer.draw();
		});

		InternationalBallroom.on('mouseout', function() {
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
		
		InternationalBallroom.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("International Ballroom \n[Click for more detail]");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		
		InternationalBallroom.createImageHitRegion(function() {
          InternationalBallroomlayer.drawHit();
        });
		InternationalBallroom.on('click',function(evt){
			document.body.style.cursor = 'default';
			change_state(NTInd3,NTFloor2);
		});
        // Add
        InternationalBallroomlayer.add(InternationalBallroom);
        stage.add(InternationalBallroomlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Juniper
	  //Create new Layer
      var JuniperLayer = new Kinetic.Layer();
	  //Juniper
      var JuniperObj = new Image();
	  JuniperObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_Juniper.png';

	  JuniperObj.onload = function() {
        var Juniper = new Kinetic.Image({
          x: 0,
          y: 0,
          image: JuniperObj,
          width: 792, //image width
          height: 648
        });
		Juniper.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Juniper");
			roomSize.setText("774 sq ft");
			roomReception.setText("84");
			roomDimension.setText("24'9\" x 26'8\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("88");
			tableLayer.draw();
		});

		Juniper.on('mouseout', function() {
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
		
		Juniper.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Juniper");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Juniper.createImageHitRegion(function() {
          JuniperLayer.drawHit();
        });
        // Add
        JuniperLayer.add(Juniper);
        stage.add(JuniperLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Magnolia
	  //Create new Layer
      var MagnoliaLayer = new Kinetic.Layer();
	  //Magnolia
      var MagnoliaObj = new Image();
	  MagnoliaObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_Magnolia.png';

	  MagnoliaObj.onload = function() {
        var Magnolia = new Kinetic.Image({
          x: 0,
          y: 0,
          image: MagnoliaObj,
          width: 792, //image width
          height: 648
        });
		Magnolia.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Magnolia");
			roomSize.setText("814 sq ft");
			roomReception.setText("84");
			roomDimension.setText("26'7\" x 26'8\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("88");
			tableLayer.draw();
		});

		Magnolia.on('mouseout', function() {
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
		
		Magnolia.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Magnolia");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Magnolia.createImageHitRegion(function() {
          MagnoliaLayer.drawHit();
        });
        // Add
        MagnoliaLayer.add(Magnolia);
        stage.add(MagnoliaLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////MorselsDeli
	  //Create new Layer
      var MorselsDeliLayer = new Kinetic.Layer();
	  //MorselsDeli
      var MorselsDeliObj = new Image();
	  MorselsDeliObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_MorselsDeli.png';

	  MorselsDeliObj.onload = function() {
        var MorselsDeli = new Kinetic.Image({
          x: 0,
          y: 0,
          image: MorselsDeliObj,
          width: 792, //image width
          height: 648
        });
		MorselsDeli.on('mouseover', function() {
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

		MorselsDeli.on('mouseout', function() {
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
		
		MorselsDeli.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Morsel's Deli");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		MorselsDeli.createImageHitRegion(function() {
          MorselsDeliLayer.drawHit();
        });
        // Add
        MorselsDeliLayer.add(MorselsDeli);
        stage.add(MorselsDeliLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	  ///////////////////////////////////////////////PrefunctionLobby1
	  //Create new Layer
      var PrefunctionLobby1Layer = new Kinetic.Layer();
	  //PrefunctionLobby1
      var PrefunctionLobby1Obj = new Image();
	  PrefunctionLobby1Obj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_PrefunctionLobby1.png';

	  PrefunctionLobby1Obj.onload = function() {
        var PrefunctionLobby1 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PrefunctionLobby1Obj,
          width: 792, //image width
          height: 648
        });
		PrefunctionLobby1.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Prefunction Lobby 1");
			roomSize.setText("1,540 sq ft");
			roomReception.setText("160");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		PrefunctionLobby1.on('mouseout', function() {
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
		
		PrefunctionLobby1.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Prefunction Lobby 1");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		PrefunctionLobby1.createImageHitRegion(function() {
          PrefunctionLobby1Layer.drawHit();
        });
        // Add
        PrefunctionLobby1Layer.add(PrefunctionLobby1);
        stage.add(PrefunctionLobby1Layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  	  
	  ///////////////////////////////////////////////PrefunctionLobby2
	  //Create new Layer
      var PrefunctionLobby2Layer = new Kinetic.Layer();
	  //PrefunctionLobby2
      var PrefunctionLobby2Obj = new Image();
	  PrefunctionLobby2Obj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_PrefunctionLobby2.png';

	  PrefunctionLobby2Obj.onload = function() {
        var PrefunctionLobby2 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PrefunctionLobby2Obj,
          width: 792, //image width
          height: 648
        });
		PrefunctionLobby2.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Prefunction Lobby 2");
			roomSize.setText("5,200 sq ft");
			roomReception.setText("525");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		PrefunctionLobby2.on('mouseout', function() {
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
		
		PrefunctionLobby2.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Prefunction Lobby 2");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		PrefunctionLobby2.createImageHitRegion(function() {
          PrefunctionLobby2Layer.drawHit();
        });
        // Add
        PrefunctionLobby2Layer.add(PrefunctionLobby2);
        stage.add(PrefunctionLobby2Layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	  ///////////////////////////////////////////////PrefunctionLobby3
	  //Create new Layer
      var PrefunctionLobby3Layer = new Kinetic.Layer();
	  //PrefunctionLobby3
      var PrefunctionLobby3Obj = new Image();
	  PrefunctionLobby3Obj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_PrefunctionLobby3.png';

	  PrefunctionLobby3Obj.onload = function() {
        var PrefunctionLobby3 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: PrefunctionLobby3Obj,
          width: 792, //image width
          height: 648
        });
		PrefunctionLobby3.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Prefunction Lobby 3");
			roomSize.setText("1,674 sq ft");
			roomReception.setText("175");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		});

		PrefunctionLobby3.on('mouseout', function() {
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
		
		PrefunctionLobby3.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Prefunction Lobby 3");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		PrefunctionLobby3.createImageHitRegion(function() {
          PrefunctionLobby3Layer.drawHit();
        });
        // Add
        PrefunctionLobby3Layer.add(PrefunctionLobby3);
        stage.add(PrefunctionLobby3Layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };

	  ///////////////////////////////////////////////Sycamore
	  //Create new Layer
      var SycamoreLayer = new Kinetic.Layer();
	  //Sycamore
      var SycamoreObj = new Image();
	  SycamoreObj.src = 'content/js/floors/NorthTower/Images/NT_M2/NT_M2_Sycamore.png';

	  SycamoreObj.onload = function() {
        var Sycamore = new Kinetic.Image({
          x: 0,
          y: 0,
          image: SycamoreObj,
          width: 792, //image width
          height: 648
        });
		Sycamore.on('mouseover', function() {
		this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Sycamore");
			roomSize.setText("774 sq ft");
			roomReception.setText("63");
			roomDimension.setText("27'6\" x 21'2\"");
			roomCeilingHeight.setText("10'6\"");
			roomTheater.setText("66");
			tableLayer.draw();
		});

		Sycamore.on('mouseout', function() {
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
		
		Sycamore.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Sycamore");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Sycamore.createImageHitRegion(function() {
          SycamoreLayer.drawHit();
        });
        // Add
        SycamoreLayer.add(Sycamore);
        stage.add(SycamoreLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
}