//North Tower Select A Floor

function NT_SelectFloor(prevState){
	    tooltip.hide();
		tooltipshape.hide();

		//////////////////////////////////////////M1
	  //Create new Layer
      var M1layer = new Kinetic.Layer();

	  //Create ground floor
      var M1Obj = new Image();
	  M1Obj.src = 'content/js/floors/NorthTower/Images/NT_SelectFloor/NT_selectfromFloors_M1.png';

	  M1Obj.onload = function() {
        var M1 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: M1Obj,
          width: 792, //image width
          height: 648
        });
		M1.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
			
		//update table info
		roomType.setText("-");
		roomSize.setText("-");
		roomReception.setText("-");
		roomDimension.setText("-");
		roomCeilingHeight.setText("-");
		roomTheater.setText("-");
		tableLayer.draw();
    });
    M1.on('mouseout', function() {
		tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
      document.body.style.cursor = 'default';
    });
		M1.on('click', function(evt) {
      document.body.style.cursor = 'default';
			change_state(NTFloor1,NFloorScreen);
		});
		M1.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("M1: Street Level");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		M1.createImageHitRegion(function() {
          M1layer.drawHit();
        });
		

        // Add
        M1layer.add(M1);
        stage.add(M1layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();

      };
	  
	  		//////////////////////////////////////////M2
	  //Create new Layer
      var M2layer = new Kinetic.Layer();

	  //Create ground floor
      var M2Obj = new Image();
	  M2Obj.src = 'content/js/floors/NorthTower/Images/NT_SelectFloor/NT_selectfromFloors_M2.png';

	  M2Obj.onload = function() {
        var M2 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: M2Obj,
          width: 792, //image width
          height: 648
        });
    M2.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
			
		//update table info
		roomType.setText("-");
		roomSize.setText("-");
		roomReception.setText("-");
		roomDimension.setText("-");
		roomCeilingHeight.setText("-");
		roomTheater.setText("-");
		tableLayer.draw();
    });
    M2.on('mouseout', function() {
		tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
      document.body.style.cursor = 'default';
    });
		M2.on('click', function(evt) {
      document.body.style.cursor = 'default';
			change_state(NTFloor2,NFloorScreen);
		});
		
		M2.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("M2: International \nBallroom Level");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		M2.createImageHitRegion(function() {
          M2layer.drawHit();
        });
		
        // Add
        M2layer.add(M2);
        stage.add(M2layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  		//////////////////////////////////////////M3
	  //Create new Layer
      var M3layer = new Kinetic.Layer();

	  //Create ground floor
      var M3Obj = new Image();
	  M3Obj.src = 'content/js/floors/NorthTower/Images/NT_SelectFloor/NT_selectfromFloors_M3.png';

	  M3Obj.onload = function() {
        var M3 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: M3Obj,
          width: 792, //image width
          height: 648
        });
    M3.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
			
		//update table info
		roomType.setText("-");
		roomSize.setText("-");
		roomReception.setText("-");
		roomDimension.setText("-");
		roomCeilingHeight.setText("-");
		roomTheater.setText("-");
		tableLayer.draw();
    });
    M3.on('mouseout', function() {
		tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
      document.body.style.cursor = 'default';
    });
		M3.on('click', function(evt) {
      document.body.style.cursor = 'default';
			change_state(NTFloor3,NFloorScreen);
		});
		
		M3.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("M3: Meeting Level");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		 
		M3.createImageHitRegion(function() {
          M3layer.drawHit();
        });
		
        // Add
        M3layer.add(M3);
        stage.add(M3layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  		//////////////////////////////////////////M4
	  //Create new Layer
      var M4layer = new Kinetic.Layer();

	  //Create ground floor
      var M4Obj = new Image();
	  M4Obj.src = 'content/js/floors/NorthTower/Images/NT_SelectFloor/NT_selectfromFloors_M4.png';

	  M4Obj.onload = function() {
        var M4 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: M4Obj,
          width: 792, //image width
          height: 648
        });
		M4.createImageHitRegion(function() {
          M4layer.drawHit();
        });
		M4.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
			
		//update table info
		roomType.setText("-");
		roomSize.setText("-");
		roomReception.setText("-");
		roomDimension.setText("-");
		roomCeilingHeight.setText("-");
		roomTheater.setText("-");
		tableLayer.draw();
    });
    M4.on('mouseout', function() {
		tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
      document.body.style.cursor = 'default';
    });
		M4.on('click', function(evt) {
      document.body.style.cursor = 'default';
			change_state(NTFloor4,NFloorScreen);
		});
		
		M4.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("M4: Grand Ballroom \nLevel");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });

        // Add
        M4layer.add(M4);
        stage.add(M4layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  		//////////////////////////////////////////M6
	  //Create new Layer
      var M6layer = new Kinetic.Layer();

	  //Create ground floor
      var M6Obj = new Image();
	  M6Obj.src = 'content/js/floors/NorthTower/Images/NT_SelectFloor/NT_selectfromFloors_M6.png';

	  M6Obj.onload = function() {
        var M6 = new Kinetic.Image({
          x: 0,
          y: 0,
          image: M6Obj,
          width: 792, //image width
          height: 648
        });
		M6.createImageHitRegion(function() {
          M6layer.drawHit();
        });
	  M6.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
			
		//update table info
		roomType.setText("-");
		roomSize.setText("-");
		roomReception.setText("-");
		roomDimension.setText("-");
		roomCeilingHeight.setText("-");
		roomTheater.setText("-");
		tableLayer.draw();
    });
    M6.on('mouseout', function() {
		tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
      document.body.style.cursor = 'default';
    });	
		M6.on('click', function(evt) {
      document.body.style.cursor = 'default';
			change_state(NTFloor5,NFloorScreen);
		});
		
		M6.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("M6: Fitness Center \n& Pool Level");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });

        // Add
        M6layer.add(M6);
        stage.add(M6layer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  

	  
	  
	  
}