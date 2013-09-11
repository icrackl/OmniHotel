//South Tower - Exhibit Hall - Floor 1

function ST_ExhibitHall(prevState){
		tooltip.hide();
		tooltipshape.hide();
		////////////////////////////////////////// FLOOR
	  //Create new Layer
      var Floorlayer = new Kinetic.Layer();

	  //Create floor
      var FloorObj = new Image();
	  FloorObj.src = 'content/js/floors/SouthTower/Images/ST_ExhibitHall/ST_ExhibitHall_Floor.png';

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
	  
	  	  ///////////////////////////////////////////////Concession
	  //Create new Layer
      var Concessionlayer = new Kinetic.Layer();
	  //Concession
      var ConcessionObj = new Image();
	  ConcessionObj.src = 'content/js/floors/SouthTower/Images/ST_ExhibitHall/ST_ExhibitHall_Concession.png';

	  ConcessionObj.onload = function() {
        var Concession = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ConcessionObj,
          width: 792, //image width
          height: 648
        });
		Concession.on('mouseover', function() {
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

		Concession.on('mouseout', function() {
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
		
		Concession.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Concession");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Concession.createImageHitRegion(function() {
          Concessionlayer.drawHit();
        });
        // Add
        Concessionlayer.add(Concession);
        stage.add(Concessionlayer);
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
	  EscalatorObj.src = 'content/js/floors/SouthTower/Images/ST_ExhibitHall/ST_ExhibitHall_Escalator.png';

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
		
		Escalator.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Escalator");
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
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////ExhibitHall
	  //Create new Layer
      var ExhibitHalllayer = new Kinetic.Layer();
	  //ExhibitHall
      var ExhibitHallObj = new Image();
	  ExhibitHallObj.src = 'content/js/floors/SouthTower/Images/ST_ExhibitHall/ST_ExhibitHall_ExhibitHall.png';

	  ExhibitHallObj.onload = function() {
        var ExhibitHall = new Kinetic.Image({
          x: 0,
          y: 0,
          image: ExhibitHallObj,
          width: 792, //image width
          height: 648
        });
		ExhibitHall.on('mouseover', function() {
		document.body.style.cursor = 'pointer';
				this.transitionTo({
	     
	  
		          opacity: .5,
		          duration: .5,
		        });
			
			//update table info
			roomType.setText("Exhibit Hall");
			roomSize.setText("15,000 sq ft");
			roomReception.setText("1,500");
			roomDimension.setText("Irregular");
			roomCeilingHeight.setText("12'");
			roomTheater.setText("1,500");
			tableLayer.draw();
		});

		ExhibitHall.on('mouseout', function() {
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
		
		ExhibitHall.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Exhibit Hall");
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
        // Add
        ExhibitHalllayer.add(ExhibitHall);
        stage.add(ExhibitHalllayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	   ///////////////////////////////////////////////LoadingDock
	  //Create new Layer
      var LoadingDocklayer = new Kinetic.Layer();
	  //LoadingDock
      var LoadingDockObj = new Image();
	  LoadingDockObj.src = 'content/js/floors/SouthTower/Images/ST_ExhibitHall/ST_ExhibitHall_LoadingDock.png';

	  LoadingDockObj.onload = function() {
        var LoadingDock = new Kinetic.Image({
          x: 0,
          y: 0,
          image: LoadingDockObj,
          width: 792, //image width
          height: 648
        });
		LoadingDock.on('mouseover', function() {
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

		LoadingDock.on('mouseout', function() {
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
		
		LoadingDock.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Loading Dock");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		LoadingDock.createImageHitRegion(function() {
          LoadingDocklayer.drawHit();
        });
        // Add
        LoadingDocklayer.add(LoadingDock);
        stage.add(LoadingDocklayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	  ///////////////////////////////////////////////Storage
	  //Create new Layer
      var StorageLayer = new Kinetic.Layer();
	  //Storage
      var StorageObj = new Image();
	  StorageObj.src = 'content/js/floors/SouthTower/Images/ST_ExhibitHall/ST_ExhibitHall_Storage.png';

	  StorageObj.onload = function() {
        var Storage = new Kinetic.Image({
          x: 0,
          y: 0,
          image: StorageObj,
          width: 792, //image width
          height: 648
        });
		Storage.on('mouseover', function() {
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

		Storage.on('mouseout', function() {
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
		
		StorageLayer.on("mousemove", function(){
			var mousePos = stage.getMousePosition();
			tooltip.setPosition(mousePos.x + 10, mousePos.y + 5);
			tooltip.setText("Storage");
			tooltip.show();
			tooltipshape.setPosition(mousePos.x + 10, mousePos.y + 7);
			tooltipshape.setSize(tooltip.getWidth(), tooltip.getHeight() -5);
			tooltipshape.show();
			tooltipshapeLayer.draw();
			tooltipLayer.draw();
		 });
		
		Storage.createImageHitRegion(function() {
          StorageLayer.drawHit();
        });
        // Add
        StorageLayer.add(Storage);
        stage.add(StorageLayer);
		tableLayer.moveToTop();
		tableLayer.draw();
		tooltipshapeLayer.moveToTop();
		tooltipshapeLayer.draw();
		tooltipLayer.moveToTop();
		tooltipLayer.draw();
      };
	  
	    	  
}