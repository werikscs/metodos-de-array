function newForEach(array,callback,thisArg){
	for(let i=0; i<array.length; i++){
		callback(array[i],i,array,thisArg);
	}
}

function newMap(array,callback,thisArg){
	let newArray = [];
	for(let i=0; i<array.length; i++){
		newArray[i] = callback(array[i],i,array,thisArg);
	}
	return newArray;
}

function newFilter(array,callback,thisArg){
	let newArray = [];
	for(let i=0,j=0; i<array.length; i++){
		const isTrue = callback(array[i],i,array,thisArg)
		if(isTrue){
			newArray[j] = array[i];
			j++;
		} 
	}
	return newArray;
}

function newFind(array,callback,thisArg){
	for(let i=0; i<array.length; i++){
		const isTrue = callback(array[i],i,array,thisArg)
		if(isTrue){
			return array[i];
		} 
	}
}

function newFindIndex(array,callback,thisArg){
	for(let i=0; i<array.length; i++){
		const isTrue = callback(array[i],i,array,thisArg)
		if(isTrue){
			return i;
		} 
	}
	return -1;
}

function newReduce(array,callback,initialValue){
	let acc;
	let initialIndex;

	if(initialValue === undefined){
		initialIndex = 1;
		acc = array[0];
	} else {
		initialIndex = 0;
		acc = initialValue;
	}

	for(let i=initialIndex; i<array.length; i++){
		acc = callback(acc,array[i],i,array);
	}

	return acc;
}

function newSome(array, callback, thisArg){
	for(let i=0; i<array.length; i++){
		const isTrue = callback(array[i],i,array,thisArg);
		if(isTrue){
			return true;
		}
	}
	return false;
}

function newEvery(array, callback, thisArg){
	for(let i=0; i<array.length; i++){
		const isTrue = callback(array[i],i,array,thisArg);
		if(isTrue === false){
			return false;
		}
	}
	return true;
}

function newIncludes(array,searchElement,fromIndex = 0){

	if(fromIndex < 0){
		fromIndex = array.length+fromIndex;
	}

	for(let i=fromIndex; i<array.length; i++){
		if(array[i] === searchElement || (Number.isNaN(array[i]) && Number.isNaN(searchElement)) ){
			return true;
		}
	}
	return false;
}

function newIndexOf(array,searchElement,fromIndex = 0){

	if(fromIndex < 0){
		fromIndex = array.length+fromIndex;
	}

	for(let i=fromIndex; i<array.length; i++){
		if(array[i] === searchElement){
			return i;
		}
	}
	return -1;
}

function newConcat(array){
	let newArray = [];

	for(let i=1; i<arguments.length; i++){
		if(Array.isArray(arguments[i])){
			newArray = [...newArray,...arguments[i]];
		} else {
			newArray = [...newArray,arguments[i]];
		}
	}
	return [...array,...newArray];
}

function newJoin(array, separator = ','){
	let strFromArray = '';
	
	for(let i=0; i<array.length; i++){
		strFromArray += array[i];
		if(array[i+1] !== undefined){
			strFromArray += separator;
		}
	}
	return strFromArray;
}

function newSlice(array, start = 0, end = array.length){
	let newArray = [];

	// start = start === undefined ? 0 : (start < 0 ? (array.length+start < 0 ? 0 : array.length+start) : start);
	// end   =  end  === undefined ? array.length : (end < 0 ? array.length+end : (end > array.length ? array.length : end));

	if(array.length+start < 0){
		start = 0;
	} else if (start < 0){
		start = array.length+start;
	}

	if(end > array.length){
		end = array.length;
	} else if(end < 0){
		end = array.length+end;
	}

	for(let i=start,j=0; i<end; i++,j++){
		newArray[j] = array[i];
	}
	return newArray;
}

function newFlat(array,depth = 1){
	let newArray = [];
	for(let i=0; i<array.length; i++){
		if(Array.isArray(array[i])){
			if(depth <= 1){
				newArray = [...newArray,...array[i]];
			} else {
				newArray = [...newArray,...newFlat(array[i],depth-1)];
			}
		} else {
			newArray = [...newArray, array[i]];
		}
	}
	return newArray;
}

function newFlatMap(array,callback,thisArg){
	let newArray = [];
	for(let i=0; i<array.length; i++){
		newArray[i] = callback(array[i],i,array,thisArg);
	}
	newArray = newFlat(newArray);
	return newArray;
}