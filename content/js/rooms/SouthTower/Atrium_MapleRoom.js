//South Tower - Atrium - Maple Room (A, B, C) 

function ST_MapleRoom(prevState){
		tooltip.hide();
		tooltipshape.hide();
		//////////////////////////////////////////FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create  floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/rooms/SouthTower/Images/ST_MapleRoom/ST_MapleRoom_Floor.png';

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
	  
	  	  ///////////////////////////////////////////////A
	  //Create new Layer
      var Alayer = new Kinetic.Layer();
	  //A
      var AObj = new Image();
	  AObj.src = 'content/js/rooms/SouthTower/Images/ST_MapleRoom/ST_MapleRoom_A.png';

	  AObj.onload = function() {
        var A = new Kinetic.Image({
          x: 0,
          y: 0,
          image: AObj,
          width: 792, //image width
          height: 648
        });
		A.on('mouseover', function() {
		A.setOpacity(0.5);
		Alayer.draw();
			
			//update table info
			roomType.setText("Maple Room A");
			roomSize.setText("725 sq ft");
			roomReception.setText("70");
			roomDimension.setText("29' x 25'");
			roomCeilingHeight.setText("10'");
			roomTheater.setText("70");
			tableLayer.draw();
		});

		A.on('mouseout', function() {
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
		A.setOpacity(1);
		Alayer.draw();
		});
		
		A.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Maple Room A");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		A.createImageHitRegion(function() {
          Alayer.drawHit();
        });
        // Add
        Alayer.add(A);
        stage.add(Alayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////B
	  //Create new Layer
      var Blayer = new Kinetic.Layer();
	  //B
      var BObj = new Image();
	  BObj.src = 'content/js/rooms/SouthTower/Images/ST_MapleRoom/ST_MapleRoom_B.png';

	  BObj.onload = function() {
        var B = new Kinetic.Image({
          x: 0,
          y: 0,
          image: BObj,
          width: 792, //image width
          height: 648
        });
		B.on('mouseover', function() {
		B.setOpacity(0.5);
		Blayer.draw();
			
			//update table info
			roomType.setText("Maple Room B");
			roomSize.setText("750 sq ft");
			roomReception.setText("70");
			roomDimension.setText("30' x 25'");
			roomCeilingHeight.setText("10'");
			roomTheater.setText("70");
			tableLayer.draw();
		});

		B.on('mouseout', function() {
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
		B.setOpacity(1);
		Blayer.draw();
		});
		
		B.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Maple Room B");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		B.createImageHitRegion(function() {
          Blayer.drawHit();
        });
        // Add
        Blayer.add(B);
        stage.add(Blayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////C
	  //Create new Layer
      var Clayer = new Kinetic.Layer();
	  //C
      var CObj = new Image();
	  CObj.src = 'content/js/rooms/SouthTower/Images/ST_MapleRoom/ST_MapleRoom_C.png';

	  CObj.onload = function() {
        var C = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CObj,
          width: 792, //image width
          height: 648
        });
		C.on('mouseover', function() {
		C.setOpacity(0.5);
		Clayer.draw();
			
			//update table info
			roomType.setText("Maple Room C");
			roomSize.setText("725 sq ft");
			roomReception.setText("70");
			roomDimension.setText("29' x 25'");
			roomCeilingHeight.setText("10'");
			roomTheater.setText("70");
			tableLayer.draw();
		});

		C.on('mouseout', function() {
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
		C.setOpacity(1);
		Clayer.draw();
		});
		
		C.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Maple Room C");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		C.createImageHitRegion(function() {
          Clayer.drawHit();
        });
        // Add
        Clayer.add(C);
        stage.add(Clayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
}