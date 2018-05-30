function setup()
{
	cnv=createCanvas(1000,500);
	background(100);
	stroke(255);
	cnv.mouseClicked(clickCheck);
	
}

var x=[],y=[],n=0;
var flag=0,click=0;

function lineFlag()
{
	flag=1;
}

function mirrorFlag()
{
	flag=2;
	n=1;
}
function clickCheck()
{
	if (flag==1||flag==2)
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
				x[0]=mouseX;
				y[0]=mouseY;
				n=1;
				click=0;
			}
			else if(n==1)
			{
				x[1]=mouseX;
				y[1]=mouseY;
				line(x[0],y[0],x[1],y[1]);
				n=0;
				click=0;
				flag=0;
			
			}
		}
	}
	if (flag==2)
	{	
		if (n==1)
		{
			roc=2*prompt("enter focal length");
			a1 = -PI/180*prompt("enter angle above pole");
			a2 = PI/180*prompt("enter angle below pole ");
			n=0;
		}
		
		if (click==1)
		{
			
			x[0]=mouseX;
			y[0]=mouseY;
			noFill();
			arc(x[0]-roc/2,y[0],roc,roc,a1,a2);
			click=0;
			flag=0;
		
		}
		
	}
	

}







