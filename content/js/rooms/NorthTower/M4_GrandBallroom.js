//North Tower M4 - GrandBallroom  (A, B, C, D, E) 

function NT_M4_Grandballroom(prevState){
		tooltip.hide();
		tooltipshape.hide();
		//////////////////////////////////////////FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create  floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/rooms/NorthTower/Images/NT_M4_Grandballroom/NT_M4_Grandballroom_Floor.png';

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
	  AObj.src = 'content/js/rooms/NorthTower/Images/NT_M4_Grandballroom/NT_M4_Grandballroom_A.png';

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
			roomType.setText("Grand Ballroom A");
			roomSize.setText("2,233 sq ft");
			roomReception.setText("243");
			roomDimension.setText("57'10\" x 37'9\"");
			roomCeilingHeight.setText("21'");
			roomTheater.setText("225");
			tableLayer.draw();
		});

		A.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
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
			tooltip.setText("Grand Ballroom A");
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
	  BObj.src = 'content/js/rooms/NorthTower/Images/NT_M4_Grandballroom/NT_M4_Grandballroom_B.png';

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
			roomType.setText("Grand Ballroom B");
			roomSize.setText("1,940 sq ft");
			roomReception.setText("211");
			roomDimension.setText("57'10\" x 33'9\"");
			roomCeilingHeight.setText("21'");
			roomTheater.setText("222");
			tableLayer.draw();
		});

		B.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
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
			tooltip.setText("Grand Ballroom B");
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
	  CObj.src = 'content/js/rooms/NorthTower/Images/NT_M4_Grandballroom/NT_M4_Grandballroom_C.png';

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
			roomType.setText("Grand Ballroom C");
			roomSize.setText("2,238 sq ft");
			roomReception.setText("232");
			roomDimension.setText("57'10\" x 37'9\"");
			roomCeilingHeight.setText("21'");
			roomTheater.setText("244");
			tableLayer.draw();
		});

		C.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
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
			tooltip.setText("Grand Ballroom C");
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
	  
	  ///////////////////////////////////////////////D
	  //Create new Layer
      var Dlayer = new Kinetic.Layer();
	  //D
      var DObj = new Image();
	  DObj.src = 'content/js/rooms/NorthTower/Images/NT_M4_Grandballroom/NT_M4_Grandballroom_D.png';

	  DObj.onload = function() {
        var D = new Kinetic.Image({
          x: 0,
          y: 0,
          image: DObj,
          width: 792, //image width
          height: 648
        });
		D.on('mouseover', function() {
		D.setOpacity(0.5);
		Dlayer.draw();
			
			//update table info
			roomType.setText("Grand Ballroom D");
			roomSize.setText("5,963 sq ft");
			roomReception.setText("642");
			roomDimension.setText("54' x 108'10\"");
			roomCeilingHeight.setText("21'");
			roomTheater.setText("677");
			tableLayer.draw();
		});

		D.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		D.setOpacity(1);
		Dlayer.draw();
		});
		D.on('click',function(evt){
			change_state(NTIndInside,NTInd4);
		});
		
		D.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Grand Ballroom D\n[Click for more detail]");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		D.createImageHitRegion(function() {
          Dlayer.drawHit();
        });
        // Add
        Dlayer.add(D);
        stage.add(Dlayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  	   ///////////////////////////////////////////////E
	  //Create new Layer
      var Elayer = new Kinetic.Layer();
	  //E
      var EObj = new Image();
	  EObj.src = 'content/js/rooms/NorthTower/Images/NT_M4_Grandballroom/NT_M4_Grandballroom_E.png';

	  EObj.onload = function() {
        var E = new Kinetic.Image({
          x: 0,
          y: 0,
          image: EObj,
          width: 792, //image width
          height: 648
        });
		E.on('mouseover', function() {
		E.setOpacity(0.5);
		Elayer.draw();
			
			//update table info
			roomType.setText("Grand Ballroom E");
			roomSize.setText("7,490 sq ft");
			roomReception.setText("800");
			roomDimension.setText("63'10\" x 108'10\"");
			roomCeilingHeight.setText("21'");
			roomTheater.setText("844");
			tableLayer.draw();
		});

		E.on('mouseout', function() {
			tooltip.hide();
			tooltipLayer.draw();
			tooltipshape.hide();
			tooltipshapeLayer.draw();
			roomType.setText("-");
			roomSize.setText("-");
			roomReception.setText("-");
			roomDimension.setText("-");
			roomCeilingHeight.setText("-");
			roomTheater.setText("-");
			tableLayer.draw();
		E.setOpacity(1);
		Elayer.draw();
		});
		
		E.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Grand Ballroom E");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		E.createImageHitRegion(function() {
          Elayer.drawHit();
        });
        // Add
        Elayer.add(E);
        stage.add(Elayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
}