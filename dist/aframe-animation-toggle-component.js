AFRAME.registerComponent('animation-toggle', {
  
  multiple: true,
  
  schema: {
    names: {type: 'array', default: []},
  },
  
  init: function(){
    
    //listen for animations to end
    this.el.addEventListener('animationcomplete', (e) => {
      
      //store animation name
      var animationName = e.detail.name
      
      //check to see if animation name has been passed to toggle component
      if ( this.data.names.indexOf( animationName ) > -1 ) {

        //get the current direction
        var currDir = this.el.components[animationName].data.dir
        
        //assign the opposite direction
        var flipDir;
        
        //if no direction assigned or is alternate, assume its normal
        if ( currDir == 'normal' || currDir == '' || currDir == 'alternate' ){ 
          
          flipDir = 'reverse'  
          
        }
        else if ( currDir == 'reverse' ){ 
          
          flipDir = 'normal'  
          
        }

        //set the opposite direction on the animation
        this.el.setAttribute(animationName, 'dir', flipDir)
        
      }//end if name in array

    })//end animationcomplete listener

  },//end init
  
})//end animation-toggle