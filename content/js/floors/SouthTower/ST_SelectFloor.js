//South Tower Select A Floor

function ST_SelectFloor(prevState){
		tooltip.hide();
		tooltipshape.hide();
		//////////////////////////////////////////Atrium
	  //Create new Layer
      var Atriumlayer = new Kinetic.Layer();

	  //Create ground floor
      var AtriumObj = new Image();
	  AtriumObj.src = 'content/js/floors/SouthTower/Images/ST_SelectFloor/ST_selectfromFloors_Atrium.png';

	  AtriumObj.onload = function() {
        var Atrium = new Kinetic.Image({
          x: 0,
          y: 0,
          image: AtriumObj,
          width: 792, //image width
          height: 648
        });

		//Click Event
		Atrium.on('click', function(evt) {
			document.body.style.cursor = 'default';
			change_state(STFloor4,SFloorScreen);
		});
		
		Atrium.on('mouseout', function() {
			document.body.style.cursor = 'default';
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			this.transitionTo({
	     
	  
		          opacity: 1,
		          duration: .3,
		        });	
		});
		Atrium.on('mouseover',function(){
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
		
		Atrium.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("L4: Atrium Terrace Level");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		 
		Atrium.createImageHitRegion(function() {
          Atriumlayer.drawHit();
        });
		
        // Add
        Atriumlayer.add(Atrium);
        stage.add(Atriumlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  		//////////////////////////////////////////ExhibitHall
	  //Create new Layer
      var ExhibitHalllayer = new Kinetic.Layer();

	  //Create ground floor
      var ExhibitHallObj = new Image();
	  ExhibitHallObj.src = 'content/js/floors/SouthTower/Images/ST_SelectFloor/ST_selectfromFloors_ExhibitHall.png';

	  ExhibitHallObj.onload = function() {
        var ExhibitHall = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ExhibitHallObj,
          width: 792, //image width
          height: 648
        });

        // Add click event
		ExhibitHall.on('click', function(evt) {
			document.body.style.cursor = 'default';
			change_state(STFloor1,SFloorScreen);
		});
		
		ExhibitHall.on('mouseout', function() {
			document.body.style.cursor = 'default';
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			this.transitionTo({
	     
	  
		          opacity: 1,
		          duration: .3,
		        });	
		});
		
		ExhibitHall.on('mouseover',function(){
			document.body.style.cursor = 'pointer';
			this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });	
			
		
		});
		
		ExhibitHall.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("L1: Exhibit Hall");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		ExhibitHall.createImageHitRegion(function() {
          ExhibitHalllayer.drawHit();
        });
		
		//Add
        ExhibitHalllayer.add(ExhibitHall);
        stage.add(ExhibitHalllayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  		//////////////////////////////////////////GroundFloor
	  //Create new Layer
      var GroundFloorlayer = new Kinetic.Layer();

	  //Create ground floor
      var GroundFloorObj = new Image();
	  GroundFloorObj.src = 'content/js/floors/SouthTower/Images/ST_SelectFloor/ST_selectfromFloors_GroundFloor.png';

	  GroundFloorObj.onload = function() {
        var GroundFloor = new Kinetic.Image({
          x: 0,
          y: 0,
          image: GroundFloorObj,
          width: 792, //image width
          height: 648
        });

		//Add Click Event
		GroundFloor.on('click', function(evt) {
			document.body.style.cursor = 'default';
			change_state(STFloor2,SFloorScreen);
		});
		
		GroundFloor.on('mouseout', function() {
			document.body.style.cursor = 'default';
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			this.transitionTo({
	     
	  
		          opacity: 1,
		          duration: .3,
		        });	
		});
		GroundFloor.on('mouseover',function(){
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
		
		GroundFloor.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("L2: Ground Floor\n& CNN Conference Center");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		GroundFloor.createImageHitRegion(function() {
          GroundFloorlayer.drawHit();
        });
        // Add
        GroundFloorlayer.add(GroundFloor);
        stage.add(GroundFloorlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  		//////////////////////////////////////////HotelLobby
	  //Create new Layer
      var HotelLobbylayer = new Kinetic.Layer();

	  //Create ground floor
      var HotelLobbyObj = new Image();
	  HotelLobbyObj.src = 'content/js/floors/SouthTower/Images/ST_SelectFloor/ST_selectfromFloors_HotelLobby.png';

	  HotelLobbyObj.onload = function() {
        var HotelLobby = new Kinetic.Image({
          x: 0,
          y: 0,
          image: HotelLobbyObj,
          width: 792, //image width
          height: 648
        });
		//Add Click Event
		HotelLobby.on('click', function(evt) {
			document.body.style.cursor = 'default';
			change_state(STFloor3,SFloorScreen);
		});
		HotelLobby.on('mouseover',function(){
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
		          duration: .3,
		        });	
		});
		
		HotelLobby.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("L3: Hotel Lobby Level");
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
	  
	  
}