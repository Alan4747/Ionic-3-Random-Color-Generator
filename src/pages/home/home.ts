import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	newColor:any;

colors=[];

  constructor(public navCtrl: NavController) {

  	    this.colors = [{
     			color : this.getRandomGeneratorColor(),
			    },
			    {

      			color : this.getRandomGeneratorColor(),
			    },
			    {

      			color : this.getRandomGeneratorColor(),
			    },
			    {

  			    color : this.getRandomGeneratorColor(),
			    },
			     {

      			color : this.getRandomGeneratorColor(),
			    },
			    {

      			color : this.getRandomGeneratorColor(),
			    },
			    {

  			    color : this.getRandomGeneratorColor(),
			    },
			    {

				color : this.getRandomGeneratorColor(),
			    }];
 }
 
 getRandomGeneratorColor()
  {
      let color = "#";
      for (let i = 0; i < 3; i++)
      {
          let part = Math.round(Math.random() * 255).toString(16);
          color += (part.length > 1) ? part : "0" + part;

      }
      return color;

       
  }

 

 }


