function MyCtrl($scope)
	{
	
		$scope.hideListView = true;
		
		$scope.candidates = [
		{id:1,editMode:false,name:'Amar', address:'mg road', number:'919986093521',email:'amar@gmail.com', age:'25',DOB:'21 june', city:'Mumbai'},
		{id:2,editMode:false,name:'Akbar', address:'silkboard', number:'929986091221', email:'akbar@gmail.com', age:'35',DOB:'2 May', city:'Bangalore'},
		{id:3,editMode:false,name:'John', address:'rrnagar', number:'959986561221', email:'john@gmail.com', age:'28',DOB:'15 April', city:'Delhi'},
		{id:4,editMode:false,name:'Jill', address:'Koramangala', number:'989986092154', email:'jill@gmail.com', age:'23',DOB:'10 sept', city:'Chennai'}];

		$scope.show = function(id) { 
			$scope.hideListView = false;
			$scope.selectedCandidate=$scope.candidates[id-1];
			for(i=0;i<$scope.candidates.length;i++)
				$scope.candidates[i].editMode = false;
				
		}

		$scope.toggle = function(id) {
			var i = 0;
			for(i=0;i<$scope.candidates.length;i++)
			{	
				if(i != (id-1))
					$scope.candidates[i].editMode = false;
				else
					$scope.candidates[id-1].editMode = true;
			}
			if($scope.hideListView == false)
				$scope.selectedCandidate=$scope.candidates[id-1];		
		}
	}
