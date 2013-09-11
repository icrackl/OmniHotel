//North Tower M1 - Dogwood Room (A & B) 

function NT_M1_DogwoodAB(prevState){
		tooltip.hide();
		tooltipshape.hide();
		//////////////////////////////////////////FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create  floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/rooms/NorthTower/Images/NT_M1_DogwoodAB/NT_M1_DogwoodAB_Floor.png';

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
	  AObj.src = 'content/js/rooms/NorthTower/Images/NT_M1_DogwoodAB/NT_M1_DogwoodAB_A.png';

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
			roomType.setText("Dogwood A");
			roomSize.setText("1,955 sq ft");
			roomReception.setText("211");
			roomDimension.setText("49'9\" x 38'5\"");
			roomCeilingHeight.setText("11'6\"");
			roomTheater.setText("222");
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
			tooltip.setText("Dogwood A");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), 25);
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
	  BObj.src = 'content/js/rooms/NorthTower/Images/NT_M1_DogwoodAB/NT_M1_DogwoodAB_B.png';

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
			roomType.setText("Dogwood B");
			roomSize.setText("1,592 sq ft");
			roomReception.setText("162");
			roomDimension.setText("49'9\" x 31'1\"");
			roomCeilingHeight.setText("11'6\"");
			roomTheater.setText("177");
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
			tooltip.setText("Dogwood B");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), 25);
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
	  
}