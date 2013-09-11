//North Tower M2 - International Ballroom (A, B, C, D, E, F) 

function NT_M2_InternationalBallroom(prevState){
	tooltip.hide();
		tooltipshape.hide();
		//////////////////////////////////////////FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create  floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/rooms/NorthTower/Images/NT_M2_InternationalBallroom/NT_M2_InternationalBallroom_Floor.png';

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
	  AObj.src = 'content/js/rooms/NorthTower/Images/NT_M2_InternationalBallroom/NT_M2_InternationalBallroom_A.png';

	  AObj.onload = function() {
        var A = new Kinetic.Image({
          x: 0,
          y: 0,
          image: AObj,
          width: 792, //image width
          height: 648
        });
		A.on('mouseover', function() {
		this.transitionTo({
     
  
            opacity: .5,
            duration: .5,
          });
			
			//update table info
			roomType.setText("International Ballroom A");
			roomSize.setText("1,181 sq ft");
			roomReception.setText("126");
			roomDimension.setText("36'4\" x 29'3\"");
			roomCeilingHeight.setText("18'");
			roomTheater.setText("133");
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
		this.transitionTo({
     
  
            opacity: 1,
            duration: .35,
          });
		});
		
		A.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("International Ballroom A");
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
	  BObj.src = 'content/js/rooms/NorthTower/Images/NT_M2_InternationalBallroom/NT_M2_InternationalBallroom_B.png';

	  BObj.onload = function() {
        var B = new Kinetic.Image({
          x: 0,
          y: 0,
          image: BObj,
          width: 792, //image width
          height: 648
        });
		B.on('mouseover', function() {
		this.transitionTo({
     
  
            opacity: .5,
            duration: .5,
          });
			
			//update table info
			roomType.setText("International Ballroom B");
			roomSize.setText("1,226 sq ft");
			roomReception.setText("132");
			roomDimension.setText("42' x 28'8\"");
			roomCeilingHeight.setText("18'");
			roomTheater.setText("132");
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
		this.transitionTo({
     
  
            opacity: 1,
            duration: .35,
          });
		});
		
		B.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("International Ballroom B");
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
	  CObj.src = 'content/js/rooms/NorthTower/Images/NT_M2_InternationalBallroom/NT_M2_InternationalBallroom_C.png';

	  CObj.onload = function() {
        var C = new Kinetic.Image({
          x: 0,
          y: 0,
          image: CObj,
          width: 792, //image width
          height: 648
        });
		C.on('mouseover', function() {
		this.transitionTo({
     
  
            opacity: .5,
            duration: .5,
          });
			
			//update table info
			roomType.setText("International Ballroom C");
			roomSize.setText("1,187 sq ft");
			roomReception.setText("126");
			roomDimension.setText("36'4\" x 29'3\"");
			roomCeilingHeight.setText("18'");
			roomTheater.setText("133");
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
		this.transitionTo({
     
  
            opacity: 1,
            duration: .35,
          });
		});
		
		C.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("International Ballroom C");
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
	  DObj.src = 'content/js/rooms/NorthTower/Images/NT_M2_InternationalBallroom/NT_M2_InternationalBallroom_D.png';

	  DObj.onload = function() {
        var D = new Kinetic.Image({
          x: 0,
          y: 0,
          image: DObj,
          width: 792, //image width
          height: 648
        });
		D.on('mouseover', function() {
		this.transitionTo({
     
  
            opacity: .5,
            duration: .5,
          });
			
			//update table info
			roomType.setText("International Ballroom D");
			roomSize.setText("3,320 sq ft");
			roomReception.setText("347");
			roomDimension.setText("38' x 87'2\"");
			roomCeilingHeight.setText("18'");
			roomTheater.setText("366");
			tableLayer.draw();
		});

		D.on('mouseout', function() {
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
		this.transitionTo({
     
  
            opacity: 1,
            duration: .35,
          });
		});
		
		D.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("International Ballroom D");
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
	  EObj.src = 'content/js/rooms/NorthTower/Images/NT_M2_InternationalBallroom/NT_M2_InternationalBallroom_E.png';

	  EObj.onload = function() {
        var E = new Kinetic.Image({
          x: 0,
          y: 0,
          image: EObj,
          width: 792, //image width
          height: 648
        });
		E.on('mouseover', function() {
		this.transitionTo({
     
  
            opacity: .5,
            duration: .5,
          });
			
			//update table info
			roomType.setText("International Ballroom E");
			roomSize.setText("3,320 sq ft");
			roomReception.setText("347");
			roomDimension.setText("38' x 87'2\"");
			roomCeilingHeight.setText("18'");
			roomTheater.setText("366");
			tableLayer.draw();
		});

		E.on('mouseout', function() {
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
		this.transitionTo({
     
  
            opacity: 1,
            duration: .35,
          });
		});
		
		E.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("International Ballroom E");
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
	  
	  	   ///////////////////////////////////////////////F
	  //Create new Layer
      var Flayer = new Kinetic.Layer();
	  //F
      var FObj = new Image();
	  FObj.src = 'content/js/rooms/NorthTower/Images/NT_M2_InternationalBallroom/NT_M2_InternationalBallroom_F.png';

	  FObj.onload = function() {
        var F = new Kinetic.Image({
          x: 0,
          y: 0,
          image: FObj,
          width: 792, //image width
          height: 648
        });
		F.on('mouseover', function() {
		this.transitionTo({
     
  
            opacity: .5,
            duration: .5,
          });
			
			//update table info
			roomType.setText("International Ballroom F");
			roomSize.setText("3,962 sq ft");
			roomReception.setText("421");
			roomDimension.setText("38'9\" x 87'2\"");
			roomCeilingHeight.setText("18'");
			roomTheater.setText("444");
			tableLayer.draw();
		});

		F.on('mouseout', function() {
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
		this.transitionTo({
     
  
            opacity: 1,
            duration: .35,
          });
		});
		
		F.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("International Ballroom F");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		F.createImageHitRegion(function() {
          Flayer.drawHit();
        });
        // Add
        Flayer.add(F);
        stage.add(Flayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };



}