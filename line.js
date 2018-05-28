function setup()
{
	cnv=createCanvas(1000,500);
	background(100);
	stroke(255);
	cnv.mouseClicked(clickCheck);
	
}

var x1,y1,x2,y2,n=0;
var flag=0,click=0;

function lineFlag()
{
	flag=1;
}

function clickCheck()
{
	if(flag==1)
	{
		click=1;
	}
}

function draw()
{	
	if (flag==1)
	{	
		if (click==1)	
		{	
			if(n==0)
			{
				x1=mouseX;
				y1=mouseY;
				n=1;
				click=0;
			}
			else if(n==1)
			{
				x2=mouseX;
				y2=mouseY;
				line(x1,y1,x2,y2);
				n=0;
				click=0;
				flag=0;
			
			}
		}
	}
}







