function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  // document.getElementById("confirmation").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");

  document.getElementsByClassName("target_files")[0].prepend(document.getElementById(data));

  document.getElementById("confirmation").innerHTML = "The p element was dropped";
  document.getElementsByClassName("confirmation_wrap")[0].classList.add("display_block");
}

document.getElementById("save").addEventListener("click", (event)=>{
    
    document.getElementsByClassName("confirmation_wrap")[0].classList.remove("display_block");

});

document.getElementById("revert").addEventListener("click", (event)=>{

    if(document.getElementsByClassName("target_files")[0].children.length != null){
      //revert_file_immediately();
      document.getElementsByClassName("files")[0].prepend(document.getElementsByClassName("target_files")[0].firstChild);
      document.getElementsByClassName("confirmation_wrap")[0].classList.remove("display_block");
    }else{
          document.getElementsByClassName("confirmation_wrap")[0].classList.remove("display_block");
    }

});

function reset(){
  empty();
let i;
 for(i=1;i<7;i++){

  html_content(i);

  document.getElementsByClassName("files")[0].innerHTML +=html;
   }
}

function empty(){

  html = '';

  document.getElementsByClassName("files")[0].innerHTML =html;
}

function empty_right(){

  html = '';

  document.getElementsByClassName("target_files")[0].innerHTML =html;
}

add_data();

function add_data(){
  empty();
let i;
 for(i=1;i<7;i++){

html_content(i);

  document.getElementsByClassName("files")[0].innerHTML +=html;
   }
}

function revert_file_immediately(){

var source_id = document.getElementsByClassName("target_files")[0].firstChild.id;

var i;
var total_child = document.getElementsByClassName("files")[0].children.length;

for(i=0;i<total_child;i++){

    if(source_id - document.getElementsByClassName("files")[0].children[i].id == 1){
      
      var append_location = document.getElementsByClassName("files")[0].children[i];

      var tobe_inserted = document.getElementsByClassName("target_files")[0].firstChild;
    console.log("1");
      append_location.parentNode.insertBefore(tobe_inserted, append_location.nextSibling);
      //append_location.append(tobe_inserted);

      // try{ 
      //   document.getElementsByClassName("target_files")[0].firstChild.remove();
      // }
      // catch(err){alert(err.message);}
      document.getElementsByClassName("confirmation_wrap")[0].classList.remove("display_block");

    }
    else if(source_id - document.getElementsByClassName("files")[0].children[i].id == -1){
      console.log("-1");
      //document.getElementsByClassName("files")[0].prepend(tobe_inserted);
      try{append_location.insertAfter(append_location,tobe_inserted);}
      catch(err){err.message;}
      document.getElementsByClassName("confirmation_wrap")[0].classList.remove("display_block");
    }
    else{
      // document.getElementsByClassName("files")[0].prepend(document.getElementsByClassName("target_files")[0].firstChild);
      console.log("else part");
      document.getElementsByClassName("confirmation_wrap")[0].classList.remove("display_block");
    }
}

}

function html_content(i){
  html = '';
  html += '<div class="file_item box_shadow" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="'+i+'">';
  html += '<div class="file_item_img_wrap ">';
  html += '<img src="folder.jpeg" class="">';
  html += '</div>';
  html += '<div class="file_item_content_wrap">';
  html += '<div>';
  html += '<span class="bold">'+i+' Title: </span>';
  html += '<span class="title_detail">This is the title</span>';
  html += '</div>';
  html += '<div>';
  html += '<span class="bold">Description: </span>';
  html += '<span class="desc_detail">This is sample description.</span>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
}



function add_files(){
  const  greatest_id = [];

  let i = 0;
  
  while(i < document.getElementsByClassName("target_files")[0].children.length){

    greatest_id[i] = parseInt(document.getElementsByClassName("target_files")[0].children[i].id);

    i++;
  }

    

  while(i < document.getElementsByClassName("files")[0].children.length){
    greatest_id[i] = parseInt(document.getElementsByClassName("files")[0].children[i].id);
    i++;
  }
  
  greatest_id.sort(function(a, b){return a - b});

  console.log(greatest_id,"<-- sorted array");
console.log(greatest_id.length,"<-- arr length");
  let var_largest_id = greatest_id[greatest_id.length - 1];


 var_largest_id++;

    console.log(var_largest_id,"<--- largest");
if(isNaN(var_largest_id)){
  
  // greatest_id[0]=0;
  var_largest_id = 0;
  console.log(greatest_id,"<-- array");
  // var_largest_id = 0;
  console.log(var_largest_id,"<-- largest");
  html_content(var_largest_id);

  document.getElementsByClassName("files")[0].innerHTML +=html;

}else{
html_content(var_largest_id);

  document.getElementsByClassName("files")[0].innerHTML +=html;
  
}
  
}