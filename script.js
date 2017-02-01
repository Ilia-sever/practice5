function f(mas, num) {
	let arr = new Array (num);
	let i1=mas.length-1;
	let i2=0;
	while (i2 < num)
	{
		if (i1<0) arr[i2]=0; else arr[i2]=mas[i1];
		i1--;
		i2++;
	}
	return arr; 
}
