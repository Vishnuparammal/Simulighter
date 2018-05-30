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

function lensFlag()
{
	flag=3;
	n=1;
}

function clickCheck()
{
	if (flag)
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
			a1 = -PI/180*prompt("enter angle");
			a2 = -a1;
			n=0;
		}
		
		if (click==1)
		{
			
			x[0]=mouseX;
			y[0]=mouseY;
			x[1]=x[0]-roc/2;
			y[1]=y[0]
			noFill();
			arc(x[1],y[1],roc,roc,a1,a2);
			click=0;
			flag=0;
		
		}
		
	}
	
	if (flag==3)
	{
		
		if (n==1)
		{
			roc=2*prompt("enter focal length");
			a1 = -PI/180*prompt("enter angle");
			a2 = -a1;
			a3 = PI+a1;
			a4 = PI+a2;
			n=0;
		}
		
		if (click==1)
		{
			
			x[0]=mouseX
			y[0]=mouseY;
			x[1]=x[0]-roc*cos(a1)/2;
			y[1]=y[0];
			x[2]=x[0]+roc*cos(a1)/2;
			y[2]=y[0];
			arc(x[1],y[1],roc,roc,a1,a2,OPEN);
			arc(x[2],y[2],roc,roc,a3,a4,OPEN);
			click=0;
			flag=0;
		
		}	
	}
	

}







